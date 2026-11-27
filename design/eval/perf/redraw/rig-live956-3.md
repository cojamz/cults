# Perf rig: live956-3

2026-11-01T10:20:45.198Z · http://localhost:5316 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (5)
- round I: clicks p95 201 ms (bar 100)
- round II: clicks p95 163 ms (bar 100)
- round III: clicks p95 185 ms (bar 100)
- round III: hovers p95 161 ms (bar 100)
- leak: heap 19.1 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 75 / 201 | 40 / 96 | 17 | 2 | 217 | 13 | 3 | 6 | 2363 | 499 | 12.9 |
| II | 90 / 163 | 50 / 77 | 17 | 1 | 450 | 11 | 5 | 18 | 3483 | 576 | 16.3 |
| III | 84 / 185 | 46 / 161 | 33 | 2 | 700 | 22 | 3 | 4 | 3921 | 582 | 20.8 |

Click phases (45 clicks that redrew the table, ms, median / p90): waiting for the browser 15 / 30 · rules 4 / 12 · React render and layout effects 32 / 56 · effects 16 / 31 · to the frame that shows it 12 / 19 · that frame painted (the rig's next frame) 18 / 39

Leak control on the last turn: unbroken game 5958 elements, 796 listeners, 19.1 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 53 p95 56 · choose 8× p50 73 p95 151 · recruit 3× p50 130 p95 201 · pay 3× p50 122 p95 132 · next-round 1× p50 – p95 – · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3038 | 17 | 217 | 2 |
| span.cs-stack:js | 1625 | 33 | 167 | 3 |
| span.tc-line:tcline | 1935 | 33 | 167 | 2 |
| span.worker-fig:panelland-under | 769 | 33 | 133 | 3 |
| svg.leader:cult-breathe | 1132 | 17 | 183 | 2 |
| g.blink:cult-blink | 1132 | 17 | 183 | 2 |
| img.sprite.scene:cult-shift | 1132 | 17 | 183 | 2 |
| span.tick.num:bump | 1063 | 33 | 83 | 2 |
| div.path-inner:js | 1909 | 17 | 117 | 1 |
| span.base:opacity | 628 | 33 | 167 | 3 |
| div.piece-flight.piece-res:js | 1577 | 17 | 133 | 1 |
| div.as-card:js | 748 | 33 | 133 | 2 |

Longest frames: 241 ms (style/layout/paint) · 150 ms (hn 131) · 138 ms (Lf 107) · 132 ms (Lf 98) · 124 ms (hn 100)

## Round II

Clicks by kind: place 4× p50 79 p95 82 · choose 7× p50 95 p95 161 · recruit 4× p50 116 p95 116 · pay 4× p50 106 p95 163 · next-round 1× p50 81 p95 81 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5703 | 17 | 250 | 1 |
| span.tc-line:tcline | 3925 | 17 | 133 | 1 |
| span.tick.num:bump | 1591 | 33 | 117 | 2 |
| span.cs-stack:js | 3163 | 17 | 133 | 1 |
| div.path-inner:js | 2704 | 17 | 133 | 1 |
| div.piece-flight.piece-res:js | 2556 | 17 | 133 | 1 |
| div.stage:opacity | 766 | 33 | 133 | 2 |
| svg.leader:cult-breathe | 1500 | 17 | 250 | 1 |
| g.blink:cult-blink | 1500 | 17 | 250 | 1 |
| img.sprite.scene:cult-shift | 1500 | 17 | 250 | 1 |
| img.sprite.scene:cult-breathe | 1500 | 17 | 250 | 1 |
| span.worker-fig:panelland-under | 1381 | 17 | 250 | 1 |

Longest frames: 468 ms (style/layout/paint) · 228 ms (hn 6, hn 207) · 132 ms (Lf 87) · 130 ms (Lf 106) · 126 ms (Lf 11, Lf 81)

## Round III

Clicks by kind: place 5× p50 79 p95 79 · choose 10× p50 85 p95 185 · recruit 5× p50 150 p95 150 · pay 5× p50 127 p95 252 · pick 3× p50 44 p95 72 · next-round 1× p50 71 p95 71 · 6 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7654 | 33 | 700 | 2 |
| span.cs-stack:js | 4369 | 33 | 233 | 3 |
| span.tc-line:tcline | 4972 | 33 | 233 | 2 |
| div.path-inner:js | 3711 | 33 | 217 | 2 |
| div.piece-flight.piece-res:js | 3500 | 33 | 233 | 2 |
| button.card.lt-card:js | 1619 | 33 | 233 | 3 |
| svg.leader:cult-breathe | 2397 | 33 | 700 | 2 |
| g.blink:cult-blink | 2397 | 33 | 700 | 2 |
| img.sprite.scene:cult-shift | 2397 | 33 | 700 | 2 |
| img.sprite.scene:cult-breathe | 2397 | 33 | 700 | 2 |
| span.tick.num:bump | 2274 | 33 | 217 | 2 |
| path.wash:fill | 820 | 33 | 200 | 5 |

Longest frames: 719 ms (style/layout/paint) · 231 ms (hn 222) · 223 ms (Lf 171) · 187 ms (hn 87) · 186 ms (hn 174)
