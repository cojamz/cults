// Helpers for the idea pipeline's candidate tests (cards-pool*.test.js): candidates are bot-only (content/pool.js), so a
// test un-retires the members and sets the spaces into their color's wheel for its own file, as scripts/lib/pool-rotate.mjs
// does in bot games, and puts everything back after.
import { beforeAll, afterAll } from 'vitest';
import { quadrant, defById } from '../../../engine/v4/content/index.js';
import { POOL_SPACES } from '../../../engine/v4/content/pool.js';
import { createGame, resume } from '../../../engine/v4/core.js';
import { sceneQ } from './cards-helpers.js';

/** Deal these candidate members and show these candidate spaces for the whole file. */
export function usePool(members = [], spaces = []) {
  const undo = [];
  beforeAll(() => {
    // loads every color, so POOL_SPACES is filled
    createGame({ seats: [{ name: 'a', kind: 'bot' }, { name: 'b', kind: 'bot' }], seed: 1, quadrants: ['market', 'yellow', 'trading', 'purple'] });
    for (const id of members) { const d = defById(id); d.retired = false; undo.push(() => { d.retired = true; }); }
    for (const id of spaces) {
      const [q] = id.split('.'), c = POOL_SPACES[q].find(a => a.id === id), acts = quadrant(q).actions;
      if (!c) throw new Error(`no candidate space ${id}`);
      const i = acts.findIndex(a => a.ring === c.ring && !spaces.includes(a.id));
      const old = acts[i]; acts[i] = c; undo.push(() => { acts[i] = old; });
    }
  });
  afterAll(() => { while (undo.length) undo.pop()(); });
}
export const price = (s, u) => { const d = defById(s.cards[u].def); return d.s + d.w; };
export const total = r => Object.values(r).reduce((a, b) => a + b, 0);
/** A scene that waits (no task yet), so a test can lay out the discard pile before play goes on. */
export const still = o => sceneQ({ ...o, queue: [] });
export const go = (s, queue) => { s.queue = queue; return resume(s); };
/** Put pile members with these printed costs on the discard pile (in order, the last on top); returns their uids. */
export function discard(s, costs) {
  const out = [];
  for (const c of costs) {
    const k = s.pile.findIndex(u => price(s, u) === c);
    if (k < 0) throw new Error(`no pile member costing ${c}`);
    out.push(s.pile.splice(k, 1)[0]);
  }
  s.discard = [...out];
  return out;
}
/** Two printed costs that pile members have at least twice each, low first. */
export function twoCosts(s) {
  const n = {};
  for (const u of s.pile) n[price(s, u)] = (n[price(s, u)] || 0) + 1;
  return Object.keys(n).map(Number).filter(c => n[c] >= 2).sort((a, b) => a - b).slice(0, 2);
}
