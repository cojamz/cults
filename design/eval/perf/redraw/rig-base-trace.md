# Perf rig: base-trace

2026-11-01T08:17:24.653Z · http://localhost:5310 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (9)
- round I: clicks p95 193 ms (bar 100)
- round II: clicks p95 222 ms (bar 100)
- round II: idle table busy 12% (bar 10%)
- round III: clicks p95 351 ms (bar 100)
- round III: hovers p95 108 ms (bar 100)
- clicks p95 grows 193 → 351 ms over the game
- leak: 6363 elements vs 5280 after a reload
- leak: 894 listeners vs 730 after a reload
- leak: heap 19.8 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 114 / 193 | 59 / 71 | 17 | 2 | 200 | 17 | 1 | 4 | 2363 | 499 | 13.1 |
| II | 131 / 222 | 60 / 66 | 17 | 2 | 483 | 19 | 12 | 20 | 3528 | 583 | 16.4 |
| III | 153 / 351 | 54 / 108 | 33 | 2 | 717 | 32 | 1 | 2 | 4041 | 595 | 20.3 |

Click phases (36 clicks that redrew the table, ms, median / p90): waiting for the browser 22 / 37 · rules 16 / 24 · React render and layout effects 33 / 79 · effects 23 / 42 · to the frame that shows it 17 / 33 · that frame painted (the rig's next frame) 30 / 64

Leak control on the last turn: unbroken game 6363 elements, 894 listeners, 19.8 MB; after a reload 5280, 730, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 99 p95 99 · choose 8× p50 105 p95 190 · recruit 3× p50 193 p95 193 · pay 3× p50 145 p95 193 · next-round 1× p50 137 p95 137 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3322 | 17 | 200 | 2 |
| span.tc-line:tcline | 2010 | 17 | 167 | 2 |
| span.cs-stack:js | 1557 | 33 | 167 | 2 |
| svg.leader:cult-breathe | 1519 | 17 | 200 | 2 |
| g.blink:cult-blink | 1519 | 17 | 200 | 2 |
| img.sprite.scene:cult-shift | 1519 | 17 | 200 | 2 |
| img.sprite.scene:cult-breathe | 1481 | 17 | 200 | 2 |
| span.tick.num:bump | 1133 | 17 | 117 | 2 |
| span.worker-fig:panelland-under | 964 | 33 | 150 | 2 |
| div.path-inner:js | 1878 | 17 | 150 | 1 |
| div.piece-flight.piece-res:js | 1518 | 17 | 150 | 1 |
| div.stage:opacity | 728 | 17 | 200 | 2 |

Longest frames: 202 ms (style/layout/paint) · 168 ms (hn 148) · 159 ms (Nf 124) · 154 ms (hn 126) · 153 ms (Nf 114)

## Round II

Clicks by kind: place 4× p50 110 p95 110 · choose 7× p50 174 p95 222 · recruit 4× p50 183 p95 211 · pay 3× p50 142 p95 156 · pick 3× p50 79 p95 95 · next-round 1× p50 131 p95 131 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.tc-line:tcline | 3599 | 17 | 300 | 2 |
| span.cs-stack:js | 2900 | 17 | 300 | 2 |
| b.seat-delta.up:seatdelta | 5732 | 17 | 300 | 1 |
| span.tick.num:bump | 1551 | 17 | 117 | 2 |
| div.path-inner:js | 2730 | 17 | 167 | 1 |
| div.piece-flight.piece-res:js | 2538 | 17 | 167 | 1 |
| span.base:opacity | 1120 | 33 | 183 | 2 |
| button.card.lt-card:js | 1896 | 17 | 483 | 1 |
| span.lead:cult-scheme | 928 | 33 | 200 | 2 |
| i.cs-min:cs-bob | 928 | 33 | 200 | 2 |
| span.worker-fig:panelland-under | 912 | 33 | 167 | 2 |
| i.cs-min:cs-bob-eager | 895 | 33 | 200 | 2 |

Longest frames: 491 ms (style/layout/paint) · 282 ms (hn 266) · 193 ms (Nf 141) · 190 ms (hn 171) · 179 ms (hn 144)

## Round III

Clicks by kind: place 5× p50 145 p95 165 · recruit 5× p50 145 p95 145 · pay 5× p50 161 p95 199 · choose 3× p50 288 p95 351 · pick 1× p50 126 p95 126 · next-round 1× p50 69 p95 69 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 8149 | 33 | 717 | 2 |
| span.tc-line:tcline | 4883 | 33 | 300 | 2 |
| div.path-inner:js | 3813 | 33 | 150 | 2 |
| span.cs-stack:js | 3416 | 33 | 300 | 2 |
| div.piece-flight.piece-res:js | 2980 | 33 | 150 | 2 |
| span.tick.num:bump | 2716 | 33 | 150 | 2 |
| svg.leader:cult-breathe | 2421 | 33 | 717 | 2 |
| g.blink:cult-blink | 2421 | 33 | 717 | 2 |
| img.sprite.scene:cult-shift | 2421 | 33 | 717 | 2 |
| img.sprite.scene:cult-breathe | 2421 | 33 | 717 | 2 |
| span.lead:cult-scheme | 1047 | 33 | 717 | 4 |
| i.cs-min:cs-bob-eager | 1045 | 33 | 717 | 4 |

Longest frames: 724 ms (style/layout/paint) · 279 ms (Nf 211) · 199 ms (hn 179) · 198 ms (Lf 17, Nf 148) · 193 ms (hn 79)
