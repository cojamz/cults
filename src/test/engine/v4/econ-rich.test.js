// @vitest-environment node
// The "Richer" economy setting (Cory, Nov 7 economy test, the judges' pick; opt-in, today's prices stay the default):
// every member costs 1 more of its color and 1 more of any (grey: 2 more of any); every space gives 1 more of its color.
import { describe, it, expect } from 'vitest';
import { createGame, applyMove } from '../../../engine/v4/index.js';
import { cardDef, memberPrice, DEFAULT_RULES } from '../../../engine/v4/core.js';

const seats = Array.from({ length: 4 }, () => ({ kind: 'bot' }));
const Q = ['red', 'gold', 'purple', 'echo'];
const game = rules => createGame({ seats, seed: 7, quadrants: Q, rules: { deck: 10, contests: 'byColor', ...rules } });
// both tables make the same picks: the first option every time, until the first space is taken
function firstPlace(s) {
  for (let k = 0; k < 50 && s.pending.kind !== 'place'; k++) s = applyMove(s, { player: s.pending.player, option: s.pending.options[0].id });
  const p = s.pending.player, before = { ...s.players[p].res };
  const opt = s.pending.options.find(o => /^slot:/.test(String(o.id)));
  const after = applyMove(s, { player: p, option: opt.id });
  const gained = Object.fromEntries(Object.keys(before).map(c => [c, (after.players[p].res[c] || 0) - (before[c] || 0)]));
  return { opt: opt.id, gained };
}

describe('the Richer economy setting', () => {
  it('is off by default', () => {
    expect(DEFAULT_RULES.econ).toBeUndefined();
  });
  it('prices every shop member 1 more of its color and 1 more of any (grey 2 more of any)', () => {
    const a = game({}), b = game({ econ: 'rich' });
    expect(b.shop).toEqual(a.shop);
    for (const u of a.shop) {
      const d0 = cardDef(a, u), d1 = cardDef(b, u), grey = d0.quadrant === 'guest' || d0.quadrant === 'benders';
      if (grey) { expect(d1.s || 0).toBe(d0.s || 0); expect(d1.w).toBe((d0.w || 0) + 2); }
      else { expect(d1.s).toBe((d0.s || 0) + 1); expect(d1.w).toBe((d0.w || 0) + 1); }
      expect(memberPrice(b, b.players[0], u).total).toBe(memberPrice(a, a.players[0], u).total + 2);
    }
  });
  it('a space gives 1 more of its color', () => {
    const a = firstPlace(game({})), b = firstPlace(game({ econ: 'rich' }));
    expect(b.opt).toBe(a.opt);
    const total = g => Object.values(g).reduce((x, y) => x + y, 0);
    expect(total(b.gained)).toBe(total(a.gained) + 1);
  });
});
