# The wheel's spin: where the stall is (Nov 8, "Stop wheel spin from freezing the game")

Cory, Nov 8 8:09pm: "spinning the wheel basically crashes the game as usual." Firefox on a Mac.

## Measured here (a 4-CPU box with no graphics card; Firefox 146 headless, 1512x945 at 2x)
- A press's own code (`animateTo`: cancel the last spin, start the layers' and spaces' animations) takes 2-3 ms; keydown to paint 16-40 ms (Event Timing). `scripts/v4-spin-marks.mjs`.
- Frames while turning the board round and round (a press every 280 ms): gaps of 150-270 ms about once a press, in every variant tried (no `.turning` class, spaces not animated, rAF instead of Web Animations, will-change on the layers). `scripts/v4-spin.mjs --css=…`, `?spinmode=…` (the experiment flags are still in Wheel.jsx; harmless).
- Gecko profile (`scripts/v4-spin-ffprof.mjs`): the game's main thread was busy ~400 ms of a 4 s spin window; the compositor's CONTENT_FRAME_TIME (paint to screen) was 200-330 ms for every one of the 23 content paints. A control that changes one pixel off the board costs the same 150-200 ms. So this box's Firefox (software compositor, whole screen redrawn per change at Retina size) can't tell a smooth spin from a stalled one; software OpenGL under Xvfb (`--gl`) was worse.
- Chrome at 4x CPU (`scripts/v4-spin-trace.mjs`): landings cost 50-63 ms tasks (style 30-43 ms, paint 3-5 ms); nothing long.

## Shipped v0.99.699
- `.lt .stage > .turn-layer{will-change:transform}`: the printed paper and the rims' layer stay composited at rest, so the plain transform written at each landing and interrupted spin (paintRot) is a compositor move, not a redraw of the board's SVG (Firefox draws SVG on the CPU). Unverifiable here; Cory's spin report tells.
- Spin recorder (src/v4/game/spinLab.js): every turn's frames timed in the player's browser, gaps over 34 ms tagged with the wheel's step (press, land, apply, commit), Event Timing waits, round, whether a rival was moving, board size. Menu → Copy spin report; `?spinlab=1` shows the last spin in a corner; `window.__spinLab.records`.

## Next
Read Cory's report. If the gaps sit at `land`/`commit`: the landing's React re-lay (every panel's words fitted to the new angle, rims upright). If at `press`: layer creation. The animations thread (Nov 8) separately found the rims' live curved text re-rasterizing at 200-330 ms whenever a leader changes (rimPictures.js, their fix).
