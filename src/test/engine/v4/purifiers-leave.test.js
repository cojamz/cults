// @vitest-environment node
// Purifiers, Cory's Nov 11 11:36pm idea (bot test, PURIFIERS=leave): "Whenever this member leaves your cult, each rival
// discards a member. On Use, once per game: discard this member." Runs only with PURIFIERS=leave set.
import { describe, it, expect } from 'vitest';
import { createGame, resume, applyMove } from '../../../engine/v4/core.js';
import { stray } from './stray.js';
import { defById } from '../../../engine/v4/content/index.js';
const ON = globalThis.process?.env?.PURIFIERS === 'leave';
const names = (s, i) => s.players[i].members.map(u => defById(s.cards[u].def).name);
function scene({ quads, n = 4, round = 3, members = [], turns = [0] }) {
  const s = createGame({ seats: Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed: 7, quadrants: quads });
  Object.assign(s, { queue: [], pending: null, round, slots: {}, order: [], log: [] });
  delete s.echo;
  s.players.forEach(p => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); p.bonus = 0; p.discount = 0; p.left = 5; });
  s.pile = [...s.shop, ...s.pile]; s.shop = [];
  const grab = def => { const k = s.pile.findIndex(u => s.cards[u].def === def); if (k < 0) return stray(s, def); return s.pile.splice(k, 1)[0]; };
  members.forEach((list, i) => { for (const d of list || []) { const u = grab(d); s.players[i].members.push(u); s.cards[u].recruitedRound = 0; s.cards[u].recruitedBy = i; } });
  s.queue = turns.map(p => ({ t: 'turn', p }));
  return resume(s);
}
function drive(s, steps, max = 60) {
  for (let k = 0; k < max && s.pending; k++) {
    const o = s.pending.options, want = steps[0];
    let hit = want && o.find(x => want.test(x.id) || want.test(x.label || ''));
    if (hit) steps.shift(); else if (s.pending.kind === 'pay' || /discard which/.test(s.pending.prompt)) hit = o[0]; else break;
    s = applyMove(s, { player: s.pending.player, option: hit.id });
  }
  return s;
}
const Q = ['market', 'thieves', 'red', 'yellow'];
describe.runIf(ON)('Purifiers (leave version)', () => {
  it('On Use discards itself, and each rival with a member discards one', () => {
    let s = scene({ quads: Q, members: [['benders.purifiers'], ['red.twins', 'market.regular'], ['market.snob'], []] });
    s = drive(s, [/Purifiers/]);
    expect(names(s, 0)).toEqual([]);
    expect(names(s, 1).length).toBe(1);
    expect(names(s, 2)).toEqual([]);
    expect(s.log.join('\n')).toContain("P1's Purifiers left: each rival discards a member.");
  });
  it('Poach taking it makes the old owner’s rivals discard, the poacher included', () => {
    let s = scene({ quads: ['market', 'thieves', 'red', 'yellow'], members: [['market.regular'], ['benders.purifiers', 'market.snob'], ['market.thrifthunters'], []] });
    s = drive(s, [/Poach/, /Purifiers/]);
    if (!s.log.some(l => /Purifiers left/.test(l))) console.log(s.log.join('\n'));
    expect(s.log.join('\n')).toContain("P2's Purifiers left: each rival discards a member.");
    expect(names(s, 0)).toContain('Purifiers');
    expect(names(s, 0)).not.toContain('Regular');
    expect(names(s, 2)).toEqual([]);
  });
});
