// Quality loop, lane D (Magenta, White, Green; Nov 4 overnight, /mnt/project-files/quality/pitches/D-*.md), bot games
// only. The new members take their old cards' places (the old card is retired, so never dealt):
//   thieves.grifter -> thieves.racketeer, trading.oldmoney -> trading.pauper, echo.chronicler -> echo.bootlegger, echo.evergreen (Busker) -> echo.warmup,
//   trading.shopkeeper (Landlord) -> trading.almoner, trading.heiress (Heiresses) -> trading.widows
//   space: thieves.tipoff (Stash) -> thieves.mug (Mug the Leader), or thieves.insidejob (Inside Job), in Stash's place
// REPLACE10=1 turns every one on; REPLACE10=pauper (or a comma list of new keys) only those, so each card gets its own
// trial. Unset, the new cards are never defined and their old cards stay.
const RAW = globalThis.process?.env?.REPLACE10 || '';
const ON = new Set(RAW.split(',').map(s => s.trim()).filter(Boolean));
export const REPLACE10 = ON.size > 0;
/** Is the new card or space with this key switched on? */
export const on10 = key => RAW === '1' || ON.has(key);
/** The new card, in its color's member list only under the switch. */
export const add10 = card => (on10(card.key) ? [card] : []);
/** The old card's extra fields, given the key of the card that replaces it: retired under the switch, nothing otherwise. */
export const old10 = newKey => (on10(newKey) ? { retired: true } : {});
/** Handlers the new cards use, registered under any of the switch. */
export const handlers10 = hs => (REPLACE10 ? hs : {});
/** The new cards of this batch that are in the live game (always on, their old cards always retired). */
export const LIVE10 = [];
