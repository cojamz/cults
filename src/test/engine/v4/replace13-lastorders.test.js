// @vitest-environment node
// Lane F (REPLACE13=lastorders, Nov 4; quality/pitches/F-batch2.md): Last Orders in Closer's place: "When you place the last minion of the round, recruit once more."
// One test per sentence, plus the pitched turn.
import { describe, it, expect } from 'vitest';

process.env.REPLACE13 = 'lastorders';
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

describe('REPLACE13=lastorders: Last Orders', () => {
  it("is dealt in Closer's place", () => {
    const keys = quadrant('purple').members.filter(d => !d.retired).map(d => d.key);
    expect(keys).toContain('lastorders');
    expect(keys).not.toContain('closer');
  });
  it("placing the round's last minion gives a second recruit this turn", () => {
    let s = table(['purple', 'red'], { n: 2, round: 1, members: [['purple.lastorders']], res: [{ red: 9, purple: 9 }], shop: SHOP, left: 1 });
    s.players[1].left = 0;
    s = go(s, slotOf(s, 'red', 'Gather'));
    expect(s.log.join('\n')).toContain("P1's Last Orders");
    s = go(s, s.pending.options.find(o => o.label.startsWith('Volunteer')).id);
    while (s.pending?.prompt.includes('pay')) s = go(s, s.pending.options[0].id);
    expect(s.pending?.prompt || '').toContain('recruit a member or followers');
  });
  it('not when a rival still has a minion', () => {
    let s = table(['purple', 'red'], { n: 2, round: 1, members: [['purple.lastorders']], res: [{ red: 9 }], shop: SHOP, left: 1 });
    s.players[1].left = 1;
    s = go(s, slotOf(s, 'red', 'Gather'));
    expect(s.log.join('\n')).not.toContain("Last Orders");
  });
});
