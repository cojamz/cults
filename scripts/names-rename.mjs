// Renames members (and later spaces) in their card files from design/names/*-map.json (Cory, Nov 24: "BIG overhaul.
// Use your judgement and take if from here"). Every quoted literal equal to an old name in that card file becomes the
// new name: the card's own name and the labels its effects run under (asMember finds a card by name, so both must move
// together). Ids stay, so art, saves and tests keyed by id are untouched.
//   node scripts/names-rename.mjs design/names/members-map.json [--dry]
import { readFileSync, writeFileSync } from 'node:fs';
const [map, flag] = process.argv.slice(2);
const spec = JSON.parse(readFileSync(map, 'utf8'));
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
let total = 0;
for (const [file, names] of Object.entries(spec)) {
  const path = `src/engine/v4/content/${file}`;
  let src = readFileSync(path, 'utf8');
  for (const [from, to] of Object.entries(names)) {
    const re = new RegExp(`(['"\`])${esc(from)}\\1`, 'g');
    const n = (src.match(re) || []).length;
    if (!n) { console.log(`MISSING ${file}: ${from}`); continue; }
    src = src.replace(re, (_, q) => q + to + q);
    total += n; console.log(`${file}: ${from} -> ${to} (${n})`);
  }
  if (flag !== '--dry') writeFileSync(path, src);
}
console.log(total + ' literals', flag === '--dry' ? '(dry run)' : 'renamed');
