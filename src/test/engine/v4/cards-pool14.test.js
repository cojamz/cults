// @vitest-environment node
// Idea pipeline pool 14 (Nov 7; /mnt/project-files/idea-pipeline/ideas/pool14.md): variations of the judges' favorites,
// bot-only, never dealt in a real game. One test per sentence of each card's text, through real moves.
import { describe, it, expect } from 'vitest';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming, passBuys } from './cards-helpers.js';
import { usePool, price, still, go, total } from './pool-helpers.js';
import { useRetired } from './helpers.js';
useRetired(['red.turnout']);

usePool(['trading.handoffartists', 'trading.anchorites', 'trading.wallflowers'],
  ['trading.charitydrive', 'trading.carepackages', 'trading.handmedowns', 'thieves.collections', 'thieves.tallpoppies', 'yellow.pocketchange', 'yellow.bazaar']);
const named = (s, name) => linesNaming(s.log, name);

describe('Charity Drive (White, round II)', () => {
  it('Give up to 4 of your non-white resources to rivals, split as you choose. +2 white per resource given. +1 white.', () => {
    let s = sceneQ({ quadrants: ['trading', 'red', 'market', 'yellow'], n: 3, round: 2, res: [{ red: 3, blue: 3 }] });
    s = take(s, 'trading.charitydrive');
    s = move(s, 'give:1:red'); s = move(s, 'give:1:red'); s = move(s, 'give:2:blue'); s = move(s, 'give:2:blue');
    expect(s.pending?.kind === 'choose' && /Charity Drive/.test(s.pending.prompt)).toBe(false); // 4 at most
    expect(s.players[0].res.white).toBe(9);
    expect(s.players[1].res.red).toBe(2);
    expect(s.players[2].res.blue).toBe(2);
  });
});

describe('Care Packages (White, round I)', () => {
  it('Give up to 2 of your non-white resources to rivals, no more than 1 each. +3 white per resource given. +1 white.', () => {
    let s = sceneQ({ quadrants: ['trading', 'red', 'market', 'yellow'], n: 3, res: [{ red: 3 }] });
    s = take(s, 'trading.carepackages');
    expect(s.players[0].res.white).toBe(1);
    s = move(s, 'give:1:red');
    expect(s.pending.options.some(o => o.id.startsWith('give:1:'))).toBe(false); // P2 already got 1
    s = move(s, 'give:2:red');
    expect(s.players[0].res.white).toBe(7);
    expect([s.players[1].res.red, s.players[2].res.red]).toEqual([1, 1]);
  });
});

describe('Hand-Me-Downs (White, round III)', () => {
  it('Give up to 2 of your members to rivals, no more than 1 each. Gain white equal to twice their cost. +1 white.', () => {
    let s = sceneQ({ quadrants: ['trading', 'red', 'market', 'yellow'], n: 3, round: 3, members: [['market.stylist', 'red.intern']] });
    const a = uidOf(s, 'market.stylist', 0), b = uidOf(s, 'red.intern', 0);
    s = take(s, 'trading.handmedowns');
    s = move(s, `card:${a}`); s = move(s, 'player:1');
    expect(s.players[1].members).toContain(a);
    s = move(s, `card:${b}`);
    expect(s.pending.options.map(o => o.value)).toEqual([2]); // not P2 again
    s = move(s, 'player:2');
    expect(s.players[2].members).toContain(b);
    expect(s.players[0].res.white).toBe(2 * (price(s, a) + price(s, b)) + 1);
  });
  it('up to: stop after one', () => {
    let s = sceneQ({ quadrants: ['trading', 'red', 'market', 'yellow'], n: 3, round: 3, members: [['market.stylist', 'red.intern']] });
    const a = uidOf(s, 'market.stylist', 0);
    s = take(s, 'trading.handmedowns');
    s = move(s, `card:${a}`); s = move(s, 'player:1'); s = move(s, 'none');
    expect(s.players[0].res.white).toBe(2 * price(s, a) + 1);
    expect(s.players[0].members).toHaveLength(1);
  });
});

describe('Hand-Off Artists (White)', () => {
  it('On Use, once per round: give one of your other members to a rival. Gain white equal to twice its cost.', () => {
    let s = sceneQ({ quadrants: ['trading', 'red', 'market', 'yellow'], members: [['trading.handoffartists', 'market.stylist']], res: [{ red: 9 }] });
    const me = uidOf(s, 'trading.handoffartists', 0), a = uidOf(s, 'market.stylist', 0);
    s = take(s, 'red.turnout');
    s = move(s, `use:${me}`);
    expect(s.pending.options.map(o => o.value)).toEqual([a]); // not itself
    s = move(s, `card:${a}`); s = move(s, 'player:1');
    expect(s.players[1].members).toContain(a);
    expect(s.players[0].res.white).toBe(2 * price(s, a));
    expect(s.pending.options.some(o => o.id === `use:${me}`)).toBe(false);
  });
});

describe('Anchorites (White)', () => {
  it('Round End: if you have 5 or fewer members, +5 followers.', () => {
    const four = ['market.stylist', 'market.onlooker', 'trading.cashier', 'market.mannequin'];
    for (const [extra, want] of [[four, 5], [[...four, 'trading.leavetakers'], 0]]) {
      let s = still({ quadrants: ['trading', 'red', 'market', 'yellow'], members: [['trading.anchorites', ...extra]] });
      s = go(s, [{ t: 'allPlaced' }]);
      expect(s.players[0].bonus).toBe(want);
    }
  });
});

describe('Wallflowers (White)', () => {
  it('Round End: if no rival has fewer members than you, +4 followers (a tie counts).', () => {
    for (const [rival, want] of [[['market.stylist'], 4], [[], 0]]) {
      let s = still({ quadrants: ['trading', 'red', 'market', 'yellow'], members: [['trading.wallflowers'], rival] });
      s = go(s, [{ t: 'allPlaced' }]);
      expect(s.players[0].bonus).toBe(want);
    }
  });
});

describe('Collections (Magenta, round II)', () => {
  it('Choose a rival. Steal 1 resource per member card they have. +1 magenta.', () => {
    let s = sceneQ({ quadrants: ['thieves', 'red', 'market', 'yellow'], n: 3, round: 2, members: [[], ['red.panel', 'market.stylist'], []], res: [{}, { red: 5, blue: 5 }, { red: 5 }] });
    s = take(s, 'thieves.collections');
    s = move(s, 'player:1');
    while (s.pending?.kind === 'choose') s = move(s, s.pending.options[0].id);
    // Panel counts as 3 members but is one card: 2 cards, 2 stolen
    expect(total(s.players[1].res)).toBe(8);
    expect(named(s, 'Collections')).toContain("P1's Collections: P2 has 2 member cards.");
  });
});

describe('Tall Poppies (Magenta, round II)', () => {
  it('Choose a rival. Steal 1 resource per member they have more than you. +1 magenta.', () => {
    let s = sceneQ({ quadrants: ['thieves', 'red', 'market', 'yellow'], n: 3, round: 2, members: [['market.onlooker'], ['red.panel'], ['market.stylist']], res: [{}, { red: 5, blue: 5 }, { red: 5 }] });
    s = take(s, 'thieves.tallpoppies');
    s = move(s, 'player:1');
    while (s.pending?.kind === 'choose') s = move(s, s.pending.options[0].id);
    // P2: Panel counts as 3, P1 has 1: 2 more
    expect(total(s.players[1].res)).toBe(8);
    expect(s.players[0].res.magenta).toBeGreaterThanOrEqual(1);
    expect(named(s, 'Tall Poppies')).toContain("P1's Tall Poppies: P2 has 2 members more.");
  });
});

describe('Pocket Change (Yellow, round I)', () => {
  it("+1 yellow. Swap 1 of your resources with a rival's, colors your choice. They +1 follower.", () => {
    let s = sceneQ({ quadrants: ['yellow', 'red', 'market', 'gold'], res: [{ red: 2 }, { blue: 2 }] });
    s = take(s, 'yellow.pocketchange');
    expect(s.players[0].res.yellow).toBe(1);
    s = move(s, 'player:1');
    s = move(s, 'swap:red:blue');
    expect(s.players[0].res).toMatchObject({ red: 1, blue: 1 });
    expect(s.players[1].res).toMatchObject({ red: 1, blue: 1 });
    expect(s.players[1].bonus).toBe(1);
  });
});

describe('Bazaar (Yellow, round III)', () => {
  it("+2 yellow. Swap up to 2 of your resources with each rival's, one for one, colors your choice. Each +1 follower per resource swapped.", () => {
    let s = sceneQ({ quadrants: ['yellow', 'red', 'market', 'gold'], n: 3, round: 3, res: [{ red: 5 }, { blue: 3 }, { gold: 3 }] });
    s = take(s, 'yellow.bazaar');
    expect(s.players[0].res.yellow).toBe(2);
    expect(s.pending.prompt).toMatch(/Bazaar: swap which resources with P2/);
    s = move(s, 'swap:red:blue'); s = move(s, 'swap:red:blue');
    expect(s.pending.prompt).toMatch(/with P3/);
    s = move(s, 'swap:red:gold'); s = move(s, 'done');
    expect(s.players[0].res).toMatchObject({ red: 2, blue: 2, gold: 1 });
    expect(s.players[1].bonus).toBe(2);
    expect(s.players[2].bonus).toBe(1);
    passBuys(s);
  });
});
