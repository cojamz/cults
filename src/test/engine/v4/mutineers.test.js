// Mutineers (Cory, Nov 12: "maybe we should just make it any? lets try it"):
// "On Use, once per game: take a member from a rival with more members than you."
import { describe, it, expect } from 'vitest';
import { createGame, resume, applyMove } from '../../../engine/v4/core.js';
import { stray } from './stray.js';
import { defById } from '../../../engine/v4/content/index.js';

const names = (s, i) => s.players[i].members.map(u => defById(s.cards[u].def).name);
function scene({ quads = ['red', 'yellow', 'market', 'trading'], n = 3, round = 2, members = [], queue }) {
  const s = createGame({ seats: Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed: 7, quadrants: quads });
  Object.assign(s, { queue: [], pending: null, round, slots: {}, order: [], log: [] });
  delete s.echo;
  s.players.forEach(p => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); p.bonus = 0; p.discount = 0; p.left = 5; });
  s.pile = [...s.shop, ...s.pile]; s.shop = [];
  const grab = def => { const k = s.pile.findIndex(u => s.cards[u].def === def); return k < 0 ? stray(s, def) : s.pile.splice(k, 1)[0]; };
  members.forEach((list, i) => { for (const d of list) { const u = grab(d); s.players[i].members.push(u); s.cards[u].recruitedRound = 0; s.cards[u].recruitedBy = i; } });
  s.queue = queue || [{ t: 'buy', p: 0 }];
  return resume(s);
}
const pick = (s, re) => applyMove(s, { player: s.pending.player, option: s.pending.options.find(o => re.test(o.id) || re.test(o.label || '')).id });
const useId = s => s.pending.options.find(o => /^use:/.test(o.id))?.id;

describe('Mutineers: "On Use, once per game: take a member from a rival with more members than you."', () => {
  it('is dealt in the game (test version) and costs 6, round II', () => {
    const d = defById('benders.mutineers');
    expect(d.s + d.w).toBe(6);
    expect(d.round).toBe(2);
  });

  it('takes any member, at any cost, only from rivals with more members than you', () => {
    let s = scene({ members: [['benders.mutineers'], ['red.intern', 'red.twins', 'silver.patronsaints'], ['red.intern']] });
    expect(useId(s)).toBeTruthy();
    s = applyMove(s, { player: 0, option: useId(s) });
    expect(s.pending.prompt).toBe('Mutineers: take which member?');
    const labels = s.pending.options.map(o => o.label);
    expect(labels.every(l => l.startsWith("P2's"))).toBe(true); // P3 has fewer members than P1: not offered
    expect(labels.some(l => /Patron Saints \(8\)/.test(l))).toBe(true); // no cost cap
    s = pick(s, /Patron Saints/);
    expect(names(s, 0)).toEqual(['Mutineers', 'Patron Saints']);
    expect(names(s, 1)).not.toContain('Patron Saints');
    expect(s.log).toContain("P1's Mutineers: takes P2's Patron Saints.");
  });

  it('no rival ahead: says so and stays unused', () => {
    let s = scene({ members: [['benders.mutineers', 'red.intern'], ['red.intern'], []] });
    s = applyMove(s, { player: 0, option: useId(s) });
    expect(s.log).toContain("P1's Mutineers: no rival with more members has a member to take.");
    const uid = s.players[0].members.find(u => s.cards[u].def === 'benders.mutineers');
    expect(s.cards[uid].used).toBeFalsy();
  });
});
