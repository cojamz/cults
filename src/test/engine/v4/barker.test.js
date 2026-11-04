// @vitest-environment node
// Barker (REPLACE14=barker, Cory Nov 4: "White should definitely have a member that gives an extra buy each turn ...
// limit the bonus recruit to followers"): "Each turn, you may recruit followers one extra time." In Landlord's place.
import { describe, it, expect } from 'vitest';

const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant, defById } = await import('../../../engine/v4/content/index.js');
const { table, uidIn } = await import('./cards-helpers-b.js');

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const slot = (s, q, name) => `${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
const payAll = s => { while (s.pending && s.pending.kind !== 'buy' && s.pending.player === 0 && s.pending.kind !== 'place') s = answer(s, s.pending.options[0].id); return s; };

describe('Barker', () => {
  it("is dealt in Landlord's place, with Cory's words", () => {
    expect(defById('trading.barker').text).toBe('You may recruit followers even after you recruit a member.');
    expect(defById('trading.shopkeeper').retired).toBe(true);
  });
  it('after recruiting a member, the owner may also recruit followers, and only followers', () => {
    let s = table(['red', 'trading'], { n: 2, round: 2, res: [{ red: 9, white: 9 }], members: [['trading.barker']], shop: ['red.recruiter', 'trading.cashier'] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    s = payAll(answer(s, `card:${uidIn(s, 'red.recruiter', 'shop')}`));
    expect(s.pending.kind).toBe('buy');
    expect(s.pending.prompt).toContain('recruit followers again (Barker)');
    const kinds = new Set(s.pending.options.map(o => o.kind));
    expect([...kinds].sort()).toEqual(['pass', 'tier']);
    const before = s.players[0].bonus;
    s = payAll(answer(s, 'tier:small'));
    expect(s.players[0].bonus).toBe(before + 1);
    expect(s.log.join('\n')).toContain('P1 uses Barker.');
  });
  it('after buying followers first, there is no second recruit (the extra is for after a member)', () => {
    let s = table(['red', 'trading'], { n: 2, round: 2, res: [{ red: 9, white: 9 }], members: [['trading.barker']] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    s = payAll(answer(s, 'tier:small'));
    expect(!!(s.pending && s.pending.player === 0 && s.pending.kind === 'buy' && s.pending.options.some(o => o.kind === 'tier'))).toBe(false);
  });
  it('without Barker there is no second recruit', () => {
    let s = table(['red', 'trading'], { n: 2, round: 2, res: [{ red: 9, white: 9 }] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    s = payAll(answer(s, 'tier:small'));
    expect(!!(s.pending && s.pending.player === 0 && s.pending.kind === 'buy' && s.pending.options.some(o => o.kind === 'tier'))).toBe(false);
  });
});
