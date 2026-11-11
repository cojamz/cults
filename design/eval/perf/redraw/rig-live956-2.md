# Perf rig: live956-2

2026-11-01T10:12:45.391Z · http://localhost:5316 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 156 ms (bar 100)
- round II: clicks p95 221 ms (bar 100)
- round III: clicks p95 168 ms (bar 100)
- round III: hovers p95 102 ms (bar 100)
- leak: 6545 elements vs 5430 after a reload
- leak: 914 listeners vs 738 after a reload
- leak: heap 19.3 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 97 / 156 | 41 / 77 | 17 | 1 | 200 | 12 | 2 | 5 | 2363 | 499 | 13 |
| II | 106 / 221 | 50 / 74 | 17 | 2 | 733 | 10 | 5 | 24 | 3527 | 583 | 16.3 |
| III | 97 / 168 | 52 / 102 | 33 | 2 | 733 | 25 | 4 | 7 | 3921 | 582 | 21.3 |

Click phases (46 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 24 · rules 4 / 10 · React render and layout effects 30 / 67 · effects 15 / 28 · to the frame that shows it 10 / 18 · that frame painted (the rig's next frame) 17 / 41

Leak control on the last turn: unbroken game 6545 elements, 914 listeners, 19.3 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 97 p95 97 · choose 8× p50 77 p95 156 · recruit 3× p50 136 p95 136 · pay 3× p50 106 p95 151 · next-round 1× p50 73 p95 73 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.tc-line:tcline | 2064 | 17 | 133 | 2 |
| span.cs-stack:js | 1772 | 17 | 150 | 2 |
| b.seat-delta.up:seatdelta | 3078 | 17 | 200 | 1 |
| div.path-inner:js | 2048 | 17 | 150 | 1 |
| div.piece-flight.piece-res:js | 1710 | 17 | 150 | 1 |
| span.base:opacity | 807 | 17 | 133 | 2 |
| span.worker-fig:panelland-under | 790 | 17 | 133 | 2 |
| div.as-card:js | 768 | 17 | 117 | 2 |
| div.stage:opacity | 462 | 33 | 133 | 3 |
| button.fb.lt-rate:background-color | 345 | 33 | 133 | 4 |
| button.fb.lt-rate:opacity | 345 | 33 | 133 | 4 |
| button.btn.lt-done:background-color | 345 | 33 | 133 | 4 |

Longest frames: 208 ms (style/layout/paint) · 148 ms (Lf 108) · 141 ms (hn 120) · 118 ms (hn 11, Lf 90) · 113 ms (hn 101)

## Round II

Clicks by kind: place 4× p50 74 p95 80 · choose 7× p50 111 p95 221 · recruit 4× p50 120 p95 120 · pay 4× p50 145 p95 159 · next-round 1× p50 84 p95 84 · 2 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.cs-stack:js | 2906 | 33 | 200 | 2 |
| b.seat-delta.up:seatdelta | 5533 | 33 | 183 | 1 |
| span.tc-line:tcline | 3786 | 33 | 200 | 1 |
| span.tick.num:bump | 1716 | 33 | 117 | 2 |
| g.blink:cult-blink | 1507 | 17 | 183 | 2 |
| svg.leader:cult-breathe | 1481 | 17 | 183 | 2 |
| img.sprite.scene:cult-shift | 1481 | 17 | 183 | 2 |
| img.sprite.scene:cult-breathe | 1481 | 17 | 183 | 2 |
| button.card.lt-card:js | 1458 | 33 | 733 | 2 |
| div.path-inner:js | 2766 | 17 | 150 | 1 |
| div.piece-flight.piece-res:js | 2611 | 17 | 150 | 1 |
| span.base:opacity | 1152 | 17 | 200 | 2 |

Longest frames: 740 ms (style/layout/paint) · 191 ms (Lf 126) · 170 ms (hn 157) · 147 ms (hn 120) · 145 ms (hn 92)

## Round III

Clicks by kind: place 5× p50 105 p95 108 · choose 10× p50 92 p95 200 · recruit 5× p50 148 p95 168 · pay 5× p50 104 p95 136 · pick 3× p50 72 p95 90 · next-round 1× p50 54 p95 54 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7457 | 33 | 733 | 2 |
| span.cs-stack:js | 4581 | 33 | 233 | 3 |
| span.tc-line:tcline | 5109 | 33 | 217 | 2 |
| div.path-inner:js | 4019 | 33 | 233 | 2 |
| div.piece-flight.piece-res:js | 3550 | 33 | 233 | 2 |
| span.tick.num:bump | 2470 | 33 | 150 | 2 |
| span.worker-fig:panelland-under | 1569 | 33 | 217 | 3 |
| svg.leader:cult-breathe | 1818 | 33 | 733 | 2 |
| g.blink:cult-blink | 1818 | 33 | 733 | 2 |
| img.sprite.scene:cult-shift | 1818 | 33 | 733 | 2 |
| img.sprite.scene:cult-breathe | 1818 | 33 | 733 | 2 |
| span.base:opacity | 1722 | 33 | 217 | 2 |

Longest frames: 740 ms (style/layout/paint) · 285 ms (style/layout/paint) · 230 ms (hn 89) · 212 ms (hn 203) · 167 ms (Lf 99)
