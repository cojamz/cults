# Perf rig: base-3

2026-11-03T16:22:35.496Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 268 ms (bar 100)
- round I: hovers p95 120 ms (bar 100)
- round II: clicks p95 236 ms (bar 100)
- round III: clicks p95 178 ms (bar 100)
- idle busy grows 2% → 7% over the game
- leak: 6290 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 19.9 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 112 / 268 | 52 / 120 | 33 | 2 | 317 | 13 | 2 | 5 | 2490 | 492 | 13.5 |
| II | 107 / 236 | 59 / 81 | 33 | 2 | 650 | 17 | 1 | 4 | 3575 | 549 | 17.5 |
| III | 127 / 178 | 48 / 92 | 33 | 2 | 667 | 31 | 7 | 37 | 3945 | 577 | 20.5 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 18 / 32 · rules 5 / 11 · React render and layout effects 44 / 75 · effects 12 / 31 · to the frame that shows it 17 / 27 · that frame painted (the rig's next frame) 27 / 43

Leak control on the last turn: unbroken game 6290 elements, 856 listeners, 19.9 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 60 p95 72 · choose 5× p50 70 p95 268 · recruit 3× p50 195 p95 201 · pay 3× p50 155 p95 199 · next-round 1× p50 95 p95 95

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3263 | 33 | 317 | 2 |
| span.tc-line:tcline | 1888 | 33 | 167 | 3 |
| span.cs-stack:js | 1597 | 33 | 200 | 3 |
| span.worker-fig:panelland-under | 761 | 33 | 183 | 4 |
| div.piece-flight.piece-res:js | 1506 | 17 | 200 | 2 |
| div.as-card:js | 785 | 33 | 183 | 3 |
| span.tick.num:bump | 1118 | 33 | 117 | 2 |
| path.wash:fill | 197 | 67 | 183 | 11 |
| div.stage:opacity | 239 | 50 | 183 | 8 |
| div.path-inner:js | 1881 | 17 | 200 | 1 |
| span.base:opacity | 596 | 33 | 183 | 3 |
| span.worker:js | 822 | 33 | 100 | 2 |

Longest frames: 332 ms (style/layout/paint) · 209 ms (hn 155) · 174 ms (Lf 120) · 163 ms (Lf 127) · 127 ms (hn 115)

## Round II

Clicks by kind: place 4× p50 76 p95 77 · recruit 4× p50 170 p95 236 · pay 4× p50 102 p95 107 · choose 2× p50 189 p95 189 · next-round 1× p50 133 p95 133

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5588 | 33 | 650 | 2 |
| span.tc-line:tcline | 3133 | 33 | 183 | 2 |
| div.path-inner:js | 2867 | 33 | 167 | 2 |
| span.cs-stack:js | 2694 | 33 | 183 | 2 |
| div.piece-flight.piece-res:js | 2333 | 33 | 167 | 2 |
| span.worker-fig:panelland-under | 1028 | 33 | 183 | 4 |
| div.as-card:js | 1154 | 33 | 133 | 3 |
| path.wash:fill | 364 | 67 | 183 | 9 |
| span.tick.num:bump | 1471 | 33 | 117 | 2 |
| button.card.lt-card:js | 1438 | 33 | 267 | 2 |
| span.base:opacity | 837 | 33 | 183 | 3 |
| div.stage:opacity | 313 | 50 | 183 | 8 |

Longest frames: 665 ms (style/layout/paint) · 220 ms (hn 178) · 188 ms (hn 172) · 170 ms (Lf 129) · 159 ms (hn 150)

## Round III

Clicks by kind: place 5× p50 62 p95 89 · recruit 7× p50 160 p95 205 · pay 8× p50 130 p95 165 · pick 1× p50 145 p95 145 · choose 5× p50 83 p95 146 · next-round 1× p50 62 p95 62

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7661 | 33 | 667 | 3 |
| span.tc-line:tcline | 3770 | 33 | 233 | 3 |
| span.cs-stack:js | 3330 | 33 | 233 | 3 |
| div.path-inner:js | 4076 | 33 | 167 | 2 |
| svg.leader:cult-breathe | 2102 | 33 | 667 | 3 |
| g.blink:cult-blink | 2102 | 33 | 667 | 3 |
| img.sprite.scene:cult-shift | 2102 | 33 | 667 | 3 |
| img.sprite.scene:cult-breathe | 2102 | 33 | 667 | 3 |
| div.piece-flight.piece-res:js | 3089 | 33 | 167 | 2 |
| span.tick.num:bump | 2353 | 33 | 183 | 2 |
| i.cs-min:cs-bob | 778 | 50 | 667 | 6 |
| i.cs-min:cs-bob-eager | 755 | 50 | 667 | 6 |

Longest frames: 671 ms (style/layout/paint) · 229 ms (hn 191) · 223 ms (hn 87) · 209 ms (style/layout/paint) · 196 ms (hn 185)
