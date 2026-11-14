// @vitest-environment node
// Idea pipeline pool 15 (Nov 7, round 2; /mnt/project-files/idea-pipeline/ideas/pool15.md): bot-only candidates, never
// dealt in a real game. One test per sentence of each card's text, through real moves, with the log naming the card.
// Second Billing, Part Exchange (cards-pool15b) and Mashup (cards-pool15c) need their own files: each takes the only
// live round III space of its color.
import { describe, it, expect } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming, passBuys } from './cards-helpers.js';
import { usePool, price, still, go } from './pool-helpers.js';

usePool(['red.matriarchs', 'benders.sellswords'],
  ['silver.passtheplate', 'silver.passiton', 'silver.secretsanta', 'echo.topbilling', 'trading.giftbaskets', 'trading.goodiebags',
    'trading.heirlooms', 'trading.swansong', 'yellow.lostandfound', 'thieves.dues', 'purple.buttin', 'red.seatshuffle']);
const named = (s, name) => linesNaming(s.log, name);
const turn = (...ps) => ps.map(p => ({ t: 'turn', p }));
const holder = s => (s.goesLast && s.goesLast.round === s.round ? s.goesLast.pid : null);
const until = (s, name) => { while (s.pending?.kind === 'choose' && !s.pending.prompt.startsWith(name)) s = move(s, s.pending.options[0].id); return s; };

describe('Pass the Plate and Pass It On (Silver, round I)', () => {
  const Q = ['silver', 'gold', 'red', 'market'];
  it('Pass the Plate: +1 silver. Then every player, you too, gives half their silver, rounded down, to the player on their left.', () => {
    let s = sceneQ({ quadrants: Q, n: 3, res: [{}, { silver: 5 }, { silver: 2 }] });
    s = take(s, 'silver.passtheplate');
    expect(s.players.map(p => p.res.silver)).toEqual([2, 3, 3]); // P1's 1 can't halve; P3's 2 sends 1
    expect(named(s, 'Pass the Plate').at(-1)).toBe("P1's Pass the Plate: P2 gives P3 2, P3 gives P1 1.");
  });
  it('Pass It On: +1 silver. Give all your silver to the player on your left, then take all the silver of the player on your right.', () => {
    let s = sceneQ({ quadrants: Q, n: 4, res: [{ silver: 3 }, { silver: 5 }, { silver: 4 }, { silver: 2 }] });
    s = take(s, 'silver.passiton');
    expect(s.players.map(p => p.res.silver)).toEqual([2, 9, 4, 0]); // P3, across the table, untouched
    expect(named(s, 'Pass It On').at(-1)).toBe("P1's Pass It On: gives P2 4, then takes P4's 2.");
  });
});

describe('Secret Santa (Silver, round II)', () => {
  it("Move up to 8 of one rival's silver to another rival. +1 follower per silver moved. +1 silver.", () => {
    let s = go(sceneQ({ quadrants: ['silver', 'gold', 'red', 'purple'], n: 3, round: 2, res: [{}, { silver: 11 }, {}], queue: [] }), turn(0, 1, 2));
    s = take(s, 'silver.secretsanta');
    expect(s.players[0].res.silver).toBe(1);
    expect(s.pending.prompt).toMatch(/^Secret Santa: move up to 8 of whose silver/);
    s = move(s, 'trade:1:2');
    expect([s.players[1].res.silver, s.players[2].res.silver]).toEqual([3, 8]);
    expect(s.players[0].bonus).toBe(8);
    expect(named(s, 'Secret Santa').at(-1)).toBe("P1's Secret Santa: moves P2's 8 silver to P3, +8 followers.");
  });
});

describe('Top Billing (Green, round III)', () => {
  const Q = ['echo', 'gold', 'purple', 'market'];
  it("Copy any round III action (a rival's taken one). +1 green.", () => {
    let s = sceneQ({ quadrants: Q, round: 3, res: [{}, { gold: 5 }], queue: [1, 0].map(p => ({ t: 'turn', p })) });
    s = passBuys(take(s, 'gold.strike')); // P2: Double Down
    s = take(s, 'echo.topbilling');
    expect(s.players[0].res.green).toBe(1);
    expect(s.pending.prompt).toBe('Top Billing: copy which round III action?');
    const opt = s.pending.options.find(o => o.label.startsWith('Double Down (P2)'));
    expect(s.pending.options.some(o => o.label.startsWith('Top Billing'))).toBe(false);
    s = move(s, opt.id);
    expect(s.log.some(l => /Top Billing/.test(l) || /copies Double Down/.test(l))).toBe(true);
  });
  it('an open round III action is done', () => {
    let s = sceneQ({ quadrants: Q, round: 3, res: [{ gold: 4 }] });
    s = take(s, 'echo.topbilling');
    s = move(s, s.pending.options.find(o => o.label.startsWith('Double Down:')).id);
    expect(s.players[0].res.gold).toBe(8);
  });
});

describe('Gift Baskets and Goodie Bags (White, round I)', () => {
  const Q = ['trading', 'red', 'market', 'yellow'];
  it('Gift Baskets: give up to 2 of your non-white resources to rivals, no more than 1 each. +4 white per resource given. +1 white.', () => {
    let s = sceneQ({ quadrants: Q, n: 3, res: [{ red: 3 }] });
    s = take(s, 'trading.giftbaskets');
    expect(s.players[0].res.white).toBe(1);
    s = move(s, 'give:1:red');
    expect(s.pending.options.some(o => o.id.startsWith('give:1:'))).toBe(false);
    s = move(s, 'give:2:red');
    expect(s.players[0].res.white).toBe(9);
    expect(named(s, 'Gift Baskets').at(-1)).toBe("P1's Gift Baskets: gave P3 1 red, +4 white.");
  });
  it('Goodie Bags: give up to 3 of your non-white resources to rivals, no more than 1 each. +3 white per resource given. +1 white.', () => {
    let s = sceneQ({ quadrants: Q, n: 4, res: [{ red: 3, blue: 1 }] });
    s = take(s, 'trading.goodiebags');
    for (const id of ['give:1:red', 'give:2:blue', 'give:3:red']) s = move(s, id);
    expect(s.players[0].res.white).toBe(10);
    expect([1, 2, 3].map(i => s.players[i].res.red + s.players[i].res.blue)).toEqual([1, 1, 1]);
  });
});

describe('Heirlooms and Swan Song (White, round II)', () => {
  const Q = ['trading', 'gold', 'market', 'purple'], Y = ['trading', 'gold', 'red', 'yellow'];
  it('Heirlooms: give one of your members to a rival. Gain followers equal to its cost. +1 white.', () => {
    let s = sceneQ({ quadrants: Q, round: 2, n: 3, members: [['market.stylist', 'purple.secondwind']] });
    const u = uidOf(s, 'purple.secondwind', 0), c = price(s, u);
    s = take(s, 'trading.heirlooms');
    s = move(s, `card:${u}`);
    s = move(s, 'player:2');
    expect(s.players[2].members).toContain(u);
    expect(s.players[0].bonus).toBe(c);
    expect(s.players[0].res.white).toBe(1);
    expect(named(s, 'Heirlooms')).toEqual(["P1's Heirlooms: gives Go-Getter to P3.", `P1's Heirlooms: +${c} followers, +1 white.`]);
  });
  it("Swan Song: discard one of your members, using its once-per-round On Use first, even if it's used up. +2 white.", () => {
    let s = still({ quadrants: Y, members: [['yellow.leveler']], res: [{ gold: 3 }, { gold: 2 }], round: 2 });
    const lev = uidOf(s, 'yellow.leveler', 0);
    s.cards[lev].used = true;
    s = go(s, turn(0, 1));
    s = take(s, 'trading.swansong');
    expect(s.players[0].res.white).toBe(2);
    s = move(s, `card:${lev}`);
    expect(named(s, 'Swan Song')).toContain("P1's Swan Song: uses Leveler one last time.");
    s = until(s, 'none');
    expect(s.players[0].members).not.toContain(lev);
    expect(s.discard).toContain(lev);
  });
  it('Swan Song: a once-per-game On Use never fires; the member is still discarded', () => {
    let s = still({ quadrants: Q, members: [['gold.speculator']], res: [{ gold: 3 }], round: 2 });
    const spec = uidOf(s, 'gold.speculator', 0);
    s = go(s, turn(0, 1));
    s = take(s, 'trading.swansong');
    s = move(s, `card:${spec}`);
    expect(s.players[0].res.gold).toBe(3);
    expect(s.discard).toContain(spec);
    expect(named(s, 'Swan Song').filter(l => !/\+2 white/.test(l))).toEqual(["P1's Swan Song: discards Speculator."]);
  });
});

describe('Lost and Found (Yellow, round II)', () => {
  it('Gain 1 resource of each color that has a member in the discard pile. +1 yellow.', () => {
    let s = still({ quadrants: ['yellow', 'red', 'market', 'gold'], round: 2 });
    const of = q => s.pile.filter(u => defById(s.cards[u].def).quadrant === q);
    const pile = [...of('red').slice(0, 2), of('market')[0]];
    for (const u of pile) s.pile.splice(s.pile.indexOf(u), 1);
    s.discard = pile;
    s = go(s, turn(0, 1));
    s = take(s, 'yellow.lostandfound');
    expect([s.players[0].res.red, s.players[0].res.blue, s.players[0].res.gold || 0, s.players[0].res.yellow]).toEqual([1, 1, 0, 1]);
    expect(named(s, 'Lost and Found').at(-1)).toBe("P1's Lost and Found: +1 red, +1 blue from the discard pile.");
  });
});

describe('Dues (Magenta, round II)', () => {
  it('Choose a rival. Steal 1 resource per member they have; they choose which. +1 magenta.', () => {
    let s = sceneQ({ quadrants: ['thieves', 'gold', 'red', 'market'], round: 2, members: [[], ['red.intern', 'market.stylist']], res: [{}, { gold: 3, red: 2 }] });
    s = take(s, 'thieves.dues');
    if (s.pending?.options.some(o => o.kind === 'player')) s = move(s, 'player:1');
    expect(s.pending.prompt).toBe('Dues: P1 steals 2 more of your resources. Give up which?');
    expect(s.pending.p ?? s.pending.player).toBe(1);
    s = move(s, 'give:red');
    s = move(s, 'give:red');
    expect(s.players[0].res.red).toBe(2);
    expect(s.players[1].res.gold).toBe(3);
    expect(s.players[0].res.magenta).toBe(1);
    expect(named(s, 'Dues').at(-1)).toBe("P1's Dues: P2 gives up 2 red.");
  });
});

describe('Butt In (Purple, round II)', () => {
  const Q = ['purple', 'gold', 'red', 'market'];
  it('+3 purple. Take the Goes Last token. If a rival held it, that rival skips their next turn.', () => {
    let s = sceneQ({ quadrants: Q, round: 2, queue: [1, 0, 1, 0, 1].map(p => ({ t: 'turn', p })) });
    s = passBuys(take(s, 'purple.skip'));
    const purple = s.players[0].res.purple;
    s = take(s, 'purple.buttin');
    expect(s.players[0].res.purple - purple).toBe(3);
    expect(holder(s)).toBe(0);
    expect(s.queue.some(t => t.t === 'content' && t.h === 'purple.skipped' && t.p === 1 && t.data?.why === 'Butt In')).toBe(true);
  });
  it('nobody held it: nobody skips', () => {
    let s = sceneQ({ quadrants: Q, round: 2, queue: [0, 1, 0, 1].map(p => ({ t: 'turn', p })) });
    s = take(s, 'purple.buttin');
    expect(holder(s)).toBe(0);
    expect(s.queue.some(t => t.h === 'purple.skipped' && t.data?.why === 'Butt In')).toBe(false);
  });
});

describe('Seat Shuffle (Red, round III)', () => {
  it('For each rival, you may swap a different one of your members for one of theirs costing up to 3 more. +1 red.', () => {
    let s = sceneQ({ quadrants: ['red', 'gold', 'market', 'yellow'], n: 3, round: 3, res: [{ red: 5, gold: 5, blue: 5, yellow: 5 }],
      members: [['red.intern', 'market.stylist'], ['yellow.gardener', 'market.onlooker'], ['gold.prospector']] });
    const intern = uidOf(s, 'red.intern', 0), stylist = uidOf(s, 'market.stylist', 0), garden = uidOf(s, 'yellow.gardener', 1), pros = uidOf(s, 'gold.prospector', 2);
    s = take(s, 'red.seatshuffle');
    expect(s.pending.prompt).toMatch(/^Seat Shuffle: swap with P2/);
    s = until(move(s, `trade:${intern}:${garden}`), 'Seat Shuffle');
    expect(s.pending.options.some(o => o.kind === 'trade' && o.value[0] === garden)).toBe(false); // a different member each time
    s = until(move(s, `trade:${stylist}:${pros}`), 'none');
    expect(s.players[0].members).toEqual(expect.arrayContaining([garden, pros]));
    expect(s.players[0].res.red).toBe(6);
    expect(named(s, 'Seat Shuffle').filter(l => /swaps/.test(l))).toHaveLength(2);
  });
});

describe('Matriarchs (Red)', () => {
  it('Game End: +2 followers per member card of your biggest color, each card counted once (Panel counts as 1)', () => {
    const s = sceneQ({ quadrants: ['red', 'market', 'purple', 'yellow'], members: [['red.matriarchs', 'red.panel', 'market.stylist']], queue: [{ t: 'finish' }] });
    expect(s.over).toBe(true);
    expect(s.players[0].final.parts.join(' ')).toMatch(/Matriarchs \+4/);
  });
});

describe('Sellswords (grey)', () => {
  it('On Use, once per round: steal 3 resources of your choice from a rival, then give them this member', () => {
    let s = sceneQ({ quadrants: ['market', 'gold', 'red', 'thieves'], n: 3, members: [['benders.sellswords']], res: [{}, { gold: 3, red: 2 }, {}] });
    const u = uidOf(s, 'benders.sellswords', 0);
    s = move(s, `use:${u}`);
    expect(s.pending.options.map(o => o.value)).toEqual([1]); // P3 holds nothing, so isn't offered
    s = move(s, 'player:1');
    expect(s.pending.prompt).toBe("Sellswords: steal which of P2's resources? (3 left)");
    for (const id of ['take:1:red', 'take:1:red', 'take:1:gold']) s = move(s, id);
    expect([s.players[0].res.red, s.players[0].res.gold]).toEqual([2, 1]);
    expect(s.players[1].members).toContain(u);
    expect(named(s, 'Sellswords')).toEqual(["P1's Sellswords: steals 2 red, 1 gold from P2.", "P1's Sellswords: joins P2's cult."]);
  });
});
