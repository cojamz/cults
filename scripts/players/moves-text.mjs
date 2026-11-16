#!/usr/bin/env node
// Compact text of every decision in a player-agents game (who, what, why, feel), for reading a whole game in one go.
//   node scripts/players/moves-text.mjs <game dir> [round]
import fs from 'node:fs';
import path from 'node:path';
const DIR = path.resolve(process.argv[2]); const only = process.argv[3] ? Number(process.argv[3]) : null;
const names = JSON.parse(fs.readFileSync(path.join(DIR, 'meta.json'), 'utf8')).names;
const evs = fs.readFileSync(path.join(DIR, 'events.jsonl'), 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l));
let r = 0; const out = [];
for (const e of evs) {
  if (e.type === 'log') { const m = /^Round (I{1,3}) begins/.exec(e.text); if (m) r = m[1].length; if (/^Round I{1,3} ends/.test(e.text) && (only == null || only === r)) out.push(`## ${e.text}`); continue; }
  if (only != null && (e.round ?? r) !== only) continue;
  if (e.type === 'move' && e.think !== '(only option)') out.push(`[${e.n}] ${names[e.seat]}: ${e.label.slice(0, 110)}\n   ${e.think}`);
  else if (e.type === 'feel') out.push(`   FEEL: ${e.text}`);
  else if (e.type === 'idea') out.push(`   IDEA: ${e.text}`);
  else if (e.type === 'plan') out.push(`PLAN ${names[e.seat]} (${e.decision}): ${e.plan} | FORECAST: ${e.forecast}`);
  else if (e.type === 'diary') out.push(`NOTES ${names[e.seat]}: ${e.text}`);
}
console.log(out.join('\n'));
