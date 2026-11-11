# Perf rig: live956c-1

2026-11-01T11:40:48.775Z · http://localhost:5316 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (4)
- round I: clicks p95 237 ms (bar 100)
- round II: clicks p95 218 ms (bar 100)
- round III: clicks p95 129 ms (bar 100)
- leak: heap 19.2 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 94 / 237 | 42 / 80 | 33 | 2 | 283 | 15 | 3 | 7 | 2363 | 499 | 13 |
| II | 101 / 218 | 62 / 74 | 33 | 2 | 650 | 20 | 5 | 20 | 3527 | 583 | 16.3 |
| III | 84 / 129 | 69 / 99 | 33 | 2 | 700 | 22 | 3 | 4 | 3921 | 582 | 20.9 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 27 · rules 4 / 9 · React render and layout effects 29 / 51 · effects 16 / 28 · to the frame that shows it 10 / 18 · that frame painted (the rig's next frame) 20 / 38

Leak control on the last turn: unbroken game 5958 elements, 796 listeners, 19.2 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 49 p95 49 · choose 8× p50 71 p95 237 · recruit 3× p50 126 p95 126 · pay 3× p50 125 p95 141 · next-round 1× p50 80 p95 80 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3064 | 33 | 283 | 2 |
| span.cs-stack:js | 1705 | 33 | 183 | 2 |
| span.tc-line:tcline | 1639 | 33 | 150 | 2 |
| svg.leader:cult-breathe | 1312 | 33 | 167 | 2 |
| g.blink:cult-blink | 1312 | 33 | 167 | 2 |
| img.sprite.scene:cult-shift | 1312 | 33 | 167 | 2 |
| img.sprite.scene:cult-breathe | 1199 | 33 | 167 | 2 |
| span.tick.num:bump | 1072 | 33 | 150 | 2 |
| span.lead:cult-scheme | 502 | 33 | 167 | 4 |
| i.cs-min:cs-bob-eager | 502 | 33 | 167 | 4 |
| i.cs-min:cs-bob | 502 | 33 | 167 | 4 |
| span.worker-fig:panelland-under | 882 | 33 | 167 | 2 |

Longest frames: 305 ms (style/layout/paint) · 157 ms (Lf 109) · 157 ms (hn 135) · 148 ms (hn 123) · 143 ms (hn 117)

## Round II

Clicks by kind: place 4× p50 58 p95 113 · choose 7× p50 101 p95 218 · recruit 4× p50 127 p95 127 · pay 4× p50 96 p95 178 · next-round 1× p50 107 p95 107 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5550 | 33 | 167 | 2 |
| span.tc-line:tcline | 4075 | 33 | 183 | 2 |
| span.cs-stack:js | 2969 | 33 | 183 | 2 |
| div.path-inner:js | 2920 | 33 | 167 | 2 |
| span.tick.num:bump | 1799 | 33 | 133 | 3 |
| div.piece-flight.piece-res:js | 2468 | 33 | 133 | 2 |
| button.card.lt-card:js | 1616 | 33 | 650 | 3 |
| span.base:opacity | 1359 | 33 | 183 | 3 |
| span.worker-fig:panelland-under | 1180 | 33 | 183 | 3 |
| path.wash:fill | 800 | 33 | 183 | 4 |
| span.worker:js | 1050 | 33 | 167 | 3 |
| svg.leader:cult-breathe | 1552 | 17 | 200 | 2 |

Longest frames: 654 ms (style/layout/paint) · 196 ms (Lf 85, Tf 8) · 169 ms (hn 148) · 165 ms (hn 140) · 149 ms (hn 24, Lf 82)

## Round III

Clicks by kind: place 5× p50 62 p95 79 · choose 10× p50 84 p95 122 · recruit 5× p50 182 p95 182 · pay 5× p50 99 p95 129 · pick 3× p50 53 p95 92 · next-round 1× p50 40 p95 40 · 6 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7990 | 33 | 700 | 2 |
| span.tc-line:tcline | 5224 | 33 | 233 | 2 |
| span.cs-stack:js | 4799 | 33 | 233 | 2 |
| span.tick.num:bump | 2347 | 33 | 233 | 2 |
| svg.leader:cult-breathe | 2152 | 33 | 700 | 2 |
| g.blink:cult-blink | 2152 | 33 | 700 | 2 |
| img.sprite.scene:cult-shift | 2152 | 33 | 700 | 2 |
| img.sprite.scene:cult-breathe | 2152 | 33 | 700 | 2 |
| span.base:opacity | 1417 | 33 | 233 | 3 |
| div.path-inner:js | 4104 | 33 | 233 | 1 |
| path.wash:fill | 813 | 33 | 183 | 5 |
| div.piece-flight.piece-res:js | 3728 | 17 | 183 | 1 |

Longest frames: 716 ms (style/layout/paint) · 218 ms (hn 209) · 216 ms (style/layout/paint) · 212 ms (hn 200) · 200 ms (hn 81)
