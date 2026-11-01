// @vitest-environment node
// The Goes Last token (Cory, Nov 1 2:16pm and 2:35pm: "Let's just try it with the goes last token"). "Its holder places
// the minions on it once every hand is empty. If someone takes it, the minions on it go back to their owner's hand."
// Last Call: "+1 purple. +1 follower and +1 purple per minion you have left. Take the Goes Last token and put your other
// minions on it." Sleep In: "+4 purple (+5 in round II, +6 in round III). Take the Goes Last token and put your next
// minion on it." Night Owls: "Once per round: after you place your last minion, take the Goes Last token with 1 more
// minion on it." A pass because your hand is empty counts as a skipped turn (Pocket Watch, Gossip).
import { describe, it, expect } from 'vitest';
import { applyMove } from '../../../engine/v4/core.js';
import { take } from './helpers.js';
import { sceneQ } from './cards-helpers.js';

const Q = ['gold', 'red', 'purple', 'echo'];
const turns = (...ps) => ps.map(p => ({ t: 'turn', p }));
const pass = s => applyMove(s, { player: s.pending.player, option: s.pending.options.find(o => o.id === 'pass')?.id ?? s.pending.options[0].id });
const toPlace = s => { while (s.pending && s.pending.kind !== 'place') s = pass(s); return s; };
const slot = (s, key) => s.pending.options.find(o => o.kind === 'slot' && o.label === key)?.id;
const skips = s => s.log.filter(l => / turn is skipped/.test(l));
function playOut(s) {
  const placed = [];
  const r = s.round;
  while (s.round === r && s.pending) {
    if (s.pending.kind === 'place') { placed.push(s.pending.player); s = applyMove(s, { player: s.pending.player, option: s.pending.options.find(o => o.kind === 'slot').id }); }
    else s = pass(s);
  }
  return { s, placed };
}

describe('the Goes Last token', () => {
  it('Last Call: takes the token, every minion left waits on it, and each pass while rivals place is a skip', () => {
    const s = take(sceneQ({ quadrants: Q, round: 2, left: 3, members: [[], ['purple.gossip']], queue: [...turns(0, 1, 0, 1, 0, 1), { t: 'allPlaced' }] }), 'purple.lastcall');
    expect(s.goesLast).toEqual({ round: 2, pid: 0 });
    expect(s.queue.filter(t => t.t === 'turn' && t.p === 0).every(t => t.token)).toBe(true);
    const { s: end, placed } = playOut(s);
    expect(placed).toEqual([1, 1, 1, 0, 0]);
    expect(skips(end)).toHaveLength(2);
    expect(end.players[1].bonus).toBe(2); // Gossip
  });

  it('Sleep In takes the token from a Last Call: the caller’s minions go back to their hand and take their turns again', () => {
    let s = take(sceneQ({ quadrants: Q, round: 2, left: 4, queue: [...turns(0, 1, 0, 1, 0, 1, 0), { t: 'allPlaced' }] }), 'purple.lastcall');
    expect(s.goesLast.pid).toBe(0);
    s = toPlace(s);
    expect(s.pending.player).toBe(1);
    s = applyMove(s, { player: 1, option: slot(s, 'Sleep In') });
    expect(s.goesLast).toEqual({ round: 2, pid: 1 });
    expect(s.log.some(l => /takes the Goes Last token from P1, and P1's 3 minions on it go back to their hand/.test(l))).toBe(true);
    const { s: end, placed } = playOut(s);
    // P1's minions take their own turns again; P2's last minion waits on the token and places last
    expect(placed).toEqual([0, 1, 0, 0, 1]);
    expect(skips(end).filter(l => /P1's turn/.test(l))).toHaveLength(0);
  });

  it('Sleep In: one minion waits on the token; your next turn still happens, and your last snake turn is the pass', () => {
    const s = take(sceneQ({ quadrants: Q, round: 2, left: 3, members: [[], ['purple.gossip']], queue: [...turns(0, 1, 0, 1, 0, 1), { t: 'allPlaced' }] }), 'purple.skip');
    const { s: end, placed } = playOut(s);
    expect(placed).toEqual([1, 0, 1, 1, 0]);
    expect(skips(end)).toEqual(["P1's turn is skipped (Sleep In)."]);
  });

  it('Early Birds: Last Call pays, nothing goes on the token, and the token stays with its holder', () => {
    let s = sceneQ({ quadrants: Q, round: 2, left: 3, members: [['purple.earlybird']], queue: [...turns(0, 1, 0, 1), { t: 'allPlaced' }] });
    s.goesLast = { round: 2, pid: 1 };
    s = take(s, 'purple.lastcall');
    expect(s.goesLast.pid).toBe(1);
    expect(s.players[0].bonus).toBe(2);
    expect(s.queue.some(t => t.t === 'turn' && t.token)).toBe(false);
  });
});
