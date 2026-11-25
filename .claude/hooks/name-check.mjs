// Refuses member names Cory already turned down (Cory, Nov 24: "i dont want to have to manually fix your bad ideas
// for every member"). The refused list is read from .claude/rules/member-names.md, section "His nos".
//
//   node .claude/hooks/name-check.mjs --list "Tavern Keeper, Witch Hunter"   check candidates before a list is made
//   node .claude/hooks/name-check.mjs <<'EOF' (message) EOF                  check a message (presend runs this)
// Exit 1 with the reasons when a refused name is pitched.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const guide = readFileSync(join(root, '.claude/rules/member-names.md'), 'utf8');
const nos = guide.split(/^## /m).find(s => s.startsWith('His nos')) || '';
const refused = new Map();
for (const line of nos.split('\n').filter(l => l.startsWith('- '))) {
  const why = line.slice(2, line.indexOf(':'));
  const names = line.slice(line.indexOf(':') + 1).replace(/\([^)]*\)/g, '').split(',').map(s => s.trim().replace(/\.$/, '').trim()).filter(Boolean);
  for (const n of names) refused.set(n.toLowerCase(), why);
}
const norm = s => s.toLowerCase().replace(/[’']/g, "'").trim();
const args = process.argv.slice(2);
const hits = [];
if (args[0] === '--list') {
  for (const n of args[1].split(',').map(s => s.trim()).filter(Boolean)) if (refused.has(norm(n))) hits.push(`${n}: he turned it down (${refused.get(norm(n))})`);
} else {
  const text = readFileSync(0, 'utf8');
  for (const line of text.split('\n')) {
    if (/\b(today|was|instead of|now called|replaces)\b/i.test(line)) continue; // naming today's card, not pitching it
    for (const m of line.matchAll(/\*\*([^*]+)\*\*/g)) if (refused.has(norm(m[1]))) hits.push(`${m[1]}: he turned it down (${refused.get(norm(m[1]))})`);
  }
}
if (hits.length) { console.log('Refused member names (.claude/rules/member-names.md):\n- ' + hits.join('\n- ')); process.exit(1); }
if (args[0] === '--list') console.log(`OK: none of these were turned down (${refused.size} refused names on file).`);
