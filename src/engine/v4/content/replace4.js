// Replacement batch 4 (Nov 3; /mnt/project-files/replacements/batch4.md), bot games only. REPLACE4=1 deals seven new
// members in their old cards' places (the old card is retired, so never dealt); independent of REPLACE1 to REPLACE3:
//   red.proselytizer -> red.defectors, red.mentor (Mentor & Protégés) -> red.tithetakers, echo.dejavu (Tribute Band) ->
//   echo.openingact, echo.roadie -> echo.copycats, market.windowdresser -> market.outbidders, market.connoisseur ->
//   market.hawkers, market.windowshopper -> market.lateshoppers.
// Live since Nov 4 (Claude, under Cory's "use your judgement"): Hawker is always on and Connoisseurs always retired,
// with or without the switch (market.js prints them without add4/old4). Unset, the other six new cards are never defined.
export const REPLACE4 = globalThis.process?.env?.REPLACE4 === '1';
/** The new card, in its color's member list only under the switch. */
export const add4 = card => (REPLACE4 ? [card] : []);
/** The old card's extra fields: retired under the switch, nothing otherwise. */
export const old4 = REPLACE4 ? { retired: true } : {};
/** Handlers the new cards use, registered only under the switch. */
export const handlers4 = hs => (REPLACE4 ? hs : {});
/** The new cards of this batch that are in the live game (always on, their old cards always retired). */
export const LIVE4 = ['market.hawkers'];
