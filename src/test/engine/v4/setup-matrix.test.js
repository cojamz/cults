// @vitest-environment node
// Setup options together (Cory, Nov 3: "i worry we have a LOT of alt setups and not everything will work together").
// A small slice of scripts/v4-setup-matrix.mjs (which plays every combination): each shop with the swap card and By
// color contests, live rules (cloaks, cull, round decks), every invariant after every move. The two bugs the full
// matrix found are pinned here: a swap with a Grey pile's top grew the face-up row past its size, and a choice queued
// after a pile swap still offered the copy that went back under its pile.
import { describe, it, expect } from 'vitest';
import { shopSize } from '../../../engine/v4/core.js';
import { runTable } from './fuzz-tables-runner.js';
import { fitTable } from '../../../v4/tables.js';

const LIVE = { cull: true, artifacts: true, roundDecks: 2, deck: 10 };

describe('setup options together', () => {
  for (const shop of ['deck', 'grey', 'all']) for (const late of [2, 3]) {
    it(`4 players, ${shop} shop, round III members in round ${late === 2 ? 'II' : 'III'}, swap card, By color`, () => {
      const quadrants = fitTable({ mode: 'classic' }, 4, shop).quadrants;
      const rules = { ...LIVE, roundDecks: late, swapCard: true, contests: 'byColor', ...(shop === 'deck' ? {} : { shop }) };
      const rows = [];
      const { state } = runTable({ quadrants, n: 4, seed: 77 + late, kind: 'bot', rules, onMove: (prev, s) => {
        if (s.supply && s.round >= 1) rows.push(s.shop.filter(u => s.supply[s.cards[u].def] === undefined).length - (s.rules.piles.only ? 0 : shopSize(s)));
      } });
      expect(state.over).toBe(true);
      expect(rows.filter(d => d > 0)).toEqual([]); // the face-up row never grows past its size
    });
  }

  // the two games the full matrix caught (seeds as scripts/v4-setup-matrix.mjs numbers them); both failed the shared
  // invariants before the fix: the row at 9 in round III, and a Demote copy offering a Party Crasher gone under its pile
  const LIVE15 = { cull: true, artifacts: true, roundDecks: 2 };
  it('Grey piles + swap card: Anarchist swapping for a pile top keeps the row at its size', () => {
    const { state } = runTable({ quadrants: ['echo', 'red', 'yellow', 'purple'], n: 4, seed: 1077, kind: 'bot', rules: { ...LIVE15, swapCard: true, shop: 'grey' } });
    expect(state.over).toBe(true);
  });
  it('All piles: a choice queued after a pile swap offers only copies still face up', () => {
    const { state } = runTable({ quadrants: ['echo', 'red', 'yellow', 'purple'], n: 4, seed: 1057, kind: 'bot', rules: { ...LIVE15, shop: 'all' } });
    expect(state.over).toBe(true);
  });
});
