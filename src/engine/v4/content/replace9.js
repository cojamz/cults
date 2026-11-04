// Members C (overnight quality loop, Nov 4; /mnt/project-files/quality/pitches/C-*.md), bot games only. REPLACE9=1
// deals each new member in its old card's place (the old card is retired, so never dealt):
//   yellow.customs -> yellow.tollkeeper
//   yellow.dyer -> yellow.quilter
//   market.critic -> market.lastminute
//   market.regular -> market.bargainhunter
//   benders.extrahand -> benders.hypnotist
// One card at a time: REPLACE9=<key> or a comma list of keys (REPLACE9=quilter,hypnotist); 1 means all of them.
// Unset, the new cards are never defined and nothing in the game changes.
const VAL = globalThis.process?.env?.REPLACE9 || '';
/** new card key -> the old card id it takes the place of */
const REPLACES = { tollkeeper: 'yellow.customs', quilter: 'yellow.dyer', lastminute: 'market.critic', bargainhunter: 'market.regular', hypnotist: 'benders.extrahand' };
export const ON9 = VAL === '1' ? Object.keys(REPLACES) : VAL.split(',').map(x => x.trim()).filter(k => REPLACES[k]);
export const REPLACE9 = ON9.length > 0;
/** The new card, in its color's member list only when it is switched on. */
export const add9 = card => (ON9.includes(card.key) ? [card] : []);
/** The old card's extra fields: retired when the card that replaces it is on, nothing otherwise. */
export const old9 = oldId => (ON9.some(k => REPLACES[k] === oldId) ? { retired: true } : {});
/** Handlers the new cards use, registered under the switch. */
export const handlers9 = hs => (REPLACE9 ? hs : {});
