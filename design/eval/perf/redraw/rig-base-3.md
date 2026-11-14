# Perf rig: base-3

2026-11-01T08:54:41.474Z · http://localhost:5310 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 236 ms (bar 100)
- round II: clicks p95 160 ms (bar 100)
- round III: clicks p95 195 ms (bar 100)
- round III: idle table busy 12% (bar 10%)
- idle busy grows 2% → 12% over the game
- leak: heap 19 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 85 / 236 | 39 / 84 | 17 | 1 | 200 | 10 | 2 | 7 | 2363 | 499 | 13.1 |
| II | 92 / 160 | 57 / 64 | 17 | 1 | 417 | 11 | 4 | 19 | 3539 | 585 | 16.2 |
| III | 128 / 195 | 48 / 83 | 17 | 1 | 917 | 28 | 12 | 2 | 4041 | 595 | 19.5 |

Click phases (36 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 22 · rules 13 / 23 · React render and layout effects 29 / 55 · effects 15 / 26 · to the frame that shows it 12 / 33 · that frame painted (the rig's next frame) 21 / 39

Leak control on the last turn: unbroken game 5806 elements, 788 listeners, 19 MB; after a reload 5280, 730, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 85 p95 103 · choose 8× p50 65 p95 236 · recruit 3× p50 95 p95 95 · pay 3× p50 134 p95 158 · next-round 1× p50 67 p95 67 · 2 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.cs-stack:js | 1789 | 17 | 200 | 2 |
| b.seat-delta.up:seatdelta | 3493 | 17 | 200 | 1 |
| div.piece-flight.piece-res:js | 1625 | 17 | 167 | 2 |
| span.tc-line:tcline | 2344 | 17 | 150 | 1 |
| span.tick.num:bump | 1099 | 33 | 100 | 2 |
| span.worker-fig:panelland-under | 1021 | 33 | 150 | 2 |
| div.path-inner:js | 1925 | 17 | 167 | 1 |
| path.wash:fill | 686 | 17 | 150 | 2 |
| button.card.lt-card:js | 585 | 17 | 83 | 2 |
| button.fb.lt-rate:opacity | 585 | 17 | 150 | 2 |
| button.card.lt-card:opacity | 585 | 17 | 150 | 2 |
| span.face:opacity | 559 | 17 | 150 | 2 |

Longest frames: 230 ms (style/layout/paint) · 188 ms (style/layout/paint) · 169 ms (hn 147) · 141 ms (hn 92, TimerHandler:setTimeout 25) · 133 ms (Nf 92)

## Round II

Clicks by kind: place 4× p50 65 p95 65 · choose 7× p50 103 p95 160 · recruit 4× p50 114 p95 114 · pay 3× p50 112 p95 117 · pick 3× p50 72 p95 81 · next-round 1× p50 75 p95 75 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 6091 | 17 | 233 | 1 |
| span.tc-line:tcline | 3742 | 17 | 233 | 1 |
| span.cs-stack:js | 3056 | 17 | 233 | 1 |
| div.path-inner:js | 2771 | 17 | 167 | 1 |
| div.piece-flight.piece-res:js | 2636 | 17 | 167 | 1 |
| i.cs-min:cs-bob | 1221 | 17 | 167 | 2 |
| span.lead:cult-scheme | 1221 | 17 | 167 | 2 |
| i.cs-min:cs-bob-eager | 1193 | 17 | 167 | 2 |
| svg.leader:cult-breathe | 2040 | 17 | 167 | 1 |
| g.blink:cult-blink | 2040 | 17 | 167 | 1 |
| img.sprite.scene:cult-shift | 2040 | 17 | 167 | 1 |
| img.sprite.scene:cult-breathe | 2040 | 17 | 167 | 1 |

Longest frames: 425 ms (style/layout/paint) · 208 ms (hn 201) · 166 ms (hn 141) · 165 ms (hn 146) · 156 ms (Nf 98)

## Round III

Clicks by kind: place 5× p50 86 p95 161 · recruit 5× p50 131 p95 161 · pay 5× p50 119 p95 145 · choose 3× p50 161 p95 195 · pick 1× p50 88 p95 88 · next-round 1× p50 74 p95 74 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7832 | 33 | 917 | 2 |
| span.cs-stack:js | 3544 | 33 | 167 | 2 |
| svg.leader:cult-breathe | 2628 | 33 | 917 | 2 |
| g.blink:cult-blink | 2628 | 33 | 917 | 2 |
| img.sprite.scene:cult-shift | 2628 | 33 | 917 | 2 |
| img.sprite.scene:cult-breathe | 2628 | 33 | 917 | 2 |
| span.tc-line:tcline | 4693 | 17 | 167 | 1 |
| div.path-inner:js | 3791 | 17 | 167 | 1 |
| span.lead:cult-scheme | 1257 | 33 | 917 | 3 |
| i.cs-min:cs-bob | 1252 | 33 | 917 | 3 |
| i.cs-min:cs-bob-eager | 1169 | 33 | 917 | 3 |
| span.worker-fig:panelland-under | 1506 | 33 | 167 | 2 |

Longest frames: 925 ms (style/layout/paint) · 178 ms (style/layout/paint) · 170 ms (Nf 136) · 157 ms (hn 72) · 154 ms (hn 146)
