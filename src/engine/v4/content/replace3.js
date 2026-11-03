// Replacement batch 3 (Nov 3; /mnt/project-files/replacements/batch3.md), bot games only. REPLACE3=1 deals eight new
// members in their old cards' places (the old card is retired, so never dealt); independent of REPLACE1 and REPLACE2:
//   trading.hoarder -> trading.evictors, purple.courier -> purple.interrupters, thieves.kingpin -> thieves.kidnappers,
//   market.patroness -> market.completists, echo.muse -> echo.impersonators, red.patriarch -> red.missionaries,
//   silver.collector -> silver.creditors, purple.crew (Shift Crew) -> purple.pacers.
// Unset, the new cards are never defined and nothing in the game changes.
export const REPLACE3 = globalThis.process?.env?.REPLACE3 === '1';
/** The new card, in its color's member list only under the switch. */
export const add3 = card => (REPLACE3 ? [card] : []);
/** The old card's extra fields: retired under the switch, nothing otherwise. */
export const old3 = REPLACE3 ? { retired: true } : {};
/** Handlers the new cards use, registered only under the switch. */
export const handlers3 = hs => (REPLACE3 ? hs : {});
