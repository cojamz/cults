// @vitest-environment node
// Cash Out (REPLACE11=cashout, Actions lane, Nov 4): "+1 white. Turn up to 4 of your followers into 2 white each."
import { describe, it, expect } from 'vitest';

process.env.REPLACE11 = 'cashout';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE11;
delete process.env.MEMBER_UP;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const slot = (s, name) => `${s.quadrants.indexOf('trading')}-${quadrant('trading').actions.findIndex(a => a.name === name)}`;

describe('REPLACE11: Cash Out', () => {
  it("is on the wheel in Estate Sale's place", () => {
    const names = quadrant('trading').actions.map(a => a.name);
    expect(names).toContain('Cash Out');
    expect(names).not.toContain('Estate Sale');
    expect(names).not.toContain('Yard Sale');
  });
  it('+1 white, then up to 4 loose followers into 2 white each', () => {
    let s = table(['red', 'trading'], { n: 2, round: 2, bonus: [6] });
    s = answer(s, `slot:${slot(s, 'Cash Out')}`);
    expect(s.players[0].res.white).toBe(1);
    expect(s.pending.options.map(o => o.id)).toEqual(['n:4', 'n:3', 'n:2', 'n:1', 'n:0']);
    s = answer(s, 'n:3');
    expect(s.players[0].bonus).toBe(3);
    expect(s.players[0].res.white).toBe(1 + 6);
    expect(s.log.join('\n')).toContain("P1's Cash Out: cashed out 3 followers for 6 white.");
  });
  it('at most the loose followers you have; with none, only the white', () => {
    let s = table(['red', 'trading'], { n: 2, round: 2, bonus: [2] });
    s = answer(s, `slot:${slot(s, 'Cash Out')}`);
    expect(s.pending.options.map(o => o.id)).toEqual(['n:2', 'n:1', 'n:0']);
    let t = table(['red', 'trading'], { n: 2, round: 2, bonus: [0] });
    t = answer(t, `slot:${slot(t, 'Cash Out')}`);
    expect(t.players[0].res.white).toBe(1);
    expect(t.log.join('\n')).toMatch(/Cash Out: no followers to sell/);
  });
});
