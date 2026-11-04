# Perf rig: still-a

2026-11-01T08:00:11.967Z · http://localhost:5310 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 216 ms (bar 100)
- round II: clicks p95 231 ms (bar 100)
- round III: clicks p95 307 ms (bar 100)
- leak: 6369 elements vs 5280 after a reload
- leak: 895 listeners vs 731 after a reload
- leak: heap 19.6 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 89 / 216 | 29 / 81 | 33 | 2 | 217 | 9 | 3 | 13 | 2363 | 500 | 13.1 |
| II | 124 / 231 | 56 / 74 | 33 | 2 | 400 | 24 | 6 | 18 | 3528 | 584 | 16.2 |
| III | 121 / 307 | 55 / 70 | 33 | 2 | 683 | 27 | 3 | 11 | 4047 | 596 | 20 |

Click phases (36 clicks that redrew the table, ms, median / p90): waiting for the browser 17 / 29 · rules 14 / 25 · React render and layout effects 32 / 82 · effects 18 / 27 · to the frame that shows it 15 / 25 · that frame painted (the rig's next frame) 31 / 53

Leak control on the last turn: unbroken game 6369 elements, 895 listeners, 19.6 MB; after a reload 5280, 731, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 82 p95 94 · choose 8× p50 69 p95 188 · recruit 3× p50 141 p95 141 · pay 3× p50 120 p95 216 · next-round 1× p50 75 p95 75 · 2 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3237 | 33 | 183 | 2 |
| span.tc-line:tcline | 2279 | 33 | 217 | 2 |
| div.path-inner:js | 1884 | 33 | 133 | 2 |
| span.cs-stack:js | 1666 | 33 | 217 | 2 |
| div.piece-flight.piece-res:js | 1591 | 33 | 150 | 2 |
| span.worker-fig:panelland-under | 1026 | 33 | 217 | 3 |
| span.tick.num:bump | 988 | 33 | 183 | 3 |
| path.wash:fill | 416 | 50 | 217 | 5 |
| div.as-card:js | 1014 | 33 | 217 | 2 |
| button.fb.lt-rate:opacity | 597 | 33 | 217 | 3 |
| button.card.lt-card:box-shadow | 579 | 33 | 217 | 3 |
| button.card.lt-card:opacity | 578 | 33 | 183 | 3 |

Longest frames: 202 ms (style/layout/paint) · 200 ms (hn 184) · 185 ms (Nf 148) · 175 ms (style/layout/paint) · 162 ms (hn 150)

## Round II

Clicks by kind: place 4× p50 98 p95 98 · choose 7× p50 141 p95 231 · recruit 4× p50 154 p95 154 · pay 3× p50 129 p95 143 · pick 3× p50 75 p95 100 · next-round 1× p50 154 p95 154 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5627 | 33 | 200 | 2 |
| span.cs-stack:js | 2767 | 33 | 200 | 3 |
| span.tc-line:tcline | 3762 | 33 | 200 | 2 |
| div.path-inner:js | 2739 | 33 | 200 | 2 |
| div.piece-flight.piece-res:js | 2661 | 33 | 200 | 2 |
| span.tick.num:bump | 1381 | 33 | 217 | 3 |
| button.card.lt-card:js | 1889 | 33 | 400 | 2 |
| span.worker-fig:panelland-under | 1066 | 33 | 200 | 3 |
| path.wash:fill | 688 | 33 | 200 | 4 |
| span.cs-member:js | 640 | 33 | 100 | 4 |
| span.base:opacity | 1266 | 33 | 200 | 2 |
| span.cs-total:js | 489 | 33 | 117 | 5 |

Longest frames: 422 ms (style/layout/paint) · 278 ms (TimerHandler:setInterval 153) · 226 ms (style/layout/paint) · 192 ms (Nf 135) · 190 ms (hn 167)

## Round III

Clicks by kind: place 5× p50 71 p95 89 · recruit 5× p50 168 p95 307 · pay 5× p50 114 p95 174 · choose 3× p50 185 p95 253 · pick 1× p50 113 p95 113 · next-round 1× p50 90 p95 90 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7746 | 33 | 683 | 2 |
| span.cs-stack:js | 3335 | 33 | 300 | 3 |
| span.tc-line:tcline | 4490 | 33 | 300 | 2 |
| div.path-inner:js | 4149 | 33 | 167 | 2 |
| div.piece-flight.piece-res:js | 2869 | 33 | 167 | 2 |
| span.tick.num:bump | 2838 | 33 | 117 | 2 |
| span.worker-fig:panelland-under | 1640 | 33 | 300 | 3 |
| div.as-card:js | 1350 | 33 | 133 | 3 |
| span.base:opacity | 1242 | 33 | 200 | 3 |
| path.wash:fill | 897 | 33 | 300 | 4 |
| div.seat-stolen:brief-out | 1639 | 33 | 100 | 2 |
| button.card.lt-card:js | 991 | 33 | 233 | 3 |

Longest frames: 709 ms (style/layout/paint) · 279 ms (hn 251) · 241 ms (style/layout/paint) · 220 ms (Nf 177) · 205 ms (hn 173)
