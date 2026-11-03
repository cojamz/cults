// Replacement batch 6 (Nov 3; /mnt/project-files/replacements/batch6.md), bot games only. REPLACE6=1 deals seven new
// members in their old cards' places (the old card is retired, so never dealt); independent of REPLACE1 to REPLACE5:
//   silver.gala (Debutantes, and batch 2's silver.fundraisers under REPLACE2) -> silver.socialclimbers, silver.guest
//   (Hangers-On) -> silver.godparents, trading.cashier -> trading.successors, trading.raider (Raiders) ->
//   trading.inquisitors, trading.oldmoney -> trading.pallbearers, benders.hr -> benders.sorelosers,
//   benders.freelancer (Alchemists) -> benders.peddlers.
// Unset, the new cards are never defined and nothing in the game changes.
export const REPLACE6 = globalThis.process?.env?.REPLACE6 === '1';
/** The new card, in its color's member list only under the switch. */
export const add6 = card => (REPLACE6 ? [card] : []);
/** The old card's extra fields: retired under the switch, nothing otherwise. */
export const old6 = REPLACE6 ? { retired: true } : {};
/** Handlers the new cards use, registered only under the switch. */
export const handlers6 = hs => (REPLACE6 ? hs : {});
