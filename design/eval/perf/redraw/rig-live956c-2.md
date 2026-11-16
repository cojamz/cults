# Perf rig: live956c-2

2026-11-01T11:48:33.829Z · http://localhost:5316 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (4)
- round I: clicks p95 170 ms (bar 100)
- round II: clicks p95 173 ms (bar 100)
- round III: clicks p95 167 ms (bar 100)
- leak: heap 19.2 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 83 / 170 | 42 / 96 | 17 | 1 | 217 | 10 | 2 | 5 | 2363 | 499 | 13 |
| II | 97 / 173 | 54 / 78 | 33 | 2 | 500 | 17 | 4 | 26 | 3538 | 585 | 16.3 |
| III | 96 / 167 | 60 / 97 | 33 | 4 | 667 | 34 | 4 | 5 | 3919 | 582 | 20.8 |

Click phases (45 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 28 · rules 5 / 13 · React render and layout effects 31 / 66 · effects 15 / 26 · to the frame that shows it 12 / 18 · that frame painted (the rig's next frame) 19 / 37

Leak control on the last turn: unbroken game 5955 elements, 796 listeners, 19.2 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 69 p95 69 · choose 8× p50 75 p95 170 · recruit 3× p50 83 p95 83 · pay 3× p50 127 p95 145 · next-round 1× p50 121 p95 121 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.cs-stack:js | 1858 | 33 | 183 | 2 |
| b.seat-delta.up:seatdelta | 3494 | 17 | 217 | 1 |
| span.tc-line:tcline | 2169 | 17 | 183 | 1 |
| span.tick.num:bump | 1027 | 33 | 117 | 2 |
| div.path-inner:js | 1852 | 17 | 133 | 1 |
| span.worker-fig:panelland-under | 914 | 33 | 183 | 2 |
| div.piece-flight.piece-res:js | 1469 | 17 | 133 | 1 |
| path.wash:fill | 676 | 17 | 183 | 2 |
| button.fb.lt-rate:opacity | 587 | 17 | 183 | 2 |
| button.card.lt-card:opacity | 587 | 17 | 183 | 2 |
| svg.leader:cult-breathe | 1106 | 17 | 117 | 1 |
| g.blink:cult-blink | 1106 | 17 | 117 | 1 |

Longest frames: 225 ms (style/layout/paint) · 173 ms (hn 158) · 156 ms (hn 146) · 141 ms (hn 130) · 112 ms (hn 6, hn 5, hn 6)

## Round II

Clicks by kind: place 4× p50 68 p95 82 · choose 7× p50 75 p95 168 · recruit 4× p50 131 p95 173 · pay 4× p50 115 p95 124 · next-round 1× p50 81 p95 81 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5697 | 17 | 167 | 1 |
| span.cs-stack:js | 2504 | 33 | 183 | 2 |
| span.tc-line:tcline | 3569 | 17 | 183 | 1 |
| span.tick.num:bump | 1683 | 33 | 117 | 2 |
| svg.leader:cult-breathe | 1501 | 17 | 217 | 2 |
| g.blink:cult-blink | 1501 | 17 | 217 | 2 |
| img.sprite.scene:cult-shift | 1501 | 17 | 217 | 2 |
| img.sprite.scene:cult-breathe | 1501 | 17 | 217 | 2 |
| button.card.lt-card:js | 1478 | 33 | 500 | 2 |
| div.path-inner:js | 2806 | 17 | 150 | 1 |
| div.piece-flight.piece-res:js | 2476 | 17 | 150 | 1 |
| span.base:opacity | 1108 | 33 | 183 | 2 |

Longest frames: 512 ms (style/layout/paint) · 157 ms (hn 141) · 143 ms (Lf 95) · 142 ms (Lf 94) · 126 ms (hn 109)

## Round III

Clicks by kind: place 5× p50 92 p95 96 · choose 10× p50 91 p95 275 · recruit 5× p50 133 p95 133 · pay 5× p50 112 p95 167 · pick 3× p50 63 p95 71 · next-round 1× p50 70 p95 70 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7128 | 33 | 667 | 4 |
| span.tc-line:tcline | 4712 | 33 | 300 | 4 |
| span.cs-stack:js | 4410 | 33 | 300 | 3 |
| span.tick.num:bump | 2071 | 50 | 300 | 6 |
| div.path-inner:js | 3696 | 33 | 217 | 3 |
| svg.leader:cult-breathe | 1996 | 50 | 667 | 5 |
| g.blink:cult-blink | 1996 | 50 | 667 | 5 |
| img.sprite.scene:cult-shift | 1996 | 50 | 667 | 5 |
| img.sprite.scene:cult-breathe | 1996 | 50 | 667 | 5 |
| div.piece-flight.piece-res:js | 3360 | 33 | 217 | 2 |
| button.card.lt-card:js | 1500 | 33 | 217 | 4 |
| span.tip.fig:js | 840 | 50 | 217 | 7 |

Longest frames: 680 ms (style/layout/paint) · 277 ms (hn 258) · 236 ms (Lf 162) · 211 ms (hn 201) · 202 ms (hn 78)
