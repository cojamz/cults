# Perf rig: cancel-1

2026-11-01T09:02:24.928Z · http://localhost:5310 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 175 ms (bar 100)
- round II: clicks p95 170 ms (bar 100)
- round II: hovers p95 121 ms (bar 100)
- round III: clicks p95 219 ms (bar 100)
- leak: 6363 elements vs 5280 after a reload
- leak: 895 listeners vs 731 after a reload
- leak: heap 19.7 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 91 / 175 | 34 / 72 | 17 | 2 | 333 | 12 | 3 | 16 | 2363 | 500 | 13.1 |
| II | 111 / 170 | 48 / 121 | 33 | 2 | 450 | 20 | 6 | 14 | 3539 | 586 | 16.3 |
| III | 142 / 219 | 52 / 70 | 33 | 2 | 817 | 27 | 2 | 10 | 4041 | 596 | 20.1 |

Click phases (39 clicks that redrew the table, ms, median / p90): waiting for the browser 17 / 28 · rules 12 / 26 · React render and layout effects 36 / 74 · effects 16 / 33 · to the frame that shows it 12 / 25 · that frame painted (the rig's next frame) 23 / 44

Leak control on the last turn: unbroken game 6363 elements, 895 listeners, 19.7 MB; after a reload 5280, 731, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 65 p95 72 · choose 8× p50 76 p95 175 · recruit 3× p50 123 p95 125 · pay 3× p50 102 p95 173 · next-round 1× p50 119 p95 119

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3043 | 17 | 333 | 2 |
| span.cs-stack:js | 1627 | 33 | 183 | 2 |
| span.tick.num:bump | 1003 | 33 | 333 | 2 |
| div.path-inner:js | 1959 | 17 | 133 | 1 |
| span.tc-line:tcline | 1856 | 17 | 133 | 1 |
| div.piece-flight.piece-res:js | 1642 | 17 | 133 | 1 |
| span.worker-fig:panelland-under | 761 | 33 | 133 | 2 |
| span.lead:js | 618 | 33 | 333 | 2 |
| path.wash:fill | 227 | 33 | 133 | 4 |
| div.as-card:js | 850 | 17 | 133 | 1 |
| span.tip.fig:js | 423 | 33 | 333 | 2 |
| span.worker:js | 783 | 17 | 133 | 1 |

Longest frames: 294 ms (style/layout/paint) · 219 ms (style/layout/paint) · 178 ms (hn 154) · 136 ms (Nf 109) · 135 ms (hn 118)

## Round II

Clicks by kind: place 4× p50 74 p95 96 · choose 7× p50 111 p95 190 · recruit 4× p50 159 p95 170 · pay 3× p50 138 p95 164 · pick 3× p50 58 p95 90 · next-round 1× p50 115 p95 115 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5518 | 33 | 167 | 2 |
| span.tc-line:tcline | 3296 | 33 | 167 | 3 |
| span.cs-stack:js | 2520 | 33 | 167 | 3 |
| div.path-inner:js | 2565 | 33 | 150 | 2 |
| button.card.lt-card:js | 1587 | 33 | 450 | 3 |
| div.piece-flight.piece-res:js | 2279 | 33 | 150 | 2 |
| span.cs-member:js | 720 | 33 | 117 | 5 |
| span.base:opacity | 888 | 33 | 150 | 4 |
| span.tick.num:bump | 1449 | 33 | 150 | 2 |
| span.worker:js | 912 | 33 | 117 | 3 |
| span.worker-fig:panelland-under | 904 | 33 | 150 | 3 |
| div.as-card:js | 1075 | 33 | 150 | 2 |

Longest frames: 464 ms (style/layout/paint) · 171 ms (Nf 120) · 169 ms (hn 160) · 150 ms (hn 131) · 143 ms (Nf 98)

## Round III

Clicks by kind: place 5× p50 75 p95 86 · recruit 5× p50 168 p95 168 · pay 5× p50 151 p95 176 · choose 3× p50 185 p95 219 · pick 1× p50 110 p95 110 · next-round 1× p50 62 p95 62 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 8150 | 33 | 817 | 2 |
| span.tc-line:tcline | 4715 | 33 | 183 | 2 |
| div.path-inner:js | 4053 | 33 | 233 | 2 |
| span.cs-stack:js | 3493 | 33 | 233 | 2 |
| span.tick.num:bump | 2494 | 33 | 167 | 2 |
| span.base:opacity | 1488 | 33 | 183 | 3 |
| span.worker-fig:panelland-under | 1391 | 33 | 183 | 3 |
| span.worker:js | 1310 | 33 | 100 | 3 |
| div.as-card:js | 1720 | 33 | 150 | 2 |
| div.seat-stolen:brief-out | 1691 | 33 | 83 | 2 |
| div.piece-flight.piece-res:js | 3264 | 33 | 233 | 1 |
| button.card.lt-card:js | 947 | 33 | 233 | 3 |

Longest frames: 825 ms (style/layout/paint) · 237 ms (hn 109) · 194 ms (hn 175) · 173 ms (Lf 13, Nf 116) · 172 ms (hn 149)
