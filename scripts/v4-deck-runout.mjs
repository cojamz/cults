// Deck run-out probe (Cory, 2026-10-31: "see how often they run out in round 1 or 2 or 3 with a 50 card deck").
// Bots play 4-seat games on random tables of the 2.0 colors and record, per round, whether the shop ever sat short
// because the pile was empty, how low the pile got, and how many members were recruited.
// Usage: node scripts/v4-deck-runout.mjs <firstGame> <count>
//   DECK=full (today's deck) | ten (each color and grey cut to TEN members at random per game, R1 of them round I)
//   TEN=10 R1=4 SEATS=4 LEVEL=normal KEEP=<file of ids, one per line: a fixed keep list instead of random> MOVE=id=1,...
import { readFileSync } from 'node:fs';
import { createGame, applyMove, quadrant, allQuadrantIds } from '../src/engine/v4/index.js';
import { guestMembers } from '../src/engine/v4/content/index.js';
import { CUT } from '../src/engine/v4/content/cull.js';
import { ARTIFACTS, joinsRound, shopSize, DEFAULT_RULES, ROUND_OF } from '../src/engine/v4/core.js';
import { chooseBotMove } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { sphereVersion } from '../src/v4/tables.js';

const [first, count] = [Number(process.argv[2] || 1), Number(process.argv[3] || 20)];
const deck = process.env.DECK || 'full', TEN = Number(process.env.TEN || 10), R1 = Number(process.env.R1 || 4);
const seats = Number(process.env.SEATS || 4), level = process.env.LEVEL || 'normal';
const keep = process.env.KEEP ? new Set(readFileSync(process.env.KEEP, 'utf8').split(/\s+/).filter(Boolean)) : null;
// MOVE=id=1,id=2 puts a member in another round's deck (as a price change would)
for (const pair of (process.env.MOVE || '').split(',').filter(Boolean)) { const [id, r] = pair.split('='); ROUND_OF[id] = Number(r); }
const pool = allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
const base = new Set(CUT);
const fake = { rules: DEFAULT_RULES };
const rounds = { 1: [], 2: [], 3: [] };
let sizes = [];
for (let g = first; g < first + count; g++) {
  const rand = seededRandom(g * 7717 + 3 + seats * 101);
  const left = [...pool], quads = [];
  while (quads.length < seats) quads.push(left.splice(Math.floor(rand() * left.length), 1)[0]);
  CUT.clear(); for (const id of base) CUT.add(id);
  if (deck === 'ten') {
    const groups = [...quads.map(q => quadrant(q).members), guestMembers()];
    for (const mem of groups) {
      const live = mem.filter(d => !CUT.has(d.id) && !Object.values(ARTIFACTS).includes(d.id) && !d.artifact && !d.retired);
      let picked;
      if (keep) picked = live.filter(d => keep.has(d.id));
      else {
        const sh = a => a.map(d => [rand(), d]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
        const one = sh(live.filter(d => joinsRound(fake, d) === 1)), two = sh(live.filter(d => joinsRound(fake, d) > 1));
        const a = Math.min(R1, one.length), b = Math.min(TEN - a, two.length);
        picked = [...one.slice(0, a), ...two.slice(0, b), ...one.slice(a, a + TEN - a - b)];
      }
      const ids = new Set(picked.map(d => d.id));
      for (const d of live) if (!ids.has(d.id)) CUT.add(d.id);
    }
  }
  let s = createGame({ seats: Array.from({ length: seats }, () => ({ kind: 'bot' })), seed: g, quadrants: quads });
  const total = s.pile.length + s.shop.length + Object.values(s.waiting).flat().length;
  const r1deck = s.pile.length + s.shop.length;
  sizes.push([total, r1deck]);
  const per = {};
  let moves = 0;
  while (!s.over && ++moves < 4000) {
    const m = chooseBotMove(s, rand, { level });
    s = applyMove(s, m);
    const r = s.round; if (!r) continue;
    const x = (per[r] ||= { short: 0, emptyPile: 0, minPile: 99, minShop: 99, recruits: 0 });
    x.minPile = Math.min(x.minPile, s.pile.length); x.minShop = Math.min(x.minShop, s.shop.length);
    if (!s.pile.length) x.emptyPile = 1;
    if (!s.pile.length && s.shop.length < shopSize(s)) x.short = 1;
    x.recruits = s.recruits;
  }
  for (const r of [1, 2, 3]) if (per[r]) rounds[r].push(per[r]);
}
const avg = a => (a.reduce((t, v) => t + v, 0) / a.length);
console.log(`${deck === 'ten' ? `${TEN} per color, ${R1} round I` : 'today\'s deck'}: ${count} games, ${seats} seats, ${level} bots. Deck ${avg(sizes.map(x => x[0])).toFixed(1)} members (round I pile ${avg(sizes.map(x => x[1])).toFixed(1)}).`);
for (const r of [1, 2, 3]) {
  const a = rounds[r]; if (!a.length) continue;
  console.log(`  Round ${r}: shop short ${(100 * avg(a.map(x => x.short))).toFixed(0)}% of games, pile hit 0 in ${(100 * avg(a.map(x => x.emptyPile))).toFixed(0)}%, lowest pile avg ${avg(a.map(x => x.minPile)).toFixed(1)}, recruits avg ${avg(a.map(x => x.recruits)).toFixed(1)}`);
}
