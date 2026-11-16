// How often the deck runs out and the discard pile is shuffled back in, by round (Cory, Nov 14: "the discard pile
// coinciding with the end of round 3 often shuffling back in is tough"). Usage: DECK=10 node scripts/v4-reshuffle-count.mjs [games=60] [players=4]
import { createGame, applyMove, chooseBotMove, defaultQuadrants } from '../src/engine/v4/index.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { deckRules } from './lib/deck-choice.mjs';
const games = Number(process.argv[2] || 60), n = Number(process.argv[3] || 4);
const hits = []; let withAny = 0, sizes = { deck: [], discardR3start: [], pileR3start: [] };
for (let g = 1; g <= games; g++) {
  const rand = seededRandom(g * 9973);
  let s = createGame({ seats: Array.from({ length: n }, () => ({ kind: 'bot' })), seed: g, rules: deckRules() });
  let last = 0, any = false, seenR3 = false; const t0 = Date.now();
  while (!s.over && Date.now() - t0 < 60000) {
    const before = (s.discard || []).length;
    s = applyMove(s, chooseBotMove(s, rand));
    if (s.round === 3 && !seenR3) { seenR3 = true; sizes.discardR3start.push((s.discard || []).length); sizes.pileR3start.push(s.pile.length); }
    if ((s.reshuffles || 0) > last) {
      last = s.reshuffles; any = true;
      const placed = Object.values(s.slots || {}).flat().length;
      hits.push({ g, round: s.round, placed, discardBefore: before, deckAfter: s.pile.length });
    }
  }
  if (any) withAny++;
}
console.log(`${games} games, ${n} players, table ${defaultQuadrants(n).join(',')}`);
console.log(`games with a reshuffle: ${withAny} of ${games}`);
for (const r of [1, 2, 3]) { const h = hits.filter(x => x.round === r); console.log(`round ${r}: ${h.length} reshuffles; discard pile size just before: ${h.map(x => x.discardBefore).join(',')}; minions already placed that round: ${h.map(x => x.placed).join(',')}`); }
const avg = a => a.length ? (a.reduce((x, y) => x + y, 0) / a.length).toFixed(1) : '-';
console.log(`at round III start: deck avg ${avg(sizes.pileR3start)}, discard avg ${avg(sizes.discardR3start)}`);
