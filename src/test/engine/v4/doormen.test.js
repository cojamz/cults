// @vitest-environment node
// Doormen (Cory, Nov 1 3:21pm, picked 1): "On Use, once per round: send a rival's member to the bottom of the pile.
// Give them a shop member costing up to 2 more." Range since Nov 2: "costing at most 2 less" (a 6 → 4 and anything
// above; Cory: "at least 2 less. so a demote at worst", "4 and anything above"). The owner picks; given, not recruited, so no On Recruit fires.
import { describe, it, expect } from 'vitest';
import { move } from './helpers.js';
import { table, uidIn, owns } from './cards-helpers-b.js';
import { chooseBotMove, applyMove } from '../../../engine/v4/index.js';

const Q = ['market', 'red', 'gold', 'purple'];
const buy = () => ({ queue: [{ t: 'buy', p: 0 }, { t: 'turn', p: 1 }] });
const ids = s => (s.pending?.options || []).map(o => o.id);

describe('Doormen', () => {
  it('sends a rival member to the bottom and gives them a shop member costing at most 2 less, once per round', () => {
    let s = table(Q, { members: [['market.doorman'], ['red.bigfamily']], shop: ['red.intern', 'gold.tycoon', 'red.host'], ...buy() });
    const door = uidIn(s, 'market.doorman', 0);
    s = move(s, `use:${door}`);
    expect(s.pending.kind).toBe('choose');
    const fam = uidIn(s, 'red.bigfamily', 1), intern = uidIn(s, 'red.intern', 'shop'), host = uidIn(s, 'red.host', 'shop'), tycoon = uidIn(s, 'gold.tycoon', 'shop');
    expect(ids(s)).toContain(`trade:${fam}:${host}`);
    expect(ids(s)).not.toContain(`trade:${fam}:${intern}`); // 7 → 3 is more than 2 less
    s = move(s, `trade:${fam}:${host}`);
    expect(owns(s, 1, 'red.host')).toBe(true);
    expect(owns(s, 1, 'red.bigfamily')).toBe(false);
    expect(s.pile.at(-1)).toBe(fam);
    expect(s.shop).toContain(tycoon);
    expect(s.log.join('\n')).toMatch(/P1's Doormen: sends P2's Big Family to the bottom of the pile and gives P2 Host\./);
    expect(ids(s)).not.toContain(`use:${door}`);
  });

  it('only shop members costing at most 2 less than the sent member; anything above is fine', () => {
    const s0 = table(Q, { members: [['market.doorman'], ['red.volunteer', 'red.bigfamily']], shop: ['red.intern', 'gold.tycoon'], ...buy() });
    const s = move(s0, `use:${uidIn(s0, 'market.doorman', 0)}`);
    const vol = uidIn(s, 'red.volunteer', 1), fam = uidIn(s, 'red.bigfamily', 1), intern = uidIn(s, 'red.intern', 'shop'), tycoon = uidIn(s, 'gold.tycoon', 'shop');
    expect(ids(s)).toContain(`trade:${vol}:${intern}`); // 2 → 3
    expect(ids(s)).toContain(`trade:${vol}:${tycoon}`); // 2 → 8: no ceiling
    expect(ids(s)).toContain(`trade:${fam}:${tycoon}`); // 7 → 8
    expect(ids(s)).not.toContain(`trade:${fam}:${intern}`); // 7 → 3: 4 less
  });

  it('the rival is given the member: its On Recruit does not fire', () => {
    let s = table(Q, { members: [['market.doorman'], ['red.bigfamily']], shop: ['red.host'], ...buy() });
    s = move(s, `use:${uidIn(s, 'market.doorman', 0)}`);
    const red0 = s.players[1].res.red;
    s = move(s, `trade:${uidIn(s, 'red.bigfamily', 1)}:${uidIn(s, 'red.host', 'shop')}`);
    expect(owns(s, 1, 'red.host')).toBe(true);
    expect(s.players[1].res.red).toBe(red0);
  });
});

describe('Bargain Bin', () => {
  // Cory, Nov 1: "changes to B when any member goes to the bottom of the pile": a cult's member counts too
  it('pays +1 blue when Doormen sends a rival member to the bottom', () => {
    let s = table(Q, { members: [['market.doorman'], ['red.bigfamily']], shop: ['red.host'], ...buy() });
    const art = Math.max(...Object.keys(s.cards).map(Number)) + 1;
    s.cards[art] = { uid: art, def: 'market.bargainbin' }; s.players[0].artifact = art;
    const b0 = s.players[0].res.blue;
    s = move(s, `use:${uidIn(s, 'market.doorman', 0)}`);
    s = move(s, `trade:${uidIn(s, 'red.bigfamily', 1)}:${uidIn(s, 'red.host', 'shop')}`);
    expect(s.players[0].res.blue - b0).toBe(1);
    expect(s.log.join('\n')).toMatch(/P1's Bargain Bin: \+1 blue/);
  });
});

describe('bots and the swap card', () => {
  it('a Normal bot takes a free swap for a much better member when it can afford nothing (a sim at price 0)', () => {
    const s = table(['red', 'gold', 'purple', 'echo'], { rules: { swapCard: true, swapCardCost: 0 }, members: [['red.volunteer'], ['red.twins']], shop: [], ...buy() });
    s.players[0].res = Object.fromEntries(Object.keys(s.players[0].res).map(r => [r, 0]));
    expect(chooseBotMove(s, () => 0.5, { level: 'normal' }).option).toBe('swapcard');
  });

  it('at the price of 2 (Cory, Nov 1 8:25pm: "cost 2 wild") a bot on the swap card picks a pair and pays the 2', () => {
    const s = table(['red', 'gold', 'purple', 'echo'], { rules: { swapCard: true }, res: [{ red: 0, gold: 2, purple: 0, green: 0 }], members: [['red.volunteer'], ['red.twins']], shop: [], ...buy() });
    let t = applyMove(s, { player: 0, option: 'swapcard' });
    t = applyMove(t, chooseBotMove(t, () => 0.5, { level: 'normal' }));
    expect(t.pending.kind).toBe('pay');
    t = applyMove(t, chooseBotMove(t, () => 0.5, { level: 'normal' }));
    expect(t.players[0].res.gold).toBe(0);
    expect(t.players[0].members.some(u => t.cards[u].def === 'red.twins')).toBe(true);
  });
});
