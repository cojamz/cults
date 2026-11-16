# Perf rig: ans-3

2026-11-03T18:03:40.606Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 204 ms (bar 100)
- round I: hovers p95 106 ms (bar 100)
- round II: clicks p95 205 ms (bar 100)
- round III: clicks p95 227 ms (bar 100)
- idle busy grows 3% → 7% over the game
- leak: 6287 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.1 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 93 / 204 | 52 / 106 | 33 | 2 | 267 | 16 | 3 | 11 | 2490 | 492 | 13.5 |
| II | 136 / 205 | 71 / 91 | 33 | 3 | 717 | 16 | 1 | 4 | 3575 | 551 | 17.5 |
| III | 111 / 227 | 77 / 100 | 33 | 3 | 933 | 38 | 7 | 45 | 3942 | 577 | 20.7 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 18 / 26 · rules 5 / 13 · React render and layout effects 39 / 83 · effects 10 / 32 · to the frame that shows it 15 / 21 · that frame painted (the rig's next frame) 26 / 49

Leak control on the last turn: unbroken game 6287 elements, 856 listeners, 20.1 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 69 p95 86 · choose 5× p50 79 p95 204 · recruit 3× p50 95 p95 137 · pay 3× p50 109 p95 143 · next-round 1× p50 137 p95 137

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3221 | 33 | 267 | 2 |
| span.cs-stack:js | 1709 | 33 | 167 | 3 |
| span.tc-line:tcline | 1993 | 33 | 133 | 2 |
| span.worker-fig:panelland-under | 809 | 33 | 167 | 3 |
| span.tick.num:bump | 1105 | 33 | 133 | 2 |
| path.wash:fill | 263 | 67 | 133 | 8 |
| span.base:opacity | 680 | 33 | 167 | 3 |
| div.path-inner:js | 1841 | 17 | 167 | 1 |
| div.as-card:js | 875 | 33 | 117 | 2 |
| span.worker:js | 803 | 33 | 133 | 2 |
| div.piece-flight.piece-res:js | 1588 | 17 | 167 | 1 |
| span.worker-fig:panelland | 771 | 33 | 100 | 2 |

Longest frames: 276 ms (style/layout/paint) · 185 ms (hn 169) · 163 ms (xa 9) · 154 ms (style/layout/paint) · 147 ms (hn 123)

## Round II

Clicks by kind: place 4× p50 86 p95 205 · recruit 4× p50 149 p95 165 · pay 4× p50 147 p95 150 · choose 2× p50 162 p95 162 · next-round 1× p50 82 p95 82

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5540 | 33 | 717 | 3 |
| span.cs-stack:js | 2561 | 33 | 183 | 4 |
| span.tc-line:tcline | 3071 | 33 | 183 | 3 |
| span.worker-fig:panelland-under | 977 | 50 | 183 | 6 |
| div.path-inner:js | 2888 | 33 | 233 | 2 |
| span.tick.num:bump | 1482 | 33 | 117 | 3 |
| div.as-card:js | 1176 | 33 | 183 | 3 |
| span.base:opacity | 782 | 33 | 167 | 4 |
| path.wash:fill | 331 | 67 | 200 | 9 |
| button.card.lt-card:js | 1447 | 33 | 200 | 2 |
| div.piece-flight.piece-res:js | 2418 | 33 | 233 | 1 |
| svg.leader:cult-breathe | 1156 | 33 | 183 | 2 |

Longest frames: 717 ms (style/layout/paint) · 218 ms (hn 180) · 196 ms (hn 51) · 168 ms (style/layout/paint) · 156 ms (Lf 83)

## Round III

Clicks by kind: place 5× p50 78 p95 122 · recruit 7× p50 147 p95 227 · pay 8× p50 121 p95 342 · pick 1× p50 115 p95 115 · choose 5× p50 83 p95 121 · next-round 1× p50 87 p95 87

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7502 | 33 | 933 | 3 |
| span.tc-line:tcline | 3730 | 33 | 300 | 3 |
| span.cs-stack:js | 3283 | 33 | 300 | 3 |
| svg.leader:cult-breathe | 2077 | 33 | 933 | 4 |
| g.blink:cult-blink | 2077 | 33 | 933 | 4 |
| img.sprite.scene:cult-shift | 2077 | 33 | 933 | 4 |
| img.sprite.scene:cult-breathe | 2077 | 33 | 933 | 4 |
| div.path-inner:js | 3843 | 33 | 217 | 2 |
| span.tick.num:bump | 2207 | 33 | 167 | 3 |
| i.cs-min:cs-bob | 780 | 50 | 933 | 7 |
| span.worker-fig:panelland-under | 1347 | 33 | 300 | 4 |
| span.lead:cult-scheme | 763 | 50 | 933 | 7 |

Longest frames: 927 ms (style/layout/paint) · 357 ms (hn 171) · 259 ms (hn 243) · 235 ms (Lf 157) · 220 ms (hn 5, hn 199)
