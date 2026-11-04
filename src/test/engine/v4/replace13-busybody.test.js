// @vitest-environment node
// Lane F (REPLACE13=busybody, Nov 4; quality/pitches/F-batch2.md): Busybody (Gossip's lifted control) in Gossip's place: "Whenever a player's turn is skipped, +2 followers."
// One test per sentence, plus the pitched turn.
import { describe, it, expect } from 'vitest';

process.env.REPLACE13 = 'busybody';
const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant, defById } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE13;
const go = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const first = (s, pre) => s.pending.options.find(o => o.id.startsWith(pre)).id;
const slotOf = (s, q, name) => `slot:${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
const owns = (s, i, key) => s.players[i].members.some(u => s.cards[u].def.endsWith("." + key));
const SHOP = ['red.volunteer', 'red.recruiter', 'market.regular', 'red.patriarch'];

describe('REPLACE13=busybody: Busybody', () => {
  it("is dealt in Gossip's place", () => {
    const keys = quadrant('purple').members.filter(d => !d.retired).map(d => d.key);
    expect(keys).toContain('busybody');
    expect(keys).not.toContain('gossip');
  });
  it('a skipped turn: +2 followers', () => {
    const def = defById('purple.busybody');
    const s = table(['purple', 'red'], { n: 2, members: [['purple.busybody']] });
    const p = s.players[0]; p.bonus = 0;
    def.onSkip({ log: () => {} }, p);
    expect(p.bonus).toBe(2);
  });
});
