// Live cursors (Cory, 2026-11-07: "are we able to show other people's mouses?"): in an online game, every other
// player's mouse shows on your table as a small arrow in their seat color with their emoji and name.
//
// Screens differ, so a cursor travels as the thing under it plus where inside it (session/cursors.js). The sender walks
// up from the element under the mouse to the nearest thing both tables have, and that's only kept when it's the only
// one on the page; else the next one out; else the page itself.
// Positions are written straight to each arrow's style: a mouse moving twelve times a second never re-renders the table.
import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CURSOR_GAP_MS, CURSOR_IDLE_MS } from '../session/cursors.js';
import { playerColor, seatEmoji } from '../format.js';
import { Minion, ROBE } from '../art/Leader.jsx';
import { cloakOf, CLOAK_HEX } from './cloak.js';
import { createEmitter } from '../session/emitter.js';
import './cursors.css';

// Whether others see my cursor (Cory, 2026-11-07: "players should be able to turn off their cursor being seen"): a
// switch in the menu, kept in this browser. On by default.
const SHARE_KEY = 'patrons.v4.cursorShare';
const shareSubs = createEmitter();
export function cursorShared() { try { return localStorage.getItem(SHARE_KEY) !== 'off'; } catch { return true; } }
export function setCursorShared(on) { try { localStorage.setItem(SHARE_KEY, on ? 'on' : 'off'); } catch { /* private window */ } shareSubs.emit(!!on); }
export const onCursorShared = fn => shareSubs.on(fn);

// Which look the arrows wear: 'seat' (an arrow in the seat color), 'robe' (an arrow in the robe color) or 'minion' (the
// player's own minion, outlined in their robe color). ?cursorLook= on the page picks one (the looks shown to Cory).
const urlLook = () => { try { return new URLSearchParams(globalThis.location?.search || '').get('cursorLook') || ''; } catch { return ''; } };
export const CURSOR_LOOKS = ['seat', 'robe', 'minion'];
export const cursorLook = () => (CURSOR_LOOKS.includes(urlLook()) ? urlLook() : 'seat');
const robeOf = (state, seat) => { const c = cloakOf(state, seat); return c ? CLOAK_HEX[c] : ROBE; };

const ANCHORS = '.lt-seat[data-pid], [data-uid], [data-slot], [data-cell], [data-rate], [data-deck], [data-region]';
const esc = v => (globalThis.CSS?.escape ? CSS.escape(String(v)) : String(v).replace(/["\\]/g, '\\$&'));

/** The key another table can find this element by, or '' when it has none. */
export function anchorKey(el) {
  if (!el || !el.matches) return '';
  const d = el.dataset || {};
  if (el.matches('.lt-seat[data-pid]')) return `.lt-seat[data-pid="${esc(d.pid)}"]`;
  if (d.uid != null) return `[data-uid="${esc(d.uid)}"]`;
  if (d.slot != null) return `[data-slot="${esc(d.slot)}"]`;
  if (d.cell != null) return `[data-cell="${esc(d.cell)}"]`;
  if (d.rate != null) return `[data-rate="${esc(d.rate)}"]`;
  if (el.hasAttribute('data-deck')) return '[data-deck]';
  if (d.region) return `[data-region="${esc(d.region)}"]`;
  return '';
}

/** Where a mouse at (x, y) over `target` is on the table: { a, x, y } (shares of the anchor's box, or of the page). */
export function placeOf(target, x, y, doc = document) {
  let el = target && target.closest ? target.closest(ANCHORS) : null;
  while (el) {
    const a = anchorKey(el);
    if (a) {
      let n = 0;
      try { n = doc.querySelectorAll(a).length; } catch { n = 0; }
      const r = n === 1 && el.getBoundingClientRect();
      if (r && r.width > 2 && r.height > 2) return { a, x: (x - r.left) / r.width, y: (y - r.top) / r.height };
    }
    el = el.parentElement && el.parentElement.closest(ANCHORS);
  }
  const w = doc.defaultView || globalThis;
  return { a: '', x: x / (w.innerWidth || 1), y: y / (w.innerHeight || 1) };
}

/** Where a cursor sent as { a, x, y } lands on this screen, in page pixels; null when its anchor isn't here. */
export function pointOf(c, root, doc = document) {
  if (!c.a) { const w = doc.defaultView || globalThis; return { x: c.x * w.innerWidth, y: c.y * w.innerHeight }; }
  let el = null;
  try { el = (root && root.querySelector(c.a)) || doc.querySelector(c.a); } catch { el = null; }
  if (!el) return null;
  const r = el.getBoundingClientRect();
  if (r.width < 1 || r.height < 1) return null;
  return { x: r.left + c.x * r.width, y: r.top + c.y * r.height };
}

/** Sends this player's mouse (not touches: a phone has no cursor to show) while the session takes cursors. */
function useSendCursor(session, online) {
  const [shared, setShared] = useState(cursorShared);
  useEffect(() => onCursorShared(setShared), []);
  const on = online && shared;
  useEffect(() => {
    if (!on || typeof session.pointAt !== 'function') return undefined;
    let last = null;
    let timer = null;
    const send = () => { timer = null; if (last) session.pointAt(placeOf(last.target, last.x, last.y)); };
    const move = e => {
      if (e.pointerType === 'touch') return;
      last = { target: e.target, x: e.clientX, y: e.clientY };
      if (!timer) timer = setTimeout(send, CURSOR_GAP_MS);
    };
    const away = () => { last = null; if (timer) { clearTimeout(timer); timer = null; } session.pointAt(null); };
    const leave = e => { if (!e.relatedTarget) away(); };
    const hide = () => { if (document.visibilityState === 'hidden') away(); };
    addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerout', leave);
    addEventListener('blur', away);
    document.addEventListener('visibilitychange', hide);
    return () => {
      removeEventListener('pointermove', move);
      document.removeEventListener('pointerout', leave);
      removeEventListener('blur', away);
      document.removeEventListener('visibilitychange', hide);
      away();
    };
  }, [session, on]);
}

/** Every other player's cursor over the table. */
function Cursors({ session, state, rootRef }) {
  const online = typeof session.onCursors === 'function';
  useSendCursor(session, online);
  const [ids, setIds] = useState(() => (online ? session.cursors.map(c => `${c.id}|${c.seat}`).join(',') : ''));
  const nodes = useRef(new Map());
  const latest = useRef([]);
  const moved = useRef(new Map()); // id -> { key, at } (when it last moved, by this screen's clock)

  useEffect(() => {
    if (!online) return undefined;
    const place = () => {
      const now = performance.now();
      for (const c of latest.current) {
        const el = nodes.current.get(c.id);
        if (!el) continue;
        const p = pointOf(c, rootRef?.current);
        const m = moved.current.get(c.id);
        const idle = !m || now - m.at > CURSOR_IDLE_MS;
        if (!p) { el.dataset.off = ''; continue; }
        delete el.dataset.off;
        el.style.transform = `translate(${Math.round(p.x)}px,${Math.round(p.y)}px)`;
        if (idle) el.dataset.idle = ''; else delete el.dataset.idle;
      }
    };
    const take = list => {
      const now = performance.now();
      for (const c of list) {
        const key = `${c.a}|${c.x}|${c.y}`;
        const m = moved.current.get(c.id);
        if (!m || m.key !== key) moved.current.set(c.id, { key, at: now });
      }
      latest.current = list;
      setIds(list.map(c => `${c.id}|${c.seat}`).join(','));
      place();
    };
    take(session.cursors);
    const off = session.onCursors(take);
    // the table moves under a still cursor (a column grows, the window resizes) and idle cursors fade: a slow re-place
    const tick = setInterval(place, 500);
    addEventListener('resize', place);
    return () => { off(); clearInterval(tick); removeEventListener('resize', place); };
  }, [session, online, rootRef]);

  // a freshly drawn arrow takes its place before it paints
  useLayoutEffect(() => {
    for (const c of latest.current) {
      const el = nodes.current.get(c.id);
      if (!el || el.style.transform) continue;
      const p = pointOf(c, rootRef?.current);
      if (p) el.style.transform = `translate(${Math.round(p.x)}px,${Math.round(p.y)}px)`; else el.dataset.off = '';
    }
  }, [ids, rootRef]);

  if (!online || !ids) return null;
  const look = cursorLook();
  return createPortal(
    <div className="cursors" aria-hidden="true">
      {ids.split(',').map(k => {
        const [id, s] = k.split('|');
        const seat = Number(s);
        const p = state.players[seat];
        if (!p) return null;
        const color = look === 'seat' ? playerColor(seat) : robeOf(state, seat);
        return (
          <div key={id} className={`cursor cursor-${look}`} data-cursor-seat={seat} style={{ '--pc': color }}
            ref={el => { if (el) nodes.current.set(id, el); else nodes.current.delete(id); }}>
            {look === 'minion'
              ? <span className="cursor-minion"><Minion color={color} emoji={seatEmoji(state, seat)} size={28} /></span>
              : <svg className="cursor-arrow" viewBox="0 0 14 20" width="14" height="20">
                <path d="M1 1 L1 16 L5 12.5 L7.8 18.6 L10.4 17.4 L7.7 11.5 L12.6 11.5 Z" />
              </svg>}
            <span className="cursor-name">{look !== 'minion' && <Minion color={color} emoji={seatEmoji(state, seat)} size={16} />}{p.name}</span>
          </div>
        );
      })}
    </div>,
    document.body,
  );
}

export default memo(Cursors, (a, b) => a.session === b.session && a.rootRef === b.rootRef
  && a.state.players.length === b.state.players.length && a.state.players.every((p, i) => p.name === b.state.players[i].name && p.emoji === b.state.players[i].emoji && cloakOf(a.state, i) === cloakOf(b.state, i)));

/** The menu's switch: whether the other players see your mouse (online games only). */
export function CursorSetting() {
  const [on, setOn] = useState(cursorShared);
  useEffect(() => onCursorShared(setOn), []);
  return (
    <button type="button" role="menuitemcheckbox" aria-checked={on} className="btn ghost cursor-share-btn" data-cursor-share={on ? 'on' : 'off'}
      onClick={() => setCursorShared(!on)} title="Whether the other players see where your mouse is">
      {on ? 'Others see my mouse' : 'My mouse is hidden'}
    </button>
  );
}
