# Freeze probe: live569-ff2

2026-11-04T17:48:21.947Z · http://localhost:5297/ · firefox, own speed (no CPU throttle, no main-thread metrics) · relaxed · seed 20261028 · 8 min · game finished · 1904 presses every 250 ms
Freeze bars pass: worst press 28 ms, 0.0% over 100 ms, no ignored clicks.


Main thread over the game: busy 0 ms of 500474 (0%), script 0, style 0, layout 0.

Table renders: 482 begun, 481 committed (1 thrown away and started over).

## Input waiting (how long a press or click waited before the page even looked at it)

| round | turn | presses/clicks over 16 ms | over 100 ms | over 250 ms | over 500 ms | worst wait | total wait ms | p95 to paint |
|---|---|---|---|---|---|---|---|---|
| I | yours | 73 | 0 | 0 | 0 | 14 | 78 | 72 |
| I | rivals | 185 | 0 | 0 | 0 | 5 | 16 | 56 |
| II | yours | 123 | 0 | 0 | 0 | 24 | 184 | 104 |
| II | rivals | 351 | 0 | 0 | 0 | 7 | 33 | 48 |
| III | yours | 182 | 0 | 0 | 0 | 28 | 244 | 96 |
| III | rivals | 609 | 0 | 0 | 0 | 9 | 57 | 40 |

## Long animation frames over 50 ms

| round | turn | frames | blocking ms | total ms | style+layout ms | over 200 ms | worst |
|---|---|---|---|---|---|---|---|

Totals: long frames 0 ms (0 ms blocking), input waited 624 ms, 0 presses/clicks waited over 100 ms. Hovers: 24, a card open after 24.

## Scripts in long frames (by entry point)

| entry → function @ source | ms | times | forced style+layout ms | worst |
|---|---|---|---|---|

## The 12 longest frames


## The person's clicks

29 clicks timed; 0 changed nothing in 1.5 s (0 of them made while the table was still animating).
- round I: 7 answered, p50 75 ms, p95 154 ms, worst 154 ms (as seen from outside the page, polling every 30 ms)
- round II: 10 answered, p50 85 ms, p95 147 ms, worst 147 ms (as seen from outside the page, polling every 30 ms)
- round III: 12 answered, p50 110 ms, p95 185 ms, worst 185 ms (as seen from outside the page, polling every 30 ms)
