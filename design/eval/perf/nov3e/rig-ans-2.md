# Perf rig: ans-2

2026-11-03T17:24:03.890Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 277 ms (bar 100)
- round I: hovers p95 131 ms (bar 100)
- round II: clicks p95 176 ms (bar 100)
- round III: clicks p95 224 ms (bar 100)
- round III: hovers p95 143 ms (bar 100)
- leak: 6286 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.2 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 98 / 277 | 58 / 131 | 33 | 2 | 300 | 13 | 2 | 10 | 2490 | 492 | 13.5 |
| II | 104 / 176 | 49 / 98 | 33 | 3 | 683 | 18 | 1 | 7 | 3575 | 551 | 17.7 |
| III | 109 / 224 | 42 / 143 | 33 | 3 | 800 | 31 | 5 | 28 | 3945 | 577 | 20.8 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 17 / 36 · rules 6 / 12 · React render and layout effects 37 / 75 · effects 11 / 29 · to the frame that shows it 15 / 23 · that frame painted (the rig's next frame) 25 / 48

Leak control on the last turn: unbroken game 6286 elements, 856 listeners, 20.2 MB; after a reload 5093, 697, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 82 p95 99 · choose 5× p50 85 p95 277 · recruit 3× p50 123 p95 136 · pay 3× p50 95 p95 165 · next-round 1× p50 113 p95 113

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3276 | 33 | 300 | 2 |
| span.cs-stack:js | 1638 | 33 | 300 | 3 |
| span.tc-line:tcline | 2018 | 33 | 133 | 2 |
| div.path-inner:js | 1748 | 17 | 300 | 2 |
| span.worker-fig:panelland-under | 823 | 33 | 183 | 4 |
| div.piece-flight.piece-res:js | 1509 | 33 | 300 | 2 |
| span.tick.num:bump | 1132 | 33 | 100 | 2 |
| path.wash:fill | 225 | 67 | 183 | 10 |
| span.base:opacity | 739 | 33 | 183 | 3 |
| svg.leader:cult-breathe | 1072 | 33 | 250 | 2 |
| g.blink:cult-blink | 1072 | 33 | 250 | 2 |
| img.sprite.scene:cult-shift | 1072 | 33 | 250 | 2 |

Longest frames: 291 ms (hn 257) · 239 ms (style/layout/paint) · 194 ms (hn 167) · 174 ms (hn 156) · 138 ms (hn 128)

## Round II

Clicks by kind: place 4× p50 102 p95 107 · recruit 4× p50 162 p95 176 · pay 4× p50 99 p95 103 · choose 2× p50 167 p95 167 · next-round 1× p50 124 p95 124

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5391 | 33 | 683 | 3 |
| span.tc-line:tcline | 3022 | 33 | 183 | 3 |
| span.cs-stack:js | 2552 | 33 | 200 | 3 |
| div.path-inner:js | 2778 | 33 | 183 | 2 |
| div.piece-flight.piece-res:js | 2412 | 33 | 183 | 2 |
| button.card.lt-card:js | 1463 | 33 | 250 | 3 |
| span.tick.num:bump | 1455 | 33 | 117 | 3 |
| span.worker-fig:panelland-under | 936 | 33 | 183 | 4 |
| div.as-card:js | 1207 | 33 | 183 | 3 |
| svg.leader:cult-breathe | 1180 | 33 | 150 | 3 |
| g.blink:cult-blink | 1180 | 33 | 150 | 3 |
| img.sprite.scene:cult-shift | 1180 | 33 | 150 | 3 |

Longest frames: 696 ms (style/layout/paint) · 238 ms (hn 119) · 189 ms (hn 177) · 175 ms (hn 155) · 149 ms (hn 119)

## Round III

Clicks by kind: place 5× p50 86 p95 105 · recruit 7× p50 146 p95 224 · pay 8× p50 118 p95 244 · pick 1× p50 109 p95 109 · choose 5× p50 75 p95 185 · next-round 1× p50 189 p95 189

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7569 | 33 | 800 | 3 |
| span.tc-line:tcline | 3758 | 33 | 250 | 4 |
| span.cs-stack:js | 3238 | 33 | 217 | 3 |
| span.worker-fig:panelland-under | 1297 | 50 | 217 | 6 |
| div.path-inner:js | 3797 | 33 | 183 | 2 |
| span.tick.num:bump | 2361 | 33 | 200 | 3 |
| svg.leader:cult-breathe | 2064 | 33 | 800 | 3 |
| g.blink:cult-blink | 2064 | 33 | 800 | 3 |
| img.sprite.scene:cult-shift | 2064 | 33 | 800 | 3 |
| img.sprite.scene:cult-breathe | 2064 | 33 | 800 | 3 |
| div.piece-flight.piece-res:js | 2835 | 33 | 183 | 2 |
| span.base:opacity | 1128 | 33 | 200 | 5 |

Longest frames: 811 ms (style/layout/paint) · 374 ms (hn 327) · 237 ms (Lf 158) · 212 ms (style/layout/paint) · 205 ms (hn 10, hn 177)
