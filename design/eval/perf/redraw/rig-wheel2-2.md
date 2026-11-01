# Perf rig: wheel2-2

2026-11-01T10:37:59.769Z · http://localhost:5317 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (4)
- round I: clicks p95 205 ms (bar 100)
- round II: clicks p95 171 ms (bar 100)
- round III: clicks p95 148 ms (bar 100)
- leak: heap 19.3 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 102 / 205 | 38 / 75 | 33 | 2 | 300 | 15 | 2 | 7 | 2363 | 499 | 13 |
| II | 97 / 171 | 58 / 74 | 33 | 2 | 733 | 14 | 6 | 22 | 3527 | 583 | 16.4 |
| III | 84 / 148 | 60 / 78 | 33 | 2 | 933 | 24 | 4 | 6 | 3921 | 582 | 21 |

Click phases (41 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 27 · rules 5 / 11 · React render and layout effects 29 / 53 · effects 17 / 25 · to the frame that shows it 12 / 24 · that frame painted (the rig's next frame) 18 / 38

Leak control on the last turn: unbroken game 5958 elements, 796 listeners, 19.3 MB; after a reload 5430, 738, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 52 p95 52 · choose 8× p50 98 p95 171 · recruit 3× p50 205 p95 205 · pay 3× p50 135 p95 141 · next-round 1× p50 84 p95 84 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3281 | 33 | 300 | 2 |
| span.cs-stack:js | 1741 | 33 | 200 | 3 |
| span.tc-line:tcline | 1798 | 33 | 200 | 2 |
| div.path-inner:js | 1739 | 33 | 133 | 2 |
| div.piece-flight.piece-res:js | 1413 | 17 | 133 | 2 |
| span.tick.num:bump | 1062 | 33 | 150 | 2 |
| span.worker:js | 666 | 33 | 100 | 3 |
| span.worker-fig:panelland-under | 617 | 33 | 200 | 3 |
| svg.leader:cult-breathe | 1545 | 17 | 217 | 1 |
| g.blink:cult-blink | 1545 | 17 | 217 | 1 |
| img.sprite.scene:cult-shift | 1545 | 17 | 217 | 1 |
| span.lead:cult-scheme | 722 | 17 | 167 | 2 |

Longest frames: 312 ms (style/layout/paint) · 188 ms (hn 164) · 175 ms (style/layout/paint) · 163 ms (hn 149) · 144 ms (hn 132)

## Round II

Clicks by kind: place 4× p50 59 p95 86 · choose 7× p50 97 p95 171 · recruit 4× p50 132 p95 132 · pay 4× p50 110 p95 167 · next-round 1× p50 82 p95 82 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5422 | 33 | 183 | 2 |
| span.tc-line:tcline | 3749 | 33 | 233 | 2 |
| span.cs-stack:js | 2737 | 33 | 233 | 2 |
| button.card.lt-card:js | 1869 | 33 | 733 | 2 |
| span.tick.num:bump | 1607 | 33 | 117 | 2 |
| svg.leader:cult-breathe | 1539 | 33 | 233 | 2 |
| g.blink:cult-blink | 1539 | 33 | 233 | 2 |
| img.sprite.scene:cult-shift | 1539 | 33 | 233 | 2 |
| img.sprite.scene:cult-breathe | 1539 | 33 | 233 | 2 |
| div.path-inner:js | 3063 | 33 | 150 | 1 |
| div.piece-flight.piece-res:js | 2829 | 17 | 150 | 1 |
| span.base:opacity | 1122 | 33 | 233 | 2 |

Longest frames: 749 ms (style/layout/paint) · 167 ms (hn 10, B 8, Lf 106) · 160 ms (Lf 111) · 148 ms (Lf 94) · 146 ms (hn 133)

## Round III

Clicks by kind: place 5× p50 58 p95 84 · choose 10× p50 89 p95 178 · recruit 5× p50 – p95 – · pay 5× p50 98 p95 148 · pick 3× p50 50 p95 55 · next-round 1× p50 65 p95 65 · 7 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7968 | 33 | 933 | 2 |
| span.tc-line:tcline | 5391 | 33 | 233 | 2 |
| span.cs-stack:js | 5200 | 33 | 233 | 2 |
| div.path-inner:js | 4248 | 33 | 217 | 2 |
| div.piece-flight.piece-res:js | 3721 | 33 | 233 | 2 |
| span.tick.num:bump | 2295 | 33 | 217 | 2 |
| svg.leader:cult-breathe | 2124 | 33 | 933 | 2 |
| g.blink:cult-blink | 2124 | 33 | 933 | 2 |
| img.sprite.scene:cult-shift | 2124 | 33 | 933 | 2 |
| img.sprite.scene:cult-breathe | 2124 | 33 | 933 | 2 |
| span.worker-fig:panelland-under | 1878 | 33 | 233 | 2 |
| path.wash:fill | 1234 | 33 | 200 | 3 |

Longest frames: 947 ms (style/layout/paint) · 226 ms (hn 218) · 208 ms (hn 195) · 199 ms (style/layout/paint) · 193 ms (hn 160)
