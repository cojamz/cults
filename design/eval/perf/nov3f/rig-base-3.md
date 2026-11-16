# Perf rig: base-3

2026-11-03T18:03:37.562Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (9)
- round I: clicks p95 198 ms (bar 100)
- round I: hovers p95 126 ms (bar 100)
- round II: clicks p95 304 ms (bar 100)
- round III: clicks p95 225 ms (bar 100)
- round III: hovers p95 165 ms (bar 100)
- idle busy grows 3% → 7% over the game
- leak: 6290 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20.2 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 110 / 198 | 46 / 126 | 33 | 2 | 283 | 13 | 3 | 8 | 2490 | 492 | 13.5 |
| II | 109 / 304 | 57 / 92 | 33 | 3 | 683 | 20 | 1 | 4 | 3575 | 549 | 17.6 |
| III | 137 / 225 | 56 / 165 | 33 | 3 | 717 | 41 | 7 | 41 | 3945 | 577 | 20.7 |

Click phases (43 clicks that redrew the table, ms, median / p90): waiting for the browser 20 / 36 · rules 6 / 14 · React render and layout effects 42 / 97 · effects 16 / 34 · to the frame that shows it 16 / 24 · that frame painted (the rig's next frame) 26 / 56

Leak control on the last turn: unbroken game 6290 elements, 856 listeners, 20.2 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 114 p95 198 · choose 5× p50 96 p95 191 · recruit 3× p50 162 p95 171 · pay 3× p50 109 p95 137 · next-round 1× p50 89 p95 89

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3283 | 33 | 250 | 2 |
| span.cs-stack:js | 1592 | 33 | 233 | 3 |
| span.tc-line:tcline | 1976 | 33 | 233 | 2 |
| div.path-inner:js | 1703 | 17 | 133 | 2 |
| span.tick.num:bump | 1169 | 33 | 133 | 2 |
| span.worker-fig:panelland-under | 757 | 33 | 233 | 3 |
| g.blink:cult-blink | 1106 | 33 | 283 | 2 |
| svg.leader:cult-breathe | 1078 | 17 | 283 | 2 |
| img.sprite.scene:cult-shift | 1078 | 17 | 283 | 2 |
| img.sprite.scene:cult-breathe | 1051 | 17 | 283 | 2 |
| span.base:opacity | 665 | 33 | 233 | 3 |
| path.wash:fill | 170 | 67 | 233 | 11 |

Longest frames: 265 ms (style/layout/paint) · 221 ms (hn 191) · 220 ms (hn 193) · 123 ms (style/layout/paint) · 119 ms (Lf 98)

## Round II

Clicks by kind: place 4× p50 70 p95 75 · recruit 4× p50 228 p95 304 · pay 4× p50 146 p95 155 · choose 2× p50 243 p95 243 · next-round 1× p50 63 p95 63

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5410 | 33 | 683 | 2 |
| span.tc-line:tcline | 3199 | 33 | 217 | 3 |
| span.cs-stack:js | 2666 | 33 | 217 | 3 |
| div.path-inner:js | 2725 | 33 | 233 | 2 |
| div.as-card:js | 1305 | 33 | 217 | 3 |
| span.worker-fig:panelland-under | 945 | 33 | 217 | 4 |
| svg.leader:cult-breathe | 1152 | 33 | 250 | 3 |
| g.blink:cult-blink | 1152 | 33 | 250 | 3 |
| img.sprite.scene:cult-shift | 1152 | 33 | 250 | 3 |
| img.sprite.scene:cult-breathe | 1152 | 33 | 250 | 3 |
| path.wash:fill | 344 | 67 | 217 | 9 |
| span.tick.num:bump | 1500 | 33 | 133 | 2 |

Longest frames: 692 ms (style/layout/paint) · 246 ms (hn 213) · 224 ms (Lf 170, FrameRequestCallback 6) · 217 ms (hn 90) · 172 ms (Lf 131)

## Round III

Clicks by kind: place 5× p50 74 p95 115 · recruit 7× p50 171 p95 215 · pay 8× p50 144 p95 244 · pick 1× p50 118 p95 118 · choose 5× p50 95 p95 158 · next-round 1× p50 87 p95 87

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7451 | 33 | 717 | 3 |
| span.tc-line:tcline | 3655 | 33 | 233 | 4 |
| span.cs-stack:js | 3292 | 33 | 233 | 4 |
| div.path-inner:js | 3987 | 33 | 200 | 2 |
| span.tick.num:bump | 2210 | 33 | 133 | 3 |
| div.piece-flight.piece-res:js | 3219 | 33 | 200 | 2 |
| svg.leader:cult-breathe | 2050 | 33 | 717 | 3 |
| g.blink:cult-blink | 2050 | 33 | 717 | 3 |
| img.sprite.scene:cult-shift | 2050 | 33 | 717 | 3 |
| img.sprite.scene:cult-breathe | 2050 | 33 | 717 | 3 |
| button.card.lt-card:js | 1810 | 33 | 283 | 3 |
| i.cs-min:cs-bob | 763 | 50 | 717 | 7 |

Longest frames: 724 ms (style/layout/paint) · 274 ms (style/layout/paint) · 274 ms (hn 112) · 210 ms (hn 176) · 210 ms (hn 186)
