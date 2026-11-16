// @vitest-environment node
// Cory's playtest, Nov 9 10:20pm Eastern: "window shopper didnt give resources when used on round start (on grey
// members)". Window Shopper ("On Recruit and Round Start: discard 2 shop members. +1 of each one's color.") sending a
// grey member gives +1 of any color, the owner's pick, as Out of Style does.
import { describe, it, expect } from 'vitest';
import { move } from './helpers.js';
import { table, uidIn } from './cards-helpers-b.js';

const Q = ['gold', 'red', 'market', 'thieves'];
const rich = { gold: 30, red: 30, blue: 30, magenta: 30 };
const sum = r => Object.values(r).reduce((a, b) => a + (b || 0), 0);

describe('Window Shopper and grey members', () => {
  it('On Recruit: a grey member sent to the discard pile gives +1 of a color you pick, then the second send comes', () => {
    let s = table(Q, { res: [rich], shop: ['market.windowshopper', 'benders.sorelosers', 'gold.tycoon'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `card:${uidIn(s, 'market.windowshopper', 'shop')}`);
    if (s.pending?.kind === 'pay') s = move(s, s.pending.options[0].id);
    const grey = uidIn(s, 'benders.sorelosers', 'shop');
    expect(s.pending.prompt).toMatch(/Window Shopper/);
    const before = sum(s.players[0].res);
    s = move(s, `card:${grey}`);
    expect(s.discard.at(-1)).toBe(grey);
    expect(s.pending.prompt).toMatch(/Window Shopper: \+1 of which color/);
    const pick = s.pending.options[0];
    s = move(s, pick.id);
    expect(sum(s.players[0].res)).toBe(before + 1);
    expect(s.log.some(l => l.includes(`Window Shopper: +1 ${pick.value}`))).toBe(true);
    // then the second send
    expect(s.pending.prompt).toMatch(/Window Shopper: send which member/);
  });
});
