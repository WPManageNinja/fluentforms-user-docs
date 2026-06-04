#!/usr/bin/env node
/**
 * Add SEO-friendly alt text to markdown images with empty alt: ![](url)
 */
import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.join(process.cwd(), 'docs');

const ACRONYMS = new Set([
  'api', 'csv', 'crm', 'cpt', 'gdpr', 'html', 'css', 'url', 'id', 'wpml',
  'ga4', 'gtm', 'sms', 'pdf', 'nps', 'acf', 'ui', 'ux', 'otp', 'wp',
]);

const STOP_WORDS = new Set([
  'scaled', 'fluentform', 'fluentforms', 'fluent', 'forms', 'form',
  'screenshot', 'image', 'webp', 'png', 'jpg', 'jpeg', 'gif',
  'desired', 'example', 'demo', 'new', 'the', 'a', 'an', 'of', 'in', 'to',
]);

/** Fix merged filename tokens for readable SEO alt text */
const WORD_FIXES = [
  [/Postcpt/gi, 'Post CPT'],
  [/Fluentcrm/gi, 'FluentCRM'],
  [/Fluentform/gi, 'Fluent Forms'],
  [/Wpml/gi, 'WPML'],
  [/Recaptcha/gi, 'reCAPTCHA'],
  [/Hcaptcha/gi, 'hCaptcha'],
  [/Turnstile/gi, 'Turnstile'],
  [/Chatgpt/gi, 'ChatGPT'],
  [/Openai/gi, 'OpenAI'],
  [/Googlemaps/gi, 'Google Maps'],
  [/Googlesheets/gi, 'Google Sheets'],
  [/Googleanalytics/gi, 'Google Analytics'],
  [/Authorizenet/gi, 'Authorize.Net'],
  [/Onepagecrm/gi, 'OnePageCRM'],
  [/Amocrm/gi, 'amoCRM'],
  [/Zohocrm/gi, 'Zoho CRM'],
  [/Mailchimp/gi, 'Mailchimp'],
  [/Mailpoet/gi, 'MailPoet'],
  [/Buddyboss/gi, 'BuddyBoss'],
  [/Affiliatewp/gi, 'AffiliateWP'],
  [/Jetengine/gi, 'JetEngine'],
  [/Metabox/gi, 'Meta Box'],
  [/Function\.php/gi, 'functions.php'],
  [/Cpt/gi, 'CPT'],
];

function titleCaseWord(word) {
  const lower = word.toLowerCase();
  if (ACRONYMS.has(lower)) return lower.toUpperCase();
  if (/^\d+$/.test(word)) return word;
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function cleanFilename(basename) {
  let name = basename.replace(/\.(webp|png|jpe?g|gif|svg)$/i, '');
  name = name.replace(/-scaled$/i, '');
  // Strip leading step numbers: "1.-", "5.-", "01-17"
  name = name.replace(/^\d+\.\s*-/i, '');
  name = name.replace(/^\d+\s*[-.]?\s*/i, '');
  // Strip embedded dates/times
  name = name.replace(/\d{1,2}-\d{1,2}-\d{2,4}[_\d:APM\s]+/gi, ' ');
  name = name.replace(/\d{2}-\d{2}(?=-|$)/g, ' ');
  name = name.replace(/[_]+/g, ' ');
  name = name.replace(/[-]+/g, ' ');
  const words = name
    .split(/\s+/)
    .map((w) => w.trim())
    .filter(Boolean)
    .filter((w) => !/^\d+$/.test(w))
    .filter((w) => !STOP_WORDS.has(w.toLowerCase()));
  return words.map(titleCaseWord).join(' ').trim();
}

function shortDocTopic(h1) {
  if (!h1) return '';
  return h1
    .replace(/^How to\s+/i, '')
    .replace(/^Adding\s+/i, '')
    .replace(/^Add\s+/i, '')
    .replace(/\s+in\s+Fluent\s+Forms.*$/i, '')
    .replace(/\s+with\s+Fluent\s+Forms.*$/i, '')
    .replace(/\s+Guide$/i, '')
    .trim();
}

function buildAlt(filename, docTitle, stepIndex) {
  const fromFile = cleanFilename(path.basename(filename));
  let alt = fromFile;

  if (!alt || alt.length < 3) {
    alt = docTitle ? `${shortDocTopic(docTitle)} step ${stepIndex}` : `Fluent Forms step ${stepIndex}`;
  }

  // Prefix with topic when alt is very generic (Edit, Open, Enable, etc.)
  const generic = /^(Open|Edit|Enable|Add|Save|Configure|Select|Click|Preview|Settings?|Tab|Button|Field|Module|Integration|Feed|Form)\b/i;
  const topic = shortDocTopic(docTitle);
  if (topic && generic.test(alt) && !alt.toLowerCase().includes(topic.split(' ')[0].toLowerCase())) {
    const shortTopic = topic.split(/\s+/).slice(0, 4).join(' ');
    alt = `${alt} ${shortTopic}`;
  }

  // Brand short alts for SEO (3 words or fewer)
  if (alt.split(/\s+/).length <= 3 && !/fluent/i.test(alt)) {
    alt = `${alt} Fluent Forms`;
  }

  alt = alt.replace(/\s+/g, ' ').trim();
  // Drop trailing step numbers from filenames (e.g. "Settings 01")
  alt = alt.replace(/\s+\d{1,2}$/, '');
  for (const [re, replacement] of WORD_FIXES) {
    alt = alt.replace(re, replacement);
  }
  if (alt.length > 100) alt = alt.slice(0, 100).trim();
  return alt;
}

function polishAlt(alt) {
  let out = alt
    .replace(/\s+\d{1,3}$/, '')
    .replace(/^\d{1,3}\s+/, '')
    .split(/\s+/)
    .filter((w) => !/^\d+$/.test(w))
    .join(' ');
  for (const [re, replacement] of WORD_FIXES) {
    out = out.replace(re, replacement);
  }
  // Trim redundant trailing "Fluent Forms" when alt is already descriptive
  if (out.split(/\s+/).length > 4) {
    out = out.replace(/\s+Fluent Forms$/i, '');
  }
  return out.replace(/\s+/g, ' ').trim();
}

function walkMdFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) walkMdFiles(full, files);
    else if (entry.endsWith('.md')) files.push(full);
  }
  return files;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const h1 = content.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? '';
  let stepIndex = 0;
  let changed = 0;

  const updated = content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
    if (alt === '') {
      stepIndex += 1;
      const newAlt = buildAlt(url, h1, stepIndex);
      changed += 1;
      return `![${newAlt}](${url})`;
    }
    const polished = polishAlt(alt);
    if (polished !== alt) {
      changed += 1;
      return `![${polished}](${url})`;
    }
    return match;
  });

  if (changed > 0) fs.writeFileSync(filePath, updated);
  return changed;
}

const files = walkMdFiles(DOCS_DIR);
let total = 0;
let fileCount = 0;

for (const f of files) {
  const n = processFile(f);
  if (n > 0) {
    total += n;
    fileCount += 1;
  }
}

console.log(`Updated ${total} images across ${fileCount} files.`);
