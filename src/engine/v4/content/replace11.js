// Actions lane of the overnight quality loop (Nov 4; /mnt/project-files/quality/board.md), bot games only. REPLACE11
// puts new wheel spaces in their old spaces' places (the old space stays in code, off the wheel):
//   space purple.again (Right Away) -> purple.callback (Call Back)
//   space trading.estatesale (Estate Sale) -> trading.yardsale (Yard Sale)
//   space silver.polish (Polish) -> silver.giftshop (Gift Shop)
//   space silver.tongue (Sweet Talk) -> silver.sweetnothings (Sweet Nothings)
//   space yellow.bigdilute (Big New Blood) -> yellow.housewarming (Housewarming)
// REPLACE11=1 swaps every one; REPLACE11=yardsale (or a comma list of new keys) swaps only those, so each space gets
// its own trial. Pitches: /mnt/project-files/quality/pitches/actions-*.md. Unset, the wheel is unchanged.
const RAW = globalThis.process?.env?.REPLACE11 || '';
const ON = new Set(RAW.split(',').map(s => s.trim()).filter(Boolean));
export const REPLACE11 = ON.size > 0;
const on = key => RAW === '1' || ON.has(key);
/** The space this switch puts on the wheel in place of the old one. */
export const swap11 = (oldSpace, newSpace) => (on(newSpace.key) ? newSpace : oldSpace);
/** Handlers the new spaces use, registered only under the switch. */
export const handlers11 = hs => (REPLACE11 ? hs : {});
