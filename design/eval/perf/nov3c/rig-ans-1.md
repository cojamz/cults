# Perf rig: ans-1

2026-11-03T16:30:45.568Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 302 ms (bar 100)
- round II: clicks p95 153 ms (bar 100)
- round III: clicks p95 222 ms (bar 100)
- round III: hovers p95 104 ms (bar 100)
- idle busy grows 3% → 7% over the game
- leak: 6287 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.1 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 79 / 302 | 54 / 84 | 33 | 2 | 250 | 11 | 3 | 7 | 2490 | 492 | 13.5 |
| II | 108 / 153 | 53 / 80 | 33 | 2 | 600 | 12 | 1 | 2 | 3576 | 549 | 17.8 |
| III | 108 / 222 | 55 / 104 | 33 | 2 | 667 | 27 | 7 | 58 | 3943 | 577 | 20.9 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 26 · rules 5 / 13 · React render and layout effects 33 / 85 · effects 11 / 24 · to the frame that shows it 15 / 21 · that frame painted (the rig's next frame) 26 / 44

Leak control on the last turn: unbroken game 6287 elements, 856 listeners, 20.1 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 67 p95 70 · choose 5× p50 71 p95 302 · recruit 3× p50 145 p95 168 · pay 3× p50 99 p95 107 · next-round 1× p50 76 p95 76

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3305 | 33 | 200 | 2 |
| span.cs-stack:js | 1592 | 33 | 200 | 3 |
| span.tc-line:tcline | 2080 | 33 | 150 | 2 |
| span.worker-fig:panelland-under | 847 | 33 | 200 | 3 |
| span.tick.num:bump | 1146 | 17 | 100 | 2 |
| span.base:opacity | 715 | 33 | 200 | 3 |
| div.path-inner:js | 1822 | 17 | 200 | 1 |
| path.wash:fill | 255 | 50 | 150 | 7 |
| span.worker:js | 854 | 17 | 183 | 2 |
| button.fb.lt-rate:background-color | 130 | 67 | 150 | 12 |
| button.btn.lt-done:background-color | 130 | 67 | 150 | 12 |
| div.piece-flight.piece-res:js | 1532 | 17 | 200 | 1 |

Longest frames: 239 ms (hn 207) · 215 ms (style/layout/paint) · 209 ms (hn 5, hn 5, hn 6) · 189 ms (hn 157) · 167 ms (hn 154)

## Round II

Clicks by kind: place 4× p50 86 p95 118 · recruit 4× p50 135 p95 153 · pay 4× p50 102 p95 130 · choose 2× p50 132 p95 132 · next-round 1× p50 98 p95 98

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5542 | 33 | 600 | 2 |
| span.tc-line:tcline | 3285 | 33 | 150 | 2 |
| span.cs-stack:js | 2782 | 33 | 217 | 2 |
| span.tick.num:bump | 1491 | 33 | 117 | 3 |
| div.path-inner:js | 2899 | 17 | 150 | 1 |
| div.piece-flight.piece-res:js | 2424 | 17 | 117 | 1 |
| div.as-card:js | 1208 | 33 | 150 | 2 |
| svg.leader:cult-breathe | 1142 | 33 | 133 | 2 |
| g.blink:cult-blink | 1142 | 33 | 133 | 2 |
| img.sprite.scene:cult-shift | 1142 | 33 | 133 | 2 |
| img.sprite.scene:cult-breathe | 1142 | 33 | 133 | 2 |
| div.stage:opacity | 340 | 50 | 150 | 6 |

Longest frames: 609 ms (style/layout/paint) · 204 ms (hn 176) · 149 ms (hn 55) · 136 ms (hn 110) · 124 ms (Lf 82)

## Round III

Clicks by kind: place 5× p50 85 p95 114 · recruit 7× p50 138 p95 222 · pay 8× p50 147 p95 258 · pick 1× p50 108 p95 108 · choose 5× p50 78 p95 186 · next-round 1× p50 82 p95 82

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7766 | 33 | 667 | 2 |
| span.tc-line:tcline | 3999 | 33 | 200 | 3 |
| span.cs-stack:js | 3528 | 33 | 217 | 3 |
| div.path-inner:js | 4017 | 33 | 217 | 2 |
| div.piece-flight.piece-res:js | 3164 | 33 | 217 | 2 |
| svg.leader:cult-breathe | 2097 | 33 | 667 | 3 |
| g.blink:cult-blink | 2097 | 33 | 667 | 3 |
| img.sprite.scene:cult-shift | 2097 | 33 | 667 | 3 |
| img.sprite.scene:cult-breathe | 2097 | 33 | 667 | 3 |
| span.worker-fig:panelland-under | 1420 | 33 | 200 | 4 |
| span.tick.num:bump | 2265 | 33 | 133 | 2 |
| path.wash:fill | 393 | 67 | 200 | 10 |

Longest frames: 674 ms (style/layout/paint) · 241 ms (hn 220) · 204 ms (hn 69) · 187 ms (Lf 114) · 179 ms (hn 152)
