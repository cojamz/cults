#!/usr/bin/env node
// The whole-game facts of one player-agents game, for judging what the players got right and wrong (Cory, Nov 13:
// "review the outputs from the players and see what they're getting right and what they're getting wrong, based on
// the kind of bird's eye view of the game"). Where each player's followers came from, every recruit they spent and on
// what, every contest result, and every member's path between cults.
//   node scripts/players/facts.mjs <game dir> [> facts.md]
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DIR = path.resolve(process.argv[2]);
const rd = n => fs.readFileSync(path.join(DIR, n), 'utf8');
const meta = JSON.parse(rd('meta.json'));
const players = JSON.parse(rd('players.json'));
const data = JSON.parse(execFileSync('node', [path.join(ROOT, 'scripts/v4-expert.mjs'), 'data', DIR], { cwd: ROOT, encoding: 'utf8' }));
const evs = rd('events.jsonl').split('\n').filter(Boolean).map(l => JSON.parse(l));
const names = meta.names;
const ROMAN = ['setup', 'I', 'II', 'III'];
const kindWord = k => ({ exp: 'experienced', new: 'new', plain: 'experienced, no notes' }[k] || k);

// round of each log line: follow "Round X begins"
let r = 0;
const logs = evs.filter(e => e.type === 'log').map(e => { const m = /^Round (I{1,3}) begins/.exec(e.text); if (m) r = m[1].length; return { r, text: e.text }; });
const seatOf = s => names.findIndex(n => s.startsWith(n));

const out = [];
out.push(`# ${path.basename(DIR)}: ${data.table.join(', ')}`, '');
out.push('| Player | Kind | Followers | Bought | Contests | Members held | Abilities paid |', '|---|---|---|---|---|---|---|');
for (const id of data.ranking) {
  const f = data.final[id];
  const led = data.ledger[id] || {};
  const abil = Object.entries(led).map(([k, v]) => `${k} ${v}`).join(', ');
  out.push(`| ${f.name} | ${kindWord(players.kinds[id])} | ${f.followers} | ${f.bought} | ${f.contest} | ${f.members} | ${abil} |`);
}
out.push('', 'Followers not in Bought or Contests come from members\' printed followers and abilities (the ledger counts space and member payouts by name).', '');

// recruits per player per round
out.push('## Recruits spent', '', '| Player | Round | Members | 1-follower buys | 5-follower buys | 10-follower buys |', '|---|---|---|---|---|---|');
const rec = {};
for (const l of logs) {
  const s = seatOf(l.text); if (s < 0) continue;
  const k = `${s}|${l.r}`; rec[k] ||= { m: [], b1: 0, b5: 0, b10: 0 };
  let m;
  if ((m = /^\w+ recruited (.+?) \(/.exec(l.text))) rec[k].m.push(m[1]);
  else if ((m = /^\w+ bought (\d+) followers? /.exec(l.text))) rec[k][`b${m[1]}`]++;
}
for (let s = 0; s < names.length; s++) for (let rr = 1; rr <= 3; rr++) { const x = rec[`${s}|${rr}`]; if (x) out.push(`| ${names[s]} | ${ROMAN[rr]} | ${x.m.join(', ') || '-'} | ${x.b1 || ''} | ${x.b5 || ''} | ${x.b10 || ''} |`); }

out.push('', '## Contests', '');
for (const l of logs) if (/^Round I{1,3} (counts|ends)\./.test(l.text)) out.push(`- ${l.text}`);

out.push('', '## Members changing hands, steals and gifts', '');
for (const l of logs) if (/gives .* to|takes .* from|steal|swap|Write-Off|Mutineer|Kidnap|Body Snatch/i.test(l.text) && !/^Round/.test(l.text)) out.push(`- Round ${ROMAN[l.r]}: ${l.text}`);

out.push('', '## Plans each round', '');
for (const e of evs.filter(x => x.type === 'plan')) out.push(`- ${names[e.seat]}, ${e.start ? 'before round I' : `after round ${ROMAN[e.round]}`} (${e.decision}): ${e.plan}  \n  Forecast: ${e.forecast}`);

out.push('', '## Debriefs', '');
for (const n of names) { try { const d = JSON.parse(rd(`debrief-${n}.json`)); out.push(`### ${n}`, '```', JSON.stringify(d, null, 1), '```'); } catch { /* none */ } }
console.log(out.join('\n'));
