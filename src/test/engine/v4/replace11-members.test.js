// @vitest-environment node
// Actions lane member trials (REPLACE11, Nov 4): Punch Card in Regular's place, Place Holders in Line Cutters' place.
import { describe, it, expect } from 'vitest';

process.env.REPLACE11 = 'punchcard,placeholders';
const { memberPrice, resume } = await import('../../../engine/v4/core.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE11;

describe('REPLACE11: Punch Card', () => {
  it('your 3rd member costs nothing, your 4th pays', () => {
    let s = table(['market', 'red'], { n: 2, members: [['market.punchcard', 'market.stylist']], shop: ['market.reseller'] });
    const p = s.players[0];
    expect(memberPrice(s, p, s.shop[0]).afford).toBe(true);
    s = table(['market', 'red'], { n: 2, members: [['market.punchcard', 'market.stylist', 'market.curator']], shop: ['market.reseller'] });
    expect(memberPrice(s, s.players[0], s.shop[0]).afford).toBe(false);
  });
  it('each of 3, 6 and 9 pays once a game', () => {
    const s = table(['market', 'red'], { n: 2, members: [['market.punchcard', 'market.stylist']], shop: ['market.reseller'] });
    const p = s.players[0], pc = p.members[0];
    s.cards[pc].punched = [3];
    expect(memberPrice(s, p, s.shop[0]).afford).toBe(false);
  });
});

describe('REPLACE11: Place Holders', () => {
  it('the held space is left out of a rival’s place step and kept in the holder’s', () => {
    const s = table(['market', 'red'], { n: 2, round: 1 });
    const slots = () => s.pending.options.filter(o => o.id.startsWith('slot:')).map(o => o.id);
    const key = slots()[0].slice(5), who = s.pending.player;
    s.held = { key, pid: s.players[who].id, round: s.round };
    resume(s);
    expect(slots()).toContain(`slot:${key}`);
    s.held = { key, pid: s.players[1 - who].id, round: s.round };
    resume(s);
    expect(slots()).not.toContain(`slot:${key}`);
  });
});
