// The test version (Cory, Nov 8, on the card-idea ship list: "we should create an alt-like version here with these, like,
// try it ones baked in"). rules.testSet deals his try-it cards into a real game: six candidate spaces take the place of
// live spaces of the same color and round (same place on the wheel), and four candidate members join their decks. Which
// live space each replaces is Claude's fill-in (design/pitch-ledger.md, "Ship list, Cory's read"); the candidates are
// the idea pipeline's own cards (content/pool.js), so the bot games and the table play the same text.
import { quadrant } from './index.js';
import { POOL_SPACES } from './pool.js';
import { wrapInPlace } from './echo.js';

/** color -> [live space key out, candidate space key in] */
export const TEST_SPACES = {
  thieves: ['ransom', 'racket'], // Shake Down -> Protection Racket
  silver: ['polish', 'roundrobin'], // Polish -> Round Robin
  trading: ['estatesale', 'bequest'], // Estate Sale -> Bequest
  market: ['pricecheck', 'rummage'], // Bury -> Rummage
  echo: ['eternity', 'medley'], // Greatest Hits -> Medley
  yellow: ['meltingpot', 'moneychangers'], // Melting Pot -> Swap Meet
};
/** Candidate members dealt into the test version's decks, each in a live member's place so decks stay at 10 (Cory,
 *  Nov 8: "Are we keeping the member decks consistent?"); Protesters joins the grey members with nothing out. */
export const TEST_MEMBERS = new Set(['trading.anchorites', 'market.repossessors', 'trading.oldguard', 'benders.protesters']);
/** Live members the test version leaves out: Recluse (Anchorites), Misers (Old Guard), Regular (Repossessors). */
export const TEST_OUT = new Set(['trading.recluse', 'trading.heirs', 'market.regular']);
/** Whether a member is in this table's decks under the test version (null: the live rule decides). */
export const testDealt = (rules, def) => (!rules?.testSet ? null : TEST_MEMBERS.has(def.id) ? true : TEST_OUT.has(def.id) ? false : null);

const cache = {};
/** A color's spaces in the test version: the live list with the swap made in place. */
export function testSpaces(qid) {
  if (cache[qid]) return cache[qid];
  const live = quadrant(qid).actions;
  const swap = TEST_SPACES[qid];
  if (!swap) return (cache[qid] = live);
  const i = live.findIndex(a => a.key === swap[0]);
  const cand = (POOL_SPACES[qid] || []).find(a => a.key === swap[1]);
  if (i < 0 || !cand) throw new Error(`Test version: ${qid} is missing ${i < 0 ? swap[0] : swap[1]}.`);
  const out = [...live];
  out[i] = wrapInPlace(qid, cand, i);
  return (cache[qid] = out);
}
/** Every space a name might name: the live ones and the test version's (hover and log lookups by name). */
export const anySpaces = qid => [...quadrant(qid).actions, ...(POOL_SPACES[qid] || []).filter(a => TEST_SPACES[qid]?.[1] === a.key)];
