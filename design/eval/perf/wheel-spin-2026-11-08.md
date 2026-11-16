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

## Cory's spin report (Nov 8, 9:12pm; Firefox 152, Intel Mac, 1440x790 at 2x, v0.99.699)
8 drags: 11-75 frames per 1.6 s window; worst gaps 0.3-0.9 s at `land`, 0.5-4.3 s at `apply+render+commit` (the React re-lay of the landed angle plus Firefox's redraw); frames at 3-5 a second while anything moved. His steps' own code is small; the time is Firefox drawing. His numbers mirror this box's headless Firefox (software compositor), so this box is a fair model of his Mac after all.

## Second pass (v0.99.700)
- Landing: nothing is written at `land`; the spin's animations hold the pose (fill: forwards) until the commit writes the angle and drops them in the same frame. Gecko timeline on this box: at land, no main-thread paint at all (before: a paint of the board).
- Commit: the 24 spaces keep their unturned left/top for good; the turn is a `translate` in `--wheel-px` units the layout effect writes (compositor-only). A landing no longer moves every space; only a space whose words re-fit for the new angle repaints. Positions checked against the paper's cells through spins, drags, back-home and rival moves (max distance unchanged, 10-11 px, which is the print's offset from the cell centre by design).
- Idle animations: the minions' bob in the seats (`cs-bob`, a 1.5 px ease-in-out glide, 12 elements) kept the renderer thread redrawing the seats' tiles every frame of the whole game: Renderer busy 7.2 s of 20 s of bot play here; 3.1 s with the bob off; 2.2 s with every idle animation off. Now the bob is two pixel frames (`steps(2, jump-none)`): 3.6 s of 20 s. The breathe and blink were already stepped.
- Per spin on this box: content paints 7 → 7 (press, commit's two renders, bots), scene rebuilds 5 → 4, paint-to-screen total 1086 → 806 ms, worst 253 → 174 ms. Over 20 s of bot play the renderer's load halves. What's left per content paint (~50 ms here, 2-3x on his Intel) is the software compositor redrawing the screen's tiles for any change: fewer changes per second is the remaining lever (count-ups write text every frame; see the animations thread).

## Root cause (Nov 9, 11:03am Eastern)
Cory's about:support: `Compositing: WebRender (Software)`, `HW_COMPOSITING: user disabled, layers.acceleration.disabled=true`. Hardware acceleration is switched off in his Firefox (a user setting: Settings > General > Performance), so every frame is drawn on the CPU, whatever the game does. The spin report with the page-thread timer (v0.99.702) showed it first: `page thread busy worst 0 ms` while frames stalled 4-5 s, so the game's own thread was idle and the browser's drawing side was stuck. His machine is an Apple M1 MacBook Air, 8 cores (the user agent's "Intel Mac OS X 10.15" is Firefox's frozen string). Every wheel and animation pass since Oct 28 was measured against a software-drawn Firefox on his side; this box's headless Firefox (also software) mirrored it exactly, which is why it never told smooth from stalled. Fix on his side: tick "Use recommended performance settings" and restart Firefox. Then re-measure: if the lag is gone, the wheel work stops here; what's left is this box's inability to model a hardware Mac (an M1 runner, or a Mac).

Confirmed Nov 9 11:13am, after the setting and a restart: "all animation is smoother with hardware acceleration." The wheel work stops here.
