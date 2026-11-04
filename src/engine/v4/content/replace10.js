// Quality loop, lane D (Magenta, White, Green; Nov 4 overnight, /mnt/project-files/quality/pitches/D-*.md), bot games
// only. REPLACE10=1 deals the new members in their old cards' places (the old card is retired, so never dealt):
//   thieves.grifter -> thieves.racketeer, trading.oldmoney -> trading.pauper, echo.chronicler -> echo.wannabe
// Unset, the new cards are never defined and their old cards stay.
export const REPLACE10 = globalThis.process?.env?.REPLACE10 === '1';
/** The new card, in its color's member list only under the switch. */
export const add10 = card => (REPLACE10 ? [card] : []);
/** The old card's extra fields: retired under the switch, nothing otherwise. */
export const old10 = REPLACE10 ? { retired: true } : {};
/** Handlers the new cards use, registered only under the switch. */
export const handlers10 = hs => (REPLACE10 ? hs : {});
/** The new cards of this batch that are in the live game (always on, their old cards always retired). */
export const LIVE10 = [];
