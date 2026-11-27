import { describe, it, expect } from 'vitest';
import { foldLines } from '../../../v4/game/SinceStrip.jsx';

// turnstory t2, Nov 12 (1270x700, your turn with three rival lines above it): the fold counted the "Your turn" label as a
// line, ran one past the moves it could drop and gave up, so three rival lines sat hidden over the top with no
// "N earlier" and the label showed cut in half
const el = cls => ({ classList: { contains: c => cls.split(' ').includes(c) }, previousElementSibling: null });
const list = (...cls) => { const kids = cls.map(el); kids.forEach((k, i) => { k.previousElementSibling = kids[i - 1] || null; }); return kids; };

describe('since strip fold: one line per move', () => {
  it('leaves the "Your turn" label out of the lines and measures your row from it', () => {
    const kids = list('since-row', 'since-row', 'since-row', 'since-own-label', 'since-row since-full');
    const { moreEl, rows, head } = foldLines(kids);
    expect(moreEl).toBe(null);
    expect(rows).toEqual([kids[0], kids[1], kids[2], kids[4]]);
    expect(head(kids[4])).toBe(kids[3]);
    expect(head(kids[1])).toBe(kids[1]);
  });
  it('keeps the "N earlier" line apart', () => {
    const kids = list('since-more', 'since-row', 'since-own-label', 'since-row since-full');
    const { moreEl, rows, head } = foldLines(kids);
    expect(moreEl).toBe(kids[0]);
    expect(rows).toEqual([kids[1], kids[3]]);
    expect(head(kids[1])).toBe(kids[1]);
    expect(head(kids[3])).toBe(kids[2]);
  });
  it('rival lines alone are each a line', () => {
    const kids = list('since-row', 'since-row since-full');
    expect(foldLines(kids).rows).toEqual(kids);
  });
});
