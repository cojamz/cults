// @vitest-environment node
// Members C (Caravan batch, Nov 4): Sign Painters, "On Use, once per round: a member in any cult becomes a member of a
// color you choose.", Caravan's place under REPLACE9=signpainters.
import { describe, it, expect } from 'vitest';

process.env.REPLACE9 = 'signpainters';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { defById } = await import('../../../engine/v4/content/index.js');
const { countMembersOfColor } = await import('../../../engine/v4/core.js');
const { move } = await import('./helpers.js');
const { table, uidIn } = await import('./cards-helpers-b.js');
delete process.env.REPLACE9;
delete process.env.MEMBER_UP;

describe('REPLACE9: Sign Painters', () => {
  it('same price as Caravan, which is retired', () => {
    const d = defById('yellow.signpainters'), o = defById('yellow.caravan');
    expect([d.s, d.w, d.f]).toEqual([o.s, o.w, o.f]);
    expect(o.retired).toBe(true);
  });
  it("paints a rival's red member blue; once per round", () => {
    let s = table(['red', 'yellow', 'market', 'thieves'], { n: 2, round: 2, members: [['yellow.signpainters'], ['red.intern']] });
    const u = uidIn(s, 'yellow.signpainters', 0), r = uidIn(s, 'red.intern', 1);
    s = move(s, `use:${u}`);
    s = move(s, `card:${r}`);
    s = move(s, 'color:market');
    expect(s.cards[r].asColor).toBe('market');
    expect(countMembersOfColor(s, s.players[1], 'red')).toBe(0);
    expect(s.cards[u].used).toBe(true);
    expect(defById('yellow.signpainters').onRoundStart).toBeTypeOf('function');
  });
});
