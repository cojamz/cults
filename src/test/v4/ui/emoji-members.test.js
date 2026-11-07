// Emoji members (Cory, Nov 3): every emoji entry names a real member, and no two members share an emoji.
import { describe, it, expect } from 'vitest';
import { allQuadrantIds, quadrant, guestMembers } from '../../../engine/v4/content/index.js';
import { spriteId } from '../../../v4/art/index.js';
import { emojiMember, EMOJI_MEMBER_COUNT } from '../../../v4/art/emojiMembers.js';
import * as mod from '../../../v4/art/emojiMembers.js';
import { CUT } from '../../../engine/v4/content/cull.js';
import { ARTIFACTS } from '../../../engine/v4/core.js';

describe('emoji members', () => {
  const names = new Set([...allQuadrantIds().flatMap(q => (quadrant(q).members || []).map(m => spriteId(m.name))), ...guestMembers().map(m => spriteId(m.name))]);
  it('has an entry for the members it lists, each a real member', () => {
    const src = Object.keys(mod).length && EMOJI_MEMBER_COUNT;
    expect(src).toBeGreaterThan(100);
    for (const id of names) { const e = emojiMember(id); if (e) expect(typeof e[0]).toBe('string'); }
    const listed = [...names].filter(id => emojiMember(id));
    expect(listed.length).toBe(EMOJI_MEMBER_COUNT);
  });
  it('gives each member its own emoji', () => {
    const ems = [...names].map(emojiMember).filter(Boolean).map(e => e[0]);
    expect(new Set(ems).size).toBe(ems.length);
  });
  // picky bot, Nov 8: the emoji look showed Downsizers, Patron Saints, Ballroom Dancers and Kingmakers as pictures
  // beside emoji in one shop. Every member a game deals has an emoji (blue and green are placeholder colors).
  it('gives every dealt member an emoji', () => {
    const arts = new Set(Object.values(ARTIFACTS));
    const dealt = [...allQuadrantIds().filter(q => q !== 'blue' && q !== 'green').flatMap(q => quadrant(q).members || []), ...guestMembers()]
      .filter(d => !CUT.has(d.id) && !d.retired && !d.artifact && !arts.has(d.id));
    expect(dealt.filter(d => !emojiMember(spriteId(d.name))).map(d => d.name)).toEqual([]);
  });
});
