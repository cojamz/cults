# Perf rig: ans-1

2026-11-03T17:16:43.300Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 279 ms (bar 100)
- round II: clicks p95 269 ms (bar 100)
- round II: hovers p95 110 ms (bar 100)
- round III: clicks p95 246 ms (bar 100)
- round III: hovers p95 188 ms (bar 100)
- leak: 6290 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.2 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 131 / 279 | 50 / 100 | 33 | 3 | 217 | 16 | 2 | 9 | 2490 | 492 | 13.5 |
| II | 134 / 269 | 68 / 110 | 33 | 3 | 700 | 25 | 1 | 2 | 3575 | 549 | 17.7 |
| III | 134 / 246 | 62 / 188 | 33 | 3 | 733 | 33 | 6 | 34 | 3945 | 577 | 20.8 |

Click phases (43 clicks that redrew the table, ms, median / p90): waiting for the browser 21 / 38 · rules 6 / 19 · React render and layout effects 46 / 90 · effects 15 / 35 · to the frame that shows it 16 / 22 · that frame painted (the rig's next frame) 32 / 66

Leak control on the last turn: unbroken game 6290 elements, 856 listeners, 20.2 MB; after a reload 5093, 697, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 55 p95 221 · choose 5× p50 104 p95 279 · recruit 3× p50 165 p95 169 · pay 3× p50 131 p95 144 · next-round 1× p50 132 p95 132

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3237 | 33 | 217 | 2 |
| span.cs-stack:js | 1601 | 33 | 200 | 4 |
| span.tc-line:tcline | 1824 | 33 | 167 | 3 |
| div.path-inner:js | 1755 | 33 | 217 | 2 |
| div.piece-flight.piece-res:js | 1471 | 33 | 217 | 2 |
| span.base:opacity | 572 | 33 | 167 | 5 |
| span.worker-fig:panelland-under | 647 | 33 | 133 | 4 |
| div.as-card:js | 723 | 33 | 217 | 3 |
| svg.leader:cult-breathe | 1079 | 33 | 150 | 2 |
| g.blink:cult-blink | 1079 | 33 | 150 | 2 |
| img.sprite.scene:cult-shift | 1079 | 33 | 150 | 2 |
| img.sprite.scene:cult-breathe | 1024 | 33 | 150 | 2 |

Longest frames: 234 ms (style/layout/paint) · 203 ms (hn 184) · 178 ms (hn 158) · 170 ms (hn 156) · 149 ms (Lf 5, Lf 73)

## Round II

Clicks by kind: place 4× p50 64 p95 87 · recruit 4× p50 178 p95 269 · pay 4× p50 173 p95 257 · choose 2× p50 148 p95 148 · next-round 1× p50 134 p95 134

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5381 | 33 | 700 | 2 |
| span.tc-line:tcline | 3073 | 33 | 233 | 3 |
| span.cs-stack:js | 2529 | 33 | 217 | 3 |
| div.path-inner:js | 2608 | 33 | 200 | 2 |
| div.piece-flight.piece-res:js | 2428 | 33 | 183 | 2 |
| div.as-card:js | 1196 | 33 | 217 | 4 |
| span.worker-fig:panelland-under | 922 | 33 | 233 | 5 |
| button.card.lt-card:js | 1491 | 33 | 200 | 3 |
| span.tick.num:bump | 1418 | 33 | 117 | 3 |
| path.wash:fill | 370 | 67 | 217 | 11 |
| span.base:opacity | 794 | 34 | 167 | 5 |
| button.btn.lt-done:background-color | 210 | 100 | 233 | 15 |

Longest frames: 714 ms (style/layout/paint) · 211 ms (Lf 151) · 196 ms (hn 107) · 182 ms (hn 174) · 174 ms (hn 136)

## Round III

Clicks by kind: place 5× p50 117 p95 125 · recruit 7× p50 180 p95 295 · pay 8× p50 161 p95 246 · pick 1× p50 124 p95 124 · choose 5× p50 68 p95 157 · next-round 1× p50 40 p95 40

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7378 | 33 | 733 | 3 |
| span.tc-line:tcline | 3701 | 33 | 217 | 4 |
| span.cs-stack:js | 3278 | 33 | 200 | 4 |
| svg.leader:cult-breathe | 2101 | 33 | 733 | 4 |
| g.blink:cult-blink | 2101 | 33 | 733 | 4 |
| img.sprite.scene:cult-shift | 2101 | 33 | 733 | 4 |
| img.sprite.scene:cult-breathe | 2101 | 33 | 733 | 4 |
| div.path-inner:js | 3901 | 33 | 200 | 2 |
| span.tick.num:bump | 2329 | 33 | 217 | 3 |
| div.piece-flight.piece-res:js | 3223 | 33 | 200 | 2 |
| i.cs-min:cs-bob | 795 | 50 | 733 | 7 |
| span.lead:cult-scheme | 777 | 50 | 733 | 7 |

Longest frames: 741 ms (style/layout/paint) · 226 ms (hn 89) · 195 ms (hn 185) · 195 ms (hn 162) · 189 ms (style/layout/paint)
