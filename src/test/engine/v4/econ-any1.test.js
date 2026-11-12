// @vitest-environment node
// The "+1 any" economy setting (Cory, Nov 12, after the economy judges: "let's add a switch for +1any"; opt-in, today's
// prices stay the default): every member costs 1 more of any color; spaces give what they print.
import { describe, it, expect } from 'vitest';
import { createGame, applyMove } from '../../../engine/v4/index.js';
import { cardDef, memberPrice } from '../../../engine/v4/core.js';
import { richUp } from '../../../engine/v4/content/price.js';

const seats = Array.from({ length: 4 }, () => ({ kind: 'bot' }));
const Q = ['red', 'gold', 'purple', 'echo'];
const game = rules => createGame({ seats, seed: 7, quadrants: Q, rules: { deck: 10, contests: 'byColor', ...rules } });
function firstPlace(s) {
  for (let k = 0; k < 50 && s.pending.kind !== 'place'; k++) s = applyMove(s, { player: s.pending.player, option: s.pending.options[0].id });
  const p = s.pending.player, before = { ...s.players[p].res };
  const opt = s.pending.options.find(o => /^slot:/.test(String(o.id)));
  const after = applyMove(s, { player: p, option: opt.id });
  return { opt: opt.id, gained: Object.keys(before).reduce((a, c) => a + (after.players[p].res[c] || 0) - (before[c] || 0), 0) };
}

describe('the +1 any economy setting', () => {
  it('prices every shop member 1 more of any color, its own color unchanged', () => {
    const a = game({}), b = game({ econ: 'any1' });
    expect(b.shop).toEqual(a.shop);
    for (const u of a.shop) {
      const d0 = cardDef(a, u), d1 = cardDef(b, u);
      expect(d1.s || 0).toBe(d0.s || 0);
      expect(d1.w).toBe((d0.w || 0) + 1);
      expect(memberPrice(b, b.players[0], u).total).toBe(memberPrice(a, a.players[0], u).total + 1);
    }
  });
  it('named costs move 1', () => {
    expect(richUp(game({ econ: 'any1' }))).toBe(1);
    expect(richUp(game({}))).toBe(0);
  });
  it('spaces give what they print', () => {
    const a = firstPlace(game({})), b = firstPlace(game({ econ: 'any1' }));
    expect(b.opt).toBe(a.opt);
    expect(b.gained).toBe(a.gained);
  });
});
