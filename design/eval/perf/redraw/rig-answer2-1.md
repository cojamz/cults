# Perf rig: answer2-1

2026-11-01T11:40:51.719Z · http://localhost:5320 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 336 ms (bar 100)
- round II: clicks p95 161 ms (bar 100)
- round III: clicks p95 146 ms (bar 100)
- leak: 6548 elements vs 5430 after a reload
- leak: 914 listeners vs 738 after a reload
- leak: heap 19.4 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 87 / 336 | 42 / 71 | 33 | 2 | 317 | 12 | 3 | 4 | 2363 | 499 | 13.1 |
| II | 99 / 161 | 50 / 73 | 33 | 3 | 483 | 14 | 5 | 27 | 3538 | 585 | 16.6 |
| III | 95 / 146 | 57 / 88 | 33 | 2 | 417 | 23 | 3 | 5 | 3924 | 582 | 21 |

Click phases (43 clicks that redrew the table, ms, median / p90): waiting for the browser 17 / 26 · rules 6 / 13 · React render and layout effects 29 / 54 · effects 14 / 27 · to the frame that shows it 9 / 15 · that frame painted (the rig's next frame) 19 / 46

Leak control on the last turn: unbroken game 6548 elements, 914 listeners, 19.4 MB; after a reload 5430, 738, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 84 p95 84 · choose 8× p50 90 p95 336 · recruit 3× p50 85 p95 85 · pay 3× p50 88 p95 152 · next-round 1× p50 88 p95 88 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3294 | 33 | 317 | 2 |
| span.cs-stack:js | 1731 | 33 | 200 | 3 |
| span.tc-line:tcline | 2037 | 33 | 250 | 2 |
| span.worker-fig:panelland-under | 939 | 33 | 250 | 3 |
| path.wash:fill | 699 | 33 | 250 | 4 |
| span.base:opacity | 1186 | 33 | 250 | 2 |
| svg.leader:cult-breathe | 1169 | 17 | 167 | 2 |
| g.blink:cult-blink | 1169 | 17 | 167 | 2 |
| img.sprite.scene:cult-shift | 1169 | 17 | 167 | 2 |
| img.sprite.scene:cult-breathe | 1110 | 17 | 167 | 2 |
| span.tick.num:bump | 1096 | 33 | 100 | 2 |
| div.stage:opacity | 672 | 33 | 250 | 3 |

Longest frames: 326 ms (style/layout/paint) · 222 ms (hn 201) · 179 ms (style/layout/paint) · 131 ms (hn 120) · 113 ms (style/layout/paint)

## Round II

Clicks by kind: place 4× p50 99 p95 99 · choose 7× p50 97 p95 161 · recruit 4× p50 142 p95 145 · pay 4× p50 151 p95 158 · next-round 1× p50 110 p95 110 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5521 | 33 | 217 | 3 |
| span.tc-line:tcline | 3500 | 33 | 183 | 3 |
| span.cs-stack:js | 2787 | 33 | 183 | 3 |
| span.tick.num:bump | 1583 | 33 | 117 | 4 |
| div.path-inner:js | 2729 | 33 | 150 | 2 |
| div.piece-flight.piece-res:js | 2440 | 33 | 150 | 2 |
| div.seat-stolen:brief-out | 1061 | 33 | 133 | 4 |
| button.card.lt-card:js | 1316 | 33 | 483 | 3 |
| svg.leader:cult-breathe | 1757 | 33 | 283 | 2 |
| g.blink:cult-blink | 1757 | 33 | 283 | 2 |
| img.sprite.scene:cult-shift | 1757 | 33 | 283 | 2 |
| img.sprite.scene:cult-breathe | 1757 | 33 | 283 | 2 |

Longest frames: 501 ms (style/layout/paint) · 186 ms (hn 174) · 180 ms (style/layout/paint) · 149 ms (Lf 102) · 140 ms (hn 115)

## Round III

Clicks by kind: place 5× p50 91 p95 109 · choose 10× p50 85 p95 118 · recruit 5× p50 134 p95 134 · pay 5× p50 144 p95 159 · pick 3× p50 96 p95 112 · next-round 1× p50 61 p95 61 · 6 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7863 | 33 | 417 | 2 |
| span.tc-line:tcline | 4915 | 33 | 267 | 2 |
| span.cs-stack:js | 4548 | 33 | 267 | 2 |
| div.path-inner:js | 3791 | 33 | 167 | 2 |
| div.piece-flight.piece-res:js | 3288 | 33 | 167 | 2 |
| svg.leader:cult-breathe | 2418 | 33 | 417 | 2 |
| g.blink:cult-blink | 2418 | 33 | 417 | 2 |
| img.sprite.scene:cult-shift | 2418 | 33 | 417 | 2 |
| img.sprite.scene:cult-breathe | 2418 | 33 | 417 | 2 |
| span.tick.num:bump | 2342 | 33 | 117 | 2 |
| span.worker-fig:panelland-under | 1469 | 33 | 267 | 3 |
| path.wash:fill | 810 | 33 | 217 | 5 |

Longest frames: 433 ms (style/layout/paint) · 259 ms (hn 235) · 224 ms (hn 190) · 213 ms (hn 87) · 184 ms (hn 150)
