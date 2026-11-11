// Your own shop in your own order (Cory, Nov 9: "you should be able to reorganize your own shop with drag and drop to
// reorder"). Drag a member card onto another card's place: it takes that place and the cards between move along. The
// order is yours alone (this screen, this round, as a hand of cards on a table would be): it holds while the round
// lasts, a refill takes the place of the card that left, and the cost/color sort or a new round sorts the row again.
// A drag never recruits: the click that ends it is swallowed. Mouse and pen only (a finger drag on a phone scrolls).
import { useEffect, useLayoutEffect, useRef } from 'react';

const SLOP = 6; // px before a press becomes a drag

/** The order after moving the card at index `from` to index `to`. */
export function moveOrder(order, from, to) {
  if (from === to || from < 0 || to < 0 || from >= order.length || to >= order.length) return order;
  const next = order.slice();
  const [u] = next.splice(from, 1);
  next.splice(to, 0, u);
  return next;
}

/**
 * rowRef: the cards' container. on: dragging allowed now. order: the shop's uids in the order shown. reorder(next):
 * keep the new order. hover: the hover cards (closed as a drag starts).
 */
export function useShopDrag(rowRef, { on, order, reorder, hover }) {
  const st = useRef(null);
  const flip = useRef(null);
  const latest = useRef({ on, order, reorder, hover });
  latest.current = { on, order, reorder, hover };
  const swallow = useRef(false);
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return undefined;
    const cardOf = el => el && el.closest && el.closest('.lt-card[data-uid]');
    const cards = () => [...row.querySelectorAll('.lt-card[data-uid]')].filter(el => latest.current.order.includes(Number(el.dataset.uid)));
    const down = e => {
      const { on: ok, order: ord } = latest.current;
      if (!ok || e.button !== 0 || e.pointerType === 'touch') return;
      const el = cardOf(e.target);
      if (!el || !ord.includes(Number(el.dataset.uid))) return;
      st.current = { el, uid: Number(el.dataset.uid), x0: e.clientX, y0: e.clientY, live: false, to: null, pid: e.pointerId };
    };
    const move = e => {
      const s = st.current;
      if (!s) return;
      const dx = e.clientX - s.x0, dy = e.clientY - s.y0;
      if (!s.live) {
        if (Math.hypot(dx, dy) < SLOP) return;
        s.live = true;
        latest.current.hover?.close?.();
        try { s.el.setPointerCapture?.(s.pid); } catch { /* gone */ }
        s.el.classList.add('dragging');
        row.dataset.dragging = '';
      }
      s.el.style.transform = `translate(${dx}px,${dy}px) scale(1.04)`;
      // the place whose card's middle is nearest the pointer
      let best = null, bd = Infinity;
      for (const c of cards()) {
        if (c === s.el) continue;
        const r = c.getBoundingClientRect();
        const d = Math.hypot(r.left + r.width / 2 - e.clientX, r.top + r.height / 2 - e.clientY);
        if (d < bd && d < Math.max(r.width, r.height) * 0.75) { bd = d; best = c; }
      }
      if (s.to !== best) {
        s.to?.classList.remove('drop-here');
        best?.classList.add('drop-here');
        s.to = best;
      }
    };
    const end = () => {
      const s = st.current;
      st.current = null;
      if (!s || !s.live) return;
      swallow.current = true;
      setTimeout(() => { swallow.current = false; }, 0);
      s.el.classList.remove('dragging');
      s.to?.classList.remove('drop-here');
      delete row.dataset.dragging;
      const { order: ord, reorder: keep } = latest.current;
      const from = ord.indexOf(s.uid), to = s.to ? ord.indexOf(Number(s.to.dataset.uid)) : -1;
      // every card's place now, for the slide to its new one (the dragged card from where it was let go)
      const was = new Map(cards().map(c => [Number(c.dataset.uid), c.getBoundingClientRect()]));
      s.el.style.transform = '';
      if (to < 0 || to === from) {
        // dropped nowhere: it slides back
        const r = was.get(s.uid), home = s.el.getBoundingClientRect();
        if (r && s.el.animate) s.el.animate([{ transform: `translate(${r.left - home.left}px,${r.top - home.top}px)` }, { transform: 'none' }], { duration: 180, easing: 'cubic-bezier(.3,.7,.4,1)' });
        return;
      }
      flip.current = was;
      keep(moveOrder(ord, from, to));
    };
    const click = e => { if (swallow.current) { e.stopPropagation(); e.preventDefault(); swallow.current = false; } };
    row.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
    row.addEventListener('click', click, true);
    return () => {
      row.removeEventListener('pointerdown', down);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', end);
      window.removeEventListener('pointercancel', end);
      row.removeEventListener('click', click, true);
    };
  }, [rowRef]);
  // the cards slide from where they stood to their new places
  useLayoutEffect(() => {
    const was = flip.current;
    const row = rowRef.current;
    if (!was || !row) return;
    flip.current = null;
    for (const c of row.querySelectorAll('.lt-card[data-uid]')) {
      const r = was.get(Number(c.dataset.uid));
      if (!r || !c.animate) continue;
      const now = c.getBoundingClientRect();
      const dx = r.left - now.left, dy = r.top - now.top;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) continue;
      c.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 220, easing: 'cubic-bezier(.3,.7,.4,1)' });
    }
  });
}
