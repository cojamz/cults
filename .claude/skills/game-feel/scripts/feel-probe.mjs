// Feel probe: plays bot games and measures how the game FEELS, not who wins.
// Usage: DECK=10|15 [LEVEL=normal|hard|veryhard] [SEATS=4] [ONLY=red,echo,...] node .claude/skills/game-feel/scripts/feel-probe.mjs <first> <count> [--json=out.json]
// Ask Cory which deck before a balance read; for a feel read alongside a balance thread, use the deck(s) that thread uses.
// Per placement it snapshots every seat when the minion goes down and again when the buy step opens, so the space's own
// effect is separated from the buy. Measures (each maps to a lens in SKILL.md):
//   F-choice  open spaces per placement, and "forced" placements (2 or fewer open)
//   F-dead    placements that gave the taker 1 or less (the +1 every space gives) and no member, and touched nobody
//   F-touch   placements that changed a rival (sting: rival lost something; gift: rival gained) — interaction rate
//   F-burst   gain per placement by round (resources + followers), so round III should feel bigger than round I
//   F-buy     buy steps that pass or can't afford anything (stuck feeling), and member vs follower-card buys by round
//   S-lead    leader after each round: how often the round I / round II leader wins (runaway), last-after-II wins (comeback)
//   S-close   final margin; share of games decided by 3 or fewer followers
//   per space: taker's place in followers when placing (1 = leading; a comeback tool is taken from behind)
//   per space: average gain and its spread by round (spread = the space reads the table; zero spread = a fixed number)
import { writeFileSync } from 'node:fs';
import { createGame, applyMove, followers, memberCount, allQuadrantIds, quadrant } from '../../../../src/engine/v4/index.js';
import { chooseBotMove } from '../../../../src/engine/v4/bots.js';
import { seededRandom } from '../../../../src/engine/v4/rng.js';
import { sphereVersion } from '../../../../src/v4/tables.js';
import { deckRules } from '../../../../scripts/lib/deck-choice.mjs';

const RULES = deckRules();
const args = process.argv.slice(2);
const flags = Object.fromEntries(args.filter(a => a.startsWith('--')).map(a => { const [k, v] = a.slice(2).split('='); return [k, v ?? true]; }));
const [first, count] = args.filter(a => !a.startsWith('--')).map(Number);
const level = process.env.LEVEL || 'normal', seats = Number(process.env.SEATS || 4);
const pool0 = process.env.ONLY ? process.env.ONLY.split(',') : allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
const botOpts = level === 'hard' ? { level, maxMs: Infinity } : { level };

const snap = s => s.players.map(p => ({ f: followers(s, p), r: Object.values(p.res).reduce((a, b) => a + b, 0), m: p.members.length, mc: memberCount(s, p) }));
const T = { placements: 0, forced: 0, open: 0, dead: 0, sting: 0, gift: 0, byRound: {}, buys: {}, games: 0, leadWins: [0, 0], lastWins: 0, close: 0, margin: 0, ties: 0, spaces: {}, members: {} };
const R = r => (T.byRound[r] ??= { n: 0, gain: 0, dead: 0, touch: 0 });
const B = r => (T.buys[r] ??= { steps: 0, pass: 0, member: 0, tier: 0 });

for (let g = first; g < first + (count || 1); g++) {
  const rand = seededRandom(g * 7717 + 3 + seats * 101);
  const pool = [...pool0], quads = [];
  while (quads.length < seats) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: Array.from({ length: seats }, () => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: RULES });
  let open = null, lastRound = s.round, roundLeaders = [];
  let guard = 0;
  while (!s.over && ++guard < 6000) {
    const pd = s.pending, pl = pd.player;
    if (s.round !== lastRound) { if (lastRound >= 1) roundLeaders[lastRound - 1] = s.players.map(p => followers(s, p)); lastRound = s.round; }
    if (pd.kind === 'place' && pd.options.some(o => o.kind === 'slot' || o.kind === 'squat')) {
      const m = chooseBotMove(s, rand, botOpts);
      const o = pd.options.find(x => x.id === m.option);
      if (o && (o.kind === 'slot' || o.kind === 'squat')) {
        const a = quadrant(s.quadrants[o.q]).actions[o.i];
        const n = pd.options.filter(x => x.kind === 'slot').length;
        T.placements++; T.open += n; if (n <= 2) T.forced++;
        const fs = s.players.map(p => followers(s, p)), rank = 1 + fs.filter(v => v > fs[pl]).length;
        open = { pl, rank, round: s.round, key: `${quadrant(s.quadrants[o.q]).name}: ${a.name}`, before: snap(s) };
      }
      s = applyMove(s, m); continue;
    }
    if (pd.kind === 'buy' && !pd.afterPurchase && open && open.pl === pl) close(s);
    if (pd.kind === 'buy' && !pd.afterPurchase && !pd.extra) {
      const m = chooseBotMove(s, rand, botOpts), b = B(s.round); b.steps++;
      if (!pd.options.length || m.option === 'pass') b.pass++; else if (String(m.option).startsWith('tier:')) b.tier++; else if (String(m.option).startsWith('card:')) b.member++;
      s = applyMove(s, m); continue;
    }
    if (pd.kind === 'place' && open) close(s);
    s = applyMove(s, chooseBotMove(s, rand, botOpts));
  }
  if (!s.over) continue;
  T.games++;
  const fin = s.players.map(p => followers(s, p)), top = Math.max(...fin);
  const sorted = [...fin].sort((a, b) => b - a); T.margin += sorted[0] - sorted[1]; if (sorted[0] - sorted[1] <= 3) T.close++; if (sorted[0] === sorted[1]) T.ties++;
  roundLeaders.slice(0, 2).forEach((f, i) => { const mx = Math.max(...f); if (f.some((v, j) => v === mx && fin[j] === top)) T.leadWins[i]++; });
  if (roundLeaders[1]) { const mn = Math.min(...roundLeaders[1]); if (roundLeaders[1].some((v, j) => v === mn && fin[j] === top)) T.lastWins++; }

  function close(s2) {
    const after = snap(s2), b = open.before, me = open.pl;
    const gain = after[me].f - b[me].f + after[me].r - b[me].r;
    const memberMove = after[me].m !== b[me].m;
    let sting = false, gift = false;
    after.forEach((x, j) => { if (j === me) return; const d = x.f - b[j].f + x.r - b[j].r + 3 * (x.m - b[j].m); if (d < 0) sting = true; if (d > 0) gift = true; });
    const r = R(open.round); r.n++; r.gain += gain;
    const dead = gain <= 1 && !memberMove && !sting && !gift; // only the +1 every space gives, or less
    if (dead) { T.dead++; r.dead++; }
    if (sting) T.sting++; if (gift) T.gift++; if (sting || gift) r.touch++;
    const sp = (T.spaces[open.key] ??= {}); const x = (sp[open.round] ??= { n: 0, sum: 0, sq: 0, dead: 0, touch: 0, rank: 0 });
    x.n++; x.rank += open.rank; x.sum += gain; x.sq += gain * gain; if (dead) x.dead++; if (sting || gift) x.touch++;
    open = null;
  }
}

const pct = (a, b) => `${Math.round((100 * a) / (b || 1))}%`;
console.log(`Feel probe: ${T.games} games, ${seats} seats, ${level} bots, ${RULES.deck || 15}-card decks.`);
console.log(`Choice: ${(T.open / T.placements).toFixed(1)} open spaces per placement; forced (2 or fewer open) ${pct(T.forced, T.placements)}.`);
console.log(`Dead placements (1 or less, no member, touched nobody): ${pct(T.dead, T.placements)}. Touched a rival: sting ${pct(T.sting, T.placements)}, gift ${pct(T.gift, T.placements)}.`);
for (const [r, x] of Object.entries(T.byRound)) console.log(`  round ${r}: gain ${(x.gain / x.n).toFixed(1)} per placement, dead ${pct(x.dead, x.n)}, touched a rival ${pct(x.touch, x.n)}`);
for (const [r, b] of Object.entries(T.buys)) console.log(`  round ${r} buys: member ${pct(b.member, b.steps)}, follower card ${pct(b.tier, b.steps)}, pass or nothing affordable ${pct(b.pass, b.steps)}`);
console.log(`Leads: round I leader wins ${pct(T.leadWins[0], T.games)}, round II leader wins ${pct(T.leadWins[1], T.games)}, last after round II wins ${pct(T.lastWins, T.games)} (even ${pct(1, seats)}).`);
console.log(`Finish: margin ${(T.margin / T.games).toFixed(1)}; within 3 followers ${pct(T.close, T.games)}; tied ${pct(T.ties, T.games)}.`);
console.log('\nSpaces (gain per placement by round, ± spread; dead share; touched a rival):');
for (const [k, rs] of Object.entries(T.spaces).sort()) {
  const parts = Object.entries(rs).map(([r, x]) => { const m = x.sum / x.n, sd = Math.sqrt(Math.max(0, x.sq / x.n - m * m)); return `R${r} ${m.toFixed(1)}±${sd.toFixed(1)} (${x.n}, taker place ${(x.rank / x.n).toFixed(1)}${x.dead ? `, dead ${pct(x.dead, x.n)}` : ''}${x.touch ? `, touch ${pct(x.touch, x.n)}` : ''})`; });
  console.log(`  ${k}: ${parts.join(' · ')}`);
}
if (flags.json) writeFileSync(flags.json, JSON.stringify(T, null, 1));
