// A card in the pile or the shop belongs to nobody and carries nothing (fuzz: "in the pile/shop still has …").
// Tryout (round I rework, 2026-10-27) runs a shop member's On Recruit in place, and the member stays in the shop:
// whatever that effect writes on the card must not stay on it.
import { it, expect } from 'vitest';
import { sceneQ } from './cards-helpers.js';
import { take, move } from './helpers.js';

const clean = (s, uid) => expect(s.cards[uid]).toEqual({ uid, def: s.cards[uid].def });
const shopCard = (s, def) => s.shop.find(u => s.cards[u].def === def);

it('Tryout on Hustler: the color you pick is not left on the shop card', () => {
  let s = sceneQ({ quadrants: ['red', 'gold', 'purple', 'echo'], shop: ['gold.hustler'] });
  const uid = shopCard(s, 'gold.hustler');
  s = take(s, 'red.evenswap');
  s = move(s, `card:${uid}`);
  s = move(s, 'color:gold');
  expect(s.shop).toContain(uid);
  clean(s, uid);
});

it('Tryout never offers Night Owls (its words name the token "it"), so the shop card keeps no round mark', () => {
  // Night Owls since Nov 1 2:35pm: "Once per round: after you place your last minion, take the Goes Last token with 1
  // more minion on it." Tryout skips members whose words point at a thing ("it"), as before
  const before = sceneQ({ quadrants: ['red', 'gold', 'purple', 'echo'], shop: ['purple.nightowl'] });
  before.players[0].left = 1;
  const uid = shopCard(before, 'purple.nightowl');
  const s = take(before, 'red.evenswap');
  expect((s.pending?.options || []).some(o => o.id === `card:${uid}`)).toBe(false);
  expect(s.shop).toContain(uid);
  clean(s, uid);
});
