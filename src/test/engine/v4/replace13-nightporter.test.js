// @vitest-environment node
// Lane F (REPLACE13=nightporter, Nov 4; quality/pitches/F-batch2.md): Night Porter in Closer's place: "Each minion you place once all rivals are out of minions: +2 followers."
// One test per sentence, plus the pitched turn.
import { describe, it, expect } from 'vitest';

process.env.REPLACE13 = 'nightporter';
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

describe('REPLACE13=nightporter: Night Porter', () => {
  it("is dealt in Closer's place", () => {
    const keys = quadrant('purple').members.filter(d => !d.retired).map(d => d.key);
    expect(keys).toContain('nightporter');
    expect(keys).not.toContain('closer');
  });
  it('a minion placed once every rival is out: +2 followers', () => {
    let s = table(['purple', 'red'], { n: 2, round: 1, members: [['purple.nightporter']], shop: SHOP, left: 2 });
    s.players[1].left = 0;
    const before = s.players[0].bonus || 0;
    s = go(s, slotOf(s, 'red', 'Gather'));
    expect((s.players[0].bonus || 0) - before).toBe(2);
    expect(s.log.join('\n')).toContain("P1's Night Porter: every rival is out of minions, +2 followers.");
  });
  it('nothing while a rival has a minion left', () => {
    let s = table(['purple', 'red'], { n: 2, round: 1, members: [['purple.nightporter']], shop: SHOP, left: 2 });
    s.players[1].left = 1;
    s = go(s, slotOf(s, 'red', 'Gather'));
    expect(s.log.join('\n')).not.toContain('Night Porter');
  });
});
