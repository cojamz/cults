// Polish's 4 coins (and every "+1 of which color?" run) taken with one Take play as one step: foldPicks folds your own
// answers to the same question, their gains summed per stack, and the chain flies them in one beat (Cory, Nov 5:
// "Polish animation is slow").
import { describe, it, expect } from 'vitest';
import { applyMove } from '../../../engine/v4/index.js';
import { planChain, foldPicks } from '../../../v4/game/director.js';
import { setMotionSpeed } from '../../../v4/motion.js';
import { colorSave } from '../../../../e2e/v4/lib/dialog-save.mjs';

// Polish became one pick (Nov 11), so the run of picks is Harvest's ("+3 in round I, +4 in round II, +5 in round III,
// in colors you choose").
function polishRun(picks) {
  let s = colorSave('harvest').state;
  const states = [s];
  for (const c of picks) { s = applyMove(s, { player: 0, option: `color:${c}` }, { effects: true }); states.push(s); }
  return states;
}

describe('foldPicks', () => {
  it('folds your three Harvest picks (round I) into one step with the gains summed per color', () => {
    const [prev, next, ...rest] = polishRun(['red', 'red', 'silver']);
    const fold = foldPicks(prev, next, rest, [0]);
    expect(fold.used).toBe(2);
    const tail = rest[1];
    expect(tail.foldedFrom).toBe(prev.moves);
    const got = Object.fromEntries(tail.foldedEffects.map(e => [e.to.r, e.what.n]));
    expect(got).toEqual({ red: 2, silver: 1 });
    // one beat: every coin leaves together, so the chain is far shorter than four chains one after the next
    const one = planChain(prev, tail, { mine: [0] });
    const each = [prev, next, ...rest].slice(1).reduce((t, st, i, a) => t + planChain(i ? a[i - 1] : prev, st, { mine: [0] }).total, 0);
    expect(one.total).toBeGreaterThan(0);
    expect(one.total).toBeLessThan(each * 0.6);
  });
  it('folds only the seats it is given, and leaves a lone pick alone', () => {
    const [prev, next, ...rest] = polishRun(['red', 'red', 'silver']);
    expect(foldPicks(prev, next, rest, [1]).used).toBe(0);
    expect(foldPicks(prev, next, rest, [0, 1]).used).toBeGreaterThan(0);
    expect(foldPicks(prev, next, [], [0]).used).toBe(0);
  });
  // your own Harvest (Cory, Nov 7: "harvest animation is so slow", "it was mine that felt slow"): at Relaxed your folded
  // picks' coins cross at Steady's pace
  it('flies your own folded picks at Steady pace at Relaxed', () => {
    setMotionSpeed('relaxed');
    try {
      const [prev, next, ...rest] = polishRun(['red', 'red', 'silver']);
      foldPicks(prev, next, rest, [0]);
      const tail = rest[1];
      const mine = planChain(prev, tail, { mine: [0] });
      // the last pick on its own, unfolded, flies one coin at Relaxed's coin pace: the whole folded three land sooner
      const lone = planChain(rest[0], tail, { mine: [0] });
      expect(mine.total).toBeGreaterThan(0);
      expect(mine.total).toBeLessThan(lone.total * 0.8);
    } finally { setMotionSpeed('steady'); }
  });
});

// Sweet Talk (Cory, Nov 9: "sweet talk decisions all happen then animations. not animation for each resource"): every
// silver turned, set on one card and sent at once, plays as one step: the silver paid summed, the colors got summed
import { createGame, resume, actionAt } from '../../../engine/v4/core.js';
import { useRetired } from '../../engine/v4/helpers.js';
useRetired(['silver.tongue']); // Sweet Talk left the wheel Nov 11; its fold stays tested
function sweetRun(picks) {
  const s0 = createGame({ seats: [0, 1, 2].map(i => ({ name: `P${i + 1}`, kind: 'bot' })), seed: 7, quadrants: ['gold', 'red', 'blue', 'silver'] });
  s0.queue = []; s0.pending = null; s0.round = 2; s0.slots = {}; s0.order = []; s0.log = [];
  s0.players.forEach(p => { for (const r of s0.resources) p.res[r] = 0; p.res.silver = 2; p.left = 3; });
  s0.queue = [{ t: 'turn', p: 0 }];
  let s = resume(s0);
  const o = s.pending.options.find(x => x.kind === 'slot' && actionAt(s, x.q, x.i).name === 'Sweet Talk');
  s = applyMove(s, { player: 0, option: o.id }, { effects: true });
  const states = [s];
  for (const id of picks) { s = applyMove(s, { player: 0, option: id }, { effects: true }); states.push(s); }
  return states;
}
describe('foldPicks on Sweet Talk', () => {
  it('folds every silver turned into one step, the silver and each color summed', () => {
    const [prev, next, ...rest] = sweetRun(['color:gold', 'color:gold', 'color:red', 'done']);
    const fold = foldPicks(prev, next, rest, [0]);
    expect(fold.used).toBe(2); // the Done shows nothing and stays its own step
    const tail = rest[1];
    const pay = tail.foldedEffects.filter(e => e.type === 'pay');
    expect(pay.map(e => [e.what.r, e.what.n])).toEqual([['silver', 3]]);
    const got = Object.fromEntries(tail.foldedEffects.filter(e => e.type === 'gain').map(e => [e.to.r, e.what.n]));
    expect(got).toEqual({ gold: 2, red: 1 });
    const one = planChain(prev, tail, { mine: [0] });
    const each = [next, ...rest.slice(0, 2)].reduce((t, st, i, a) => t + planChain(i ? a[i - 1] : prev, st, { mine: [0] }).total, 0);
    expect(one.total).toBeLessThan(each * 0.7);
  });
});
