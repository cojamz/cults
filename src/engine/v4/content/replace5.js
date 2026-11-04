// Replacement batch 5 (Nov 3; /mnt/project-files/replacements/batch5.md), bot games only. REPLACE5=1 deals six new
// members in their old cards' places (the old card is retired, so never dealt); independent of REPLACE1 to REPLACE4:
//   yellow.dyer (and batch 1's yellow.barterers, under REPLACE1) -> yellow.secondfiddles, thieves.sticky (Sticky
//   Fingers) -> thieves.secondstory, thieves.shoplifter -> thieves.jackals, thieves.doubleagent -> thieves.vultures,
//   purple.bouncer -> purple.tagalongs, purple.timekeepers -> purple.fullhouse.
// Live since Nov 4 (Claude, under Cory's "use your judgement"): Second-Story Man is always on and Sticky Fingers always
// retired, with or without the switch (thieves.js prints them without add5/old5). Unset, the other five new cards are
// never defined.
export const REPLACE5 = globalThis.process?.env?.REPLACE5 === '1';
/** The new card, in its color's member list only under the switch. */
export const add5 = card => (REPLACE5 ? [card] : []);
/** The old card's extra fields: retired under the switch, nothing otherwise. */
export const old5 = REPLACE5 ? { retired: true } : {};
/** Handlers the new cards use, registered only under the switch. */
export const handlers5 = hs => (REPLACE5 ? hs : {});
/** The new cards of this batch that are in the live game (always on, their old cards always retired). */
export const LIVE5 = ['thieves.secondstory'];
