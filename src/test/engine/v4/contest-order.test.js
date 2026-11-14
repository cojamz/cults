// Contests score one at a time in cloak order (Cory, 2026-11-04: "it kind of has to have an inherent order. and I
// think cloak order makes most sense (so basically player turn order)"): each prize lands before the next contest counts.
import { describe, it, expect } from 'vitest';
import { contestTable, contestOrder, followers } from '../../../engine/v4/index.js';
import { sceneQ } from './cards-helpers.js';

// pinned to the old Fewest followers so a prize paid earlier moves a later contest (White is Fewest members since Nov 7)
const table = () => {
  const s = sceneQ({ quadrants: ['red', 'trading'], n: 2, rules: { contests: 'byColor', contestFix: { white: 'followers' } }, members: [['red.volunteer'], []] });
  // even followers before any prize: P1's Red prize then makes P2 the only one with the fewest
  s.players[1].bonus = followers(s, s.players[0]) - followers(s, s.players[1]);
  return s;
};

describe('v4 contest order', () => {
  it('follows this round\'s turn order, each player bringing their cloak color', () => {
    const s = table();
    s.players[0].startColor = 'trading'; s.players[1].startColor = 'red';
    s.order = [1, 0, 0, 1];
    expect(contestOrder(s)).toEqual(['red', 'trading']);
    s.order = [0, 1, 1, 0];
    expect(contestOrder(s)).toEqual(['trading', 'red']);
  });

  it('a prize paid earlier counts in a later contest (Fewest followers after Most red members)', () => {
    const s = table();
    s.players[0].startColor = 'red'; s.players[1].startColor = 'trading';
    s.order = [0, 1, 1, 0];
    const before = s.players.map(p => p.bonus);
    const t = contestTable(s);
    expect(t.map(c => c.qid)).toEqual(['red', 'trading']);
    expect(t[0].winners).toEqual([0]);
    expect(t[1].winners).toEqual([1]); // P1's red prize put them above P2
    expect(s.players.map(p => p.bonus)).toEqual(before); // a preview pays nothing
    // White first: still even, so the two share it
    s.order = [1, 0, 0, 1];
    const u = contestTable(s);
    expect(u.map(c => c.qid)).toEqual(['trading', 'red']);
    expect(u[0].winners).toEqual([0, 1]);
  });
});
