// Where each cult's followers came from, by color (Cory, 2026-11-02: "you never quite feel the payoff"). Every follower
// a player ends with is put in one place:
//   a color   its members' people, its contest's prizes, what its members and spaces won during play, and what its
//             members scored at game end
//   neutral   members with no color (guests), and their play and end-game followers
//   bought    the follower buys
//   leader    the 1 every cult starts with
//   other     followers won or lost during play that no member or space claims (and the zero floor)
// The parts add up to followers(state, p). Read straight off the engine (breakdown, contestRounds, the ledger, final).
import { cardDef, quadrant, followers, spacesOf } from '../../engine/v4/index.js';
import { breakdown, contestRounds } from '../format.js';
import { memberValue, finalGrants } from './finalScore.js';

const colorOf = (state, uid) => {
  const d = cardDef(state, uid);
  return d.guest || !state.quadrants.includes(d.quadrant) ? null : d.quadrant;
};

/** A ledger label's color: a member's name ("Proselytizers", "P2's Raider") or a space's name ("Your Call"). */
function labelColor(state, p, label) {
  const bare = label.replace(/^.*?'s /, '');
  for (const pl of state.players) for (const uid of pl.members) if (cardDef(state, uid).name === bare) return { q: colorOf(state, uid) };
  for (const qid of state.quadrants) if (spacesOf(state, qid).some(a => a.name === label || a.name === bare)) return { q: qid };
  return null;
}

/** How many spaces each player took in each color, from the log ("P3 took Swell (Blue)."). A game past the log's cap
 *  counts only what the log still holds; the engine's own tally wins when it has one (state.taken). */
export function spacesTaken(state) {
  if (state.taken) return state.players.map(p => ({ ...(state.taken[p.id] || {}) }));
  const out = state.players.map(() => ({}));
  const byName = Object.fromEntries(state.quadrants.map(q => [quadrant(q).name, q]));
  for (const line of state.log) {
    const m = line.match(/^(.*) (?:took|joined .* on) .* \(([^)]+)\)\.$/);
    if (!m) continue;
    const p = state.players.find(o => o.name === m[1]);
    const q = byName[m[2]];
    if (p && q) out[p.id][q] = (out[p.id][q] || 0) + 1;
  }
  return out;
}

export function followerSources(state, p, taken = spacesTaken(state)) {
  const b = breakdown(state, p);
  const blank = qid => ({ qid, total: 0, members: 0, count: 0, contest: 0, rounds: [], play: 0, grants: 0, spaces: (taken[p.id] || {})[qid] || 0, lines: [] });
  const colors = Object.fromEntries(state.quadrants.map(q => [q, blank(q)]));
  const neutral = blank(null);
  const at = q => (q ? colors[q] : neutral);
  for (const uid of p.members) {
    const c = at(colorOf(state, uid));
    c.members += memberValue(state, uid);
    c.count += 1;
  }
  for (const e of Object.values(contestRounds(state)[p.id] || {})) {
    const c = colors[e.qid];
    if (!c) continue;
    c.contest += e.v;
    c.rounds.push(...e.list);
    c.lines.push({ label: e.rule, n: e.v, rounds: e.list });
  }
  let other = 0;
  for (const l of b.play) {
    const hit = labelColor(state, p, l.label);
    if (hit) { at(hit.q).play += l.n; at(hit.q).lines.push({ label: l.label, n: l.n }); } else other += l.n;
  }
  for (const g of finalGrants(state, p)) {
    const c = at(g.uid != null ? colorOf(state, g.uid) : null);
    c.grants += g.n;
    c.lines.push({ label: g.name, n: g.n, end: true });
  }
  for (const c of [...Object.values(colors), neutral]) c.total = c.members + c.contest + c.play + c.grants;
  const list = state.quadrants.map(q => colors[q]);
  // the lean: the color that gave the most followers (ties go to more spaces taken there)
  // the lean: the color that gave the most followers, only when it clearly beats the next (else the cult spread out)
  const [first, second] = [...list].sort((x, y) => y.total - x.total || y.spaces - x.spaces);
  const lean = first && first.total > 0 && (!second || first.total - second.total >= Math.max(3, Math.ceil(second.total * 0.25))) ? first : null;
  const total = followers(state, p);
  const sum = list.reduce((s, c) => s + c.total, 0) + neutral.total + b.bought + 1 + other;
  if (sum !== total) other += total - sum; // the zero floor, or an old save's missing ledger
  return { colors: list, neutral, bought: b.bought, leader: 1, other, total, lean: lean ? lean.qid : null };
}
