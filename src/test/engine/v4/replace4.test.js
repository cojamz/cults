// @vitest-environment node
// Replacement batch 4 (Nov 3; /mnt/project-files/replacements/batch4.md), the REPLACE4=1 bot-test switch: each new
// card fires once in a small hand-built position, and the old card it replaces is no longer dealt. The switch is read
// when the engine loads, so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE4 = '1';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { take, move } = await import('./helpers.js');
const { table, named, uidIn, owns } = await import('./cards-helpers-b.js');
// read once at load: cleared again so a later test file in this worker loads the engine without the switch
delete process.env.REPLACE4;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE4: the switch', () => {
  it('prints the draft prices (as a player sees them) and retires the old cards', () => {
    const price = id => { const d = defById(id); return [d.s, d.w, d.f]; };
    expect(price('red.defectors')).toEqual([6, 3, 1]);
    expect(price('red.tithetakers')).toEqual([4, 2, 2]);
    expect(price('echo.openingact')).toEqual([7, 3, 2]);
    expect(price('echo.copycats')).toEqual([3, 1, 1]);
    expect(price('market.outbidders')).toEqual([3, 1, 1]);
    expect(price('market.hawkers')).toEqual([5, 3, 1]);
    expect(price('market.lateshoppers')).toEqual([5, 3, 1]);
    for (const id of ['red.proselytizer', 'red.mentor', 'echo.dejavu', 'echo.roadie', 'market.windowdresser', 'market.connoisseur', 'market.windowshopper'])
      expect(defById(id).retired).toBe(true);
  });
});

describe('REPLACE4: each card fires', () => {
  it("Defectors: swap all your red members, this one too, for all of one rival's red members", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 3, members: [['red.defectors', 'market.snob'], ['red.mob', 'red.crowd', 'trading.martyr']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'red.defectors', 0)}`);
    expect(s.pending.prompt).toBe("Defectors: swap all your red members for which rival's red members?");
    s = answer(s, 'player:1');
    expect(owns(s, 0, 'red.mob')).toBe(true);
    expect(owns(s, 0, 'red.crowd')).toBe(true);
    expect(owns(s, 0, 'market.snob')).toBe(true);
    expect(owns(s, 1, 'red.defectors')).toBe(true);
    expect(owns(s, 1, 'trading.martyr')).toBe(true);
    expect(named(s, 'Defectors')).toContain("P1's Defectors: P1's red members (Defectors) swap for P2's (Mob, Crowd-Pleaser).");
  });

  it("Defectors: a rival's Loyalists keeps their other members; only Loyalists moves", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 3, members: [['red.defectors'], ['red.mob', 'red.loyalists']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'red.defectors', 0)}`);
    s = answer(s, 'player:1');
    expect(owns(s, 0, 'red.loyalists')).toBe(true);
    expect(owns(s, 1, 'red.mob')).toBe(true);
    expect(owns(s, 1, 'red.defectors')).toBe(true);
  });

  it('Tithe Takers: each rival gives you one of their members, their pick', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { n: 3, round: 3, members: [['red.tithetakers'], ['market.snob', 'trading.martyr'], ['red.crowd']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'red.tithetakers', 0)}`);
    expect(s.pending.player).toBe(1);
    expect(s.pending.prompt).toBe('Tithe Takers: give which of your members to P1?');
    s = answer(s, `card:${uidIn(s, 'trading.martyr', 1)}`);
    expect(s.players[1].bonus).toBe(4); // Martyrs left P2's cult
    expect(s.pending.player).toBe(2);
    s = answer(s, `card:${uidIn(s, 'red.crowd', 2)}`);
    expect(owns(s, 0, 'trading.martyr')).toBe(true);
    expect(owns(s, 0, 'red.crowd')).toBe(true);
    expect(owns(s, 1, 'market.snob')).toBe(true);
    expect(named(s, 'Tithe Takers')).toContain("P1's Tithe Takers: P2 gives Martyrs to P1.");
  });

  it("Opening Act: a rival's first minion of the round; you do that action too, and only that one", () => {
    let s = table(['red', 'echo', 'market', 'yellow'], { round: 2, members: [['echo.openingact']], queue: [{ t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.turnout'); // Gather: +3 red in round II
    expect(s.players[1].res.red).toBe(3);
    expect(s.players[0].res.red).toBe(3);
    expect(named(s, 'Opening Act').some(l => l.includes('Gather'))).toBe(true);
    while (s.pending.player === 1 && s.pending.kind === 'buy') s = move(s, 'pass');
    s = take(s, 'echo.encore');
    while (s.pending.player === 0 && s.pending.kind !== 'place') s = move(s, s.pending.options.find(o => o.kind === 'pass')?.id || s.pending.options[0].id);
    const red = s.players[0].res.red;
    s = take(s, 'red.evenswap'); // P2's second minion: no copy
    expect(s.players[0].res.red).toBe(red);
  });

  it('Copycats: exactly 1 less than the winner ties for the contest', () => {
    const s = table(['red', 'echo', 'market', 'yellow'], { n: 3, round: 1, res: [{ red: 3, blue: 1 }, { red: 4 }, { blue: 3 }], members: [['echo.copycats']], queue: [{ t: 'endRound' }] });
    // Red: P2 4, P1 3: a tie (+2 each). Blue: P3 3, P1 1: no tie.
    expect(s.players[0].bonus).toBe(2);
    expect(s.players[1].bonus).toBe(2);
    expect(s.players[2].bonus).toBe(4);
    expect(s.log.some(l => l.includes("P1's Copycats ties for it, 1 short"))).toBe(true);
  });

  it("Outbidders: a rival's shop recruit; pay its cost plus 2 to take it, and they recruit again", () => {
    let s = table(['red', 'market', 'echo', 'yellow'], { round: 1, res: [{ red: 6 }, { red: 6 }], members: [[], ['market.outbidders']], shop: ['red.crowd', 'red.recruitbonus'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `card:${uidIn(s, 'red.crowd', 'shop')}`);
    expect(s.pending.player).toBe(1);
    expect(s.pending.prompt).toBe('Outbidders: P1 recruits Crowd-Pleaser. Pay 5 red to recruit it instead?');
    s = answer(s, 'outbid');
    expect(owns(s, 1, 'red.crowd')).toBe(true);
    expect(s.players[1].res.red).toBe(1);
    expect(s.players[0].res.red).toBe(6);
    expect(s.pending.player).toBe(0);
    expect(s.pending.kind).toBe('buy');
    expect(s.pending.options.some(o => o.id === `card:${uidIn(s, 'red.recruitbonus', 'shop')}`)).toBe(true);
    expect(named(s, 'Outbidders')).toContain("P2's Outbidders: outbids P1 for Crowd-Pleaser; P1 pays nothing and recruits again.");
  });

  it('Outbidders: letting it go, the buyer recruits as chosen', () => {
    let s = table(['red', 'market', 'echo', 'yellow'], { round: 1, res: [{ red: 6 }, { red: 6 }], members: [[], ['market.outbidders']], shop: ['red.crowd'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `card:${uidIn(s, 'red.crowd', 'shop')}`);
    s = answer(s, 'let');
    expect(owns(s, 0, 'red.crowd')).toBe(true);
    expect(s.players[0].res.red).toBe(3);
    expect(s.players[1].res.red).toBe(6);
  });

  it('Hawker: each rival in turn may recruit it, paying its cost and 2 more to you', () => {
    let s = table(['red', 'market', 'echo', 'yellow'], { n: 3, round: 2, res: [{}, { red: 10 }, {}], members: [['market.hawkers']], shop: ['red.crowd'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'market.hawkers', 0)}`);
    expect(s.pending.prompt).toBe('Hawker: offer which shop member?');
    s = answer(s, `card:${uidIn(s, 'red.crowd', 'shop')}`);
    expect(s.pending.player).toBe(1);
    expect(s.pending.prompt).toBe('Hawker: recruit Crowd-Pleaser, paying its cost and 2 more to P1?');
    s = answer(s, 'buy');
    expect(owns(s, 1, 'red.crowd')).toBe(true);
    expect(s.players[1].res.red).toBe(5);
    expect(s.players[0].res.red).toBe(2);
  });

  it('Hawker: if no rival recruits it, you recruit it for free', () => {
    let s = table(['red', 'market', 'echo', 'yellow'], { n: 3, round: 2, res: [{}, { red: 10 }, {}], members: [['market.hawkers']], shop: ['red.crowd'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'market.hawkers', 0)}`);
    s = answer(s, `card:${uidIn(s, 'red.crowd', 'shop')}`);
    s = answer(s, 'pass'); // P3 can't pay, so isn't asked
    expect(owns(s, 0, 'red.crowd')).toBe(true);
    expect(named(s, 'Hawker')).toContain("P1's Hawker: no rival recruits Crowd-Pleaser, so P1 recruits it for free.");
  });

  it('Late Shoppers: after the contests are scored, recruit once', () => {
    let s = table(['red', 'market', 'echo', 'yellow'], { round: 1, res: [{ red: 5 }], members: [['market.lateshoppers']], shop: ['red.crowd'], queue: [{ t: 'endRound' }] });
    expect(s.players[0].bonus).toBe(4); // Red, scored with all 5 held
    expect(s.pending.prompt).toBe('P1: Late Shoppers: recruit once after the contests, or pass');
    s = move(s, `card:${uidIn(s, 'red.crowd', 'shop')}`);
    expect(owns(s, 0, 'red.crowd')).toBe(true);
    expect(s.players[0].res.red).toBe(2);
  });
});
