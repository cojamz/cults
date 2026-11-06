// @vitest-environment node
// Card quality loop, lane D2 (Nov 4): Common Ground in Leaders' Tax's place (REPLACE12=commonground) and the Deprogrammers
// reword (deprog2), requalified on paper. Their own file: each shares a slot with a card in replace12b. Set before the engine loads, then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE12 = 'commonground,deprog2,snobsround,pawnbrokers';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { applyMove, resume } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { take, move } = await import('./helpers.js');
const { table, named, uidIn } = await import('./cards-helpers-b.js');
const { quadrant } = await import('../../../engine/v4/content/index.js');
delete process.env.REPLACE12;
delete process.env.MEMBER_UP;

describe('Common Ground: "+1 of each color where both you and a rival have a minion. +1 yellow."', () => {
  it("Leaders' Tax is off the wheel while it is on", () => {
    const keys = quadrant('yellow').actions.map(a => a.key);
    expect(keys).toContain('commonground');
    expect(keys).not.toContain('transmute');
  });
  it('you and P2 both on Red, only P2 on Blue: +1 red and the yellow', () => {
    let s = table(['yellow', 'red', 'market', 'trading'], { round: 1 });
    s.slots = { '1-0': 0, '1-1': 1, '2-0': 1 };
    s = take(s, 'yellow.commonground');
    expect(s.players[0].res).toMatchObject({ red: 1, blue: 0, yellow: 1 });
    expect(named(s, 'Common Ground').join(' ')).toContain('(red)');
  });
  it('a rival on yellow too: yellow counts (your minion is on Common Ground)', () => {
    let s = table(['yellow', 'red', 'market', 'trading'], { round: 1 });
    s.slots = { '0-5': 1 };
    s = take(s, 'yellow.commonground');
    expect(s.players[0].res.yellow).toBe(2);
  });
});

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('Deprogrammers, reworded: "Whenever a member joins your cult from a rival’s, steal 1 follower from that rival."', () => {
  it('stays on (reworded), not retired', () => {
    expect(defById('red.movementpenalty').retired).toBeUndefined();
    expect(defById('red.movementpenalty').text).toBe('Whenever a member joins your cult from a rival’s, steal 1 follower from that rival.');
  });
  it('your Promote takes a rival member: 1 follower moves from them to you', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.movementpenalty', 'red.panel'], ['red.mentor']],
      bonus: [0, 3], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.hireup');
    s = answer(s, `trade:${uidIn(s, 'red.panel', 0)}:${uidIn(s, 'red.mentor', 1)}`);
    expect(s.players[0].bonus).toBe(1);
    expect(s.players[1].bonus).toBe(2);
    expect(named(s, 'Deprogrammers').join(' ')).toContain('Mentor joins from P2\'s cult, so P1 steals 1 follower from P2.');
  });
  it("a rival's Demote hands you their member: it joins from their cult, so you steal 1 too", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.mentor'], ['red.movementpenalty', 'red.panel']],
      bonus: [3, 0], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.trade'); // P1 demotes: Mentor to P2, Panel to P1
    s = answer(s, `trade:${uidIn(s, 'red.mentor', 0)}:${uidIn(s, 'red.panel', 1)}`);
    expect(s.players[1].bonus).toBe(1);
    expect(s.players[0].bonus).toBe(2);
  });
});


describe('Snobs, every round: "Round End: +1 follower per blue member you have."', () => {
  it('Snobs (counts as 2) and Regular at Round End: +3 followers', () => {
    let s = table(['market', 'red', 'yellow', 'trading'], { round: 1, members: [['market.snob', 'market.regular', 'red.volunteer']] });
    s.queue = [{ t: 'endRound' }]; s = resume(s);
    expect(named(s, 'Snobs').join(' ')).toContain('3 blue members, +3 followers.');
  });
});

describe('Pawnbrokers: "On Use, once per game: turn up to 5 of your followers into 2 white each."', () => {
  const sc = bonus => table(['trading', 'red', 'market', 'yellow'], { round: 2, bonus: [bonus, 0], members: [['trading.pawnbrokers']], queue: [{ t: 'buy', p: 0 }] });
  it("takes Raiders' place; with 7 followers it offers 1 to 5, and 4 turns into 8 white", () => {
    expect(defById('trading.raider').retired).toBe(true);
    let s = move(sc(7), `use:${uidIn(sc(7), 'trading.pawnbrokers', 0)}`);
    expect(s.pending.options.map(o => o.id)).toEqual(['n:5', 'n:4', 'n:3', 'n:2', 'n:1']);
    s = move(s, 'n:4');
    expect(s.players[0].bonus).toBe(3);
    expect(s.players[0].res.white).toBe(8);
    expect(named(s, 'Pawnbrokers').join(' ')).toContain('4 followers turned into 8 white.');
  });
  it('no recruited or won followers: nothing happens and the card stays unused', () => {
    let s = sc(0);
    s = move(s, `use:${uidIn(s, 'trading.pawnbrokers', 0)}`);
    expect(s.players[0].res.white).toBe(0);
    expect(s.cards[uidIn(s, 'trading.pawnbrokers', 0)].used).toBeFalsy();
  });
});
