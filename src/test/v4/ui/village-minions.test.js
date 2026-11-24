// The old village's minions (Cory, 2026-11-24): 24 minions, each with a picture, an emblem and its own call; a saved
// game or room that names one of the 11 retired minions wears its village stand-in.
import { describe, it, expect } from 'vitest';
import { emojiIds, emojiInfo, minionArt, emojiArt, liveEmoji } from '../../../v4/art/emojis.js';
import { CALL_IDS } from '../../../v4/sound.js';
import { seatEmoji } from '../../../v4/format.js';

const RETIRED = ['santa', 'unicorn', 'surfer', 'alien', 'robot', 'octopus', 'cactus', 'pizza', 'dino', 'ninja', 'crab'];

describe('village minions', () => {
  it('has 24 minions, none of them the retired ones', () => {
    expect(emojiIds()).toHaveLength(24);
    for (const id of RETIRED) expect(emojiIds()).not.toContain(id);
  });
  it('every minion has a 16px picture, an 8px emblem and its own call', () => {
    for (const id of emojiIds()) {
      expect(minionArt(id).size).toBe(16);
      expect(emojiArt(id).size).toBe(8);
      expect(CALL_IDS).toContain(id);
    }
    expect([...CALL_IDS].sort()).toEqual([...emojiIds()].sort());
  });
  it('a retired minion in a saved game shows and sounds as its stand-in', () => {
    for (const id of RETIRED) {
      const now = liveEmoji(id);
      expect(emojiIds()).toContain(now);
      expect(emojiInfo(id).id).toBe(now);
      expect(minionArt(id)).toBe(minionArt(now));
    }
    const state = { players: { 0: { emoji: 'santa' }, 1: {} } };
    expect(seatEmoji(state, 0)).toBe('scarecrow');
    expect(emojiIds()).toContain(seatEmoji(state, 1));
  });
});
