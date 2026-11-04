// @vitest-environment node
// Lane F (REPLACE13=pickers, Nov 4; quality/pitches/F-batch2.md): Pickers in Trendsetters' place: "Whenever you send shop members to the bottom of the pile, you may also recruit one of them, paying its cost."
// One test per sentence, plus the pitched turn.
import { describe, it, expect } from 'vitest';

process.env.REPLACE13 = 'pickers';
const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant, defById } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE13;
const go = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const first = (s, pre) => s.pending.options.find(o => o.id.startsWith(pre)).id;
const slotOf = (s, q, name) => `slot:${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
const owns = (s, i, key) => s.players[i].members.some(u => s.cards[u].def.endsWith("." + key));
const SHOP = ['red.volunteer', 'red.recruiter', 'market.regular', 'red.patriarch'];

describe('REPLACE13=pickers: Pickers', () => {
  it("is dealt in Trendsetters' place", () => {
    const keys = quadrant('market').members.filter(d => !d.retired).map(d => d.key);
    expect(keys).toContain('pickers');
    expect(keys).not.toContain('trendsetter');
  });
  it('after its owner sends a shop member down (Savings), offers to recruit it, paying its cost; the turn recruit still follows', () => {
    let s = table(['market', 'red'], { n: 2, round: 1, members: [['market.pickers']], res: [{ blue: 9, red: 9 }], shop: SHOP });
    s = go(s, slotOf(s, 'market', 'Savings'));
    const sent = s.pending.options.find(o => o.label.startsWith('Recruiter')).id;
    s = go(s, sent);
    expect(s.pending.prompt).toContain('Pickers');
    s = go(s, sent);
    while (s.pending?.prompt.includes('pay')) s = go(s, s.pending.options[0].id);
    expect(owns(s, 0, 'recruiter')).toBe(true);
    expect(s.log.join('\n')).toContain("P1's Pickers: pays");
    expect(s.pending.prompt).toContain('recruit a member or followers');
  });
  it('may recruit nothing', () => {
    let s = table(['market', 'red'], { n: 2, round: 1, members: [['market.pickers']], res: [{ blue: 9, red: 9 }], shop: SHOP });
    s = go(s, slotOf(s, 'market', 'Savings'));
    s = go(s, first(s, 'card:'));
    s = go(s, 'none');
    expect(s.log.join('\n')).toContain("P1's Pickers: recruits nothing.");
  });
  it("a rival's send doesn't offer it", () => {
    let s = table(['market', 'red'], { n: 2, round: 1, members: [[], ['market.pickers']], res: [{ blue: 9 }, { blue: 9, red: 9 }], shop: SHOP });
    s = go(s, slotOf(s, 'market', 'Savings'));
    s = go(s, first(s, 'card:'));
    expect(s.pending.prompt).not.toContain('Pickers');
  });
});
