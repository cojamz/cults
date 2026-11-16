// Quality loop, lane D2 (Nov 4; /mnt/project-files/quality/pitches/D2-*.md), bot games only. REPLACE12=<key> (or a
// comma list of keys) deals each new card in its old card's place (the old card is retired, so never dealt); 1 means
// all of the members below (spaces take one slot each, so name them one at a time). Unset, nothing in the game changes.
//   red.movementpenalty -> red.turncoat (Turncoat, top-of-pile reword of Cory's back-pocket Turncoats)
//   red.movementpenalty -> red.exitcounselor (Exit Counselor)
//   red.movementpenalty -> red.foundling (Foundling)
//   space: market.pricecheck (Bury) -> market.dumpsterdive (Dumpster Dive) or market.delivery (Delivery)
//   space: trading.stipend (Allowance) -> trading.pawnshop (Pawnshop), trading.lowprofile (Low Profile) or trading.pocketmoney (Pocket Money)
//   space: yellow.transmute (Leaders' Tax) -> yellow.tagalong (Tag Along)
//   space: purple.again (Right Away) -> purple.tradeplaces (Trade Places)
//   rewords in place: buryfull (Bury gains its whole cost),
//   commonground (Common Ground in Leaders' Tax's place), rightaway2 (Right Away +2/3/4), deprog2 (Deprogrammers steals),
//   snobsup (Snobs: trading up), snobsround (Snobs: every Round End)
const VAL = globalThis.process?.env?.REPLACE12 || '';
/** new card key -> the old card id it takes the place of */
const REPLACES = {
  turncoat: 'red.movementpenalty', exitcounselor: 'red.movementpenalty', foundling: 'red.movementpenalty',
  dumpsterdive: 'market.pricecheck', delivery: 'market.pricecheck',
  pawnshop: 'trading.stipend', lowprofile: 'trading.stipend', pocketmoney: 'trading.stipend',
  tagalong: 'yellow.transmute',
  tradeplaces: 'purple.again',
  // rewords of the live card in its own place (paper requalified, Nov 4)
  buryfull: 'market.pricecheck', commonground: 'yellow.transmute', rightaway2: 'purple.again',
  pawnbrokers: 'trading.raider',
  deprog2: 'red.movementpenalty', snobsup: 'market.snob', snobsround: 'market.snob',
};
const MEMBERS = ['turncoat', 'exitcounselor', 'foundling'];
/** Rewords change the live card in place, so they never retire it. */
const REWORDS = new Set(['buryfull', 'rightaway2', 'deprog2', 'snobsup', 'snobsround']);
export const ON12 = VAL === '1' ? MEMBERS : VAL.split(',').map(x => x.trim()).filter(k => REPLACES[k]);
export const REPLACE12 = ON12.length > 0;
/** Is the new card or space with this key switched on? */
export const on12 = key => ON12.includes(key);
/** The new card, in its color's member list only when it is switched on. */
export const add12 = card => (ON12.includes(card.key) ? [card] : []);
/** The old card's extra fields: retired when the card that replaces it is on, nothing otherwise. */
export const old12 = oldId => (ON12.some(k => !REWORDS.has(k) && REPLACES[k] === oldId) ? { retired: true } : {});
/** Handlers the new cards use, registered under the switch. */
export const handlers12 = hs => (REPLACE12 ? hs : {});
