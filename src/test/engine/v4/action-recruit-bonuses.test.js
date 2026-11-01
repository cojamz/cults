// Action-based recruits fire the same bonuses as shop recruits.
import { it, expect } from 'vitest';
import { sceneQ, settle } from './cards-helpers.js';
import { take, move } from './helpers.js';
for (const [action, round] of [['red.hire', 1], ['red.hireup', 2], ['red.take', 3]]) {
  it(`${action} triggers Exporters when taking a red member`, () => {
    // Promote swaps your own member for one costing the same up to 2 more (Nov 1): Intern up to Twins
    const IN = action === 'red.hireup' ? 'red.twins' : 'red.volunteer', OUT = action === 'red.hireup' ? 'red.intern' : 'gold.taxman';
    const before = sceneQ({ quadrants: ['red', 'yellow', 'trading', 'gold'], round, members: [['trading.exporter', OUT]], shop: [IN] });
    before.shop = before.shop.filter(u => before.cards[u].def === IN);
    // Walk-In (round I rework, Oct 27) recruits the top member of the deck, not one from the shop
    if (action === 'red.hire') { before.pile.unshift(...before.shop); before.shop = []; }
    let s = take(before, action);
    if (action === 'red.hireup') {
      const incoming = s.shop.find(u => s.cards[u].def === IN);
      const outgoing = s.players[0].members.find(u => s.cards[u].def === OUT);
      s = move(s, `trade:${outgoing}:${incoming}`);
    }
    s = settle(s);
    expect(s.players[0].members.some(u => s.cards[u].def === IN)).toBe(true);
    // the space's red (Walk-In +1, Cory Oct 28; Promote +3, Cory Oct 30). Go-Between left this test with Yellow 2.0 (Oct 31).
    expect(s.players[0].res.red).toBe(action === 'red.hireup' ? 3 : 1);
    expect(s.players[0].res.white).toBe(1); // Exporters: white on a non-white recruit
    for (const name of ['Exporters']) expect(s.log.some(l => l.includes(name))).toBe(true);
  });
}
