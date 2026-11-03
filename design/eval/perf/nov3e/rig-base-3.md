# Perf rig: base-3

2026-11-03T17:31:26.696Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 224 ms (bar 100)
- round II: clicks p95 193 ms (bar 100)
- round III: clicks p95 190 ms (bar 100)
- round III: hovers p95 102 ms (bar 100)
- idle busy grows 2% → 7% over the game
- leak: 6290 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 19.9 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 84 / 224 | 61 / 93 | 33 | 2 | 283 | 12 | 2 | 9 | 2490 | 492 | 13.5 |
| II | 116 / 193 | 61 / 79 | 33 | 2 | 600 | 15 | 1 | 2 | 3575 | 551 | 17.4 |
| III | 124 / 190 | 60 / 102 | 33 | 3 | 683 | 32 | 7 | 33 | 3945 | 577 | 20.6 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 16 / 34 · rules 5 / 12 · React render and layout effects 40 / 69 · effects 13 / 31 · to the frame that shows it 15 / 25 · that frame painted (the rig's next frame) 26 / 47

Leak control on the last turn: unbroken game 6290 elements, 856 listeners, 19.9 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 55 p95 77 · choose 5× p50 79 p95 164 · recruit 3× p50 151 p95 224 · pay 3× p50 100 p95 126 · next-round 1× p50 84 p95 84

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3273 | 33 | 283 | 2 |
| span.cs-stack:js | 1606 | 33 | 200 | 3 |
| span.tc-line:tcline | 1905 | 33 | 133 | 2 |
| span.base:opacity | 633 | 33 | 167 | 4 |
| span.worker-fig:panelland-under | 748 | 33 | 167 | 3 |
| span.tick.num:bump | 1094 | 33 | 117 | 2 |
| div.path-inner:js | 1905 | 17 | 200 | 1 |
| div.as-card:js | 858 | 33 | 200 | 2 |
| div.piece-flight.piece-res:js | 1549 | 17 | 200 | 1 |
| path.wash:fill | 215 | 50 | 133 | 7 |
| span.tick.dip:bump | 646 | 33 | 117 | 2 |
| section.lt-cult-seat.mine:seatskip | 268 | 33 | 117 | 4 |

Longest frames: 295 ms (style/layout/paint) · 207 ms (hn 185) · 158 ms (Lf 112) · 137 ms (style/layout/paint) · 135 ms (hn 113)

## Round II

Clicks by kind: place 4× p50 63 p95 84 · recruit 4× p50 150 p95 169 · pay 4× p50 114 p95 116 · choose 2× p50 193 p95 193 · next-round 1× p50 131 p95 131

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5596 | 33 | 600 | 2 |
| span.cs-stack:js | 2543 | 33 | 183 | 3 |
| span.tc-line:tcline | 3243 | 33 | 183 | 2 |
| div.path-inner:js | 2803 | 33 | 233 | 2 |
| span.tick.num:bump | 1467 | 33 | 100 | 3 |
| span.worker-fig:panelland-under | 1028 | 33 | 183 | 4 |
| path.wash:fill | 259 | 83 | 183 | 14 |
| button.card.lt-card:js | 1549 | 33 | 233 | 2 |
| span.base:opacity | 860 | 33 | 183 | 3 |
| div.piece-flight.piece-res:js | 2555 | 17 | 183 | 1 |
| div.as-card:js | 1152 | 33 | 183 | 2 |
| svg.leader:cult-breathe | 1122 | 33 | 283 | 2 |

Longest frames: 613 ms (style/layout/paint) · 231 ms (hn 130) · 189 ms (hn 179) · 151 ms (hn 137) · 143 ms (hn 122)

## Round III

Clicks by kind: place 5× p50 89 p95 124 · recruit 7× p50 140 p95 203 · pay 8× p50 170 p95 186 · pick 1× p50 115 p95 115 · choose 5× p50 100 p95 190 · next-round 1× p50 76 p95 76

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7656 | 33 | 683 | 3 |
| span.tc-line:tcline | 3797 | 33 | 283 | 3 |
| span.cs-stack:js | 3320 | 33 | 283 | 3 |
| div.path-inner:js | 4111 | 33 | 150 | 2 |
| span.tick.num:bump | 2305 | 33 | 117 | 3 |
| div.piece-flight.piece-res:js | 3077 | 33 | 133 | 2 |
| svg.leader:cult-breathe | 2043 | 33 | 683 | 3 |
| g.blink:cult-blink | 2043 | 33 | 683 | 3 |
| img.sprite.scene:cult-shift | 2043 | 33 | 683 | 3 |
| img.sprite.scene:cult-breathe | 2043 | 33 | 683 | 3 |
| span.worker-fig:panelland-under | 1246 | 33 | 283 | 4 |
| span.base:opacity | 1143 | 33 | 283 | 4 |

Longest frames: 684 ms (style/layout/paint) · 264 ms (hn 239) · 239 ms (hn 203) · 220 ms (hn 209) · 209 ms (hn 71)
