// Lane F of the card quality loop (Nov 4; /mnt/project-files/quality/board.md, pitches/F-batch1.md), bot games only.
// REPLACE13=<key> (or a comma list) puts one new wheel space in its old space's place (the old space stays in code):
//   space thieves.ransom (Shake Down) -> thieves.cleanout (Clean Out)
//   space thieves.ransom (Shake Down) -> thieves.mugging (Mugging)
//   space thieves.ransom (Shake Down) -> thieves.squeeze (Squeeze)
//   member market.trendsetter (Trendsetters) -> market.pickers (Pickers), market.trendsetters2 (Tastemakers),
//     market.fashionpolice (Fashion Police)
//   member purple.closer (Closer) -> purple.lastorders (Last Orders), purple.nightporter (Night Porter),
//     purple.closingact (Closing Act: Closer's lifted control)
//   member purple.gossip (Gossip) -> purple.busybody (Busybody: Gossip's lifted control)
// Candidates for one slot share it, so each is on only by its own key. Unset, nothing changes.
const RAW = globalThis.process?.env?.REPLACE13 || '';
const ON = new Set(RAW.split(',').map(s => s.trim()).filter(Boolean));
export const REPLACE13 = ON.size > 0;
export const on13 = key => ON.has(key);
/** The space this switch puts on the wheel in place of the old one (first switched-on candidate wins). */
export const swap13 = (oldSpace, ...cands) => cands.find(c => on13(c.key)) || oldSpace;
/** Handlers the new spaces use, registered only under the switch. */
export const handlers13 = hs => (REPLACE13 ? hs : {});
/** A new member in its color's list only when its key is on. */
export const add13 = card => (on13(card.key) ? [card] : []);
/** The old member, retired while any of its candidates is on. */
export const old13 = (...keys) => (keys.some(on13) ? { retired: true } : {});
