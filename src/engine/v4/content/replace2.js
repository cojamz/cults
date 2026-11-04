// Replacement batch 2 (Nov 3; /mnt/project-files/replacements/batch2.md), bot games only. REPLACE2=1 deals eight new
// members in their old cards' places (the old card is retired, so never dealt); independent of REPLACE1:
//   red.twins (Triplets) -> red.bodysnatchers, echo.wallflower -> echo.mirrorimage, thieves.desperado -> thieves.skimmers,
//   market.shopaholic -> market.doorbusters, yellow.ringleader -> yellow.nightmarket, silver.gala (Debutantes) ->
//   silver.fundraisers, silver.smoothtalker -> silver.hushmoney, benders.scout (Scouts) -> benders.spoilsports.
// Live since Nov 3 (Claude, under Cory's "use your judgement"): Body Snatchers and Spoilsport are always on and
// Triplets and Scouts always retired, with or without the switch (red.js and benders.js print them without add2/old2).
// Unset, the other six new cards are never defined and their old cards stay.
export const REPLACE2 = globalThis.process?.env?.REPLACE2 === '1';
/** The new card, in its color's member list only under the switch. */
export const add2 = card => (REPLACE2 ? [card] : []);
/** The old card's extra fields: retired under the switch, nothing otherwise. */
export const old2 = REPLACE2 ? { retired: true } : {};
/** Handlers the new cards use, registered only under the switch. */
export const handlers2 = hs => (REPLACE2 ? hs : {});
/** The new cards of this batch that are in the live game (always on, their old cards always retired). */
export const LIVE2 = ['red.bodysnatchers', 'benders.spoilsports'];
