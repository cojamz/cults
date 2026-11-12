// Cory, Nov 12 (round II, 3 players, once-a-game +1 setting): mid-turn on a white space whose +1 someone already claimed,
// Splurge's hover said "+1 white". The turn's owed +1 cut (state.econOwed) ends with that turn; a dry run of the next
// space never pays it.
import { describe, it, expect } from 'vitest';
import { previewSpace } from '../../../engine/v4/preview.js';
import { sceneQ, spaceOf } from './cards-helpers.js';

describe('a dry run starts after the turn in progress', () => {
  it("Splurge previews +2 white while this turn still owes a claimed +1's cut", () => {
    const s = sceneQ({ quadrants: ['trading', 'market', 'thieves', 'silver'], round: 2, n: 3, rules: { plus1: 'game' } });
    const [q, i] = spaceOf(s, 'Splurge').split('-').map(Number);
    s.econOwed = { pid: 0, color: 'white', n: 1 };
    expect(previewSpace(s, 0, q, i).you.res.white).toEqual([2, 2]);
    expect(s.econOwed).toEqual({ pid: 0, color: 'white', n: 1 }); // the table itself is untouched
  });
});
