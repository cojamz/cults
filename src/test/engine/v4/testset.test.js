// The test version (Cory, Nov 8: "create an alt-like version here with these, like, try it ones baked in").
import { describe, it, expect } from 'vitest';
import { createGame, spacesOf } from '../../../engine/v4/index.js';

const seats = [{ kind: 'bot' }, { kind: 'bot' }, { kind: 'bot' }, { kind: 'bot' }];
const Q = ['thieves', 'silver', 'trading', 'market'];
const Q2 = ['echo', 'yellow', 'market', 'trading'];
const defs = s => new Set(Object.values(s.cards).map(c => c.def));

describe('Test version (rules.testSet)', () => {
  it('swaps six spaces in place, same round and spot', () => {
    const t = { rules: { testSet: true } }, live = { rules: {} };
    const want = { thieves: ['Shake Down', 'Protection Racket'], silver: ['Polish', 'Round Robin'], trading: ['Estate Sale', 'Bequest'], market: ['Bury', 'Rummage'], echo: ['Greatest Hits', 'Medley'], yellow: ['Melting Pot', 'Swap Meet'] };
    for (const [q, [out, inn]] of Object.entries(want)) {
      const a = spacesOf(live, q), b = spacesOf(t, q);
      const i = a.findIndex(x => x.name === out);
      expect(i).toBeGreaterThanOrEqual(0);
      expect(b[i].name).toBe(inn);
      expect(b[i].ring).toBe(a[i].ring);
      expect(b.filter((x, k) => k !== i).map(x => x.name)).toEqual(a.filter((x, k) => k !== i).map(x => x.name));
    }
  });
  it('deals the four candidate members, without Recluse, Misers and Regular', () => {
    const d = defs(createGame({ seats, seed: 3, quadrants: Q, rules: { deck: 10, testSet: true } }));
    for (const id of ['trading.anchorites', 'trading.oldguard', 'market.repossessors', 'benders.protesters']) expect(d.has(id)).toBe(true);
    for (const id of ['trading.recluse', 'trading.heirs', 'market.regular']) expect(d.has(id)).toBe(false);
  });
  it('a live game is unchanged', () => {
    const d = defs(createGame({ seats, seed: 3, quadrants: Q, rules: { deck: 10 } }));
    for (const id of ['trading.anchorites', 'trading.oldguard', 'market.repossessors', 'benders.protesters']) expect(d.has(id)).toBe(false);
    for (const id of ['trading.recluse', 'market.regular']) expect(d.has(id)).toBe(true);
    expect(spacesOf({ rules: {} }, 'market').map(a => a.name)).toContain('Bury');
  });
  it('white and blue decks keep their size', () => {
    for (const q of [Q, Q2]) {
      const a = Object.values(createGame({ seats, seed: 5, quadrants: q, rules: { deck: 10 } }).cards).length;
      const b = Object.values(createGame({ seats, seed: 5, quadrants: q, rules: { deck: 10, testSet: true } }).cards).length;
      expect(b).toBe(a + 1); // Protesters joins the grey members
    }
  });
});
