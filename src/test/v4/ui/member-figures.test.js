// Every member a table can deal shows its own 48-pixel figure (Cory, Nov 25, on Purifiers: "why is there a placeholder
// member image there"). Deals the 10-card decks with the test version on (the game since Nov 11), for every color.
import { describe, it, expect } from 'vitest';
import { createGame } from '../../../engine/v4/index.js';
import { iconFor } from '../../../v4/art/index.js';

// the colors a table can pick (the members page's list)
const COLORS = ['red', 'echo', 'thieves', 'purple', 'market', 'trading', 'silver', 'yellow'];
const dealtIds = quadrants => {
  const s = createGame({ seats: quadrants.map(() => ({ kind: 'bot' })), seed: 3, quadrants, rules: { cull: true, artifacts: true, deck: 10, testSet: true, guests: true } });
  return Object.values(s.cards).map(c => c.def);
};

describe('member pictures', () => {
  it('every dealable member has its own figure, not a stand-in', () => {
    const ids = new Set();
    for (let i = 0; i < COLORS.length; i += 4) {
      const table = COLORS.slice(i, i + 4);
      while (table.length < 4) table.push(COLORS[table.length]);
      for (const id of dealtIds(table)) ids.add(id);
    }
    expect(ids.size).toBeGreaterThan(80);
    const missing = [...ids].filter(id => !iconFor(id, 'member').icon.figure);
    expect(missing).toEqual([]);
  });
});
