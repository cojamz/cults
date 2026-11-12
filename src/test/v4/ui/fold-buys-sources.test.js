// A rival's run of follower buys (director.js foldBuys) folds buys at the same follower card into one, but each card's
// followers fly from that card, one card after another (Cory, Nov 12: "followers gained are getting grouped from different
// sources and flying to the player in large batches. i dont like it").
import { it, expect } from 'vitest';
import { foldBuys } from '../../../v4/game/director.js';
import { createGame, applyMove, chooseBotMove } from '../../../engine/v4/index.js';
import { seededRandom } from '../../../engine/v4/rng.js';

const buy = (moves, tier, n, next) => {
  const cause = { kind: 'buy', pid: 1, tier, get: n };
  const st = { round: 3, moves, over: false, pending: next };
  st.effects = [
    { type: 'pay', cause, from: { kind: 'stack', pid: 1, r: 'red' }, to: { kind: 'rate', tier }, what: { r: 'red', n } },
    { type: 'followers', cause, from: { kind: 'rate', tier }, to: { kind: 'count', pid: 1 }, what: { n } },
  ];
  return st;
};

it("a rival's buys at two follower cards fly from each card, in turn; buys at one card stay one flight", () => {
  const mine = { player: 1, kind: 'buy' };
  const prev = { round: 3, moves: 10, over: false, pending: mine };
  const a = buy(11, 'high', 10, mine), b = buy(12, 'high', 10, mine), c = buy(13, 'mid', 5, { player: 2, kind: 'place' });
  const fold = foldBuys(prev, a, [b, c], [0], true);
  expect(fold.used).toBe(2);
  const fols = c.foldedEffects.filter(e => e.type === 'followers');
  expect(fols.map(e => [e.from.tier, e.what.n])).toEqual([['high', 20], ['mid', 5]]);
  const pays = c.foldedEffects.filter(e => e.type === 'pay');
  expect(pays.map(e => [e.to.tier, e.what.n])).toEqual([['high', 20], ['mid', 5]]);
  // each card is its own beat: the causes differ by card
  expect(fols[0].cause.tier).not.toBe(fols[1].cause.tier);
  expect(fols[0].cause.folded).toBe(2);
});

// Gather's, Splurge's and Allowance's followers pay on a recruit but are the space's: they fly from the space, on their
// own, never riding on the recruited member's worth
it("followers a space pays on a recruit fly from that space, not with the recruit", () => {
  let fromSpace = 0;
  for (let seed = 1; seed <= 5; seed++) {
    const rand = seededRandom(seed * 9973);
    let s = createGame({ seats: Array.from({ length: 4 }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed });
    for (let k = 0; k < 800 && !s.over; k++) {
      s = applyMove(s, chooseBotMove(s, rand), { effects: true });
      for (const e of s.effects || []) {
        if (e.type !== 'followers' || !(e.what.n > 0)) continue;
        expect(e.cause.kind).not.toBe('recruit');
        if (e.cause.kind === 'space' && /for recruiting|for spending/.test(s.log.slice(-8).join(' '))) fromSpace++;
      }
    }
  }
  expect(fromSpace).toBeGreaterThan(0);
}, 120000);
