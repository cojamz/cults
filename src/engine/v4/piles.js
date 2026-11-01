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
// Con Men is a normal shop member again (Cory, Nov 1: "i like con men, it doesn't have to be a pile"); Scouts takes its seat
// (Cory, Nov 1: "scouts good").
export const GREY_CORE = ['benders.squatter', 'benders.anarchist', 'benders.saboteur', 'benders.frontrunner', 'benders.scout'];

// the members a table deals on the 10 or 15 deck (as createGame's cull and artifacts do)
function dealtDefs(qid, deck) {
  const art = new Set(Object.values(ARTIFACTS));
  return quadrant(qid).members.filter(d => !CUT.has(d.id) && !(deck === 10 && CUT10.has(d.id)) && !art.has(d.id) && !d.artifact && !d.retired);
}

/** Variant A: the grey deck leaves the shuffle; the grey core is out every game as piles. */
// 10 copies, like All piles (Cory, Nov 1: "they should have 10 like all piles")
export function greyPiles({ copies = 10, core = GREY_CORE } = {}) {
  return { defs: [...core], copies, only: false };
}

/** All piles (Cory, 2026-11-01: "everything's a pile, like all the colors… just deal like 10 of them randomly").
 *  The deal (Claude's pick, for Cory to confirm): ten piles a game, Dominion's count. Every color on the table gets the
 *  same share of 8 (two each at four players, three and three and two at three, four each at two), and each color's
 *  share alternates a round I member and a later one, so every color has a pile open from round I and one that opens
 *  in round II or III (a spread of prices; every pile opens in round I, Cory: "there should be no limit on when you can
 *  buy"). The last 2 are grey, from the grey core: one round I, one later. Copies: 10 a pile (Cory, 2026-11-01: "let's say
 *  10 for now? see if it matters?").
 *  Every member of the table's colors that isn't dealt as a pile stays face down as the deck, with no face-up row:
 *  Walk-In, Peek, Talent Scout and Insider read "the deck" and "the pile" as printed. */
export function allPiles(quadrants, seed, { deck = 10, copies = 10, colored = 8, grey = 2, core = GREY_CORE } = {}) {
  const rand = seededRandom(seed * 9173 + 11);
  const pick = list => list.splice(Math.floor(rand() * list.length), 1)[0];
  const split = ds => ({ early: ds.filter(d => memberRound(d) <= 1).map(d => d.id), late: ds.filter(d => memberRound(d) > 1).map(d => d.id) });
  const take = (pool, tier) => { const list = pool[tier].length ? pool[tier] : pool[tier === 'early' ? 'late' : 'early']; return list.length ? pick(list) : null; };
  const pools = quadrants.map(q => split(dealtDefs(q, deck)));
  const defs = [];
  for (let k = 0; defs.length < colored && k < colored * 4; k++) {
    const id = take(pools[k % pools.length], Math.floor(k / pools.length) % 2 === 0 ? 'early' : 'late');
    if (id) defs.push(id);
  }
  const greys = split(guestMembers().filter(d => core.includes(d.id)));
  for (let k = 0; k < grey; k++) { const id = take(greys, k % 2 === 0 ? 'early' : 'late'); if (id) defs.push(id); }
  return { defs, copies, only: true, deck: true };
}

/** The rules a table adds for a shop type: 'grey' (A: grey core as piles, the other greys out) or 'all' (B: all piles; the rest face down as the deck). */
export const SHOP_TYPES = ['deck', 'grey', 'all'];
export function pileRules(variant, quadrants, seed, deck = 10, { core = GREY_CORE } = {}) {
  // the greys that aren't piles stay in the shuffled deck, as today (Cory: "the rest of the shop is members")
  if (variant === 'A' || variant === 'grey') return { piles: greyPiles({ core }) };
  if (variant === 'B' || variant === 'all') return { piles: allPiles(quadrants, seed, { deck, core }) };
  return {};
}
