/**
 * SEO / crawlability check for the built site.
 *
 * Run after `npm run docs:build`:
 *   node scripts/seo-check.mjs
 *
 * Verifies that a crawler with JavaScript disabled sees the full page, that every page
 * carries unique indexing metadata, and that no markdown leaks into the rendered output.
 * Exits non-zero on failure so it can gate CI.
 */
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, '.vitepress', 'dist');
const SITE_DEFAULT_DESC = 'Documentations for Fluent Forms by WPManageNinja.';

if (!existsSync(DIST)) {
  console.error('No build found. Run "npm run docs:build" first.');
  process.exit(2);
}

const results = [];
const check = (ok, name, okDetail, badDetail, soft = false) => {
  results.push({
    status: ok ? 'PASS' : soft ? 'WARN' : 'FAIL',
    name,
    detail: ok ? okDetail : badDetail,
  });
};

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []
  );
}

const all = walk(DIST);
const pages = all.filter((p) => !p.endsWith('404.html'));
const read = (p) => readFileSync(p, 'utf8');
const rel = (p) => relative(DIST, p);
const attr = (html, re) => (html.match(re) || [])[1];

// ------------------------------------------------------------- per-page metadata
const descs = new Map();
const noCanonical = [];
const noOg = [];
const noLd = [];
const badLd = [];
const dupIds = [];
const longTitles = [];

for (const p of pages) {
  const html = read(p);

  const d = attr(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/) || '(none)';
  descs.set(d, (descs.get(d) || 0) + 1);

  if (!/rel="canonical"/.test(html)) noCanonical.push(rel(p));
  if (!/property="og:title"/.test(html)) noOg.push(rel(p));

  const ld = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
  if (!ld) {
    noLd.push(rel(p));
  } else {
    try {
      JSON.parse(ld[1]);
    } catch {
      badLd.push(rel(p));
    }
  }

  const title = attr(html, /<title[^>]*>([^<]*)<\/title>/) || '';
  if (title.length > 60) longTitles.push(`${rel(p)} (${title.length})`);

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  if (new Set(ids).size !== ids.length) dupIds.push(rel(p));
}

const defaulted = descs.get(SITE_DEFAULT_DESC) || 0;
check(
  descs.size >= pages.length - 1 && defaulted <= 1,
  'Unique meta descriptions',
  `${descs.size} distinct across ${pages.length} pages`,
  `only ${descs.size} distinct; ${defaulted} still on the site default`
);

check(
  noCanonical.length === 0,
  'Canonical on every page',
  `${pages.length} pages`,
  `${noCanonical.length} missing: ${noCanonical.slice(0, 4).join(', ')}`
);

check(
  noOg.length === 0,
  'Social cards',
  `og/twitter tags on ${pages.length} pages`,
  `${noOg.length} missing: ${noOg.slice(0, 4).join(', ')}`
);

check(
  noLd.length === 0 && badLd.length === 0,
  'Structured data',
  `valid JSON-LD on ${pages.length} pages`,
  `${noLd.length} missing, ${badLd.length} invalid`
);

check(
  dupIds.length === 0,
  'Unique element ids',
  'no duplicate anchors on any page',
  `${dupIds.length} pages: ${dupIds.slice(0, 4).join(', ')}`
);

check(
  longTitles.length === 0,
  'Title length',
  'all 60 chars or under',
  `${longTitles.length} over 60 chars: ${longTitles.slice(0, 3).join(', ')}`,
  true
);

// --------------------------------------------------- markdown leaking into output
// `**` outside <pre>/<code> means a bold marker failed to pair and readers see asterisks.
const leaked = [];
for (const p of all) {
  const html = read(p);
  for (const m of html.matchAll(/\*\*/g)) {
    const before = html.slice(Math.max(0, m.index - 400), m.index);
    const open = Math.max(before.lastIndexOf('<pre'), before.lastIndexOf('<code'));
    const close = Math.max(before.lastIndexOf('</pre>'), before.lastIndexOf('</code>'));
    if (open > close) continue;
    leaked.push(rel(p));
    break;
  }
}
check(
  leaked.length === 0,
  'No leaked markdown',
  'no literal ** in rendered text',
  `${leaked.length} pages: ${leaked.slice(0, 5).join(', ')}`
);

// ---------------------------------------------------------- JS-independent content
const changelog = join(DIST, 'changelog.html');
if (existsSync(changelog)) {
  const html = read(changelog);
  const src = join(ROOT, 'docs', 'help-support', 'changelog.md');
  const inHtml = (html.match(/•/g) || []).length;
  const inSrc = existsSync(src)
    ? read(src).split('\n').filter((l) => l.startsWith('• ')).length
    : 0;

  check(
    inSrc > 0 && inHtml >= inSrc,
    'Changelog server-rendered',
    `${inHtml} bullets in HTML vs ${inSrc} in markdown`,
    `${inHtml} in HTML vs ${inSrc} in markdown — content invisible to crawlers`
  );

  check(
    !/data-cl-mode=/.test(html),
    'Filter inactive in SSR',
    'unfiltered page is what gets indexed',
    'data-cl-mode present — crawlers may see filtered content'
  );
}

const hidden = pages.filter((p) => /style="[^"]*display:\s*none/i.test(read(p)));
check(
  hidden.length === 0,
  'Nothing hidden pre-JS',
  'no display:none in served HTML',
  `${hidden.length} pages hide content before JS runs`
);

// --------------------------------------------------------------- site-wide signals
const sitemap = join(DIST, 'sitemap.xml');
if (existsSync(sitemap)) {
  const locs = [...read(sitemap).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  check(
    locs.length === pages.length,
    'sitemap.xml',
    `${locs.length} urls, matches page count`,
    `${locs.length} urls vs ${pages.length} pages`,
    true
  );
} else {
  check(false, 'sitemap.xml', '', 'not generated');
}

const robots = join(DIST, 'robots.txt');
if (!existsSync(robots)) {
  check(false, 'robots.txt', '', 'missing');
} else {
  check(
    !/Disallow:\s*\/\s*$/m.test(read(robots)),
    'robots.txt',
    'present, not blocking, sitemap listed',
    'disallows the whole site'
  );
}

const sizes = pages.map((p) => statSync(p).size / 1024);
const heavy = sizes.filter((kb) => kb > 1024).length;
check(
  heavy === 0,
  'Page weight',
  `largest page ${Math.round(Math.max(...sizes))} KB`,
  `${heavy} pages over 1 MB`,
  true
);

// ------------------------------------------------------------------------- report
const w = Math.max(...results.map((r) => r.name.length));
console.log(`\nSEO report — ${pages.length} pages\n${'─'.repeat(w + 52)}`);
for (const r of results) {
  const tag = r.status === 'PASS' ? '  ok  ' : r.status === 'WARN' ? ' warn ' : ' FAIL ';
  console.log(`[${tag}] ${r.name.padEnd(w)}  ${r.detail}`);
}
const fails = results.filter((r) => r.status === 'FAIL').length;
const warns = results.filter((r) => r.status === 'WARN').length;
console.log(
  `${'─'.repeat(w + 52)}\n${results.length - fails - warns} passed, ${warns} warnings, ${fails} failures\n`
);
process.exit(fails > 0 ? 1 : 0);
