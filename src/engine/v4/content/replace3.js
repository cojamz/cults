// Replacement batch 3 (Nov 3; /mnt/project-files/replacements/batch3.md), bot games only. REPLACE3=1 deals eight new
// members in their old cards' places (the old card is retired, so never dealt); independent of REPLACE1 and REPLACE2:
//   trading.hoarder -> trading.evictors, purple.courier -> purple.interrupters, thieves.kingpin -> thieves.kidnappers,
//   market.patroness -> market.completists, echo.muse -> echo.impersonators, red.patriarch -> red.missionaries,
//   silver.collector -> silver.creditors, purple.crew (Shift Crew) -> purple.pacers.
// Live since Nov 3 (Claude, under Cory's "use your judgement"): Impersonators, Creditors and Kidnappers (at 6 magenta +
// 2 any) are always on and Muse, Collector and Kingpin always retired, with or without the switch (echo.js, silver.js
// and thieves.js print them without add3/old3). Unset, the other five new cards are never defined and their old cards stay.
export const REPLACE3 = globalThis.process?.env?.REPLACE3 === '1';
/** The new card, in its color's member list only under the switch. */
export const add3 = card => (REPLACE3 ? [card] : []);
/** The old card's extra fields: retired under the switch, nothing otherwise. */
export const old3 = REPLACE3 ? { retired: true } : {};
/** Handlers the new cards use, registered only under the switch. */
export const handlers3 = hs => (REPLACE3 ? hs : {});
/** The new cards of this batch that are in the live game (always on, their old cards always retired). */
export const LIVE3 = ['echo.impersonators', 'silver.creditors', 'thieves.kidnappers'];
