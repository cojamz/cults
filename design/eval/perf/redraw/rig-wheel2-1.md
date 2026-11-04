# Perf rig: wheel2-1

2026-11-01T10:29:39.140Z · http://localhost:5317 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 186 ms (bar 100)
- round I: hovers p95 112 ms (bar 100)
- round II: clicks p95 185 ms (bar 100)
- round III: clicks p95 161 ms (bar 100)
- leak: 6542 elements vs 5430 after a reload
- leak: 914 listeners vs 738 after a reload
- leak: heap 19.4 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 84 / 186 | 43 / 112 | 17 | 2 | 233 | 10 | 3 | 8 | 2363 | 499 | 13 |
| II | 99 / 185 | 54 / 81 | 17 | 2 | 600 | 11 | 4 | 25 | 3527 | 583 | 16.3 |
| III | 101 / 161 | 40 / 85 | 33 | 2 | 600 | 27 | 4 | 4 | 3921 | 582 | 21.2 |

Click phases (44 clicks that redrew the table, ms, median / p90): waiting for the browser 15 / 26 · rules 4 / 12 · React render and layout effects 32 / 51 · effects 17 / 32 · to the frame that shows it 13 / 22 · that frame painted (the rig's next frame) 22 / 39

Leak control on the last turn: unbroken game 6542 elements, 914 listeners, 19.4 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 77 p95 77 · choose 8× p50 84 p95 186 · recruit 3× p50 – p95 – · pay 3× p50 132 p95 141 · next-round 1× p50 67 p95 67 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3383 | 17 | 233 | 2 |
| span.cs-stack:js | 2049 | 17 | 117 | 2 |
| div.piece-flight.piece-res:js | 1505 | 17 | 117 | 2 |
| span.tc-line:tcline | 2192 | 17 | 117 | 1 |
| span.tick.num:bump | 1032 | 33 | 117 | 2 |
| div.path-inner:js | 1867 | 17 | 117 | 1 |
| span.worker-fig:panelland-under | 911 | 17 | 117 | 2 |
| svg.leader:cult-breathe | 1452 | 17 | 183 | 1 |
| g.blink:cult-blink | 1452 | 17 | 183 | 1 |
| img.sprite.scene:cult-shift | 1452 | 17 | 183 | 1 |
| img.sprite.scene:cult-breathe | 1424 | 17 | 183 | 1 |
| button.card.lt-card:js | 666 | 17 | 117 | 2 |

Longest frames: 252 ms (style/layout/paint) · 185 ms (hn 162) · 126 ms (hn 115) · 118 ms (Lf 68) · 113 ms (hn 103)

## Round II

Clicks by kind: place 4× p50 62 p95 99 · choose 7× p50 92 p95 185 · recruit 4× p50 104 p95 125 · pay 4× p50 134 p95 142 · next-round 1× p50 78 p95 78 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5558 | 17 | 183 | 1 |
| span.tc-line:tcline | 3844 | 17 | 150 | 1 |
| span.tick.num:bump | 1683 | 33 | 150 | 2 |
| span.cs-stack:js | 3026 | 17 | 150 | 1 |
| div.path-inner:js | 2971 | 17 | 150 | 1 |
| div.piece-flight.piece-res:js | 2682 | 17 | 150 | 1 |
| span.base:opacity | 1197 | 33 | 150 | 2 |
| svg.leader:cult-breathe | 1162 | 33 | 183 | 2 |
| g.blink:cult-blink | 1162 | 33 | 183 | 2 |
| img.sprite.scene:cult-shift | 1162 | 33 | 183 | 2 |
| img.sprite.scene:cult-breathe | 1162 | 33 | 183 | 2 |
| path.wash:fill | 537 | 33 | 167 | 4 |

Longest frames: 616 ms (style/layout/paint) · 170 ms (hn 152) · 161 ms (hn 88) · 156 ms (hn 132) · 142 ms (Lf 101)

## Round III

Clicks by kind: place 5× p50 101 p95 115 · choose 10× p50 105 p95 215 · recruit 5× p50 122 p95 144 · pay 5× p50 123 p95 143 · pick 3× p50 71 p95 98 · next-round 1× p50 98 p95 98 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7368 | 33 | 600 | 2 |
| span.tc-line:tcline | 5097 | 33 | 267 | 2 |
| span.cs-stack:js | 4596 | 33 | 267 | 2 |
| svg.leader:cult-breathe | 1712 | 33 | 600 | 3 |
| g.blink:cult-blink | 1712 | 33 | 600 | 3 |
| img.sprite.scene:cult-shift | 1712 | 33 | 600 | 3 |
| img.sprite.scene:cult-breathe | 1712 | 33 | 600 | 3 |
| span.base:opacity | 1679 | 33 | 267 | 3 |
| span.tick.num:bump | 2338 | 33 | 233 | 2 |
| path.wash:fill | 836 | 33 | 217 | 5 |
| div.path-inner:js | 3918 | 33 | 233 | 1 |
| span.worker-fig:panelland-under | 1253 | 33 | 267 | 3 |

Longest frames: 602 ms (style/layout/paint) · 244 ms (hn 242) · 221 ms (hn 106) · 209 ms (hn 198) · 206 ms (hn 7, hn 179)
