// @vitest-environment node
// Swindle (Magenta round II, Cory Nov 10 3:37pm): "Steal a rival’s member costing up to 7; give them a shop member of
// your choice in its place. +1 magenta." Cory, Nov 10 10:42pm: "if you give them a member that doesnt count as an on
// recruit": the given member's On Recruit does not fire.
import { describe, it, expect } from 'vitest';
import { applyMove } from '../../../engine/v4/core.js';
import { quadrant } from '../../../engine/v4/content/index.js';
import { table, uidIn } from './cards-helpers-b.js';

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const slot = (s, q, name) => `${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;

describe('Swindle', () => {
  it('steals the member, gives a shop member in its place, and its On Recruit does not fire (a given member is not a recruit)', () => {
    let s = table(['red', 'thieves', 'echo', 'market'], { n: 2, round: 2, res: [{}, {}],
      members: [[], ['red.twins', 'red.intern']], shop: ['echo.connector', 'red.volunteer'] });
    const twins = uidIn(s, 'red.twins', 1), conn = uidIn(s, 'echo.connector', 'shop');
    s = answer(s, `slot:${slot(s, 'thieves', 'Swindle')}`);
    expect(s.players[0].res.magenta).toBe(1);
    s = answer(s, `card:${twins}`);
    expect(s.pending.prompt).toContain('Swindle: give P2 which shop member');
    const green = s.players[1].res.green || 0;
    s = answer(s, `card:${conn}`);
    expect(s.players[0].members).toContain(twins);
    expect(s.players[1].members).toContain(conn);
    expect(s.players[1].members).not.toContain(twins);
    expect(s.shop).not.toContain(conn);
    // Connector: "On Recruit: +1 green per non-green member you have." Given, not recruited: nothing
    expect((s.players[1].res.green || 0) - green).toBe(0);
    expect(s.log.join('\n')).toContain("P1's Swindle: gave P2 Connector from the shop.");
  });
});
