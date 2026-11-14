# Perf rig: base-1

2026-11-03T17:48:45.288Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 258 ms (bar 100)
- round II: clicks p95 197 ms (bar 100)
- round II: hovers p95 117 ms (bar 100)
- round III: clicks p95 286 ms (bar 100)
- leak: 5676 elements vs 5093 after a reload
- leak: heap 19.8 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 103 / 258 | 49 / 91 | 33 | 2 | 300 | 10 | 3 | 8 | 2490 | 492 | 13.5 |
| II | 129 / 197 | 62 / 117 | 33 | 3 | 867 | 24 | 2 | 5 | 3575 | 549 | 17.4 |
| III | 142 / 286 | 58 / 93 | 33 | 4 | 917 | 47 | 6 | 30 | 3942 | 577 | 20.6 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 23 / 34 · rules 6 / 16 · React render and layout effects 44 / 101 · effects 16 / 36 · to the frame that shows it 18 / 31 · that frame painted (the rig's next frame) 33 / 55

Leak control on the last turn: unbroken game 5676 elements, 764 listeners, 19.8 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 98 p95 103 · choose 5× p50 98 p95 258 · recruit 3× p50 162 p95 221 · pay 3× p50 170 p95 180 · next-round 1× p50 131 p95 131

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3219 | 33 | 300 | 2 |
| span.cs-stack:js | 1621 | 33 | 183 | 3 |
| span.tc-line:tcline | 1872 | 33 | 183 | 2 |
| span.worker-fig:panelland-under | 785 | 33 | 150 | 4 |
| span.base:opacity | 614 | 50 | 183 | 5 |
| div.piece-flight.piece-res:js | 1421 | 33 | 150 | 2 |
| svg.leader:cult-breathe | 1118 | 33 | 167 | 2 |
| g.blink:cult-blink | 1118 | 33 | 167 | 2 |
| img.sprite.scene:cult-shift | 1118 | 33 | 167 | 2 |
| img.sprite.scene:cult-breathe | 1066 | 33 | 117 | 2 |
| span.tick.num:bump | 1055 | 33 | 117 | 2 |
| button.btn.lt-done:background-color | 151 | 83 | 183 | 13 |

Longest frames: 317 ms (style/layout/paint) · 173 ms (Lf 7, Lf 122) · 160 ms (Lf 102) · 150 ms (Lf 114) · 146 ms (hn 120)

## Round II

Clicks by kind: place 4× p50 100 p95 197 · recruit 4× p50 144 p95 172 · pay 4× p50 129 p95 146 · choose 2× p50 194 p95 194 · next-round 1× p50 104 p95 104

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5378 | 33 | 867 | 3 |
| span.tc-line:tcline | 2964 | 33 | 200 | 4 |
| span.cs-stack:js | 2443 | 33 | 200 | 4 |
| button.card.lt-card:js | 1479 | 33 | 283 | 4 |
| div.path-inner:js | 2852 | 33 | 200 | 2 |
| div.piece-flight.piece-res:js | 2387 | 33 | 200 | 2 |
| span.worker-fig:panelland-under | 888 | 33 | 200 | 5 |
| span.tick.num:bump | 1424 | 33 | 133 | 3 |
| div.as-card:js | 1242 | 33 | 183 | 3 |
| span.base:opacity | 713 | 34 | 200 | 5 |
| path.wash:fill | 191 | 83 | 183 | 18 |
| span.worker:js | 966 | 33 | 100 | 3 |

Longest frames: 876 ms (style/layout/paint) · 245 ms (hn 221) · 193 ms (hn 175) · 193 ms (hn 179) · 183 ms (hn 8, hn 150)

## Round III

Clicks by kind: place 5× p50 108 p95 160 · recruit 7× p50 161 p95 286 · pay 8× p50 181 p95 293 · pick 1× p50 146 p95 146 · choose 5× p50 96 p95 184 · next-round 1× p50 61 p95 61

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7166 | 33 | 917 | 4 |
| span.tc-line:tcline | 3466 | 50 | 283 | 5 |
| span.cs-stack:js | 3243 | 33 | 283 | 5 |
| div.path-inner:js | 3689 | 33 | 217 | 3 |
| div.piece-flight.piece-res:js | 2955 | 33 | 283 | 3 |
| svg.leader:cult-breathe | 2050 | 33 | 917 | 4 |
| g.blink:cult-blink | 2050 | 33 | 917 | 4 |
| img.sprite.scene:cult-shift | 2050 | 33 | 917 | 4 |
| img.sprite.scene:cult-breathe | 2050 | 33 | 917 | 4 |
| span.worker-fig:panelland-under | 1138 | 50 | 283 | 7 |
| span.base:opacity | 1061 | 50 | 283 | 7 |
| span.tick.num:bump | 2262 | 33 | 167 | 3 |

Longest frames: 924 ms (style/layout/paint) · 282 ms (hn 6, hn 5, hn 258) · 257 ms (hn 244) · 233 ms (Lf 166) · 225 ms (hn 190)
