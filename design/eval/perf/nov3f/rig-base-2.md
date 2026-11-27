# Perf rig: base-2

2026-11-03T17:56:13.639Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (9)
- round I: clicks p95 197 ms (bar 100)
- round I: hovers p95 129 ms (bar 100)
- round II: clicks p95 332 ms (bar 100)
- round III: clicks p95 278 ms (bar 100)
- round III: hovers p95 111 ms (bar 100)
- idle busy grows 3% → 7% over the game
- leak: 6290 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 19.8 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 116 / 197 | 72 / 129 | 33 | 3 | 350 | 16 | 3 | 9 | 2490 | 492 | 13.4 |
| II | 146 / 332 | 59 / 100 | 33 | 4 | 717 | 29 | 1 | 2 | 3575 | 551 | 17.6 |
| III | 123 / 278 | 71 / 111 | 33 | 3 | 833 | 40 | 7 | 37 | 3945 | 577 | 20.3 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 19 / 41 · rules 6 / 17 · React render and layout effects 48 / 108 · effects 17 / 35 · to the frame that shows it 15 / 43 · that frame painted (the rig's next frame) 37 / 54

Leak control on the last turn: unbroken game 6290 elements, 856 listeners, 19.8 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 73 p95 99 · choose 5× p50 131 p95 184 · recruit 3× p50 138 p95 197 · pay 3× p50 132 p95 142 · next-round 1× p50 83 p95 83

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3073 | 33 | 350 | 3 |
| span.cs-stack:js | 1561 | 33 | 200 | 4 |
| span.tc-line:tcline | 1852 | 33 | 183 | 3 |
| div.piece-flight.piece-res:js | 1395 | 33 | 183 | 3 |
| span.tick.num:bump | 1022 | 33 | 150 | 4 |
| div.path-inner:js | 1825 | 33 | 183 | 2 |
| span.worker-fig:panelland-under | 700 | 50 | 200 | 5 |
| g.blink:cult-blink | 1052 | 33 | 150 | 3 |
| svg.leader:cult-breathe | 1034 | 33 | 150 | 3 |
| img.sprite.scene:cult-shift | 1034 | 33 | 150 | 3 |
| span.base:opacity | 601 | 33 | 200 | 5 |
| img.sprite.scene:cult-breathe | 986 | 33 | 150 | 3 |

Longest frames: 365 ms (style/layout/paint) · 199 ms (hn 179) · 165 ms (hn 139) · 145 ms (hn 71) · 143 ms (Lf 117)

## Round II

Clicks by kind: place 4× p50 101 p95 138 · recruit 4× p50 228 p95 260 · pay 4× p50 146 p95 251 · choose 2× p50 332 p95 332 · next-round 1× p50 111 p95 111

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5291 | 33 | 717 | 3 |
| span.cs-stack:js | 2520 | 33 | 300 | 5 |
| span.tc-line:tcline | 2864 | 33 | 300 | 4 |
| div.path-inner:js | 2768 | 33 | 300 | 3 |
| div.piece-flight.piece-res:js | 2470 | 33 | 300 | 3 |
| button.card.lt-card:js | 1452 | 33 | 300 | 4 |
| span.tick.num:bump | 1384 | 33 | 133 | 4 |
| span.worker-fig:panelland-under | 835 | 50 | 300 | 6 |
| span.base:opacity | 692 | 50 | 183 | 6 |
| path.wash:fill | 222 | 67 | 183 | 17 |
| div.as-card:js | 1195 | 33 | 300 | 3 |
| svg.leader:cult-breathe | 1109 | 33 | 217 | 3 |

Longest frames: 740 ms (style/layout/paint) · 275 ms (hn 249) · 245 ms (Lf 84) · 243 ms (hn 128) · 226 ms (hn 180)

## Round III

Clicks by kind: place 5× p50 84 p95 116 · recruit 7× p50 162 p95 284 · pay 8× p50 176 p95 278 · pick 1× p50 129 p95 129 · choose 5× p50 79 p95 211 · next-round 1× p50 123 p95 123

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7277 | 33 | 833 | 4 |
| span.tc-line:tcline | 3620 | 33 | 367 | 5 |
| span.cs-stack:js | 3208 | 33 | 367 | 4 |
| div.path-inner:js | 3819 | 33 | 233 | 3 |
| div.piece-flight.piece-res:js | 2985 | 33 | 233 | 3 |
| span.tick.num:bump | 2218 | 33 | 167 | 4 |
| svg.leader:cult-breathe | 2010 | 33 | 833 | 4 |
| g.blink:cult-blink | 2010 | 33 | 833 | 4 |
| img.sprite.scene:cult-shift | 2010 | 33 | 833 | 4 |
| img.sprite.scene:cult-breathe | 2010 | 33 | 833 | 4 |
| span.base:opacity | 1153 | 50 | 367 | 6 |
| span.worker-fig:panelland-under | 1178 | 50 | 367 | 5 |

Longest frames: 849 ms (style/layout/paint) · 309 ms (hn 288) · 294 ms (hn 275) · 251 ms (Lf 156) · 250 ms (Lf 169, FrameRequestCallback 6)
