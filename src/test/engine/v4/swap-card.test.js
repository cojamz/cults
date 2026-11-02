// @vitest-environment node
// The swap card, a table setting (Cory, Nov 1 3:01pm: "add it as a setting, let's try it!"), off by default: "As your
// recruit: swap one of your members with a shop or rival member costing up to 2 more or less." It costs 2 resources in any colors (Cory, Nov 1 8:25pm: "cost 2 wild").
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

  it('as your recruit: one of your members for a shop or rival member within 2 cost; Back returns to the buy (free when a sim sets the price to 0)', () => {
    let s = table(Q, { rules: { swapCard: true, swapCardCost: 0 }, members: [['red.twins'], ['red.volunteer']], shop: ['red.intern', 'gold.tycoon'], ...buy() });
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

  it('costs 2 resources in any colors: a pay step after the pair, Back to the pairs, and no swap card with fewer than 2', () => {
    const none = table(Q, { rules: { swapCard: true }, res: [{ red: 1 }], members: [['red.twins'], ['red.volunteer']], shop: ['red.intern'], ...buy() });
    expect(ids(none)).not.toContain('swapcard');
    let s = table(Q, { rules: { swapCard: true }, res: [{ red: 3, gold: 1 }], members: [['red.twins'], ['red.volunteer']], shop: ['red.intern'], ...buy() });
    s = move(s, 'swapcard');
    const twins = uidIn(s, 'red.twins', 0), vol = uidIn(s, 'red.volunteer', 1);
    s = move(s, `trade:${twins}:${vol}`, { manualPay: true });
    expect(s.pending.kind).toBe('pay');
    expect(s.pending.swap).toEqual([twins, vol]);
    const pays = s.pending.options.filter(o => o.kind === 'pay');
    expect(pays.every(o => Object.values(o.spend).reduce((a, b) => a + b, 0) === 2)).toBe(true);
    expect(pays.map(o => o.label)).toEqual(expect.arrayContaining([expect.stringMatching(/red/)]));
    expect(move(s, 'back', { manualPay: true }).pending.prompt).toMatch(/swap card/);
    const way = pays.find(o => o.spend.red === 1 && o.spend.gold === 1);
    s = move(s, way.id);
    expect(owns(s, 0, 'red.volunteer')).toBe(true);
    expect([s.players[0].res.red, s.players[0].res.gold]).toEqual([2, 0]);
    expect(s.log.at(-1)).toMatch(/used the swap card \(paid 1 red, 1 gold\): swapped P1's Triplets and P2's Volunteer/);
  });
});
