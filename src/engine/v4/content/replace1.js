// Replacement batch 1 (Nov 3; design/notes/replacements-batch1-2026-11-03.md), bot games only. REPLACE1=1 deals eight
// new members in their old cards' places (the old card is retired, so never dealt):
//   red.volunteer -> red.turncoats, market.critic -> market.scavengers, thieves.crew -> thieves.racketeers,
//   purple.clockmaker -> purple.nightwatch, yellow.dyer -> yellow.barterers, silver.giftwrapper -> silver.hostesses,
//   benders.frontrunner (Line Cutters) -> benders.grudge, trading.exporter -> trading.heirs.
// Unset, the new cards are never defined and nothing in the game changes.
export const REPLACE1 = globalThis.process?.env?.REPLACE1 === '1';
/** The new card, in its color's member list only under the switch. */
export const add1 = card => (REPLACE1 ? [card] : []);
/** The old card's extra fields: retired under the switch, nothing otherwise. */
export const old1 = REPLACE1 ? { retired: true } : {};
/** Handlers the new cards use, registered only under the switch. */
export const handlers1 = hs => (REPLACE1 ? hs : {});
