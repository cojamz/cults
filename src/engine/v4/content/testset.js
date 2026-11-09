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
  thieves: [['ransom', 'racket']], // Shake Down -> Protection Racket
  silver: [['polish', 'roundrobin']], // Polish -> Round Robin
  trading: [['estatesale', 'bequest']], // Estate Sale -> Bequest
  // Recruit Twice stays (Cory, Nov 9: "recruit twice and recruit three times are strong… very strategic"), so
  // Foreclose sits out until he says which Blue round II space it takes (Bury's spot holds Rummage)
  market: [['pricecheck', 'rummage']], // Bury -> Rummage
  echo: [['eternity', 'medley']], // Greatest Hits -> Medley
  yellow: [['meltingpot', 'moneychangers']], // Melting Pot -> Swap Meet
  // Purple: every space takes the Goes Last token (Cory, Nov 8 8:21pm)
  purple: [['holdup', 'holduplast'], ['again', 'againlast'], ['rally', 'closinglast']],
};
/** Candidate members dealt into the test version's decks, each in a live member's place so decks stay at 10 (Cory,
 *  Nov 8: "Are we keeping the member decks consistent?"); Protesters, Gift Swappers and Purifiers (Nov 9) join the grey members with nothing out. */
export const TEST_MEMBERS = new Set(['trading.anchorites', 'market.repossessors', 'trading.oldguard', 'benders.protesters', 'benders.giftswappers', 'benders.purifiers']);
/** Live members the test version leaves out: Recluse (Anchorites), Misers (Old Guard), Regular (Repossessors). */
export const TEST_OUT = new Set(['trading.recluse', 'trading.heirs', 'market.regular']);
/** Whether a member is in this table's decks under the test version (null: the live rule decides). */
export const testDealt = (rules, def) => (!rules?.testSet ? null : TEST_MEMBERS.has(def.id) ? true : TEST_OUT.has(def.id) ? false : null);

const cache = {};
const ALL_WORDS = /(your next minion is|your minion after (that|those) is|that minion is) placed after everyone else\u2019s/;
/** A color's spaces in the test version: the live list with the swap made in place. */
export function testSpaces(qid) {
  if (cache[qid]) return cache[qid];
  const live = quadrant(qid).actions;
  const swaps = TEST_SPACES[qid];
  if (!swaps) return (cache[qid] = live);
  // Purple: the token holds all your other minions (Cory, Nov 9), so its spaces say so
  const out = qid === 'purple' ? live.map(a => (ALL_WORDS.test(a.text) ? { ...a, text: a.text.replace(ALL_WORDS, 'your other minions are placed after everyone else\u2019s') } : a)) : [...live];
  for (const [outKey, inKey] of swaps) {
    const i = live.findIndex(a => a.key === outKey);
    const cand = (POOL_SPACES[qid] || []).find(a => a.key === inKey);
    if (i < 0 || !cand) throw new Error(`Test version: ${qid} is missing ${i < 0 ? outKey : inKey}.`);
    const c2 = qid === 'purple' && ALL_WORDS.test(cand.text) ? { ...cand, text: cand.text.replace(ALL_WORDS, 'your other minions are placed after everyone else\u2019s') } : cand;
    out[i] = wrapInPlace(qid, c2, i);
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
