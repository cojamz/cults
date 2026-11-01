// @vitest-environment node
// The swap card, a table setting (Cory, Nov 1 3:01pm: "add it as a setting, let's try it!"), off by default: "As your
// recruit: swap one of your members with a shop or rival member costing up to 2 more or less." Free.
import { describe, it, expect } from 'vitest';
import { DEFAULT_RULES } from '../../../engine/v4/core.js';
import { move } from './helpers.js';
import { table, uidIn, owns } from './cards-helpers-b.js';

const Q = ['red', 'gold', 'purple', 'echo'];
const buy = () => ({ queue: [{ t: 'buy', p: 0 }, { t: 'turn', p: 1 }] });
const ids = s => (s.pending?.options || []).map(o => o.id);

describe('the swap card', () => {
  it('is off unless the table turns it on', () => {
    expect(DEFAULT_RULES.swapCard).toBe(false);
    const s = table(Q, { members: [['red.twins']], shop: ['red.bigfamily', 'red.intern'], ...buy() });
    expect(ids(s)).not.toContain('swapcard');
  });

  it('as your recruit: one of your members for a shop or rival member within 2 cost, free; Back returns to the buy', () => {
    let s = table(Q, { rules: { swapCard: true }, members: [['red.twins'], ['red.volunteer']], shop: ['red.intern', 'gold.tycoon'], ...buy() });
    expect(ids(s)).toContain('swapcard');
    s = move(s, 'swapcard');
    expect(s.pending.kind).toBe('choose');
    const twins = uidIn(s, 'red.twins', 0), fam = uidIn(s, 'red.volunteer', 1), tycoon = uidIn(s, 'gold.tycoon', 'shop');
    expect(ids(s)).toContain(`trade:${twins}:${fam}`);
    expect(ids(s)).not.toContain(`trade:${twins}:${tycoon}`); // more than 2 apart
    const back = move(s, 'back');
    expect(back.pending.kind).toBe('buy');
    const res0 = { ...s.players[0].res };
    s = move(s, `trade:${twins}:${fam}`);
    expect(owns(s, 0, 'red.volunteer')).toBe(true);
    expect(owns(s, 1, 'red.twins')).toBe(true);
    expect(s.players[0].res).toEqual(res0);
    expect(s.log.at(-1)).toMatch(/used the swap card: swapped P1's Triplets and P2's Volunteer/);
  });
});
