// A whole answer taken one engine question at a time (SplitPicker: Harvest's coins; SpendPicker: Exchange's turn-in).
// The card's Take queues every answer; each goes a beat after the last one landed, so each coin flies on its own.
// An answer has landed when the game's move count moves past the count it was sent at. One that hasn't landed after a
// while is sent again: an online table can drop a press that arrives mid-update (the page answers only on a settled
// table), and the card would otherwise wait for it forever (online.mjs, Nov 4: Gus stuck on "Harvest: +1 of which
// color?"). The online session sends a repeated move under the same id, so a slow answer is never taken twice.
import { useEffect, useRef, useState } from 'react';

export const RESEND_MS = 1000;
const BEAT_MS = 140;

/** The run being taken for this card, or null (a finished one is let go here). */
export function liveRun(store, key, moves) {
  const r = store.run;
  if (!r || r.key !== key) return null;
  if (r.sent != null && moves > r.sent && r.items.length <= 1) { store.run = null; return null; }
  return r;
}

/** send(item) answers one item and returns false when the question has no such answer (the run stops). */
export function useTakeRun(store, key, state, busy, send) {
  const step = () => {
    const r = store.run;
    if (!r || r.key !== key) return;
    if (busy) { if (globalThis.__rigWhy) globalThis.__rigWhy('take: busy'); return; }
    if (r.sent != null && state.moves > r.sent) { r.items.shift(); r.sent = null; }
    if (!r.items.length) { store.run = null; return; }
    if (r.sent != null && Date.now() - r.at < RESEND_MS) return;
    r.sent = state.moves; r.at = Date.now();
    if (globalThis.__rigWhy) globalThis.__rigWhy(`take ${r.items[0]} at ${state.moves}`);
    if (send(r.items[0]) === false) store.run = null;
  };
  const latest = useRef(step);
  const [, redraw] = useState(0);
  latest.current = step;
  const taking = !!liveRun(store, key, state.moves);
  useEffect(() => {
    if (!taking) return undefined;
    const t = setTimeout(() => latest.current(), BEAT_MS);
    const again = setInterval(() => latest.current(), RESEND_MS);
    return () => { clearTimeout(t); clearInterval(again); };
  }, [state.moves, busy, taking]);
  // the card left before Take (Back, a rival's question): nothing is owed. Mid-run it stays for the card's next showing
  useEffect(() => () => { if (store.run && store.run.key === key && store.run.sent == null) store.run = null; }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return {
    taking,
    start(items, extra) { store.run = { key, items, sent: null, at: 0, ...extra }; latest.current(); redraw(n => n + 1); },
  };
}
