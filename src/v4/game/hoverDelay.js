// Cory 2026-10-25: hovers open the moment you point; the wait moved to closing (MO.hoverClose). Was 200 (Cory 2026-10-15).
// Cory 2026-11-08: "hover over should take more of a beat. Like the pointer needs to be on the thing for a beat." A tap
// on a phone still opens at once (a tap pins, it never waits on this).
// The browser gates that only read what a card says run with no wait (scripts/v4-check.mjs sets V4_HOVER_DELAY=0 for
// them, e2e/v4/lib/browser.mjs hands it to the page); the gates that time the beat itself (snappy, info) run with it.
const forced = (() => {
  try {
    const w = globalThis.__V4_HOVER_DELAY;
    if (w != null && w !== '') return Number(w);
    const e = globalThis.process?.env?.V4_HOVER_DELAY;
    return e != null && e !== '' ? Number(e) : null;
  } catch { return null; }
})();
export const HOVER_DELAY_MS = Number.isFinite(forced) && forced >= 0 ? forced : 400;
/** From the pointer's arrival to the card shown: the delay, or one frame to draw and place it hidden when there is none. */
export const HOVER_OPEN_MS = Math.max(16, HOVER_DELAY_MS);
