// Quality loop, lane B (Silver; Nov 4 overnight; /mnt/project-files/quality/pitches/B-*.md and the paper gate in
// /mnt/project-files/quality/evals/gate/B-*/), bot games only. REPLACE8=1 deals the lane's picks in their old cards'
// places (the old card is retired, so never dealt); independent of the other switches:
//   silver.debtcollector -> silver.wellwishers
//   silver.polisher -> silver.usher
//   silver.toastmaster -> silver.guestofhonor
//   silver.highsociety -> silver.socialites
// One card at a time by key (REPLACE8=wellwishers, =usher, =guestofhonor, =socialites, or a comma list of keys), so each trials on its own.
// Unset, the new cards are never defined and nothing in the game changes.
const VAL = globalThis.process?.env?.REPLACE8 || '';
const PICKS = ['wellwishers', 'usher', 'guestofhonor', 'socialites'];
/** new card key -> the old card id it takes the place of */
const REPLACES = { wellwishers: 'silver.debtcollector', usher: 'silver.polisher', guestofhonor: 'silver.toastmaster', socialites: 'silver.highsociety' };
export const ON8 = VAL === '1' ? PICKS : VAL.split(',').map(x => x.trim()).filter(k => REPLACES[k]);
export const REPLACE8 = ON8.length > 0;
/** The new card, in its color's member list only when it is switched on. */
export const add8 = card => (ON8.includes(card.key) ? [card] : []);
/** The old card's extra fields: retired when a card that replaces it is on, nothing otherwise. */
export const old8 = oldId => (ON8.some(k => REPLACES[k] === oldId) ? { retired: true } : {});
/** Handlers the new cards use, registered under the switch. */
export const handlers8 = hs => (REPLACE8 ? hs : {});
/** The new cards of this batch that are in the live game (none until one ships). */
export const LIVE8 = [];
