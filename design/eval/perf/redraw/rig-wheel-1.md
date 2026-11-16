# Perf rig: wheel-1

2026-11-01T10:05:19.286Z · http://localhost:5315 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 170 ms (bar 100)
- round II: clicks p95 207 ms (bar 100)
- round III: clicks p95 180 ms (bar 100)
- leak: 6548 elements vs 5430 after a reload
- leak: 914 listeners vs 738 after a reload
- leak: heap 18.8 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 82 / 170 | 38 / 68 | 17 | 2 | 233 | 13 | 2 | 5 | 2363 | 499 | 13 |
| II | 114 / 207 | 63 / 86 | 17 | 2 | 483 | 18 | 6 | 28 | 3527 | 583 | 16.2 |
| III | 91 / 180 | 46 / 66 | 33 | 2 | 717 | 23 | 3 | 6 | 3924 | 582 | 20.8 |

Click phases (44 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 26 · rules 4 / 11 · React render and layout effects 30 / 66 · effects 16 / 30 · to the frame that shows it 11 / 20 · that frame painted (the rig's next frame) 19 / 38

Leak control on the last turn: unbroken game 6548 elements, 914 listeners, 18.8 MB; after a reload 5430, 738, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 96 p95 96 · choose 8× p50 76 p95 170 · recruit 3× p50 136 p95 141 · pay 3× p50 118 p95 138 · next-round 1× p50 70 p95 70 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.tc-line:tcline | 1855 | 33 | 150 | 2 |
| b.seat-delta.up:seatdelta | 3174 | 17 | 233 | 1 |
| div.piece-flight.piece-res:js | 1584 | 17 | 150 | 2 |
| span.cs-stack:js | 1567 | 33 | 150 | 2 |
| svg.leader:cult-breathe | 1245 | 17 | 167 | 2 |
| g.blink:cult-blink | 1245 | 17 | 167 | 2 |
| img.sprite.scene:cult-shift | 1245 | 17 | 167 | 2 |
| span.base:opacity | 661 | 33 | 150 | 3 |
| div.path-inner:js | 1955 | 17 | 150 | 1 |
| span.worker-fig:panelland-under | 756 | 33 | 133 | 2 |
| div.as-card:js | 712 | 17 | 150 | 2 |
| button.fb.lt-rate:background-color | 133 | 67 | 150 | 10 |

Longest frames: 247 ms (style/layout/paint) · 161 ms (hn 139) · 150 ms (hn 135) · 136 ms (style/layout/paint) · 132 ms (hn 10, Lf 84)

## Round II

Clicks by kind: place 4× p50 78 p95 79 · choose 7× p50 118 p95 207 · recruit 4× p50 151 p95 151 · pay 4× p50 150 p95 157 · next-round 1× p50 76 p95 76 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.cs-stack:js | 3147 | 33 | 183 | 2 |
| b.seat-delta.up:seatdelta | 5436 | 17 | 217 | 1 |
| span.tc-line:tcline | 3933 | 17 | 183 | 1 |
| button.card.lt-card:js | 1904 | 33 | 483 | 2 |
| span.tick.num:bump | 1628 | 33 | 150 | 2 |
| div.path-inner:js | 3252 | 17 | 117 | 1 |
| svg.leader:cult-breathe | 1576 | 33 | 217 | 2 |
| g.blink:cult-blink | 1576 | 33 | 217 | 2 |
| img.sprite.scene:cult-shift | 1576 | 33 | 217 | 2 |
| img.sprite.scene:cult-breathe | 1576 | 33 | 217 | 2 |
| div.piece-flight.piece-res:js | 2962 | 17 | 117 | 1 |
| span.base:opacity | 1386 | 17 | 183 | 2 |

Longest frames: 493 ms (style/layout/paint) · 196 ms (hn 178) · 189 ms (Lf 127) · 155 ms (hn 127) · 140 ms (Lf 100)

## Round III

Clicks by kind: place 5× p50 92 p95 92 · choose 10× p50 86 p95 180 · recruit 5× p50 144 p95 144 · pay 5× p50 123 p95 183 · pick 3× p50 59 p95 66 · next-round 1× p50 64 p95 64 · 6 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7824 | 33 | 717 | 2 |
| span.tc-line:tcline | 5056 | 33 | 233 | 2 |
| span.cs-stack:js | 4543 | 33 | 233 | 2 |
| svg.leader:cult-breathe | 2484 | 33 | 717 | 2 |
| g.blink:cult-blink | 2484 | 33 | 717 | 2 |
| img.sprite.scene:cult-shift | 2484 | 33 | 717 | 2 |
| img.sprite.scene:cult-breathe | 2484 | 33 | 717 | 2 |
| span.tick.num:bump | 2303 | 33 | 183 | 2 |
| div.path-inner:js | 3764 | 33 | 217 | 1 |
| button.card.lt-card:js | 1841 | 33 | 233 | 2 |
| span.worker-fig:panelland-under | 1661 | 33 | 233 | 2 |
| div.piece-flight.piece-res:js | 3161 | 17 | 233 | 1 |

Longest frames: 728 ms (style/layout/paint) · 224 ms (hn 214) · 216 ms (hn 88) · 192 ms (hn 5, hn 169) · 175 ms (style/layout/paint)
