// @vitest-environment node
// Assimilators (Cory, Nov 12: "assimilators is cool"): "Your grey members count as members of your biggest color."
import { describe, expect, it } from 'vitest';
import { countMembersOfColor } from '../../../engine/v4/core.js';
import { defById } from '../../../engine/v4/content/index.js';
import { CUT } from '../../../engine/v4/content/cull.js';
import { table } from './cards-helpers-b.js';

const Q = ['red', 'echo', 'yellow', 'thieves'];
const fixture = opts => { const s = table(Q, opts); s.queue = []; s.pending = null; return s; };
const one = { cards: true };

describe('Assimilators', () => {
  it('is in Red’s deck with its printed text', () => {
    expect(defById('red.assimilators').text).toBe('Your grey members count as members of your biggest color.');
    expect(CUT.has('red.assimilators')).toBe(false);
  });
  it('adds your greys to your biggest color, and they stop counting as grey', () => {
    const s = fixture({ members: [['red.assimilators', 'red.panel', 'red.loyalists', 'yellow.caravan', 'benders.cheerleaders', 'benders.extrahand'], ['benders.scout']] });
    const p = s.players[0];
    expect(countMembersOfColor(s, p, 'red', one)).toBe(5); // 3 red + 2 grey
    expect(countMembersOfColor(s, p, 'yellow', one)).toBe(1);
    expect(countMembersOfColor(s, p, 'guest', one)).toBe(0);
    expect(countMembersOfColor(s, s.players[1], 'guest', one)).toBe(1); // a rival's greys stay grey
  });
  it('a tie for biggest counts the greys in each tied color; no colored member leaves greys grey', () => {
    const s = fixture({ members: [['red.assimilators', 'yellow.caravan', 'benders.cheerleaders']] });
    const p = s.players[0];
    expect(countMembersOfColor(s, p, 'red', one)).toBe(2);
    expect(countMembersOfColor(s, p, 'yellow', one)).toBe(2);
  });
});
