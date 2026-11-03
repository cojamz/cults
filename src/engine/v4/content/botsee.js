// BOTSEE bot test (Nov 3; /mnt/project-files/replacements/why-unbought.md), bot games only. BOTSEE=1 lets Normal bots
// see what a member does when they weigh buying it: an On Use member is credited with what using it would gain
// (bots.js seeUse), and the passive and Round End members below carry their own estimate in followers (botValue as a
// function of the game, read by bots.js abilityValue). Unset, no card carries one and nothing in the game changes.
// Resources count about 1 follower each before round III's end, and almost nothing after it (no buys are left).
export const BOTSEE = globalThis.process?.env?.BOTSEE === '1';
/** A card's estimate, on its def only under the switch. fn(info) -> followers; info from bots.js seeInfo. */
export const see = fn => (BOTSEE ? { botValue: fn } : {});

const SPITE = 0.4; // what a rival's loss is worth to the bots (bots.js SPITE)
const RING = [4, 6, 10]; // a contest's prize by round (core.js RING_VALUE)
/** Rounds whose end is still ahead, this one included: [round, …, 3]. */
export const endsAhead = info => [1, 2, 3].filter(r => r >= info.round);
/** A resource's worth at the end of round r: spendable before round III ends, a leftover after. */
export const resAt = r => (r < 3 ? 1 : 0.3);
export { SPITE as SEE_SPITE, RING as SEE_RING };
