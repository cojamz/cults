// @vitest-environment node
// Lab (Nov 4 overnight): decisions.md Nov 1 (line ~1612): Panel swaps one of YOUR members for a shop or rival member;
// it never swaps a rival's member with the shop. One scene: Panel recruited, Promote picked, every offered pair's first
// card is the recruiter's own.
// Foreman (Nov 4): one side of every pair is the owner's own member, so a rival's member trading with yours stays.
import { it, expect } from 'vitest';
import { table, uidIn } from './cards-helpers-b.js';
import { move } from './helpers.js';
import { contextFor, resume } from '../../../engine/v4/core.js';
const reload = s => resume(JSON.parse(JSON.stringify(s)));
it('Panel offers only swaps that give away one of your own members', () => {
  let s = table(['red', 'echo', 'gold', 'thieves'], { round: 2, members: [['red.volunteer'], ['red.recruiter']], shop: ['red.panel', 'red.mentor', 'red.loyalists'] });
  s.queue = []; s.pending = null; s.pile = [];
  const panel = uidIn(s, 'red.panel', 'shop'), mine = uidIn(s, 'red.volunteer', 0), theirs = uidIn(s, 'red.recruiter', 1);
  contextFor(s).recruit(s.players[0], panel, { free: true });
  s = reload(s);
  if (s.pending?.options?.some(o => o.id === 'promote')) s = reload(move(s, 'promote'));
  const trades = (s.pending?.options || []).filter(o => String(o.id).startsWith('trade:')).map(o => o.id.split(':'));
  expect(trades.length).toBeGreaterThan(0);
  const own = s.players[0].members.map(String);
  for (const [, a, b] of trades) expect(own.includes(String(a)) || own.includes(String(b))).toBe(true);
  expect(trades.some(([, a, b]) => String(a) === String(mine) || String(b) === String(mine))).toBe(true);
  void theirs;
});
