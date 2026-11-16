// A space that sends face-up members under the deck whatever you choose lists them in its preview, and its space card
// says so (the whole row as one), so nobody sweeps their own target by surprise. Spaces that sweep nothing list nothing.
// New Faces (the whole-row sweep) is gone since Blue's Oct 20 rework; Out of Style (3 members since Nov 10) with three face up sweeps them all.
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { createGame, applyMove, chooseBotMove, previewSpace, quadrant, cardDef } from '../../../engine/v4/index.js';
import { SpaceCard } from '../../../v4/game/HoverCards.jsx';
import { cachedPreview } from '../../../v4/game/Info.jsx';

afterEach(cleanup);
const seats = [{ name: 'Ana', kind: 'human' }, { name: 'Bo', kind: 'bot' }, { name: 'Cy', kind: 'bot' }];

function restockScene() {
  for (let seed = 1; seed < 40; seed++) {
    let s = createGame({ seats, seed, quadrants: ['gold', 'red', 'market', 'echo'] });
    for (let k = 0; k < 400 && !(s.pending && s.pending.kind === 'place' && s.pending.player === 0 && s.round >= 1); k++) s = applyMove(s, chooseBotMove(s, () => 0.3));
    const q = s.quadrants.indexOf('market');
    const i = quadrant('market').actions.findIndex(a => a.key === 'restock');
    if (!s.pending.options.some(o => o.id === `slot:${q}-${i}`)) continue;
    return { s, q, i };
  }
  return null;
}

// Out of Style since Nov 10: "Discard 3 shop members and refill." Each of the three is your pick and each send refills the
// row, so no face-up member goes whatever you choose: the preview names none and the space card says no sweep. (The
// old Out of Style sent a whole color, which one color face up made certain; no live space sweeps for sure now.)
describe('Out of Style names what it sweeps', () => {
  it('names no member: every one of its three sends is your pick, from a row that refills', () => {
    const { s, q, i } = restockScene();
    expect(s.shop.length).toBeGreaterThan(3);
    expect(previewSpace(s, 0, q, i).swept).toEqual([]);
  });

  it('its space card says no sweep, and a plain gain space sweeps nothing', () => {
    const { s, q, i } = restockScene();
    cachedPreview(s, 0, q, i);
    const { container } = render(<SpaceCard state={s} me={0} spaceKey={`${q}-${i}`} />);
    expect(container.querySelectorAll('[data-swept]')).toHaveLength(0);
    expect(container.textContent).not.toContain('Sweeps away');
    void cardDef;
    cleanup();
    const g = s.quadrants.indexOf('gold');
    const plain = s.pending.options.find(o => o.q === g);
    expect(previewSpace(s, 0, plain.q, plain.i).swept).toEqual([]);
  });
});
