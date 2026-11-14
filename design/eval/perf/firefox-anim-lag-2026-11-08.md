# Firefox animation lag (Cory, Nov 8: "basically all animations are laggy")

Firefox (Playwright build), four Normal bots, Steady, 1512x945 at 2x, 35-40 s of round I from the start, Gecko profiler.
Measure: the Compositor thread's CONTENT_FULL_PAINT_TIME (a paint the screen waits on; every animation holds meanwhile).

| build | full paints | p95 ms | worst ms | over 100 ms |
|---|---|---|---|---|
| v0.99.687 live (4 runs) | 484-533 | 17-19 | 198-332 | 6-9 |
| same, rim live words hidden (css) | 484-522 | 14-16 | 26-36 | 0 |
| same, rim pictures hidden (css) | 499 | 19 | 252 | 8 |
| v0.99.697 (old picture stays until the new lands; 2 runs) | 490-526 | 16-17 | 54-65 | 0 |
| v0.99.698 (also 4 ms drawing slices; 2 runs) | 564-619 | 16-17 | 69-121 | 0-1 |

Cause: a rim's words move along its arc whenever its leaders change (the leaders' faces sit at the end of the line), so
its picture's name changed, the picture was dropped, and Firefox drew the curved live words (letter by letter) until the
new picture was drawn, then repainted again to hide them.
Ruled out: the wheel's drawing as a whole for main-thread frames; a regression (a Nov 6 build hitched the same); CSS
animations off the compositor (only a panel's wash fill, a count's color and a hop's filter, about 10% of the time).
Still there: each step's table update is one 50-140 ms main-thread frame in Firefox at 1x here (React commit, a forced
style pass with the seats' container queries, the director's flight planning, the paint). Compositor flights keep moving
through it (checked: a 1.2 s busy loop doesn't stop a WAAPI transform flight in Firefox).
Probes: /tmp scripts in this thread were run.mjs (MOZ_PROFILER_STARTUP), cft.py (Compositor markers), tree.py (long tasks);
lesson in design/lessons/screen.md (Nov 8).

## Second pass (Cory 9:13pm: "still quite laggy", Intel Mac, Firefox 152, 1440x790@2)
- Blob rasterization (CPU, the frame waits on it) at 1440x790@2, 40 s of bots: board shown RasterizeSingleBlob sum 1146 ms,
  max 76 ms, BlobRasterization max 122 ms; board hidden: sum 269 ms, max 6 ms. Seats or shop hidden: little change.
  Handed to the wheel thread (board layers rebuild).
- Main thread with the whole page in Firefox: freeze probe, seed 20261028, steady, whole game: 0 presses over 100 ms,
  worst 30 ms (freeze-ff-v698). Paint is ~40% of main-thread time (about 6 ms a paint, ~15 paints a second during play);
  hiding seats, shop or board doesn't change that, and contain:layout style on the table's areas doesn't either.
- Ambient CSS animations: pausing them cut the (software) renderer's busy time by a third, because any running animation
  makes every frame composite; content thread unchanged. Not changed (it's the look).
