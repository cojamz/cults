// @vitest-environment node
// Members C, batch bC11 (Nov 4): Roadie reworked, "Whenever you copy an action, +1 green per green member you have.",
// Live Nov 4 in the old Roadie's place (trial q-c-roadie9-c2).
import { describe, it, expect } from 'vitest';

const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
const { take } = await import('./helpers.js');

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const Q = ['red', 'echo', 'thieves', 'trading'];

describe('Roadie (reworked, live)', () => {
  it('same price as the old Roadie, which is retired', () => {
    const d = defById('echo.roadie9');
    expect([d.s, d.w]).toEqual([defById('echo.roadie').s, defById('echo.roadie').w]);
    expect(defById('echo.roadie').retired).toBe(true);
  });
  it('Cover copying Build Up: the copy plus +1 green per green member (Roadie and Busker: +2)', () => {
    const base = table(Q, { n: 2, round: 2, left: 4, members: [['echo.evergreen']] });
    const withR = table(Q, { n: 2, round: 2, left: 4, members: [['echo.roadie9', 'echo.evergreen']] });
    const run = s => {
      s = take(s, 'echo.hum');
      while (s.pending?.player === 0 && s.pending.kind === 'choose') s = answer(s, (s.pending.options.find(o => /Build Up/.test(o.label)) || s.pending.options[0]).id);
      return s.players[0].res.green || 0;
    };
    expect(run(withR) - run(base)).toBe(2);
  });
  it('no Round Start or On Recruit income any more', () => {
    const d = defById('echo.roadie9');
    expect(d.onRoundStart).toBeUndefined();
    expect(d.onRecruited).toBeUndefined();
  });
});
