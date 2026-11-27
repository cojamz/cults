# Perf rig: nowait-2

2026-11-01T10:57:45.961Z · http://localhost:5318 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 200 ms (bar 100)
- round II: clicks p95 190 ms (bar 100)
- round II: hovers p95 130 ms (bar 100)
- round III: clicks p95 191 ms (bar 100)
- round III: hovers p95 125 ms (bar 100)
- leak: 6542 elements vs 5430 after a reload
- leak: 914 listeners vs 738 after a reload
- leak: heap 19.3 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 72 / 200 | 55 / 81 | 33 | 2 | 217 | 12 | 2 | 6 | 2363 | 499 | 13 |
| II | 91 / 190 | 57 / 130 | 33 | 2 | 433 | 16 | 5 | 26 | 3527 | 583 | 16.5 |
| III | 99 / 191 | 37 / 125 | 33 | 3 | 817 | 35 | 4 | 5 | 3921 | 582 | 20.9 |

Click phases (43 clicks that redrew the table, ms, median / p90): waiting for the browser 15 / 24 · rules 4 / 13 · React render and layout effects 27 / 53 · effects 16 / 27 · to the frame that shows it 12 / 23 · that frame painted (the rig's next frame) 18 / 44

Leak control on the last turn: unbroken game 6542 elements, 914 listeners, 19.3 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 63 p95 71 · choose 8× p50 72 p95 200 · recruit 3× p50 131 p95 131 · pay 3× p50 105 p95 187 · next-round 1× p50 135 p95 135 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3127 | 33 | 217 | 2 |
| span.tc-line:tcline | 2002 | 33 | 217 | 2 |
| div.path-inner:js | 1953 | 33 | 133 | 2 |
| span.cs-stack:js | 1893 | 33 | 217 | 2 |
| div.piece-flight.piece-res:js | 1577 | 17 | 133 | 2 |
| span.tick.num:bump | 930 | 33 | 133 | 3 |
| span.worker-fig:panelland-under | 759 | 33 | 217 | 3 |
| svg.leader:cult-breathe | 973 | 17 | 117 | 2 |
| g.blink:cult-blink | 973 | 17 | 117 | 2 |
| img.sprite.scene:cult-shift | 973 | 17 | 117 | 2 |
| path.wash:fill | 462 | 33 | 217 | 4 |
| img.sprite.scene:cult-breathe | 916 | 17 | 117 | 2 |

Longest frames: 219 ms (style/layout/paint) · 195 ms (hn 158) · 180 ms (Lf 133) · 132 ms (style/layout/paint) · 126 ms (hn 100)

## Round II

Clicks by kind: place 4× p50 73 p95 73 · choose 7× p50 91 p95 169 · recruit 4× p50 132 p95 132 · pay 4× p50 105 p95 190 · next-round 1× p50 89 p95 89 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.tc-line:tcline | 3562 | 33 | 133 | 2 |
| b.seat-delta.up:seatdelta | 6042 | 33 | 183 | 1 |
| span.cs-stack:js | 2825 | 33 | 133 | 2 |
| button.card.lt-card:js | 1490 | 33 | 433 | 3 |
| span.tick.num:bump | 1601 | 33 | 117 | 2 |
| div.path-inner:js | 2897 | 17 | 150 | 1 |
| div.piece-flight.piece-res:js | 2738 | 17 | 150 | 1 |
| span.cs-member:js | 553 | 33 | 100 | 4 |
| span.base:opacity | 1083 | 33 | 133 | 2 |
| span.worker-fig:panelland-under | 1035 | 33 | 183 | 2 |
| div.as-card:js | 1026 | 33 | 117 | 2 |
| svg.leader:cult-breathe | 1988 | 33 | 183 | 1 |

Longest frames: 435 ms (style/layout/paint) · 160 ms (hn 147) · 148 ms (Lf 114) · 138 ms (hn 114) · 128 ms (Lf 85)

## Round III

Clicks by kind: place 5× p50 115 p95 115 · choose 10× p50 98 p95 198 · recruit 5× p50 131 p95 131 · pay 5× p50 159 p95 191 · pick 3× p50 56 p95 66 · next-round 1× p50 124 p95 124 · 6 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7357 | 33 | 817 | 3 |
| span.tc-line:tcline | 4798 | 33 | 233 | 3 |
| span.cs-stack:js | 4350 | 33 | 250 | 3 |
| div.path-inner:js | 3418 | 33 | 200 | 3 |
| svg.leader:cult-breathe | 2548 | 33 | 817 | 3 |
| g.blink:cult-blink | 2548 | 33 | 817 | 3 |
| img.sprite.scene:cult-shift | 2548 | 33 | 817 | 3 |
| img.sprite.scene:cult-breathe | 2548 | 33 | 817 | 3 |
| span.tick.num:bump | 2181 | 33 | 200 | 3 |
| div.piece-flight.piece-res:js | 3031 | 33 | 233 | 2 |
| button.card.lt-card:js | 1767 | 33 | 350 | 3 |
| span.worker-fig:panelland-under | 1315 | 33 | 233 | 4 |

Longest frames: 829 ms (style/layout/paint) · 347 ms (style/layout/paint) · 252 ms (hn 101) · 235 ms (hn 227) · 210 ms (hn 181)
