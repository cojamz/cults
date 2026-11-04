// Members E lane of the quality loop (Nov 4; /mnt/project-files/quality/board.md, pitches/E-*.md), bot games only.
// REPLACE14 puts each new card in its old card's place (the old card stays in code, off the wheel or retired):
//   space yellow.meltingpot (Melting Pot) -> yellow.grandtour (Grand Tour)
//   space trading.exchange (Exchange) -> trading.pawnshop (Pawn Shop)
//   member silver.smoothtalker (Smooth Talkers) -> silver.bigspenders (Big Spenders)
//   member silver.smoothtalker (Smooth Talkers) -> silver.charmers (Charmers)
//   member purple.earlybird (Early Birds) -> purple.firstbirds (Early Birds, reworked)
//   member thieves.cutpurse (Cutpurse) -> thieves.filcher (Pickpocket)
//   member thieves.cutpurse (Cutpurse) -> thieves.taxman (Tax Collector)
//   member thieves.extortionist (Extortionist) -> thieves.boss (The Boss)
//   member thieves.extortionist (Extortionist) -> thieves.mobboss (Mob Boss)
//   member trading.heirs (Misers) -> trading.interest (Misers, interest)
//   member trading.broker (Brokers) -> trading.brokerage (Brokers, round-end cash-out)
//   member thieves.accomplice (Accomplice) -> thieves.partners (Accomplice, +1 follower per rival)
//   member trading.shopkeeper (Landlord) -> trading.barker (Barker; Cory's extra follower buy, Nov 4)
//   member market.patroness (Patroness) -> market.ragpicker (Ragpicker)
//   member thieves.shoplifter (Shoplifter) -> thieves.shopcolor (Shoplifter, its color from each rival)
//   member thieves.shoplifter (Shoplifter) -> thieves.shoptwo (Shoplifter, steal 2)
//   space yellow.meltingpot (Melting Pot) -> yellow.openhouse (Open House)
// REPLACE14=1 swaps every one; REPLACE14=grandtour (or a comma list of new keys) swaps only those, so each card gets
// its own trial. Unset, nothing in the game changes.
const RAW = globalThis.process?.env?.REPLACE14 || '';
const ON = new Set(RAW.split(',').map(s => s.trim()).filter(Boolean));
export const REPLACE14 = ON.size > 0;
const EXPLICIT = new Set([]);
const on = key => (RAW === '1' && !EXPLICIT.has(key)) || ON.has(key);
export const on14 = on;
/** The space this switch puts on the wheel in place of the old one. */
export const swap14 = (oldSpace, newSpace) => (on(newSpace.key) ? newSpace : oldSpace);
/** Handlers the new cards use, registered only under the switch. */
export const handlers14 = hs => (REPLACE14 ? hs : {});
/** A new member in its color's list only when switched on (REPLACE14=1 or its key). */
export const add14 = card => (on(card.key) ? [card] : []);
/** The old member it replaces, retired while the new one is on. */
export const old14 = newKey => (on(newKey) ? { retired: true } : {});
