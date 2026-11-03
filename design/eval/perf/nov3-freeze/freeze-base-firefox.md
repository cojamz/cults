# Freeze probe: base-firefox

2026-11-03T18:17:39.841Z · http://localhost:5291/ · firefox, own speed (no CPU throttle, no main-thread metrics) · relaxed · seed 20261028 · 6 min · game finished · 1412 presses every 250 ms
Freeze bars pass: worst press 22 ms, 0.0% over 100 ms, no ignored clicks.


Main thread over the game: busy 0 ms of 379055 (0%), script 0, style 0, layout 0.

Table renders: 596 begun, 583 committed (13 thrown away and started over).

## Input waiting (how long a press or click waited before the page even looked at it)

| round | turn | presses/clicks over 16 ms | over 100 ms | over 250 ms | over 500 ms | worst wait | total wait ms | p95 to paint |
|---|---|---|---|---|---|---|---|---|
| I | yours | 89 | 0 | 0 | 0 | 20 | 122 | 88 |
| I | rivals | 173 | 0 | 0 | 0 | 1 | 12 | 104 |
| II | yours | 110 | 0 | 0 | 0 | 22 | 157 | 96 |
| II | rivals | 278 | 0 | 0 | 0 | 5 | 17 | 72 |
| III | yours | 198 | 0 | 0 | 0 | 22 | 352 | 104 |
| III | rivals | 405 | 0 | 0 | 0 | 12 | 48 | 64 |

## Long animation frames over 50 ms

| round | turn | frames | blocking ms | total ms | style+layout ms | over 200 ms | worst |
|---|---|---|---|---|---|---|---|

Totals: long frames 0 ms (0 ms blocking), input waited 714 ms, 0 presses/clicks waited over 100 ms. Hovers: 24, a card open after 24.

## Scripts in long frames (by entry point)

| entry → function @ source | ms | times | forced style+layout ms | worst |
|---|---|---|---|---|

## The 12 longest frames


## The person's clicks

29 clicks timed; 0 changed nothing in 1.5 s (0 of them made while the table was still animating).
- round I: 7 answered, p50 103 ms, p95 165 ms, worst 165 ms (as seen from outside the page, polling every 30 ms)
- round II: 9 answered, p50 104 ms, p95 174 ms, worst 174 ms (as seen from outside the page, polling every 30 ms)
- round III: 13 answered, p50 133 ms, p95 200 ms, worst 200 ms (as seen from outside the page, polling every 30 ms)
