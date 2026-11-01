// @vitest-environment node
// All piles leaves Blue out (Cory, 2026-11-01: "the piles game shouldn't be able to use blue"): a classic or random table
// takes another color in its place; a custom table with Blue says why it can't start. Other shops keep Blue.
import { describe, it, expect } from 'vitest';
import { fitTable, tableProblem, NO_PILES } from '../../v4/tables.js';

describe('All piles tables', () => {
  for (const n of [2, 3, 4]) it(`classic, ${n} players: no Blue, a playable table of ${n}`, () => {
    const t = fitTable({ mode: 'classic' }, n, 'all').quadrants;
    expect(t).toHaveLength(n);
    expect(t).not.toContain(NO_PILES);
    expect(tableProblem(t, n, 'all')).toBe('');
    expect(fitTable({ mode: 'classic' }, n, 'deck').quadrants).toContain(NO_PILES);
    expect(fitTable({ mode: 'classic' }, n, 'grey').quadrants).toContain(NO_PILES);
  });
  it('a custom table with Blue says it can’t play All piles', () => {
    const t = fitTable({ mode: 'custom', quadrants: ['market', 'red', 'yellow', 'purple'] }, 4, 'all').quadrants;
    expect(tableProblem(t, 4, 'all')).toMatch(/doesn't play with All piles/);
    expect(tableProblem(t, 4, 'deck')).toBe('');
  });
});
