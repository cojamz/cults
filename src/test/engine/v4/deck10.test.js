// The two decks (Cory, 2026-10-31): rules.deck = 10 deals 10 members per 2.0 color and 10 grey, 4 joining in round I
// (Blue 5: it has only 4 later members); without it, the 15-card decks.
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

describe('10-card decks', () => {
  it('deals 10 of each 2.0 color and 10 grey, 4 joining in round I (Blue 5)', () => {
    for (let i = 0; i < COLORS.length; i += 4) {
      const table = COLORS.slice(i, i + 4).concat(COLORS.slice(0, Math.max(0, 4 - COLORS.slice(i, i + 4).length)));
      const s = deal(table, 10);
      for (const q of table) expect(count(s, q), q).toEqual({ n: 10, r1: q === 'market' ? 5 : 4 });
      expect(count(s, 'grey')).toEqual({ n: 10, r1: 4 });
    }
  });
  it('without the rule a table deals the bigger decks', () => {
    const s = deal(['red', 'echo', 'thieves', 'purple']);
    expect(count(s, 'echo').n).toBeGreaterThan(10);
    expect(count(s, 'grey').n).toBe(15);
  });
});
