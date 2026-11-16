// @vitest-environment node
// Idea pipeline pool 15 (round 2), the third file: Mashup takes Green's only live round III space.
import { describe, it, expect } from 'vitest';
import { take, move } from './helpers.js';
import { linesNaming, passBuys } from './cards-helpers.js';
import { usePool, still, go } from './pool-helpers.js';

usePool([], ['echo.mashup']);
const named = (s, name) => linesNaming(s.log, name);
const turn = (...ps) => ps.map(p => ({ t: 'turn', p }));
const settle = s => { while (s.pending?.kind === 'choose') s = move(s, s.pending.options[0].id); return passBuys(s); };

describe('Mashup (Green, round III)', () => {
  it('Choose a color. Copy up to two actions with a minion on its spaces (three there: you pick two). +1 green.', () => {
    let s = go(still({ round: 3, quadrants: ['echo', 'gold', 'purple', 'market'], res: [{}, { gold: 4 }] }), turn(1, 1, 1, 0));
    for (const k of ['gold.rush', 'gold.jv', 'gold.discount']) s = settle(take(s, k));
    s = take(s, 'echo.mashup');
    expect(s.players[0].res.green).toBe(1);
    expect(s.pending.prompt).toBe('Mashup: copy up to two actions on which color’s spaces?');
    s = move(s, 'color:gold');
    expect(s.pending.prompt).toBe('Mashup: copy which Gold action first?');
    expect(s.pending.options).toHaveLength(3);
    s = move(s, s.pending.options.find(o => o.label.startsWith('Golden Years')).id);
    expect(s.pending.prompt).toBe('Mashup: copy which Gold action second?');
    expect(s.pending.options).toHaveLength(2);
    s = move(s, s.pending.options.find(o => o.label.startsWith('Kickback')).id);
    expect(named(s, 'Mashup')).toContain("P1's Mashup copies Golden Years and Kickback.");
    expect(s.players[0].res.gold).toBeGreaterThan(0);
  });
  it('two or fewer there: both are copied with no pick', () => {
    let s = go(still({ round: 3, quadrants: ['echo', 'gold', 'purple', 'market'] }), turn(1, 0));
    s = passBuys(take(s, 'gold.rush'));
    s = take(s, 'echo.mashup');
    s = move(s, 'color:gold');
    expect(named(s, 'Mashup')).toContain("P1's Mashup copies Golden Years.");
  });
});
