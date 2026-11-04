import { describe, it, expect } from 'vitest';
import { contextFor, resume } from '../../../engine/v4/core.js';
import { table } from './cards-helpers-b.js';

// Cory, Nov 4 11:07am: "once per game is once for the card - the idea is you can try to poach it before its used, or
// use it and swap it out for better stuff." A used once-per-game member cast out and recruited again stays used.
describe('Once per game is once for the card', () => {
  it('a used Debt Collectors cast out, then given back from the shop, is still used; another member comes back with no use mark', () => {
    const s = table(['silver', 'thieves', 'market', 'trading'], { n: 2, members: [['silver.debtcollector'], ['thieves.accomplice']] });
    const ctx = contextFor(s);
    const [a] = s.players[0].members, [b] = s.players[1].members;
    s.cards[a].used = true;
    ctx.buryMember(s.players[0], a, s.players[0], { shop: true });
    ctx.buryMember(s.players[1], b, s.players[1], { shop: true });
    expect(s.shop).toContain(a);
    // every move wipes the shop and the pile clean (wipeUnowned): the use mark stays through it
    expect(resume(s).cards[a].used).toBe(true);
    ctx.giveFromShop(s.players[1], a);
    ctx.giveFromShop(s.players[0], b);
    expect(s.cards[a].used).toBe(true);
    expect(s.cards[b].used).toBeUndefined();
  });
});
