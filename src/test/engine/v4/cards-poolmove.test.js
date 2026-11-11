// @vitest-environment node
// Idea pipeline pool move (tag poolmove) (Nov 9, catch-up and member movement; design/notes/catch-up-member-movement-2026-11-09.md):
// bot-only candidates, never dealt in a real game. One test per sentence of each card's text, through real moves.
import { describe, it, expect } from 'vitest';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming } from './cards-helpers.js';
import { usePool, price } from './pool-helpers.js';

usePool(['benders.giftswappers', 'benders.purifiers'], ['market.foreclose']);
const named = (s, name) => linesNaming(s.log, name);
const give = (s, p, n, test = () => true) => {
  const out = s.pile.filter(test).slice(0, n);
  for (const u of out) { s.pile.splice(s.pile.indexOf(u), 1); s.players[p].members.push(u); }
  return out;
};

describe('Gift Swappers (grey)', () => {
  it('On Use, once per game: every player, you too, gives one member they choose to the player on their left', () => {
    let s = sceneQ({ quadrants: ['market', 'gold', 'red'], n: 3, round: 2, members: [['benders.giftswappers']] });
    const gs = uidOf(s, 'benders.giftswappers', 0);
    const [a] = give(s, 1, 1), [b1, b2] = give(s, 2, 2);
    s = move(s, `use:${gs}`);
    // P1 gives first, from their own cult, to the seat on the left, P2 (the giver picks: Cory, Nov 9)
    expect(s.pending.prompt).toBe('Gift Swappers: give which of your members to P2?');
    expect(s.pending.player).toBe(0);
    expect(s.pending.options.map(o => o.value)).toEqual([gs]);
    s = move(s, `card:${gs}`);
    expect(s.pending.prompt).toBe('Gift Swappers: give which of your members to P3?');
    expect(s.pending.player).toBe(1);
    s = move(s, `card:${a}`);
    expect(s.pending.prompt).toBe('Gift Swappers: give which of your members to P1?');
    expect(s.pending.player).toBe(2);
    expect(s.pending.options.map(o => o.value).sort()).toEqual([b1, b2].sort());
    s = move(s, `card:${b2}`);
    expect(s.players[0].members).toEqual([b2]);
    expect(s.players[1].members).toEqual([gs]);
    expect(s.players[2].members.sort()).toEqual([b1, a].sort());
    expect(named(s, 'Gift Swappers').at(-1)).toMatch(/^P1's Gift Swappers: P1 gives Gift Swappers to P2, P2 gives .* to P3, P3 gives .* to P1\.$/);
    expect(s.cards[gs].used).toBe(true);
  });
  it('a player with no members gives nothing', () => {
    let s = sceneQ({ quadrants: ['market', 'gold', 'red'], n: 3, round: 2, members: [['benders.giftswappers']] });
    const gs = uidOf(s, 'benders.giftswappers', 0);
    s = move(s, `use:${gs}`); // only P1 has a member, so only P1 gives (to P2)
    expect(s.pending.prompt).toBe('Gift Swappers: give which of your members to P2?');
    s = move(s, `card:${gs}`);
    expect(s.players[1].members).toEqual([gs]);
    expect(s.pending?.prompt || '').not.toMatch(/Gift Swappers/);
  });
});

describe('Purifiers (grey)', () => {
  it('On Use, once per game: discard one of your members. Each rival with more members than you discards one too.', () => {
    let s = sceneQ({ quadrants: ['market', 'gold', 'red'], n: 3, round: 2, members: [['benders.purifiers']] });
    const pu = uidOf(s, 'benders.purifiers', 0);
    const [mine] = give(s, 0, 1), two = give(s, 1, 2), [one] = give(s, 2, 1);
    s = move(s, `use:${pu}`);
    expect(s.pending.prompt).toBe('Purifiers: discard which of your members?');
    s = move(s, `card:${mine}`);
    // P1 now has 1 member: P2 (2) discards, P3 (1) doesn't
    expect(s.pending.prompt).toBe('Purifiers: discard which of your members?');
    s = move(s, `card:${two[0]}`);
    expect(s.players[0].members).toEqual([pu]);
    expect(s.players[1].members).toEqual([two[1]]);
    expect(s.players[2].members).toEqual([one]);
    expect(s.discard).toEqual(expect.arrayContaining([mine, two[0]]));
    expect(named(s, 'Purifiers')).toEqual(expect.arrayContaining([expect.stringMatching(/^P1's Purifiers: discards /), expect.stringMatching(/^P1's Purifiers: P2 discards /)]));
  });
});

describe('Foreclose (Blue, round II)', () => {
  it('+2 blue. Put a member of a rival with more members than you into the shop.', () => {
    let s = sceneQ({ quadrants: ['market', 'gold', 'red'], n: 3, round: 2 });
    give(s, 0, 1); const big = give(s, 1, 3), [small] = give(s, 2, 1);
    s = take(s, 'market.foreclose');
    expect(s.players[0].res.blue).toBe(2);
    expect(s.pending.prompt).toBe("Foreclose: put which rival's member into the shop?");
    expect(s.pending.options.map(o => o.value).sort()).toEqual([...big].sort()); // not P3's (as many members as P1)
    s = move(s, `card:${big[1]}`);
    expect(s.players[1].members).toEqual([big[0], big[2]]);
    expect(s.shop).toContain(big[1]);
    expect(s.players[2].members).toEqual([small]);
    expect(named(s, 'Foreclose').at(-1)).toMatch(/^P1's Foreclose: P2's .* goes into the shop\.$/);
  });
  it('no rival with more members: just the blue', () => {
    let s = sceneQ({ quadrants: ['market', 'gold', 'red'], n: 3, round: 2 });
    s = take(s, 'market.foreclose');
    expect(s.players[0].res.blue).toBe(2);
    expect(named(s, 'Foreclose').at(-1)).toBe("P1's Foreclose: no rival has more members.");
  });
});
