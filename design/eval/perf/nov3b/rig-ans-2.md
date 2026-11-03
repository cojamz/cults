# Perf rig: ans-2

2026-11-03T16:15:19.046Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 294 ms (bar 100)
- round II: clicks p95 213 ms (bar 100)
- round II: hovers p95 105 ms (bar 100)
- round III: clicks p95 258 ms (bar 100)
- leak: 6286 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.3 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 122 / 294 | 66 / 95 | 33 | 3 | 317 | 16 | 3 | 12 | 2490 | 492 | 13.3 |
| II | 121 / 213 | 67 / 105 | 33 | 3 | 833 | 21 | 1 | 3 | 3574 | 551 | 17.7 |
| III | 123 / 258 | 31 / 99 | 33 | 3 | 750 | 28 | 5 | 25 | 3941 | 577 | 20.8 |

Click phases (44 clicks that redrew the table, ms, median / p90): waiting for the browser 23 / 36 · rules 6 / 15 · React render and layout effects 37 / 98 · effects 13 / 31 · to the frame that shows it 14 / 21 · that frame painted (the rig's next frame) 30 / 71

Leak control on the last turn: unbroken game 6286 elements, 856 listeners, 20.3 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 77 p95 167 · choose 5× p50 74 p95 294 · recruit 3× p50 142 p95 208 · pay 3× p50 131 p95 159 · next-round 1× p50 82 p95 82

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3176 | 33 | 317 | 3 |
| span.cs-stack:js | 1653 | 33 | 150 | 4 |
| span.tc-line:tcline | 1815 | 33 | 150 | 3 |
| div.path-inner:js | 1683 | 33 | 150 | 3 |
| div.piece-flight.piece-res:js | 1364 | 33 | 150 | 3 |
| div.as-card:js | 853 | 33 | 183 | 3 |
| g.blink:cult-blink | 1087 | 33 | 150 | 2 |
| svg.leader:cult-breathe | 1074 | 33 | 150 | 2 |
| img.sprite.scene:cult-shift | 1074 | 33 | 150 | 2 |
| span.tick.num:bump | 1060 | 33 | 100 | 2 |
| img.sprite.scene:cult-breathe | 1024 | 33 | 117 | 2 |
| span.worker:js | 817 | 33 | 117 | 2 |

Longest frames: 336 ms (style/layout/paint) · 164 ms (hn 160) · 152 ms (Lf 102) · 149 ms (hn 121) · 129 ms (style/layout/paint)

## Round II

Clicks by kind: place 4× p50 103 p95 121 · recruit 4× p50 184 p95 213 · pay 4× p50 114 p95 126 · choose 2× p50 202 p95 202 · next-round 1× p50 87 p95 87

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5444 | 33 | 833 | 3 |
| span.tc-line:tcline | 3013 | 33 | 167 | 3 |
| span.cs-stack:js | 2706 | 33 | 200 | 3 |
| div.path-inner:js | 2849 | 33 | 200 | 2 |
| div.as-card:js | 1274 | 33 | 167 | 3 |
| span.worker-fig:panelland-under | 937 | 33 | 167 | 4 |
| span.worker:js | 1011 | 33 | 150 | 3 |
| button.card.lt-card:js | 1470 | 33 | 350 | 2 |
| span.tick.num:bump | 1372 | 33 | 150 | 2 |
| path.wash:fill | 304 | 50 | 350 | 9 |
| div.worker-flight.minion-flight:js | 859 | 33 | 350 | 3 |
| svg.leader:cult-breathe | 1201 | 33 | 150 | 2 |

Longest frames: 843 ms (style/layout/paint) · 309 ms (hn 187) · 168 ms (Lf 65) · 167 ms (hn 5, hn 8, xa 137) · 159 ms (hn 131)

## Round III

Clicks by kind: place 5× p50 97 p95 258 · recruit 7× p50 124 p95 189 · pay 8× p50 149 p95 287 · pick 1× p50 195 p95 195 · choose 5× p50 93 p95 119 · next-round 1× p50 91 p95 91

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7405 | 33 | 750 | 3 |
| span.tc-line:tcline | 3659 | 33 | 267 | 4 |
| span.cs-stack:js | 3401 | 33 | 267 | 4 |
| div.path-inner:js | 3859 | 33 | 217 | 2 |
| span.tick.num:bump | 2288 | 33 | 183 | 3 |
| svg.leader:cult-breathe | 2145 | 33 | 750 | 3 |
| g.blink:cult-blink | 2145 | 33 | 750 | 3 |
| img.sprite.scene:cult-shift | 2145 | 33 | 750 | 3 |
| img.sprite.scene:cult-breathe | 2145 | 33 | 750 | 3 |
| div.piece-flight.piece-res:js | 3075 | 33 | 217 | 2 |
| i.cs-min:cs-bob | 794 | 50 | 750 | 7 |
| span.worker-fig:panelland-under | 1315 | 33 | 250 | 4 |

Longest frames: 766 ms (style/layout/paint) · 294 ms (hn 165) · 239 ms (hn 231) · 229 ms (hn 217) · 217 ms (Lf 136)
