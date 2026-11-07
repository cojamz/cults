// Idea pipeline (scripts/ideas/README.md): POOL=1 (or POOL=<key or pool tag>,…) rotates candidate cards (content/pool.js) into
// a bot game in place of live cards: members take the place of live members of their color, spaces the place of a live
// space of their color and round. Uses its own random stream, so a game number still deals the same table as without POOL.
import { quadrant, guestMembers } from '../../src/engine/v4/content/index.js';
import { POOL_SPACES } from '../../src/engine/v4/content/pool.js';
import { CUT, CUT10 } from '../../src/engine/v4/content/cull.js';
import { ARTIFACTS } from '../../src/engine/v4/core.js';
import { seededRandom } from '../../src/engine/v4/rng.js';

const RAW = process.env.POOL || '';
const pick = d => RAW === '1' || RAW.split(',').map(s => s.trim()).some(k => k && (d.key === k || d.id === k || d.pool === k));
export const POOL_ACTIVE = !!RAW;
const PER_COLOR = Number(process.env.POOL_PER || 2);

/** Rotate candidates into game g on this table. Returns { record, restore }. */
export function rotateIn(g, quads, deck) {
  const rand = seededRandom(g * 9973 + 17);
  const record = { members: [], bumped: [], spaces: [] };
  const undo = [];
  const colors = [...quads, 'guest'];
  for (const q of colors) {
    const members = q === 'guest' ? guestMembers() : quadrant(q).members;
    const cands = members.filter(d => d.pool && pick(d));
    if (cands.length) {
      const k = Math.min(PER_COLOR, cands.length), start = (g * k) % cands.length;
      const live = members.filter(d => !d.pool && !d.retired && !d.artifact && !CUT.has(d.id) && !(deck === 10 && CUT10.has(d.id)) && ARTIFACTS[q] !== d.id);
      for (let j = 0; j < k && live.length; j++) {
        const c = cands[(start + j) % cands.length];
        const out = live.splice(Math.floor(rand() * live.length), 1)[0];
        c.retired = false; out.retired = true;
        undo.push(() => { c.retired = true; out.retired = false; });
        record.members.push(c.name); record.bumped.push(out.name);
      }
    }
    const sc = q === 'guest' ? [] : (POOL_SPACES[q] || []).filter(pick);
    if (sc.length) {
      const c = sc[g % sc.length], acts = quadrant(q).actions;
      const same = acts.map((a, i) => [a, i]).filter(([a]) => a.ring === c.ring);
      if (same.length) {
        const [old, i] = same[Math.floor(rand() * same.length)];
        acts[i] = c; undo.push(() => { acts[i] = old; });
        record.spaces.push({ in: `${q}: ${c.name}`, out: `${q}: ${old.name}` });
      }
    }
  }
  return { record, restore: () => { while (undo.length) undo.pop()(); } };
}
