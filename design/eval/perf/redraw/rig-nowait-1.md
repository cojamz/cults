# Perf rig: nowait-1

2026-11-01T10:49:47.298Z · http://localhost:5318 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 259 ms (bar 100)
- round I: hovers p95 133 ms (bar 100)
- round II: clicks p95 215 ms (bar 100)
- round III: clicks p95 242 ms (bar 100)
- round III: show frames p95 33.5 ms (bar 33.4)
- leak: 6539 elements vs 5430 after a reload
- leak: 914 listeners vs 738 after a reload
- leak: heap 19.3 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 125 / 259 | 37 / 133 | 33 | 3 | 267 | 30 | 3 | 10 | 2363 | 499 | 13 |
| II | 121 / 215 | 56 / 85 | 33 | 4 | 800 | 26 | 7 | 34 | 3527 | 583 | 16.5 |
| III | 118 / 242 | 53 / 81 | 34 | 5 | 1200 | 50 | 6 | 7 | 3921 | 582 | 21.2 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 19 / 47 · rules 6 / 13 · React render and layout effects 37 / 69 · effects 19 / 41 · to the frame that shows it 15 / 30 · that frame painted (the rig's next frame) 29 / 59

Leak control on the last turn: unbroken game 6539 elements, 914 listeners, 19.3 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 70 p95 70 · choose 8× p50 109 p95 259 · recruit 3× p50 – p95 – · pay 3× p50 139 p95 202 · next-round 1× p50 134 p95 134 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 2912 | 33 | 267 | 4 |
| span.cs-stack:js | 1287 | 50 | 200 | 6 |
| span.tc-line:tcline | 1762 | 33 | 200 | 4 |
| span.tick.num:bump | 954 | 33 | 183 | 5 |
| div.path-inner:js | 1572 | 33 | 183 | 3 |
| svg.leader:cult-breathe | 2018 | 33 | 233 | 2 |
| g.blink:cult-blink | 2018 | 33 | 233 | 2 |
| img.sprite.scene:cult-shift | 2018 | 33 | 233 | 2 |
| div.piece-flight.piece-res:js | 1335 | 33 | 183 | 3 |
| span.worker-fig:panelland-under | 550 | 50 | 200 | 7 |
| span.tick.dip:bump | 442 | 50 | 183 | 8 |
| button.card.lt-card:js | 499 | 50 | 100 | 7 |

Longest frames: 272 ms (style/layout/paint) · 231 ms (hn 200) · 188 ms (style/layout/paint) · 185 ms (hn 138) · 181 ms (style/layout/paint)

## Round II

Clicks by kind: place 4× p50 103 p95 103 · choose 7× p50 125 p95 212 · recruit 4× p50 121 p95 121 · pay 4× p50 141 p95 215 · next-round 1× p50 127 p95 127 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5296 | 33 | 267 | 4 |
| span.cs-stack:js | 2887 | 33 | 183 | 4 |
| span.tc-line:tcline | 3485 | 33 | 183 | 3 |
| svg.leader:cult-breathe | 1586 | 50 | 267 | 6 |
| g.blink:cult-blink | 1586 | 50 | 267 | 6 |
| img.sprite.scene:cult-shift | 1586 | 50 | 267 | 6 |
| img.sprite.scene:cult-breathe | 1586 | 50 | 267 | 6 |
| span.tick.num:bump | 1376 | 50 | 167 | 6 |
| div.path-inner:js | 2635 | 33 | 267 | 3 |
| button.card.lt-card:js | 1322 | 33 | 800 | 5 |
| div.piece-flight.piece-res:js | 2428 | 33 | 167 | 2 |
| span.worker-fig:panelland-under | 955 | 50 | 267 | 5 |

Longest frames: 803 ms (style/layout/paint) · 261 ms (hn 241) · 259 ms (TimerHandler:setTimeout 39) · 243 ms (hn 9, hn 212) · 195 ms (Lf 150)

## Round III

Clicks by kind: place 5× p50 94 p95 97 · choose 10× p50 118 p95 234 · recruit 5× p50 162 p95 269 · pay 5× p50 160 p95 242 · pick 3× p50 80 p95 97 · next-round 1× p50 62 p95 62 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 6764 | 50 | 1200 | 5 |
| span.tc-line:tcline | 4535 | 50 | 283 | 6 |
| span.cs-stack:js | 3804 | 50 | 283 | 6 |
| div.path-inner:js | 3280 | 33 | 267 | 5 |
| div.piece-flight.piece-res:js | 2995 | 33 | 150 | 4 |
| button.card.lt-card:js | 1260 | 50 | 267 | 9 |
| span.tick.num:bump | 2005 | 50 | 233 | 5 |
| svg.leader:cult-breathe | 2361 | 33 | 1200 | 4 |
| g.blink:cult-blink | 2361 | 33 | 1200 | 4 |
| img.sprite.scene:cult-shift | 2361 | 33 | 1200 | 4 |
| img.sprite.scene:cult-breathe | 2361 | 33 | 1200 | 4 |
| span.base:opacity | 1514 | 50 | 283 | 6 |

Longest frames: 1190 ms (style/layout/paint) · 271 ms (hn 7, hn 245) · 264 ms (hn 257) · 249 ms (hn 105) · 241 ms (hn 229)

Frames over 2 s, with the screen at the time:
- 2344 ms · setup · prompt "P4 is picking an artifact ···" · hover "" · options 
