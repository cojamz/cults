// @vitest-environment node
// Idea pipeline pool 5 (Nov 7; scripts/ideas/README.md): bot-only candidates, never dealt in a real game. One test per
// sentence of each card's text, through real moves, with the log naming the card.
import { describe, it, expect } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming } from './cards-helpers.js';
import { usePool, price, total, still, go, discard } from './pool-helpers.js';
import { placed } from './placed-helpers.js';

usePool(['red.clanelders', 'echo.benchwarmers', 'thieves.middlemen', 'purple.sweepers', 'yellow.globetrotters', 'trading.hermits'],
  ['market.rummage', 'silver.giftexchange', 'yellow.oddsandends', 'trading.cleanslate']);
const named = (s, name) => linesNaming(s.log, name);
const cheapest = (s, max, pred = () => true) => s.pile.filter(u => price(s, u) <= max && pred(u));

describe('Clan Elders (Red)', () => {
  it('Game End: +2 followers per member of your biggest color (a member counting 3 counts 3)', () => {
    let s = sceneQ({ quadrants: ['red', 'market', 'purple', 'yellow'], members: [['red.clanelders', 'red.panel', 'market.stylist', 'market.onlooker']], queue: [{ t: 'finish' }] });
    expect(s.over).toBe(true);
    // red: Clan Elders 1 + Panel 3 = 4 members; blue: 2
    expect(s.players[0].final.parts.join(' ')).toMatch(/Clan Elders \+8/);
  });
});

describe('Bench Warmers (Green)', () => {
  it('Round End: +2 followers per minion you have on Green spaces (not a rival\'s)', () => {
    let s = still({ quadrants: ['echo', 'market', 'purple', 'yellow'], members: [['echo.benchwarmers']] });
    s.slots = { '0-0': 0, '0-1': 0, '0-2': 1, '1-0': 0 };
    s = go(s, [{ t: 'allPlaced' }]);
    expect(s.players[0].bonus).toBe(4);
    expect(named(s, 'Bench Warmers')).toEqual(["P1's Bench Warmers: 2 minions on Green spaces, +4 followers."]);
  });
});

describe('Middlemen (Magenta)', () => {
  it('Whenever a rival steals from you, steal the same number from another rival (you pick which)', () => {
    let s = sceneQ({ quadrants: ['thieves', 'red', 'market', 'yellow'], n: 4, members: [[], ['thieves.middlemen']],
      res: [{}, { red: 5 }, { blue: 4 }, { yellow: 4 }], queue: [{ t: 'turn', p: 0 }] });
    s = take(placed(s, 0, 2), 'thieves.pickpocket'); // Help Yourself's third minion this round: steal 3
    for (let k = 0; k < 3 && s.pending?.prompt?.startsWith('Help Yourself'); k++) s = move(s, s.pending.options.find(o => o.id.startsWith('take:1:')).id);
    // each steal from P2 asks P2 which other rival (not the thief) to steal the same number from
    let stolen = 0;
    while (s.pending?.prompt?.startsWith('Middlemen')) {
      expect(s.pending.player).toBe(1);
      expect(s.pending.options.map(o => o.value).sort()).toEqual([2, 3]);
      stolen += Number(s.pending.prompt.match(/stole (\d+)/)[1]);
      s = move(s, 'player:2');
    }
    expect(5 - s.players[1].res.red).toBe(3);
    expect(stolen).toBe(3);
    expect(4 - s.players[2].res.blue).toBe(3);
    expect(s.players[1].res.blue).toBe(3);
    expect(s.players[0].res.blue || 0).toBe(0); // never from the thief
  });
});

describe('Rummage (Blue, round II)', () => {
  it('Recruit a member from the discard pile costing up to 6, for free. +1 blue.', () => {
    let s = still({ quadrants: ['market', 'red', 'purple', 'yellow'], round: 2 });
    // the cheap one can sit in the shop since the Nov 11 member sort left the piles with few members at 6 or less
    const cheap = cheapest(s, 5)[0] ?? s.shop.find(u => price(s, u) <= 5), dear = s.pile.find(u => price(s, u) > 5); // the cap is 5 in code (RUMMAGE_CAP)
    for (const k of ['pile', 'shop']) s[k] = s[k].filter(u => u !== cheap && u !== dear);
    s.discard = [cheap, dear];
    s = go(s, [{ t: 'turn', p: 0 }]);
    s = take(s, 'market.rummage');
    expect(s.pending.options.map(o => o.value)).toEqual([cheap]);
    s = move(s, `card:${cheap}`);
    expect(s.players[0].members).toEqual([cheap]);
    expect(s.players[0].res.blue).toBe(1);
    expect(s.discard).toEqual([dear]);
    expect(named(s, 'Rummage').some(l => /recruits .* from the discard pile for free/.test(l))).toBe(true);
  });
});

describe('Sweepers (Purple)', () => {
  it("Round End: if you placed the round's last minion, recruit a member costing up to 5, for free", () => {
    for (const last of [0, 1]) {
      let s = still({ quadrants: ['purple', 'red', 'market', 'yellow'], members: [['purple.sweepers']] });
      const u = cheapest(s, 5)[0];
      s.pile.splice(s.pile.indexOf(u), 1); s.shop[0] = u;
      s.turns = [1, 0, last];
      s = go(s, [{ t: 'allPlaced' }]);
      if (last === 1) { expect(named(s, 'Sweepers')).toEqual([]); continue; }
      expect(s.pending.options.every(o => price(s, o.value) <= 5)).toBe(true);
      s = move(s, `card:${u}`);
      expect(s.players[0].members).toContain(u);
      expect(named(s, 'Sweepers').at(-1)).toMatch(/recruits .* for free/);
    }
  });
});

describe('Gift Exchange (Silver, round II)', () => {
  it('Give each rival 2 silver from the bank. Recruit a member; your silver pays for any color.', () => {
    let s = sceneQ({ quadrants: ['silver', 'red', 'market', 'yellow'], n: 3, round: 2, shop: ['red.panel'], res: [{ silver: 20 }] });
    s = take(s, 'silver.giftexchange');
    expect(s.players[1].res.silver).toBe(2);
    expect(s.players[2].res.silver).toBe(2);
    const panel = uidOf(s, 'red.panel', 'shop'), c = price(s, panel);
    s = move(s, `card:${panel}`); // a red member, paid all in silver
    if (s.pending?.kind === 'choose' && /how do you pay/.test(s.pending.prompt)) s = move(s, s.pending.options[0].id);
    expect(s.players[0].members).toContain(panel);
    expect(s.players[0].res.silver).toBe(20 - c);
    expect(named(s, 'Gift Exchange').some(l => /pays \d+ silver for Panel/.test(l))).toBe(true);
  });
  it('Gift Exchange: "Recruit nothing" keeps your silver', () => {
    let s = sceneQ({ quadrants: ['silver', 'red', 'market', 'yellow'], round: 2, res: [{ silver: 20 }] });
    s = take(s, 'silver.giftexchange');
    s = move(s, 'none');
    expect(s.players[0].res.silver).toBe(20);
  });
});

describe('Globetrotters (Yellow)', () => {
  it('Round End: recruit a shop member of a color none of your members have, costing up to 6, for free', () => {
    let s = still({ quadrants: ['yellow', 'red', 'market', 'purple'], members: [['yellow.globetrotters']] });
    const fresh = cheapest(s, 6, u => defById(s.cards[u].def).quadrant !== 'yellow' && defById(s.cards[u].def).quadrant !== 'guest');
    const same = cheapest(s, 6, u => defById(s.cards[u].def).quadrant === 'yellow');
    const pick = [fresh[0], ...same.slice(0, 1)];
    for (const u of pick) s.pile.splice(s.pile.indexOf(u), 1);
    s.shop.splice(0, pick.length, ...pick);
    s = go(s, [{ t: 'allPlaced' }]);
    const offered = s.pending.options.map(o => o.value);
    expect(offered).toContain(fresh[0]);
    for (const u of same) expect(offered).not.toContain(u);
    expect(offered.every(u => price(s, u) <= 6)).toBe(true);
    s = move(s, `card:${fresh[0]}`);
    expect(s.players[0].members).toContain(fresh[0]);
    expect(named(s, 'Globetrotters').at(-1)).toMatch(/recruits .* for free/);
  });
});

describe('Odds and Ends (Yellow, round I)', () => {
  it("+1 of each color you don't hold", () => {
    let s = sceneQ({ quadrants: ['yellow', 'red', 'market', 'purple'], res: [{ red: 2 }] });
    s = take(s, 'yellow.oddsandends');
    expect(s.players[0].res).toEqual({ yellow: 1, red: 2, blue: 1, purple: 1 });
    expect(named(s, 'Odds and Ends')).toEqual(["P1's Odds and Ends: +1 yellow, +1 blue, +1 purple."]);
  });
});

describe('Hermits (White)', () => {
  it('Round End: if you have 3 or fewer members, +3 followers', () => {
    for (const [extra, want] of [[['market.stylist', 'market.onlooker'], 3], [['market.stylist', 'red.panel'], 0]]) {
      let s = still({ quadrants: ['trading', 'red', 'market', 'yellow'], members: [['trading.hermits', ...extra]] });
      s = go(s, [{ t: 'allPlaced' }]);
      expect(s.players[0].bonus).toBe(want);
    }
  });
});

describe('Clean Slate (White, round II)', () => {
  it('Discard any number of your members. +3 followers each.', () => {
    let s = sceneQ({ quadrants: ['trading', 'red', 'market', 'yellow'], round: 2, members: [['market.stylist', 'market.onlooker', 'red.panel']] });
    const a = uidOf(s, 'market.stylist', 0), b = uidOf(s, 'market.onlooker', 0);
    s = take(s, 'trading.cleanslate');
    s = move(s, `card:${a}`);
    s = move(s, `card:${b}`);
    s = move(s, 'done');
    expect(s.players[0].members).toHaveLength(1);
    expect(s.discard).toEqual(expect.arrayContaining([a, b]));
    expect(s.players[0].bonus).toBe(6);
    let z = sceneQ({ quadrants: ['trading', 'red', 'market', 'yellow'], round: 2, members: [['market.stylist']] });
    z = take(z, 'trading.cleanslate');
    z = move(z, 'done');
    expect(z.players[0].bonus).toBe(0);
    expect(z.players[0].members).toHaveLength(1);
  });
});
