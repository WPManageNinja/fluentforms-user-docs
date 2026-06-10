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

let changed = 0;
for (const file of walk(ROOT)) {
  let content = fs.readFileSync(file, 'utf8');
  const next = content
    .split('\n')
    .filter((line) => !/follow the steps with screenshots below/i.test(line))
    .join('\n')
    .replace(/\[\]\(http:\/\/paystack\.com\)\[\]\(http:\/\/paystack\.com\)\[\]\(http:\/\/paystack\.com\)\[Paystack\]/g, '[Paystack](http://paystack.com)')
    .replace(/\n{3,}/g, '\n\n');
  if (next !== content) {
    fs.writeFileSync(file, next);
    changed++;
    console.log(path.relative(process.cwd(), file));
  }
}

console.log(`\nCleaned ${changed} file(s).`);
