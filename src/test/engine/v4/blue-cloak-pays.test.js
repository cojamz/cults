// @vitest-environment node
// Blue Cloak ("Whenever you discard a member, +1 of its color (grey: any color)"). The player-agents review (r3g6, Nov 13)
// found it paid 13 of 18: a discard that empties the deck shuffles the discard pile into a new deck before the cloak
// pays (Out of Style's 3 discards paid 1, Test Drive's 1 paid 0), and Window Shopper's Round Start discards paid 0
// because nobody's turn has begun at Round Start.
import { describe, it, expect } from 'vitest';
import { move, take } from './helpers.js';
import { table, uidIn } from './cards-helpers-b.js';
import { defById } from '../../../engine/v4/index.js';

const Q = ['market', 'red', 'gold', 'purple'];
const cloakPays = s => s.log.filter(l => /^P1's (Blue Cloak|Bargain Bin): \+1 /.test(l)).length;
function wearCloak(s) {
  const art = Math.max(...Object.keys(s.cards).map(Number)) + 1;
  s.cards[art] = { uid: art, def: 'market.bargainbin' }; s.players[0].artifact = art;
  return s;
}

describe('Blue Cloak', () => {
  it('pays for each of Out of Style’s 3 discards when the deck runs out and the discard pile is shuffled back', () => {
    let s = wearCloak(table(Q, { shop: ['red.host', 'red.intern', 'red.bigfamily', 'red.volunteer'] }));
    s.pile = []; s.discard = []; // every discard reshuffles straight back into the deck and the row
    s = take(s, 'market.restock');
    const sent = [];
    for (let k = 0; k < 3; k++) {
      const o = s.pending.options.find(x => x.kind === 'card' && !sent.includes(x.value));
      sent.push(o.value);
      s = move(s, o.id);
    }
    expect(s.log.join('\n')).toMatch(/The deck ran out/);
    expect(cloakPays(s)).toBe(3);
  });

  it('pays at Round Start for Window Shopper’s discards, before anyone’s turn', () => {
    let s = wearCloak(table(['gold', 'red', 'market', 'thieves'], { round: 1, members: [['market.windowshopper']], queue: [{ t: 'round', r: 2 }] }));
    expect(s.current == null).toBe(true);
    for (let k = 0; k < 2; k++) {
      const pick = s.pending.options.find(o => { const d = s.cards[Number(o.id.split(':')[1])]?.def; return d && !d.startsWith('benders.') && !defById(d).everyColor; });
      s = move(s, pick.id);
    }
    expect(cloakPays(s)).toBe(2);
  });
});
