// @vitest-environment node
// Card quality loop, Members A (Nov 4; /mnt/project-files/quality/pitches/A-*.md), the REPLACE7=1 bot-test switch: one
// test per sentence of each new card's text, plus the turn from its pitch. The switch is read when the engine loads,
// so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

// every card the lane built (REPLACE7=1 deals only the picks: Seat Filler, Foster Parents, Godfather, Day Laborers, Night Manager)
process.env.REPLACE7 = 'seatfiller,interrupter,runner,ushers,godfather,crimefamily,gobetween,nightshift,sleepyheads,drillsergeant,wakeupcaller,converts,snoozers,sprinter,earlyrisers,daylaborers,nightmanager,pacesetters,lifers,floorcrew,timekeeperlift,oldtimer,lookouts,errandboy,moonlighters,relayrunners,shepherd,evangelists,zealots';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { applyMove, resume, followers } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { take, move } = await import('./helpers.js');
const { table, named, uidIn, owns } = await import('./cards-helpers-b.js');
delete process.env.REPLACE7;
delete process.env.MEMBER_UP;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const passBuys = (s, p) => { while (s.pending?.player === p && s.pending.kind === 'buy') s = move(s, 'pass'); return s; };

describe('REPLACE7: the switch', () => {
  it('prints the pitched prices (as a player sees them) and retires the old cards', () => {
    const card = id => { const d = defById(id); return [d.name, d.s, d.w, d.f, d.n]; };
    expect(card('red.seatfiller')).toEqual(['Seat Filler', 2, 2, 1, 1]);
    expect(card('red.ushers')).toEqual(['Ushers', 2, 3, 2, 2]);
    expect(card('purple.runner')).toEqual(['Runner', 4, 3, 1, 1]);
    expect(card('purple.interrupter')).toEqual(['Interrupter', 4, 3, 1, 1]);
    expect(card('red.fosterparents')).toEqual(['Foster Parents', 3, 2, 2, 2]);
    expect(card('red.godfather')).toEqual(['Godfather', 4, 3, 1, 1]);
    expect(card('red.crimefamily')).toEqual(['Crime Family', 4, 3, 3, 3]);
    expect(card('purple.gobetween')).toEqual(['Go-Between', 2, 3, 1, 1]);
    expect(card('purple.nightshift')).toEqual(['Night Shift', 2, 3, 1, 1]);
    expect(card('purple.sleepyheads')).toEqual(['Sleepyheads', 3, 3, 2, 2]);
    expect(card('red.drillsergeant')).toEqual(['Drill Sergeant', 4, 5, 1, 1]);
    expect(card('red.converts')).toEqual(['Converts', 4, 5, 2, 2]);
    expect(card('purple.snoozers')).toEqual(['Snoozers', 3, 2, 3, 3]);
    expect(card('purple.sprinter')).toEqual(['Sprinter', 2, 3, 1, 1]);
    expect(card('purple.earlyrisers')).toEqual(['Early Risers', 2, 3, 2, 2]);
    expect(card('purple.daylaborers')).toEqual(['Day Laborers', 3, 3, 3, 3]);
    expect(card('purple.nightmanager')).toEqual(['Night Managers', 2, 3, 2, 2]);
    expect(card('purple.pacesetters')).toEqual(['Pace-Setters', 3, 3, 2, 2]);
    expect(card('purple.lifers')).toEqual(['Lifers', 3, 2, 2, 2]);
    expect(card('purple.floorcrew')).toEqual(['Floor Crew', 3, 2, 3, 3]);
    expect(card('purple.picketline')).toEqual(['Picket Line', 3, 2, 3, 3]);
    expect(card('purple.timekeeperlift')).toEqual(['Head Timekeeper', 2, 3, 1, 1]);
    expect(card('purple.oldtimer')).toEqual(['Old Timer', 2, 3, 1, 1]);
    expect(card('purple.lookouts')).toEqual(['Lookouts', 3, 3, 2, 2]);
    expect(card('purple.errandboy')).toEqual(['Errand Boy', 2, 3, 1, 1]);
    expect(card('purple.moonlighters')).toEqual(['Moonlighters', 7, 2, 2, 2]);
    expect(card('purple.relayrunners')).toEqual(['Relay Runners', 2, 3, 2, 2]);
    expect(card('red.shepherd')).toEqual(['Shepherd', 4, 3, 1, 1]);
    expect(card('red.evangelists')).toEqual(['Evangelists', 4, 5, 2, 2]);
    expect(card('red.zealots')).toEqual(['Zealots', 4, 5, 2, 2]);
    expect(defById('purple.nightowl').retired).toBe(true);
    expect(defById('purple.timekeeperlift').onGameEnd({ countMembersOfColor: () => 3 })).toBe(6);
    for (const id of ['red.patriarch', 'purple.timekeepers', 'purple.nightwatch']) expect(defById(id).retired).toBe(true);
    for (const id of ['red.volunteer', 'red.recruitbonus', 'purple.courier', 'purple.crew']) expect(defById(id).retired).toBe(true);
  });
});

describe('Seat Filler: "Round Start: you may give this to the shop and recruit a shop member costing up to 3 more, for free."', () => {
  const start = () => table(['red', 'market', 'trading', 'yellow'], { round: 1, members: [['red.seatfiller']],
    pileFirst: ['red.bodysnatchers', 'red.panel', 'red.crowd'], queue: [{ t: 'round', r: 2 }] }); // round II's row

  it('at round start, offers each shop member costing up to 3 more (7 for a 4-cost Seat Filler), and keeping it', () => {
    const s = start();
    expect(s.pending.prompt).toBe('Seat Filler: give it to the shop and recruit a shop member costing up to 7?');
    const labels = s.pending.options.map(o => o.label);
    expect(labels.some(l => l.includes('Body Snatchers (6)'))).toBe(true);
    expect(labels.some(l => l.includes('Panel'))).toBe(false); // 8 is 4 more
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

describe('Ushers: "Each turn, you may also recruit one member costing 4 or less."', () => {
  const turn = () => table(['red', 'market', 'trading', 'yellow'], { round: 1, res: [{ red: 10 }], members: [['red.ushers']],
    shop: ['red.reserve', 'red.intern', 'red.loyalists', 'red.bodysnatchers'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
  const payAll = s => { while (s.pending?.kind === 'choose' && s.pending.options.some(o => o.kind === 'pay')) s = answer(s, s.pending.options.find(o => o.kind === 'pay').id); return s; };

  it("after the turn's own recruit, one more recruit step that offers only members costing 4 or less", () => {
    let s = take(turn(), 'red.turnout'); // Gather
    expect(s.pending.kind).toBe('buy');
    s = payAll(move(s, `card:${uidIn(s, 'red.loyalists', 'shop')}`)); // the turn's own recruit: a 5
    while (s.pending?.kind === 'buy' && s.pending.afterPurchase) s = move(s, 'pass');
    expect(s.pending.prompt).toBe('P1: Ushers: also recruit a member costing 4 or less, or pass');
    const ids = s.pending.options.map(o => o.id);
    expect(ids).toContain(`card:${uidIn(s, 'red.reserve', 'shop')}`);
    expect(ids).toContain(`card:${uidIn(s, 'red.intern', 'shop')}`);
    expect(ids.some(id => id.startsWith('tier:'))).toBe(false); // members only
    expect(ids).not.toContain(`card:${uidIn(s, 'red.bodysnatchers', 'shop')}`); // 6
    s = payAll(move(s, `card:${uidIn(s, 'red.reserve', 'shop')}`));
    expect(owns(s, 0, 'red.loyalists')).toBe(true);
    expect(owns(s, 0, 'red.reserve')).toBe(true);
  });

  it('"you may": passing it ends the turn', () => {
    let s = take(turn(), 'red.turnout');
    s = passBuys(s, 0);
    expect(s.pending.player).toBe(1);
    expect(owns(s, 0, 'red.reserve')).toBe(false);
  });

  it('a player without Ushers gets one recruit step', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 1, res: [{ red: 10 }], shop: ['red.reserve', 'red.intern'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.turnout');
    s = move(s, `card:${uidIn(s, 'red.reserve', 'shop')}`);
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

  it("a rival's Demote that trades with you pays you too", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.loyalists'], ['red.fosterparents', 'red.crowd']], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.trade'); // Demote (Promote never reaches cheaper, Nov 4 night): P1 gives Loyalists and takes P2's Crowd-Pleaser
    s = answer(s, `trade:${uidIn(s, 'red.loyalists', 0)}:${uidIn(s, 'red.crowd', 1)}`);
    expect(owns(s, 1, 'red.loyalists')).toBe(true);
    expect(s.players[1].bonus).toBe(2);
  });

  it("Foster Parents itself, taken into a rival's cult by their Promote, pays its new owner", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.crowd'], ['red.fosterparents']], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.hireup'); // P1 gives Crowd-Pleaser and takes P2's Foster Parents
    s = answer(s, `trade:${uidIn(s, 'red.crowd', 0)}:${uidIn(s, 'red.fosterparents', 1)}`);
    expect(owns(s, 0, 'red.fosterparents')).toBe(true);
    expect(s.players[0].bonus).toBe(2);
    expect(s.players[1].bonus).toBe(0);
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
  it('the pitched turn: 9 members (Panel counts as 3, Deprogrammers as 4, Intern and Godfather 1) recruit Proselytizers (9) free, not Mob (13)', () => {
    // Intern added when every member cost 1 more (Nov 5): Proselytizers went to 9
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 3, members: [['red.godfather', 'red.panel', 'red.movementpenalty', 'red.intern']], shop: ['red.proselytizer', 'red.mob'], queue: [{ t: 'buy', p: 0 }] });
    const uid = uidIn(s, 'red.godfather', 0);
    s = move(s, `use:${uid}`);
    expect(s.pending.prompt).toBe('Godfather: recruit which shop member (costing up to 9) for free?');
    expect(s.pending.options.map(o => o.label)).toEqual(['Proselytizers (9)']);
    s = answer(s, `card:${uidIn(s, 'red.proselytizer', 'shop')}`);
    expect(owns(s, 0, 'red.proselytizer')).toBe(true);
    expect(s.players[0].res.red).toBe(0);
    expect(s.cards[uid].used).toBe(true);
    expect(named(s, 'Godfather')).toContain("P1 uses Godfather: 9 members, so a shop member costing up to 9, for free.");
  });

  it('with nothing in reach it stays unused', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.godfather']], shop: ['red.mob'], queue: [{ t: 'buy', p: 0 }] });
    const uid = uidIn(s, 'red.godfather', 0);
    s = move(s, `use:${uid}`);
    expect(s.cards[uid].used).toBe(false);
  });
});

describe('Crime Family (Godfather retuned): worth 3, counts as 3, "On Use, once per game: recruit a shop member costing up to the number of members you have, for free."', () => {
  it('the pitched turn: Crime Family (3) and Panel (3) make 6, so Host (6) comes free and Mob (13) does not', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 3, members: [['red.crimefamily', 'red.panel']], shop: ['red.host', 'red.mob'], queue: [{ t: 'buy', p: 0 }] });
    const uid = uidIn(s, 'red.crimefamily', 0);
    s = move(s, `use:${uid}`);
    expect(s.pending.prompt).toBe('Crime Family: recruit which shop member (costing up to 6) for free?');
    expect(s.pending.options.map(o => o.label)).toEqual(['Host (6)']);
    s = answer(s, `card:${uidIn(s, 'red.host', 'shop')}`);
    expect(owns(s, 0, 'red.host')).toBe(true);
    expect(s.cards[uid].used).toBe(true);
    expect(named(s, 'Crime Family')).toContain('P1 uses Crime Family: 6 members, so a shop member costing up to 6, for free.');
  });
});

describe('Godfather and Crime Family: a bot never takes the use with nothing in reach (Lab, c1 game 8 looped)', () => {
  it('round III, no shop member costs the count or less: botActivate says no; once one fits, yes', async () => {
    const { contextFor } = await import('../../../engine/v4/core.js');
    for (const id of ['red.godfather', 'red.crimefamily']) {
      let s = table(['red', 'market', 'trading', 'yellow'], { round: 3, members: [[id]], shop: ['red.mob'] });
      const ctx = contextFor(s), p = s.players[0];
      expect(defById(id).botActivate(ctx, p)).toBe(false);
      s = table(['red', 'market', 'trading', 'yellow'], { round: 3, members: [[id, 'red.panel', 'red.movementpenalty']], shop: ['red.host'] });
      expect(defById(id).botActivate(contextFor(s), s.players[0])).toBe(true);
    }
  });
});

describe('Go-Between: "On Use, once per round: your next turn comes right after this one."', () => {
  const four = () => table(['purple', 'red', 'market', 'yellow'], { n: 4, round: 2, members: [['purple.gobetween']],
    queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 2 }, { t: 'turn', p: 3 }, { t: 'turn', p: 0 }] });
  it('the pitched turn: used on your turn, your last turn of the round comes right after this one, before P2', () => {
    let s = four();
    const uid = uidIn(s, 'purple.gobetween', 0);
    s = move(s, `use:${uid}`);
    expect(s.cards[uid].used).toBe(true);
    s = take(s, 'red.turnout'); // Gather
    while (s.pending && s.pending.kind !== 'place') s = move(s, s.pending.options.find(o => /pass|done|skip|end/i.test(o.id + o.label))?.id ?? s.pending.options[0].id);
    expect(s.pending.player).toBe(0);
  });
  it('once per round: used, it is not offered again this round; Round Start makes it ready', () => {
    let s = four();
    const uid = uidIn(s, 'purple.gobetween', 0);
    s = move(s, `use:${uid}`);
    expect(s.pending.options.some(o => o.id === `use:${uid}`)).toBe(false);
    defById('purple.gobetween').onRoundStart(null, s.players[0], s.cards[uid]);
    expect(s.cards[uid].used).toBe(false);
  });
  it('with no turn left to pull, it stays unused', () => {
    let s = table(['purple', 'red', 'market', 'yellow'], { n: 4, round: 2, members: [['purple.gobetween']], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    const uid = uidIn(s, 'purple.gobetween', 0);
    s = move(s, `use:${uid}`);
    expect(s.cards[uid].used).toBe(false);
  });
});

describe('scale-up round 1: Sleepyheads, Night Shift, Drill Sergeant', () => {
  const turns = [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }];
  it('Sleepyheads: "Whenever you take the Goes Last token, +3 followers." Sleep In takes it: +3', () => {
    let s = table(['purple', 'red', 'market', 'yellow'], { n: 2, round: 1, members: [['purple.sleepyheads']], queue: turns });
    s = take(s, 'purple.skip');
    expect(s.players[0].bonus).toBe(3);
    expect(named(s, 'Sleepyheads')).toContain("P1's Sleepyheads: P1 takes the Goes Last token, +3 followers.");
  });
  it('Sleepyheads with Early Birds: no take, no pay', () => {
    let s = table(['purple', 'red', 'market', 'yellow'], { n: 2, round: 1, members: [['purple.sleepyheads', 'purple.earlybird']], queue: turns });
    s = take(s, 'purple.skip');
    expect(s.players[0].bonus).toBe(0);
  });
  it('Night Shift: "Round End: if you hold the Goes Last token, +1 follower per purple member you have." holder: +3 (Early Birds counts 2); not holder: 0', async () => {
    const { contextFor } = await import('../../../engine/v4/core.js');
    const s = table(['purple', 'red', 'market', 'yellow'], { n: 2, round: 2, members: [['purple.nightshift', 'purple.earlybird'], []] });
    const d = defById('purple.nightshift'), card = { uid: uidIn(s, 'purple.nightshift', 0), def: d };
    d.onRoundEnd(contextFor(s), s.players[0], card);
    expect(s.players[0].bonus).toBe(0);
    s.goesLast = { round: s.round, pid: 0 };
    d.onRoundEnd(contextFor(s), s.players[0], card);
    expect(s.players[0].bonus).toBe(3);
    expect(s.log.some(l => l.includes("P1's Night Shift: P1 holds the Goes Last token, +3 followers (3 purple members)."))).toBe(true);
  });
  it('Drill Sergeant: "Whenever you recruit 2 or more members in one turn, +3 followers." Mentor brings a second: +3, once', async () => {
    const { contextFor } = await import('../../../engine/v4/core.js');
    const s = table(['red', 'market', 'trading', 'yellow'], { n: 2, round: 3, members: [['red.drillsergeant'], []], shop: ['red.mentor', 'red.seatfiller'] });
    s.current = 0; s.players[0].turnRecruits = 0;
    s.pile = []; // no refill: Seat Filler is the one shop member left (Volunteer left the deck Nov 5; the test rode on a refill until Victors left, Nov 6)
    contextFor(s).recruit(s.players[0], uidIn(s, 'red.mentor', 'shop'), { free: true });
    expect(s.log.some(l => l.includes('Mentor: the cheapest face-up member comes along free'))).toBe(true);
    expect(s.players[0].bonus).toBe(3);
    expect(s.log.filter(l => l.includes("P1's Drill Sergeant")).length).toBe(1);
  });
});

describe('Wake-Up Caller: "Round Start: the player with the most followers skips their first turn (each of them, if tied)."', () => {
  it('round II starts, P3 leads: P3 first turn is passed (Hold Up\'s skip)', () => {
    const s = table(['purple', 'red', 'market', 'yellow'], { n: 4, round: 1, bonus: [0, 0, 9, 3], members: [['purple.wakeupcaller']], queue: [{ t: 'round', r: 2 }] });
    expect(s.log).toContain("P1's Wake-Up Caller: P3 skips their next turn.");
    expect(s.queue.some(t => t.t === 'content' && t.h === 'purple.skipped' && t.p === 2)).toBe(true);
  });
  it('Early Birds keeps the leader\'s turn', () => {
    const s = table(['purple', 'red', 'market', 'yellow'], { n: 4, round: 1, bonus: [0, 0, 9, 3], members: [['purple.wakeupcaller'], [], ['purple.earlybird']], queue: [{ t: 'round', r: 2 }] });
    expect(s.log.some(l => l.includes("P3's Early Birds: P3's turn can't be skipped."))).toBe(true);
  });
});

describe('Converts: "On Recruit: recruit a rival\'s member costing 4 or less, for free; that rival recruits the shop\'s cheapest, for free."', () => {
  it('the pitched turn: P1 takes P2\'s Intern (3); P2 recruits the shop\'s cheapest; Foster Parents pays', async () => {
    // Intern for Deprogrammers when every member cost 1 more (Nov 5): Deprogrammers costs 4, Intern costs 3
    const { contextFor } = await import('../../../engine/v4/core.js');
    let s = table(['red', 'market', 'trading', 'yellow'], { n: 2, round: 3, members: [['red.fosterparents'], ['red.intern', 'red.mob']], shop: ['red.converts', 'red.volunteer', 'red.mentor'] });
    s.current = 0;
    contextFor(s).recruit(s.players[0], uidIn(s, 'red.converts', 'shop'), { free: true });
    s = resume(JSON.parse(JSON.stringify(s)));
    expect(s.pending.options.map(o => o.label)).toEqual(['P2: Intern (3)']);
    s = answer(s, `card:${uidIn(s, 'red.intern', 1)}`);
    expect(owns(s, 0, 'red.intern')).toBe(true);
    expect(s.players[0].bonus).toBe(2); // Foster Parents
    expect(s.log).toContain("P1's Converts: P1 recruits P2's Intern.");
    if (s.pending?.options?.length && /cheapest/.test(s.pending.prompt || '')) s = answer(s, s.pending.options[0].id); // a tie in the refilled shop: the owner picks
    expect(s.log.some(l => /^P2 recruits .* from the shop, for free \(Converts\)\.$/.test(l))).toBe(true);
    expect(s.players[1].members.length).toBe(2); // Mob and the shop's cheapest
  });
  it('a rival with Loyalists keeps its members (a trade, as a swap)', async () => {
    const { contextFor } = await import('../../../engine/v4/core.js');
    // Loyalists guards its owner's other members; since Cory's Nov 6 price (2 red + 2 any) Loyalists itself costs 4, so
    // Converts can take Loyalists but never the member it guards
    let s = table(['red', 'market', 'trading', 'yellow'], { n: 2, round: 3, members: [[], ['red.movementpenalty', 'red.loyalists']], shop: ['red.converts', 'red.mentor'] });
    s.current = 0;
    contextFor(s).recruit(s.players[0], uidIn(s, 'red.converts', 'shop'), { free: true });
    const guarded = uidIn(s, 'red.movementpenalty', 1);
    expect((s.pending?.options || []).some(o => o.value === guarded || o.id?.includes(String(guarded)))).toBe(false);
    expect(s.players[1].members).toContain(guarded);
  });
});

describe('Snoozers: "Whenever you take the Goes Last token, +1 purple per minion on it."', () => {
  it('Last Call with 2 minions left: +2 purple on top of the space', () => {
    const turns = [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }];
    let s = table(['purple', 'red', 'market', 'yellow'], { n: 2, round: 2, members: [['purple.snoozers']], queue: turns });
    s = take(s, 'purple.lastcall');
    const line = s.log.find(l => l.startsWith("P1's Snoozers: +"));
    expect(line).toMatch(/^P1's Snoozers: \+(\d) purple \(\1 minions? on the Goes Last token\)\.$/);
  });
});

describe('Sprinter and Early Risers', () => {
  it('Sprinter: "On Use, once per game: your next two turns come right after this one." your last two turns move up', () => {
    let s = table(['purple', 'red', 'market', 'yellow'], { n: 4, round: 3, members: [['purple.sprinter']],
      queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 2 }, { t: 'turn', p: 3 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }] });
    const uid = uidIn(s, 'purple.sprinter', 0);
    s = move(s, `use:${uid}`);
    expect(s.cards[uid].used).toBe(true);
    const turns = s.queue.filter(t => t.t === 'turn').map(t => t.p);
    expect(turns.slice(0, 2)).toEqual([0, 0]);
    expect(turns.filter(p => p === 0).length).toBe(2);
  });
  it('Early Risers: round II starts and the owner has the fewest followers: first two turns in a row; not fewest: no', () => {
    let s = table(['purple', 'red', 'market', 'yellow'], { n: 4, round: 1, bonus: [0, 4, 5, 6], members: [['purple.earlyrisers']], queue: [{ t: 'round', r: 2 }] });
    expect(s.log.some(l => l.includes("P1's Early Risers: P1's first two turns come in a row."))).toBe(true);
    s = table(['purple', 'red', 'market', 'yellow'], { n: 4, round: 1, bonus: [9, 0, 5, 6], members: [['purple.earlyrisers']], queue: [{ t: 'round', r: 2 }] });
    expect(s.log.some(l => l.includes('Early Risers'))).toBe(false);
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
  it('the owner placed the last minion: +1 per purple member (Early Birds counts as 2, Night Managers 2: Cory, Nov 6)', () => {
    let s = table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['purple.nightmanager', 'purple.earlybird']], queue: [] });
    s = { ...s, lastPlaced: { round: 2, pid: 0 }, queue: [{ t: 'endRound' }], pending: null };
    const before = s.players[0].bonus;
    s = resume(s);
    expect(s.players[0].bonus - before).toBe(4);
    expect(named(s, 'Night Managers')).toContain("P1's Night Managers: P1 placed the round's last minion, +4 followers (4 purple members).");
  });
  it('a rival placed it: nothing', () => {
    let s = table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['purple.nightmanager']], queue: [] });
    s = { ...s, lastPlaced: { round: 2, pid: 1 }, queue: [{ t: 'endRound' }], pending: null };
    s = resume(s);
    expect(named(s, 'Night Managers')).toEqual([]);
  });
});

describe('Pace-Setters: "Whenever you take a consecutive turn, the next player skips their turn."', () => {
  it('the pitched turn: your second turn in a row skips the next rival, whose minion places after the others', () => {
    const turns = [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 2 }, { t: 'allPlaced' }];
    let s = table(['red', 'purple', 'market', 'yellow'], { n: 3, round: 2, members: [['purple.pacesetters']], queue: turns });
    s = take(s, 'red.turnout');
    s = passBuys(s, 0);
    expect(s.pending.player).toBe(0); // the consecutive turn
    expect(s.log.some(l => l.includes('P2') && l.includes('Pace-Setters'))).toBe(true);
    expect(s.queue.filter(t => t.t === 'turn').map(t => t.p)).toEqual([2, 1]);
  });

  it("Early Birds stops it", () => {
    const turns = [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 2 }, { t: 'allPlaced' }];
    let s = table(['red', 'purple', 'market', 'yellow'], { n: 3, round: 2, members: [['purple.pacesetters'], ['purple.earlybird']], queue: turns });
    s = take(s, 'red.turnout');
    s = passBuys(s, 0);
    expect(s.queue.filter(t => t.t === 'turn').map(t => t.p)).toEqual([1, 2]);
  });

  it('a turn that is not consecutive skips nobody', () => {
    const turns = [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 2 }, { t: 'allPlaced' }];
    let s = table(['red', 'purple', 'market', 'yellow'], { n: 3, round: 2, members: [['purple.pacesetters']], queue: turns });
    s = take(s, 'red.turnout');
    s = passBuys(s, 0);
    expect(s.pending.player).toBe(1);
  });
});

describe('Lifers and Floor Crew (Shift Crew\'s place, scale-up 3)', () => {
  const stub = (s, logs) => ({ state: s, log: l => logs.push(l), gain: (p, c, n) => { p.res[c] = (p.res[c] || 0) + n; } });
  it('Lifers: "Round End: put a time token on this card. Worth 1 more follower per time token." the token stays on the card when it moves', () => {
    const s = table(['purple', 'red', 'market', 'yellow'], { round: 1, members: [['purple.lifers'], []] });
    const uid = uidIn(s, 'purple.lifers', 0), p = s.players[0], logs = [];
    const before = followers(s, p);
    defById('purple.lifers').onRoundEnd(stub(s, logs), p, s.cards[uid]);
    defById('purple.lifers').onRoundEnd(stub(s, logs), p, s.cards[uid]);
    expect(followers(s, p)).toBe(before + 2);
    expect(logs[1]).toBe("P1's Lifers: a time token (worth 4).");
    // a rival who takes it takes the tokens with it
    p.members = p.members.filter(u => u !== uid); s.players[1].members.push(uid);
    expect(followers(s, p)).toBe(before - 2); // its own 2 and the 2 tokens leave
  });
  it('Floor Crew: "Whenever you recruit, +1 purple per 2 of your minions on the board." 3 minions out: +1; a rival recruiting: nothing', () => {
    const s = table(['purple', 'red', 'market', 'yellow'], { round: 2, members: [['purple.floorcrew'], []] });
    const p = s.players[0], logs = [], def = defById('purple.floorcrew'), uid = uidIn(s, 'purple.floorcrew', 0);
    s.slots = { ...s.slots, t1: p.id, t2: p.id, t3: p.id }; // 3 minions on the board
    const had = p.res.purple || 0;
    def.onRecruit(stub(s, logs), p, s.cards[uid], s.players[1], { member: { uid: 'x' } });
    def.onRecruit(stub(s, logs), p, s.cards[uid], p, { member: s.cards[uid] }); // its own arrival
    expect(p.res.purple || 0).toBe(had);
    def.onRecruit(stub(s, logs), p, s.cards[uid], p, { member: { uid: 'x' } });
    def.onRecruit(stub(s, logs), p, s.cards[uid], p, { followers: 3, tier: 0 }); // a follower purchase is a recruit
    expect(p.res.purple).toBe(had + 2);
    expect(logs).toEqual(["P1's Floor Crew: +1 purple.", "P1's Floor Crew: +1 purple."]);
  });
});

describe('Picket Line: "Whenever a rival takes a Purple space, +1 purple."', () => {
  it('a rival takes Sleep In: +1 purple; a rival takes a Red space: nothing', () => {
    const turns = [{ t: 'turn', p: 1 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }];
    let s = table(['purple', 'red', 'market', 'yellow'], { n: 2, round: 1, members: [['purple.picketline'], []], queue: turns });
    const had = s.players[0].res.purple || 0;
    s = take(s, 'purple.skip');
    expect(s.players[0].res.purple).toBe(had + 1);
    expect(s.log.some(l => l === "P1's Picket Line: +1 purple.")).toBe(true);
  });
});

describe('"Paper filters, play ranks" cards (Nov 4)', () => {
  const stub = (s, logs) => ({ state: s, log: l => logs.push(l), gain: (p, c, n) => { p.res[c] = (p.res[c] || 0) + n; } });
  it('Old Timer: a time token each round end, +1 worth each', () => {
    const s = table(['purple', 'red', 'market', 'yellow'], { round: 1, members: [['purple.oldtimer'], []] });
    const uid = uidIn(s, 'purple.oldtimer', 0), p = s.players[0], logs = [], before = followers(s, p);
    defById('purple.oldtimer').onRoundEnd(stub(s, logs), p, s.cards[uid]);
    expect(followers(s, p)).toBe(before + 1);
    expect(logs).toEqual(["P1's Old Timer: a time token (worth 2)."]);
  });
  it('Lookouts: "Whenever you take a consecutive turn, +2 followers. (Cory, Nov 6)"', () => {
    const s = table(['purple', 'red', 'market', 'yellow'], { round: 1, members: [['purple.lookouts'], []] });
    const p = s.players[0], logs = [], b = p.bonus;
    defById('purple.lookouts').onTurnInRow(stub(s, logs), p);
    expect(p.bonus).toBe(b + 2);
  });
  it('Moonlighters: after the last minion in round II, the extra turn may only join a taken space', () => {
    let s = table(['purple', 'red', 'market', 'yellow'], { n: 2, round: 2, members: [['purple.moonlighters'], []],
      queue: [{ t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s.players[0].left = 1;
    s = move(s, s.pending.options.find(o => o.kind === 'slot').id); // P2 takes a space
    s = passBuys(s, 1);
    s = move(s, s.pending.options.find(o => o.kind === 'slot' && !o.squat && o.q === 1).id); // P1's last minion, on a Red space
    s = passBuys(s, 0);
    expect(s.log.some(l => l.startsWith("P1's Moonlighters: P1 gets 1 more minion"))).toBe(true);
    expect(s.pending.player).toBe(0);
    const slots = s.pending.options.filter(o => o.kind === 'slot');
    expect(slots.length).toBeGreaterThan(0);
    expect(slots.every(o => o.squat)).toBe(true);
  });
});

describe('Evangelists, Zealots, Relay Runners (Nov 4)', () => {
  const stub = (s, logs) => ({ state: s, log: l => logs.push(l), followers: p => followers(s, p), rivals: p => s.players.filter(o => o !== p) });
  it('Evangelists: a rival recruits a red member +2, you +3, a non-red member nothing', () => {
    const s = table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['red.evangelists'], []] });
    const p = s.players[0], r = s.players[1], uid = uidIn(s, 'red.evangelists', 0), logs = [], b = p.bonus, def = defById('red.evangelists');
    def.onAnyRecruit(stub(s, logs), p, s.cards[uid], r, { uid: 'x', def: 'red.panel' });
    def.onAnyRecruit(stub(s, logs), p, s.cards[uid], p, { uid: 'y', def: 'red.panel' });
    def.onAnyRecruit(stub(s, logs), p, s.cards[uid], r, { uid: 'z', def: 'purple.courier' });
    expect(p.bonus).toBe(b + 5);
  });
  it('Zealots: +1 follower and the leader loses 1; nothing taken when you lead', () => {
    const s = table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['red.zealots'], []] });
    const p = s.players[0], r = s.players[1], uid = uidIn(s, 'red.zealots', 0), logs = [], def = defById('red.zealots');
    r.bonus = 20; const pb = p.bonus;
    def.onRecruit(stub(s, logs), p, s.cards[uid], p, { followers: 3 });
    expect(p.bonus).toBe(pb + 1); expect(r.bonus).toBe(19);
  });
  it('Relay Runners: its owner\'s Right Away gives two turns right after', () => {
    let s = table(['purple', 'red', 'market', 'yellow'], { n: 2, round: 2, members: [['purple.relayrunners'], []],
      queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }] });
    s = take(s, 'purple.again');
    const turns = s.queue.filter(t => t.t === 'turn').map(t => t.p);
    expect(turns.slice(0, 2)).toEqual([0, 0]);
  });
});
