# Perf rig: ans-2

2026-11-03T17:56:15.088Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 270 ms (bar 100)
- round II: clicks p95 209 ms (bar 100)
- round III: clicks p95 227 ms (bar 100)
- idle busy grows 3% → 7% over the game
- leak: 6283 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 19.5 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 102 / 270 | 70 / 96 | 33 | 3 | 267 | 15 | 3 | 9 | 2490 | 492 | 13.5 |
| II | 130 / 209 | 74 / 98 | 33 | 3 | 633 | 24 | 2 | 9 | 3575 | 551 | 17.6 |
| III | 139 / 227 | 63 / 97 | 33 | 4 | 800 | 48 | 7 | 41 | 3942 | 577 | 20 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 17 / 33 · rules 6 / 12 · React render and layout effects 38 / 90 · effects 13 / 33 · to the frame that shows it 15 / 25 · that frame painted (the rig's next frame) 31 / 54

Leak control on the last turn: unbroken game 6283 elements, 856 listeners, 19.5 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 85 p95 91 · choose 5× p50 89 p95 270 · recruit 3× p50 129 p95 132 · pay 3× p50 131 p95 152 · next-round 1× p50 137 p95 137

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3195 | 33 | 267 | 3 |
| span.cs-stack:js | 1579 | 33 | 267 | 4 |
| span.tc-line:tcline | 1889 | 33 | 133 | 3 |
| div.path-inner:js | 1751 | 33 | 167 | 2 |
| span.tick.num:bump | 1089 | 33 | 133 | 3 |
| span.base:opacity | 643 | 50 | 267 | 5 |
| div.piece-flight.piece-res:js | 1474 | 33 | 167 | 2 |
| span.worker-fig:panelland-under | 718 | 33 | 267 | 4 |
| path.wash:fill | 282 | 50 | 267 | 9 |
| svg.leader:cult-breathe | 1033 | 33 | 233 | 2 |
| g.blink:cult-blink | 1033 | 33 | 233 | 2 |
| img.sprite.scene:cult-shift | 1033 | 33 | 233 | 2 |

Longest frames: 279 ms (style/layout/paint) · 263 ms (hn 229) · 206 ms (hn 171) · 149 ms (hn 132) · 131 ms (hn 105)

## Round II

Clicks by kind: place 4× p50 88 p95 91 · recruit 4× p50 204 p95 209 · pay 4× p50 135 p95 191 · choose 2× p50 182 p95 182 · next-round 1× p50 130 p95 130

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5298 | 33 | 633 | 3 |
| span.tc-line:tcline | 2862 | 33 | 233 | 4 |
| span.cs-stack:js | 2353 | 33 | 267 | 4 |
| div.piece-flight.piece-res:js | 2429 | 33 | 267 | 3 |
| button.card.lt-card:js | 1459 | 33 | 200 | 4 |
| span.tick.num:bump | 1395 | 33 | 150 | 4 |
| div.path-inner:js | 2725 | 33 | 267 | 2 |
| span.worker-fig:panelland-under | 775 | 50 | 233 | 7 |
| div.as-card:js | 1149 | 33 | 233 | 4 |
| svg.leader:cult-breathe | 1199 | 33 | 183 | 3 |
| g.blink:cult-blink | 1199 | 33 | 183 | 3 |
| img.sprite.scene:cult-shift | 1199 | 33 | 183 | 3 |

Longest frames: 653 ms (style/layout/paint) · 258 ms (hn 243) · 238 ms (hn 6, hn 220) · 193 ms (hn 105) · 164 ms (hn 137)

## Round III

Clicks by kind: place 5× p50 118 p95 139 · recruit 7× p50 179 p95 227 · pay 8× p50 141 p95 318 · pick 1× p50 223 p95 223 · choose 5× p50 73 p95 221 · next-round 1× p50 145 p95 145

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7313 | 33 | 800 | 4 |
| span.tc-line:tcline | 3626 | 33 | 383 | 5 |
| span.cs-stack:js | 3357 | 33 | 383 | 4 |
| svg.leader:cult-breathe | 2118 | 33 | 800 | 4 |
| g.blink:cult-blink | 2118 | 33 | 800 | 4 |
| img.sprite.scene:cult-shift | 2118 | 33 | 800 | 4 |
| img.sprite.scene:cult-breathe | 2118 | 33 | 800 | 4 |
| div.path-inner:js | 3899 | 33 | 250 | 2 |
| span.worker-fig:panelland-under | 1185 | 50 | 383 | 6 |
| span.tick.num:bump | 2286 | 33 | 200 | 3 |
| i.cs-min:cs-bob | 816 | 50 | 800 | 8 |
| span.base:opacity | 1058 | 50 | 383 | 6 |

Longest frames: 806 ms (style/layout/paint) · 361 ms (hn 346) · 294 ms (hn 250) · 250 ms (hn 226) · 210 ms (hn 9, Lf 132)
