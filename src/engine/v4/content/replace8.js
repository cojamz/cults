// Quality loop, lane B (Silver; Nov 4 overnight; /mnt/project-files/quality/pitches/B-*.md), bot games only. REPLACE8=1
// deals the new members in their old cards' places (the old card is retired, so never dealt):
//   silver.debtcollector (Debt Collectors) -> silver.wellwishers.
// CATERER=follower (silver.js) is the Silver Cloak candidate, a separate switch so it trials on its own.
// Unset, the new cards are never defined and nothing in the game changes.
export const REPLACE8 = globalThis.process?.env?.REPLACE8 === '1';
/** The new card, in its color's member list only under the switch. */
export const add8 = card => (REPLACE8 ? [card] : []);
/** The old card's extra fields: retired under the switch, nothing otherwise. */
export const old8 = REPLACE8 ? { retired: true } : {};
/** Handlers the new cards use, registered only under the switch. */
export const handlers8 = hs => (REPLACE8 ? hs : {});
/** The new cards of this batch that are in the live game (none until one ships). */
export const LIVE8 = [];
