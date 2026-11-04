// @vitest-environment node
// Replacement batch 1 (Nov 3; design/notes/replacements-batch1-2026-11-03.md), the REPLACE1=1 bot-test switch: each
// new card fires once in a small hand-built position, and the old card it replaces is no longer dealt. The switch is
// read when the engine loads, so it is set before the engine is imported (dynamic imports below).
import { describe, it, expect } from 'vitest';

process.env.REPLACE1 = '1';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { take, move } = await import('./helpers.js');
const { table, named, uidIn, owns } = await import('./cards-helpers-b.js');
const { sceneQ } = await import('./cards-helpers.js');
// read once at load: cleared again so a later test file in this worker loads the engine without the switch
delete process.env.REPLACE1;

const turns = (...ps) => ps.map(p => ({ t: 'turn', p }));
const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE1: the switch', () => {
  it('prints the spec prices (as a player sees them) and retires the old cards', () => {
    const price = id => { const d = defById(id); return [d.s, d.w, d.f]; };
    expect(price('red.turncoats')).toEqual([3, 1, 2]);
    expect(price('market.scavengers')).toEqual([4, 2, 1]);
    expect(price('thieves.racketeers')).toEqual([4, 2, 1]);
    expect(price('purple.nightwatch')).toEqual([3, 2, 2]);
    expect(price('yellow.barterers')).toEqual([4, 2, 1]);
    expect(price('silver.hostesses')).toEqual([4, 2, 2]);
    expect(price('benders.grudge')).toEqual([0, 4, 2]);
    expect(price('trading.heirs')).toEqual([4, 3, 2]);
    for (const id of ['red.volunteer', 'market.critic', 'thieves.crew', 'purple.clockmaker', 'yellow.dyer', 'silver.giftwrapper', 'benders.frontrunner', 'trading.exporter'])
      expect(defById(id).retired).toBe(true);
  });
});

describe('REPLACE1: each card fires', () => {
  it('Turncoats: a rival Poaches one of your members, you recruit a shop member costing up to its cost, free', () => {
    let s = table(['red', 'thieves', 'market', 'yellow'], { round: 3, left: 5, members: [[], ['red.turncoats', 'red.patriarch']], shop: ['red.recruitbonus', 'red.mob'] });
    s = take(s, 'thieves.heist');
    s = move(s, `card:${uidIn(s, 'red.patriarch', 1)}`);
    expect(owns(s, 0, 'red.patriarch')).toBe(true);
    expect(s.pending.player).toBe(1);
    expect(s.pending.prompt).toMatch(/^Turncoats: recruit which shop member \(costing up to 6\)/);
    // Mob costs 12: not offered
    expect(s.pending.options.map(o => s.cards[o.value].def)).toEqual(['red.recruitbonus']);
    s = answer(s, s.pending.options[0].id);
    expect(owns(s, 1, 'red.recruitbonus')).toBe(true);
    expect(named(s, 'Turncoats')).toEqual(["P2's Turncoats: P1 took Patriarch, so P2 recruits a shop member costing up to 6, for free."]);
  });

  it('Turncoats: taking Turncoats itself does not fire it', () => {
    let s = table(['red', 'thieves', 'market', 'yellow'], { round: 3, left: 5, members: [[], ['red.turncoats']], shop: ['red.recruitbonus'] });
    s = take(s, 'thieves.heist');
    s = move(s, `card:${uidIn(s, 'red.turncoats', 1)}`);
    expect(owns(s, 0, 'red.turncoats')).toBe(true);
    expect(named(s, 'Turncoats')).toEqual([]);
  });

  it('Scavengers: a rival Buries a shop member, you may recruit it from the bottom of the pile, paying its cost', () => {
    let s = table(['red', 'market', 'thieves', 'yellow'], { round: 2, left: 4, res: [{}, { red: 3 }], members: [[], ['market.scavengers']], shop: ['red.recruitbonus', 'red.mob'] });
    s = take(s, 'market.pricecheck');
    const u = uidIn(s, 'red.recruitbonus', 'shop');
    s = move(s, `card:${u}`);
    expect(s.pile[s.pile.length - 1]).toBe(u);
    expect(s.pending.player).toBe(1);
    expect(s.pending.prompt).toMatch(/^Scavengers: P1 sent a member to the bottom of the pile/);
    s = answer(s, `card:${u}`);
    while (s.pending?.player === 1 && s.pending.kind === 'choose') s = answer(s, s.pending.options[0].id);
    expect(owns(s, 1, 'red.recruitbonus')).toBe(true);
    expect(s.players[1].res.red).toBe(0);
    expect(s.log.some(l => /^P2's Scavengers: pays 3 red for Greeters\.$/.test(l))).toBe(true);
  });

  it('Racketeers: at round end, steals 2 of the contest color from each rival who won it', () => {
    let s = table(['red', 'thieves', 'market', 'yellow'], { round: 1, res: [{ red: 3, blue: 1 }, { blue: 1 }], members: [[], ['thieves.racketeers']], queue: [{ t: 'endRound' }] });
    // P1 wins red alone; blue is tied, so both win it, and only P1 (the rival) pays
    expect(s.players[0].res.red).toBe(1);
    expect(s.players[1].res.red).toBe(2);
    expect(s.players[0].res.blue).toBe(0);
    expect(s.players[1].res.blue).toBe(2);
    expect(named(s, 'Racketeers')).toEqual(["P2's Racketeers: took 2 red from P1 (Most red).", "P2's Racketeers: took 1 blue from P1 (Most blue)."]);
  });

  it('Racketeers: Bodyguards blocks it', () => {
    const s = table(['red', 'thieves', 'market', 'yellow'], { round: 1, res: [{ red: 3 }], members: [['thieves.watchdog'], ['thieves.racketeers']], queue: [{ t: 'endRound' }] });
    expect(s.players[0].res.red).toBe(3);
    expect(named(s, 'Racketeers')).toEqual([]);
  });

  it('Night Watch: a rival takes the Goes Last token with Last Call, +1 follower per minion on it', () => {
    const s = take(sceneQ({ quadrants: ['gold', 'red', 'purple', 'echo'], round: 2, left: 3, members: [[], ['purple.nightwatch']], queue: [...turns(0, 1, 0, 1, 0, 1), { t: 'allPlaced' }] }), 'purple.lastcall');
    expect(s.goesLast).toEqual({ round: 2, pid: 0 });
    expect(s.players[1].bonus).toBe(2);
    expect(named(s, 'Night Watch')).toEqual(["P2's Night Watch: +2 followers (P1 took the Goes Last token with 2 minions on it)."]);
  });

  it('Barterers: On Recruit, swap up to 3 of your resources with one rival’s, one for one (Customs Officer hears it)', () => {
    let s = table(['red', 'yellow', 'market', 'thieves'], { round: 2, res: [{ yellow: 4, red: 4 }, { blue: 3 }], members: [[], ['yellow.customs']], shop: ['yellow.barterers'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `card:${uidIn(s, 'yellow.barterers', 'shop')}`);
    expect(s.pending.prompt).toBe('Barterers: swap with which rival?');
    s = answer(s, 'player:1');
    s = answer(s, 'barter:red:blue');
    s = answer(s, 'barter:red:blue');
    s = answer(s, 'done');
    expect(s.players[0].res.red).toBe(0);
    expect(s.players[0].res.blue).toBe(2);
    expect(s.players[1].res.red).toBe(2);
    expect(s.players[1].res.blue).toBe(1);
    // Customs Officer: +1 yellow once for the whole Barterers use
    expect(s.players[1].res.yellow).toBe(1);
    expect(named(s, 'Barterers')).toEqual(["P1's Barterers: P1 gives P2 1 red for 1 blue.", "P1's Barterers: P1 gives P2 1 red for 1 blue."]);
  });

  it('Hostesses: On Recruit, each rival +1 silver from the bank, then +1 follower for each (Cory, Nov 3)', () => {
    let s = table(['red', 'silver', 'market', 'yellow'], { n: 3, round: 2, res: [{ silver: 4, red: 2 }, {}, { silver: 5 }], shop: ['silver.hostesses'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `card:${uidIn(s, 'silver.hostesses', 'shop')}`);
    expect(s.players[1].res.silver).toBe(1);
    expect(s.players[2].res.silver).toBe(6);
    expect(s.players[0].res.silver).toBe(0);
    expect(s.players[0].bonus).toBe(2);
    expect(named(s, 'Hostesses')).toEqual(["P1's Hostesses: P2, P3 +1 silver each; P1 +2 followers."]);
  });

  it('Grudge: On Recruit pick a rival; Game End steals 4 followers from them if they have more', () => {
    let s = table(['red', 'silver', 'market', 'yellow'], { round: 3, res: [{ red: 4 }], bonus: [0, 9], shop: ['benders.grudge'], queue: [{ t: 'buy', p: 0 }, { t: 'finish' }] });
    s = move(s, `card:${uidIn(s, 'benders.grudge', 'shop')}`);
    expect(s.pending.prompt).toBe('Grudge: choose a rival');
    s = answer(s, 'player:1');
    expect(s.cards[uidIn(s, 'benders.grudge', 0)].grudge).toBe(1);
    while (s.pending) s = answer(s, s.pending.options.find(o => o.id === 'pass')?.id ?? s.pending.options[0].id);
    expect(s.over).toBe(true);
    expect(s.players[1].bonus).toBe(5);
    expect(s.players[0].final.parts).toContain('Grudge +4');
    expect(s.players[1].final.parts).toContain("P1's Grudge −4");
    expect(named(s, 'Grudge')).toContain("P1's Grudge: steals 4 followers from P2.");
  });

  it('Misers: Game End +1 follower per 2 white held', () => {
    const s = table(['red', 'trading', 'market', 'yellow'], { round: 3, res: [{ white: 5 }], members: [['trading.heirs']], queue: [{ t: 'finish' }] });
    expect(s.over).toBe(true);
    expect(s.players[0].final.parts).toEqual(['Misers +2']);
  });
});
