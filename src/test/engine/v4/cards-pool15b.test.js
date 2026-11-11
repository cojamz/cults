// @vitest-environment node
// Idea pipeline pool 15 (round 2), the second file: Second Billing and Part Exchange each take their color's only live
// round III space, so they can't share a file with Top Billing and Seat Shuffle (cards-pool15.test.js).
import { describe, it, expect } from 'vitest';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming, passBuys } from './cards-helpers.js';
import { usePool, price, still, go } from './pool-helpers.js';

usePool([], ['echo.secondbilling', 'red.partexchange']);
const named = (s, name) => linesNaming(s.log, name);
const until = (s, name) => { while (s.pending?.kind === 'choose' && !s.pending.prompt.startsWith(name)) s = move(s, s.pending.options[0].id); return s; };

describe('Second Billing (Green, round III)', () => {
  it('Copy any round II action (round III ones aren\'t offered). +1 green.', () => {
    let s = sceneQ({ quadrants: ['echo', 'gold', 'purple', 'market'], round: 3, res: [{ gold: 4 }] });
    s = take(s, 'echo.secondbilling');
    expect(s.players[0].res.green).toBe(1);
    expect(s.pending.prompt).toBe('Second Billing: copy which round II action?');
    const names = s.pending.options.map(o => o.label.split(':')[0].replace(/ \(P\d\)$/, ''));
    expect(names).toEqual(expect.arrayContaining(['Collect Debts', 'Tithe']));
    expect(names).not.toContain('Double Down');
    expect(names).not.toContain('Second Billing');
    s = move(s, s.pending.options.find(o => o.label.startsWith('Tithe')).id);
    expect(s.log.some(l => /Tithe/.test(l))).toBe(true);
  });
});

describe('Part Exchange (Red, round III)', () => {
  it('Swap up to 2 of your members with shop members costing up to 2 more each. +1 red.', () => {
    let s = still({ quadrants: ['red', 'gold', 'market', 'yellow'], round: 3, members: [['market.stylist', 'market.onlooker', 'red.intern']] });
    const mine = ['market.stylist', 'market.onlooker', 'red.intern'].map(id => uidOf(s, id, 0));
    // shop members each a little dearer than one of P1's
    for (const a of mine) {
      const u = s.pile.find(x => price(s, x) > price(s, a) && price(s, x) <= price(s, a) + 2);
      if (u !== undefined) { s.pile.splice(s.pile.indexOf(u), 1); s.shop.unshift(u); }
    }
    s = go(s, [{ t: 'turn', p: 0 }]);
    s = take(s, 'red.partexchange');
    expect(s.players[0].res.red).toBe(1);
    for (let k = 0; k < 2; k++) {
      expect(s.pending.prompt).toMatch(/^Part Exchange: swap which/);
      expect(s.pending.options.filter(o => o.kind === 'trade').every(o => price(s, o.value[1]) <= price(s, o.value[0]) + 2)).toBe(true);
      s = until(move(s, s.pending.options.find(o => o.kind === 'trade').id), 'Part Exchange');
    }
    expect(s.pending?.prompt?.startsWith('Part Exchange')).not.toBe(true); // no third swap
    expect(named(s, 'Part Exchange').filter(l => /swaps .* from the shop/.test(l))).toHaveLength(2);
    expect(named(s, 'Part Exchange').at(-1)).toBe("P1's Part Exchange: 2 swaps.");
  });
});
