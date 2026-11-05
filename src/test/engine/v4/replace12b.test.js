// @vitest-environment node
// Card quality loop, lane D2 (Nov 4; /mnt/project-files/quality/evals/gate/requalified/D2.md): the REPLACE12 cards that
// requalified under "paper filters, play ranks". Turncoat in Deprogrammers' place, and rewords of the live card in its
// own place (Deprogrammers, Bury, Leaders' Tax, Right Away). Set before the engine loads (dynamic imports), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE12 = 'turncoat,buryfull,leaderstax2,rightaway2,snobsup';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { take, move } = await import('./helpers.js');
const { table, named, uidIn, owns } = await import('./cards-helpers-b.js');
delete process.env.REPLACE12;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE12 rewords: the switch', () => {
  it('Turncoat at its pitched price, in retired Deprogrammers\' place', () => {
    const d = defById('red.turncoat');
    expect([d.name, d.s, d.w, d.f]).toEqual(['Turncoat', 3, 2, 2]);
    expect(defById('red.movementpenalty').retired).toBe(true);
  });
});

describe('Turncoat: "Whenever a rival takes one of your members, recruit the top member of the pile for free."', () => {
  it("P1's Promote takes P2's Mentor: the top member of the pile joins P2, free", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.panel'], ['red.turncoat', 'red.mentor']],
      pileFirst: ['red.volunteer'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.hireup'); // Promote
    s = answer(s, `trade:${uidIn(s, 'red.panel', 0)}:${uidIn(s, 'red.mentor', 1)}`);
    expect(owns(s, 0, 'red.mentor')).toBe(true);
    expect(owns(s, 1, 'red.volunteer')).toBe(true);
    expect(named(s, 'Turncoat').join(' ')).toContain('P1 took Mentor, so the top member of the pile joins P2 free.');
  });
  it("a member its owner gives away doesn't count", () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 2, members: [['red.turncoat', 'red.mentor'], ['red.panel']],
      pileFirst: ['red.volunteer'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = take(s, 'red.trade'); // Demote: P1 gives Mentor away
    s = answer(s, `trade:${uidIn(s, 'red.mentor', 0)}:${uidIn(s, 'red.panel', 1)}`);
    expect(named(s, 'Turncoat')).toEqual([]);
  });
});

describe('Bury, reworded: "...Gain blue equal to its cost. +1 blue."', () => {
  it('buries Foster Parents (5 since every member +1, Nov 5): +5 blue and the +1', () => {
    let s = table(['market', 'red', 'trading', 'yellow'], { round: 2, shop: ['red.fosterparents', 'red.volunteer'] });
    s = take(s, 'market.pricecheck');
    s = answer(s, s.pending.options.find(o => o.label.startsWith('Foster Parents')).id);
    expect(s.players[0].res.blue).toBe(6);
    expect(s.shop.some(u => s.cards[u].def === 'red.fosterparents')).toBe(false);
  });
});

describe("Leaders' Tax, reworded: \"Choose a color: +1 of it per minion on its spaces. +1 yellow.\"", () => {
  it('your own minion on Red counts beside the rival one', () => {
    let s = table(['yellow', 'red', 'market', 'trading'], { round: 1 });
    s.slots = { '1-0': 1, '1-1': 0, '2-0': 1 };
    s = take(s, 'yellow.transmute');
    s = answer(s, 'color:red');
    expect(s.players[0].res).toMatchObject({ red: 2, yellow: 1 });
    expect(named(s, "Leaders' Tax").join(' ')).toContain('+2 red (2 minions on its spaces).');
  });
});

describe('Right Away, reworded: "+2 purple in round I, +3 in round II, +4 in round III. ..."', () => {
  it('round I pays 2 purple, round III 4', () => {
    const at = round => take(table(['purple', 'red', 'market', 'yellow'], { round, queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] }), 'purple.again').players[0].res.purple;
    expect(at(1)).toBe(2);
    expect(at(3)).toBe(4);
  });
});

describe('Snobs, trading up: "Whenever you recruit a member costing more than each of your others, +2 followers."', () => {
  const R = { red: 20, blue: 20, yellow: 20, white: 20 };
  it('recruiting Mentor (10) over Snobs (7) and Volunteer: +2', () => {
    let s = table(['yellow', 'red', 'market', 'trading'], { round: 2, res: [R], members: [['market.snob', 'red.volunteer']],
      shop: ['red.mentor', 'red.fosterparents'], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }] });
    s = take(s, 'yellow.dilute');
    s = move(s, `card:${uidIn(s, 'red.mentor', 'shop')}`);
    while (s.pending?.player === 0 && s.pending.kind !== 'place') s = move(s, s.pending.options[0].id);
    expect(s.players[0].bonus).toBe(2);
    expect(named(s, 'Snobs').join(' ')).toContain('Mentor (10) costs more than each of their other members, +2 followers.');
  });
  it('a recruit cheaper than one of your members pays nothing', () => {
    let s = table(['yellow', 'red', 'market', 'trading'], { round: 2, res: [R], members: [['market.snob', 'red.mentor']],
      shop: ['red.fosterparents'], queue: [{ t: 'turn', p: 0 }] });
    s = take(s, 'yellow.dilute');
    s = move(s, `card:${uidIn(s, 'red.fosterparents', 'shop')}`);
    expect(owns(s, 0, 'red.fosterparents')).toBe(true);
    expect(s.players[0].bonus).toBe(0);
  });
});
