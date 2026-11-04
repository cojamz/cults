// @vitest-environment node
// Replacement batch 6 (Nov 3; /mnt/project-files/replacements/batch6.md), the REPLACE6=1 bot-test switch: each new
// card fires once in a small hand-built position, and the old card it replaces is no longer dealt. The switch is read
// when the engine loads, so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE6 = '1';
const { applyMove, contextFor, resume } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { move } = await import('./helpers.js');
const { table, named, uidIn, owns } = await import('./cards-helpers-b.js');
// read once at load: cleared again so a later test file in this worker loads the engine without the switch
delete process.env.REPLACE6;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE6: the switch', () => {
  it('prints the draft prices (as a player sees them) and retires the old cards', () => {
    const price = id => { const d = defById(id); return [d.s, d.w, d.f]; };
    expect(price('silver.socialclimbers')).toEqual([6, 3, 1]);
    expect(price('silver.godparents')).toEqual([4, 1, 1]);
    expect(price('trading.successors')).toEqual([4, 1, 1]);
    expect(price('trading.inquisitors')).toEqual([4, 1, 1]);
    expect(price('trading.pallbearers')).toEqual([4, 1, 1]);
    expect(price('benders.sorelosers')).toEqual([0, 5, 1]);
    expect(price('benders.peddlers')).toEqual([0, 5, 1]);
    for (const id of ['silver.gala', 'silver.guest', 'trading.cashier', 'trading.raider', 'trading.oldmoney', 'benders.hr', 'benders.freelancer'])
      expect(defById(id).retired).toBe(true);
  });
});

describe('REPLACE6: each card fires', () => {
  it('Social Climber: gain followers equal to the silver of the rival who holds the most', () => {
    let s = table(['red', 'silver', 'market', 'trading'], { n: 3, round: 3, res: [{}, { silver: 12 }, { silver: 4 }], members: [['silver.socialclimbers']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'silver.socialclimbers', 0)}`);
    expect(s.players[0].bonus).toBe(12);
    expect(s.players[1].res.silver).toBe(12);
    expect(named(s, 'Social Climber')).toContain("P1's Social Climber: P2 holds 12 silver, the most: +12 followers.");
  });

  it('Godparent: give one of your members to a rival; gain followers equal to its cost', () => {
    let s = table(['red', 'silver', 'market', 'trading'], { n: 3, round: 3, members: [['silver.godparents', 'trading.martyr']], queue: [{ t: 'buy', p: 0 }] });
    const martyr = uidIn(s, 'trading.martyr', 0);
    s = move(s, `use:${uidIn(s, 'silver.godparents', 0)}`);
    expect(s.pending.prompt).toBe('Godparent: give which of your members to which rival?');
    s = answer(s, `give:${martyr}:2`);
    expect(owns(s, 2, 'trading.martyr')).toBe(true);
    expect(s.players[0].bonus).toBe(8); // Godparent 4, and Martyrs' own 4 as it leaves
  });

  it('Successors: cast out one of your members; recruit a shop member costing up to its cost, for free', () => {
    let s = table(['red', 'trading', 'market', 'yellow'], { round: 2, members: [['trading.successors', 'red.crowd']], shop: ['red.recruitbonus', 'market.snob'], queue: [] });
    contextFor(s).buryMember(s.players[0], uidIn(s, 'red.crowd', 0));
    s = resume(s);
    expect(s.pending.prompt).toBe('Successors: recruit which shop member (costing up to 3) for free?');
    const rb = s.pending.options.find(o => o.uid === uidIn(s, 'red.recruitbonus', 'shop') || o.value === uidIn(s, 'red.recruitbonus', 'shop'));
    expect(rb).toBeTruthy();
    expect(s.pending.options.some(o => o.label.startsWith('Snobs'))).toBe(false);
    s = answer(s, rb.id);
    expect(owns(s, 0, 'red.recruitbonus')).toBe(true);
  });

  it('Inquisitors: each rival casts out one of their members; +2 followers per member cast out', () => {
    let s = table(['red', 'trading', 'market', 'yellow'], { n: 3, round: 2, members: [['trading.inquisitors'], ['market.snob', 'red.crowd'], ['trading.martyr']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'trading.inquisitors', 0)}`);
    expect(s.pending.player).toBe(1);
    expect(s.pending.prompt).toBe('Inquisitors: cast out which of your members?');
    s = answer(s, `card:${uidIn(s, 'red.crowd', 1)}`);
    expect(s.pending.player).toBe(2);
    s = answer(s, `card:${uidIn(s, 'trading.martyr', 2)}`);
    expect(owns(s, 1, 'red.crowd')).toBe(false);
    expect(owns(s, 2, 'trading.martyr')).toBe(false);
    expect(s.players[2].bonus).toBe(4); // Martyrs pays as it goes
    expect(s.players[0].bonus).toBe(4);
  });

  it('Pallbearers: a rival casts out a member; gain followers equal to half its cost, rounded up', () => {
    let s = table(['red', 'trading', 'market', 'yellow'], { round: 2, members: [['trading.pallbearers'], ['market.snob']], queue: [] });
    contextFor(s).buryMember(s.players[1], uidIn(s, 'market.snob', 1));
    s = resume(s);
    expect(s.players[0].bonus).toBe(3); // Snobs costs 6
    expect(named(s, 'Pallbearers')).toContain("P1's Pallbearers: P2 cast out Snobs (6): +3 followers.");
  });

  it('Sore Loser: win no contest, steal 3 followers from the rival who wins the most', () => {
    const s = table(['red', 'market', 'trading', 'yellow'], { n: 3, round: 2, res: [{}, { red: 4, blue: 3 }, { white: 2 }], bonus: [0, 5, 5], members: [['benders.sorelosers']], queue: [{ t: 'endRound' }] });
    // P2 wins Red and Blue (+12), P3 wins White (+6); P1 nothing: 3 from P2
    expect(s.players[0].bonus).toBe(3);
    expect(s.players[1].bonus).toBe(5 + 12 - 3);
    expect(named(s, 'Sore Loser')).toContain("P1's Sore Loser: P1 won no contest; steals 3 followers from P2.");
  });

  it("Peddlers: the pile's top member sits beside it; rivals may recruit it, paying you", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 1, res: [{}, { red: 5 }], members: [['benders.peddlers']], pileFirst: ['red.crowd'], queue: [] });
    const ctx = contextFor(s);
    const ped = uidIn(s, 'benders.peddlers', 0);
    defById('benders.peddlers').onRoundStart(ctx, s.players[0], ctx.card(ped));
    s = resume({ ...s, queue: [{ t: 'buy', p: 1 }] });
    expect(s.pending.player).toBe(1);
    const opt = s.pending.options.find(o => o.label === "Crowd-Pleaser (P1's Peddlers)");
    expect(opt).toBeTruthy();
    const red = s.players[0].res.red || 0;
    s = answer(s, opt.id);
    if (s.pending?.kind === 'pay') s = answer(s, s.pending.options.find(o => o.id.startsWith('pay:')).id);
    expect(owns(s, 1, 'red.crowd')).toBe(true);
    expect((s.players[0].res.red || 0) - red).toBe(3);
    expect(s.stalls[ped]).toEqual([]);
    expect(named(s, 'Peddlers').some(l => l.includes("paid to P1's Peddlers"))).toBe(true);
  });
});
