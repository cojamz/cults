# Perf rig: ans-1

2026-11-03T17:48:44.642Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 277 ms (bar 100)
- round II: clicks p95 296 ms (bar 100)
- round III: clicks p95 258 ms (bar 100)
- round III: hovers p95 105 ms (bar 100)
- idle busy grows 2% → 7% over the game
- leak: 6283 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.1 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 101 / 277 | 53 / 81 | 33 | 3 | 267 | 14 | 2 | 8 | 2490 | 492 | 13.5 |
| II | 143 / 296 | 58 / 91 | 33 | 3 | 667 | 25 | 2 | 2 | 3575 | 549 | 17.4 |
| III | 136 / 258 | 57 / 105 | 33 | 4 | 900 | 43 | 7 | 51 | 3942 | 577 | 20.6 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 20 / 47 · rules 6 / 13 · React render and layout effects 44 / 114 · effects 16 / 37 · to the frame that shows it 18 / 31 · that frame painted (the rig's next frame) 29 / 61

Leak control on the last turn: unbroken game 6283 elements, 856 listeners, 20.1 MB; after a reload 5093, 697, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 85 p95 101 · choose 5× p50 80 p95 245 · recruit 3× p50 274 p95 277 · pay 3× p50 132 p95 141 · next-round 1× p50 98 p95 98

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3227 | 33 | 267 | 3 |
| span.cs-stack:js | 1666 | 33 | 233 | 4 |
| span.tc-line:tcline | 1842 | 33 | 150 | 3 |
| div.path-inner:js | 1901 | 33 | 200 | 2 |
| span.worker-fig:panelland-under | 734 | 33 | 150 | 5 |
| div.piece-flight.piece-res:js | 1557 | 33 | 233 | 2 |
| div.as-card:js | 818 | 33 | 250 | 3 |
| span.base:opacity | 587 | 33 | 117 | 4 |
| span.tick.num:bump | 1111 | 33 | 117 | 2 |
| path.wash:fill | 187 | 67 | 150 | 11 |
| button.fb.lt-rate:opacity | 126 | 83 | 150 | 14 |
| button.card.lt-card:opacity | 126 | 83 | 150 | 14 |

Longest frames: 289 ms (style/layout/paint) · 198 ms (Lf 153) · 194 ms (Lf 144, FrameRequestCallback 5) · 178 ms (hn 167) · 164 ms (hn 137)

## Round II

Clicks by kind: place 4× p50 105 p95 109 · recruit 4× p50 224 p95 296 · pay 4× p50 163 p95 214 · choose 2× p50 164 p95 164 · next-round 1× p50 159 p95 159

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5337 | 33 | 667 | 3 |
| span.cs-stack:js | 2482 | 33 | 267 | 4 |
| span.tc-line:tcline | 3110 | 33 | 267 | 3 |
| div.path-inner:js | 2722 | 33 | 200 | 2 |
| div.piece-flight.piece-res:js | 2320 | 33 | 200 | 2 |
| span.worker-fig:panelland-under | 896 | 50 | 233 | 5 |
| button.card.lt-card:js | 1403 | 33 | 167 | 3 |
| span.tick.num:bump | 1383 | 33 | 133 | 3 |
| span.cs-member:js | 654 | 50 | 117 | 6 |
| div.as-card:js | 1172 | 33 | 233 | 3 |
| path.wash:fill | 407 | 50 | 267 | 8 |
| span.base:opacity | 720 | 33 | 267 | 4 |

Longest frames: 690 ms (style/layout/paint) · 215 ms (hn 5, hn 199) · 199 ms (Lf 155) · 194 ms (Lf 147) · 190 ms (hn 172)

## Round III

Clicks by kind: place 5× p50 118 p95 172 · recruit 7× p50 213 p95 258 · pay 8× p50 174 p95 295 · pick 1× p50 126 p95 126 · choose 5× p50 81 p95 155 · next-round 1× p50 91 p95 91

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7209 | 33 | 900 | 4 |
| span.tc-line:tcline | 3303 | 50 | 267 | 6 |
| span.cs-stack:js | 3131 | 33 | 267 | 5 |
| div.path-inner:js | 3712 | 33 | 250 | 3 |
| span.tick.num:bump | 2224 | 33 | 233 | 4 |
| div.piece-flight.piece-res:js | 2924 | 33 | 250 | 3 |
| span.worker-fig:panelland-under | 1070 | 50 | 267 | 8 |
| svg.leader:cult-breathe | 2100 | 33 | 900 | 4 |
| g.blink:cult-blink | 2100 | 33 | 900 | 4 |
| img.sprite.scene:cult-shift | 2100 | 33 | 900 | 4 |
| img.sprite.scene:cult-breathe | 2100 | 33 | 900 | 4 |
| span.base:opacity | 999 | 50 | 267 | 7 |

Longest frames: 912 ms (style/layout/paint) · 252 ms (hn 212) · 251 ms (hn 237) · 220 ms (e 6, Lf 124) · 218 ms (hn 70)
