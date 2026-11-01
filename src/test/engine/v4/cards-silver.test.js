// @vitest-environment node
// Card-by-card: every Silver action and member, through real moves, against the printed text, with a log line naming
// the card whenever it changes a number. Plus one cross-sphere case per member.
import { describe, it, expect } from 'vitest';
import { followers, resume, memberCount, contestTable, paymentPlan, applyMove } from '../../../engine/v4/core.js';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, buy, linesNaming } from './cards-helpers.js';

const Q = ['gold', 'red', 'silver', 'green'];
const sc = o => sceneQ({ quadrants: Q, ...o });
const named = (s, name) => linesNaming(s.log, name);
const S = (s, i = 0) => s.players[i].res.silver;
const rich = { gold: 30, red: 30, silver: 30, green: 30 };

describe('Silver actions', () => {
  it('Toast 3 / 6 / 9 and everyone else +1 / +2 / +3', () => {
    const s = take(sc({ n: 3, round: 2 }), 'silver.toast');
    expect(s.players.map(p => p.res.silver)).toEqual([6, 2, 2]);
  });
  it('Polish: 2 silver into 4 of any colors, picked one at a time; 1 silver gives 2', () => {
    let s = take(sc({ res: [{ silver: 3 }] }), 'silver.polish');
    for (const c of ['red', 'red', 'green', 'gold']) s = move(s, `color:${c}`);
    expect([S(s), s.players[0].res.red, s.players[0].res.green, s.players[0].res.gold]).toEqual([1, 2, 1, 1]);
    s = take(sc({ res: [{ silver: 1 }] }), 'silver.polish');
    s = move(move(s, 'color:red'), 'color:red');
    expect([S(s), s.players[0].res.red]).toEqual([0, 2]);
    expect(s.pending?.prompt || '').not.toMatch(/Polish/);
  });
  it('Party Gifts: rivals gain up to 3 silver from the bank, split as you choose, +2 followers each', () => {
    let s = take(sc({ n: 3, res: [{ silver: 2 }] }), 'silver.partygifts');
    s = move(move(move(s, 'player:1'), 'player:2'), 'player:1');
    expect(s.players.map(p => p.res.silver)).toEqual([2, 2, 1]);
    expect(s.players[0].bonus).toBe(6);
    s = move(take(sc({ n: 3 }), 'silver.partygifts'), 'done');
    expect(s.players[0].bonus).toBe(0);
  });
  it('Party Favors: +2 silver, each rival gives you 1 resource of their choice, then gains 2 silver', () => {
    let s = take(sc({ n: 3, round: 2, res: [{}, { red: 2 }, {}] }), 'silver.favors');
    s = move(s, 'color:red');
    expect(s.players.map(p => [p.res.silver, p.res.red])).toEqual([[2, 1], [2, 1], [2, 0]]);
  });
  it('Party Favors: rivals answer at the same time; either can answer first', () => {
    let s = take(sc({ n: 3, round: 2, res: [{}, { red: 2 }, { green: 1 }] }), 'silver.favors');
    const asked = [s.pending.player, ...(s.pending.also || []).map(a => a.player)].sort();
    expect(asked).toEqual([1, 2]);
    const last = s.pending.also[0].player;
    s = applyMove(s, { player: last, option: last === 2 ? 'color:green' : 'color:red' }); // the one listed second answers first
    expect(s.pending.also).toBeUndefined();
    s = move(s, last === 2 ? 'color:red' : 'color:green');
    expect(s.players.map(p => [p.res.silver, p.res.red, p.res.green])).toEqual([[2, 1, 1], [2, 1, 0], [2, 0, 0]]);
  });
  it('Sweet Talk: +3 silver, then turn as many as you want into other colors; Largesse: rivals up to 10 silver, +1 follower each', () => {
    let s = take(sc({ round: 2 }), 'silver.tongue');
    s = move(move(move(s, 'color:red'), 'color:red'), 'done');
    expect(s.players.map(p => [p.res.silver, p.res.red])).toEqual([[1, 2], [0, 0]]);
    s = take(sc({ round: 3 }), 'silver.largesse');
    for (let i = 0; i < 10; i++) s = move(s, 'player:1');
    expect(s.players[1].res.silver).toBe(10);
    expect(s.players[0].bonus).toBe(10);
  });
  it.each([1, 2, 3])('Toast round %i scales each rival gift, with Guest, Caterer and Grand Host', round => {
    const s = take(sc({ n: 3, round, members: [['silver.grandhost', 'silver.caterer'], ['silver.guest']] }), 'silver.toast');
    expect(s.players.map(p => p.res.silver)).toEqual([6 * round + 2, round + 1, round]); // Caterer +2 (Nov 1 balance)
    expect(named(s, 'Caterer')).toHaveLength(1); // one gift, not one per recipient
    expect(s.log).toContain(`P1 raised a toast: +${6 * round} silver, +${round} silver to everyone else.`);
  });
});

describe('Silver members', () => {
  it('Gift Wrapper: +1 follower whenever you give rivals silver, once per space (Toast, Party Favors)', () => {
    let s = take(sc({ n: 3, members: [['silver.giftwrapper']] }), 'silver.toast');
    expect(s.players[0].bonus).toBe(1);
    s = take(sc({ n: 3, round: 2, res: [{}, { red: 2 }, { green: 1 }], members: [['silver.giftwrapper']] }), 'silver.favors');
    s = move(s, s.pending.options[0].id);
    s = move(s, s.pending.options[0].id);
    expect(s.players[0].bonus).toBe(1);
    expect(named(s, 'Gift Wrapper')).toHaveLength(1);
  });
  it('Caterer: Party Favors is one gift, +2 silver once however many rivals answer (as Toast)', () => {
    let s = take(sc({ n: 3, round: 2, res: [{}, { red: 2 }, { green: 1 }], members: [['silver.caterer']] }), 'silver.favors');
    s = move(s, s.pending.options[0].id);
    s = move(s, s.pending.options[0].id);
    expect(S(s)).toBe(2 + 2);
    expect(named(s, 'Caterer')).toHaveLength(1);
  });
  it('Polisher: once per game, up to 3 silver into 2 of any colors each', () => {
    let s = sc({ res: [{ silver: 4 }], members: [['silver.polisher']] });
    const use = s.pending.options.find(o => o.kind === 'use');
    s = move(s, use.id);
    expect(s.pending.options.map(o => o.id)).toEqual(['amount:1', 'amount:2', 'amount:3']);
    s = move(s, 'amount:3');
    for (let i = 0; i < 6; i++) s = move(s, 'color:red');
    expect([S(s), s.players[0].res.red]).toEqual([1, 6]);
  });
  it('Polisher: the player picks how much silver, 1 to 3 (Cory, Nov 1)', () => {
    let s = sc({ res: [{ silver: 4 }], members: [['silver.polisher']] });
    s = move(s, s.pending.options.find(o => o.kind === 'use').id);
    s = move(s, 'amount:1');
    for (let i = 0; i < 2; i++) s = move(s, 'color:red');
    expect([S(s), s.players[0].res.red]).toEqual([3, 2]);
    expect(s.pending?.prompt || '').not.toMatch(/Polisher/);
    // with 2 silver: 1 or 2; with 1: no question
    let t = sc({ res: [{ silver: 2 }], members: [['silver.polisher']] });
    t = move(t, t.pending.options.find(o => o.kind === 'use').id);
    expect(t.pending.options.map(o => o.id)).toEqual(['amount:1', 'amount:2']);
    let u = sc({ res: [{ silver: 1 }], members: [['silver.polisher']] });
    u = move(u, u.pending.options.find(o => o.kind === 'use').id);
    expect(u.pending.prompt).toMatch(/Polisher: \+1 of which color/);
  });
  it('Collector: a rival recruiting with silver gives you +1 silver; paying without silver gives nothing', () => {
    let s = sc({ res: [{}, { silver: 5 }], members: [['silver.collector']], queue: [{ t: 'buy', p: 1 }] });
    const t = s.pending.options.find(o => o.kind === 'tier' && /1/.test(o.label || o.id));
    s = move(s, t.id);
    if (s.pending?.player === 1 && s.pending.kind === 'choose') s = move(s, s.pending.options[0].id);
    expect(S(s)).toBe(1);
  });
  it('Debt Collectors: once per game, each rival gives you 2 silver if they have it', () => {
    let s = sc({ n: 3, res: [{}, { silver: 5 }, { silver: 1 }], members: [['silver.debtcollector']] });
    s = move(s, s.pending.options.find(o => o.kind === 'use').id);
    expect(s.players.map(p => p.res.silver)).toEqual([3, 3, 0]);
  });
  it('High Society: counts as 2 members; game end +2 followers per rival with more silver', () => {
    const s = sc({ n: 3, res: [{ silver: 1 }, { silver: 5 }, { silver: 1 }], members: [['silver.highsociety']] });
    expect(memberCount(s, s.players[0])).toBe(2);
  });
  it('Smooth Talkers: your silver pays a member’s colored part', () => {
    const s = sc({ res: [{ silver: 9 }], members: [['silver.smoothtalker']], shop: ['red.patriarch'] });
    const uid = s.shop.find(u => s.cards[u].def === 'red.patriarch');
    expect(paymentPlan(s, s.players[0], uid).silver).toBeGreaterThan(0);
    const s2 = sc({ res: [{ silver: 9 }], shop: ['red.patriarch'] });
    expect(paymentPlan(s2, s2.players[0], s2.shop.find(u => s2.cards[u].def === 'red.patriarch'))).toBe(null);
  });
  it('Philanthropists: On Recruit, rivals gain up to 4 silver, +1 follower each', () => {
    let s = sc({ n: 3, round: 2, res: [rich], shop: ['silver.philanthropists'], queue: [{ t: 'buy', p: 0 }] });
    s = buy(s, 'silver.philanthropists');
    if (s.pending?.kind === 'choose' && /pay|Pay/.test(s.pending.prompt || '')) s = move(s, s.pending.options[0].id);
    for (const x of ['player:1', 'player:1', 'player:2', 'player:2']) s = move(s, x);
    expect(s.players.map(p => p.res.silver).slice(1)).toEqual([2, 2]);
    expect(s.players[0].bonus).toBe(4);
  });
  it('Guest: another player’s gift gives +1 more, named', () => {
    const s = take(sc({ members: [[], ['silver.guest']] }), 'silver.toast');
    expect(S(s, 1)).toBe(2);
    expect(named(s, 'Hangers-On')[0]).toMatch(/P2's Hangers-On: \+1 silver/);
  });
  it('Guest × Kickback: Gold’s gift counts, named', () => {
    const s = move(take(sc({ members: [[], ['silver.guest']] }), 'gold.jv'), 'player:1');
    expect(s.players[1].res.gold).toBe(2);
    expect(named(s, 'Hangers-On')).toHaveLength(1);
  });

  it('Benefactor: round start +3 silver, a rival you pick +1; named', () => {
    let s = sc({ n: 3, members: [['silver.benefactor']], queue: [{ t: 'round', r: 2 }] });
    expect(S(s)).toBe(3);
    s = move(s, 'player:2');
    expect(S(s, 2)).toBe(1);
    expect(named(s, 'Benefactor')).toHaveLength(2);
  });
  it('Benefactor × a rival’s Guest: the gift gives 1 more', () => {
    let s = sc({ members: [['silver.benefactor'], ['silver.guest']], queue: [{ t: 'round', r: 2 }] });
    while (s.pending?.kind === 'choose') s = move(s, s.pending.options.find(o => o.id === 'player:1')?.id ?? s.pending.options[0].id);
    expect(S(s, 1)).toBe(2);
  });

  it('Caterer held as an artifact (Silver\u2019s artifact) pays its +1 too', () => {
    let s = sc({ n: 4, members: [['silver.caterer']] });
    const uid = s.players[0].members[0];
    s.players[0].members = [];
    s.players[0].artifact = uid;
    s = take(s, 'silver.toast');
    expect(S(s)).toBe(3 + 2);
    expect(named(s, 'Caterer')[0]).toMatch(/P1's Caterer: \+2 silver/);
  });
  it('Caterer: +1 silver per gift (not per player), named', () => {
    const s = take(sc({ n: 4, members: [['silver.caterer']] }), 'silver.toast');
    expect(S(s)).toBe(3 + 2);
    expect(named(s, 'Caterer')[0]).toMatch(/P1's Caterer: \+2 silver/);
  });
  // Cory, Nov 1: Caterer pays when a player is gifted silver, anyone's gift; a gift of gold doesn't count
  it('Caterer: a gift of gold (Kickback) pays nothing; a rival gifting silver pays +2', () => {
    const s = move(take(sc({ members: [['silver.caterer']] }), 'gold.jv'), 'player:1');
    expect(S(s)).toBe(0);
    expect(named(s, 'Caterer')).toHaveLength(0);
    const t = take(sc({ queue: [{ t: 'turn', p: 1 }, { t: 'turn', p: 0 }], members: [['silver.caterer']] }), 'silver.toast');
    expect(S(t)).toBe(2 + 1); // P2's Toast gives P1 1 silver, and Caterer +2
    expect(named(t, 'Caterer')).toHaveLength(1);
  });

  it('Majordomo: +2 silver for taking a Silver space, named', () => {
    const s = take(sc({ members: [['silver.majordomo']] }), 'silver.toast');
    expect(S(s)).toBe(5);
    expect(named(s, 'Majordomo')).toHaveLength(1);
  });
  it('Majordomo × Straggler: moving onto a Silver space is taking it', () => {
    let s = sc({ round: 2, members: [['silver.majordomo', 'benders.straggler']], slots: { '0-0': 0 }, queue: [{ t: 'allPlaced' }] });
    s = move(s, 'to:2-0');
    expect(S(s)).toBe(6 + 2);
    expect(named(s, 'Majordomo')).toHaveLength(1);
    expect(named(s, 'Straggler')).toHaveLength(1);
  });

  // rewards not hosting (dead-window audit, 2026-10-14): it was "+1 more when an action gains you silver"
  it('Silversmith: whenever a rival takes a Silver space, +1 silver, named; not your own, not other spaces', () => {
    let s = take(sc({ members: [[], ['silver.silversmith']] }), 'silver.toast');
    expect(S(s, 1)).toBe(1 + 1); // Toast's +1 to everyone else, and Silversmith's
    expect(named(s, 'Silversmith')).toEqual(["P2's Silversmith: +1 silver."]);
    s = take(sc({ members: [['silver.silversmith']] }), 'silver.toast');
    expect(S(s)).toBe(3);
    expect(named(s, 'Silversmith')).toHaveLength(0);
    s = take(sc({ members: [[], ['silver.silversmith']] }), 'gold.rush');
    expect(S(s, 1)).toBe(0);
  });
  it('Silversmith × Grand Host: the host’s doubling doesn’t touch the rival’s +1', () => {
    const s = take(sc({ members: [['silver.grandhost'], ['silver.silversmith']] }), 'silver.toast');
    expect([S(s), S(s, 1)]).toEqual([6, 2]);
  });

  it('Steward: round start +1 per 3 silver held, named', () => {
    const s = sc({ res: [{ silver: 7 }], members: [['silver.steward']], queue: [{ t: 'round', r: 2 }] });
    expect(S(s)).toBe(9);
    expect(named(s, 'Steward')).toHaveLength(1);
  });

  it('Steward counts after other round-start income: listed before Benefactor, 1 + 3 = 4 silver pays +1 (Cory hit this)', () => {
    const s = sc({ res: [{ silver: 1 }], members: [['silver.steward', 'silver.benefactor']], queue: [{ t: 'round', r: 2 }] });
    expect(S(s)).toBe(5);
    expect(named(s, 'Steward')).toHaveLength(1);
  });

  it('Retinue: worth 3 followers, 3 members; when recruited everyone else +1 silver, named; a rival’s Guest gets 1 more', () => {
    let s = sc({ n: 3, res: [rich], members: [[], [], ['silver.guest']], shop: ['silver.retinue'] });
    const f0 = followers(s, s.players[0]);
    s = take(s, 'gold.rush'); s = buy(s, 'silver.retinue');
    expect(followers(s, s.players[0])).toBe(f0 + 3);
    expect(memberCount(s, s.players[0])).toBe(3);
    expect([S(s, 1), S(s, 2)]).toEqual([1, 2]);
    expect(named(s, 'Retinue').length).toBeGreaterThanOrEqual(1);
  });

  // Cory (2026-10-14): Feast Hall became Revelers, a group: more members, not more silver
  it('Revelers counts as 3 silver members for per-member effects, contributes no red contest count, and scores 3 followers (every member is a follower, Cory Oct 29)', () => {
    let s = sc({ members: [['silver.revelers'], ['red.intern', 'red.twins']], res: [{}, { red: 3 }], queue: [] });
    expect(memberCount(s, s.players[0])).toBe(3);
    expect(followers(s, s.players[0])).toBe(4);
    const red = contestTable(s).find(c => c.qid === 'red');
    expect(red.rows.find(r => r.player === 0).count).toBe(0);
    expect(red.rows.find(r => r.player === 1).count).toBe(3);
    expect(red.winners).toEqual([1]); // Silver’s printed group does not affect Red’s resource contest.
    expect(take(sc({ round: 2, members: [['silver.revelers']] }), 'gold.windfall').players[0].res.gold).toBe(3);
    s = sc({ members: [['silver.revelers', 'red.patriarch']], queue: [{ t: 'finish' }] });
    expect(s.players[0].final.parts).toContain('Patriarch +2');
    s = sc({ members: [['silver.heir', 'silver.revelers']], queue: [{ t: 'round', r: 3 }] });
    expect(S(s)).toBe(4);
  });

  // pays when recruited too (dead-window audit, 2026-10-14): recruited in round III it used to give nothing
  it('Heir: when recruited, +1 silver per member you have (itself included), named', () => {
    let s = sc({ round: 3, res: [{ silver: 7 }], members: [['red.intern', 'red.twins']], shop: ['silver.heir'], queue: [{ t: 'buy', p: 0 }] });
    s = buy(s, 'silver.heir');
    expect(S(s)).toBe(5); // Heir1 + Intern1 + Triplets 3.
    expect(named(s, 'Heir')).toEqual(["P1's Heir: +5 silver."]);
  });
  it('Heir: at round start, only round III pays, +1 silver per member, named', () => {
    let s = sc({ members: [['silver.heir', 'red.intern', 'red.twins']], queue: [{ t: 'round', r: 2 }] });
    expect(S(s)).toBe(0);
    s = sc({ members: [['silver.heir', 'red.intern', 'red.twins']], queue: [{ t: 'round', r: 3 }] });
    expect(S(s)).toBe(5); // Heir1 + Intern1 + Triplets 3.
    expect(named(s, 'Heir')).toHaveLength(1);
  });

  it('Upstart: when recruited, half the silver of the richest rival (rounded up), named', () => {
    let s = sc({ n: 3, round: 3, res: [{}, { silver: 4 }, { silver: 9 }], shop: ['silver.spoon'] });
    s = move(take(s, 'red.take'), `card:${uidOf(s, 'silver.spoon', 'shop')}`);
    expect(S(s)).toBe(5); // half of 9, rounded up
    expect(named(s, 'Upstart')).toHaveLength(1);
  });

  it('Toastmaster: +1 follower per Silver space, named; Straggler onto Silver counts', () => {
    let s = take(sc({ members: [['silver.toastmaster']] }), 'silver.toast');
    expect(s.players[0].bonus).toBe(1);
    expect(named(s, 'Toastmaster')[0]).toMatch(/P1's Toastmaster: \+1 follower/);
    s = sc({ round: 2, members: [['silver.toastmaster', 'benders.straggler']], slots: { '0-0': 0 }, queue: [{ t: 'allPlaced' }] });
    s = move(s, 'to:2-0');
    expect(s.players[0].bonus).toBe(1);
  });

  it('Debutantes: once per game, double your silver and everyone else +2; named; a rival’s Guest gets 1 more', () => {
    let s = sc({ res: [{ silver: 5 }], members: [['silver.gala'], ['silver.guest']] });
    s = take(s, 'gold.rush');
    s = move(s, `use:${uidOf(s, 'silver.gala', 0)}`);
    expect(S(s)).toBe(10);
    expect(S(s, 1)).toBe(3);
    expect(named(s, 'Debutantes')).toHaveLength(1);
  });

  it('Grand Host: Silver spaces give twice the silver, and the log says Grand Host did it', () => {
    const s = take(sc({ members: [['silver.grandhost']] }), 'silver.toast');
    expect(S(s)).toBe(6);
    expect(S(s, 1)).toBe(1); // the spill is not doubled
    expect(named(s, 'Grand Host')).toHaveLength(1);
  });
  it('Grand Host × Doppelganger: each copy doubles again (×4)', () => {
    let s = sc({ members: [['silver.grandhost', 'echo.doppel']] });
    s.cards[uidOf(s, 'echo.doppel', 0)].copy = 'silver.grandhost';
    s = take(s, 'silver.toast');
    expect(S(s)).toBe(12);
  });

  it('Patron Saint: game end +1 follower per 2 silver members in play, anyone’s', () => {
    const s = sc({ members: [['silver.saint', 'silver.dowager'], ['silver.guest', 'silver.heir']], queue: [{ t: 'finish' }] });
    expect(s.players[0].final.parts).toEqual(['Patron Saint +3']); // Dowager is worth 3, so 3 members (Nov 1)
    void resume;
  });
});
