# Perf rig: base-1

2026-11-01T08:39:09.727Z · http://localhost:5310 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (13)
- round I: clicks p95 324 ms (bar 100)
- round I: hovers p95 103 ms (bar 100)
- round I: idle table busy 11% (bar 10%)
- round II: clicks p95 281 ms (bar 100)
- round II: hovers p95 167 ms (bar 100)
- round II: show frames p95 50 ms (bar 33.4)
- round II: 8% of show frames hitch (bar 5%)
- round III: clicks p95 334 ms (bar 100)
- round III: hovers p95 148 ms (bar 100)
- round III: show frames p95 33.5 ms (bar 33.4)
- leak: 6363 elements vs 5280 after a reload
- leak: 894 listeners vs 730 after a reload
- leak: heap 19.7 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 131 / 324 | 50 / 103 | 33 | 5 | 300 | 28 | 11 | 5 | 2363 | 499 | 13.1 |
| II | 157 / 281 | 54 / 167 | 50 | 8 | 1167 | 65 | 6 | 21 | 3484 | 575 | 16.3 |
| III | 175 / 334 | 60 / 148 | 34 | 5 | 683 | 52 | 1 | 2 | 4044 | 595 | 20.1 |

Click phases (33 clicks that redrew the table, ms, median / p90): waiting for the browser 22 / 33 · rules 16 / 30 · React render and layout effects 35 / 85 · effects 24 / 44 · to the frame that shows it 17 / 29 · that frame painted (the rig's next frame) 32 / 80

Leak control on the last turn: unbroken game 6363 elements, 894 listeners, 19.7 MB; after a reload 5280, 730, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 90 p95 90 · choose 8× p50 112 p95 324 · recruit 3× p50 – p95 – · pay 3× p50 171 p95 236 · next-round 1× p50 145 p95 145 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 2840 | 50 | 267 | 5 |
| svg.leader:cult-breathe | 1509 | 50 | 300 | 7 |
| g.blink:cult-blink | 1509 | 50 | 300 | 7 |
| img.sprite.scene:cult-shift | 1509 | 50 | 300 | 7 |
| img.sprite.scene:cult-breathe | 1450 | 50 | 300 | 7 |
| span.tc-line:tcline | 1968 | 33 | 217 | 5 |
| span.cs-stack:js | 1729 | 33 | 217 | 5 |
| span.tick.num:bump | 882 | 50 | 300 | 9 |
| span.lead:js | 493 | 67 | 300 | 13 |
| span.worker-fig:panelland-under | 1020 | 50 | 217 | 5 |
| div.path-inner:js | 1560 | 33 | 150 | 3 |
| div.piece-flight.piece-res:js | 1421 | 33 | 150 | 3 |

Longest frames: 273 ms (style/layout/paint) · 211 ms (FrameRequestCallback 8) · 209 ms (Nf 155) · 206 ms (hn 179) · 184 ms (hn 172)

## Round II

Clicks by kind: place 4× p50 158 p95 158 · choose 7× p50 132 p95 281 · recruit 4× p50 210 p95 210 · pay 3× p50 159 p95 193 · pick 3× p50 61 p95 157 · next-round 1× p50 95 p95 95 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 4648 | 50 | 617 | 9 |
| span.tc-line:tcline | 2823 | 67 | 617 | 10 |
| span.cs-stack:js | 2291 | 50 | 267 | 9 |
| button.card.lt-card:js | 1131 | 67 | 1167 | 14 |
| div.path-inner:js | 1953 | 50 | 267 | 8 |
| div.piece-flight.piece-res:js | 1861 | 50 | 200 | 7 |
| svg.leader:cult-breathe | 2166 | 50 | 367 | 6 |
| g.blink:cult-blink | 2166 | 50 | 367 | 6 |
| img.sprite.scene:cult-shift | 2166 | 50 | 367 | 6 |
| img.sprite.scene:cult-breathe | 2166 | 50 | 367 | 6 |
| span.tick.num:bump | 1130 | 50 | 267 | 10 |
| span.lead:cult-scheme | 1442 | 50 | 367 | 7 |

Longest frames: 1159 ms (style/layout/paint) · 572 ms (ca 14, Worker.onmessage 6, IdleRequestCallback 24) · 334 ms (Lf 81) · 313 ms (ca 9, TimerHandler:setTimeout 16, ca 8) · 272 ms (style/layout/paint)

## Round III

Clicks by kind: place 5× p50 130 p95 130 · recruit 5× p50 193 p95 193 · pay 5× p50 172 p95 277 · choose 3× p50 253 p95 334 · pick 1× p50 101 p95 101 · next-round 1× p50 79 p95 79 · 8 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7254 | 50 | 683 | 5 |
| span.tc-line:tcline | 4119 | 50 | 183 | 5 |
| span.cs-stack:js | 3062 | 50 | 183 | 6 |
| span.tick.num:bump | 2347 | 50 | 167 | 7 |
| svg.leader:cult-breathe | 3407 | 33 | 683 | 4 |
| g.blink:cult-blink | 3407 | 33 | 683 | 4 |
| img.sprite.scene:cult-shift | 3407 | 33 | 683 | 4 |
| img.sprite.scene:cult-breathe | 3407 | 33 | 683 | 4 |
| div.path-inner:js | 3326 | 33 | 183 | 4 |
| div.piece-flight.piece-res:js | 2638 | 33 | 183 | 4 |
| span.lead:cult-scheme | 2271 | 33 | 683 | 4 |
| i.cs-min:cs-bob | 2266 | 33 | 683 | 4 |

Longest frames: 691 ms (style/layout/paint) · 301 ms (hn 270) · 292 ms (Nf 233) · 252 ms (style/layout/paint) · 242 ms (hn 213)

Frames over 2 s, with the screen at the time:
- 2049 ms · setup · prompt "P4 is picking an artifact ···" · hover "" · options 
