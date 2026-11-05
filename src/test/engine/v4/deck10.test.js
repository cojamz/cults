// The two decks (Cory, 2026-10-31): rules.deck = 10 deals 10 members per 2.0 color and 10 grey, 4 joining in round I
// (Blue 5: it has only 4 later members; Yellow 5 since Jack-of-All-Trades, a round I member, took round II Tastemaker's
// place, Nov 4); without it, the 15-card decks.
import { describe, it, expect } from 'vitest';
import { createGame } from '../../../engine/v4/index.js';
import { defById } from '../../../engine/v4/content/index.js';
import { joinsRound } from '../../../engine/v4/core.js';

const COLORS = ['red', 'echo', 'thieves', 'purple', 'market', 'trading', 'yellow'];
const deal = (quadrants, deck) => createGame({ seats: quadrants.map(() => ({ kind: 'bot' })), seed: 7, quadrants, rules: { cull: true, artifacts: true, roundDecks: 2, ...(deck ? { deck } : {}) } });
const count = (s, color) => {
  const all = [...s.pile, ...s.shop, ...Object.values(s.waiting).flat()].map(u => defById(s.cards[u].def));
  const mine = all.filter(d => (color === 'grey' ? !s.quadrants.includes(d.quadrant) : d.quadrant === color));
  return { n: mine.length, r1: mine.filter(d => joinsRound(s, d) === 1).length };
};

// round I members by color since Nov 5 (only members at 3 or less before the +1 wild)
// round I up to 5 as a player sees it (Cory, Nov 5 10:22pm UTC: "with the price increase, we should move it to 5")
const R1 = { red: 5, echo: 4, thieves: 3, purple: 7, market: 6, trading: 5, yellow: 3 };
// fewer than 10 where Cory's Nov 5 cuts left holes (Grifter, Cutpurse; Early Birds; Shopaholics; Raiders; Meddler, Gardeners), until he picks their replacements
const N = { red: 10, echo: 10, thieves: 10, purple: 9, market: 9, trading: 9, yellow: 10 };

describe('10-card decks', () => {
  it('deals 10 of each 2.0 color and 12 grey (Cheerleaders and Victors, Nov 4); round I gets only the cheap ones (Cory, Nov 5)', () => {
    for (let i = 0; i < COLORS.length; i += 4) {
      const table = COLORS.slice(i, i + 4).concat(COLORS.slice(0, Math.max(0, 4 - COLORS.slice(i, i + 4).length)));
      const s = deal(table, 10);
      for (const q of table) expect(count(s, q), q).toEqual({ n: N[q], r1: R1[q] });
      expect(count(s, 'grey')).toEqual({ n: 12, r1: 7 });
    }
  });
  it('without the rule a table deals the bigger decks', () => {
    const s = deal(['red', 'echo', 'thieves', 'purple']);
    expect(count(s, 'echo').n).toBeGreaterThan(10);
    expect(count(s, 'grey').n).toBe(17);
  });
});
