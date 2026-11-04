// Actions lane of the overnight quality loop (Nov 4; /mnt/project-files/quality/board.md), bot games only. REPLACE11
// puts new wheel spaces in their old spaces' places (the old space stays in code, off the wheel):
//   space purple.again (Right Away) -> purple.callback (Call Back)
//   space trading.estatesale (Estate Sale) -> trading.yardsale (Yard Sale)
//   space silver.polish (Polish) -> silver.giftshop (Gift Shop)
//   space silver.tongue (Sweet Talk) -> silver.sweetnothings (Sweet Nothings)
//   (Housewarming went live in Big New Blood's place, Nov 4: no longer behind the switch)
//   space trading.estatesale (Estate Sale) -> trading.cashout (Cash Out), only by REPLACE11=cashout
//   member market.snob (Snobs, Game End scorer) -> market.snob2 (Snobs, the reserved token)
//   member trading.shopkeeper (Landlord) -> trading.landlord2 (Landlord, rent on a space)
//   space thieves.tipoff (Stash) -> thieves.racket (Racket, Cory's Oct 31 standing pick, D's reword), only by its own key
//   member market.regular (Regular) -> market.punchcard (Punch Card), only by its own key
//   guest frontrunner (Line Cutters) -> placeholders (Place Holders), only by its own key
// REPLACE11=1 swaps every one; REPLACE11=yardsale (or a comma list of new keys) swaps only those, so each space gets
// its own trial. Pitches: /mnt/project-files/quality/pitches/actions-*.md. Unset, the wheel is unchanged.
const RAW = globalThis.process?.env?.REPLACE11 || '';
const ON = new Set(RAW.split(',').map(s => s.trim()).filter(Boolean));
export const REPLACE11 = ON.size > 0;
// cashout shares Estate Sale's place with Yard Sale, so it is on only by its own key (REPLACE11=1 keeps Yard Sale)
const EXPLICIT = new Set(['cashout', 'racket', 'punchcard', 'placeholders']);
const on = key => (RAW === '1' && !EXPLICIT.has(key)) || ON.has(key);
export const on11 = on;
/** The space this switch puts on the wheel in place of the old one. */
export const swap11 = (oldSpace, newSpace) => (on(newSpace.key) ? newSpace : oldSpace);
/** Handlers the new spaces use, registered only under the switch. */
export const handlers11 = hs => (REPLACE11 ? hs : {});
/** A new member in its color's list only when switched on (REPLACE11=1 or its key). */
export const add11 = card => (on(card.key) ? [card] : []);
/** The old member it replaces, retired while the new one is on. */
export const old11 = newKey => (on(newKey) ? { retired: true } : {});
