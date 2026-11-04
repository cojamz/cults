// @vitest-environment node
// Card quality loop, Members A (Nov 4; /mnt/project-files/quality/pitches/A-*.md), the REPLACE7=1 bot-test switch: one
// test per sentence of each new card's text, plus the turn from its pitch. The switch is read when the engine loads,
// so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

// every card the lane built (REPLACE7=1 deals only the picks: Seat Filler, Runner, Foster Parents)
process.env.REPLACE7 = 'seatfiller,interrupter,runner,ushers,fosterparents';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { take, move } = await import('./helpers.js');
const { table, named, uidIn, owns } = await import('./cards-helpers-b.js');
delete process.env.REPLACE7;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const passBuys = (s, p) => { while (s.pending?.player === p && s.pending.kind === 'buy') s = move(s, 'pass'); return s; };

describe('REPLACE7: the switch', () => {
  it('prints the pitched prices (as a player sees them) and retires the old cards', () => {
    const card = id => { const d = defById(id); return [d.name, d.s, d.w, d.f, d.n]; };
    expect(card('red.seatfiller')).toEqual(['Seat Filler', 2, 1, 1, 1]);
    expect(card('red.ushers')).toEqual(['Ushers', 2, 2, 2, 2]);
    expect(card('purple.runner')).toEqual(['Runner', 4, 2, 1, 1]);
    expect(card('purple.interrupter')).toEqual(['Interrupter', 4, 2, 1, 1]);
    expect(card('red.fosterparents')).toEqual(['Foster Parents', 2, 2, 2, 2]);
    for (const id of ['red.volunteer', 'red.recruitbonus', 'purple.courier']) expect(defById(id).retired).toBe(true);
  });
});

describe('Seat Filler: "Round Start: you may give this to the shop and recruit a shop member costing up to 3 more."', () => {
  const start = () => table(['red', 'market', 'trading', 'yellow'], { round: 1, members: [['red.seatfiller']],
    pileFirst: ['red.bodysnatchers', 'red.panel', 'red.crowd'], queue: [{ t: 'round', r: 2 }] }); // round II's row

  it('at round start, offers each shop member costing up to 3 more (6 for a 3-cost Seat Filler), and keeping it', () => {
    const s = start();
    expect(s.pending.prompt).toBe('Seat Filler: give it to the shop and recruit a shop member costing up to 6?');
    const labels = s.pending.options.map(o => o.label);
    expect(labels.some(l => l.includes('Body Snatchers (6)'))).toBe(true);
    expect(labels.some(l => l.includes('Panel'))).toBe(false); // 7 is 4 more
    expect(labels).toContain('Keep it');
  });

  it('the pitched turn: round II starts, Seat Filler goes to the shop and its owner recruits Body Snatchers for free', () => {
    let s = start();
    const red = s.players[0].res.red;
    s = answer(s, `card:${uidIn(s, 'red.bodysnatchers', 'shop')}`);
    expect(owns(s, 0, 'red.bodysnatchers')).toBe(true);
    expect(owns(s, 0, 'red.seatfiller')).toBe(false);
    expect(s.shop.some(u => s.cards[u].def === 'red.seatfiller')).toBe(true); // in the slot Body Snatchers left
    expect(s.players[0].res.red).toBe(red); // free
    expect(named(s, 'Seat Filler')).toContain("P1's Seat Filler goes to the shop; P1 recruits Body Snatchers for free.");
  });

  it('"you may": keeping it changes nothing', () => {
    let s = start();
    s = answer(s, 'none');
    expect(owns(s, 0, 'red.seatfiller')).toBe(true);
    expect(owns(s, 0, 'red.bodysnatchers')).toBe(false);
  });
});

describe('Ushers: "Each turn, you may also recruit one member costing 3 or less."', () => {
  const turn = () => table(['red', 'market', 'trading', 'yellow'], { round: 1, res: [{ red: 10 }], members: [['red.ushers']],
    shop: ['red.crowd', 'red.intern', 'red.loyalists', 'red.bodysnatchers'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
  const payAll = s => { while (s.pending?.kind === 'choose' && s.pending.options.some(o => o.kind === 'pay')) s = answer(s, s.pending.options.find(o => o.kind === 'pay').id); return s; };

  it("after the turn's own recruit, one more recruit step that offers only members costing 3 or less", () => {
    let s = take(turn(), 'red.turnout'); // Gather
    expect(s.pending.kind).toBe('buy');
    s = payAll(move(s, `card:${uidIn(s, 'red.loyalists', 'shop')}`)); // the turn's own recruit: a 5
    while (s.pending?.kind === 'buy' && s.pending.afterPurchase) s = move(s, 'pass');
    expect(s.pending.prompt).toBe('P1: Ushers: also recruit a member costing 3 or less, or pass');
    const ids = s.pending.options.map(o => o.id);
    expect(ids).toContain(`card:${uidIn(s, 'red.crowd', 'shop')}`);
    expect(ids).toContain(`card:${uidIn(s, 'red.intern', 'shop')}`);
    expect(ids.some(id => id.startsWith('tier:'))).toBe(false); // members only
    expect(ids).not.toContain(`card:${uidIn(s, 'red.bodysnatchers', 'shop')}`); // 6
    s = payAll(move(s, `card:${uidIn(s, 'red.crowd', 'shop')}`));
    expect(owns(s, 0, 'red.loyalists')).toBe(true);
    expect(owns(s, 0, 'red.crowd')).toBe(true);
  });

  it('"you may": passing it ends the turn', () => {
    let s = take(turn(), 'red.turnout');
    s = passBuys(s, 0);
    expect(s.pending.player).toBe(1);
    expect(owns(s, 0, 'red.crowd')).toBe(false);
  });

  it('a player without Ushers gets one recruit step', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 1, res: [{ red: 10 }], shop: ['red.crowd', 'red.intern'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.turnout');
    s = move(s, `card:${uidIn(s, 'red.crowd', 'shop')}`);
    while (s.pending?.kind === 'choose') s = answer(s, s.pending.options[0].id);
    while (s.pending?.player === 0 && s.pending.kind === 'buy' && s.pending.afterPurchase) s = move(s, 'pass');
    expect(s.pending.player).toBe(1);
  });
});

describe('Runner: "Whenever you take two turns in a row, recruit once more on the second."', () => {
  const two = () => table(['red', 'purple', 'market', 'yellow'], { round: 2, res: [{ red: 20 }], members: [['purple.runner']],
    shop: ['red.crowd', 'red.intern', 'red.loyalists'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
  const payAll = s => { while (s.pending?.kind === 'choose' && s.pending.options.some(o => o.kind === 'pay')) s = answer(s, s.pending.options.find(o => o.kind === 'pay').id); return s; };

  it('the first turn has one recruit; the second of two in a row has two', () => {
    let s = take(two(), 'red.turnout');
    expect(s.pending.prompt).toMatch(/^P1: recruit a member or followers, or pass$/);
    s = passBuys(s, 0);
    expect(s.pending.kind).toBe('place');
    expect(named(s, 'Runner')).toContain("P1's Runner: two turns in a row, so P1 recruits once more this turn.");
    s = take(s, 'red.evenswap');
    while (s.pending?.kind === 'choose' && !s.pending.options.some(o => o.kind === 'pay')) s = answer(s, s.pending.options.at(-1).id);
    expect(s.pending.prompt).toMatch(/\(2 recruits left\)/);
    s = payAll(move(s, `card:${uidIn(s, 'red.crowd', 'shop')}`));
    expect(s.pending.kind).toBe('buy');
    s = payAll(move(s, `card:${uidIn(s, 'red.intern', 'shop')}`));
    expect(owns(s, 0, 'red.crowd')).toBe(true);
    expect(owns(s, 0, 'red.intern')).toBe(true);
  });

  it('turns that are not in a row get no extra recruit', () => {
    let s = table(['red', 'purple', 'market', 'yellow'], { round: 2, res: [{ red: 20 }], members: [['purple.runner']],
      shop: ['red.crowd'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }] });
    s = take(s, 'red.turnout');
    expect(s.pending.prompt).toMatch(/^P1: recruit a member or followers, or pass$/);
    expect(named(s, 'Runner')).toEqual([]);
  });
});

describe('Interrupter: "Whenever a rival takes two turns in a row, you may skip the second."', () => {
  it('a rival goes twice in a row; skipping moves the second turn behind the round\'s other turns', () => {
    const turns = [{ t: 'turn', p: 1 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 2 }, { t: 'allPlaced' }];
    let s = table(['red', 'purple', 'market', 'yellow'], { n: 3, round: 2, members: [['purple.interrupter']], queue: turns });
    s = take(s, 'red.turnout');
    s = passBuys(s, 1);
    expect(s.pending.player).toBe(0);
    expect(s.pending.prompt).toBe('Interrupter: P2 takes two turns in a row. Skip the second?');
    s = answer(s, 'skip');
    expect(s.pending.player).toBe(0);
    expect(s.pending.kind).toBe('place');
    expect(s.log).toContain("P1's Interrupter: P2 skips their next turn.");
    expect(s.queue.filter(t => t.t === 'turn').map(t => t.p)).toEqual([2, 1]);
  });

  it('"you may": letting it go keeps the turn', () => {
    const turns = [{ t: 'turn', p: 1 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'allPlaced' }];
    let s = table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['purple.interrupter']], queue: turns });
    s = take(s, 'red.turnout');
    s = passBuys(s, 1);
    s = answer(s, 'let');
    expect(s.pending.player).toBe(1);
    expect(s.pending.kind).toBe('place');
    expect(s.log).toContain("P1's Interrupter: lets P2 go again.");
  });

  it('its own two turns in a row ask nobody', () => {
    const turns = [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'allPlaced' }];
    let s = table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['purple.interrupter']], queue: turns });
    s = take(s, 'red.turnout');
    s = passBuys(s, 0);
    expect(s.pending.player).toBe(0);
    expect(s.pending.kind).toBe('place');
  });
});

describe('Foster Parents: "Whenever a member joins your cult from a rival’s, +2 followers."', () => {
  it("the pitched turn: Promote gives your member to a rival and brings theirs in: +2", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.fosterparents', 'red.crowd'], ['red.loyalists']], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.hireup'); // Promote
    s = answer(s, `trade:${uidIn(s, 'red.crowd', 0)}:${uidIn(s, 'red.loyalists', 1)}`);
    expect(owns(s, 0, 'red.loyalists')).toBe(true);
    expect(s.players[0].bonus).toBe(2);
    expect(named(s, 'Foster Parents')).toContain("P1's Foster Parents: Loyalists joins from P2's cult, +2 followers.");
  });

  it("a rival's Promote that trades with you pays you too", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.loyalists'], ['red.fosterparents', 'red.crowd']], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.hireup'); // P1 gives Loyalists and takes P2's Crowd-Pleaser
    s = answer(s, `trade:${uidIn(s, 'red.loyalists', 0)}:${uidIn(s, 'red.crowd', 1)}`);
    expect(owns(s, 1, 'red.loyalists')).toBe(true);
    expect(s.players[1].bonus).toBe(2);
  });

  it('a member from the shop pays nothing', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.fosterparents', 'red.crowd']], shop: ['red.loyalists'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.hireup');
    s = answer(s, `trade:${uidIn(s, 'red.crowd', 0)}:${uidIn(s, 'red.loyalists', 'shop')}`);
    expect(owns(s, 0, 'red.loyalists')).toBe(true);
    expect(s.players[0].bonus).toBe(0);
  });
});
