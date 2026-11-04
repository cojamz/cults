// @vitest-environment node
// Card quality loop, Members A (Nov 4; /mnt/project-files/quality/pitches/A-*.md), the REPLACE7=1 bot-test switch: one
// test per sentence of each new card's text, plus the turn from its pitch. The switch is read when the engine loads,
// so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

// every card the lane built (REPLACE7=1 deals only the picks: Seat Filler, Foster Parents, Godfather, Day Laborers, Night Manager)
process.env.REPLACE7 = 'seatfiller,interrupter,runner,ushers,fosterparents,godfather,daylaborers,nightmanager';
const { applyMove, resume } = await import('../../../engine/v4/core.js');
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
    expect(card('red.godfather')).toEqual(['Godfather', 4, 2, 1, 1]);
    expect(card('purple.daylaborers')).toEqual(['Day Laborers', 3, 2, 3, 3]);
    expect(card('purple.nightmanager')).toEqual(['Night Manager', 2, 2, 1, 1]);
    for (const id of ['red.patriarch', 'purple.crew', 'purple.timekeepers']) expect(defById(id).retired).toBe(true);
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
    expect(s.shop.some(u => s.cards[u].def === 'red.seatfiller')).toBe(true); // face up in the row
    expect(s.players[0].res.red).toBe(red); // free
    expect(named(s, 'Seat Filler')).toContain("P1's Seat Filler goes to the shop; P1 recruits Body Snatchers for free.");
  });

  it("its owner's Loyalists doesn't stop it (no swap in its text), and the row stays its size", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 1, members: [['red.seatfiller', 'red.loyalists']],
      pileFirst: ['red.bodysnatchers', 'red.panel', 'red.crowd'], queue: [{ t: 'round', r: 2 }] });
    const size = s.shop.length;
    s = answer(s, `card:${uidIn(s, 'red.bodysnatchers', 'shop')}`);
    expect(owns(s, 0, 'red.bodysnatchers')).toBe(true);
    expect(owns(s, 0, 'red.seatfiller')).toBe(false);
    expect(s.shop.length).toBe(size);
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

describe('Godfather: "On Use, once per game: recruit a shop member costing up to the number of members you have, for free."', () => {
  it('the pitched turn: 8 members (Panel counts as 3, Deprogrammers as 4, Godfather 1) recruit Proselytizers (8) free, not Mob (12)', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 3, members: [['red.godfather', 'red.panel', 'red.movementpenalty']], shop: ['red.proselytizer', 'red.mob'], queue: [{ t: 'buy', p: 0 }] });
    const uid = uidIn(s, 'red.godfather', 0);
    s = move(s, `use:${uid}`);
    expect(s.pending.prompt).toBe('Godfather: recruit which shop member (costing up to 8) for free?');
    expect(s.pending.options.map(o => o.label)).toEqual(['Proselytizers (8)']);
    s = answer(s, `card:${uidIn(s, 'red.proselytizer', 'shop')}`);
    expect(owns(s, 0, 'red.proselytizer')).toBe(true);
    expect(s.players[0].res.red).toBe(0);
    expect(s.cards[uid].used).toBe(true);
    expect(named(s, 'Godfather')).toContain("P1 uses Godfather: 8 members, so a shop member costing up to 8, for free.");
  });

  it('with nothing in reach it stays unused', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.godfather']], shop: ['red.mob'], queue: [{ t: 'buy', p: 0 }] });
    const uid = uidIn(s, 'red.godfather', 0);
    s = move(s, `use:${uid}`);
    expect(s.cards[uid].used).toBe(false);
  });
});

describe('Day Laborers: "Round Start: take your first two turns in a row."', () => {
  it('round II: the owner, second in order, takes its first two turns back to back', () => {
    // fewest followers first: P1 0, P2 3 (Day Laborers' worth), P3 5, P4 6
    let s = table(['red', 'purple', 'market', 'yellow'], { n: 4, round: 1, bonus: [0, 0, 5, 6], members: [[], ['purple.daylaborers']] , queue: [{ t: 'round', r: 2 }] });
    expect(s.log.some(l => l.includes("P2's Day Laborers: P2's first two turns come in a row."))).toBe(true);
    // P1 is placing now; the queue's next turns are P2's two
    expect(s.queue.filter(t => t.t === 'turn').map(t => t.p).slice(0, 2)).toEqual([1, 1]);
  });
});

describe('Night Manager: "Round End: if you placed the round’s last minion, +1 follower per purple member you have."', () => {
  const end = last => table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['purple.nightmanager', 'purple.earlybird']], queue: [{ t: 'endRound' }] });
  it('the owner placed the last minion: +1 per purple member (Early Birds counts as 2, Night Manager 1)', () => {
    let s = table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['purple.nightmanager', 'purple.earlybird']], queue: [] });
    s = { ...s, lastPlaced: { round: 2, pid: 0 }, queue: [{ t: 'endRound' }], pending: null };
    const before = s.players[0].bonus;
    s = resume(s);
    expect(s.players[0].bonus - before).toBe(3);
    expect(named(s, 'Night Manager')).toContain("P1's Night Manager: P1 placed the round's last minion, +3 followers (3 purple members).");
  });
  it('a rival placed it: nothing', () => {
    let s = table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['purple.nightmanager']], queue: [] });
    s = { ...s, lastPlaced: { round: 2, pid: 1 }, queue: [{ t: 'endRound' }], pending: null };
    s = resume(s);
    expect(named(s, 'Night Manager')).toEqual([]);
  });
});
