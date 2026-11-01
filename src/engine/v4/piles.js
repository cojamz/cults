// Piles: the members-as-piles experiment (Cory, 2026-11-01: "the members are like decks. There's like piles of them";
// "maybe we try it out just without blue"; or "the gray members are piles… five or six like core ones, and you can buy
// multiples of those"). Branch only: never on the live game. A table turns it on with rules.piles (core.js createGame):
//   { defs: [member ids], copies: n, only: bool }
// Each listed member is a face-up pile of n copies; anyone may recruit the top copy, and the next one turns up.
// only: the piles are the whole market (variant B), otherwise the shuffled deck and its row stay (variant A).
import { quadrant, guestMembers } from './content/index.js';
import { CUT, CUT10 } from './content/cull.js';
import { ARTIFACTS, memberRound } from './core.js';
import { seededRandom } from './rng.js';

/** Variant A's grey core (Claude's pick from the 10-card grey deck, for Cory to confirm): the greys that reach rivals. */
export const GREY_CORE = ['benders.squatter', 'benders.anarchist', 'benders.conmen', 'benders.saboteur', 'benders.frontrunner'];

// the members a table deals on the 10 or 15 deck (as createGame's cull and artifacts do)
function dealtDefs(qid, deck) {
  const art = new Set(Object.values(ARTIFACTS));
  return quadrant(qid).members.filter(d => !CUT.has(d.id) && !(deck === 10 && CUT10.has(d.id)) && !art.has(d.id) && !d.artifact && !d.retired);
}

/** Variant A: the grey deck leaves the shuffle; the grey core is out every game as piles. */
export function greyPiles({ copies = 3, core = GREY_CORE } = {}) {
  return { defs: [...core], copies, only: false };
}

/** Variant B: every member is a pile and there is no deck. Ten piles a game, Dominion's count: 8 from the table's
 *  colors (spread evenly, alternating a round I member and a later one) and 2 from the grey core, drawn by seed. */
export function allPiles(quadrants, seed, { deck = 10, copies = 4, colored = 8, grey = 2, core = GREY_CORE } = {}) {
  const rand = seededRandom(seed * 9173 + 11);
  const pick = list => list.splice(Math.floor(rand() * list.length), 1)[0];
  const pools = quadrants.map(q => {
    const ds = dealtDefs(q, deck);
    return { early: ds.filter(d => memberRound(d) <= 1).map(d => d.id), late: ds.filter(d => memberRound(d) > 1).map(d => d.id) };
  });
  const defs = [];
  for (let k = 0; defs.length < colored && k < colored * 4; k++) {
    const pool = pools[k % pools.length], tier = Math.floor(k / pools.length) % 2 === 0 ? 'early' : 'late';
    const list = pool[tier].length ? pool[tier] : pool[tier === 'early' ? 'late' : 'early'];
    if (list.length) defs.push(pick(list));
  }
  const greys = core.filter(id => guestMembers().some(d => d.id === id));
  for (let k = 0; k < grey && greys.length; k++) defs.push(pick(greys));
  return { defs, copies, only: true };
}

/** The rules a table adds for a variant: 'A' (grey core as piles, the other greys out) or 'B' (all piles, no deck). */
export function pileRules(variant, quadrants, seed, deck = 10, { core = GREY_CORE } = {}) {
  if (variant === 'A') return { guests: false, piles: greyPiles({ core }) };
  if (variant === 'B') return { piles: allPiles(quadrants, seed, { deck, core }) };
  return {};
}
