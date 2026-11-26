// @vitest-environment node
// Rabble-Rousers (Red, Cory Nov 26 9:37pm: yes to Turncoat, worth 3, named for stirring a rival's member to switch).
import { describe, it, expect } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';
import { table, uidIn } from './cards-helpers-b.js';
import { move } from './helpers.js';

const Q = ['red', 'market', 'yellow', 'thieves'];

describe('Rabble-Rousers', () => {
  it('prints the text, worth 3 and counts as 3', () => {
    const d = defById('red.rabblerousers');
    expect(d.text).toBe('On Use, once per round: swap this member for a rival’s member.');
    expect([d.f, d.n]).toEqual([3, 3]);
  });
  it('the rival member joins you, the Rabble-Rousers go to the rival and stay used this round', () => {
    let s = table(Q, { n: 2, round: 2, members: [['red.rabblerousers'], ['thieves.doubleagent']], queue: [{ t: 'buy', p: 0 }] });
    const r = uidIn(s, 'red.rabblerousers', 0), t = uidIn(s, 'thieves.doubleagent', 1);
    s = move(s, `use:${r}`);
    s = move(s, `card:${t}`);
    expect(s.players[0].members).toContain(t);
    expect(s.players[0].members).not.toContain(r);
    expect(s.players[1].members).toContain(r);
    expect(s.cards[r].used).toBe(true);
    expect(s.log.some(l => String(l.text || l).includes('Rabble-Rousers stir up'))).toBe(true);
  });
  it('Warden keeps the rival’s other members out of reach', () => {
    const s0 = table(Q, { n: 2, round: 2, members: [['red.rabblerousers'], ['red.loyalists', 'thieves.doubleagent']], queue: [{ t: 'buy', p: 0 }] });
    const r = uidIn(s0, 'red.rabblerousers', 0), t = uidIn(s0, 'thieves.doubleagent', 1), w = uidIn(s0, 'red.loyalists', 1);
    const s = move(s0, `use:${r}`);
    const ids = s.pending.options.map(o => o.value);
    expect(ids).not.toContain(t);
    expect(ids).toContain(w);
  });
});

describe('Go-Between and Rummager (Cory, Nov 26)', () => {
  it('Go-Between: recruits a rival member, paying that rival', () => {
    let s = table(Q, { n: 2, round: 2, members: [['market.gobetween'], ['thieves.doubleagent']], res: [{ magenta: 10, red: 10 }, {}], queue: [{ t: 'buy', p: 0 }] });
    const g = uidIn(s, 'market.gobetween', 0), t = uidIn(s, 'thieves.doubleagent', 1);
    const before = Object.values(s.players[1].res).reduce((a, b) => a + b, 0);
    s = move(s, `use:${g}`);
    s = move(s, `card:${t}`);
    while (s.pending?.kind === 'choose' && s.pending.prompt.startsWith('Go-Between: how')) s = move(s, s.pending.options[0].id);
    expect(s.players[0].members).toContain(t);
    const after = Object.values(s.players[1].res).reduce((a, b) => a + b, 0);
    expect(after - before).toBe(defById('thieves.doubleagent').s + defById('thieves.doubleagent').w);
    expect(defById('market.gobetween').text).toBe('On Use, once per round: recruit a rival’s member, paying its cost to that rival.');
  });
  it('Rummager: +1 of each color', () => {
    let s = table(Q, { n: 2, round: 2, members: [['thieves.rummager'], []], queue: [{ t: 'buy', p: 0 }] });
    const r = uidIn(s, 'thieves.rummager', 0);
    s = move(s, `use:${r}`);
    for (const c of s.resources) expect(s.players[0].res[c]).toBe(1);
  });
});
