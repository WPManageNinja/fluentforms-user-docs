#!/usr/bin/env node
/**
 * Generates branded 1200x630 featured/OG images for every doc page, so a link
 * shared on Slack / X / Facebook / LinkedIn renders a card carrying the page's
 * own title instead of the site logo.
 *
 * Sources: `index.md` (home) and `docs/**\/*.md` (excluding `docs/public/`).
 * Output:  docs/public/images/featured/<doc-slug>.png
 *
 * NAMING RULE — the whole point is that the name is derivable from the URL:
 * this repo's `rewrites` flatten `docs/<section>/[<sub>/]<doc>.md` to `/<doc>`,
 * so doc slugs are already globally unique (see CLAUDE.md, "URL rewrite rule").
 * The featured image is therefore named after that same slug, with the home
 * page using `index.png`. `.vitepress/config.mjs` recomputes the same name from
 * `pageData.relativePath` — keep the two in sync if this rule ever changes.
 *
 * A `default.png` is also emitted as the site-wide fallback for any page with
 * no generated card of its own.
 *
 * Idempotent: skips any output file that already exists unless --force is
 * passed. Run via `npm run featured:generate` (or `featured:regenerate`).
 */

import { readdirSync, statSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const DOCS_DIR = join(REPO_ROOT, 'docs');
const PUBLIC_DIR = join(DOCS_DIR, 'public');
const OUTPUT_DIR = join(PUBLIC_DIR, 'images', 'featured');
const HOME_PATH = join(REPO_ROOT, 'index.md');
const LOGO_PATH = join(PUBLIC_DIR, 'brand-images', 'fluentforms_secondary_logo.png');

const FORCE = process.argv.includes('--force');

// Brand blue is #2C6CFF (custom.css --vp-c-brand-1). The card darkens it into a
// navy so the white title and the logo's #089DFF icon both hold contrast.
const BRAND_BLUE = '#1F4FE0';
const BRAND_NAVY = '#0B1E52';
const EYEBROW_COLOR = '#A8C4FF';
const FONT_STACK = 'Helvetica, Arial, sans-serif';

const CANVAS_W = 1200;
const CANVAS_H = 630;
const MARGIN_X = 80;
const TEXT_MAX_W = 980; // right edge of the title block, leaving the decor clear

// Logo is 556x116; 340px wide keeps the lockup readable without dominating.
const LOGO_W = 340;
const LOGO_X = MARGIN_X;
const LOGO_Y = 78;

const FOOTER_TEXT = 'docs.fluentforms.com';

// -------------------------------------------------------------------------
// File discovery
// -------------------------------------------------------------------------

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (full === PUBLIC_DIR) continue;
      walk(full, files);
    } else if (stat.isFile() && entry.endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

// -------------------------------------------------------------------------
// Naming + labels
// -------------------------------------------------------------------------

/**
 * relPath: path relative to docs/, forward slashes,
 *          e.g. "form-fields/general-fields/dropdown-field.md"
 * Returns { section, slug }.
 */
function buildNameParts(relPath) {
  const parts = relPath.split('/');
  if (parts.length < 2) {
    throw new Error(
      `Invalid path: docs/${relPath} must live inside a section folder ` +
        `(docs/<section>/[<sub-group>/]<slug>.md), never directly under docs/.`
    );
  }
  return {
    section: parts[0],
    slug: parts[parts.length - 1].replace(/\.md$/, ''),
  };
}

function titleCaseSlug(slug) {
  return slug
    .split('-')
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(' ');
}

function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .trim();
}

/** First `# H1` in the file, else the frontmatter title, else the slug. */
function extractTitle(mdPath, fallbackSlug) {
  const content = readFileSync(mdPath, 'utf8');
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const match = line.trim().match(/^#\s+(.+)$/);
    if (match) return stripMarkdown(match[1]);
  }

  // Home page uses `layout: home` with no H1 — fall back to the hero name/text.
  const heroName = content.match(/^\s{2}name:\s*["']?(.+?)["']?\s*$/m);
  const heroText = content.match(/^\s{2}text:\s*["']?(.+?)["']?\s*$/m);
  if (heroName) {
    return heroText ? `${heroName[1]} ${heroText[1]}` : heroName[1];
  }

  return titleCaseSlug(fallbackSlug);
}

function escapeXml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// -------------------------------------------------------------------------
// Title layout
// -------------------------------------------------------------------------
//
// librsvg gives no text metrics back, so line breaking uses an approximation:
// bold Helvetica averages ~0.55em per character across mixed-case English. The
// generator walks font sizes from largest to smallest and takes the first size
// where the title fits the allowed number of lines, so short titles stay big
// and long ones step down instead of overflowing the canvas.

const CHAR_WIDTH_RATIO = 0.55;
const FONT_SIZE_TIERS = [66, 58, 50, 44, 38];
const MAX_LINES = 3;

function wrapAt(title, fontSize) {
  const budget = Math.floor(TEXT_MAX_W / (fontSize * CHAR_WIDTH_RATIO));
  const words = title.split(/\s+/);
  const lines = [];
  let current = '';

  for (const word of words) {
    const attempt = current ? `${current} ${word}` : word;
    if (attempt.length <= budget || !current) {
      current = attempt;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);

  return { lines, budget };
}

function layoutTitle(title) {
  for (const fontSize of FONT_SIZE_TIERS) {
    const { lines } = wrapAt(title, fontSize);
    if (lines.length <= MAX_LINES) return { fontSize, lines };
  }

  // Longer than every tier allows: keep the smallest size and ellipsize.
  const fontSize = FONT_SIZE_TIERS[FONT_SIZE_TIERS.length - 1];
  const { lines, budget } = wrapAt(title, fontSize);
  lines.length = MAX_LINES;
  lines[MAX_LINES - 1] = `${lines[MAX_LINES - 1].slice(0, budget - 1).replace(/\s+$/, '')}…`;
  return { fontSize, lines };
}

// -------------------------------------------------------------------------
// SVG template
// -------------------------------------------------------------------------

function buildSvg({ title, eyebrow }) {
  const { fontSize, lines } = layoutTitle(title);
  const lineHeight = Math.round(fontSize * 1.2);

  // The title block is bottom-anchored above the footer so cards with one,
  // two or three lines all share the same optical baseline.
  const blockBottom = 500;
  const firstBaseline = blockBottom - (lines.length - 1) * lineHeight;

  const tspans = lines
    .map(
      (line, i) =>
        `<tspan x="${MARGIN_X}" y="${firstBaseline + i * lineHeight}">${escapeXml(line)}</tspan>`
    )
    .join('');

  return `<svg width="${CANVAS_W}" height="${CANVAS_H}" viewBox="0 0 ${CANVAS_W} ${CANVAS_H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BRAND_BLUE}"/>
      <stop offset="100%" stop-color="${BRAND_NAVY}"/>
    </linearGradient>
  </defs>
  <rect width="${CANVAS_W}" height="${CANVAS_H}" fill="url(#bg)"/>
  <circle cx="1130" cy="570" r="270" fill="#FFFFFF" opacity="0.05"/>
  <circle cx="1050" cy="655" r="165" fill="#FFFFFF" opacity="0.06"/>
  <rect x="${MARGIN_X - 24}" y="0" width="4" height="${CANVAS_H}" fill="#FFFFFF" opacity="0.10"/>
  <text x="${MARGIN_X}" y="268" font-family="${FONT_STACK}" font-size="22" font-weight="700" letter-spacing="4" fill="${EYEBROW_COLOR}">${escapeXml(
    eyebrow.toUpperCase()
  )}</text>
  <text font-family="${FONT_STACK}" font-weight="700" font-size="${fontSize}" fill="#FFFFFF">${tspans}</text>
  <text x="${MARGIN_X}" y="574" font-family="${FONT_STACK}" font-size="18" font-weight="400" letter-spacing="1" fill="#FFFFFF" opacity="0.60">${FOOTER_TEXT}</text>
</svg>`;
}

// -------------------------------------------------------------------------
// Rendering
// -------------------------------------------------------------------------

async function renderCard({ title, eyebrow, outPath, logo }) {
  const svg = buildSvg({ title, eyebrow });
  await sharp(Buffer.from(svg))
    .composite([{ input: logo, left: LOGO_X, top: LOGO_Y }])
    // Flat gradient + text compresses far better at max effort, and this is lossless:
    // ~30 KB per card instead of ~82 KB, i.e. ~7 MB in the repo instead of ~20 MB.
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(outPath);
}

// -------------------------------------------------------------------------
// Main
// -------------------------------------------------------------------------

async function main() {
  if (!existsSync(LOGO_PATH)) {
    throw new Error(`Logo source not found at ${LOGO_PATH}`);
  }
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Resized once and reused for every card — 226 re-decodes of the same PNG is
  // the difference between a few seconds and a minute on a full regenerate.
  const logo = await sharp(LOGO_PATH).resize({ width: LOGO_W }).png().toBuffer();

  const jobs = [];

  // Site-wide fallback card.
  jobs.push({
    outPath: join(OUTPUT_DIR, 'default.png'),
    title: 'Fluent Forms Documentation',
    eyebrow: 'Documentation',
  });

  // Home page.
  if (existsSync(HOME_PATH)) {
    jobs.push({
      outPath: join(OUTPUT_DIR, 'index.png'),
      title: extractTitle(HOME_PATH, 'fluent-forms'),
      eyebrow: 'Documentation',
    });
  }

  // Every doc page.
  for (const filePath of walk(DOCS_DIR).sort()) {
    const relPath = relative(DOCS_DIR, filePath).split(sep).join('/');
    const { section, slug } = buildNameParts(relPath);
    jobs.push({
      outPath: join(OUTPUT_DIR, `${slug}.png`),
      title: extractTitle(filePath, slug),
      eyebrow: titleCaseSlug(section),
    });
  }

  let generated = 0;
  let skipped = 0;

  for (const job of jobs) {
    if (existsSync(job.outPath) && !FORCE) {
      skipped++;
      continue;
    }
    await renderCard({ ...job, logo });
    generated++;
  }

  console.log(`Featured images: generated ${generated}, skipped ${skipped}.`);

  // A renamed or deleted doc leaves its card behind, and nothing else would ever
  // notice. Report them rather than deleting — the call is the author's.
  const expected = new Set(jobs.map((job) => job.outPath.split(sep).pop()));
  const orphans = readdirSync(OUTPUT_DIR).filter(
    (name) => name.endsWith('.png') && !expected.has(name)
  );
  if (orphans.length) {
    console.log(
      `\n${orphans.length} card(s) no longer match a doc — delete them if the page is gone:`
    );
    orphans.forEach((name) => console.log(`  docs/public/images/featured/${name}`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
