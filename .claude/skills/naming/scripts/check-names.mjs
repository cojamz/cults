// Clash and refusal check for candidate names (naming skill, step 4).
//   node .claude/skills/naming/scripts/check-names.mjs --live            every name in play (design/names-approved.md)
//   node .claude/skills/naming/scripts/check-names.mjs "Laggard, Early Birds"
// Flags: already live, shares a word with a live name (Warden/Watchmen-style mix-ups to judge by eye),
// turned down by Cory (.claude/rules/member-names.md "His nos" and references/verdicts.md "No").
// Exit 1 if any candidate is live or refused.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..');
const read = p => readFileSync(join(root, p), 'utf8');
const live = read('design/names-approved.md').split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2).trim());
const norm = s => s.toLowerCase().replace(/[’']/g, "'").replace(/s\b/, '').trim();
const refused = new Map();
const nos = read('.claude/rules/member-names.md').split(/^## /m).find(s => s.startsWith('His nos')) || '';
for (const line of nos.split('\n').filter(l => l.startsWith('- '))) {
  for (const n of line.slice(line.indexOf(':') + 1).replace(/\([^)]*\)/g, '').split(',')) if (n.trim()) refused.set(norm(n.trim().replace(/\.$/, '')), line.slice(2, line.indexOf(':')));
}
const vNo = read('.claude/skills/naming/references/verdicts.md').split(/^## /m).find(s => s.startsWith('No')) || '';
for (const line of vNo.split('\n').filter(l => l.startsWith('- '))) {
  const why = line.slice(2, line.indexOf(':'));
  for (const n of line.slice(line.indexOf(':') + 1).replace(/\([^)]*\)/g, '').split(',')) if (n.trim()) refused.set(norm(n.trim().replace(/\.$/, '')), why);
}
const arg = process.argv.slice(2).join(' ');
if (arg === '--live' || !arg) { console.log(`${live.length} live names:\n` + live.join(', ')); process.exit(0); }
const words = s => s.toLowerCase().split(/[\s-]+/).map(w => w.replace(/s$/, '')).filter(w => w.length > 2 && !['the', 'and', 'of'].includes(w));
let bad = 0;
for (const c of arg.split(',').map(s => s.trim()).filter(Boolean)) {
  const notes = [];
  if (live.some(n => norm(n) === norm(c))) { notes.push('ALREADY LIVE'); bad++; }
  if (refused.has(norm(c))) { notes.push(`REFUSED by Cory (${refused.get(norm(c))})`); bad++; }
  const shared = live.filter(n => norm(n) !== norm(c) && words(n).some(w => words(c).includes(w)));
  if (shared.length) notes.push(`shares a word with live: ${shared.join(', ')} (mix-up?)`);
  console.log(`${c}: ${notes.length ? notes.join('; ') : 'ok'}`);
}
process.exit(bad ? 1 : 0);
