// Cory 2026-10-25: hovers open the moment you point; the wait moved to closing (MO.hoverClose). Was 200 (Cory 2026-10-15).
// Cory 2026-11-08: "hover over should take more of a beat. Like the pointer needs to be on the thing for a beat." A tap
// on a phone still opens at once (a tap pins, it never waits on this).
export const HOVER_DELAY_MS = 400;
/** From the pointer's arrival to the card shown: the delay, or one frame to draw and place it hidden when there is none. */
export const HOVER_OPEN_MS = Math.max(16, HOVER_DELAY_MS);
