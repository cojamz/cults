# Perf rig: base-3

2026-11-03T17:08:28.867Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 223 ms (bar 100)
- round II: clicks p95 237 ms (bar 100)
- round III: clicks p95 193 ms (bar 100)
- round III: hovers p95 133 ms (bar 100)
- leak: 6287 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 110 / 223 | 56 / 69 | 33 | 2 | 317 | 13 | 2 | 7 | 2490 | 492 | 13.4 |
| II | 141 / 237 | 55 / 92 | 33 | 3 | 683 | 25 | 1 | 3 | 3575 | 549 | 17.5 |
| III | 138 / 193 | 69 / 133 | 33 | 3 | 800 | 37 | 6 | 43 | 3942 | 577 | 20.5 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 19 / 31 · rules 7 / 14 · React render and layout effects 42 / 77 · effects 13 / 31 · to the frame that shows it 17 / 31 · that frame painted (the rig's next frame) 32 / 50

Leak control on the last turn: unbroken game 6287 elements, 856 listeners, 20 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 56 p95 77 · choose 5× p50 94 p95 221 · recruit 3× p50 156 p95 223 · pay 3× p50 110 p95 135 · next-round 1× p50 126 p95 126

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3263 | 33 | 283 | 2 |
| span.cs-stack:js | 1635 | 33 | 250 | 3 |
| span.tc-line:tcline | 2007 | 33 | 150 | 2 |
| span.worker-fig:panelland-under | 780 | 33 | 217 | 3 |
| span.tick.num:bump | 1165 | 33 | 150 | 2 |
| path.wash:fill | 242 | 67 | 217 | 9 |
| svg.leader:cult-breathe | 1086 | 17 | 317 | 2 |
| g.blink:cult-blink | 1086 | 17 | 317 | 2 |
| img.sprite.scene:cult-shift | 1086 | 17 | 317 | 2 |
| img.sprite.scene:cult-breathe | 1086 | 17 | 317 | 2 |
| span.base:opacity | 674 | 33 | 217 | 3 |
| div.path-inner:js | 1741 | 17 | 267 | 1 |

Longest frames: 304 ms (style/layout/paint) · 251 ms (hn 233) · 220 ms (hn 188) · 168 ms (Lf 126) · 159 ms (hn 134)

## Round II

Clicks by kind: place 4× p50 81 p95 144 · recruit 4× p50 150 p95 163 · pay 4× p50 165 p95 237 · choose 2× p50 186 p95 186 · next-round 1× p50 125 p95 125

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5424 | 33 | 683 | 3 |
| span.cs-stack:js | 2630 | 33 | 250 | 4 |
| span.tc-line:tcline | 3127 | 33 | 250 | 3 |
| div.path-inner:js | 2666 | 33 | 117 | 2 |
| div.piece-flight.piece-res:js | 2337 | 33 | 167 | 2 |
| button.card.lt-card:js | 1547 | 33 | 183 | 3 |
| span.tick.num:bump | 1382 | 33 | 183 | 3 |
| div.as-card:js | 1218 | 33 | 250 | 3 |
| span.worker-fig:panelland-under | 972 | 33 | 250 | 3 |
| span.base:opacity | 725 | 33 | 200 | 4 |
| span.worker:js | 947 | 33 | 83 | 3 |
| div.as-member.bubble:js | 905 | 33 | 683 | 3 |

Longest frames: 705 ms (style/layout/paint) · 257 ms (hn 239) · 247 ms (hn 208) · 232 ms (hn 206) · 192 ms (hn 86)

## Round III

Clicks by kind: place 5× p50 108 p95 162 · recruit 7× p50 139 p95 190 · pay 8× p50 154 p95 193 · pick 1× p50 140 p95 140 · choose 5× p50 102 p95 203 · next-round 1× p50 53 p95 53

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7470 | 33 | 800 | 4 |
| span.tc-line:tcline | 3874 | 33 | 300 | 4 |
| span.cs-stack:js | 3347 | 33 | 300 | 4 |
| div.path-inner:js | 3888 | 33 | 300 | 2 |
| span.tick.num:bump | 2253 | 33 | 167 | 3 |
| span.worker-fig:panelland-under | 1346 | 33 | 300 | 5 |
| svg.leader:cult-breathe | 2088 | 33 | 800 | 3 |
| g.blink:cult-blink | 2088 | 33 | 800 | 3 |
| img.sprite.scene:cult-shift | 2088 | 33 | 800 | 3 |
| img.sprite.scene:cult-breathe | 2088 | 33 | 800 | 3 |
| div.piece-flight.piece-res:js | 2963 | 33 | 300 | 2 |
| path.wash:fill | 569 | 50 | 300 | 9 |

Longest frames: 815 ms (style/layout/paint) · 342 ms (hn 282) · 291 ms (hn 277) · 278 ms (hn 249) · 227 ms (hn 198)
