// Polish's 4 coins (and every "+1 of which color?" run) taken with one Take play as one step: foldPicks folds your own
// answers to the same question, their gains summed per stack, and the chain flies them in one beat (Cory, Nov 5:
// "Polish animation is slow").
import { describe, it, expect } from 'vitest';
import { applyMove } from '../../../engine/v4/index.js';
import { planChain, foldPicks } from '../../../v4/game/director.js';
import { colorSave } from '../../../../e2e/v4/lib/dialog-save.mjs';

function polishRun(picks) {
  let s = colorSave('polish').state;
  const states = [s];
  for (const c of picks) { s = applyMove(s, { player: 0, option: `color:${c}` }, { effects: true }); states.push(s); }
  return states;
}

describe('foldPicks', () => {
  it('folds your four Polish picks into one step with the gains summed per color', () => {
    const [prev, next, ...rest] = polishRun(['red', 'red', 'gold', 'white']);
    const fold = foldPicks(prev, next, rest, [0]);
    expect(fold.used).toBe(3);
    const tail = rest[2];
    expect(tail.foldedFrom).toBe(prev.moves);
    const got = Object.fromEntries(tail.foldedEffects.map(e => [e.to.r, e.what.n]));
    expect(got).toEqual({ red: 2, gold: 1, white: 1 });
    // one beat: every coin leaves together, so the chain is far shorter than four chains one after the next
    const one = planChain(prev, tail, { mine: [0] });
    const each = [prev, next, ...rest].slice(1).reduce((t, st, i, a) => t + planChain(i ? a[i - 1] : prev, st, { mine: [0] }).total, 0);
    expect(one.total).toBeGreaterThan(0);
    expect(one.total).toBeLessThan(each * 0.6);
  });
  it('folds only the seats it is given, and leaves a lone pick alone', () => {
    const [prev, next, ...rest] = polishRun(['red', 'red', 'gold', 'white']);
    expect(foldPicks(prev, next, rest, [1]).used).toBe(0);
    expect(foldPicks(prev, next, rest, [0, 1]).used).toBeGreaterThan(0);
    expect(foldPicks(prev, next, [], [0]).used).toBe(0);
  });
});
