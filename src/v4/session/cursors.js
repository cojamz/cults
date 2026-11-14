// Live cursors (Cory, 2026-11-07: "are we able to show other people's mouses?"): in an online game each player's mouse
// shows on everyone else's table. Never part of the game state: nothing here can change a move.
//
// Screens differ in size and layout, so a cursor is sent as a place on the table, not a pixel: the thing under it (a
// space on the wheel, a card, a seat, a region; see game/Cursors.jsx) and where inside that thing, as shares of its
// width and height. The other table finds the same thing on its own screen and puts the cursor at the same share.
//
// Cursors live beside the room (v3rooms/<CODE>_cur/<playerId>), not inside it: everyone listens to the whole room, and
// ten writes a second per mouse there would re-run the room's whole update on every table.
import { createEmitter } from './emitter.js';

/** Fewest ms between two writes of one player's cursor (about 12 a second; the other table glides between them). */
export const CURSOR_GAP_MS = 80;
/** A cursor that hasn't moved this long fades (its player walked away from the mouse). */
export const CURSOR_IDLE_MS = 8000;
const ANCHOR_MAX = 120;

export const cursorPath = (root, code) => `${root}/${code}_cur`;

const share = v => (typeof v === 'number' && Number.isFinite(v) && v >= -0.5 && v <= 1.5 ? Math.round(v * 1000) / 1000 : null);

/** A cursor as sent: { a: anchor key, x, y } with x and y shares of the anchor's box; null when it's off the table. */
export function cleanCursor(c) {
  if (!c || typeof c !== 'object') return null;
  const a = typeof c.a === 'string' ? c.a.slice(0, ANCHOR_MAX) : '';
  const x = share(c.x), y = share(c.y);
  if (x == null || y == null) return null;
  return { a, x, y };
}

const same = (p, q) => (!p && !q) || (p && q && p.a === q.a && p.x === q.x && p.y === q.y);

/**
 * One table's cursors over a transport.
 * @param {{ transport: any, path: string, playerId: string, getRoom: () => any }} o
 */
export function createCursors({ transport, path, playerId, getRoom, gapMs = CURSOR_GAP_MS }) {
  const mine = `${path}/${playerId}`;
  const subs = createEmitter();
  let list = [];
  let raw = null;
  let closed = false;
  let sent = null;   // last cursor written
  let want = null;   // the newest one asked for
  let lastAt = 0;
  let timer = null;
  let armed = false;

  // a cursor counts only from the person sitting in that seat (like table talk)
  const read = () => {
    const room = getRoom();
    const out = [];
    for (const [id, rec] of Object.entries(raw || {})) {
      if (id === playerId || !rec) continue;
      const seat = Number(rec.seat);
      const s = room?.seats?.[`s${seat}`];
      const c = cleanCursor(rec);
      if (!c || !s || s.kind !== 'human' || s.id !== id) continue;
      out.push({ id, seat, ...c });
    }
    out.sort((p, q) => p.seat - q.seat);
    return out;
  };
  const publish = () => {
    const next = read();
    if (next.length === list.length && next.every((c, i) => c.id === list[i].id && c.seat === list[i].seat && same(c, list[i]))) return;
    list = next;
    subs.emit(list);
  };
  const off = transport.subscribe(path, v => { if (closed) return; raw = v && typeof v === 'object' ? v : null; publish(); });

  const flush = () => {
    timer = null;
    if (closed || same(want, sent)) return;
    const seat = want ? mySeat() : null;
    if (want && seat == null) return;
    sent = want;
    lastAt = Date.now();
    if (!want) { transport.remove(mine).catch(() => {}); return; }
    if (!armed) { armed = true; transport.onDisconnectSet(mine, null).catch(() => {}); }
    transport.set(mine, { seat, ...want }).catch(() => {});
  };
  const mySeat = () => {
    const seats = getRoom()?.seats || {};
    for (const [k, s] of Object.entries(seats)) if (s && s.kind === 'human' && s.id === playerId) return Number(k.slice(1));
    return null;
  };

  return {
    get list() { return list; },
    on: fn => subs.on(fn),
    /** My cursor moved (or left the table: null). Sent at most every gapMs; leaving is sent at once. */
    point(c) {
      if (closed) return;
      want = c ? cleanCursor(c) : null;
      if (!want) { if (timer) { clearTimeout(timer); timer = null; } flush(); return; }
      if (timer) return;
      timer = setTimeout(flush, Math.max(0, lastAt + gapMs - Date.now()));
    },
    /** The room changed (a seat taken by a bot, a player gone): who counts may have too. */
    roomChanged() { if (!closed) publish(); },
    close() {
      if (closed) return;
      if (timer) clearTimeout(timer);
      if (sent) transport.remove(mine).catch(() => {});
      closed = true;
      off();
      subs.clear();
    },
  };
}
