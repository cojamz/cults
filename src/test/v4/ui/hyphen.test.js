// Long single-word names break at a natural seam in narrow tiles (shop faces, the swap card's dense tiles).
import { describe, it, expect } from 'vitest';
import { breakable } from '../../../v4/game/hyphen.js';

const shown = n => breakable(n).replace('­', '-');
describe('breakable', () => {
  it('keeps a syllable-starting pair together (playtest, Nov 3)', () => {
    expect(shown('Deprogrammers')).toBe('Deprogram-mers');
    expect(shown('Philanthropists')).toBe('Philan-thropists');
  });
  it('keeps the seams it had', () => {
    for (const w of ['Doppel-ganger', 'Bench-warmer', 'Impres-sionist', 'Toast-master', 'Prosely-tizers']) expect(shown(w.replace('-', ''))).toBe(w);
  });
  it('leaves short words and spaced names alone', () => {
    expect(breakable('Roadie')).toBe('Roadie');
    expect(breakable('Mentor & Protégés')).toBe('Mentor & Protégés');
  });
});
