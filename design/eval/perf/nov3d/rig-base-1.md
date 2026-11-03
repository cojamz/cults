# Perf rig: base-1

2026-11-03T16:53:45.982Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 140 ms (bar 100)
- round II: clicks p95 210 ms (bar 100)
- round III: clicks p95 196 ms (bar 100)
- leak: 6287 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.1 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 88 / 140 | 59 / 89 | 33 | 2 | 217 | 8 | 2 | 9 | 2490 | 492 | 13.5 |
| II | 114 / 210 | 67 / 74 | 33 | 2 | 517 | 21 | 1 | 1 | 3576 | 551 | 17.6 |
| III | 124 / 196 | 58 / 83 | 33 | 3 | 717 | 39 | 5 | 30 | 3943 | 577 | 20.7 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 20 / 27 · rules 5 / 10 · React render and layout effects 37 / 62 · effects 13 / 33 · to the frame that shows it 16 / 24 · that frame painted (the rig's next frame) 30 / 43

Leak control on the last turn: unbroken game 6287 elements, 856 listeners, 20.1 MB; after a reload 5093, 697, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 65 p95 86 · choose 5× p50 84 p95 137 · recruit 3× p50 122 p95 140 · pay 3× p50 120 p95 135 · next-round 1× p50 77 p95 77

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3197 | 33 | 217 | 2 |
| span.tc-line:tcline | 2000 | 33 | 100 | 3 |
| span.cs-stack:js | 1722 | 33 | 183 | 3 |
| div.path-inner:js | 1832 | 17 | 133 | 2 |
| div.piece-flight.piece-res:js | 1485 | 17 | 133 | 2 |
| span.tick.num:bump | 1123 | 33 | 117 | 2 |
| span.worker-fig:panelland-under | 744 | 33 | 167 | 3 |
| div.as-card:js | 873 | 33 | 133 | 2 |
| span.base:opacity | 556 | 33 | 133 | 3 |
| span.worker:js | 827 | 17 | 100 | 2 |
| span.worker-fig:panelland | 809 | 33 | 133 | 2 |
| div.as-member.bubble:js | 369 | 33 | 83 | 4 |

Longest frames: 234 ms (style/layout/paint) · 187 ms (hn 164) · 157 ms (hn 132) · 127 ms (hn 115) · 112 ms (Lf 82)

## Round II

Clicks by kind: place 4× p50 95 p95 107 · recruit 4× p50 140 p95 161 · pay 4× p50 126 p95 146 · choose 2× p50 210 p95 210 · next-round 1× p50 137 p95 137

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5552 | 33 | 517 | 2 |
| span.cs-stack:js | 2713 | 33 | 200 | 3 |
| span.tc-line:tcline | 3175 | 33 | 150 | 2 |
| div.piece-flight.piece-res:js | 2543 | 33 | 183 | 2 |
| span.tick.num:bump | 1464 | 33 | 100 | 3 |
| button.card.lt-card:js | 1634 | 33 | 267 | 2 |
| div.path-inner:js | 2909 | 17 | 183 | 1 |
| span.worker-fig:panelland-under | 947 | 33 | 150 | 3 |
| span.cs-total:js | 519 | 50 | 100 | 5 |
| div.as-card:js | 1230 | 33 | 200 | 2 |
| svg.leader:cult-breathe | 1176 | 33 | 267 | 2 |
| g.blink:cult-blink | 1176 | 33 | 267 | 2 |

Longest frames: 541 ms (style/layout/paint) · 204 ms (hn 176) · 202 ms (hn 147) · 183 ms (style/layout/paint) · 172 ms (Lf 138)

## Round III

Clicks by kind: place 5× p50 93 p95 137 · recruit 7× p50 128 p95 214 · pay 8× p50 170 p95 188 · pick 1× p50 119 p95 119 · choose 5× p50 120 p95 196 · next-round 1× p50 84 p95 84

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7482 | 33 | 717 | 3 |
| span.cs-stack:js | 3398 | 33 | 267 | 4 |
| span.tc-line:tcline | 3795 | 33 | 267 | 3 |
| div.path-inner:js | 3771 | 33 | 200 | 2 |
| span.tick.num:bump | 2159 | 33 | 167 | 3 |
| svg.leader:cult-breathe | 2087 | 33 | 717 | 3 |
| g.blink:cult-blink | 2087 | 33 | 717 | 3 |
| img.sprite.scene:cult-shift | 2087 | 33 | 717 | 3 |
| img.sprite.scene:cult-breathe | 2087 | 33 | 717 | 3 |
| div.piece-flight.piece-res:js | 3114 | 33 | 150 | 2 |
| span.base:opacity | 1092 | 33 | 267 | 4 |
| i.cs-min:cs-bob | 807 | 33 | 717 | 5 |

Longest frames: 733 ms (style/layout/paint) · 251 ms (hn 240) · 233 ms (hn 91) · 182 ms (hn 138) · 178 ms (hn 150)
