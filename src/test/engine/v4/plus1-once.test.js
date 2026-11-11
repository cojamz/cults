// @vitest-environment node
// Space +1 once per game (Cory, Nov 11: "i like one per game", "plus one to the first taker matters for green"):
// only a space's first taker ever gets its printed "+1 <color>."; a copy never does; the dot shows while it's unclaimed.
import { describe, it, expect } from 'vitest';
import { createGame, plus1Open, printsPlus1, actionAt, applyMove } from '../../../engine/v4/core.js';
import { take, move } from './helpers.js';
import { FULL_DECK } from '../../../engine/v4/content/cull.js';
import { sceneQ, spaceOf, settle, passBuys } from './cards-helpers.js';

const Q = ['silver', 'red', 'echo', 'market'];
const scene = (rules, extra = {}) => sceneQ({ quadrants: Q, n: 3, round: 2, rules: { deck: 10, ...rules }, queue: [0, 1, 2].map(p => ({ t: 'turn', p })).concat({ t: 'allPlaced' }), ...extra });
const silver = (s, i) => s.players[i].res.silver;
// Cover: "Copy an action with a rival's minion on it. +1 green."
function cover(s) {
  s = take(s, 'Cover');
  while (s.pending?.kind === 'choose') {
    const o = s.pending.options.find(x => /Toast/.test(x.label || '')) || s.pending.options[0];
    s = move(s, o.id);
  }
  return s;
}

describe('space +1 once per game', () => {
  it('dots exactly the spaces that print "+1 <color>.", only with the setting on', () => {
    const seats = [0, 1, 2, 3].map(i => ({ name: `P${i}`, kind: 'bot' }));
    const on = createGame({ seats, seed: 2, quadrants: Q, rules: { deck: 10, plus1: 'game' } });
    const off = createGame({ seats, seed: 2, quadrants: Q, rules: { deck: 10 } });
    let dots = 0;
    Q.forEach((qid, q) => { for (let i = 0; i < 6; i++) { const a = actionAt(on, q, i); if (!a) continue; expect(plus1Open(on, q, i)).toBe(printsPlus1(a, qid)); expect(plus1Open(off, q, i)).toBe(false); if (plus1Open(on, q, i)) dots++; } });
    expect(dots).toBeGreaterThan(3);
  });
  it('the first taker gets the +1 and the dot goes; a later taker does not', () => {
    let s = scene({ plus1: 'game' });
    const [q, i] = spaceOf(s, 'Toast').split('-').map(Number);
    expect(plus1Open(s, q, i)).toBe(true);
    s = passBuys(settle(take(s, 'Toast'))); // "+4 silver. Each rival +2 silver. +1 silver."
    expect(silver(s, 0)).toBe(5);
    expect(plus1Open(s, q, i)).toBe(false);
    let t = scene({ plus1: 'game' }); t.plus1Seen = { [`${q}-${i}`]: true };
    t = passBuys(settle(take(t, 'Toast')));
    expect(silver(t, 0)).toBe(4);
  });
  it('the claimed +1 is its own effect, after the space\'s gains, so the screen flies it apart', () => {
    const s = scene({ plus1: 'game' });
    const o = s.pending.options.find(x => x.kind === 'slot' && actionAt(s, x.q, x.i).name === 'Toast');
    const t = applyMove(s, { player: 0, option: o.id }, { effects: true });
    const fx = t.effects.filter(e => e.type === 'gain' && e.to?.pid === 0 && e.what?.r === 'silver');
    expect(fx.map(e => [e.cause.kind, e.what.n])).toEqual([['space', 4], ['plus1', 1]]);
    expect(fx[1].from).toMatchObject({ kind: 'space', key: `${o.q}-${o.i}` });
  });
  it('every taker gets it with the setting off', () => {
    let t = scene({}); const k = spaceOf(t, 'Toast'); t.plus1Seen = { [k]: true };
    t = passBuys(settle(take(t, 'Toast')));
    expect(silver(t, 0)).toBe(5);
  });
  it('a Green copy never gets the +1', () => {
    for (const [rules, want] of [[{ plus1: 'game' }, 4], [{}, 5]]) {
      let s = scene(rules);
      s = passBuys(settle(take(s, 'Toast')));
      const before = silver(s, 1); // P2 got +2 silver from P1's Toast
      s = passBuys(cover(s));
      expect(silver(s, 1) - before).toBe(want);
    }
  });
  it('the Test version is the game: a new table deals it', () => {
    const was = FULL_DECK.tests;
    try { FULL_DECK.tests = false; expect(createGame({ seats: [{ name: 'a', kind: 'bot' }, { name: 'b', kind: 'bot' }], seed: 1 }).rules.testSet).toBe(true); } finally { FULL_DECK.tests = was; }
  });
});
