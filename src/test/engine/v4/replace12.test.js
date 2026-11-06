// @vitest-environment node
// Card quality loop, lane D2 (Nov 4; /mnt/project-files/quality/pitches/D2-batch1.md), the REPLACE12 bot-test switch:
// one test per sentence of each new card's text, plus the turn from its pitch. The switch is read when the engine
// loads, so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE12 = 'exitcounselor,foundling,pawnshop,lowprofile,pocketmoney,tagalong,dumpsterdive,delivery';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { take } = await import('./helpers.js');
const { table, named, uidIn, owns } = await import('./cards-helpers-b.js');
delete process.env.REPLACE12;
delete process.env.MEMBER_UP;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE12: the switch', () => {
  it('prints the pitched prices (as a player sees them) and retires Deprogrammers', () => {
    const card = id => { const d = defById(id); return [d.name, d.s, d.w, d.f, d.n]; };
    expect(card('red.exitcounselor')).toEqual(['Exit Counselor', 3, 2, 1, 1]);
    expect(card('red.foundling')).toEqual(['Foundling', 2, 2, 1, 1]);
    expect(defById('red.movementpenalty').retired).toBe(true);
  });
});

describe('Exit Counselor: "Whenever you give one of your members away, use its On Recruit."', () => {
  it("the pitched turn: Demote gives Mentor to a rival, and its On Recruit (the cheapest shop member, free) is yours", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.exitcounselor', 'red.mentor'], ['red.panel']],
      shop: ['red.volunteer', 'red.loyalists'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.trade'); // Demote
    s = answer(s, `trade:${uidIn(s, 'red.mentor', 0)}:${uidIn(s, 'red.panel', 1)}`);
    expect(owns(s, 1, 'red.mentor')).toBe(true);
    expect(owns(s, 0, 'red.panel')).toBe(true);
    expect(owns(s, 0, 'red.volunteer')).toBe(true); // Mentor's cheapest shop member, for P1
    expect(named(s, 'Exit Counselor').join(' ')).toContain('Mentor leaves, and P1 uses its On Recruit.');
  });

  it("a member a rival takes from you doesn't count (you didn't give it)", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.panel'], ['red.exitcounselor', 'red.mentor']],
      shop: ['red.volunteer'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.hireup'); // P1 promotes: gives Panel (7), takes P2's Mentor (9)
    s = answer(s, `trade:${uidIn(s, 'red.panel', 0)}:${uidIn(s, 'red.mentor', 1)}`);
    expect(owns(s, 0, 'red.mentor')).toBe(true);
    expect(named(s, 'Exit Counselor')).toEqual([]);
    expect(owns(s, 1, 'red.volunteer')).toBe(false);
  });
});

describe('Exit Counselor: a member cast out to the pile is given to nobody', () => {
  it('Estate Sale casts out Mentor: no On Recruit', () => {
    let s = table(['trading', 'red', 'market', 'yellow'], { round: 2, members: [['red.exitcounselor', 'red.mentor'], []], shop: ['red.volunteer'] });
    s = take(s, 'trading.estatesale');
    if (s.pending?.options?.some(o => String(o.id).includes(String(uidIn(s, 'red.mentor', 0))))) s = answer(s, s.pending.options.find(o => String(o.id).includes(String(uidIn(s, 'red.mentor', 0)))).id);
    expect(owns(s, 0, 'red.mentor')).toBe(false);
    expect(owns(s, 0, 'red.volunteer')).toBe(false);
    expect(named(s, 'Exit Counselor')).toEqual([]);
  });
});

describe('Foundling: "Round Start: if you have the fewest members (ties count), recruit the top member of the pile for free."', () => {
  it('fewest members at Round Start: the top member of the pile joins, free', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 1, members: [['red.foundling'], ['red.loyalists', 'red.volunteer']],
      queue: [{ t: 'round', r: 2 }] });
    expect(s.players[0].members.length).toBeGreaterThanOrEqual(2); // (the free card's own On Recruit may bring more)
    expect(s.log.join(' ')).toMatch(/P1 recruited .* from the top of the deck \(free\)/);
    expect(named(s, 'Foundling').join(' ')).toContain('P1 has the fewest members, so the top member of the pile joins free.');
  });

  it('ties count', () => {
    const s = table(['red', 'market', 'trading', 'yellow'], { round: 1, members: [['red.foundling'], ['red.volunteer']], queue: [{ t: 'round', r: 2 }] });
    expect(named(s, 'Foundling').length).toBe(1);
  });

  it('a rival with fewer members: nothing (members counted as the table counts them)', () => {
    const s = table(['red', 'market', 'trading', 'yellow'], { round: 1, members: [['red.foundling', 'red.volunteer'], ['red.loyalists']], queue: [{ t: 'round', r: 2 }] });
    // Loyalists counts as 2, so P2 has 2 and P1 has 2: a tie, it fires; with Foster Parents (counts 2) P1 has 3
    expect(named(s, 'Foundling').length).toBe(1);
    const t = table(['red', 'market', 'trading', 'yellow'], { round: 1, members: [['red.foundling', 'red.fosterparents'], ['red.volunteer']], queue: [{ t: 'round', r: 2 }] });
    expect(t.players[0].members.length).toBe(2);
    expect(named(t, 'Foundling')).toEqual([]);
  });
});

const opt = (s, pred) => s.pending.options.find(pred).id;

describe('Pawnshop: "Turn up to 1 of your followers (2 in round II, 3 in round III) into 2 white each. +1 white."', () => {
  it('round II, the pitched turn: 2 followers become 4 white, then +1 white', () => {
    let s = table(['trading', 'red', 'market', 'yellow'], { round: 2, bonus: [8, 6] });
    s = take(s, 'trading.pawnshop');
    expect(s.pending.options.map(o => o.id)).toEqual(['n:2', 'n:1', 'n:0']);
    s = answer(s, 'n:2');
    expect(s.players[0].bonus).toBe(6);
    expect(s.players[0].res.white).toBe(5);
    expect(named(s, 'Pawnshop').join(' ')).toContain('2 followers turned into 4 white.');
  });
  it("only followers you recruited or won (a member's printed followers stay), and none: just the +1 white", () => {
    let s = table(['trading', 'red', 'market', 'yellow'], { round: 3, bonus: [1, 0] });
    s = take(s, 'trading.pawnshop');
    expect(s.pending.options.map(o => o.id)).toEqual(['n:1', 'n:0']);
    let t = table(['trading', 'red', 'market', 'yellow'], { round: 3, bonus: [0, 0] });
    t = take(t, 'trading.pawnshop');
    expect(t.players[0].res.white).toBe(1);
  });
});

describe('Low Profile: "+2 white in round I, +3 in round II, +4 in round III, doubled if you have the fewest followers (ties count)."', () => {
  it('round II, the fewest followers: +6', () => {
    const s = take(table(['trading', 'red', 'market', 'yellow'], { round: 2, bonus: [2, 5] }), 'trading.lowprofile');
    expect(s.players[0].res.white).toBe(6);
  });
  it('ties count; more followers than a rival: +3', () => {
    expect(take(table(['trading', 'red', 'market', 'yellow'], { round: 2, bonus: [3, 3] }), 'trading.lowprofile').players[0].res.white).toBe(6);
    expect(take(table(['trading', 'red', 'market', 'yellow'], { round: 2, bonus: [5, 3] }), 'trading.lowprofile').players[0].res.white).toBe(3);
  });
});

describe('Pocket Money: "+1 white per rival with more followers than you in round I, +2 per rival in round II, +3 in round III. +1 white."', () => {
  it('round II, two of three rivals ahead: +4, then +1', () => {
    const s = take(table(['trading', 'red', 'market', 'yellow'], { n: 4, round: 2, bonus: [3, 6, 5, 1] }), 'trading.pocketmoney');
    expect(s.players[0].res.white).toBe(5);
  });
  it('the leader: just the +1 white; a tie is not more', () => {
    expect(take(table(['trading', 'red', 'market', 'yellow'], { round: 3, bonus: [6, 6] }), 'trading.pocketmoney').players[0].res.white).toBe(1);
  });
});

describe('Tag Along: "Choose a rival: +1 of each color they have a minion on. +1 yellow."', () => {
  it("round I: Ben has minions on Red and Blue: +1 red, +1 blue, +1 yellow", () => {
    let s = table(['yellow', 'red', 'market', 'trading'], { round: 1 });
    s.slots = { '1-0': 1, '2-1': 1, '1-1': 1 };
    s = take(s, 'yellow.tagalong');
    s = answer(s, 'player:1');
    expect(s.players[0].res).toMatchObject({ red: 1, blue: 1, yellow: 1, white: 0 });
    expect(named(s, 'Tag Along').join(' ')).toContain('follows P2, +1 of each color they have a minion on (red, blue).');
  });
  it('a rival with no minions down yet: just the yellow', () => {
    let s = take(table(['yellow', 'red', 'market', 'trading'], { round: 1 }), 'yellow.tagalong');
    s = answer(s, 'player:1');
    expect(s.players[0].res.yellow).toBe(1);
    expect(s.players[0].res.red).toBe(0);
  });
});

describe('Dumpster Dive: "Look at the bottom 3 members of the pile and recruit one of them for free, costing up to 5. +1 blue."', () => {
  it('recruits one of the bottom 3 for free; dearer than 5 or higher up the pile is not offered; the turn still recruits', () => {
    let s = table(['market', 'red', 'trading', 'yellow'], { round: 2 });
    const pull = d => { const k = s.pile.findIndex(u => s.cards[u].def === d); return s.pile.splice(k, 1)[0]; };
    const deep = pull('red.loyalists'), cheap = pull('red.volunteer'), dear = pull('red.mentor'), mid = pull('red.fosterparents');
    s.pile.push(deep, cheap, dear, mid); // bottom 3: Volunteer (1), Mentor (9), Foster Parents (4)
    s = take(s, 'market.dumpsterdive');
    const offered = s.pending.options.map(o => o.label);
    expect(offered.some(l => l.startsWith('Volunteer'))).toBe(true);
    expect(offered.some(l => l.startsWith('Foster Parents'))).toBe(true);
    expect(offered.some(l => l.startsWith('Mentor'))).toBe(false);
    expect(offered.some(l => l.startsWith('Loyalists'))).toBe(false);
    const res = { ...s.players[0].res };
    s = answer(s, `card:${mid}`);
    expect(owns(s, 0, 'red.fosterparents')).toBe(true);
    expect(s.players[0].res).toEqual(res); // free
    expect(s.pending.player).toBe(0); // the turn's own recruit is still to come
    expect(s.pending.kind).toBe('buy');
  });
});

describe('Delivery: "Give a shop member to a rival; gain blue equal to its cost. +1 blue."', () => {
  it("gives the chosen shop member to the chosen rival (their arrival, not a recruit) and pays its cost in blue", () => {
    let s = table(['market', 'red', 'trading', 'yellow'], { round: 2, shop: ['red.fosterparents', 'red.volunteer'] });
    s = take(s, 'market.delivery');
    s = answer(s, opt(s, o => o.label.startsWith('Foster Parents')));
    s = answer(s, 'player:1');
    expect(owns(s, 1, 'red.fosterparents')).toBe(true);
    expect(s.players[0].res.blue).toBe(7); // Foster Parents costs 6 since Cory's Nov 6 raise
    expect(named(s, 'Delivery').join(' ')).toContain("Foster Parents goes to P2's cult; P1 +6 blue.");
  });
});
