import fs from 'fs';
import path from 'path';

const ROOT = path.join(process.cwd(), 'docs');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith('.md')) files.push(full);
  }
  return files;
}

function pickSide(head, incoming) {
  const h = head.trim();
  const i = incoming.trim();
  if (!h) return i;
  if (!i) return h;

  // Incoming fixes copy-paste "coupon field" errors and typos (SmartCodes)
  if (/coupon field/i.test(h) && !/coupon field/i.test(i)) return i;
  if (/SamrtCodes/i.test(h) && /SmartCodes/i.test(i)) return i;

  // HEAD has descriptive link text; incoming says "read this Documentation"
  if (/read this \[Documentation\]/i.test(i) && h.includes('](/')) {
    // Use incoming field text but HEAD-style descriptive links
    const linkMatch = h.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const fieldPart = i.replace(/\s*To learn more, read this \[Documentation\]\([^)]+\)\.?\s*/i, '');
      const link = linkMatch[2].replace(/^\/docs\//, '/');
      return `${fieldPart.trim()} To learn more, read [${linkMatch[1]}](${link}).`;
    }
  }

  // HEAD has internal link in intro; incoming plain
  if (h.includes('](/') && !i.includes('](/')) return h;

  // HEAD has Fluent Forms + link; incoming plain Fluent Forms
  if (/Fluent Forms/i.test(h) && h.includes('](/') && !i.includes('](/')) return h;

  // Duplicate H1/title lines — prefer incoming (new slug titles)
  if (h.startsWith('#') && i.startsWith('#')) return i;

  // Default: incoming (cleaner restructure branch)
  return i;
}

function normalizeLinks(text) {
  return text
    .replace(/\]\(\/docs\//g, '](/')
    .replace(/set-up-forms-with-conditional-logic-in-fluent-forms/g, 'set-up-forms-with-conditional-logic')
    .replace(/how-to-create-a-form-with-fluent-forms/g, 'create-a-form')
    .replace(/using-and-customizing-pre-built-quick-forms-in-fluent-forms/g, 'using-and-customizing-pre-built-quick-forms')
    .replace(/numeric-calculation-in-fluent-forms/g, 'numeric-calculation');
}

function processContent(content) {
  const pattern = /<<<<<<< HEAD(?::[^\n]*)?\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> tajulauthlab(?::[^\n]*)?\n/g;
  return content.replace(pattern, (_, head, incoming) => {
    const resolved = normalizeLinks(pickSide(head, incoming));
    return resolved.endsWith('\n') ? resolved : resolved + '\n';
  });
}

let fixed = 0;
for (const file of walk(ROOT)) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('<<<<<<< HEAD')) continue;
  const resolved = processContent(content).replace(/\n{3,}/g, '\n\n');
  fs.writeFileSync(file, resolved);
  fixed++;
  console.log(path.relative(process.cwd(), file));
}

const remaining = walk(ROOT).filter((f) => fs.readFileSync(f, 'utf8').includes('<<<<<<< HEAD'));
console.log(`\nResolved ${fixed} file(s).`);
if (remaining.length) {
  console.log('Still conflicted:', remaining.map((f) => path.relative(process.cwd(), f)).join(', '));
  process.exit(1);
}
