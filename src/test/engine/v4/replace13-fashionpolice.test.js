// @vitest-environment node
// Lane F (REPLACE13=fashionpolice, Nov 4; quality/pitches/F-batch2.md): Fashion Police in Trendsetters' place: "Whenever you recruit a member, send every shop member of its color to the bottom of the pile, then refill."
// One test per sentence, plus the pitched turn.
import { describe, it, expect } from 'vitest';

process.env.REPLACE13 = 'fashionpolice';
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

describe('REPLACE13=fashionpolice: Fashion Police', () => {
  it("is dealt in Trendsetters' place", () => {
    const keys = quadrant('market').members.filter(d => !d.retired).map(d => d.key);
    expect(keys).toContain('fashionpolice');
    expect(keys).not.toContain('trendsetter');
  });
  it('after you recruit a red member, every red shop member goes to the bottom, then the row refills', () => {
    let s = table(['market', 'red'], { n: 2, round: 1, members: [['market.fashionpolice']], res: [{ red: 9 }], shop: SHOP });
    s = go(s, slotOf(s, 'red', 'Gather'));
    s = go(s, s.pending.options.find(o => o.label.startsWith('Recruiter')).id);
    while (s.pending?.prompt.includes('pay')) s = go(s, s.pending.options[0].id);
    const sent = ['Volunteer', 'Patriarch'];
    for (const n of sent) expect(s.shop.map(u => defById(s.cards[u].def).name)).not.toContain(n);
    expect(s.shop.map(u => defById(s.cards[u].def).name)).toContain('Regular');
    expect(s.log.join('\n')).toMatch(/P1's Fashion Police: sends [2-9] red members to the bottom of the pile\./);
  });
});
