# Perf rig: ans-1

2026-11-03T16:07:52.914Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 391 ms (bar 100)
- round II: clicks p95 271 ms (bar 100)
- round III: clicks p95 213 ms (bar 100)
- round III: hovers p95 132 ms (bar 100)
- idle busy grows 3% → 7% over the game
- leak: 6287 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.1 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 93 / 391 | 53 / 71 | 33 | 3 | 317 | 14 | 3 | 7 | 2490 | 492 | 13.4 |
| II | 133 / 271 | 65 / 96 | 33 | 2 | 817 | 14 | 1 | 4 | 3575 | 551 | 17.6 |
| III | 133 / 213 | 60 / 132 | 33 | 3 | 800 | 37 | 7 | 44 | 3942 | 577 | 20.7 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 19 / 41 · rules 6 / 14 · React render and layout effects 41 / 85 · effects 12 / 34 · to the frame that shows it 14 / 27 · that frame painted (the rig's next frame) 29 / 55

Leak control on the last turn: unbroken game 6287 elements, 856 listeners, 20.1 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 76 p95 89 · choose 5× p50 68 p95 391 · recruit 3× p50 150 p95 173 · pay 3× p50 94 p95 116 · next-round 1× p50 126 p95 126

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3185 | 33 | 317 | 3 |
| span.cs-stack:js | 1603 | 33 | 150 | 4 |
| span.tc-line:tcline | 1877 | 33 | 267 | 3 |
| span.tick.num:bump | 1040 | 33 | 217 | 4 |
| div.path-inner:js | 1838 | 33 | 150 | 2 |
| div.piece-flight.piece-res:js | 1586 | 33 | 267 | 2 |
| svg.leader:cult-breathe | 1048 | 33 | 100 | 3 |
| g.blink:cult-blink | 1048 | 33 | 100 | 3 |
| img.sprite.scene:cult-shift | 1048 | 33 | 100 | 3 |
| img.sprite.scene:cult-breathe | 1018 | 33 | 100 | 3 |
| div.as-card:js | 710 | 33 | 267 | 4 |
| span.tick.dip:bump | 575 | 33 | 267 | 4 |

Longest frames: 338 ms (style/layout/paint) · 235 ms (hn 215) · 228 ms (hn 219) · 191 ms (hn 162) · 170 ms (hn 108)

## Round II

Clicks by kind: place 4× p50 117 p95 149 · recruit 4× p50 143 p95 271 · pay 4× p50 144 p95 171 · choose 2× p50 208 p95 208 · next-round 1× p50 133 p95 133

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5475 | 33 | 817 | 2 |
| span.tc-line:tcline | 3126 | 33 | 233 | 3 |
| span.cs-stack:js | 2674 | 33 | 233 | 3 |
| div.path-inner:js | 2880 | 33 | 117 | 2 |
| div.as-card:js | 1084 | 33 | 233 | 3 |
| path.wash:fill | 294 | 67 | 283 | 11 |
| span.tick.num:bump | 1480 | 33 | 117 | 2 |
| button.card.lt-card:js | 1471 | 33 | 283 | 2 |
| span.worker-fig:panelland-under | 974 | 33 | 233 | 3 |
| button.btn.lt-done:background-color | 205 | 83 | 233 | 12 |
| svg.leader:cult-breathe | 1211 | 33 | 150 | 2 |
| g.blink:cult-blink | 1211 | 33 | 150 | 2 |

Longest frames: 834 ms (style/layout/paint) · 242 ms (hn 154) · 194 ms (Lf 135) · 141 ms (Lf 26) · 133 ms (Lf 85)

## Round III

Clicks by kind: place 5× p50 113 p95 133 · recruit 7× p50 163 p95 213 · pay 8× p50 159 p95 331 · pick 1× p50 115 p95 115 · choose 5× p50 85 p95 181 · next-round 1× p50 110 p95 110

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7364 | 33 | 800 | 3 |
| span.tc-line:tcline | 3542 | 33 | 433 | 4 |
| span.cs-stack:js | 3349 | 33 | 433 | 4 |
| div.path-inner:js | 3952 | 33 | 200 | 2 |
| span.tick.num:bump | 2303 | 33 | 150 | 3 |
| svg.leader:cult-breathe | 2033 | 33 | 800 | 3 |
| g.blink:cult-blink | 2033 | 33 | 800 | 3 |
| img.sprite.scene:cult-shift | 2033 | 33 | 800 | 3 |
| img.sprite.scene:cult-breathe | 2033 | 33 | 800 | 3 |
| div.piece-flight.piece-res:js | 3033 | 33 | 150 | 2 |
| span.worker-fig:panelland-under | 1460 | 33 | 433 | 4 |
| button.btn.lt-done:background-color | 290 | 100 | 167 | 17 |

Longest frames: 819 ms (style/layout/paint) · 425 ms (hn 411) · 308 ms (hn 178) · 297 ms (Lf 199, FrameRequestCallback 7) · 233 ms (style/layout/paint)
