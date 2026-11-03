# Freeze probe: ans-firefox

2026-11-03T18:17:42.790Z · http://localhost:5292/ · firefox, own speed (no CPU throttle, no main-thread metrics) · relaxed · seed 20261028 · 6 min · game finished · 1427 presses every 250 ms
Freeze bars pass: worst press 34 ms, 0.0% over 100 ms, no ignored clicks.


Main thread over the game: busy 0 ms of 382691 (0%), script 0, style 0, layout 0.

Table renders: 615 begun, 603 committed (12 thrown away and started over).

## Input waiting (how long a press or click waited before the page even looked at it)

| round | turn | presses/clicks over 16 ms | over 100 ms | over 250 ms | over 500 ms | worst wait | total wait ms | p95 to paint |
|---|---|---|---|---|---|---|---|---|
| I | yours | 79 | 0 | 0 | 0 | 23 | 128 | 112 |
| I | rivals | 186 | 0 | 0 | 0 | 12 | 25 | 72 |
| II | yours | 106 | 0 | 0 | 0 | 23 | 166 | 96 |
| II | rivals | 290 | 0 | 0 | 0 | 8 | 33 | 56 |
| III | yours | 197 | 0 | 0 | 0 | 34 | 312 | 112 |
| III | rivals | 397 | 0 | 0 | 0 | 9 | 34 | 88 |

## Long animation frames over 50 ms

| round | turn | frames | blocking ms | total ms | style+layout ms | over 200 ms | worst |
|---|---|---|---|---|---|---|---|

Totals: long frames 0 ms (0 ms blocking), input waited 710 ms, 0 presses/clicks waited over 100 ms. Hovers: 24, a card open after 24.

## Scripts in long frames (by entry point)

| entry → function @ source | ms | times | forced style+layout ms | worst |
|---|---|---|---|---|

## The 12 longest frames


## The person's clicks

29 clicks timed; 0 changed nothing in 1.5 s (0 of them made while the table was still animating).
- round I: 7 answered, p50 152 ms, p95 184 ms, worst 184 ms (as seen from outside the page, polling every 30 ms)
- round II: 9 answered, p50 128 ms, p95 285 ms, worst 285 ms (as seen from outside the page, polling every 30 ms)
- round III: 13 answered, p50 152 ms, p95 223 ms, worst 223 ms (as seen from outside the page, polling every 30 ms)
