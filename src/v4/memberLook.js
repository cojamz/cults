// How members look to this viewer (Cory, Nov 3: "lets create an alt mode for it? in the setup?"): 'pictures' (the pixel
// cards) or 'emoji' (one emoji and a one-line rule, art/emojiMembers.js). A look, like the speed: kept in this browser,
// never in the game, so an online table can mix looks and no rule changes. ?members=emoji in the address wins for that page.
const KEY = 'patrons.v4.memberLook';
export const LOOKS = ['pictures', 'emoji'];
/** Offered on the setup screens? Not for now (Cory, Nov 8: "remove emoji memebrs option for now… keep them up to date, just
 *  dont show the option"): a look saved before stays unread, so nobody is left on emoji with no switch back; the
 *  address's ?members=emoji still shows it. */
export const LOOK_OFFERED = false;
function read() {
  try { const u = new URLSearchParams(globalThis.location?.search || '').get('members'); if (LOOKS.includes(u)) return u; } catch { /* no location */ }
  if (LOOK_OFFERED) try { const v = globalThis.localStorage && localStorage.getItem(KEY); if (LOOKS.includes(v)) return v; } catch { /* private window */ }
  return 'pictures';
}
let look = read();
const subs = new Set();
export const memberLook = () => look;
export const emojiLook = () => look === 'emoji';
export function setMemberLook(v) {
  if (!LOOKS.includes(v) || v === look) return;
  look = v;
  try { localStorage.setItem(KEY, v); } catch { /* private window */ }
  for (const fn of subs) fn(v);
}
export const onMemberLook = fn => { subs.add(fn); return () => subs.delete(fn); };
