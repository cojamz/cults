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
  it('says "You have", not "You has" (picky run, Nov 6)', () => {
    expect(fizzleNote('P1 has no minions left to place: Right Away does nothing.', 'P1')).toBe('You have no minions left to place: Right Away does nothing.');
    expect(fizzleNote('P1 has no member with an On Recruit to copy.', 'P1')).toBe('You have no member with an On Recruit to copy.');
    expect(fizzleNote('P1 recruits nothing.', 'P1')).toBe('You recruit nothing.');
    expect(fizzleNote('Ann has no minions left to place: Right Away does nothing.', 'Ann', false)).toBe('Ann has no minions left to place: Right Away does nothing.');
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
  it("Sore Loser's steal is a gain, Racket's empty contest a fizzle (frame review, Nov 7)", () => {
    expect(fizzleNote("P1's Sore Loser: P1 won no contest; steals 5 followers from P2.", 'P1')).toBe(null);
    expect(fizzleNote("P1's Racket: no contest led by a rival.", 'P1')).toBe('Your Racket: no contest led by a rival.');
  });
});

import { tookSpace } from '../../../v4/game/fizzle.js';
describe('tookSpace', () => {
  it('names the space taken', () => {
    expect(tookSpace(['P1 took Sample (Green).', "P1: no rival's member has an On Recruit to copy."], 'P1')).toBe('Sample');
    expect(tookSpace(['P2 took Sample (Green).'], 'P1')).toBe(null);
  });
});
