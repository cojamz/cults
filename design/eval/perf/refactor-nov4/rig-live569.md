# Perf rig: live569

2026-11-04T17:31:04.598Z · http://localhost:5297/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 9 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 157 ms (bar 100)
- round II: clicks p95 316 ms (bar 100)
- round III: clicks p95 189 ms (bar 100)
- round III: hovers p95 135 ms (bar 100)
- round III: idle table busy 11% (bar 10%)
- leak: 6377 elements vs 5181 after a reload
- leak: 864 listeners vs 702 after a reload
- leak: heap 19.8 MB vs 9.4 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 133 / 157 | 43 / 68 | 17 | 2 | 283 | 23 | 9 | 63 | 2691 | 496 | 13.5 |
| II | 130 / 316 | 53 / 94 | 33 | 2 | 217 | 25 | 6 | 52 | 3581 | 549 | 17.1 |
| III | 135 / 189 | 40 / 135 | 33 | 2 | 317 | 35 | 11 | 100 | 3979 | 582 | 21.3 |

Click phases (35 clicks that redrew the table, ms, median / p90): waiting for the browser 17 / 40 · rules 6 / 16 · React render and layout effects 43 / 70 · effects 18 / 36 · to the frame that shows it 18 / 34 · that frame painted (the rig's next frame) 30 / 65

Leak control on the last turn: unbroken game 6377 elements, 864 listeners, 19.8 MB; after a reload 5181, 702, 9.4 MB.

## Round I

Clicks by kind: place 3× p50 74 p95 83 · recruit 3× p50 134 p95 156 · pay 3× p50 151 p95 157 · next-round 1× p50 79 p95 79

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 4512 | 17 | 200 | 2 |
| span.cs-stack:js | 1508 | 33 | 150 | 3 |
| svg.leader:cult-breathe | 1804 | 17 | 283 | 2 |
| g.blink:cult-blink | 1804 | 17 | 283 | 2 |
| img.sprite:cult-shift | 1804 | 17 | 283 | 2 |
| div.path-inner:js | 1753 | 17 | 150 | 2 |
| span.tc-line:tcline | 1010 | 33 | 150 | 3 |
| img.sprite.scene:cult-breathe | 1469 | 17 | 283 | 2 |
| span.worker-fig:panelland-under | 730 | 33 | 150 | 4 |
| div.piece-flight.piece-res:js | 1387 | 17 | 150 | 2 |
| img.sprite.scene:cult-shift | 1315 | 17 | 283 | 2 |
| span.tick.num:bump | 1176 | 33 | 200 | 2 |

Longest frames: 235 ms (hn 199) · 176 ms (style/layout/paint) · 166 ms (hn 129) · 164 ms (style/layout/paint) · 157 ms (IdleRequestCallback 150)

## Round II

Clicks by kind: place 4× p50 87 p95 93 · choose 3× p50 176 p95 316 · recruit 5× p50 171 p95 178 · pay 5× p50 126 p95 150 · next-round 1× p50 81 p95 81

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7399 | 33 | 217 | 2 |
| span.cs-stack:js | 2220 | 33 | 217 | 3 |
| div.path-inner:js | 2932 | 33 | 183 | 2 |
| span.tc-line:tcline | 2290 | 33 | 183 | 2 |
| span.tick.num:bump | 1481 | 33 | 217 | 3 |
| div.piece-flight.piece-res:js | 2074 | 17 | 183 | 2 |
| span.worker-fig:panelland-under | 997 | 33 | 217 | 4 |
| section.lt-seat.lt-seat-0:opacity | 980 | 33 | 183 | 4 |
| svg.leader:cult-breathe | 1928 | 33 | 183 | 2 |
| g.blink:cult-blink | 1928 | 33 | 183 | 2 |
| img.sprite.scene:cult-shift | 1928 | 33 | 183 | 2 |
| img.sprite.scene:cult-breathe | 1928 | 33 | 183 | 2 |

Longest frames: 217 ms (hn 118) · 192 ms (hn 174) · 180 ms (hn 157) · 176 ms (hn 144) · 165 ms (hn 141)

## Round III

Clicks by kind: place 5× p50 81 p95 100 · recruit 6× p50 137 p95 184 · pay 6× p50 139 p95 149 · choose 3× p50 189 p95 311 · next-round 1× p50 57 p95 57

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 10709 | 33 | 317 | 2 |
| span.tc-line:tcline | 3533 | 33 | 167 | 3 |
| span.cs-stack:js | 3492 | 33 | 217 | 3 |
| span.tick.num:bump | 2790 | 33 | 283 | 3 |
| svg.leader:cult-breathe | 2633 | 33 | 283 | 3 |
| g.blink:cult-blink | 2633 | 33 | 283 | 3 |
| img.sprite.scene:cult-shift | 2633 | 33 | 283 | 3 |
| img.sprite.scene:cult-breathe | 2633 | 33 | 283 | 3 |
| img.sprite:cult-breathe | 2633 | 33 | 283 | 3 |
| div.piece-flight.piece-res:js | 3446 | 33 | 217 | 2 |
| img.sprite:cult-shift | 2251 | 33 | 283 | 3 |
| section.lt-seat.lt-seat-0:opacity | 1450 | 33 | 283 | 4 |

Longest frames: 307 ms (hn 40) · 273 ms (hn 20) · 247 ms (hn 213) · 212 ms (hn 169) · 210 ms (hn 182)
