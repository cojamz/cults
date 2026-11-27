// @vitest-environment node
// A minion gained during a round goes into the normal turn order (Cory, Nov 14, on his game where Extra Hand's minion
// waited behind everyone: "this is not how an extra minion works", "it just inserts into the normal", "only goes last
// effects"). It takes its owner's next place in the round's order that no minion of theirs is waiting for, such as a
// turn Make Haste or Flurry already moved up; with none, it comes after the round's order.
import './fixtures/gold-on.js'; // Gold's cards, a test-only fixture since Gold left the game (Cory, Nov 24)
import { describe, it, expect } from 'vitest';
import { applyMove } from '../../../engine/v4/core.js';
import { take, move, uidOf } from './helpers.js';
import { sceneQ } from './cards-helpers.js';

const Q = ['gold', 'red', 'purple', 'echo'];
const rich = { gold: 30, red: 30, purple: 30, green: 30 };
const pass = s => applyMove(s, { player: s.pending.player, option: s.pending.options.find(o => o.id === 'pass')?.id ?? s.pending.options[0].id });
function placements(s) {
  const out = [], r = s.round;
  while (s.round === r && s.pending) {
    if (s.pending.kind === 'place') { out.push(s.pending.player); s = applyMove(s, { player: s.pending.player, option: s.pending.options.find(o => o.kind === 'slot').id }); }
    else s = pass(s);
  }
  return out;
}
// the round's order P1 P2 P1 P2 P1 P2, each turn knowing its place, as a round starts
const snake = n => {
  const order = Array.from({ length: n }, (_, k) => k % 2);
  return { order, queue: [...order.map((p, slot) => ({ t: 'turn', p, slot })), { t: 'allPlaced' }] };
};
const scene = () => {
  const { order, queue } = snake(6);
  const s = sceneQ({ quadrants: Q, round: 3, left: 3, res: [rich, rich], shop: ['benders.extrahand'], queue });
  s.order = order; s.slotN = order.length;
  return s;
};

describe('a minion gained mid-round goes into the normal order', () => {
  it('Make Haste moved your last turn up; Extra Hand’s minion takes that turn’s place, not the end', () => {
    let s = take(scene(), 'purple.again'); // Make Haste: P1's last turn (5th in the order) comes right after this one
    s = move(s, `card:${uidOf(s, 'benders.extrahand', 'shop')}`);
    expect(s.players[0].left).toBe(3);
    // P1 now, then the order: P2, P1, P2, P1 (the gained minion, in the moved turn's place), P2
    expect(placements(s)).toEqual([0, 1, 0, 1, 0, 1]);
  });
  it('with every place in the order still yours to play, it comes after the order', () => {
    let s = take(scene(), 'gold.rush');
    s = move(s, `card:${uidOf(s, 'benders.extrahand', 'shop')}`);
    expect(placements(s)).toEqual([1, 0, 1, 0, 1, 0]);
  });
});
