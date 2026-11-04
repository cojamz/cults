// @vitest-environment node
// Members C (Nov 4, "paper filters, play ranks"): Meddler once per round (REPLACE9=meddler9) and Buyers' Club
// (REPLACE9=buyersclub, Window Dressers' place).
import { describe, it, expect } from 'vitest';

process.env.REPLACE9 = 'meddler9,buyersclub';
const { defById } = await import('../../../engine/v4/content/index.js');
const { move } = await import('./helpers.js');
const { table, uidIn, named } = await import('./cards-helpers-b.js');
delete process.env.REPLACE9;

describe('REPLACE9: Meddler, once per round', () => {
  it('same price, old Meddler retired', () => {
    const d = defById('yellow.meddler9'), o = defById('yellow.ringleader');
    expect([d.s, d.w]).toEqual([o.s, o.w]);
    expect(o.retired).toBe(true);
    expect(d.onRoundStart).toBeTypeOf('function');
  });
  it('On Use: change a rival resource, +1 follower', () => {
    let s = table(['red', 'yellow', 'market', 'thieves'], { n: 2, round: 2, res: [{}, { red: 3 }], members: [['yellow.meddler9']] });
    const u = uidIn(s, 'yellow.meddler9', 0), b = s.players[0].bonus;
    s = move(s, `use:${u}`);
    s = move(s, 'res:1:red');
    while (s.pending?.player === 0 && s.pending.options.some(o => o.id.startsWith('color:') || o.id.startsWith('to:'))) s = move(s, s.pending.options.find(o => o.id !== 'done').id);
    if (s.pending?.player === 0 && s.pending.options.some(o => o.id === 'done')) s = move(s, 'done');
    expect(s.players[1].res.red).toBe(2);
    expect(s.players[0].bonus).toBe(b + 1);
    expect(s.cards[u].used).toBe(true);
  });
});

describe("REPLACE9: Buyers' Club", () => {
  it('same price as Window Dressers, which is retired', () => {
    const d = defById('market.buyersclub'), o = defById('market.windowdresser');
    expect([d.s, d.w, d.f]).toEqual([o.s, o.w, o.f]);
    expect(o.retired).toBe(true);
  });
  it('whenever you recruit: +1 blue per blue member, up to 3', () => {
    const s0 = table(['red', 'yellow', 'market', 'thieves'], { n: 2, round: 2, members: [['market.buyersclub']] });
    const fire = (s, k) => defById('market.buyersclub').onAnyRecruit;
    expect(fire()).toBeTypeOf('function');
    let got = 0;
    const ctx = { countMembersOfColor: () => 5, gain: (p, c, n) => { got += n; }, log: () => {} };
    defById('market.buyersclub').onAnyRecruit(ctx, s0.players[0], null, s0.players[0]);
    expect(got).toBe(3);
    got = 0;
    defById('market.buyersclub').onAnyRecruit(ctx, s0.players[0], null, s0.players[1]);
    expect(got).toBe(0);
  });
});

