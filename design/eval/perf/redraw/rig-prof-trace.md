# Perf rig: prof-trace

2026-11-01T08:25:24.555Z · http://localhost:5311 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 315 ms (bar 100)
- round I: hovers p95 106 ms (bar 100)
- round II: clicks p95 208 ms (bar 100)
- round III: clicks p95 269 ms (bar 100)
- leak: 6363 elements vs 5280 after a reload
- leak: 894 listeners vs 730 after a reload
- leak: heap 19.6 MB vs 10.1 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 119 / 315 | 34 / 106 | 17 | 2 | 233 | 17 | 1 | 7 | 2363 | 499 | 13.5 |
| II | 141 / 208 | 61 / 73 | 17 | 2 | 450 | 23 | 4 | 23 | 3528 | 583 | 16.7 |
| III | 152 / 269 | 59 / 72 | 17 | 1 | 750 | 28 | 1 | 2 | 4041 | 595 | 20.1 |

Click phases (39 clicks that redrew the table, ms, median / p90): waiting for the browser 23 / 43 · rules 15 / 34 · React render and layout effects 40 / 75 · effects 26 / 43 · to the frame that shows it 15 / 30 · that frame painted (the rig's next frame) 29 / 58

Leak control on the last turn: unbroken game 6363 elements, 894 listeners, 19.6 MB; after a reload 5280, 730, 10.1 MB.

## Round I

Clicks by kind: place 3× p50 75 p95 75 · choose 8× p50 93 p95 315 · recruit 3× p50 167 p95 167 · pay 3× p50 170 p95 183 · next-round 1× p50 160 p95 160 · 2 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3337 | 17 | 233 | 1 |
| span.cs-stack:js | 1644 | 17 | 117 | 2 |
| span.tick.num:bump | 1108 | 17 | 150 | 2 |
| span.tc-line:tcline | 1862 | 17 | 167 | 1 |
| div.path-inner:js | 1690 | 17 | 183 | 1 |
| svg.leader:cult-breathe | 1528 | 17 | 200 | 1 |
| g.blink:cult-blink | 1528 | 17 | 200 | 1 |
| img.sprite.scene:cult-shift | 1528 | 17 | 200 | 1 |
| span.worker-fig:panelland-under | 760 | 33 | 167 | 2 |
| img.sprite.scene:cult-breathe | 1494 | 17 | 200 | 1 |
| div.piece-flight.piece-res:js | 1487 | 17 | 183 | 1 |
| span.lead:cult-scheme | 689 | 17 | 200 | 2 |

Longest frames: 243 ms (style/layout/paint) · 190 ms (R2 171) · 173 ms (sd 121) · 159 ms (sd 124) · 156 ms (sd 111)

## Round II

Clicks by kind: place 4× p50 106 p95 145 · choose 7× p50 185 p95 269 · recruit 4× p50 146 p95 208 · pay 3× p50 147 p95 175 · pick 3× p50 116 p95 133 · next-round 1× p50 141 p95 141 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5863 | 17 | 250 | 1 |
| span.tc-line:tcline | 3665 | 17 | 233 | 1 |
| span.tick.num:bump | 1565 | 17 | 100 | 2 |
| div.path-inner:js | 2948 | 17 | 250 | 1 |
| span.cs-stack:js | 2827 | 17 | 233 | 1 |
| div.piece-flight.piece-res:js | 2792 | 17 | 250 | 1 |
| svg.leader:cult-breathe | 1268 | 17 | 250 | 2 |
| g.blink:cult-blink | 1268 | 17 | 250 | 2 |
| img.sprite.scene:cult-shift | 1268 | 17 | 250 | 2 |
| img.sprite.scene:cult-breathe | 1268 | 17 | 250 | 2 |
| span.worker-fig:panelland-under | 1109 | 17 | 167 | 2 |
| button.card.lt-card:js | 1762 | 17 | 450 | 1 |

Longest frames: 462 ms (style/layout/paint) · 245 ms (sd 158) · 208 ms (R2 192) · 190 ms (R2 169) · 159 ms (R2 11, sd 108)

## Round III

Clicks by kind: place 5× p50 85 p95 99 · recruit 5× p50 169 p95 186 · pay 5× p50 177 p95 193 · choose 3× p50 213 p95 269 · pick 1× p50 120 p95 120 · next-round 1× p50 77 p95 77 · 2 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7891 | 17 | 750 | 2 |
| span.cs-stack:js | 3604 | 33 | 217 | 2 |
| svg.leader:cult-breathe | 2284 | 17 | 750 | 2 |
| g.blink:cult-blink | 2284 | 17 | 750 | 2 |
| img.sprite.scene:cult-shift | 2284 | 17 | 750 | 2 |
| img.sprite.scene:cult-breathe | 2284 | 17 | 750 | 2 |
| span.tc-line:tcline | 4534 | 33 | 217 | 1 |
| div.path-inner:js | 4159 | 17 | 183 | 1 |
| span.lead:cult-scheme | 897 | 33 | 750 | 4 |
| div.seat-stolen:brief-out | 1721 | 33 | 100 | 2 |
| span.worker-fig:panelland-under | 1556 | 33 | 217 | 2 |
| i.cs-min:cs-bob-eager | 777 | 33 | 750 | 4 |

Longest frames: 759 ms (style/layout/paint) · 211 ms (sd 168) · 190 ms (R2 166) · 185 ms (R2 150) · 180 ms (R2 75)
