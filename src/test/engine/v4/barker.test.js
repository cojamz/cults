// @vitest-environment node
// Barker (REPLACE14=barker, Cory Nov 4: "White should definitely have a member that gives an extra buy each turn ...
// limit the bonus recruit to followers"): "Each turn, you may recruit followers one extra time." In Landlord's place.
import { describe, it, expect } from 'vitest';

const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant, defById } = await import('../../../engine/v4/content/index.js');
const { table, uidIn } = await import('./cards-helpers-b.js');
const { useRetired } = await import('./helpers.js');
useRetired(['red.turnout']);

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const slot = (s, q, name) => `${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
const payAll = s => { while (s.pending && s.pending.kind !== 'buy' && s.pending.player === 0 && s.pending.kind !== 'place') s = answer(s, s.pending.options[0].id); return s; };

describe('Barker', () => {
  it("is dealt in Landlord's place, with Cory's words", () => {
    expect(defById('trading.barker').text).toBe('Each time you recruit a member, you may also recruit followers.');
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
  // Spree gives no extra buys since Nov 10 (two discard pile recruits now, then the turn's own), so the extra recruits
  // come from Big Spender ("Once per round: recruit twice in one turn")
  it('stacks with an extra recruit: each member recruited brings its own followers recruit', () => {
    let s = table(['red', 'trading'], { n: 2, round: 3, res: [{ red: 30, white: 30 }], members: [['trading.barker', 'benders.bigspender1']],
      shop: ['red.recruiter', 'trading.martyr', 'trading.cashier'] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    let followerSteps = 0;
    for (const def of ['red.recruiter', 'trading.martyr']) {
      while (s.pending && s.pending.player === 0 && s.pending.kind !== 'buy') s = answer(s, s.pending.options[0].id);
      s = payAll(answer(s, `card:${uidIn(s, def, 'shop')}`));
      expect(s.pending.prompt).toContain('recruit followers again (Barker)');
      followerSteps += 1;
      s = payAll(answer(s, 'tier:small'));
    }
    expect(followerSteps).toBe(2);
    expect(s.log.join('\n').match(/P1 uses Barker\./g).length).toBe(2);
  });
  it('passing on the followers recruit keeps the extra recruit', () => {
    let s = table(['red', 'trading'], { n: 2, round: 3, res: [{ red: 30, white: 30 }], members: [['trading.barker', 'benders.bigspender1']],
      shop: ['red.recruiter', 'trading.martyr'] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    s = payAll(answer(s, `card:${uidIn(s, 'red.recruiter', 'shop')}`));
    s = answer(s, 'pass');
    expect(s.pending.kind).toBe('buy');
    expect(s.pending.options.some(o => o.kind === 'card')).toBe(true);
  });
  it('without Barker there is no second recruit', () => {
    let s = table(['red', 'trading'], { n: 2, round: 2, res: [{ red: 9, white: 9 }] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    s = payAll(answer(s, 'tier:small'));
    expect(!!(s.pending && s.pending.player === 0 && s.pending.kind === 'buy' && s.pending.options.some(o => o.kind === 'tier'))).toBe(false);
  });
  // Cory, Nov 4: "it should stack with blue actions". Spree recruits two from the discard pile on the space (Nov 10):
  // each of them brings Barker's followers recruit right after it, then the turn's own recruit follows
  it('stacks with Spree: each discard pile recruit brings its own followers recruit', () => {
    let s = table(['market', 'trading'], { n: 2, round: 3, res: [{ blue: 30, white: 30 }], members: [['trading.barker']] });
    for (const k of [0, 1]) (s.discard ||= []).push(s.pile.splice(k, 1)[0]);
    s = answer(s, `slot:${slot(s, 'market', 'Spree')}`);
    const first = o => o.id !== 'none' && o.id !== 'pass' && o.id !== 'back';
    let followerSteps = 0;
    for (let i = 0; i < 2; i++) {
      expect(s.pending.prompt).toContain('Spree: recruit which member from the discard pile');
      s = answer(s, s.pending.options.find(first).id); // the member
      s = answer(s, s.pending.options.find(first).id); // how to pay
      expect(s.pending.kind).toBe('buy');
      expect(s.pending.prompt).toContain('recruit followers again (Barker)');
      followerSteps += 1;
      s = answer(s, 'tier:small');
      s = answer(s, s.pending.options.find(first).id); // pay for the follower
    }
    expect(followerSteps).toBe(2);
    expect(s.log.join('\n').match(/P1 uses Barker\./g).length).toBe(2);
    // the turn's own recruit is still there
    expect(s.pending.kind).toBe('buy');
    expect(s.pending.options.some(o => o.kind === 'tier')).toBe(true);
  });
});
