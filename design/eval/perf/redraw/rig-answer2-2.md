# Perf rig: answer2-2

2026-11-01T11:48:53.714Z · http://localhost:5320 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (4)
- round I: clicks p95 221 ms (bar 100)
- round II: clicks p95 140 ms (bar 100)
- round III: clicks p95 163 ms (bar 100)
- leak: heap 18.9 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 75 / 221 | 61 / 87 | 17 | 1 | 200 | 4 | 2 | 5 | 2363 | 499 | 13.1 |
| II | 101 / 140 | 27 / 64 | 17 | 1 | 567 | 7 | 4 | 20 | 3527 | 583 | 16.5 |
| III | 94 / 163 | 56 / 75 | 33 | 4 | 617 | 30 | 4 | 3 | 3921 | 582 | 21 |

Click phases (40 clicks that redrew the table, ms, median / p90): waiting for the browser 16 / 27 · rules 4 / 18 · React render and layout effects 25 / 42 · effects 13 / 28 · to the frame that shows it 8 / 16 · that frame painted (the rig's next frame) 18 / 37

Leak control on the last turn: unbroken game 5955 elements, 796 listeners, 18.9 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 60 p95 60 · choose 8× p50 74 p95 221 · recruit 3× p50 87 p95 87 · pay 3× p50 98 p95 123 · next-round 1× p50 84 p95 84 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3246 | 17 | 200 | 1 |
| svg.leader:cult-breathe | 1464 | 17 | 150 | 2 |
| g.blink:cult-blink | 1464 | 17 | 150 | 2 |
| img.sprite.scene:cult-shift | 1464 | 17 | 150 | 2 |
| img.sprite.scene:cult-breathe | 1436 | 17 | 150 | 2 |
| span.tick.num:bump | 1084 | 33 | 100 | 2 |
| span.tc-line:tcline | 2115 | 17 | 167 | 1 |
| div.path-inner:js | 1926 | 17 | 117 | 1 |
| span.cs-stack:js | 1836 | 17 | 167 | 1 |
| div.piece-flight.piece-res:js | 1513 | 17 | 100 | 1 |
| span.worker-fig:panelland-under | 755 | 33 | 117 | 2 |
| path.wash:fill | 699 | 33 | 167 | 2 |

Longest frames: 211 ms (style/layout/paint) · 131 ms (Lf 103) · 123 ms (hn 113) · 108 ms (Lf 71) · 97 ms (hn 80)

## Round II

Clicks by kind: place 4× p50 77 p95 109 · choose 7× p50 87 p95 124 · recruit 4× p50 105 p95 105 · pay 4× p50 104 p95 140 · next-round 1× p50 101 p95 101 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.cs-stack:js | 3101 | 33 | 117 | 2 |
| b.seat-delta.up:seatdelta | 5989 | 17 | 150 | 1 |
| span.tc-line:tcline | 3969 | 17 | 117 | 1 |
| span.tick.num:bump | 1881 | 33 | 117 | 2 |
| div.path-inner:js | 2928 | 17 | 117 | 1 |
| button.card.lt-card:js | 1394 | 17 | 567 | 2 |
| div.piece-flight.piece-res:js | 2662 | 17 | 117 | 1 |
| span.worker-fig:panelland-under | 1165 | 33 | 150 | 2 |
| path.wash:fill | 761 | 33 | 150 | 3 |
| span.cs-member:js | 579 | 33 | 100 | 3 |
| svg.leader:cult-breathe | 1506 | 17 | 167 | 1 |
| g.blink:cult-blink | 1506 | 17 | 167 | 1 |

Longest frames: 591 ms (style/layout/paint) · 174 ms (hn 153) · 136 ms (hn 108) · 136 ms (hn 122) · 107 ms (Lf 58)

## Round III

Clicks by kind: place 5× p50 112 p95 112 · choose 10× p50 88 p95 142 · recruit 5× p50 – p95 – · pay 5× p50 157 p95 167 · pick 3× p50 93 p95 111 · next-round 1× p50 75 p95 75 · 8 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7338 | 33 | 617 | 4 |
| span.tc-line:tcline | 4999 | 33 | 367 | 4 |
| span.cs-stack:js | 4707 | 33 | 367 | 4 |
| div.path-inner:js | 3508 | 33 | 233 | 3 |
| div.piece-flight.piece-res:js | 3036 | 33 | 367 | 3 |
| span.tick.num:bump | 2147 | 33 | 150 | 4 |
| svg.leader:cult-breathe | 2539 | 33 | 617 | 3 |
| g.blink:cult-blink | 2539 | 33 | 617 | 3 |
| img.sprite.scene:cult-shift | 2539 | 33 | 617 | 3 |
| img.sprite.scene:cult-breathe | 2539 | 33 | 617 | 3 |
| button.card.lt-card:js | 1416 | 50 | 367 | 5 |
| span.base:opacity | 1761 | 33 | 217 | 4 |

Longest frames: 633 ms (style/layout/paint) · 357 ms (hn 343) · 271 ms (style/layout/paint) · 232 ms (hn 86) · 178 ms (Lf 128)
