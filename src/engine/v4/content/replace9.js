// Members C (overnight quality loop, Nov 4; /mnt/project-files/quality/pitches/C-*.md), bot games only. REPLACE9=1
// deals each new member in its old card's place (the old card is retired, so never dealt):
//   yellow.customs -> yellow.tollkeeper, yellow.dyer -> yellow.quilter, market.critic -> market.lastminute,
//   market.regular -> market.bargainhunter.
// Unset, the new cards are never defined and nothing in the game changes.
export const REPLACE9 = globalThis.process?.env?.REPLACE9 === '1';
/** The new card, in its color's member list only under the switch. */
export const add9 = card => (REPLACE9 ? [card] : []);
/** The old card's extra fields: retired under the switch, nothing otherwise. */
export const old9 = REPLACE9 ? { retired: true } : {};
/** Handlers the new cards use, registered only under the switch. */
export const handlers9 = hs => (REPLACE9 ? hs : {});
