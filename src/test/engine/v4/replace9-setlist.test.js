// @vitest-environment node
// Members C (bC11, Nov 4): Setlist, "On Use, once per round: copy the last action you took this round." (reworded after the Hard A/B: it copies this round's latest space)", Roadie's
// place under REPLACE9=setlist.
import { describe, it, expect } from 'vitest';

process.env.REPLACE9 = 'setlist';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { defById } = await import('../../../engine/v4/content/index.js');
const { take, move } = await import('./helpers.js');
const { table, uidIn } = await import('./cards-helpers-b.js');
delete process.env.REPLACE9;
delete process.env.MEMBER_UP;

const Q = ['red', 'echo', 'thieves', 'trading'];

describe('REPLACE9: Setlist', () => {
  it('same price as Roadie, which is retired under the switch', () => {
    const d = defById('echo.setlist'), o = defById('echo.roadie');
    expect([d.s, d.w]).toEqual([o.s, o.w]);
    expect(o.retired).toBe(true);
  });
  it('after Build Up, the use does Build Up again; then it is spent for the round', () => {
    let s = table(Q, { n: 2, round: 2, left: 4, members: [['echo.setlist']] });
    const u = uidIn(s, 'echo.setlist', 0);
    s = take(s, 'echo.chant');
    const g = s.players[0].res.green || 0;
    if (s.pending?.player !== 0 || !s.pending.options.some(o => o.id === `use:${u}`)) throw new Error('use not offered after the turn');
    s = move(s, `use:${u}`);
    expect((s.players[0].res.green || 0) - g).toBe(4);
    expect(s.cards[u].used).toBe(true);
  });
  it('resets at Round Start', () => {
    expect(defById('echo.setlist').onRoundStart).toBeTypeOf('function');
  });
});
