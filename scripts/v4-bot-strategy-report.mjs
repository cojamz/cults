// Reads scripts/v4-bot-strategy-audit.mjs output files and prints the timing summary in plain words.
//   node scripts/v4-bot-strategy-report.mjs <a.json> [b.json …]
import { readFileSync } from 'node:fs';

const games = process.argv.slice(2).flatMap(f => JSON.parse(readFileSync(f, 'utf8')));
const by = {};
let early = 0, uses = 0, wasted = 0, held = 0, lost = 0;
for (const g of games) for (const r of Object.values(g.cards)) {
  if (r.activate !== 'game') continue;
  const row = (by[r.name] ||= { holders: 0, uses: 0, poor: 0, never: 0, neverGood: 0, lost: 0 });
  row.holders++; held++;
  const best = Math.max(0, ...r.chances.map(c => c.gain));
  if (r.used.length) {
    const got = r.used[0].gain ?? 0;
    row.uses++; uses++;
    // used at under half of the best moment it had, and that moment was worth at least 2 followers more
    if (best - got >= 2 && got < best / 2) { row.poor++; early++; row.lost += best - got; lost += best - got; }
  } else {
    row.never++;
    if (best >= 2) { row.neverGood++; wasted++; row.lost += best; lost += best; }
  }
}
const end = games.flatMap(g => g.end.filter(e => !e.buyer));
const avg = a => (a.length ? (a.reduce((x, y) => x + y, 0) / a.length).toFixed(1) : '-');
console.log(`${games.length} games. Once-a-game members held: ${held}; used ${uses}.`);
console.log(`Used at under half their best moment (2+ followers short): ${early}. Never used though a 2+ follower moment came: ${wasted}. Followers left on the table: ${lost.toFixed(0)}.`);
console.log(`Resources left at game end: ${avg(end.map(e => e.res))} a player (max ${Math.max(...end.map(e => e.res))}). Effects left waiting at the end: ${end.filter(e => e.flags.length).length}.`);
for (const [n, r] of Object.entries(by).sort((a, b) => b[1].lost - a[1].lost)) {
  console.log(`  ${n}: held ${r.holders}, used ${r.uses} (${r.poor} poorly timed), never used ${r.never} (${r.neverGood} with a good moment), ${r.lost.toFixed(1)} followers short`);
}
const holds = games.flatMap(g => g.holds || []);
if (holds.length) {
  const used = holds.filter(h => h.useMean >= h.holdMean).length;
  console.log(`Now-or-later decisions played out: ${holds.length}; used now ${used}, held ${holds.length - used}.`);
}
