// @vitest-environment node
// Late Shift, Trending's place in Red round I (Cory, Nov 11 2:04pm): "Recruit a shop member costing up to 2 per minion
// you've placed this round, for free. +1 red." The count includes the minion on Late Shift (Help Yourself's reading).
import { describe, it, expect } from 'vitest';
import { take, move, uidOf } from './helpers.js';
import { sceneQ } from './cards-helpers.js';
import { quadrant, defById } from '../../../engine/v4/content/index.js';

const sc = o => sceneQ({ quadrants: ['gold', 'red', 'silver', 'green'], ...o });
const cost = s => uid => { const d = defById(s.cards[uid].def); return d.s + d.w; };

describe('Late Shift', () => {
  it("is on Red's round I spaces in Trending's place", () => {
    const names = quadrant('red').actions.map(a => a.name);
    expect(names).toContain('Late Shift');
    expect(names).not.toContain('Trending');
  });
  // the cheapest members cost 3, so a first minion here only takes the +1 red
  it('first minion: up to 2, then +1 red', () => {
    const s = take(sc({ shop: ['red.intern', 'gold.tycoon'] }), 'red.lateshift');
    expect(s.pending?.prompt || '').not.toMatch(/Late Shift/);
    expect(s.players[0].res.red).toBe(1);
    expect(s.log.join('\n')).toContain("P1's Late Shift: 1 minion placed, and no shop member costs 2 or less.");
  });
  it('second minion: a free shop member costing up to 4, then +1 red', () => {
    let s = take(sc({ shop: ['red.intern', 'gold.tycoon'], slots: { '0-0': 0 } }), 'red.lateshift');
    const offered = s.pending.options.map(o => o.value);
    expect(offered.length).toBeGreaterThan(0);
    expect(offered.every(u => cost(s)(u) <= 4)).toBe(true);
    const u = offered[0];
    s = move(s, `card:${u}`);
    expect(s.players[0].members).toContain(u);
    expect(s.players[0].res.red).toBe(1);
    expect(s.log.join('\n')).toMatch(/Late Shift: recruits .* for free/);
  });
  it('third minion: up to 6', () => {
    let s = sc({ shop: ['red.intern', 'gold.tycoon', 'red.bigfamily'], slots: { '0-0': 0, '2-0': 0 } });
    s = take(s, 'red.lateshift');
    const offered = s.pending.options.map(o => o.value);
    expect(offered.every(u => cost(s)(u) <= 6)).toBe(true);
    expect(Math.max(...offered.map(cost(s)))).toBeGreaterThan(2);
  });
  it('nothing cheap enough: only the +1 red', () => {
    const s = take(sc({ shop: ['gold.tycoon'] }), 'red.lateshift');
    expect(s.pending?.prompt || '').not.toMatch(/Late Shift/);
    expect(s.players[0].res.red).toBe(1);
  });
});
