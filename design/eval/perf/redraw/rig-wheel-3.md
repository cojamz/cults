# Perf rig: wheel-3

2026-11-01T10:20:45.600Z · http://localhost:5315 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (4)
- round I: clicks p95 151 ms (bar 100)
- round II: clicks p95 181 ms (bar 100)
- round III: clicks p95 136 ms (bar 100)
- leak: heap 19.3 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 88 / 151 | 46 / 72 | 17 | 2 | 250 | 12 | 2 | 6 | 2363 | 499 | 13 |
| II | 93 / 181 | 51 / 73 | 17 | 2 | 450 | 14 | 4 | 21 | 3527 | 583 | 16.3 |
| III | 89 / 136 | 59 / 88 | 33 | 2 | 617 | 23 | 3 | 5 | 3919 | 583 | 21.1 |

Click phases (45 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 25 · rules 4 / 14 · React render and layout effects 28 / 51 · effects 13 / 29 · to the frame that shows it 11 / 17 · that frame painted (the rig's next frame) 20 / 35

Leak control on the last turn: unbroken game 5955 elements, 796 listeners, 19.3 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 59 p95 59 · choose 8× p50 73 p95 137 · recruit 3× p50 92 p95 92 · pay 3× p50 105 p95 151 · next-round 1× p50 71 p95 71 · 2 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.tc-line:tcline | 1991 | 17 | 150 | 2 |
| span.cs-stack:js | 1769 | 33 | 183 | 2 |
| b.seat-delta.up:seatdelta | 3217 | 17 | 250 | 1 |
| span.worker-fig:panelland-under | 940 | 33 | 150 | 3 |
| svg.leader:cult-breathe | 1120 | 17 | 200 | 2 |
| g.blink:cult-blink | 1120 | 17 | 200 | 2 |
| img.sprite.scene:cult-shift | 1120 | 17 | 200 | 2 |
| span.tick.num:bump | 1070 | 33 | 150 | 2 |
| img.sprite.scene:cult-breathe | 1063 | 17 | 200 | 2 |
| div.path-inner:js | 1937 | 17 | 183 | 1 |
| div.piece-flight.piece-res:js | 1617 | 17 | 183 | 1 |
| span.base:opacity | 800 | 17 | 150 | 2 |

Longest frames: 267 ms (style/layout/paint) · 180 ms (hn 161) · 160 ms (hn 138) · 141 ms (hn 124) · 139 ms (Lf 103)

## Round II

Clicks by kind: place 4× p50 59 p95 82 · choose 7× p50 102 p95 165 · recruit 4× p50 93 p95 106 · pay 4× p50 109 p95 181 · next-round 1× p50 – p95 – · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5723 | 17 | 150 | 2 |
| span.cs-stack:js | 2916 | 17 | 150 | 2 |
| span.tc-line:tcline | 3751 | 17 | 133 | 1 |
| span.tick.num:bump | 1689 | 33 | 100 | 2 |
| svg.leader:cult-breathe | 1679 | 17 | 233 | 2 |
| g.blink:cult-blink | 1679 | 17 | 233 | 2 |
| img.sprite.scene:cult-shift | 1679 | 17 | 233 | 2 |
| img.sprite.scene:cult-breathe | 1679 | 17 | 233 | 2 |
| button.card.lt-card:js | 1524 | 17 | 450 | 2 |
| div.path-inner:js | 2817 | 17 | 117 | 1 |
| div.piece-flight.piece-res:js | 2497 | 17 | 117 | 1 |
| div.seat-stolen:brief-out | 1126 | 17 | 133 | 2 |

Longest frames: 470 ms (style/layout/paint) · 190 ms (style/layout/paint) · 181 ms (hn 150) · 149 ms (Lf 114) · 144 ms (hn 126)

## Round III

Clicks by kind: place 5× p50 72 p95 107 · choose 10× p50 78 p95 136 · recruit 5× p50 134 p95 134 · pay 5× p50 131 p95 198 · pick 3× p50 55 p95 89 · next-round 1× p50 74 p95 74 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7680 | 33 | 617 | 2 |
| span.tc-line:tcline | 4900 | 33 | 250 | 2 |
| span.cs-stack:js | 4545 | 33 | 250 | 2 |
| div.path-inner:js | 3759 | 33 | 183 | 2 |
| span.tick.num:bump | 2295 | 33 | 183 | 3 |
| div.piece-flight.piece-res:js | 3414 | 33 | 250 | 2 |
| button.card.lt-card:js | 1540 | 33 | 250 | 3 |
| svg.leader:cult-breathe | 2143 | 33 | 617 | 2 |
| g.blink:cult-blink | 2143 | 33 | 617 | 2 |
| img.sprite.scene:cult-shift | 2143 | 33 | 617 | 2 |
| img.sprite.scene:cult-breathe | 2143 | 33 | 617 | 2 |
| span.cs-member:js | 1197 | 33 | 183 | 3 |

Longest frames: 621 ms (style/layout/paint) · 245 ms (hn 102) · 226 ms (hn 49) · 225 ms (hn 217) · 163 ms (hn 153)
