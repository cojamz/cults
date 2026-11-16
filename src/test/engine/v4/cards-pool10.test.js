// @vitest-environment node
// Idea pipeline pool 10 (Nov 7; scripts/ideas/README.md): bot-only candidates, never dealt in a real game. One test per
// sentence of each card's text, through real moves, with the log naming the card.
import { describe, it, expect } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';
import { contestTable } from '../../../engine/v4/core.js';
import { take, move } from './helpers.js';
import { sceneQ, linesNaming, passBuys } from './cards-helpers.js';
import { usePool, price, still, go } from './pool-helpers.js';

usePool(['purple.scalpers', 'purple.nightporters', 'thieves.bagmen', 'thieves.fatcats', 'silver.teetotalers', 'silver.highrollers'],
  ['purple.cutin', 'silver.roundrobin']);
const named = (s, name) => linesNaming(s.log, name);
const holder = s => (s.goesLast && s.goesLast.round === s.round ? s.goesLast.pid : null);

describe('Scalpers (Purple)', () => {
  it('Whenever a rival takes the Goes Last token, they give you 2 of their resources', () => {
    let s = sceneQ({ quadrants: ['purple', 'gold', 'red', 'market'], members: [[], ['purple.scalpers']], res: [{ red: 3 }],
      queue: [0, 1, 0, 1].map(p => ({ t: 'turn', p })) });
    s = take(s, 'purple.skip'); // P1: Sleep In takes the token
    expect(s.pending.prompt).toMatch(/^P2's Scalpers: give P2 1 of which resource\?/);
    s = move(s, 'color:red');
    s = move(s, s.pending.options.find(o => o.id === 'color:red').id);
    expect(s.players[1].res.red).toBe(2);
    expect(s.players[0].res.red).toBe(1);
    expect(named(s, 'Scalpers').at(-1)).toBe("P2's Scalpers: P1 took the Goes Last token and gave P2 red and red.");
  });
  it('its owner taking the token pays nothing', () => {
    let s = sceneQ({ quadrants: ['purple', 'gold', 'red', 'market'], members: [['purple.scalpers']], res: [{ red: 3 }, { red: 3 }] });
    s = take(s, 'purple.skip');
    expect(s.players[1].res.red).toBe(3);
    expect(s.players[0].res.red).toBe(3);
  });
});

describe('Cut In (Purple, round II)', () => {
  const Q = ['purple', 'gold', 'red', 'market'];
  it('+3 purple. Take the Goes Last token. Whoever held it skips their next turn.', () => {
    let s = sceneQ({ quadrants: Q, round: 2, queue: [1, 0, 1, 0, 1].map(p => ({ t: 'turn', p })) });
    s = passBuys(take(s, 'purple.skip')); // P2 takes the token
    expect(holder(s)).toBe(1);
    const purple = s.players[0].res.purple;
    s = take(s, 'purple.cutin');
    expect(s.players[0].res.purple - purple).toBe(3);
    expect(holder(s)).toBe(0);
    expect(s.log.some(l => /Cut In/.test(l) && /skip/.test(l))).toBe(true);
    expect(s.queue.some(t => t.t === 'content' && t.h === 'purple.skipped' && t.p === 1 && t.data?.why === 'Cut In')).toBe(true);
  });
  it('nobody held it: nobody skips', () => {
    let s = sceneQ({ quadrants: Q, round: 2, queue: [0, 1, 0, 1].map(p => ({ t: 'turn', p })) });
    s = take(s, 'purple.cutin');
    expect(holder(s)).toBe(0);
    expect(s.queue.some(t => t.h === 'purple.skipped' && t.data?.why === 'Cut In')).toBe(false);
  });
});

describe('Night Porters (Purple)', () => {
  it('Round End: if you hold the Goes Last token, you keep it: next round your last minion is placed after everyone else\'s', () => {
    let s = still({ quadrants: ['purple', 'gold', 'red', 'market'], members: [['purple.nightporters']] });
    s.goesLast = { round: 1, pid: 0 };
    s = go(s, [{ t: 'allPlaced' }]);
    expect(named(s, 'Night Porters')[0]).toBe("P1's Night Porters: P1 keeps the Goes Last token into next round.");
    s = go(s, [{ t: 'round', r: 2 }]);
    expect(holder(s)).toBe(0);
    const turns = s.queue.filter(t => t.t === 'turn');
    expect(turns.at(-1).p).toBe(0);
    expect(turns.at(-1).token).toBe(true);
    expect(s.log.some(l => l.includes("Night Porters: P1 keeps the Goes Last token"))).toBe(true);
  });
  it('not holding it, nothing carries over', () => {
    let s = still({ quadrants: ['purple', 'gold', 'red', 'market'], members: [['purple.nightporters']] });
    s.goesLast = { round: 1, pid: 1 };
    s = go(s, [{ t: 'allPlaced' }]);
    s = go(s, [{ t: 'round', r: 2 }]);
    expect(holder(s)).toBe(null);
  });
});

describe('Bagmen (Magenta)', () => {
  it('Whenever a rival recruits 10 followers, steal 2 of them', () => {
    let s = sceneQ({ quadrants: ['thieves', 'gold', 'red', 'market'], members: [[], ['thieves.bagmen']], res: [{ gold: 30, red: 30, blue: 30, magenta: 30 }] });
    s = take(s, 'gold.rush');
    s = move(s, 'tier:top');
    expect(s.players[0].bonus).toBe(8);
    expect(s.players[1].bonus).toBe(2);
    expect(named(s, 'Bagmen').at(-1)).toBe("P2's Bagmen: stole 2 of P1's 10 followers.");
  });
});

describe('Fat Cats (Magenta)', () => {
  it('Your resources count double in the Magenta contest', () => {
    const s = sceneQ({ quadrants: ['thieves', 'gold', 'red', 'market'], rules: { contests: 'byColor' }, members: [['thieves.fatcats']],
      res: [{ gold: 2, red: 2 }, { gold: 6 }] });
    const c = contestTable(s).find(x => x.qid === 'thieves');
    expect(c.winners).toEqual([0]);
    expect(c.rows.find(r => r.player === 0).score).toBe(8);
    const red = contestTable(s).find(x => x.qid === 'gold');
    expect(red.winners).toEqual([1]); // other contests count as printed
  });
});

describe('Round Robin (Silver, round I)', () => {
  const Q = ['silver', 'gold', 'red', 'market'];
  it('+1 silver. Then every player, you too, gives all their silver to the player on their left.', () => {
    let s = sceneQ({ quadrants: Q, n: 3, res: [{}, { silver: 5 }, { silver: 2 }] });
    s = take(s, 'silver.roundrobin');
    expect(s.players.map(p => p.res.silver)).toEqual([2, 1, 5]);
    expect(named(s, 'Round Robin').at(-1)).toBe("P1's Round Robin: P1 gives P2 1, P2 gives P3 5, P3 gives P1 2.");
  });
});

describe('Teetotalers (Silver)', () => {
  const Q = ['silver', 'gold', 'red', 'market'];
  it("Rivals can't give you silver (Round Robin: the giver keeps it)", () => {
    let s = sceneQ({ quadrants: Q, n: 3, members: [[], ['silver.teetotalers']], res: [{ silver: 3 }, { silver: 5 }, { silver: 2 }] });
    s = take(s, 'silver.roundrobin');
    expect(s.players.map(p => p.res.silver)).toEqual([6, 0, 5]);
    expect(named(s, 'Teetotalers')[0]).toBe("P2's Teetotalers: P1 can't give P2 silver, and keeps it.");
  });
  it("Rivals can't give you silver (Party Gifts can't pick them)", () => {
    let s = sceneQ({ quadrants: Q, n: 3, members: [[], ['silver.teetotalers']] });
    s = take(s, 'silver.partygifts');
    expect(s.pending.options.filter(o => o.kind === 'player').map(o => o.value)).toEqual([2]);
  });
});

describe('High Rollers (Silver)', () => {
  it('Whenever you pay silver for a member, +1 follower per silver paid', () => {
    let s = sceneQ({ quadrants: ['silver', 'gold', 'red', 'market'], members: [['silver.highrollers']], res: [{ silver: 30 }] });
    const u = s.pile.find(x => defById(s.cards[x].def).quadrant === 'silver' && !defById(s.cards[x].def).pool && !defById(s.cards[x].def).onRecruited && !defById(s.cards[x].def).now);
    s.pile.splice(s.pile.indexOf(u), 1); s.shop[0] = u;
    s = take(s, 'gold.rush');
    s = move(s, `card:${u}`);
    while (s.pending?.kind === 'choose' && !s.pending.options.some(o => o.kind === 'pass' || o.id === 'pass')) s = move(s, s.pending.options[0].id);
    const paid = 30 - s.players[0].res.silver;
    expect(paid).toBe(price(s, u));
    expect(s.players[0].bonus).toBe(paid);
    expect(named(s, 'High Rollers').at(-1)).toBe(`P1's High Rollers: paid ${paid} silver, +${paid} followers.`);
  });
});
