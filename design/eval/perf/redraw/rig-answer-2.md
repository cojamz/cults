# Perf rig: answer-2

2026-11-01T10:57:29.771Z · http://localhost:5318 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 163 ms (bar 100)
- round II: clicks p95 189 ms (bar 100)
- round II: idle table busy 14% (bar 10%)
- round III: clicks p95 148 ms (bar 100)
- leak: 6545 elements vs 5430 after a reload
- leak: 914 listeners vs 738 after a reload
- leak: heap 19.3 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 65 / 163 | 35 / 88 | 17 | 2 | 217 | 10 | 2 | 5 | 2363 | 499 | 13.1 |
| II | 93 / 189 | 70 / 82 | 33 | 2 | 433 | 10 | 14 | 25 | 3538 | 585 | 16.5 |
| III | 90 / 148 | 49 / 91 | 33 | 3 | 483 | 23 | 4 | 6 | 3921 | 582 | 20.8 |

Click phases (44 clicks that redrew the table, ms, median / p90): waiting for the browser 16 / 25 · rules 6 / 12 · React render and layout effects 20 / 54 · effects 11 / 24 · to the frame that shows it 11 / 17 · that frame painted (the rig's next frame) 18 / 43

Leak control on the last turn: unbroken game 6545 elements, 914 listeners, 19.3 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 60 p95 67 · choose 8× p50 60 p95 127 · recruit 3× p50 – p95 – · pay 3× p50 105 p95 163 · next-round 1× p50 70 p95 70 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3272 | 17 | 217 | 2 |
| div.path-inner:js | 1974 | 17 | 150 | 2 |
| span.cs-stack:js | 1866 | 17 | 133 | 2 |
| div.piece-flight.piece-res:js | 1529 | 17 | 150 | 2 |
| span.tc-line:tcline | 2173 | 17 | 217 | 1 |
| div.as-card:js | 1048 | 17 | 217 | 2 |
| span.tick.num:bump | 1045 | 33 | 100 | 2 |
| span.worker-fig:panelland-under | 1030 | 33 | 217 | 2 |
| span.worker:js | 824 | 33 | 133 | 2 |
| path.wash:fill | 524 | 33 | 217 | 3 |
| span.worker:land | 657 | 33 | 133 | 2 |
| button.fb.lt-rate:background-color | 525 | 17 | 217 | 2 |

Longest frames: 226 ms (style/layout/paint) · 184 ms (hn 167) · 154 ms (hn 134) · 140 ms (hn 120) · 133 ms (hn 20, Lf 79)

## Round II

Clicks by kind: place 4× p50 68 p95 91 · choose 7× p50 87 p95 147 · recruit 4× p50 133 p95 153 · pay 4× p50 114 p95 189 · next-round 1× p50 124 p95 124 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5831 | 33 | 150 | 2 |
| span.cs-stack:js | 2931 | 33 | 167 | 2 |
| span.tick.num:bump | 1842 | 33 | 117 | 2 |
| svg.leader:cult-breathe | 1224 | 33 | 300 | 3 |
| g.blink:cult-blink | 1224 | 33 | 300 | 3 |
| img.sprite.scene:cult-shift | 1224 | 33 | 300 | 3 |
| img.sprite.scene:cult-breathe | 1224 | 33 | 300 | 3 |
| span.tc-line:tcline | 3650 | 33 | 167 | 1 |
| div.path-inner:js | 3081 | 17 | 117 | 1 |
| div.piece-flight.piece-res:js | 2871 | 17 | 117 | 1 |
| button.card.lt-card:js | 1432 | 33 | 433 | 2 |
| div.stage:opacity | 524 | 33 | 167 | 4 |

Longest frames: 450 ms (style/layout/paint) · 218 ms (hn 181) · 158 ms (hn 136) · 156 ms (Lf 125) · 142 ms (hn 129)

## Round III

Clicks by kind: place 5× p50 96 p95 112 · choose 10× p50 81 p95 115 · recruit 5× p50 148 p95 199 · pay 5× p50 90 p95 112 · pick 3× p50 62 p95 79 · next-round 1× p50 68 p95 68 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7168 | 33 | 483 | 3 |
| span.tc-line:tcline | 4700 | 33 | 317 | 3 |
| span.cs-stack:js | 4171 | 33 | 317 | 3 |
| div.path-inner:js | 3633 | 33 | 133 | 3 |
| span.tick.num:bump | 2273 | 33 | 133 | 4 |
| div.piece-flight.piece-res:js | 3477 | 33 | 317 | 2 |
| button.card.lt-card:js | 1646 | 33 | 317 | 4 |
| svg.leader:cult-breathe | 1958 | 33 | 483 | 3 |
| g.blink:cult-blink | 1958 | 33 | 483 | 3 |
| img.sprite.scene:cult-shift | 1958 | 33 | 483 | 3 |
| img.sprite.scene:cult-breathe | 1958 | 33 | 483 | 3 |
| span.cs-member:js | 959 | 33 | 117 | 5 |

Longest frames: 496 ms (style/layout/paint) · 304 ms (hn 292) · 253 ms (hn 167) · 246 ms (style/layout/paint) · 181 ms (hn 163)
