// @vitest-environment node
// Doormen (Cory, Nov 1 3:21pm, picked 1): "On Use, once per round: send a rival's member to the bottom of the pile.
// Give them a shop member costing up to 2 more." The owner picks; given, not recruited, so no On Recruit fires.
import { describe, it, expect } from 'vitest';
import { move } from './helpers.js';
import { table, uidIn, owns } from './cards-helpers-b.js';
import { chooseBotMove } from '../../../engine/v4/index.js';

const Q = ['market', 'red', 'gold', 'purple'];
const buy = () => ({ queue: [{ t: 'buy', p: 0 }, { t: 'turn', p: 1 }] });
const ids = s => (s.pending?.options || []).map(o => o.id);

describe('Doormen', () => {
  it('sends a rival member to the bottom and gives them a shop member costing up to 2 more, once per round', () => {
    let s = table(Q, { members: [['market.doorman'], ['red.bigfamily']], shop: ['red.intern', 'gold.tycoon', 'red.host'], ...buy() });
    const door = uidIn(s, 'market.doorman', 0);
    s = move(s, `use:${door}`);
    expect(s.pending.kind).toBe('choose');
    const fam = uidIn(s, 'red.bigfamily', 1), intern = uidIn(s, 'red.intern', 'shop'), tycoon = uidIn(s, 'gold.tycoon', 'shop');
    expect(ids(s)).toContain(`trade:${fam}:${intern}`);
    const pileLen = s.pile.length;
    s = move(s, `trade:${fam}:${intern}`);
    expect(owns(s, 1, 'red.intern')).toBe(true);
    expect(owns(s, 1, 'red.bigfamily')).toBe(false);
    expect(s.pile.at(-1)).toBe(fam);
    expect(s.shop).toContain(tycoon);
    expect(s.log.join('\n')).toMatch(/P1's Doormen: sends P2's Big Family to the bottom of the pile and gives P2 Intern\./);
    expect(ids(s)).not.toContain(`use:${door}`);
  });

  it('only shop members costing up to 2 more than the sent member', () => {
    const s0 = table(Q, { members: [['market.doorman'], ['red.volunteer']], shop: ['red.intern', 'red.bigfamily'], ...buy() });
    const s = move(s0, `use:${uidIn(s0, 'market.doorman', 0)}`);
    const vol = uidIn(s, 'red.volunteer', 1);
    expect(ids(s)).toContain(`trade:${vol}:${uidIn(s, 'red.intern', 'shop')}`);
    expect(ids(s)).not.toContain(`trade:${vol}:${uidIn(s, 'red.bigfamily', 'shop')}`);
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
    let s = table(Q, { members: [['market.doorman'], ['red.bigfamily']], shop: ['red.intern'], ...buy() });
    const art = Math.max(...Object.keys(s.cards).map(Number)) + 1;
    s.cards[art] = { uid: art, def: 'market.bargainbin' }; s.players[0].artifact = art;
    const b0 = s.players[0].res.blue;
    s = move(s, `use:${uidIn(s, 'market.doorman', 0)}`);
    s = move(s, `trade:${uidIn(s, 'red.bigfamily', 1)}:${uidIn(s, 'red.intern', 'shop')}`);
    expect(s.players[0].res.blue - b0).toBe(1);
    expect(s.log.join('\n')).toMatch(/P1's Bargain Bin: \+1 blue/);
  });
});

describe('bots and the swap card', () => {
  it('a Normal bot takes a free swap for a much better member when it can afford nothing', () => {
    const s = table(['red', 'gold', 'purple', 'echo'], { rules: { swapCard: true }, members: [['red.volunteer'], ['red.twins']], shop: [], ...buy() });
    s.players[0].res = Object.fromEntries(Object.keys(s.players[0].res).map(r => [r, 0]));
    expect(s.pending.kind).toBe('buy');
    const mv = chooseBotMove(s, () => 0.5, { level: 'normal' });
    expect(mv.option).toBe('swapcard');
  });
});
