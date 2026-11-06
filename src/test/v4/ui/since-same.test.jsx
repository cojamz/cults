import { describe, it, expect } from 'vitest';
import { saysSame } from '../../../v4/game/SinceStrip.jsx';

// picky bot, Nov 6: "P3 Build Up: +3 green (+3 green)" said the gain twice
describe('since strip: board words in brackets only when they add something', () => {
  it('drops them when the gain says the same', () => {
    expect(saysSame('+3 green', '+3 green')).toBe(true);
    expect(saysSame('+2 purple', '+2 purple · bought 1 follower')).toBe(true);
  });
  it('keeps them otherwise', () => {
    expect(saysSame('Copy previous action', '+2 green · +3 red')).toBe(false);
    expect(saysSame('+3 green', null)).toBe(false);
    expect(saysSame('', '+3 green')).toBe(false);
  });
});
