// Guard (Cory, Nov 12: "the hover is weird, im not on extra hand im on hot streak but its showing extra hand"): every
// Tip gets a 44px touch box (.tip > .hitbox), but a seat's member figures are 24px wide and 25px apart, so that box
// spilled ~10px onto each neighbour and the later figure (painted on top) took the pointer: the right half of Hot Streak
// opened Extra Hand. A figure's target, a choice's member button and a switch's hover stay within their own figure.
// The browser proof is e2e/v4/members.mjs (m15): every point inside a figure in your row belongs to that figure.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const css = f => readFileSync(join(__dirname, '../../../v4', f), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
const rule = (text, selector) => {
  const at = text.indexOf(`${selector}{`);
  return at < 0 ? null : text.slice(at + selector.length + 1, text.indexOf('}', at));
};

describe("a member figure's hover target stays on its own figure", () => {
  it('the figure tip drops the 44px touch box for its own box', () => {
    const r = rule(css('game/members.css'), '.cs-member > .fig > .hitbox');
    expect(r).not.toBeNull();
    expect(r).toMatch(/width:100%/);
    expect(r).toMatch(/height:100%/);
  });

  it("a choice's member button has no 44px box over the next figure", () => {
    const r = rule(css('game/boardpick.css'), '.lt-cult-seat .cs-pick-member > .hitbox');
    expect(r === null || /display:none/.test(r) || !/44px/.test(r)).toBe(true);
  });

  it("a switch's hover area is no wider than the switch", () => {
    const r = rule(css('game/members.css'), '.lt-cult-seat .cs-member .mu-sw-tip::after');
    expect(r).not.toBeNull();
    const inset = /inset:([^;]+)/.exec(r)[1].trim().split(/\s+/);
    const [, right = inset[0], , left = right] = inset;
    expect([right, left].every(v => parseFloat(v) >= 0)).toBe(true);
  });
});
