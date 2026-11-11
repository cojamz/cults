# Perf rig: ans-3

2026-11-03T16:22:38.487Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 246 ms (bar 100)
- round I: hovers p95 109 ms (bar 100)
- round II: clicks p95 211 ms (bar 100)
- round II: hovers p95 126 ms (bar 100)
- round III: clicks p95 198 ms (bar 100)
- leak: 6286 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 94 / 246 | 65 / 109 | 33 | 2 | 267 | 12 | 3 | 10 | 2490 | 492 | 13.4 |
| II | 100 / 211 | 77 / 126 | 33 | 3 | 667 | 11 | 1 | 2 | 3575 | 551 | 17.5 |
| III | 128 / 198 | 70 / 79 | 33 | 3 | 850 | 26 | 6 | 27 | 3942 | 577 | 20.7 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 18 / 30 · rules 5 / 10 · React render and layout effects 34 / 80 · effects 12 / 32 · to the frame that shows it 14 / 23 · that frame painted (the rig's next frame) 30 / 54

Leak control on the last turn: unbroken game 6286 elements, 856 listeners, 20 MB; after a reload 5093, 697, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 72 p95 94 · choose 5× p50 91 p95 246 · recruit 3× p50 182 p95 193 · pay 3× p50 129 p95 134 · next-round 1× p50 102 p95 102

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3203 | 33 | 250 | 2 |
| span.cs-stack:js | 1607 | 33 | 150 | 3 |
| span.tc-line:tcline | 1896 | 33 | 117 | 2 |
| div.path-inner:js | 1779 | 33 | 117 | 2 |
| div.piece-flight.piece-res:js | 1539 | 33 | 117 | 2 |
| div.as-card:js | 787 | 33 | 167 | 3 |
| g.blink:cult-blink | 1132 | 33 | 267 | 2 |
| svg.leader:cult-breathe | 1113 | 33 | 267 | 2 |
| img.sprite.scene:cult-shift | 1113 | 33 | 267 | 2 |
| span.tick.num:bump | 1094 | 33 | 117 | 2 |
| img.sprite.scene:cult-breathe | 1059 | 33 | 267 | 2 |
| span.worker-fig:panelland-under | 765 | 33 | 167 | 2 |

Longest frames: 267 ms (style/layout/paint) · 146 ms (Lf 111) · 140 ms (style/layout/paint) · 140 ms (hn 122) · 132 ms (hn 115)

## Round II

Clicks by kind: place 4× p50 90 p95 92 · recruit 4× p50 170 p95 211 · pay 4× p50 100 p95 108 · choose 2× p50 117 p95 117 · next-round 1× p50 127 p95 127

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5511 | 33 | 667 | 2 |
| span.tc-line:tcline | 3207 | 33 | 200 | 3 |
| span.cs-stack:js | 2658 | 33 | 200 | 3 |
| div.path-inner:js | 2702 | 33 | 117 | 2 |
| div.piece-flight.piece-res:js | 2324 | 33 | 100 | 2 |
| div.as-card:js | 1125 | 33 | 200 | 3 |
| span.tick.num:bump | 1481 | 33 | 100 | 2 |
| span.worker-fig:panelland-under | 977 | 33 | 200 | 3 |
| button.card.lt-card:js | 1436 | 33 | 200 | 2 |
| div.stage:opacity | 299 | 50 | 200 | 9 |
| div.seat-stolen:brief-out | 611 | 33 | 100 | 4 |
| path.wash:fill | 243 | 50 | 200 | 10 |

Longest frames: 676 ms (style/layout/paint) · 234 ms (hn 149) · 186 ms (Lf 132) · 175 ms (hn 120) · 149 ms (hn 126)

## Round III

Clicks by kind: place 5× p50 87 p95 131 · recruit 7× p50 151 p95 198 · pay 8× p50 139 p95 234 · pick 1× p50 194 p95 194 · choose 5× p50 84 p95 156 · next-round 1× p50 79 p95 79

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7630 | 33 | 850 | 3 |
| span.tc-line:tcline | 3994 | 33 | 217 | 3 |
| span.cs-stack:js | 3521 | 33 | 217 | 3 |
| div.path-inner:js | 4046 | 33 | 200 | 2 |
| div.piece-flight.piece-res:js | 3287 | 33 | 200 | 2 |
| svg.leader:cult-breathe | 2015 | 33 | 850 | 3 |
| g.blink:cult-blink | 2015 | 33 | 850 | 3 |
| img.sprite.scene:cult-shift | 2015 | 33 | 850 | 3 |
| img.sprite.scene:cult-breathe | 2015 | 33 | 850 | 3 |
| span.tick.num:bump | 2259 | 33 | 167 | 2 |
| span.worker-fig:panelland-under | 1424 | 33 | 167 | 3 |
| i.cs-min:cs-bob | 711 | 50 | 850 | 6 |

Longest frames: 863 ms (style/layout/paint) · 391 ms (hn 244) · 232 ms (style/layout/paint) · 223 ms (hn 5, hn 207) · 198 ms (hn 37)
