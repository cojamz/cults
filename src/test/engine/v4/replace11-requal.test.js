// @vitest-environment node
// Actions lane, requalified under "paper filters, play ranks" (Nov 4): Duty Free (Tourist's place), Snobs disdain
// (Snobs' place), Open Bar (Polish's place). Each by its own REPLACE11 key.
import { describe, it, expect } from 'vitest';

process.env.REPLACE11 = 'dutyfree,snobs3,openbar';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { memberPrice, applyMove } = await import('../../../engine/v4/core.js');
const { quadrant } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE11;
delete process.env.MEMBER_UP;

describe('REPLACE11: Duty Free', () => {
  it('a member of a new color costs 3 less; one of a color you have does not', () => {
    // Duty Free is yellow: a red member is new, a yellow one is not. Reseller (5 blue + 3, since every member +1 on Nov 5) and a yellow card priced alike
    const s = table(['yellow', 'red', 'market'], { n: 2, members: [['yellow.dutyfree']], shop: ['market.reseller'], res: [{ blue: 5 }] });
    expect(memberPrice(s, s.players[0], s.shop[0]).afford).toBe(true); // 8 less 3 = 5 blue, has 5
    const t = table(['yellow', 'red', 'market'], { n: 2, members: [['yellow.dutyfree', 'market.stylist']], shop: ['market.reseller'], res: [{ blue: 5 }] });
    expect(memberPrice(t, t.players[0], t.shop[0]).afford).toBe(false);
  });
});

describe('REPLACE11: Snobs (disdain)', () => {
  it('is in the Blue list in place of the Game End Snobs', async () => {
    const { defById } = await import('../../../engine/v4/content/index.js');
    expect(defById('market.snobs3').text).toBe('Whenever a rival recruits a member costing 4 or less, +1 follower.');
    expect(defById('market.snob').retired).toBe(true);
  });
});

describe('REPLACE11: Open Bar', () => {
  it("is on the wheel in Polish's place and pays when a rival takes a Silver space", () => {
    const names = quadrant('silver').actions.map(a => a.name);
    expect(names).toContain('Open Bar');
    expect(names).not.toContain('Polish');
    let s = table(['silver', 'red'], { n: 2, round: 1 });
    const q = s.quadrants.indexOf('silver');
    const mover = s.pending.player, first = 1 - mover;
    s.openBar = [{ pid: s.players[first].id, round: s.round }];
    const before = s.players[first].bonus;
    const other = s.pending.options.find(o => o.id.startsWith(`slot:${q}-`));
    s = applyMove(s, { player: mover, option: other.id });
    expect(s.players[first].bonus).toBe(before + 1);
  });
});
