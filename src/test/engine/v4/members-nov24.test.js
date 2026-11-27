// @vitest-environment node
// Cory, 2026-11-24 7:53pm Eastern: Dabblers becomes Jester, Dusk Buyer recruits from the discard pile, Gleaner replaces
// Stallholder, Day Laborer is cut, Tax Men replaces Bandit (design/decisions.md).
import { describe, it, expect } from 'vitest';
import { applyMove, countMembersOfColor, resume } from '../../../engine/v4/core.js';
import { defById } from '../../../engine/v4/content/index.js';
import { CUT } from '../../../engine/v4/content/cull.js';
import { table, named, owns } from './cards-helpers-b.js';

const paying = s => s.pending?.kind === 'pay' || s.pending?.options?.[0]?.kind === 'pay';
const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const uidIn = (s, def) => Object.keys(s.cards).map(Number).find(u => s.cards[u].def === def);
const toDiscardPile = (s, def) => { const u = s.pile.find(x => s.cards[x].def === def); s.pile = s.pile.filter(x => x !== u); (s.discard ||= []).push(u); return u; };

describe('Jester: "Counts as a member of every color."', () => {
  it('counts 1 in every color, worth 1 follower', () => {
    const d = defById('benders.dabblers');
    expect([d.name, d.text, d.n, d.f]).toEqual(['Jester', 'Counts as a member of every color.', 1, 1]);
    const s = table(['red', 'purple', 'market', 'trading'], { n: 2, members: [['benders.dabblers', 'red.volunteer']] });
    expect(countMembersOfColor(s, s.players[0], 'red')).toBe(2);
    expect(countMembersOfColor(s, s.players[0], 'purple')).toBe(1);
  });
});

describe('Day Laborer is cut', () => {
  it('in the cut list, never dealt', () => {
    expect(CUT.has('purple.extrashift')).toBe(true);
    const s = table(['red', 'purple', 'market', 'trading'], { n: 4, rules: { cull: true } });
    expect(Object.values(s.cards).some(c => c.def === 'purple.extrashift')).toBe(false);
  });
});

// set up a table, put members on the discard pile, then run `queue`
const at = (quads, opts, discard, queue) => {
  const s = table(quads, { ...opts, queue: [] });
  s.pending = null;
  const uids = discard.map(def => { const u = s.pile.find(x => s.cards[x].def === def); s.pile = s.pile.filter(x => x !== u); (s.discard ||= []).push(u); return u; });
  s.queue = queue;
  return [resume(s), uids];
};

describe('Dusk Buyer: "Round End: +3 blue, then you may recruit from the discard pile."', () => {
  const Q4 = ['red', 'market', 'purple', 'silver'];
  it('+3 blue, then offers only discard-pile members, and the recruit pays its cost', () => {
    let [s, [v]] = at(Q4, { n: 2, round: 1, res: [{ red: 9 }], members: [['market.lastminute']], shop: ['red.bodysnatchers'] }, ['red.volunteer'], [{ t: 'allPlaced' }]);
    expect(named(s, 'Dusk Buyer')).toContain("P1's Dusk Buyer: +3 blue.");
    expect(s.pending.prompt).toMatch(/^Dusk Buyer: recruit which member from the discard pile/);
    const ids = s.pending.options.map(o => o.id);
    expect(ids).toEqual([`card:${v}`, 'none']); // the shop's Body Snatchers is not offered
    s = answer(s, `card:${v}`);
    while (paying(s)) s = answer(s, s.pending.options[0].id);
    expect(owns(s, 0, 'red.volunteer')).toBe(true);
    expect(s.discard || []).not.toContain(v);
    expect(s.players[0].res.red + s.players[0].res.blue).toBe(9 + 3 - 3);
  });
  it('an empty discard pile: the blue only', () => {
    const [s] = at(Q4, { n: 2, round: 1, members: [['market.lastminute']] }, [], [{ t: 'allPlaced' }]);
    expect(s.players[0].res.blue).toBe(3);
    expect(named(s, 'Dusk Buyer')).toContain("P1's Dusk Buyer: the discard pile is empty.");
  });
});

describe('Gleaner: "You may recruit from the discard pile as you would from the shop."', () => {
  const Q4 = ['red', 'market', 'purple', 'silver'];
  it('discard-pile members are in the recruit choices, and recruiting one takes it off the pile', () => {
    let [s, [v]] = at(Q4, { n: 2, round: 2, res: [{ red: 20 }], members: [['market.mannequin']], shop: ['red.bodysnatchers'] }, ['red.volunteer'], [{ t: 'buy', p: 0 }]);
    const o = s.pending.options.find(x => x.id === `card:${v}`);
    expect(o?.label).toMatch(/\(discard pile\)$/);
    s = answer(s, o.id);
    while (paying(s)) s = answer(s, s.pending.options[0].id);
    expect(owns(s, 0, 'red.volunteer')).toBe(true);
    expect(s.discard || []).not.toContain(v);
    expect(s.log.join('\n')).toMatch(/from the discard pile with P1's Gleaner/);
  });
  it('without Gleaner the discard pile is not offered', () => {
    const [s, [v]] = at(Q4, { n: 2, round: 2, res: [{ red: 20 }], members: [['red.volunteer']] }, ['red.bodysnatchers'], [{ t: 'buy', p: 0 }]);
    expect(s.pending.options.some(x => x.id === `card:${v}`)).toBe(false);
  });
});

describe('Tax Men: "Whenever a rival recruits a member costing 7 or more, they give you 2 resources of their choice."', () => {
  const Q4 = ['red', 'thieves', 'purple', 'silver'];
  const cost = s => u => { const d = defById(s.cards[u].def); return (d.s || 0) + (d.w || 0); };
  it('a rival recruits a dear member: the rival picks 2 colors, one at a time, and pays them to the owner', () => {
    let s = table(Q4, { n: 2, round: 3, res: [{}, { red: 30, purple: 3 }], members: [['thieves.accomplice'], []], shop: ['red.bodysnatchers', 'red.volunteer'], queue: [{ t: 'buy', p: 1 }] });
    const dear = s.pending.options.find(o => o.kind === 'card' && o.uid !== undefined && cost(s)(o.uid) >= 7 && !o.fromPile);
    expect(dear).toBeDefined();
    s = answer(s, dear.id);
    while (paying(s)) s = answer(s, s.pending.options[0].id);
    expect(s.pending.player).toBe(1);
    const before = { ...s.players[1].res };
    s = answer(s, s.pending.options[0].id);
    s = answer(s, s.pending.options[0].id);
    const gave = Object.values(before).reduce((a, b) => a + b, 0) - Object.values(s.players[1].res).reduce((a, b) => a + b, 0);
    expect(gave).toBe(2);
    expect(Object.values(s.players[0].res).reduce((a, b) => a + b, 0)).toBe(2);
    expect(named(s, 'Tax Men').length).toBe(2);
  });
  it('a cheap recruit, or the owner\'s own recruit, pays nothing', () => {
    let s = table(Q4, { n: 2, round: 1, res: [{ red: 30 }, { red: 30 }], members: [['thieves.accomplice'], []], shop: ['red.bodysnatchers', 'red.volunteer'], queue: [{ t: 'buy', p: 1 }] });
    const cheap = s.pending.options.find(o => o.kind === 'card' && o.uid !== undefined && cost(s)(o.uid) < 7);
    if (cheap) { s = answer(s, cheap.id); while (paying(s)) s = answer(s, s.pending.options[0].id); expect(named(s, 'Tax Men')).toEqual([]); }
    let t = table(Q4, { n: 2, round: 3, res: [{ red: 30, purple: 3 }], members: [['thieves.accomplice'], []], shop: ['red.bodysnatchers', 'red.volunteer'], queue: [{ t: 'buy', p: 0 }] });
    const dear = t.pending.options.find(o => o.kind === 'card' && o.uid !== undefined && cost(t)(o.uid) >= 7);
    t = answer(t, dear.id); while (paying(t)) t = answer(t, t.pending.options[0].id);
    expect(named(t, 'Tax Men')).toEqual([]);
  });
});
