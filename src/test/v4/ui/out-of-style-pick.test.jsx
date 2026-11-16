// Out of Style's pick ("send which color to the discard pile?") counts shop members, so each choice shows a member
// figure in its color and how many go, not a bare resource dot (picky run, Nov 7: three dots, one "grey", no counts).
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { createGame, resume } from '../../../engine/v4/core.js';
import { install } from '../../../engine/v4/content/market.js';
import { take } from '../../engine/v4/helpers.js';
import { giftPick } from '../../../v4/game/boardPick.js';

install();
afterEach(cleanup);

function scene() {
  const s = createGame({ seats: Array.from({ length: 3 }, (_, i) => ({ name: `P${i + 1}`, kind: 'human' })), seed: 7, quadrants: ['gold', 'red', 'market', 'green'] });
  s.queue = []; s.pending = null; s.round = 1; s.slots = {}; s.order = []; s.log = [];
  s.players.forEach(p => { for (const r of s.resources) p.res[r] = 0; p.left = 3; });
  s.queue = [{ t: 'turn', p: 0 }];
  return resume(s);
}

describe('Out of Style on the pick card', () => {
  // Nov 10: "Discard 3 shop members and refill. +1 of each discarded member's color." It picks members, not a color, so
  // the pick is on the shop's own cards (shop-recruit-single-choice.test.jsx clicks one), never a color figure card
  it('asks for one shop member at a time, three to go, each option a face-up member', () => {
    const s = take(scene(), 'market.restock');
    expect(s.pending.prompt).toBe('Out of Style: send which member to the discard pile? (3 to go)');
    expect(s.pending.options.map(o => o.value)).toEqual(s.shop);
    expect(s.pending.options.every(o => o.kind === 'card' && o.target && s.shop.includes(o.target.uid))).toBe(true);
    // the pick is on the shop board, with the prompt's words as its head
    expect(giftPick(s, s.pending)).toMatchObject({ title: 'Out of Style', board: 'shop', head: 'Send which member to the discard pile? (3 to go)' });
  });
});
