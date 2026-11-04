// @vitest-environment node
// Lane F (REPLACE13=trendsetters2, Nov 4; quality/pitches/F-batch2.md): Tastemakers (Trendsetters' lifted control) in Trendsetters' place: "Whenever you recruit a member, send up to 2 shop members to the bottom of the pile, then refill. +1 blue each."
// One test per sentence, plus the pitched turn.
import { describe, it, expect } from 'vitest';

process.env.REPLACE13 = 'trendsetters2';
const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant, defById } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE13;
const go = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const first = (s, pre) => s.pending.options.find(o => o.id.startsWith(pre)).id;
const slotOf = (s, q, name) => `slot:${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
const owns = (s, i, key) => s.players[i].members.some(u => s.cards[u].def.endsWith("." + key));
const SHOP = ['red.volunteer', 'red.recruiter', 'market.regular', 'red.patriarch'];

const buyRecruiter = s => {
  s = go(s, slotOf(s, 'red', 'Gather'));
  s = go(s, s.pending.options.find(o => o.label.startsWith('Recruiter')).id);
  while (s.pending?.prompt.includes('pay')) s = go(s, s.pending.options[0].id);
  return s;
};
describe('REPLACE13=trendsetters2: Tastemakers', () => {
  it("is dealt in Trendsetters' place", () => {
    const keys = quadrant('market').members.filter(d => !d.retired).map(d => d.key);
    expect(keys).toContain('trendsetters2');
    expect(keys).not.toContain('trendsetter');
  });
  it('after you recruit a member, sends up to 2 shop members down, then refills, +1 blue each', () => {
    let s = table(['market', 'red'], { n: 2, round: 1, members: [['market.trendsetters2']], res: [{ red: 9 }], shop: SHOP });
    s = buyRecruiter(s);
    expect(s.pending.prompt).toContain('Tastemakers');
    s = go(s, first(s, 'card:'));
    s = go(s, first(s, 'card:'));
    expect(s.players[0].res.blue).toBe(2);
    expect(s.log.join('\n')).toContain("P1's Tastemakers: +2 blue.");
    expect(s.shop.length).toBe(6);
  });
  it('may stop after one: +1 blue', () => {
    let s = table(['market', 'red'], { n: 2, round: 1, members: [['market.trendsetters2']], res: [{ red: 9 }], shop: SHOP });
    s = buyRecruiter(s);
    s = go(s, first(s, 'card:'));
    s = go(s, 'done');
    expect(s.players[0].res.blue).toBe(1);
  });
});
