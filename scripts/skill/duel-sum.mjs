// Sums a v4-bot-duel .jsonl: seats won by A and B, and followers per seat A minus B over tables played both ways.
import { readFileSync } from 'node:fs';
const rows = readFileSync(process.argv[2], 'utf8').trim().split('\n').map(l => JSON.parse(l));
const by = {};
for (const r of rows) (by[r.g] ||= []).push(r);
let wa = 0, wb = 0, games = 0, aTop = 0; const diffs = [];
for (const g in by) {
  const pair = by[g]; if (pair.length < 2) { console.log('half table', g); continue; }
  let d = 0;
  for (const r of pair) { games++; let aw = false; r.who.forEach((x, i) => { d += (x === 'A' ? 1 : -1) * r.followers[i] / 2; if (r.won[i]) { x === 'A' ? wa++ : wb++; if (x === 'A') aw = true; } }); if (aw) aTop++; }
  diffs.push(d / 2);
}
const m = diffs.reduce((a, b) => a + b, 0) / diffs.length, sd = Math.sqrt(diffs.reduce((a, b) => a + (b - m) ** 2, 0) / (diffs.length - 1));
const avg = side => { let s = 0, n = 0; for (const r of rows) r.who.forEach((x, i) => { if (x === side) { s += r.followers[i]; n++; } }); return (s / n).toFixed(1); };
console.log(`${games} games; winners A ${wa}, B ${wb}; a game had an A winner ${aTop} of ${games} (${(100 * aTop / games).toFixed(0)}%); avg followers A ${avg('A')} B ${avg('B')}; A-B per seat ${m.toFixed(2)} ± ${(sd / Math.sqrt(diffs.length)).toFixed(2)}`);
