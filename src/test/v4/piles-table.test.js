// @vitest-environment node
// Both piles shops leave Blue out (Cory, 2026-11-01: "the piles game shouldn't be able to use blue"; "for piles, blue can't
// be in the game"): a classic or random table takes another color in its place; a custom table with Blue says why it can't
// start. The current shop keeps Blue.
import { describe, it, expect } from 'vitest';
import { fitTable, tableProblem, NO_PILES } from '../../v4/tables.js';

describe('Piles tables', () => {
  for (const shop of ['all', 'grey']) for (const n of [2, 3, 4]) it(`${shop} piles, classic, ${n} players: no Blue, a playable table of ${n}`, () => {
    const t = fitTable({ mode: 'classic' }, n, shop).quadrants;
    expect(t).toHaveLength(n);
    expect(t).not.toContain(NO_PILES);
    expect(tableProblem(t, n, shop)).toBe('');
    expect(fitTable({ mode: 'classic' }, n, 'deck').quadrants).toContain(NO_PILES);
  });
  it('a custom table with Blue says it can’t play with piles', () => {
    const t = fitTable({ mode: 'custom', quadrants: ['market', 'red', 'yellow', 'purple'] }, 4, 'all').quadrants;
    expect(tableProblem(t, 4, 'all')).toMatch(/doesn't play with piles/);
    expect(tableProblem(t, 4, 'grey')).toMatch(/doesn't play with piles/);
    expect(tableProblem(t, 4, 'deck')).toBe('');
  });
});
