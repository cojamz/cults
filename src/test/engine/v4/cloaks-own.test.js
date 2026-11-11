// @vitest-environment node
// Cloaks pay only for their holder's own actions (Cory, Nov 6: "it all needs to be based on your own actions. you cant
// passively gain from it"). Purple Cloak: "Whenever you take the Goes Last token, +3 purple."
import { describe, it, expect } from 'vitest';
import { take } from './helpers.js';
import { sceneQ, linesNaming } from './cards-helpers.js';

const Q = ['gold', 'red', 'purple', 'green'];
const withCloak = (s, def, i = 0) => {
  const art = Math.max(...Object.keys(s.cards).map(Number)) + 1;
  s.cards[art] = { uid: art, def }; s.players[i].artifact = art;
  return s;
};

describe('Purple Cloak (Pocket Watch)', () => {
  it('Sleep In: its holder takes the Goes Last token, +3 purple on top of the space', () => {
    const base = take(sceneQ({ quadrants: Q }), 'purple.skip').players[0].res.purple;
    const s = take(withCloak(sceneQ({ quadrants: Q }), 'purple.pocketwatch'), 'purple.skip');
    expect(s.players[0].res.purple).toBe(base + 3);
    expect(linesNaming(s.log, 'Pocket Watch').join(' ')).toMatch(/\+3 purple/);
  });
  it('a rival taking the token pays nothing', () => {
    const base = take(sceneQ({ quadrants: Q }), 'purple.skip').players[1].res.purple || 0;
    const s = take(withCloak(sceneQ({ quadrants: Q }), 'purple.pocketwatch', 1), 'purple.skip');
    expect(s.players[1].res.purple || 0).toBe(base);
  });
});
