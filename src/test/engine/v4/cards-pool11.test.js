// @vitest-environment node
// Idea pipeline pool 11 (Nov 7; scripts/ideas/README.md): bot-only candidates, never dealt in a real game. One test per
// sentence of each card's text, through real moves, with the log naming the card.
import { describe, it, expect } from 'vitest';
import { resume, countMembersOfColor } from '../../../engine/v4/core.js';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming, passBuys } from './cards-helpers.js';
import { usePool, price } from './pool-helpers.js';
import { useRetired } from './helpers.js';
useRetired(['red.turnout']);

usePool(['market.giftcards', 'market.blackfriday', 'yellow.pilgrims', 'yellow.joneses', 'red.familyportrait', 'yellow.paintedfaces'],
  ['red.musicalchairs', 'market.keepingup', 'market.cleansweep', 'yellow.worldsfair']);
const named = (s, name) => linesNaming(s.log, name);
const RICH = { gold: 30, red: 30, blue: 30, yellow: 30 };
/** Answer any other card's choice until the named card asks or nothing is pending. */
const until = (s, name) => { while (s.pending?.kind === 'choose' && !s.pending.prompt.startsWith(name)) s = move(s, s.pending.options[0].id); return s; };
const buyCard = (s, uid) => until(move(s, `card:${uid}`), 'none');
const priciest = s => s.shop.reduce((a, u) => (price(s, u) > price(s, a) ? u : a));

describe('Clean Sweep (Blue, round I)', () => {
  it('+2 blue. This turn, after you recruit a member, send every shop member costing less than it to the discard pile, then refill.', () => {
    let s = sceneQ({ quadrants: ['market', 'gold', 'red', 'yellow'], res: [RICH] });
    s = take(s, 'market.cleansweep');
    expect(s.players[0].res.blue).toBe(32);
    const shop = [...s.shop], top = priciest(s);
    const cheaper = shop.filter(u => price(s, u) < price(s, top));
    expect(cheaper.length).toBeGreaterThan(0);
    s = buyCard(s, top);
    for (const u of cheaper) expect(s.discard).toContain(u);
    expect(s.shop.some(u => cheaper.includes(u))).toBe(false);
    expect(named(s, 'Clean Sweep').some(l => /sends .* to the discard pile/.test(l))).toBe(true);
  });
  it('only this turn', () => {
    let s = sceneQ({ quadrants: ['market', 'gold', 'red', 'yellow'], res: [RICH, RICH], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }] });
    s = passBuys(take(s, 'market.cleansweep'));
    s = take(s, 'gold.rush');
    const before = s.discard.length;
    s = buyCard(s, priciest(s));
    expect(s.discard.length).toBe(before);
  });
});

describe('Keeping Up (Blue, round II)', () => {
  it('Recruit an extra time this turn for each rival with more members than you. +1 blue.', () => {
    let s = sceneQ({ quadrants: ['market', 'gold', 'red', 'yellow'], n: 4, round: 2, res: [RICH],
      members: [['red.intern'], ['red.panel', 'yellow.gardener'], ['market.stylist', 'gold.prospector'], []] });
    s = take(s, 'market.keepingup');
    expect(s.players[0].res.blue).toBe(31);
    expect(named(s, 'Keeping Up')).toContain("P1's Keeping Up: 2 rivals have more members, 2 extra recruits this turn.");
    for (let k = 0; k < 3; k++) s = buyCard(s, s.pending.options.find(o => o.kind === 'card').uid);
    expect(s.players[0].members).toHaveLength(4);
    expect(s.pending?.kind === 'buy' && s.pending.options.some(o => o.kind === 'card')).toBe(false);
  });
});

describe('Musical Chairs (Red, round III)', () => {
  it("Swap one of your members with one of each rival's members, each costing up to 3 more than the one you give. +1 red.", () => {
    let s = sceneQ({ quadrants: ['red', 'gold', 'market', 'yellow'], n: 3, round: 3, res: [{ red: 5, gold: 5, blue: 5, yellow: 5 }],
      members: [['red.intern', 'market.stylist'], ['yellow.gardener', 'market.onlooker'], ['gold.prospector']] });
    const intern = uidOf(s, 'red.intern', 0), stylist = uidOf(s, 'market.stylist', 0), garden = uidOf(s, 'yellow.gardener', 1);
    const onlooker = uidOf(s, 'market.onlooker', 1), pros = uidOf(s, 'gold.prospector', 2);
    s = take(s, 'red.musicalchairs');
    expect(s.pending.prompt).toMatch(/Musical Chairs: swap with P2/);
    const opts = s.pending.options.filter(o => o.kind === 'trade');
    expect(opts.every(o => price(s, o.value[1]) <= price(s, o.value[0]) + 3)).toBe(true);
    expect(opts.some(o => o.value[1] === onlooker)).toBe(false); // costs 6 more than anything of P1's
    s = move(s, `trade:${intern}:${garden}`);
    expect(s.players[1].members).toContain(intern);
    expect(s.pending.prompt).toMatch(/with P3/);
    expect(s.pending.options.some(o => o.kind === 'trade' && o.value[0] === garden)).toBe(false); // just swapped in
    s = move(s, `trade:${stylist}:${pros}`);
    expect(s.players[0].members).toEqual(expect.arrayContaining([garden, pros]));
    expect(s.players[2].members).toContain(stylist);
    expect(s.players[0].res.red).toBe(6);
    expect(named(s, 'Musical Chairs').filter(l => /swaps/.test(l))).toHaveLength(2);
  });
});

describe("World's Fair (Yellow, round III)", () => {
  it('Turn up to 3 of each color you hold into followers. +1 yellow.', () => {
    let s = sceneQ({ quadrants: ['yellow', 'gold', 'red', 'market'], round: 3, res: [{ red: 4, blue: 2, yellow: 5 }] });
    s = take(s, 'yellow.worldsfair');
    expect(s.pending.prompt).toMatch(/World's Fair: turn how many/);
    while (s.pending?.kind === 'choose') s = move(s, s.pending.options[0].id); // the most each time
    const p = s.players[0];
    expect(p.bonus).toBe(8);
    expect(p.res).toMatchObject({ red: 1, blue: 0, yellow: 3 });
    expect(named(s, "World's Fair").at(-1)).toBe("P1's World's Fair: +8 followers.");
  });
  it('up to: a color can be kept', () => {
    let s = sceneQ({ quadrants: ['yellow', 'gold', 'red', 'market'], round: 3, res: [{ yellow: 5 }] });
    s = take(s, 'yellow.worldsfair');
    s = move(s, 'n:1');
    expect(s.players[0].res.yellow).toBe(5);
    expect(s.players[0].bonus).toBe(1);
  });
});

describe('Gift Cards (Blue)', () => {
  it('On Use, once per round: give a rival 2 of your resources, then recruit an extra time this turn.', () => {
    let s = sceneQ({ quadrants: ['market', 'gold', 'red', 'yellow'], n: 3, members: [['market.giftcards']], res: [RICH] });
    s = take(s, 'gold.rush');
    const use = `use:${uidOf(s, 'market.giftcards', 0)}`;
    s = move(s, use);
    s = move(s, 'player:2');
    s = move(s, 'color:red'); s = move(s, 'color:red');
    expect(s.players[2].res.red).toBe(2);
    expect(s.players[0].res.red).toBe(28);
    expect(named(s, 'Gift Cards')).toContain("P1's Gift Cards: recruit an extra time this turn.");
    expect(s.pending.options.some(o => o.id === use)).toBe(false); // once per round
    s = buyCard(s, s.pending.options.find(o => o.kind === 'card').uid);
    s = buyCard(s, s.pending.options.find(o => o.kind === 'card').uid);
    expect(s.players[0].members).toHaveLength(3);
  });
});

describe('Black Friday Crowd (Blue)', () => {
  it('On Use, once per game: recruit as many times as you like this turn.', () => {
    let s = sceneQ({ quadrants: ['market', 'gold', 'red', 'yellow'], members: [['market.blackfriday']], res: [{ gold: 60, red: 60, blue: 60, yellow: 60 }],
      queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }] });
    s = take(s, 'gold.rush');
    const bf = uidOf(s, 'market.blackfriday', 0);
    s = move(s, `use:${bf}`);
    for (let k = 0; k < 5; k++) s = buyCard(s, s.pending.options.find(o => o.kind === 'card').uid);
    expect(s.players[0].members).toHaveLength(6);
    expect(s.pending.kind).toBe('buy');
    s = passBuys(s);
    // the next turn: the crowd is gone (once per game) and no longer adds recruits
    expect(s.cards[bf].friday).toBeUndefined();
    s = take(s, 'red.turnout');
    expect(s.pending.options.some(o => o.id === `use:${bf}`)).toBe(false);
  });
});

describe('Pilgrims (Yellow)', () => {
  it('Round End: +1 follower per color among the spaces your minions are on.', () => {
    let s = sceneQ({ quadrants: ['yellow', 'gold', 'red', 'market'], n: 2, members: [['yellow.pilgrims']], queue: [] });
    s.slots = { '0-0': 0, '0-1': 0, '2-0': 0, '3-1': 1 };
    s.queue = [{ t: 'allPlaced' }];
    s = resume(s);
    expect(s.players[0].bonus).toBe(2);
    expect(named(s, 'Pilgrims')).toEqual(["P1's Pilgrims: minions on yellow, red, +2 followers."]);
  });
});

describe('Joneses (Yellow)', () => {
  it('On Use, once per game: raise each of your colors to match the rival who holds the most of it.', () => {
    let s = sceneQ({ quadrants: ['yellow', 'gold', 'red', 'market'], n: 3, members: [['yellow.joneses']],
      res: [{ red: 1, gold: 9 }, { red: 5, blue: 3 }, { red: 2, yellow: 4 }] });
    s = take(s, 'gold.rush');
    const use = `use:${uidOf(s, 'yellow.joneses', 0)}`;
    s = move(s, use);
    expect(s.players[0].res).toMatchObject({ red: 5, blue: 3, yellow: 4 });
    expect(s.players[0].res.gold).toBeGreaterThanOrEqual(9); // already the most: unchanged by Joneses
    expect(s.pending.options.some(o => o.id === use)).toBe(false);
  });
});

describe('Painted Faces (Yellow)', () => {
  it('Each of your members is also yellow.', () => {
    const s = sceneQ({ quadrants: ['yellow', 'gold', 'red', 'market'], n: 2, members: [['yellow.paintedfaces', 'red.intern', 'market.stylist'], ['red.panel']] });
    expect(countMembersOfColor(s, s.players[0], 'yellow')).toBe(3);
    expect(countMembersOfColor(s, s.players[0], 'red')).toBe(1); // still its own color too
    expect(countMembersOfColor(s, s.players[1], 'yellow')).toBe(0); // yours only
  });
});

describe('Family Portrait (Red)', () => {
  const end = members => sceneQ({ quadrants: ['red', 'market', 'yellow', 'gold'], members: [members], queue: [{ t: 'finish' }] }).players[0].final.parts.join(' ');
  it('Game End: if all your members are one color, +12 followers.', () => {
    expect(end(['red.familyportrait', 'red.intern', 'red.panel'])).toMatch(/Family Portrait \+12/);
    expect(end(['red.familyportrait', 'red.intern', 'market.stylist'])).not.toMatch(/Family Portrait/);
  });
  it('(grey counts as a color): a grey member breaks a red portrait; Painted Faces makes every member yellow', () => {
    expect(end(['red.familyportrait', 'benders.frontrunner'])).not.toMatch(/Family Portrait/);
    expect(end(['red.familyportrait', 'yellow.paintedfaces', 'market.stylist'])).toMatch(/Family Portrait \+12/);
  });
});
