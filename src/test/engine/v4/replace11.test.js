// @vitest-environment node
// Actions lane (Nov 4; /mnt/project-files/quality/board.md), the REPLACE11=1 bot-test switch: each new wheel space
// does what it prints in a real round, and the old space is off the wheel. The switch is read when the engine loads,
// so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE11 = '1';
const { createGame, applyMove } = await import('../../../engine/v4/core.js');
const { quadrant } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE11;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
// answers everything up to the next placement: passes recruits, takes the first option of any other choice
const passBuys = s => { while (s.pending && s.pending.kind !== 'place') s = answer(s, s.pending.kind === 'buy' ? 'pass' : s.pending.options[0].id); return s; };
const slotOf = (s, name) => {
  const q = s.quadrants.indexOf('purple'), i = quadrant('purple').actions.findIndex(a => a.name === name);
  return `${q}-${i}`;
};

describe('REPLACE11: the switch', () => {
  it('puts Call Back on the wheel in Right Away\'s place', () => {
    const names = quadrant('purple').actions.map(a => a.name);
    expect(names).toContain('Call Back');
    expect(names).not.toContain('Right Away');
  });
});

describe('REPLACE11: Call Back', () => {
  it('moves another of your minions onto the Goes Last token, opens its space, and you place the round\'s last minion', () => {
    let s = createGame({ seats: [{ name: 'P1', kind: 'bot' }, { name: 'P2', kind: 'bot' }], seed: 3, quadrants: ['red', 'purple'] });
    while (s.pending && s.pending.kind !== 'place') s = answer(s, s.pending.options[0].id);
    const first = s.pending.player, other = 1 - first;
    const sleepIn = slotOf(s, 'Sleep In'), callBack = slotOf(s, 'Call Back');
    // first player: Sleep In's neighbour space Hold Up is left alone; take a red space first
    const redSlot = s.pending.options.find(o => o.id.startsWith(`slot:${s.quadrants.indexOf('red')}-`)).id.slice(5);
    s = passBuys(answer(s, `slot:${redSlot}`));
    // the other player takes Sleep In, so they hold the Goes Last token
    expect(s.pending.player).toBe(other);
    s = passBuys(answer(s, `slot:${sleepIn}`));
    expect(s.goesLast.pid).toBe(other);
    // snake: the other player goes again, then the first player takes Call Back
    while (s.pending.player === other) s = passBuys(answer(s, s.pending.options.find(o => o.id.startsWith('slot:') && o.id !== `slot:${callBack}`).id));
    expect(s.pending.player).toBe(first);
    const purple = s.players[first].res.purple || 0;
    s = answer(s, `slot:${callBack}`);
    s = passBuys(s);
    expect(s.players[first].res.purple).toBe(purple + 1);
    expect(s.slots[redSlot]).toBeUndefined(); // its space is open again
    expect(s.goesLast.pid).toBe(first); // the token came over
    expect(s.log.join('\n')).toContain('Call Back');
    // play the round out: the first player places the round's last minion
    const round = s.round;
    let last = null;
    while (s.round === round && s.pending) {
      if (s.pending.kind === 'place') { last = s.pending.player; s = answer(s, s.pending.options.find(o => o.id.startsWith('slot:')).id); }
      else s = answer(s, s.pending.kind === 'buy' ? 'pass' : s.pending.options[0].id);
    }
    expect(last).toBe(first);
  });

  // sentence 1: "+1 purple in round I, +2 in round II, +3 in round III."
  for (const round of [1, 2, 3]) it(`gives +${round} purple in round ${'I'.repeat(round)}`, () => {
    let s = table(['red', 'purple'], { round, queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = answer(s, `slot:${slotOf(s, 'Call Back')}`);
    expect(s.players[0].res.purple).toBe(round);
  });

  // sentence 2, with no other minion of yours on the wheel: you still take the token (a rival's minions on it go home)
  it('with no other minion on the wheel, still takes the Goes Last token from its holder', () => {
    let s = table(['red', 'purple'], { queue: [{ t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }] });
    s = passBuys(answer(s, `slot:${slotOf(s, 'Sleep In')}`));
    expect(s.goesLast.pid).toBe(1);
    s = passBuys(answer(s, `slot:${slotOf(s, 'Call Back')}`));
    expect(s.goesLast.pid).toBe(0);
    expect(s.log.join('\n')).toMatch(/takes the Goes Last token \(no other minion of theirs on the wheel to move onto it\) from P2, and P2's minion on it goes back to their hand/);
    expect(s.players[0].left).toBe(2); // this placement used one; nothing moved, so no minion added
  });

  // sentence 2, with two minions to choose from: you pick which space opens
  it('asks which minion when you have two on the wheel, and opens that space', () => {
    const red = q => `0-${q}`;
    let s = table(['red', 'purple'], { queue: [{ t: 'turn', p: 0 }], left: 2 });
    s.slots[red(0)] = 0; s.slots[red(1)] = 0;
    s = answer(s, `slot:${slotOf(s, 'Call Back')}`);
    expect(s.pending.prompt).toBe('Call Back: move which minion onto the Goes Last token?');
    expect(s.pending.options.map(o => o.id).sort()).toEqual(['from:0-0', 'from:0-1']);
    s = answer(s, 'from:0-1');
    expect(s.slots[red(1)]).toBeUndefined();
    expect(s.slots[red(0)]).toBe(0);
    expect(s.goesLast.pid).toBe(0);
    expect(s.queue.filter(t => t.t === 'turn' && t.p === 0 && t.token)).toHaveLength(1);
  });

  // a rival takes the token afterwards (Sleep In): your waiting minion goes back to your hand and still gets placed
  it('when a rival takes the token back, your minion still gets placed, before theirs', () => {
    let s = table(['red', 'purple'], { queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }], left: 2 });
    s.slots['0-0'] = 0;
    s = passBuys(answer(s, `slot:${slotOf(s, 'Call Back')}`));
    expect(s.goesLast.pid).toBe(0);
    s = passBuys(answer(s, `slot:${slotOf(s, 'Sleep In')}`));
    expect(s.goesLast.pid).toBe(1);
    const order = [];
    let guard = 0;
    while (s.pending && s.pending.kind === 'place' && guard++ < 20) { order.push(s.pending.player); s = passBuys(answer(s, s.pending.options.find(o => o.id.startsWith('slot:')).id)); }
    expect(order.at(-1)).toBe(1); // the token holder places last
    expect(order.filter(p => p === 0).length).toBeGreaterThanOrEqual(2); // P1's called-back minion was placed
  });
});


describe('REPLACE11: Yard Sale', () => {
  const slot = (s, name) => { const q = s.quadrants.indexOf('trading'); return `${q}-${quadrant('trading').actions.findIndex(a => a.name === name)}`; };
  it("is on the wheel in Estate Sale's place", () => {
    const names = quadrant('trading').actions.map(a => a.name);
    expect(names).toContain('Yard Sale');
    expect(names).not.toContain('Estate Sale');
  });

  // "After you recruit this turn, cast out one of your members face up into the shop, gain white equal to twice its
  // cost. +1 white."
  it('after your recruit, puts your member face up in the shop, fresh, and pays twice its cost in white plus 1', () => {
    let s = table(['red', 'trading'], { round: 2, members: [['trading.raider', 'trading.undertaker']] });
    const raiders = s.players[0].members.find(u => s.cards[u].def === 'trading.raider');
    s.cards[raiders].used = true;
    s = answer(s, `slot:${slot(s, 'Yard Sale')}`);
    expect(s.players[0].res.white).toBe(1);
    // the recruit comes first: the sale is asked once you're done recruiting
    expect(s.pending.kind).toBe('buy');
    s = answer(s, 'pass');
    while (s.pending && s.pending.kind === 'buy') s = answer(s, 'pass');
    expect(s.pending.prompt).toBe('Yard Sale: put which member into the shop?');
    s = answer(s, `card:${raiders}`);
    expect(s.players[0].members).not.toContain(raiders);
    expect(s.shop).toContain(raiders);
    expect(s.shop.at(-1)).toBe(raiders); // laid at the end of the row
    expect(s.pile).not.toContain(raiders);
    expect(s.cards[raiders].used).toBeFalsy(); // fresh for its next owner
    expect(s.players[0].res.white).toBe(2 * 5 + 1); // Raiders costs 5
    const log = s.log.join('\n');
    expect(log).toContain("P1's Yard Sale: Raiders goes face up into the shop and paid 10 white.");
    expect(log).not.toContain('sent Raiders to the bottom of the pile');
    // a cast-out, so Undertaker ("Whenever you cast out one of your members, +2 followers.") pays
    expect(log).toMatch(/Undertaker/);
  });

  it('a rival can recruit the sold member from the shop', () => {
    let s = table(['red', 'trading'], { round: 2, members: [['trading.raider']], res: [{}, { white: 9, red: 9 }], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    const raiders = s.players[0].members[0];
    s = answer(s, `slot:${slot(s, 'Yard Sale')}`);
    while (s.pending && s.pending.kind === 'buy') s = answer(s, 'pass');
    s = answer(s, `card:${raiders}`);
    while (s.pending && s.pending.player === 0) s = answer(s, s.pending.kind === 'buy' ? 'pass' : s.pending.options[0].id);
    s = answer(s, s.pending.options.find(o => o.id.startsWith('slot:')).id);
    while (s.pending && s.pending.kind !== 'buy') s = answer(s, s.pending.options[0].id);
    const buy = s.pending.options.find(o => o.id === `card:${raiders}`);
    expect(buy, JSON.stringify(s.pending.options.map(o => o.id))).toBeTruthy();
    s = answer(s, buy.id);
    while (s.pending && s.pending.player === 1 && s.pending.kind !== 'place' && s.pending.kind !== 'buy') s = answer(s, s.pending.options[0].id);
    expect(s.players[1].members).toContain(raiders);
  });

  it('with no members, it just gives the +1 white', () => {
    let s = table(['red', 'trading'], { round: 2 });
    s = answer(s, `slot:${slot(s, 'Yard Sale')}`);
    while (s.pending && s.pending.kind === 'buy') s = answer(s, 'pass');
    expect(s.players[0].res.white).toBe(1);
    expect(s.log.join('\n')).toContain("P1's Yard Sale: no members to sell.");
  });
});
