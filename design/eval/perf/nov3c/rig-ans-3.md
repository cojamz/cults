# Perf rig: ans-3

2026-11-03T16:45:24.106Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 242 ms (bar 100)
- round II: clicks p95 251 ms (bar 100)
- round III: clicks p95 172 ms (bar 100)
- leak: 6287 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.3 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 76 / 242 | 49 / 66 | 33 | 2 | 217 | 9 | 2 | 7 | 2490 | 492 | 13.5 |
| II | 120 / 251 | 50 / 87 | 33 | 2 | 483 | 18 | 1 | 2 | 3575 | 551 | 17.8 |
| III | 102 / 172 | 48 / 99 | 33 | 2 | 733 | 24 | 6 | 30 | 3942 | 577 | 21 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 19 / 32 · rules 4 / 10 · React render and layout effects 35 / 67 · effects 10 / 34 · to the frame that shows it 16 / 20 · that frame painted (the rig's next frame) 27 / 48

Leak control on the last turn: unbroken game 6287 elements, 856 listeners, 20.3 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 51 p95 75 · choose 5× p50 76 p95 242 · recruit 3× p50 126 p95 164 · pay 3× p50 106 p95 184 · next-round 1× p50 77 p95 77

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3346 | 33 | 217 | 2 |
| span.cs-stack:js | 1552 | 33 | 183 | 3 |
| span.tc-line:tcline | 1831 | 33 | 150 | 2 |
| div.piece-flight.piece-res:js | 1569 | 33 | 183 | 2 |
| span.worker-fig:panelland-under | 825 | 33 | 150 | 3 |
| span.tick.num:bump | 1057 | 33 | 133 | 2 |
| span.base:opacity | 678 | 33 | 150 | 3 |
| div.path-inner:js | 1869 | 17 | 183 | 1 |
| path.wash:fill | 296 | 50 | 133 | 6 |
| div.as-card:js | 757 | 33 | 133 | 2 |
| svg.leader:cult-breathe | 1083 | 33 | 133 | 1 |
| g.blink:cult-blink | 1083 | 33 | 133 | 1 |

Longest frames: 237 ms (style/layout/paint) · 181 ms (hn 153) · 158 ms (Lf 106) · 137 ms (hn 121) · 133 ms (hn 119)

## Round II

Clicks by kind: place 4× p50 102 p95 120 · recruit 4× p50 144 p95 157 · pay 4× p50 144 p95 196 · choose 2× p50 251 p95 251 · next-round 1× p50 115 p95 115

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5570 | 33 | 483 | 2 |
| span.tc-line:tcline | 3079 | 33 | 217 | 2 |
| div.path-inner:js | 2846 | 33 | 217 | 2 |
| span.cs-stack:js | 2772 | 33 | 217 | 2 |
| div.piece-flight.piece-res:js | 2441 | 17 | 150 | 2 |
| span.worker-fig:panelland-under | 853 | 33 | 150 | 4 |
| button.card.lt-card:js | 1507 | 33 | 300 | 2 |
| span.tick.num:bump | 1453 | 33 | 167 | 2 |
| path.wash:fill | 250 | 67 | 217 | 11 |
| span.worker:js | 1155 | 33 | 217 | 2 |
| div.as-card:js | 1138 | 33 | 150 | 2 |
| svg.leader:cult-breathe | 1135 | 33 | 167 | 2 |

Longest frames: 502 ms (style/layout/paint) · 241 ms (hn 189) · 201 ms (hn 173) · 196 ms (hn 176) · 154 ms (hn 70)

## Round III

Clicks by kind: place 5× p50 87 p95 123 · recruit 7× p50 161 p95 169 · pay 8× p50 127 p95 232 · pick 1× p50 109 p95 109 · choose 5× p50 82 p95 114 · next-round 1× p50 57 p95 57

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7670 | 33 | 733 | 3 |
| span.tc-line:tcline | 3970 | 33 | 183 | 3 |
| span.cs-stack:js | 3551 | 33 | 217 | 3 |
| div.path-inner:js | 3941 | 33 | 200 | 2 |
| svg.leader:cult-breathe | 2031 | 33 | 733 | 3 |
| g.blink:cult-blink | 2031 | 33 | 733 | 3 |
| img.sprite.scene:cult-shift | 2031 | 33 | 733 | 3 |
| img.sprite.scene:cult-breathe | 2031 | 33 | 733 | 3 |
| div.piece-flight.piece-res:js | 3024 | 33 | 200 | 2 |
| span.tick.num:bump | 2293 | 33 | 167 | 2 |
| span.worker-fig:panelland-under | 1340 | 33 | 183 | 3 |
| span.base:opacity | 1316 | 33 | 183 | 3 |

Longest frames: 745 ms (style/layout/paint) · 227 ms (hn 79) · 210 ms (hn 6, hn 195) · 181 ms (hn 170) · 177 ms (hn 31)
