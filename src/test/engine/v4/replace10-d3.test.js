// @vitest-environment node
// Quality loop lane D (Nov 4, requalified paper candidates, quality/evals/gate/requalified/D.md): Night Watchman and
// Hoard Breaker (Bodyguards' place), Poacher (Kidnapper's place), Big Finish and Cover Band (Wallflower's place), under
// REPLACE10. The switch is read when the engine loads, so it is set before the import.
import { describe, it, expect } from 'vitest';

process.env.REPLACE10 = 'watchman,hoardbreaker,poacher,bigfinish,coverband';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { applyMove, resume } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { table, named } = await import('./cards-helpers-b.js');
const { take, move, uidOf } = await import('./helpers.js');
delete process.env.REPLACE10;
delete process.env.MEMBER_UP;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const Q = ['red', 'echo', 'thieves', 'trading'];
const done = x => { while (x.pending && x.pending.kind !== 'place') x = move(x, (x.pending.options.find(o => o.kind === 'pass') || x.pending.options[0]).id); return x; };

describe('REPLACE10: lane D requalified cards', () => {
  it('prices as pitched; Bodyguards, Kidnapper and Wallflower are retired', () => {
    const p = id => { const d = defById(id); return [d.s, d.w]; };
    expect(p('thieves.watchman')).toEqual([5, 3]);
    expect(p('thieves.hoardbreaker')).toEqual([6, 2]);
    expect(p('thieves.poacher')).toEqual([6, 3]);
    expect(p('echo.bigfinish')).toEqual([7, 4]);
    expect(p('echo.coverband')).toEqual([7, 4]);
    for (const id of ['thieves.watchdog', 'thieves.kidnappers', 'echo.wallflower']) expect(defById(id).retired).toBe(true);
  });

  it("Night Watchman: rivals can't steal from you only while you have a minion on a Magenta space", () => {
    const s = table(Q, { n: 2, round: 2, members: [[], ['thieves.watchman']] });
    const g = defById('thieves.watchman').guardSteal, ctx = { state: s }, victim = s.players[1], thief = s.players[0];
    expect(g(ctx, victim, null, thief, 'res')).toBe(false);
    s.slots = { '2-0': 1 };
    expect(g(ctx, victim, null, thief, 'res')).toBe(true);
    expect(g(ctx, victim, null, thief, 'member')).toBe(true);
    expect(g(ctx, victim, null, thief, 'swap')).toBe(false);
    s.slots = { '2-0': 0 }; // the thief's minion, not yours
    expect(g(ctx, victim, null, thief, 'res')).toBe(false);
  });

  it("Heist Crew: steals half of a rival's biggest pile, rounded down, once a game (5 red: takes 2)", () => {
    let s = table(Q, { n: 2, round: 2, left: 4, members: [['thieves.hoardbreaker']], res: [{}, { red: 5, gold: 2 }] });
    const u = uidOf(s, 'thieves.hoardbreaker', 0);
    s = move(s, `use:${u}`);
    expect(s.pending.prompt).toBe('Heist Crew: steal half of which pile?');
    expect(s.pending.options.map(o => o.label)).toEqual(["P2's red: take 2"]);
    s = answer(s, s.pending.options[0].id);
    expect(s.players[0].res.red).toBe(2);
    expect(s.players[1].res.red).toBe(3);
    expect(s.cards[u].used).toBe(true);
  });

  it("Heist Crew: no rival pile of 2 or more: nothing happens and it stays ready", () => {
    let s = table(Q, { n: 2, round: 2, left: 4, members: [['thieves.hoardbreaker']], res: [{}, { red: 1 }] });
    const u = uidOf(s, 'thieves.hoardbreaker', 0);
    s = move(s, `use:${u}`);
    expect(s.cards[u].used).toBe(false);
    expect(named(s, 'Heist Crew')).toContain("P1's Heist Crew: no rival pile of 2 or more to break.");
  });

  it("Poacher: at Round Start, recruits a rival's member costing 4 or less, and the rival gets the payment", () => {
    let s = table(Q, { n: 2, round: 1, left: 0, members: [['thieves.poacher'], ['echo.agents', 'echo.ensemble']], res: [{ green: 5 }], queue: [] });
    s.queue = [{ t: 'round', r: 2 }];
    s = resume(s);
    expect(s.pending.prompt).toBe('Poacher: recruit which rival member, paying its cost to them?');
    const agents = uidOf(s, 'echo.agents', 1);
    expect(s.pending.options.find(o => o.id === `card:${agents}`).hint).toBeGreaterThan(0);
    expect(s.pending.options.map(o => o.id)).toEqual([`card:${agents}`, 'none']); // Ensemble costs 5
    s = answer(s, `card:${agents}`);
    expect(s.players[0].members).toContain(agents);
    expect(s.players[1].members).not.toContain(agents);
    const paid = Object.values(s.players[1].res).reduce((a, b) => a + b, 0);
    expect(paid).toBe(4); // Agents costs 4 since every member +1 (Nov 5)
    expect(Object.values(s.players[0].res).reduce((a, b) => a + b, 0)).toBe(1);
  });

  it('Big Finish: once per game, copies every action you have a minion on (Build Up in round II: +4 green again)', () => {
    let s = table(Q, { n: 2, round: 2, left: 4, members: [['echo.bigfinish']], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }] });
    s = done(take(s, 'echo.chant'));
    s = done(take(s, 'red.turnout'));
    const u = uidOf(s, 'echo.bigfinish', 0);
    const g = s.players[0].res.green || 0;
    s = done(move(s, `use:${u}`));
    expect((s.players[0].res.green || 0) - g).toBe(4);
    expect(s.cards[u].used).toBe(true);
  });

  it('Cover Band: once per round, copies the previous action', () => {
    let s = table(Q, { n: 2, round: 2, left: 4, members: [['echo.coverband']], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }] });
    s = done(take(s, 'red.turnout'));
    s = done(take(s, 'echo.chant')); // P2 on Build Up: +4 green
    const u = uidOf(s, 'echo.coverband', 0);
    const g = s.players[0].res.green || 0;
    s = move(s, `use:${u}`);
    expect(s.pending.prompt).toBe('Cover Band: copy the previous action?');
    s = done(answer(s, s.pending.options[0].id));
    expect((s.players[0].res.green || 0) - g).toBe(4);
    expect(s.cards[u].used).toBe(true);
  });
});
