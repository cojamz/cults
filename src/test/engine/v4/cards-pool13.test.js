// @vitest-environment node
// Idea pipeline pool 13 (Nov 7; /mnt/project-files/idea-pipeline/ideas/pool13.md): bot-only candidates, never dealt in a
// real game. One test per sentence of each card's text, through real moves, with the log naming the card.
import { describe, it, expect } from 'vitest';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming, passBuys } from './cards-helpers.js';
import { usePool, price } from './pool-helpers.js';

usePool(['thieves.safecrackers', 'market.bailiffs', 'market.repossessors', 'benders.mercenaries', 'benders.hiredguns', 'purple.seatswappers'],
  ['purple.switchplaces']);
const named = (s, name) => linesNaming(s.log, name);
const total = r => Object.values(r).reduce((a, b) => a + b, 0);

describe('Safecrackers (Magenta)', () => {
  it("Your steals can't be stopped (Lie Low doesn't stop them)", () => {
    let s = sceneQ({ quadrants: ['thieves', 'gold', 'red', 'market'], members: [['thieves.safecrackers']], res: [{}, { gold: 6 }],
      queue: [1, 0].map(p => ({ t: 'turn', p })) });
    s = passBuys(take(s, 'thieves.hideout')); // P2 lies low (steals 1 from P1, who has nothing)
    if (s.pending?.kind === 'choose' && !s.pending.prompt.startsWith('P1')) s = move(s, s.pending.options[0].id);
    s = passBuys(s);
    const before = total(s.players[1].res);
    s = take(s, 'thieves.pickpocket'); // Help Yourself
    while (s.pending?.kind === 'choose' && s.pending.options.some(o => o.kind === 'player')) s = move(s, s.pending.options.find(o => o.kind === 'player').id);
    while (s.pending?.kind === 'choose' && s.pending.options.some(o => o.kind === 'take')) s = move(s, s.pending.options.find(o => o.kind === 'take').id);
    expect(total(s.players[1].res)).toBeLessThan(before);
    expect(named(s, 'Safecrackers').at(-1)).toBe("P1's Safecrackers: P2's protection doesn't stop the steal.");
  });
});

describe('Bailiffs and Repossessors (Blue)', () => {
  for (const [id, name, cap, every] of [['market.bailiffs', 'Bailiffs', 5, 'round'], ['market.repossessors', 'Repossessors', 8, 'game']]) {
    it(`On Use, once per ${every}: put a rival's member costing up to ${cap} into the shop`, () => {
      let s = sceneQ({ quadrants: ['market', 'gold', 'red', 'thieves'], members: [[id]], res: [{ gold: 30, blue: 30, red: 30, magenta: 30 }] });
      const cheap = s.pile.find(u => price(s, u) <= cap), dear = s.pile.find(u => price(s, u) > cap);
      for (const u of [cheap, dear]) { s.pile.splice(s.pile.indexOf(u), 1); s.players[1].members.push(u); }
      const use = `use:${uidOf(s, id, 0)}`;
      s = move(s, use);
      expect(s.pending.prompt).toBe(`${name}: put which rival's member into the shop?`);
      expect(s.pending.options.map(o => o.value)).toEqual([cheap]);
      s = move(s, `card:${cheap}`);
      expect(s.players[1].members).toEqual([dear]);
      expect(s.shop).toContain(cheap);
      expect(named(s, name)[0]).toMatch(new RegExp(`^P1's ${name}: P2's .* goes into the shop\\.$`));
      expect(s.pending.options.some(o => o.id === use)).toBe(false);
    });
  }
});

describe('Mercenaries and Hired Guns (grey)', () => {
  for (const [id, name, n, every] of [['benders.mercenaries', 'Mercenaries', 3, 'round'], ['benders.hiredguns', 'Hired Guns', 5, 'game']]) {
    it(`On Use, once per ${every}: steal ${n} resources from a rival, then give them this member`, () => {
      let s = sceneQ({ quadrants: ['market', 'gold', 'red', 'thieves'], n: 3, members: [[id]], res: [{}, { gold: 9 }, { red: 9 }] });
      const u = uidOf(s, id, 0);
      s = move(s, `use:${u}`);
      expect(s.pending.prompt).toMatch(new RegExp(`^${name}: steal ${n} resources from which rival`));
      s = move(s, 'player:2');
      expect(s.players[0].res.red).toBe(n);
      expect(s.players[2].res.red).toBe(9 - n);
      expect(s.players[0].members).not.toContain(u);
      expect(s.players[2].members).toContain(u);
      expect(named(s, name).at(-1)).toBe(`P1's ${name}: joins P3's cult.`);
      expect(s.cards[u].used).toBe(true); // used for this round (or the game) in its new cult too
    });
  }
});

describe('Switch Places (Purple, round II) and Seat Swappers (Purple)', () => {
  const Q = ['purple', 'gold', 'red', 'market'];
  it("+3 purple. Swap your next turn with a rival's next turn.", () => {
    let s = sceneQ({ quadrants: Q, round: 2, n: 3, queue: [0, 1, 2, 2, 1, 0].map(p => ({ t: 'turn', p })) });
    s = take(s, 'purple.switchplaces');
    expect(s.players[0].res.purple).toBe(3);
    const o = s.pending.options.find(x => x.value === 1);
    expect(o.label).toBe('P2 (your turn moves 4 earlier)');
    s = move(s, o.id);
    expect(s.queue.filter(t => t.t === 'turn').map(t => t.p)).toEqual([0, 2, 2, 1, 1]);
    expect(named(s, 'Switch Places').at(-1)).toBe("P1's Switch Places: P1's next turn and P2's next turn switch places.");
  });
  it("On Use, once per round: swap your next turn with a rival's next turn", () => {
    let s = sceneQ({ quadrants: Q, round: 2, n: 3, members: [['purple.seatswappers']], queue: [0, 1, 2, 2, 1, 0].map(p => ({ t: 'turn', p })) });
    const use = `use:${uidOf(s, 'purple.seatswappers', 0)}`;
    s = move(s, use);
    s = move(s, s.pending.options.find(x => x.value === 2).id);
    expect(s.queue.filter(t => t.t === 'turn').map(t => t.p)).toEqual([1, 0, 2, 1, 2]);
    expect(s.pending.options.some(o => o.id === use)).toBe(false);
  });
});
