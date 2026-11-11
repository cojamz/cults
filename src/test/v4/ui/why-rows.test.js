// The hover's "Why" and "You'd get" rows tell the real payout (blind testers B and C):
// - Grand Host's doubling is named, the biggest part of a Silver space's payout (Toast, Good Deed);
// - a member that fires more than once in one branch says its sum (a copy chain: Impressionist +1 per copy);
// - a space whose gain is your pick (Out of Style: one color) says its best case as your pick.
import { describe, it, expect } from 'vitest';
import { previewSpace } from '../../../engine/v4/index.js';
import { sceneQ, spaceOf } from '../../engine/v4/cards-helpers.js';
import { take, move, useRetired } from '../../engine/v4/helpers.js';
import { youdWords } from '../../../v4/game/Info.jsx';

const pv = (s, name) => { const [q, i] = spaceOf(s, name).split('-').map(Number); return previewSpace(s, s.pending.player, q, i); };

describe('Why rows', () => {
  it('Toast with Grand Host: the Why names the doubling', () => {
    const s = sceneQ({ quadrants: ['silver', 'gold', 'red', 'market'], round: 3, members: [['silver.grandhost', 'silver.caterer']] });
    const p = pv(s, 'silver.toast');
    expect(p.reasons).toContain('Grand Host: silver gain 4 → 8; silver gain 1 → 2'); // flat Toast (Nov 11): the +4 and the +1, each doubled
  });
  // Greatest Hits copies On Recruits since Nov 1; a copy chain still fires Impressionist more than once: Echo copies
  // your Reprise (green), which copies Golden Years again (gold).
  it('Echo of a Reprise: Impressionist fired once per copy says its sum', () => {
    let s = sceneQ({ quadrants: ['gold', 'echo', 'red', 'market'], round: 2, left: 5, members: [['echo.tuningfork']],
      queue: [0, 0, 0].map(p => ({ t: 'turn', p })) });
    s = take(s, 'gold.rush'); while (s.pending?.kind === 'buy') s = move(s, 'pass');
    s = take(s, 'echo.refrain'); while (s.pending?.kind === 'choose') s = move(s, s.pending.options[0].id);
    while (s.pending?.kind === 'buy') s = move(s, 'pass');
    const p = pv(s, 'echo.echo');
    const line = p.reasons.find(l => l.startsWith('Impressionist'));
    expect(line).toBe('Impressionist: +2 green, +2 gold'); // +2 per own copy (Cory, Nov 6)
  });
});

describe("You'd get", () => {
  it('Out of Style says what it pays in all, in the colors your three picks bring (Nov 10: +1 of each discarded member’s color, plus its +1)', () => {
    // 3 red and 2 gold face up: every pick of 3 pays 3 in the members' colors, plus its own +1 blue
    const s = sceneQ({ quadrants: ['market', 'silver', 'gold', 'red'], shop: ['red.intern', 'red.twins', 'red.volunteer', 'gold.banker', 'gold.taxman'] });
    s.shop = s.shop.slice(0, 5);
    const y = youdWords(pv(s, 'market.restock'), s, 'blue');
    expect(y.text).toBe('+1 blue, +3 in colors you choose');
    expect(y.note).toBeNull();
  });
  describe('Walk-In (retired Nov 10, kept for old saves)', () => {
  useRetired(['red.hire']);
  it('Walk-In says its +1 red and the member it brings', () => {
    const s = sceneQ({ quadrants: ['red', 'silver', 'gold', 'market'] });
    const y = youdWords(pv(s, 'red.hire'), s, 'red');
    expect(y.text).toMatch(/^\+1 red/);
    expect(y.text).toMatch(/\+\d+ members?/); // the cheapest shop member; a group (Revelers) counts as 3
  });
  });
});
