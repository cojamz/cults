// @vitest-environment node
// Actions lane r4 batch (Nov 4): Rally (Gather's place), Clearance (Savings'), Patron (Splurge's).
import { describe, it, expect } from 'vitest';

process.env.REPLACE11 = 'rally,clearance,patron';
const { applyMove, memberPrice, followers } = await import('../../../engine/v4/core.js');
const { quadrant } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE11;

const slotOf = (s, qid, name) => `slot:${s.quadrants.indexOf(qid)}-${quadrant(qid).actions.findIndex(a => a.name === name)}`;
const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE11 r4 c', () => {
  it('Rally: +2 red in round I, +1 per rival with more members', () => {
    let s = table(['red', 'echo'], { n: 2, round: 1 });
    const me = s.pending.player;
    s.players[1 - me].members.push(...s.pile.splice(0, 2));
    const r0 = s.players[me].res.red || 0;
    s = answer(s, slotOf(s, 'red', 'Rally'));
    expect(s.players[me].res.red - r0).toBe(3);
  });
  it('Clearance: the cheapest shop member costs nothing this turn', () => {
    let s = table(['market', 'red'], { n: 2, round: 1, shop: ['market.reseller', 'market.stylist'] });
    const me = s.pending.player, p = s.players[me];
    s = answer(s, slotOf(s, 'market', 'Clearance'));
    const cheap = s.shop.reduce((a, u) => { const d = c => { const x = s.cards[c]; return x; }; void d; return a; }, s.shop[0]);
    void cheap;
    const prices = s.shop.map(u => memberPrice(s, s.players[me], u).total);
    expect(Math.min(...prices)).toBe(0);
    void p;
  });
  it('Patron: on the recruit, each rival with more followers gives 1', () => {
    let s = table(['trading', 'red'], { n: 2, round: 1, shop: ['red.volunteer'], res: [{ red: 9, white: 9 }, { red: 9, white: 9 }] });
    const me = s.pending.player;
    s.players[1 - me].bonus += 5;
    const f0 = followers(s, s.players[me]), o0 = followers(s, s.players[1 - me]);
    s = answer(s, slotOf(s, 'trading', 'Patron'));
    const buy = s.pending.options.find(o => o.kind === 'card' || o.id.startsWith('card:') || o.id.startsWith('member:'));
    if (!buy) console.log(JSON.stringify(s.pending.options));
    expect(buy).toBeTruthy();
    s = answer(s, buy.id);
    while (s.pending && s.pending.player === me && s.pending.kind === 'pay') s = answer(s, s.pending.options[0].id);
    expect(s.log.join('\n')).toContain("Patron:");
    expect(followers(s, s.players[1 - me])).toBe(o0 - 1);
    void f0;
  });
});

