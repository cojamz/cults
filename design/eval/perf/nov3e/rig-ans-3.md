# Perf rig: ans-3

2026-11-03T17:31:23.414Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 234 ms (bar 100)
- round I: hovers p95 106 ms (bar 100)
- round II: clicks p95 163 ms (bar 100)
- round III: clicks p95 195 ms (bar 100)
- round III: hovers p95 106 ms (bar 100)
- leak: 6287 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 96 / 234 | 49 / 106 | 33 | 2 | 250 | 12 | 3 | 7 | 2490 | 492 | 13.5 |
| II | 101 / 163 | 59 / 66 | 33 | 2 | 750 | 14 | 2 | 0 | 3575 | 549 | 17.4 |
| III | 118 / 195 | 59 / 106 | 33 | 3 | 800 | 35 | 6 | 31 | 3942 | 577 | 20.6 |

Click phases (43 clicks that redrew the table, ms, median / p90): waiting for the browser 16 / 29 · rules 6 / 12 · React render and layout effects 34 / 79 · effects 15 / 29 · to the frame that shows it 13 / 22 · that frame painted (the rig's next frame) 25 / 51

Leak control on the last turn: unbroken game 6287 elements, 856 listeners, 20 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 62 p95 212 · choose 5× p50 85 p95 234 · recruit 3× p50 110 p95 155 · pay 3× p50 98 p95 107 · next-round 1× p50 67 p95 67

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3274 | 33 | 250 | 2 |
| span.cs-stack:js | 1593 | 33 | 183 | 3 |
| span.tc-line:tcline | 1955 | 33 | 100 | 2 |
| div.path-inner:js | 1845 | 33 | 133 | 2 |
| span.worker-fig:panelland-under | 832 | 33 | 183 | 3 |
| path.wash:fill | 275 | 50 | 183 | 8 |
| span.tick.num:bump | 1057 | 33 | 100 | 2 |
| span.base:opacity | 654 | 33 | 183 | 3 |
| button.fb.lt-rate:opacity | 139 | 83 | 183 | 12 |
| button.card.lt-card:opacity | 139 | 83 | 183 | 12 |
| div.as-card:js | 757 | 33 | 133 | 2 |
| div.piece-flight.piece-res:js | 1479 | 17 | 117 | 1 |

Longest frames: 245 ms (style/layout/paint) · 183 ms (hn 162) · 146 ms (hn 123) · 124 ms (hn 114) · 120 ms (hn 105)

## Round II

Clicks by kind: place 4× p50 67 p95 82 · recruit 4× p50 153 p95 163 · pay 4× p50 118 p95 121 · choose 2× p50 153 p95 153 · next-round 1× p50 64 p95 64

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5568 | 33 | 750 | 2 |
| span.tc-line:tcline | 3217 | 33 | 150 | 2 |
| span.cs-stack:js | 2834 | 33 | 150 | 2 |
| span.tick.num:bump | 1398 | 33 | 100 | 3 |
| span.worker-fig:panelland-under | 1005 | 33 | 183 | 3 |
| div.path-inner:js | 2907 | 33 | 100 | 1 |
| div.piece-flight.piece-res:js | 2599 | 17 | 117 | 1 |
| div.as-card:js | 1207 | 33 | 150 | 2 |
| span.base:opacity | 782 | 33 | 150 | 3 |
| svg.leader:cult-breathe | 1163 | 33 | 267 | 2 |
| g.blink:cult-blink | 1163 | 33 | 267 | 2 |
| img.sprite.scene:cult-shift | 1163 | 33 | 267 | 2 |

Longest frames: 765 ms (style/layout/paint) · 206 ms (hn 138) · 141 ms (hn 106) · 139 ms (hn 114) · 125 ms (hn 97)

## Round III

Clicks by kind: place 5× p50 118 p95 135 · recruit 7× p50 155 p95 195 · pay 8× p50 124 p95 306 · pick 1× p50 96 p95 96 · choose 5× p50 92 p95 159 · next-round 1× p50 59 p95 59

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7590 | 33 | 800 | 3 |
| span.tc-line:tcline | 3791 | 33 | 250 | 3 |
| span.cs-stack:js | 3329 | 33 | 250 | 3 |
| svg.leader:cult-breathe | 2089 | 33 | 800 | 4 |
| g.blink:cult-blink | 2089 | 33 | 800 | 4 |
| img.sprite.scene:cult-shift | 2089 | 33 | 800 | 4 |
| img.sprite.scene:cult-breathe | 2089 | 33 | 800 | 4 |
| div.path-inner:js | 3602 | 33 | 250 | 2 |
| span.tick.num:bump | 2261 | 33 | 167 | 3 |
| div.piece-flight.piece-res:js | 2914 | 33 | 250 | 2 |
| i.cs-min:cs-bob | 795 | 50 | 800 | 7 |
| span.worker-fig:panelland-under | 1327 | 33 | 250 | 4 |

Longest frames: 807 ms (style/layout/paint) · 245 ms (hn 75) · 215 ms (style/layout/paint) · 212 ms (hn 174) · 210 ms (Lf 133)
