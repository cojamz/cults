// @vitest-environment node
// Idea pipeline pool 6 (Nov 7; scripts/ideas/README.md): bot-only candidates, never dealt in a real game. One test per
// sentence of each card's text, through real moves, with the log naming the card.
import { describe, it, expect } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming, passBuys } from './cards-helpers.js';
import { usePool, price, still, go } from './pool-helpers.js';

usePool(['echo.openingact', 'silver.almoners', 'silver.dinnerhosts', 'benders.chameleons', 'benders.mourners'],
  ['echo.curtaincall', 'red.familyreunion', 'red.tradeins', 'trading.cleanslate']);
const named = (s, name) => linesNaming(s.log, name);
const RICH = { gold: 30, silver: 30, blue: 30, yellow: 30, red: 30 };
/** Answer any other card's choice (an On Recruit, a pay sheet) until the named card asks again or nothing is pending. */
const until = (s, name) => { while (s.pending?.kind === 'choose' && !s.pending.prompt.startsWith(name)) s = move(s, s.pending.options[0].id); return s; };
/** Put pile members matching pred into the shop's first slots; returns their uids. */
function toShop(s, preds) {
  const out = preds.map(pr => { const u = s.pile.find(x => pr(x) && !s.shop.includes(x)); if (u === undefined) throw new Error('no pile member fits'); s.pile.splice(s.pile.indexOf(u), 1); return u; });
  s.shop.splice(0, out.length, ...out);
  return out;
}
const q = (s, u) => defById(s.cards[u].def).quadrant;

describe('Curtain Call (Green, round III)', () => {
  it('Copy every action you have a minion on (not a rival\'s)', () => {
    let s = sceneQ({ quadrants: ['echo', 'gold', 'purple', 'market'], round: 3, queue: [0, 1, 0, 1, 0].map(p => ({ t: 'turn', p })) });
    s = passBuys(take(s, 'gold.rush')); // P1: Golden Years +6 gold
    s = passBuys(take(s, 'gold.jv')); // P2: Kickback
    if (s.pending?.kind === 'choose') s = move(s, s.pending.options[0].id);
    s = passBuys(s);
    s = passBuys(take(s, 'echo.chant')); // P1: Build Up +5 green
    s = passBuys(take(s, 'purple.skip')); // P2
    const gold = s.players[0].res.gold, green = s.players[0].res.green;
    s = take(s, 'echo.curtaincall');
    while (s.pending?.kind === 'choose') s = move(s, s.pending.options[0].id);
    expect(s.players[0].res.gold - gold).toBe(6);
    expect(s.players[0].res.green - green).toBe(5);
    expect(named(s, 'Curtain Call')[0]).toBe("P1's Curtain Call: copies Golden Years, Build Up.");
  });
});

describe('Opening Act (Green)', () => {
  it('Round Start: copy any action (open this round; Green\'s copy spaces left out)', () => {
    let s = still({ quadrants: ['echo', 'gold', 'purple', 'market'], members: [['echo.openingact']] });
    s = go(s, [{ t: 'round', r: 2 }]);
    expect(s.pending.prompt).toMatch(/Opening Act/);
    const names = s.pending.options.map(o => o.label.split(':')[0]);
    expect(names).toEqual(expect.arrayContaining(['Golden Years', 'Collect Debts', 'Build Up']));
    expect(names).not.toEqual(expect.arrayContaining(['Echo']));
    s = move(s, s.pending.options.find(o => o.label.startsWith('Golden Years')).id);
    expect(s.players[0].res.gold).toBe(4);
  });
});

describe('Almoners (Silver)', () => {
  it('Round End: give all your silver to rivals, split as you choose. +1 follower per silver given.', () => {
    let s = still({ quadrants: ['silver', 'red', 'market', 'yellow'], n: 3, members: [['silver.almoners']], res: [{ silver: 3 }] });
    s = go(s, [{ t: 'allPlaced' }]);
    s = move(s, 'player:1'); s = move(s, 'player:1'); s = move(s, 'player:2');
    expect(s.players[0].res.silver).toBe(0);
    expect(s.players[1].res.silver).toBe(2);
    expect(s.players[2].res.silver).toBe(1);
    expect(s.players[0].bonus).toBe(3);
    expect(named(s, 'Almoners').at(-1)).toBe("P1's Almoners: gave 3 silver (2 to P2, 1 to P3), +3 followers.");
  });
});

describe('Dinner Hosts (Silver)', () => {
  it('On Use, once per round: give each rival 2 silver from the bank. Recruit.', () => {
    let s = sceneQ({ quadrants: ['silver', 'gold', 'market', 'yellow'], n: 3, members: [['silver.dinnerhosts']], res: [{ gold: 30, silver: 30, blue: 30, yellow: 30 }] });
    s = take(s, 'gold.rush');
    const use = `use:${uidOf(s, 'silver.dinnerhosts', 0)}`;
    s = move(s, use);
    expect(s.players[1].res.silver).toBe(2);
    expect(s.players[2].res.silver).toBe(2);
    expect(s.pending.options.some(o => o.id === use)).toBe(false); // once per round
    s = until(move(s, s.pending.options.find(o => o.kind === 'card').id), 'none');
    s = until(move(s, s.pending.options.find(o => o.kind === 'card').id), 'none'); // the extra recruit and the turn's own
    expect(s.players[0].members).toHaveLength(3);
  });
});

describe('Family Reunion (Red, round I)', () => {
  it('Recruit a member of a color you already have, costing up to 4, for free. +1 red.', () => {
    let s = sceneQ({ quadrants: ['red', 'gold', 'market', 'yellow'], members: [['red.panel']], shop: ['red.intern', 'benders.frontrunner'] });
    const mine = uidOf(s, 'red.intern', 'shop'), other = uidOf(s, 'benders.frontrunner', 'shop');
    expect(price(s, mine)).toBeLessThanOrEqual(4);
    expect(price(s, other)).toBeLessThanOrEqual(4);
    s = take(s, 'red.familyreunion');
    expect(s.pending.options.map(o => o.value)).toContain(mine);
    expect(s.pending.options.map(o => o.value)).not.toContain(other);
    s = move(s, `card:${mine}`);
    expect(s.players[0].members).toContain(mine);
    expect(s.players[0].res.red).toBe(1);
  });
});

describe('Trade-Ins (Red, round III)', () => {
  it('Swap any number of your members with shop members costing up to 2 more each. +1 red.', () => {
    let s = still({ quadrants: ['red', 'gold', 'market', 'yellow'], round: 3, members: [['market.stylist', 'market.onlooker']] });
    const a = uidOf(s, 'market.stylist', 0), b = uidOf(s, 'market.onlooker', 0);
    s = go(s, [{ t: 'turn', p: 0 }]);
    s = take(s, 'red.tradeins');
    expect(s.players[0].res.red).toBe(1);
    expect(s.pending.options.filter(o => o.kind === 'trade').every(o => price(s, o.value[1]) <= price(s, o.value[0]) + 2)).toBe(true);
    const first = s.pending.options.find(o => o.kind === 'trade' && o.value[0] === a);
    s = until(move(s, first.id), 'Trade-Ins');
    const got = first.value[1];
    expect(s.players[0].members).toContain(got);
    // the member just swapped in isn't offered again; the other one is
    expect(s.pending.options.some(o => o.kind === 'trade' && o.value[0] === got)).toBe(false);
    s = until(move(s, s.pending.options.find(o => o.kind === 'trade' && o.value[0] === b && o.value[1] !== a).id), 'Trade-Ins');
    expect(s.players[0].members).not.toContain(a);
    expect(s.players[0].members).not.toContain(b);
    expect(named(s, 'Trade-Ins').filter(l => /swaps .* from the shop/.test(l))).toHaveLength(2);
  });
});

describe('Chameleons (grey)', () => {
  it('On Recruit: choose a color. This member is that color.', () => {
    let s = sceneQ({ quadrants: ['red', 'gold', 'market', 'yellow'], shop: ['benders.chameleons'], res: [RICH] });
    s = take(s, 'gold.rush');
    s = move(s, `card:${uidOf(s, 'benders.chameleons', 'shop')}`);
    expect(s.pending.prompt).toMatch(/Chameleons/);
    s = move(s, 'color:red');
    const u = uidOf(s, 'benders.chameleons', 0);
    expect(s.cards[u].asColor).toBe('red');
    expect(named(s, 'Chameleons')).toEqual(["P1's Chameleons: this member is Red."]);
  });
});

describe('Mourners (grey)', () => {
  it('Whenever a member goes from any cult to the discard pile, +1 follower (a shop member going there pays nothing)', () => {
    let s = sceneQ({ quadrants: ['trading', 'market', 'red', 'yellow'], round: 2, members: [['market.stylist', 'market.onlooker'], ['benders.mourners']], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }] });
    s = take(s, 'trading.cleanslate');
    s = move(s, s.pending.options.find(o => o.kind === 'card').id);
    s = move(s, s.pending.options.find(o => o.kind === 'card').id); // both cast out: nothing left to ask
    expect(s.players[1].bonus).toBe(2);
    expect(named(s, 'Mourners')).toHaveLength(2);
    s = passBuys(s);
    s = take(s, 'market.pricecheck'); // Bury: a shop member to the discard pile
    while (s.pending?.kind === 'choose') s = move(s, s.pending.options[0].id);
    expect(s.players[1].bonus).toBe(2);
  });
});
