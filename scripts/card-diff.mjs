// Every card or space whose words, cost or worth changed between two commits, so a thread building Cory's call
// can check each change against his words before it ships (Cory, Nov 2: "Build only what you said").
//   node scripts/card-diff.mjs [from=live] [to=HEAD]     (live = main's play/build.json commit)
// Prints one block per changed card; exits 0 with "no card changes" when there are none.
import { execSync } from 'node:child_process';
const sh = c => execSync(c, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
let [from = 'live', to = 'HEAD'] = process.argv.slice(2);
if (from === 'live') {
  try { from = JSON.parse(sh('git show origin/main:play/build.json')).commit; } catch { console.log('card-diff: no live stamp on origin/main; pass a commit'); process.exit(0); }
}
const files = sh(`git diff --name-only ${from} ${to} -- src/engine/v4/content`).split('\n').filter(Boolean);
const FIELD = /\b(name|text|short|cost|f|worth|price|round)\s*:|^.\s*m\('/;
let n = 0;
for (const f of files) {
  const lines = sh(`git diff -U0 ${from} ${to} -- ${f}`).split('\n').filter(l => /^[+-][^+-]/.test(l) && FIELD.test(l));
  if (!lines.length) continue;
  console.log(`\n${f.replace('src/engine/v4/content/', '')}`);
  for (const l of lines) { console.log('  ' + l.slice(0, 1) + ' ' + l.slice(1).trim().slice(0, 220)); n++; }
}
console.log(n ? `\n${n} changed card line(s) since ${from.slice(0, 8)}. Each must match Cory's words in design/decisions.md; undo or ask about anything extra.` : 'card-diff: no card changes');
