// A turn moved by name stays itself when an earlier move is taken back (four-player review, Nov 12: Cass's Bide Your Time
// skipped her turn to the end, Nell's Lie Abed put a minion on the Goes Last token, Cass's Flurry took her late turn
// up, then Nell's token minion went back: the Flurry move's place pointed at Vera's turn, which read "Flurry:
// next turn, now").
import { describe, it, expect } from 'vitest';
import { roundOrder } from '../../../engine/v4/core.js';

describe('roundOrder: moves that name their turn', () => {
  const order = [0, 1, 3, 2, 2, 3, 1, 0, 0, 1, 3, 2, 2, 3, 1, 0];
  const base = { round: 2, order };
  it('finds a moved turn by its place in the snake after an earlier move is gone', () => {
    // as left after the Lie Abed move (Nell, 13 → 15) was taken back
    const early = { round: 2, moves: [
      { p: 2, from: 4, to: 15, why: 'Bide Your Time', late: true, src: 4 },
      { p: 2, from: 14, to: 12, why: 'Flurry', src: 4 },
    ] };
    const r = roundOrder({ ...base, early });
    expect(r.order).toEqual([0, 1, 3, 2, 3, 1, 0, 0, 1, 3, 2, 2, 2, 3, 1, 0]);
    expect(r.early[12]).toBe('Flurry');
    expect(r.early[15]).toBe(null);
  });
  it('an old save without names still moves by place', () => {
    const early = { round: 2, moves: [{ p: 2, from: 4, to: 15, why: 'Bide Your Time', late: true }] };
    expect(roundOrder({ ...base, early }).order).toEqual([0, 1, 3, 2, 3, 1, 0, 0, 1, 3, 2, 2, 3, 1, 0, 2]);
  });
});
