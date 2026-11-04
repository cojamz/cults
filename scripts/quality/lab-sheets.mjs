// Play-judge folders from the Lab's owner-seat sheets.
// node scripts/quality/lab-sheets.mjs <trial> "<card name>" "<printed text>" [--out <dir>]
// Reads /mnt/project-files/quality/lab/<trial>/sheet-*.md, trims each around the card, writes <out>/<trial>/ with index.json.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { trim } from './trim.mjs';
const args = process.argv.slice(2);
const oi = args.indexOf('--out'), OUT = oi >= 0 ? args.splice(oi, 2)[1] : '/mnt/project-files/quality/evals/play';
const [trial, name, text] = args;
const src = join('/mnt/project-files/quality/lab', trial), dir = join(OUT, trial);
mkdirSync(dir, { recursive: true });
const sheets = readdirSync(src).filter(f => /^sheet-.*\.md$/.test(f)).sort();
const files = [];
for (const f of sheets) {
  const full = readFileSync(join(src, f), 'utf8'), out = `${name.replace(/\W+/g, '-').toLowerCase()}-${f.replace(/^sheet-/, '')}`;
  const t = `# ${name}: ${text}\n\nOne Hard-bot game (deck 10, By color) from the seat that held the card. Sheet from the Lab (${trial}/${f}), trimmed around the card.\n\n` + trim(full, name);
  writeFileSync(join(dir, out), t); files.push({ file: out, words: t.split(/\s+/).length, fullWords: full.split(/\s+/).length });
}
writeFileSync(join(dir, 'index.json'), JSON.stringify({ card: name, text, trial, sheets: files }, null, 1));
console.log(`${dir}: ${files.map(f => `${f.file} ${f.words}/${f.fullWords} words`).join(', ')}`);
