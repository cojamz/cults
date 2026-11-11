# Perf rig: base-2

2026-11-03T17:24:07.238Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 265 ms (bar 100)
- round I: hovers p95 144 ms (bar 100)
- round II: clicks p95 254 ms (bar 100)
- round III: clicks p95 219 ms (bar 100)
- leak: 6282 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 105 / 265 | 72 / 144 | 33 | 2 | 250 | 16 | 3 | 7 | 2490 | 492 | 13.5 |
| II | 105 / 254 | 60 / 97 | 33 | 2 | 767 | 17 | 1 | 3 | 3574 | 549 | 17.4 |
| III | 121 / 219 | 43 / 88 | 33 | 3 | 767 | 33 | 6 | 30 | 3941 | 577 | 20.5 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 18 / 30 · rules 5 / 11 · React render and layout effects 39 / 86 · effects 14 / 25 · to the frame that shows it 15 / 26 · that frame painted (the rig's next frame) 27 / 62

Leak control on the last turn: unbroken game 6282 elements, 856 listeners, 20 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 68 p95 84 · choose 5× p50 88 p95 174 · recruit 3× p50 140 p95 265 · pay 3× p50 117 p95 138 · next-round 1× p50 105 p95 105

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3248 | 33 | 217 | 2 |
| span.cs-stack:js | 1640 | 33 | 200 | 3 |
| span.tc-line:tcline | 1948 | 33 | 200 | 2 |
| g.blink:cult-blink | 1154 | 33 | 250 | 3 |
| span.worker-fig:panelland-under | 814 | 33 | 233 | 4 |
| div.piece-flight.piece-res:js | 1548 | 33 | 200 | 2 |
| span.base:opacity | 678 | 33 | 233 | 4 |
| svg.leader:cult-breathe | 1138 | 33 | 250 | 2 |
| img.sprite.scene:cult-shift | 1138 | 33 | 250 | 2 |
| span.tick.num:bump | 1129 | 33 | 117 | 2 |
| img.sprite.scene:cult-breathe | 1053 | 33 | 250 | 2 |
| div.path-inner:js | 1749 | 33 | 200 | 1 |

Longest frames: 228 ms (style/layout/paint) · 208 ms (hn 167) · 201 ms (hn 176) · 191 ms (Lf 116) · 156 ms (hn 140)

## Round II

Clicks by kind: place 4× p50 90 p95 104 · recruit 4× p50 126 p95 215 · pay 4× p50 105 p95 149 · choose 2× p50 254 p95 254 · next-round 1× p50 84 p95 84

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5471 | 33 | 767 | 2 |
| span.cs-stack:js | 2711 | 33 | 200 | 3 |
| span.tc-line:tcline | 3073 | 33 | 200 | 2 |
| div.path-inner:js | 2923 | 33 | 233 | 2 |
| div.piece-flight.piece-res:js | 2562 | 33 | 233 | 2 |
| div.as-card:js | 1215 | 33 | 200 | 3 |
| span.worker-fig:panelland-under | 879 | 33 | 200 | 4 |
| button.card.lt-card:js | 1487 | 33 | 117 | 2 |
| span.worker:js | 975 | 33 | 117 | 3 |
| span.tick.num:bump | 1448 | 33 | 133 | 2 |
| path.wash:fill | 282 | 67 | 200 | 9 |
| span.base:opacity | 779 | 33 | 100 | 3 |

Longest frames: 777 ms (style/layout/paint) · 233 ms (Lf 186) · 184 ms (hn 174) · 183 ms (style/layout/paint) · 173 ms (Lf 134)

## Round III

Clicks by kind: place 5× p50 103 p95 219 · recruit 7× p50 142 p95 233 · pay 8× p50 121 p95 187 · pick 1× p50 121 p95 121 · choose 5× p50 92 p95 163 · next-round 1× p50 101 p95 101

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7715 | 33 | 767 | 3 |
| span.tc-line:tcline | 3693 | 33 | 250 | 3 |
| span.cs-stack:js | 3285 | 33 | 250 | 3 |
| div.path-inner:js | 4051 | 33 | 217 | 2 |
| span.tick.num:bump | 2307 | 33 | 150 | 3 |
| svg.leader:cult-breathe | 2142 | 33 | 767 | 3 |
| g.blink:cult-blink | 2142 | 33 | 767 | 3 |
| img.sprite.scene:cult-shift | 2142 | 33 | 767 | 3 |
| img.sprite.scene:cult-breathe | 2142 | 33 | 767 | 3 |
| div.piece-flight.piece-res:js | 3119 | 33 | 217 | 2 |
| span.worker-fig:panelland-under | 1249 | 33 | 250 | 4 |
| i.cs-min:cs-bob | 819 | 50 | 767 | 6 |

Longest frames: 768 ms (style/layout/paint) · 329 ms (hn 139) · 302 ms (style/layout/paint) · 234 ms (hn 222) · 223 ms (style/layout/paint)
