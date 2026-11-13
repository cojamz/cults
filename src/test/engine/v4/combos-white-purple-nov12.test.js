// @vitest-environment node
// Combo tester, Cory's Nov 11 White and Purple members (design/decisions.md, 9:10pm, 9:12pm, and Claude's 9:35pm build
// notes): Leavetakers ("Whenever one of your members leaves your cult, +2 white."; any of your members, itself included:
// discard, give, steal, swap), Minimalists ("Game End: +2 followers per member you have costing 8 or more.", was 6; the cost the
// shop shows, Richer moves the 6 with the text), Last Callers ("On Use, once per round: take the Goes Last token."; as a
// Purple space takes it: all your other minions wait). Played against every way a member leaves, the costing cards and
// Purple's turn-order spaces. Harness: combos-green-nov12.test.js's scene/drive/go (the queue array is copied).
import { describe, it, expect } from 'vitest';
import { createGame, resume, followers, applyMove } from '../../../engine/v4/core.js';
import { stray } from './stray.js';
import { defById } from '../../../engine/v4/content/index.js';
import { richText } from '../../../engine/v4/content/price.js';
const names = (s, i) => s.players[i].members.map(u => defById(s.cards[u].def).name);

// queue: tasks to run instead of turns (e.g. [{ t: 'allPlaced' }] for Round End, [{ t: 'round', r: 3 }] for Round Start)
function scene({ quads, n = 2, seed = 7, round = 3, res = [], members = [], shop = [], turns = null, queue = null, left = 5, rules, prep }) {
  const s = createGame({ seats: Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed, quadrants: quads, ...(rules ? { rules } : {}) });
  Object.assign(s, { queue: [], pending: null, round, slots: {}, order: [], log: [] });
  delete s.echo;
  s.players.forEach((p, i) => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); Object.assign(p.res, res[i] || {}); p.bonus = 0; p.discount = 0; p.left = left; });
  s.pile = [...s.shop, ...s.pile]; s.shop = [];
  const grab = def => { const k = s.pile.findIndex(u => s.cards[u].def === def); if (k < 0) return stray(s, def); return s.pile.splice(k, 1)[0]; };
  members.forEach((list, i) => { for (const d of list || []) { const u = grab(d); s.players[i].members.push(u); s.cards[u].recruitedRound = 0; s.cards[u].recruitedBy = i; } });
  for (const d of shop) s.shop.push(grab(d));
  s.queue = queue ? queue.map(t => ({ ...t })) : (turns || [0, 1, 0, 1, 0, 1]).map(p => ({ t: 'turn', p }));
  if (prep) prep(s);
  return resume(s);
}
// steps: regexes on option label/id, consumed in order when one matches; a pay takes its default; anything else stops
function drive(s, steps, max = 80) {
  const trail = [];
  for (let k = 0; k < max && s.pending; k++) {
    const o = s.pending.options, want = steps[0];
    let hit = want && o.find(x => want.test(x.id) || want.test(x.label || ''));
    if (hit) steps.shift();
    else if (s.pending.kind === 'pay') hit = o.find(x => x.default) || o[0];
    else { trail.push(`STOP @${s.pending.kind} P${s.pending.player + 1}: ${s.pending.prompt} :: ${o.map(x => `${x.id}=${x.label}`).join(' | ')}`); break; }
    trail.push(`> P${s.pending.player + 1} ${s.pending.kind}: ${hit.id} (${hit.label}) @ ${s.pending.prompt}`);
    s = applyMove(s, { player: s.pending.player, option: hit.id });
  }
  return { s, trail };
}
const dump = (title, s, trail) => console.log(`\n===== ${title}\n${trail.join('\n')}\n--- log\n${s.log.join('\n')}\n--- ${s.players.map((p, i) => `${JSON.stringify(p.res)} f${followers(s, p)} b${p.bonus} m${names(s, i).join(',')} left${p.left}`).join(' / ')}`);
const has = (s, re) => s.log.some(l => re.test(l));
const DUMP = !!globalThis.process?.env?.COMBO_DUMP;
const go = (title, sc, steps) => { const r = drive(scene(sc), steps); if (DUMP) dump(title, r.s, r.trail); return r; };
const uidOf = (s, i, def) => s.players[i].members.find(u => s.cards[u].def === def);
// every log line reads as a sentence: no undefined, NaN, [object Object] or empty names
const cleanLog = s => { for (const l of s.log) expect(l).not.toMatch(/undefined|NaN|\[object|null|'s :|\(\)/); };
const lines = (s, re) => s.log.filter(l => re.test(l));
const W = ['trading', 'red', 'yellow', 'thieves'];
const P = ['purple', 'red', 'trading', 'yellow'];
const BUY = [{ t: 'buy', p: 0 }];
const END = [{ t: 'allPlaced' }, { t: 'endRound' }];
const FIN = [{ t: 'finish' }];
const T = (...ps) => [...ps.map(p => ({ t: 'turn', p })), { t: 'allPlaced' }];
const turnsLine = s => s.queue.filter(t => t.t === 'turn').map(t => `${t.p}${t.token ? 'T' : ''}`).join(' ');
const leave = (s, i) => lines(s, new RegExp(`^P${i + 1}'s Leavetakers: `));

describe('Leavetakers: "Whenever one of your members leaves your cult, +2 white."', () => {
  it('Farewell discards one of your members: +2 white (with Farewell\'s +1)', () => {
    const { s } = go('lt-farewell', { quads: W, turns: [0], members: [['trading.leavetakers', 'red.intern']] }, [/Farewell/, /Intern/]);
    expect(s.players[0].res.white).toBe(3);
    expect(leave(s, 0)).toEqual(["P1's Leavetakers: Intern left: +2 white."]);
    cleanLog(s);
  });

  it('Downsizers discards Leavetakers itself: it pays for its own leaving (+2, with Downsizers\' +4)', () => {
    const { s } = go('lt-self', { quads: W, queue: BUY, members: [['trading.leavetakers', 'trading.moneylender', 'red.intern']] }, [/Downsizers/, /Leavetakers/]);
    expect(names(s, 0)).toEqual(['Downsizers', 'Intern']);
    expect(s.players[0].res.white).toBe(6);
    expect(leave(s, 0)).toEqual(["P1's Leavetakers: Leavetakers left: +2 white."]);
  });

  it('Appraiser discards a member: +2 white besides its cost in followers', () => {
    const { s } = go('lt-appraiser', { quads: W, queue: BUY, members: [['trading.leavetakers', 'trading.appraiser', 'red.intern']] }, [/Appraiser/, /Intern/, /followers/]);
    expect(s.players[0].res.white).toBe(2);
    expect(s.players[0].bonus).toBe(4);
    expect(leave(s, 0)).toEqual(["P1's Leavetakers: Intern left: +2 white."]);
  });

  it('Release (table setting on): a released member pays +2 white besides its refund', () => {
    const { s } = go('lt-release', { quads: W, queue: BUY, rules: { release: true }, members: [['trading.leavetakers', 'red.intern']] }, [/Release Intern/]);
    expect(s.players[0].res).toMatchObject({ white: 2, red: 2 });
    expect(leave(s, 0)).toEqual(["P1's Leavetakers: Intern left: +2 white."]);
  });

  it('Write-Off gives a member to a rival: +2 white (with Write-Off\'s 4 + 1); the rival who gets it gets no white', () => {
    const { s } = go('lt-writeoff', { quads: W, turns: [0], members: [['trading.leavetakers', 'red.intern'], []] }, [/Write-Off/, /Intern/, /player:1/]);
    expect(s.players.map(p => p.res.white)).toEqual([7, 0]);
    expect(names(s, 1)).toEqual(['Intern']);
    cleanLog(s);
  });

  it('Borrow\'s member goes back to the shop at round end: that leaving pays +2 white', () => {
    const { s } = go('lt-borrow', { quads: W, queue: [{ t: 'turn', p: 0 }, ...END], shop: ['red.volunteer', 'trading.recluse'], members: [['trading.leavetakers'], []] },
      [/Borrow/, /^pass$/]);
    expect(s.log).toContain("P1's Volunteer was on loan from Borrow: back to the shop at round end.");
    expect(leave(s, 0)).toEqual(["P1's Leavetakers: Volunteer left: +2 white."]);
    expect(names(s, 0)).toEqual(['Leavetakers']);
    expect(s.players[0].res.white).toBe(2);
  });

  it('Poach steals one of your members: +2 white to you, nothing to the thief', () => {
    const { s } = go('lt-poach', { quads: W, turns: [1], members: [['trading.leavetakers', 'red.intern'], []] }, [/Poach/, /Intern/]);
    expect(s.players.map(p => p.res.white)).toEqual([2, 0]);
    expect(leave(s, 0)).toEqual(["P1's Leavetakers: Intern left: +2 white."]);
  });

  it('Poach steals Leavetakers itself: its old owner +2; its new owner gets nothing (it arrived, nothing left)', () => {
    const { s } = go('lt-poach-self', { quads: W, turns: [1], members: [['trading.leavetakers', 'red.intern'], []] }, [/Poach/, /Leavetakers/]);
    expect(s.players.map(p => p.res.white)).toEqual([2, 0]);
    expect(names(s, 1)).toEqual(['Leavetakers']);
  });

  it('your Leavetakers ignores a rival\'s member leaving: you Poach theirs, no white', () => {
    const { s } = go('lt-rival', { quads: W, turns: [0], members: [['trading.leavetakers'], ['red.intern']] }, [/Poach/, /Intern/]);
    expect(s.players.map(p => p.res.white)).toEqual([0, 0]);
    expect(leave(s, 0)).toEqual([]);
  });

  it('Swindle takes one of yours and gives you a shop member: +2 once; the member arriving pays nothing', () => {
    const { s } = go('lt-swindle', { quads: W, turns: [1], shop: ['red.volunteer'], members: [['trading.leavetakers', 'red.intern'], []] }, [/Swindle/, /Intern/, /Volunteer/]);
    expect(names(s, 0)).toEqual(['Leavetakers', 'Volunteer']);
    expect(s.players[0].res.white).toBe(2);
    expect(leave(s, 0)).toHaveLength(1);
  });

  it('Exchange Students swaps your Raiders for a rival\'s Last Callers: one leaves, one arrives, +2 once', () => {
    const { s } = go('lt-exchange', { quads: W, queue: BUY, shop: ['yellow.exchangestudents'], members: [['trading.leavetakers', 'trading.raider'], ['purple.lastcallers']], res: [{ yellow: 9, red: 9 }] },
      [/Exchange Students/, /Raiders ↔ P2: Last Callers/]);
    expect(names(s, 0)).toEqual(['Leavetakers', 'Exchange Students', 'Last Callers']);
    expect(s.players[0].res.white).toBe(2);
    expect(leave(s, 0)).toEqual(["P1's Leavetakers: Raiders left: +2 white."]);
    cleanLog(s);
  });

  it('Exchange Students swaps Leavetakers itself away: +2 to you; the rival who swaps it in gets nothing for their Raiders leaving', () => {
    const { s } = go('lt-exchange-self', { quads: W, queue: BUY, shop: ['yellow.exchangestudents'], members: [['trading.leavetakers', 'red.panel'], ['trading.raider']], res: [{ yellow: 9, red: 9 }] },
      [/Exchange Students/, /Leavetakers ↔ P2: Raiders/]);
    expect(names(s, 1)).toEqual(['Leavetakers']);
    expect(s.players.map(p => p.res.white)).toEqual([2, 0]);
    expect(leave(s, 1)).toEqual([]);
  });

  it('Double Agent swaps itself for a rival\'s Intern: the rival\'s Leavetakers pays +2', () => {
    const { s } = go('lt-doubleagent', { quads: W, queue: BUY, shop: ['thieves.doubleagent'], members: [[], ['trading.leavetakers', 'red.intern']], res: [{ magenta: 20 }] },
      [/Double Agent/, /Intern/]);
    expect(names(s, 0)).toEqual(['Intern']);
    expect(names(s, 1)).toEqual(['Leavetakers', 'Double Agent']);
    expect(s.players[1].res.white).toBe(2);
    expect(leave(s, 1)).toEqual(["P2's Leavetakers: Intern left: +2 white."]);
    cleanLog(s);
  });

  it('Body Snatchers (Round Start) swaps with your member: +2 white', () => {
    const { s } = go('lt-bodysnatchers', { quads: W, queue: [{ t: 'round', r: 3 }], members: [['red.bodysnatchers'], ['trading.leavetakers', 'red.intern']] }, [/Intern/]);
    expect(names(s, 1)).toEqual(['Leavetakers', 'Body Snatchers']);
    expect(s.players[1].res.white).toBe(2);
    expect(leave(s, 1)).toEqual(["P2's Leavetakers: Intern left: +2 white."]);
  });

  it('Promote swaps your member for a shop member: +2 white', () => {
    const { s } = go('lt-promote', { quads: W, turns: [0], shop: ['trading.recluse'], members: [['trading.leavetakers', 'red.intern']] }, [/Promote/, /Intern ↔ Shop: Recluse/]);
    expect(names(s, 0)).toEqual(['Leavetakers', 'Recluse']);
    expect(s.players[0].res.white).toBe(2);
  });

  it('Kidnappers (Round End): the member you give pays +2 white', () => {
    const { s } = go('lt-kidnappers', { quads: W, queue: END, members: [['thieves.kidnappers'], ['trading.leavetakers', 'red.intern']] }, [/Intern/]);
    expect(names(s, 0)).toEqual(['Kidnappers', 'Intern']);
    expect(leave(s, 1)).toEqual(["P2's Leavetakers: Intern left: +2 white."]);
    expect(s.players[1].res.white).toBe(2);
  });

  it('3 players, two Kidnappers both pick you at Round End: two members leave, +2 each (+4)', () => {
    const { s } = go('lt-kidnappers-3p', { quads: W, n: 3, queue: END, members: [['thieves.kidnappers'], ['thieves.kidnappers'], ['trading.leavetakers', 'red.intern', 'red.volunteer']] },
      [/player:2/, /Intern/, /player:2/, /Volunteer/]);
    expect(names(s, 2)).toEqual(['Leavetakers']);
    expect(s.players[2].res.white).toBe(4);
    expect(leave(s, 2)).toEqual(["P3's Leavetakers: Intern left: +2 white.", "P3's Leavetakers: Volunteer left: +2 white."]);
    cleanLog(s);
  });

  it('Doppelganger copying Leavetakers: each copy pays, +4 for one member leaving', () => {
    const { s } = go('lt-doppel', { quads: W, turns: [0], members: [['trading.leavetakers', 'echo.doppel', 'red.intern']],
      prep: st => { st.cards[uidOf(st, 0, 'echo.doppel')].copy = 'trading.leavetakers'; } }, [/Farewell/, /Intern/]);
    expect(s.players[0].res.white).toBe(5);
    expect(leave(s, 0)).toHaveLength(2);
  });

  it('the Doppelganger copying Leavetakers leaves itself: both pay as it goes (+4)', () => {
    const { s } = go('lt-doppel-self', { quads: W, turns: [0], members: [['trading.leavetakers', 'echo.doppel']],
      prep: st => { st.cards[uidOf(st, 0, 'echo.doppel')].copy = 'trading.leavetakers'; } }, [/Farewell/, /Doppelganger/]);
    expect(names(s, 0)).toEqual(['Leavetakers']);
    expect(s.players[0].res.white).toBe(5);
    expect(leave(s, 0)).toEqual(["P1's Leavetakers: Doppelganger left: +2 white.", "P1's Leavetakers: Doppelganger left: +2 white."]);
  });
});

describe('Minimalists: "Game End: +2 followers per member you have costing 8 or more." (Cory, Nov 11 11:53pm; was 6)', () => {
  const part = (s, i) => s.players[i].final.parts.filter(x => /Minimalists/.test(x));
  // costs as the shop shows them: Minimalists 8, Downsizers 6, Recluse 6, Seat Filler 5, Intern 4
  const SET = ['trading.minimalists', 'trading.moneylender', 'trading.recluse', 'red.seatfiller', 'red.intern'];
  it('counts itself (8); not 6, 5 or 4: +2', () => {
    const { s } = go('mm-base', { quads: W, queue: FIN, members: [SET, ['red.mob']] }, []);
    expect(part(s, 0)).toEqual(['Minimalists +2']);
    expect(part(s, 1)).toEqual([]);
  });

  it('Richer: every cost and the 8 move up 2 together (text reads 10), same members count: +2', () => {
    const { s } = go('mm-rich', { quads: W, queue: FIN, rules: { econ: 'rich' }, members: [SET] }, []);
    expect(richText(s, defById('trading.minimalists').text)).toBe('Game End: +2 followers per member you have costing 10 or more.');
    expect(part(s, 0)).toEqual(['Minimalists +2']);
  });

  it('4 players: each owner counts only their own members', () => {
    const { s } = go('mm-4p', { quads: W, n: 4, queue: FIN,
      members: [['trading.minimalists'], ['trading.minimalists', 'red.mob', 'red.panel'], ['red.mob'], ['trading.minimalists', 'red.intern']] }, []);
    expect([0, 1, 2, 3].map(i => part(s, i))).toEqual([['Minimalists +2'], ['Minimalists +6'], [], ['Minimalists +2']]);
  });

  // Settled (Cory, Nov 12): Mob was rebased to worth 1 and 1 member, so it is one member here and everywhere;
  // Minimalists pays +2 for it.
  it('Mob (worth 4, cost 14) counts as one member here: Minimalists + Mob = +4', () => {
    const { s } = go('mm-mob', { quads: W, queue: FIN, members: [['trading.minimalists', 'red.mob']] }, []);
    expect(part(s, 0)).toEqual(['Minimalists +4']);
  });

  it('Doppelganger copying Minimalists: each card pays, and each counts the other (+4 and +4)', () => {
    const { s } = go('mm-doppel', { quads: W, queue: FIN, members: [['trading.minimalists', 'echo.doppel', 'red.intern']],
      prep: st => { st.cards[uidOf(st, 0, 'echo.doppel')].copy = 'trading.minimalists'; } }, []);
    expect(part(s, 0)).toEqual(['Minimalists +4', 'Minimalists +4']);
  });

  it('Double Agent (swaps for a rival\'s member costing up to 8) cannot reach Minimalists at cost 10 (Cory, Nov 12)', () => {
    const { s } = go('mm-doubleagent', { quads: W, queue: [...BUY, ...FIN], shop: ['thieves.doubleagent'], members: [[], ['trading.minimalists', 'trading.leavetakers']], res: [{ magenta: 20 }] },
      [/Double Agent/]);
    const labels = (s.pending?.options || []).map(o => o.label || '').join(' | ');
    expect(labels).not.toMatch(/Minimalists/);
    expect(names(s, 1)).toContain('Minimalists');
  });
});

describe('Last Callers: "On Use, once per round: take the Goes Last token."', () => {
  const lc = s => s.players[0].members.find(u => s.cards[u].def === 'purple.lastcallers');
  const useOpt = (s, uid) => (s.pending?.options || []).some(o => o.id === `use:${uid}`);
  it('2 players, round II, nobody holds it: you take it and your other 2 minions wait on it', () => {
    const { s } = go('lc-take', { quads: P, round: 2, left: 3, queue: T(0, 1, 0, 1, 0, 1), members: [['purple.lastcallers']] }, [/Gather/, /Last Callers/]);
    expect(s.goesLast).toEqual({ round: 2, pid: 0 });
    expect(turnsLine(s)).toBe('1 1 1 0T 0T');
    expect(lines(s, /Last Callers/)).toEqual(["P1's Last Callers: P1 takes the Goes Last token.", "P1's Last Callers: 2 minions wait on the Goes Last token."]);
    cleanLog(s);
  });

  it('4 players: takes it from P3 after Sleep In, and P3\'s 2 waiting minions go back to P3', () => {
    const { s } = go('lc-4p', { quads: P, n: 4, round: 2, left: 3, queue: T(2, 0, 1, 3, 3, 1, 0, 2, 2, 0, 1, 3), members: [['purple.lastcallers'], [], [], []] },
      [/Sleep In/, /^pass$/, /Gather/, /Last Callers/]);
    expect(s.goesLast).toEqual({ round: 2, pid: 0 });
    expect(s.log).toContain("P1's Last Callers: P1 takes the Goes Last token from P3, and the 2 minions on it go back to P3.");
    expect(s.log).toContain("P1's Last Callers: 2 minions wait on the Goes Last token.");
    expect(s.queue.filter(t => t.t === 'turn' && t.p === 2).some(t => t.token)).toBe(false);
    cleanLog(s);
  });

  it('once per round: not offered again that round; Round Start makes it usable again', () => {
    let { s } = go('lc-once', { quads: P, round: 2, left: 3, queue: T(0, 1, 0, 1, 0, 1), members: [['purple.lastcallers']] },
      [/Gather/, /Last Callers/, /^pass$/, /Borrow/, /^pass$/, /Late Shift/, /^pass$/, /Nest Egg/, /^pass$/, /Sleep In/]);
    expect(s.pending.kind).toBe('buy');
    expect(s.pending.player).toBe(0);
    expect(useOpt(s, lc(s))).toBe(false);
    s = go('lc-once-r3', { quads: P, round: 2, left: 3, queue: [{ t: 'round', r: 3 }, ...T(0)], members: [['purple.lastcallers']],
      prep: st => { st.cards[st.players[0].members[0]].used = true; } }, [/^slot:/]).s;
    expect(s.pending.kind).toBe('buy');
    expect(useOpt(s, lc(s))).toBe(true);
  });

  it('you already hold it (Sleep In): you keep it, and no minion is added', () => {
    const { s } = go('lc-keep', { quads: P, round: 2, left: 3, queue: T(0, 1, 0, 1, 0, 1), members: [['purple.lastcallers']] }, [/Sleep In/, /Last Callers/]);
    expect(s.log).toContain("P1's Last Callers: P1 keeps the Goes Last token.");
    expect(lines(s, /wait on the Goes Last token/)).toEqual(["P1's Sleep In: 2 minions wait on the Goes Last token."]);
  });

  it('after your last minion, a rival holding it with a minion on it: you still take it, their minion goes back (fixed Nov 12)', () => {
    const { s } = go('lc-lastminion', { quads: P, round: 2, left: 2, queue: T(1, 0, 0, 1), members: [['purple.lastcallers'], []] },
      [/Sleep In/, /^pass$/, /Gather/, /^pass$/, /Borrow/, /Last Callers/]);
    expect(s.goesLast).toEqual({ round: 2, pid: 0 });
    expect(s.log).toContain("P1's Last Callers: P1 takes the Goes Last token from P2, and the minion on it goes back to P2.");
  });

  it('Crunch Time pulls your next 2 turns up, then Last Callers: those 2 minions wait on the token instead', () => {
    const { s } = go('lc-crunch', { quads: P, round: 2, left: 3, queue: T(0, 1, 0, 1, 0, 1), members: [['purple.lastcallers']] }, [/Crunch Time/, /Last Callers/]);
    expect(s.log).toContain("P1's Crunch Time: P1 takes their next 2 turns now.");
    expect(turnsLine(s)).toBe('1 1 1 0T 0T');
  });

  it('Right Away, then Last Callers: the turn Right Away pulled up waits on the token too', () => {
    const { s } = go('lc-rightaway', { quads: P, round: 2, left: 3, queue: T(0, 1, 0, 1, 0, 1), members: [['purple.lastcallers']] }, [/Right Away/, /Last Callers/]);
    expect(turnsLine(s)).toBe('1 1 1 0T 0T');
  });

  it('a rival\'s Sleep In takes it back: your waiting minions go back to your hand', () => {
    const { s } = go('lc-takenback', { quads: P, round: 2, left: 3, queue: T(0, 1, 0, 1, 0, 1), members: [['purple.lastcallers']] }, [/Gather/, /Last Callers/, /^pass$/, /Sleep In/]);
    expect(s.goesLast).toEqual({ round: 2, pid: 1 });
    expect(s.log).toContain("P2's Sleep In: P2 takes the Goes Last token from P1, and the 2 minions on it go back to P1.");
  });

  it('used, then swapped to a rival by Exchange Students: once per round is once for the card; usable again next round', () => {
    let { s } = go('lc-swapped', { quads: P, round: 2, queue: [{ t: 'buy', p: 1 }], shop: ['yellow.exchangestudents'], members: [['purple.lastcallers'], ['trading.raider']],
      res: [{}, { yellow: 9, red: 9 }], prep: st => { st.cards[st.players[0].members[0]].used = true; } }, [/Exchange Students/, /Raiders ↔ P1: Last Callers/]);
    const uid = s.players[1].members.find(u => s.cards[u].def === 'purple.lastcallers');
    expect(uid).toBeDefined();
    expect(useOpt(s, uid)).toBe(false);
    expect(s.cards[uid].used).toBe(true);
    // next round, its new holder's turn: offered
    s = Object.assign(structuredClone(s), { pending: null, queue: [{ t: 'round', r: 3 }, { t: 'turn', p: 1 }] });
    s.players.forEach(p => { p.left = 5; });
    s = drive(resume(s), [/^slot:/]).s;
    expect(s.pending.player).toBe(1);
    expect(useOpt(s, uid)).toBe(true);
  });

  it('Early Birds ("Your turns can\'t be skipped."): you don\'t go last, the token stays put', () => {
    const { s } = go('lc-early', { quads: P, round: 2, left: 3, queue: T(0, 1, 0, 1, 0, 1), members: [['purple.lastcallers', 'purple.earlybird']] }, [/Gather/, /Last Callers/]);
    expect(s.goesLast ?? null).toBe(null);
    expect(s.log).toContain("P1's Early Birds: P1's turns can't be skipped, so P1 doesn't go last.");
  });
});

// Cory, Nov 12: "when you give somebody a loaned card, it should stay loaned and go back at end of the round",
// "it goes back to the shop". Borrow's member given away with Demote stays on loan in the rival's cult and goes back
// to the shop at round end, before scoring (its Round End doesn't pay the rival).
describe('a loaned member given away stays on loan', () => {
  const R = ['red', 'trading', 'yellow', 'thieves'];
  it('Borrow Recluse, Demote it to a rival for their Volunteer: Recluse goes back to the shop at round end', () => {
    const { s, trail } = go('loan-given', { quads: R, round: 2, queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }, ...END], shop: ['trading.recluse'], members: [[], ['red.volunteer']] },
      [/Borrow/, /^pass$/, /Demote/, /Recluse.*Volunteer|Volunteer.*Recluse/, /^pass$/]);
    expect(trail.join('\n')).not.toMatch(/STOP/);
    expect(s.log).toContain("P2's Recluse was on loan from Borrow: back to the shop at round end.");
    expect(names(s, 0)).toEqual(['Volunteer']);
    expect(names(s, 1)).toEqual([]);
    expect(s.shop.map(u => s.cards[u].def)).toContain('trading.recluse');
    expect(lines(s, /Recluse: \+/)).toEqual([]);
    expect(s.borrowed).toBeUndefined();
    cleanLog(s);
  });
  it('a loaned member swapped into the shop is no longer on loan; the member taken for it is kept', () => {
    const { s, trail } = go('loan-to-shop', { quads: R, round: 2, queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }, ...END], shop: ['trading.recluse'], members: [[], []] },
      [/Borrow/, /^pass$/, /Demote/, /Recluse.*Intern/, /^pass$/]);
    expect(trail.join('\n')).not.toMatch(/STOP/);
    expect(names(s, 0)).toEqual(['Intern']);
    expect(has(s, /on loan from Borrow/)).toBe(false);
    expect(s.borrowed).toBeUndefined();
  });
});
