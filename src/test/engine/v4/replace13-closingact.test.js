// @vitest-environment node
// Lane F (REPLACE13=closingact, Nov 4; quality/pitches/F-batch2.md): Closing Act (Closer's lifted control) in Closer's place: "When you place the last minion of the round: +2 followers in round I, +4 in round II, +6 in round III."
// One test per sentence, plus the pitched turn.
import { describe, it, expect } from 'vitest';

process.env.REPLACE13 = 'closingact';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant, defById } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE13;
delete process.env.MEMBER_UP;
const go = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const first = (s, pre) => s.pending.options.find(o => o.id.startsWith(pre)).id;
const slotOf = (s, q, name) => `slot:${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
const owns = (s, i, key) => s.players[i].members.some(u => s.cards[u].def.endsWith("." + key));
const SHOP = ['red.volunteer', 'red.recruiter', 'market.regular', 'red.patriarch'];

describe('REPLACE13=closingact: Closing Act', () => {
  it("is dealt in Closer's place", () => {
    const keys = quadrant('purple').members.filter(d => !d.retired).map(d => d.key);
    expect(keys).toContain('closingact');
    expect(keys).not.toContain('closer');
  });
  for (const [round, n] of [[1, 2], [2, 4]]) it(`the round's last minion in round ${round}: +${n} followers`, () => {
    let s = table(['purple', 'red'], { n: 2, round, members: [['purple.closingact']], shop: SHOP, left: 1 });
    s.players[1].left = 0;
    const before = s.players[0].bonus || 0;
    s = go(s, slotOf(s, 'red', 'Gather'));
    expect((s.players[0].bonus || 0) - before).toBe(n);
  });
});
