# Perf rig: cancel-2

2026-11-01T09:10:10.170Z · http://localhost:5310 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (5)
- round I: clicks p95 176 ms (bar 100)
- round II: clicks p95 211 ms (bar 100)
- round III: clicks p95 341 ms (bar 100)
- clicks p95 grows 176 → 341 ms over the game
- leak: heap 18.9 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 81 / 176 | 49 / 77 | 33 | 2 | 217 | 12 | 4 | 22 | 2363 | 500 | 13.1 |
| II | 93 / 211 | 65 / 94 | 33 | 2 | 500 | 13 | 6 | 18 | 3528 | 584 | 16.2 |
| III | 127 / 341 | 52 / 74 | 33 | 2 | 867 | 24 | 3 | 9 | 4041 | 596 | 19.6 |

Click phases (36 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 30 · rules 12 / 23 · React render and layout effects 28 / 65 · effects 14 / 29 · to the frame that shows it 13 / 25 · that frame painted (the rig's next frame) 20 / 48

Leak control on the last turn: unbroken game 5806 elements, 789 listeners, 18.9 MB; after a reload 5280, 731, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 72 p95 74 · choose 8× p50 81 p95 143 · recruit 3× p50 133 p95 133 · pay 3× p50 133 p95 176 · next-round 1× p50 76 p95 76 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3287 | 33 | 217 | 2 |
| span.cs-stack:js | 1600 | 33 | 200 | 3 |
| span.tc-line:tcline | 2036 | 33 | 200 | 2 |
| div.path-inner:js | 1892 | 33 | 134 | 2 |
| div.piece-flight.piece-res:js | 1595 | 17 | 134 | 2 |
| span.worker-fig:panelland-under | 962 | 33 | 200 | 3 |
| span.tick.num:bump | 955 | 33 | 100 | 2 |
| button.fb.lt-rate:opacity | 363 | 50 | 200 | 5 |
| button.card.lt-card:opacity | 363 | 50 | 200 | 5 |
| span.base:opacity | 887 | 33 | 200 | 2 |
| div.stage:opacity | 434 | 33 | 200 | 4 |
| span.worker-fig:panelland | 791 | 33 | 134 | 2 |

Longest frames: 223 ms (style/layout/paint) · 174 ms (hn 155) · 170 ms (hn 14, Nf 128) · 142 ms (Nf 96) · 132 ms (hn 117)

## Round II

Clicks by kind: place 4× p50 105 p95 117 · choose 7× p50 99 p95 211 · recruit 4× p50 127 p95 127 · pay 3× p50 93 p95 107 · pick 3× p50 51 p95 59 · next-round 1× p50 89 p95 89 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5882 | 33 | 200 | 2 |
| span.tc-line:tcline | 3620 | 33 | 200 | 2 |
| span.cs-stack:js | 2846 | 33 | 200 | 2 |
| span.tick.num:bump | 1590 | 33 | 117 | 2 |
| div.path-inner:js | 3138 | 17 | 167 | 1 |
| span.worker-fig:panelland-under | 975 | 33 | 200 | 3 |
| div.piece-flight.piece-res:js | 2823 | 17 | 167 | 1 |
| span.base:opacity | 1148 | 33 | 200 | 2 |
| span.cs-member:js | 760 | 33 | 83 | 3 |
| path.wash:fill | 522 | 33 | 200 | 4 |
| button.card.lt-card:js | 2018 | 33 | 500 | 1 |
| span.cs-total:js | 481 | 33 | 67 | 3 |

Longest frames: 524 ms (style/layout/paint) · 190 ms (Nf 127) · 173 ms (hn 144) · 155 ms (hn 145) · 149 ms (hn 129)

## Round III

Clicks by kind: place 5× p50 87 p95 120 · recruit 5× p50 163 p95 163 · pay 5× p50 140 p95 153 · choose 3× p50 156 p95 341 · pick 1× p50 89 p95 89 · next-round 1× p50 59 p95 59 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 8152 | 33 | 867 | 2 |
| span.tc-line:tcline | 4924 | 33 | 283 | 2 |
| span.cs-stack:js | 3775 | 33 | 283 | 2 |
| span.tick.num:bump | 2778 | 33 | 133 | 2 |
| div.path-inner:js | 3934 | 33 | 117 | 1 |
| div.seat-stolen:brief-out | 1695 | 33 | 100 | 2 |
| div.piece-flight.piece-res:js | 3078 | 17 | 117 | 1 |
| span.base:opacity | 1491 | 33 | 283 | 2 |
| span.worker-fig:panelland-under | 1411 | 33 | 283 | 2 |
| button.card.lt-card:box-shadow | 488 | 33 | 283 | 5 |
| path.wash:fill | 546 | 33 | 283 | 4 |
| button.card.lt-card:js | 1036 | 33 | 233 | 2 |

Longest frames: 875 ms (style/layout/paint) · 263 ms (Nf 208) · 231 ms (hn 119) · 200 ms (hn 172) · 186 ms (style/layout/paint)
