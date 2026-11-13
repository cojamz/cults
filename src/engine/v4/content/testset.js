// The test version (Cory, Nov 8, on the card-idea ship list: "we should create an alt-like version here with these, like,
// try it ones baked in"). rules.testSet deals his try-it cards into a real game: six candidate spaces take the place of
// live spaces of the same color and round (same place on the wheel), and four candidate members join their decks. Which
// live space each replaces is Claude's fill-in (design/pitch-ledger.md, "Ship list, Cory's read"); the candidates are
// the idea pipeline's own cards (content/pool.js), so the bot games and the table play the same text.
import { quadrant } from './index.js';
import { POOL_SPACES } from './pool.js';
import { wrapInPlace } from './echo.js';

/** color -> [[live space key out, candidate space key in], ...] */
export const TEST_SPACES = {
  // Nov 10 (Cory: "once we're done those will be the live actions in both test and other version"): Magenta, Blue,
  // Green and Purple play their new live spaces in the test version too, so their swaps (Shake Down -> Protection Racket,
  // Bury -> Rummage, Greatest Hits -> Medley, Purple's token spaces) are gone
  // Nov 11 (Cory: "we are committing to the test version, with updated actions from our recent action work"): the
  // Test version is the game now (rules.testSet is on by default, core.js DEFAULT_RULES), and the recent action work
  // wins its slots: Silver keeps the new Polish (Nov 11) and White keeps Estate Sale (Cory, Nov 11: "I like white
  // Round II actions"), so Round Robin and Bequest are out, and Yellow keeps Melting Pot (Cory, Nov 11: "Melting pot is
  // good"), so Swap Meet is out. No space swaps are left: the Test version is its members now
};
/** Candidate members dealt into the test version's decks, each in a live member's place so decks stay at 10 (Cory,
 *  Nov 8: "Are we keeping the member decks consistent?"); Protesters, Gift Swappers and Purifiers (Nov 9) join the grey members with nothing out. */
// Ensemble in Tribute Band's place (Cory, Nov 11 9:32pm Eastern: "cut tribute band"; Ensemble, "Whenever you copy your
// own action, +1 follower.", is the stand-in from the action test until the members work names Green's replacement)
// Nov 11 9:01pm: Regulars takes the slot for good, so Ensemble leaves (back to CUT10).
export const TEST_MEMBERS = new Set(['trading.anchorites', 'market.repossessors', 'trading.oldguard', 'benders.protesters', 'benders.giftswappers', 'benders.purifiers', 'benders.mutineers']); // Mutineers joins the grey members (Cory, Nov 12)
/** Live members the test version leaves out: Recluse (Anchorites), Misers (Old Guard), Regular (Repossessors). */
export const TEST_OUT = new Set(['trading.recluse', 'trading.heirs', 'market.regular']);
/** Whether a member is in this table's decks under the test version (null: the live rule decides). */
// rules.membersIn / rules.membersOut (member ids) put a card in or take one out of this table's decks, over every other
// rule. Bot tests only for now (the action balance harness, Nov 11, Cory: "maybe we'll cut tribute band ... We'll need to
// put in a replacement green", so the deck stays at 10): scripts pass them as MEMBERS_IN / MEMBERS_OUT.
export const testDealt = (rules, def) => (rules?.membersIn?.includes(def.id) ? true : rules?.membersOut?.includes(def.id) ? false
  : !rules?.testSet ? null : TEST_MEMBERS.has(def.id) ? true : TEST_OUT.has(def.id) ? false : null);

const cache = {};
/** A color's spaces in the test version: the live list with the swap made in place. */
export function testSpaces(qid) {
  if (cache[qid]) return cache[qid];
  const live = quadrant(qid).actions;
  const swaps = TEST_SPACES[qid];
  if (!swaps) return (cache[qid] = live);
  const out = [...live];
  for (const [outKey, inKey] of swaps) {
    const i = live.findIndex(a => a.key === outKey);
    const cand = (POOL_SPACES[qid] || []).find(a => a.key === inKey);
    if (i < 0 || !cand) throw new Error(`Test version: ${qid} is missing ${i < 0 ? outKey : inKey}.`);
    out[i] = wrapInPlace(qid, cand, i);
  }
  return (cache[qid] = out);
}
/** Whether the last table asked for was the test version: name lookups with no table in hand (hovers, log words)
 *  read the test version's text first then, as a Purple space keeps its name with new words. */
let lastTest = false;
export const noteTable = on => { lastTest = !!on; };
/** Every space a name might name: the live ones and the test version's (hover and log lookups by name). */
export const anySpaces = qid => {
  const test = (POOL_SPACES[qid] || []).filter(a => (TEST_SPACES[qid] || []).some(([, k]) => k === a.key));
  return lastTest ? [...testSpaces(qid), ...test, ...quadrant(qid).actions] : [...quadrant(qid).actions, ...test];
};
