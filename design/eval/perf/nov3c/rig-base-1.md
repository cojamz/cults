# Perf rig: base-1

2026-11-03T16:30:45.358Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (9)
- round I: clicks p95 159 ms (bar 100)
- round II: clicks p95 248 ms (bar 100)
- round II: hovers p95 124 ms (bar 100)
- round III: clicks p95 180 ms (bar 100)
- round III: hovers p95 104 ms (bar 100)
- idle busy grows 3% → 7% over the game
- leak: 6283 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.2 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 82 / 159 | 54 / 92 | 33 | 2 | 267 | 12 | 3 | 7 | 2490 | 492 | 13.4 |
| II | 118 / 248 | 77 / 124 | 33 | 2 | 700 | 17 | 1 | 3 | 3575 | 551 | 17.6 |
| III | 110 / 180 | 55 / 104 | 33 | 2 | 883 | 29 | 7 | 38 | 3942 | 577 | 20.7 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 19 / 29 · rules 5 / 11 · React render and layout effects 41 / 67 · effects 12 / 34 · to the frame that shows it 15 / 23 · that frame painted (the rig's next frame) 29 / 49

Leak control on the last turn: unbroken game 6283 elements, 856 listeners, 20.2 MB; after a reload 5093, 697, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 53 p95 71 · choose 5× p50 82 p95 155 · recruit 3× p50 134 p95 159 · pay 3× p50 92 p95 100 · next-round 1× p50 79 p95 79

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3278 | 33 | 267 | 2 |
| span.cs-stack:js | 1580 | 33 | 167 | 3 |
| div.path-inner:js | 1897 | 33 | 267 | 2 |
| span.tc-line:tcline | 1852 | 33 | 117 | 2 |
| div.piece-flight.piece-res:js | 1676 | 33 | 167 | 2 |
| span.tick.num:bump | 1082 | 33 | 117 | 2 |
| span.worker-fig:panelland-under | 677 | 33 | 150 | 3 |
| span.base:opacity | 598 | 33 | 267 | 3 |
| span.worker:js | 837 | 33 | 267 | 2 |
| div.as-card:js | 786 | 33 | 267 | 2 |
| span.worker-fig:panelland | 775 | 33 | 267 | 2 |
| span.tick.dip:bump | 640 | 33 | 117 | 2 |

Longest frames: 258 ms (style/layout/paint) · 213 ms (style/layout/paint) · 161 ms (hn 140) · 158 ms (hn 142) · 149 ms (hn 127)

## Round II

Clicks by kind: place 4× p50 93 p95 101 · recruit 4× p50 149 p95 199 · pay 4× p50 158 p95 171 · choose 2× p50 248 p95 248 · next-round 1× p50 90 p95 90

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5517 | 33 | 700 | 2 |
| span.cs-stack:js | 2811 | 33 | 217 | 3 |
| span.tc-line:tcline | 3152 | 33 | 217 | 2 |
| span.tick.num:bump | 1491 | 33 | 150 | 3 |
| span.worker-fig:panelland-under | 960 | 33 | 217 | 4 |
| svg.leader:cult-breathe | 1101 | 33 | 283 | 3 |
| g.blink:cult-blink | 1101 | 33 | 283 | 3 |
| img.sprite.scene:cult-shift | 1101 | 33 | 283 | 3 |
| img.sprite.scene:cult-breathe | 1101 | 33 | 283 | 3 |
| button.card.lt-card:js | 1543 | 33 | 150 | 2 |
| div.path-inner:js | 2850 | 17 | 183 | 1 |
| path.wash:fill | 364 | 50 | 217 | 7 |

Longest frames: 715 ms (style/layout/paint) · 194 ms (hn 170) · 186 ms (Lf 140) · 176 ms (hn 155) · 156 ms (hn 78)

## Round III

Clicks by kind: place 5× p50 70 p95 85 · recruit 7× p50 150 p95 180 · pay 8× p50 121 p95 217 · pick 1× p50 115 p95 115 · choose 5× p50 94 p95 152 · next-round 1× p50 107 p95 107

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7741 | 33 | 883 | 2 |
| div.path-inner:js | 4034 | 33 | 200 | 2 |
| span.tc-line:tcline | 3811 | 33 | 250 | 2 |
| span.cs-stack:js | 3362 | 33 | 250 | 2 |
| div.piece-flight.piece-res:js | 3201 | 33 | 200 | 2 |
| svg.leader:cult-breathe | 2034 | 33 | 883 | 3 |
| g.blink:cult-blink | 2034 | 33 | 883 | 3 |
| img.sprite.scene:cult-shift | 2034 | 33 | 883 | 3 |
| img.sprite.scene:cult-breathe | 2034 | 33 | 883 | 3 |
| span.tick.num:bump | 2321 | 33 | 300 | 2 |
| button.card.lt-card:js | 1930 | 33 | 233 | 2 |
| i.cs-min:cs-bob | 738 | 50 | 883 | 5 |

Longest frames: 892 ms (style/layout/paint) · 312 ms (hn 8) · 230 ms (hn 221) · 203 ms (style/layout/paint) · 199 ms (hn 169)
