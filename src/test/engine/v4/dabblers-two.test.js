import { describe, it, expect } from 'vitest';
import { countMembersOfColor } from '../../../engine/v4/core.js';
import { table } from './cards-helpers-b.js';

// Cory, Nov 4 11:07am: Dabblers ("Counts as 2 wild members.") "always works in the best possible interpretation for
// the player. Why would it be 1 for Most red members??"
describe('Dabblers counts as 2 in every color count', () => {
  it('Most red members (each card counts 1): Dabblers counts 2, a red member 1', () => {
    const s = table(['red', 'purple', 'market', 'trading'], { n: 2, members: [['benders.dabblers', 'red.volunteer']] });
    expect(countMembersOfColor(s, s.players[0], 'red', { cards: true })).toBe(3);
    expect(countMembersOfColor(s, s.players[0], 'purple', { cards: true })).toBe(2);
    expect(countMembersOfColor(s, s.players[0], 'red')).toBe(3);
  });
});
