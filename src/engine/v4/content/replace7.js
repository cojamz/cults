// Card quality loop, Members A (Red, Purple), Nov 4 overnight (/mnt/project-files/quality/pitches/A-*.md and the paper
// gate in /mnt/project-files/quality/evals/gate/A-*/), bot games only. REPLACE7=1 deals the lane's picks in their old
// cards' places (the old card is retired, so never dealt); independent of REPLACE1 to REPLACE6:
//   red.volunteer -> red.seatfiller
//   (red.recruitbonus -> red.fosterparents is live since Nov 4: Greeters always retired, Foster Parents always on)
//   red.patriarch -> red.godfather
//   purple.crew -> purple.daylaborers
//   purple.timekeepers -> purple.nightmanager
//   purple.nightwatch -> purple.pacesetters
// Alternates, by name instead of 1 (REPLACE7=interrupter, REPLACE7=ushers, or a comma list of card keys):
//   purple.courier (alt: lowered Purple's set score; Cory Nov 4: "I don't like interrupter. That's bad.") -> purple.interrupter
//   purple.courier (alt; Cory Nov 4 said no, he keeps Courier reworded) -> purple.runner
//   red.recruitbonus (alt: paper 14, read as a must-buy) -> red.ushers
//   red.patriarch (alt: Godfather retuned after its trial, worth 3 and counts as 3) -> red.crimefamily
//   purple.timekeepers (alt: batch 5, round I extra-turn taste; Night Manager lost blind play) -> purple.gobetween
//   purple.timekeepers (alt: scale-up 1, paper 15) -> purple.nightshift
//   purple.timekeepers (alt: scale-up 1, paper 17) -> purple.sleepyheads
//   purple.timekeepers (alt: scale-up 1, paper 17, set 14) -> purple.wakeupcaller
//   purple.crew (alt: scale-up 1, paper 14 vs 8) -> purple.snoozers
//   red.proselytizer (alt: scale-up 1, paper 19) -> red.drillsergeant
//   red.proselytizer (alt: scale-up 1, paper +4 pooled) -> red.converts
// Unset, the new cards are never defined and nothing in the game changes.
const VAL = globalThis.process?.env?.REPLACE7 || '';
const PICKS = ['seatfiller', 'godfather', 'daylaborers', 'nightmanager', 'pacesetters'];
/** new card key -> the old card id it takes the place of */
const REPLACES = { seatfiller: 'red.volunteer', interrupter: 'purple.courier', runner: 'purple.courier', ushers: 'red.recruitbonus', godfather: 'red.patriarch', crimefamily: 'red.patriarch', gobetween: 'purple.timekeepers', nightshift: 'purple.timekeepers', sleepyheads: 'purple.timekeepers', wakeupcaller: 'purple.timekeepers', snoozers: 'purple.crew', drillsergeant: 'red.proselytizer', converts: 'red.proselytizer', daylaborers: 'purple.crew', nightmanager: 'purple.timekeepers', pacesetters: 'purple.nightwatch' };
export const ON7 = VAL === '1' ? PICKS : VAL.split(',').map(x => x.trim()).filter(k => REPLACES[k]);
export const REPLACE7 = ON7.length > 0;
/** The new card, in its color's member list only when it is switched on. */
export const add7 = card => (ON7.includes(card.key) ? [card] : []);
/** The old card's extra fields: retired when a card that replaces it is on, nothing otherwise. */
export const old7 = oldId => (ON7.some(k => REPLACES[k] === oldId) ? { retired: true } : {});
/** Handlers the new cards use, registered under the switch. */
export const handlers7 = hs => (REPLACE7 ? hs : {});
/** The lane's cards in the live game (always on; their old cards always retired). */
export const LIVE7 = ['red.fosterparents'];
