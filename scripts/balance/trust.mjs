// How far to trust the bots' numbers, two ways, from games already played (no new games here):
//  1. A stronger player at the table: in games where one seat plays Hard (or Very Hard) and the rest Normal
//     (v4-balance.mjs STRONGSEAT), how often the strong seat wins against an even share. If a better player wins much
//     more, Normal leaves a lot on the table and Normal-only findings are weak.
//  2. Do the levels agree: members read under Normal and under Hard, same sign and how close.
// (Until Nov 2 this replayed single decisions over every option; that read Normal as no better than a random move,
// which head-to-head games contradict: one decision's options lead to different games, and the dice swamped it.)
//   node scripts/balance/trust.mjs --mixed=a.jsonl,b.jsonl --normalReport=n.json --hardReport=h.json --json=out.json --md=out.md
import { readFileSync, writeFileSync } from 'node:fs';

const flags = Object.fromEntries(process.argv.slice(2).map(a => { const [k, v] = a.replace(/^--/, '').split('='); return [k, v ?? true]; }));
const rows = String(flags.mixed || '').split(',').filter(Boolean).flatMap(f => readFileSync(f, 'utf8').trim().split('\n').filter(Boolean).map(JSON.parse)).filter(r => !r.stuck && r.strongSeat >= 0);
const pct = x => `${Math.round(x * 100)}%`;
const md = ['## How far to trust the bots', ''];
let n = 0, w = 0, gap = 0;
for (const r of rows) {
  const top = Math.max(...r.players.map(p => p.followers));
  const s = r.players.find(p => p.seat === r.strongSeat);
  const ws = r.players.filter(p => p.followers === top).length;
  n++; if (s.followers === top) w += 1 / ws;
  const others = r.players.filter(p => p.seat !== r.strongSeat);
  gap += s.followers - others.reduce((a, p) => a + p.followers, 0) / others.length;
}
const even = rows.length ? 1 / rows[0].seats : 0.25;
const share = n ? w / n : NaN;
const se = n ? Math.sqrt(share * (1 - share) / n) : 0;
const verdict = !n ? 'UNKNOWN' : share - even < 0.12 ? 'TRUSTED' : share - even < 0.25 ? 'MOSTLY TRUSTED' : 'SUSPECT';
md.push(`Verdict: ${verdict}.`);
if (n) md.push(`A stronger bot (${flags.level || 'Hard'}) in one seat against three Normal bots won ${pct(share)} of ${n} games (even ${pct(even)}, give or take ${Math.round(se * 100)}), ending ${(gap / n).toFixed(1)} followers ahead of the average Normal. The closer to even, the closer Normal plays to strong play, and the more Normal-only numbers can be trusted (under 12 points over even: trusted; over 25: suspect).`);

if (flags.normalReport && flags.hardReport) {
  const N = JSON.parse(readFileSync(flags.normalReport, 'utf8')), H = JSON.parse(readFileSync(flags.hardReport, 'utf8'));
  const hm = Object.fromEntries((H.memberTable || []).map(m => [m.k, m]));
  const both = (N.memberTable || []).filter(m => hm[m.k] && hm[m.k].n >= 30);
  const clear = both.filter(m => Math.abs(m.z) >= 2 || Math.abs(hm[m.k].z) >= 2);
  const agree = clear.filter(m => Math.sign(m.lift) === Math.sign(hm[m.k].lift));
  const xs = both.map(m => m.lift), ys = both.map(m => hm[m.k].lift);
  const mean = a => a.reduce((x, y) => x + y, 0) / (a.length || 1);
  const mx = mean(xs), my = mean(ys);
  const r = xs.length > 2 ? xs.reduce((a, x, i) => a + (x - mx) * (ys[i] - my), 0) / Math.sqrt(xs.reduce((a, x) => a + (x - mx) ** 2, 0) * ys.reduce((a, y) => a + (y - my) ** 2, 0)) : NaN;
  md.push(`Normal and Hard on the same members (${both.length} members with 30+ Hard owners): of the ${clear.length} that stand out under either, ${agree.length} point the same way; overall the two levels' reads move together by ${Number.isFinite(r) ? r.toFixed(2) : 'n/a'} (1 = the same order, 0 = unrelated).`);
  const split = clear.filter(m => Math.sign(m.lift) !== Math.sign(hm[m.k].lift)).map(m => `${m.k} (Normal ${Math.round(m.lift * 100)}, Hard ${Math.round(hm[m.k].lift * 100)})`);
  if (split.length) md.push(`The levels disagree on: ${split.join('; ')}. Findings on these need Hard.`);
}
if (flags.json) writeFileSync(flags.json, JSON.stringify({ verdict, n, share, even }, null, 1));
if (flags.md) writeFileSync(flags.md, md.join('\n') + '\n'); else console.log(md.join('\n'));
