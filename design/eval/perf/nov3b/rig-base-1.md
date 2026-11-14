# Perf rig: base-1

2026-11-03T16:07:50.703Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 239 ms (bar 100)
- round II: clicks p95 226 ms (bar 100)
- round II: hovers p95 190 ms (bar 100)
- round III: clicks p95 218 ms (bar 100)
- round III: hovers p95 144 ms (bar 100)
- leak: 6287 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.2 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 100 / 239 | 66 / 80 | 33 | 3 | 333 | 14 | 3 | 10 | 2490 | 492 | 13.5 |
| II | 114 / 226 | 62 / 190 | 33 | 3 | 767 | 21 | 2 | 2 | 3575 | 551 | 17.6 |
| III | 120 / 218 | 57 / 144 | 33 | 4 | 817 | 34 | 4 | 33 | 3942 | 577 | 20.7 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 20 / 33 · rules 6 / 12 · React render and layout effects 39 / 71 · effects 16 / 34 · to the frame that shows it 15 / 28 · that frame painted (the rig's next frame) 30 / 58

Leak control on the last turn: unbroken game 6287 elements, 856 listeners, 20.2 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 57 p95 125 · choose 5× p50 98 p95 239 · recruit 3× p50 141 p95 153 · pay 3× p50 99 p95 163 · next-round 1× p50 100 p95 100

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3197 | 33 | 333 | 3 |
| span.tc-line:tcline | 1951 | 33 | 133 | 3 |
| span.cs-stack:js | 1644 | 33 | 333 | 3 |
| div.path-inner:js | 1741 | 33 | 333 | 2 |
| span.tick.num:bump | 1108 | 33 | 117 | 3 |
| div.piece-flight.piece-res:js | 1491 | 33 | 333 | 2 |
| span.worker-fig:panelland-under | 700 | 33 | 217 | 4 |
| span.base:opacity | 662 | 33 | 217 | 4 |
| div.as-card:js | 762 | 33 | 167 | 3 |
| svg.leader:cult-breathe | 1082 | 33 | 167 | 2 |
| g.blink:cult-blink | 1082 | 33 | 167 | 2 |
| img.sprite.scene:cult-shift | 1082 | 33 | 167 | 2 |

Longest frames: 257 ms (hn 193) · 247 ms (style/layout/paint) · 149 ms (hn 134) · 140 ms (hn 97) · 136 ms (Lf 83)

## Round II

Clicks by kind: place 4× p50 76 p95 87 · recruit 4× p50 192 p95 226 · pay 4× p50 114 p95 147 · choose 2× p50 209 p95 209 · next-round 1× p50 114 p95 114

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5499 | 33 | 767 | 3 |
| span.tc-line:tcline | 3181 | 33 | 183 | 3 |
| div.path-inner:js | 2793 | 33 | 183 | 2 |
| span.cs-stack:js | 2633 | 33 | 183 | 2 |
| div.piece-flight.piece-res:js | 2484 | 33 | 183 | 2 |
| span.tick.num:bump | 1465 | 33 | 133 | 3 |
| span.worker-fig:panelland-under | 1036 | 33 | 183 | 4 |
| span.base:opacity | 794 | 33 | 183 | 5 |
| svg.leader:cult-breathe | 1199 | 33 | 133 | 3 |
| g.blink:cult-blink | 1199 | 33 | 133 | 3 |
| img.sprite.scene:cult-shift | 1199 | 33 | 133 | 3 |
| img.sprite.scene:cult-breathe | 1199 | 33 | 133 | 3 |

Longest frames: 781 ms (style/layout/paint) · 171 ms (Lf 131) · 158 ms (Lf 105) · 155 ms (hn 141) · 149 ms (hn 129)

## Round III

Clicks by kind: place 5× p50 96 p95 119 · recruit 7× p50 167 p95 235 · pay 8× p50 142 p95 218 · pick 1× p50 135 p95 135 · choose 5× p50 110 p95 212 · next-round 1× p50 62 p95 62

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7444 | 33 | 817 | 4 |
| span.tc-line:tcline | 3584 | 33 | 267 | 4 |
| span.cs-stack:js | 3409 | 33 | 267 | 4 |
| svg.leader:cult-breathe | 1978 | 33 | 817 | 5 |
| g.blink:cult-blink | 1978 | 33 | 817 | 5 |
| img.sprite.scene:cult-shift | 1978 | 33 | 817 | 5 |
| img.sprite.scene:cult-breathe | 1978 | 33 | 817 | 5 |
| span.tick.num:bump | 2331 | 33 | 183 | 4 |
| div.path-inner:js | 3944 | 33 | 200 | 2 |
| span.worker-fig:panelland-under | 1171 | 50 | 267 | 6 |
| div.piece-flight.piece-res:js | 3052 | 33 | 217 | 2 |
| path.wash:fill | 387 | 67 | 267 | 13 |

Longest frames: 830 ms (style/layout/paint) · 255 ms (hn 245) · 240 ms (hn 102) · 236 ms (hn 6, hn 220) · 212 ms (hn 157)
