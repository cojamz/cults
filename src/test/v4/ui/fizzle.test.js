import { describe, it, expect } from 'vitest';
import { fizzleNote } from '../../../v4/game/fizzle.js';

describe('fizzleNote: an action that found nothing is told to its player (Cory, Nov 5)', () => {
  it('Sample with no rival On Recruit', () => {
    expect(fizzleNote("P1: no rival's member has an On Recruit to copy.", 'P1')).toBe("No rival's member has an On Recruit to copy.");
  });
  it('a member that found nothing', () => {
    expect(fizzleNote("P1's Pawn Shop: nothing to turn in.", 'P1')).toBe('Your Pawn Shop: nothing to turn in.');
  });
  it('found no', () => {
    expect(fizzleNote('P1 found no empty action to copy.', 'P1')).toBe('You found no empty action to copy.');
  });
  it('keeps names at a hot seat', () => {
    expect(fizzleNote("Ann's Early Birds: Ann's turn can't be skipped.", 'Ann', false)).toBe(null);
    expect(fizzleNote('Ann found no one worth mugging.', 'Ann', false)).toBe('Ann found no one worth mugging.');
  });
  it('ignores gains, rivals, and the afford toast', () => {
    expect(fizzleNote('P1 took Sample.', 'P1')).toBe(null);
    expect(fizzleNote('P2: no rival has more members.', 'P1')).toBe(null);
    expect(fizzleNote("P1 couldn't afford anything.", 'P1')).toBe(null);
    expect(fizzleNote('P10 found no one.', 'P1')).toBe(null);
  });
});

import { tookSpace } from '../../../v4/game/fizzle.js';
describe('tookSpace', () => {
  it('names the space taken', () => {
    expect(tookSpace(['P1 took Sample (Green).', "P1: no rival's member has an On Recruit to copy."], 'P1')).toBe('Sample');
    expect(tookSpace(['P2 took Sample (Green).'], 'P1')).toBe(null);
  });
});
