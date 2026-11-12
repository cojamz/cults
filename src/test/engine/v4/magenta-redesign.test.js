// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { resume } from '../../../engine/v4/core.js';
import { quadrant } from '../../../engine/v4/content/index.js';
import { table, uidIn, useCosts, owns } from './cards-helpers-b.js';
import { take, move, ids, actionName } from './helpers.js';
import { useRetired } from './helpers.js';
import { placed } from './placed-helpers.js';
const AV = ['thieves', 'echo'];
useRetired(['thieves.hideout', 'thieves.ransom']);

const Q = ['gold', 'red', 'thieves', 'echo'];
const shop = ['red.volunteer', 'red.twins'];
const turns = (...ps) => ps.map(p => ({ t: 'turn', p }));
const pass = s => s.pending?.kind === 'buy' ? move(s, 'pass') : s;
const restored = s => resume(JSON.parse(JSON.stringify(s)));
const magentaSlot = key => `2-${quadrant('thieves').actions.findIndex(a => a.key === key)}`;
useCosts({ 'red.twins': [2, 0], 'red.mentor': [3, 2], 'red.panel': [3, 3] });

// These are isolated rule checks, deliberately without seeded full-game simulations.
describe('Magenta redesign edge cases', () => {
  // Help Yourself gives +1 magenta again (Cory, Nov 10: "... this one included. +1 magenta.")
  it.each(['pickpocket', 'hideout', 'rob', 'ransom', 'heist'])('%s always grants one Magenta even when its effect has no target', key => {
    const s = take(table(Q, { round: 3, shop }), `thieves.${key}`);
    expect(s.players[0].res.magenta).toBe(1);
    expect(s.pending.kind).toBe('buy');
    expect(s.players[0].bonus).toBe(0);
  });
  it('empty theft takes no followers: there is no one to take them from (Cory, Oct 22)', () => {
    const s = take(table(Q, { round: 2, shop }), 'thieves.pickpocket');
    expect(s.players[0].bonus).toBe(0);
    expect(s.players[0].res.magenta).toBe(1);
  });
  it('Stash: +3 magenta in round III as printed (Nov 10 stand-in), its own +1 included, with no target needed', () => {
    const s = take(table(Q, { round: 3, shop }), 'thieves.tipoff');
    expect(s.players[0].res.magenta).toBe(3);
    expect(s.pending.kind).toBe('buy');
  });
  it('copying Stash gives its magenta', () => {
    let s = table(Q, { res: [{}, { gold: 8 }, { red: 8 }], n: 3, shop, queue: turns(1, 0) });
    s = pass(take(s, 'thieves.tipoff'));
    expect(s.players[1].res.magenta).toBe(3);
    s = take(s, 'echo.echo');
    s = move(s, s.pending.options.find(o => o.kind === 'space' && o.label.startsWith(actionName('thieves.tipoff'))).id);
    expect(s.players[0].res).toMatchObject({ green: 1, magenta: 3 });
  });
  it('copying Help Yourself grants its resource once, with fresh rival choices and no followers', () => {
    let s = table(Q, { round: 2, n: 3, res: [{}, {}, { gold: 9, red: 9 }], bonus: [0, 0, 5], shop, queue: turns(1, 0) });
    s = take(placed(s, 1, 3, AV), 'thieves.pickpocket'); // P2's fourth minion: steal 4
    for (let k = 0; k < 4; k++) s = move(s, 'take:2:gold');
    s = pass(s);
    s = take(placed(s, 0, 3, AV), 'echo.echo'); // the copy counts P1's own minions: steal 4
    s = move(s, s.pending.options.find(o => o.kind === 'space' && o.label.startsWith(actionName('thieves.pickpocket'))).id);
    s = restored(s);
    for (let k = 0; k < 4; k++) s = move(s, 'take:2:red');
    expect(s.pending?.kind).not.toBe('choose');
    expect(s.players[0].res).toMatchObject({ green: 1, magenta: 1, red: 4, gold: 0 });
    expect(s.players[1].res).toMatchObject({ magenta: 1, gold: 4 });
    expect(s.players.map(p => p.bonus)).toEqual([0, 0, 5]);
  });
  it('JSON resume mid-theft neither repeats base grants nor loses the chosen colors', () => {
    let s = table(Q, { round: 3, n: 3, res: [{}, { gold: 7 }, { red: 7 }], bonus: [0, 5, 5], shop });
    s = move(take(placed(s, 0, 4, AV), 'thieves.pickpocket'), 'take:1:gold'); // the fifth minion: steal 5
    const before = JSON.stringify(s);
    const finish = x => ['take:1:gold', 'take:1:gold', 'take:1:gold', 'take:1:gold'].reduce(move, x); // one rival (Nov 5)
    const direct = finish(s), loaded = finish(restored(s));
    expect(JSON.stringify(s)).toBe(before);
    expect(loaded.players.map(p => p.res)).toEqual(direct.players.map(p => p.res));
    expect(loaded.players[0].res).toMatchObject({ magenta: 1, gold: 5, red: 0 });
    expect(loaded.players[0].bonus).toBe(0);
  });
  it('Desperado adds 2 to Help Yourself\'s 3 while tied for fewest followers', () => {
    let s = table(Q, { round: 1, res: [{}, { gold: 8 }], members: [['thieves.desperado']], bonus: [0, 1], shop });
    s = take(placed(s, 0, 2, AV), 'thieves.pickpocket'); // the third minion: 3, and Desperado's 2
    expect(s.pending.count.left).toBe(5);
    for (let k = 0; k < 5; k++) s = move(s, 'take:1:gold');
    expect(s.players[0].bonus).toBe(0);
    expect(s.players[0].res).toMatchObject({ gold: 5, magenta: 1 });
  });
  it('Heist offers only rivals with followers to steal, never a protected one, and takes 4', () => {
    let s = table(Q, { round: 2, n: 4, res: [{}, {}, {}, {}], bonus: [0, 5, 0, 6], shop });
    s.players[3].hideout = s.round; // Lie Low (Bodyguards stopped blocking, Nov 11)
    s = take(s, 'thieves.rob');
    expect(ids(s)).toEqual(['player:1']);
    s = restored(s);
    for (let k = 0; k < 4; k++) s = move(s, 'player:1'); // Heist: one follower a pick (Nov 5)
    expect(s.pending?.kind).toBe('buy'); // no resources to steal
    expect(s.players[0].bonus).toBe(4);
    expect(s.players[1].bonus).toBe(1);
    expect(s.players[3].bonus).toBe(6);
    expect(s.players[0].res.magenta).toBe(1);
  });
  it('Heist never takes more followers than the rival has loose', () => {
    let s = table(Q, { round: 2, res: [{}, {}], bonus: [0, 2], shop });
    s = take(s, 'thieves.rob');
    for (let k = 0; k < 4 && s.pending?.options?.some(o => o.id === 'player:1'); k++) s = move(s, 'player:1'); // Heist: one follower a pick (Nov 5)
    expect(s.pending?.kind).toBe('buy');
    expect(s.players[0].bonus).toBe(2);
    expect(s.players[1].bonus).toBe(0);
  });
  it('Lie Low blocks resource theft as well as member taking and ransom', () => {
    for (const key of ['pickpocket', 'rob', 'ransom', 'heist']) {
      const t = table(Q, { round: 3, res: [{}, { gold: 10 }], members: [[], ['red.twins']], shop });
      t.players[1].hideout = t.round;
      const s = take(t, `thieves.${key}`);
      expect(s.pending.kind).toBe('buy');
      expect(s.players[1].res.gold).toBe(10);
      expect(owns(s, 1, 'red.twins')).toBe(true);
      expect(s.players[0].res.magenta).toBe(1);
    }
  });
  it('ransom includes total cost five (the cap is 6 since the Nov 5 +1), excludes nine, and resumes for the victim without repeating the grant', () => {
    let s = table(Q, { round: 2, res: [{}, { gold: 3, red: 2 }], members: [[], ['red.mentor', 'red.patriarch']], shop });
    s = take(s, 'thieves.ransom');
    // one rival, one member at 6 or less: no picks, straight to the holder's answer
    expect(s.pending.player).toBe(1);
    expect(ids(s)).toEqual(['pay', 'let']);
    s = move(restored(s), 'pay');
    expect(owns(s, 1, 'red.mentor')).toBe(true);
    expect(s.players[0].res).toMatchObject({ magenta: 1, gold: 3, red: 2 });
    expect(s.players[1].res).toMatchObject({ gold: 0, red: 0 });
  });
  it('Lie Low expires when the round changes', () => {
    let s = table(Q, { res: [{ gold: 4 }, {}], shop, queue: turns(0, 1) });
    s = pass(take(s, 'thieves.hideout'));
    s.round = 2;
    s = take(placed(s, 1, 3, AV), 'thieves.pickpocket'); // P2's fourth minion: steal 4
    for (let k = 0; k < 4; k++) s = move(s, 'take:0:gold');
    expect(s.players[1].res).toMatchObject({ magenta: 1, gold: 4 });
  });
});
