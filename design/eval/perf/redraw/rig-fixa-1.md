# Perf rig: fixa-1

2026-11-01T08:39:09.421Z · http://localhost:5312 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (12)
- round I: clicks p95 189 ms (bar 100)
- round I: show frames p95 49.9 ms (bar 33.4)
- round II: clicks p95 362 ms (bar 100)
- round II: hovers p95 122 ms (bar 100)
- round II: show frames p95 50 ms (bar 33.4)
- round II: 8% of show frames hitch (bar 5%)
- round III: clicks p95 496 ms (bar 100)
- round III: hovers p95 124 ms (bar 100)
- clicks p95 grows 189 → 496 ms over the game
- leak: 6365 elements vs 5280 after a reload
- leak: 895 listeners vs 730 after a reload
- leak: heap 19.1 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 108 / 189 | 41 / 70 | 50 | 5 | 433 | 34 | 3 | 5 | 2363 | 499 | 13 |
| II | 139 / 362 | 57 / 122 | 50 | 8 | 750 | 67 | 5 | 31 | 3483 | 575 | 16.2 |
| III | 171 / 496 | 50 / 124 | 33 | 5 | 767 | 42 | 1 | 2 | 4043 | 595 | 19.7 |

Click phases (32 clicks that redrew the table, ms, median / p90): waiting for the browser 23 / 40 · rules 7 / 28 · React render and layout effects 40 / 102 · effects 26 / 47 · to the frame that shows it 18 / 49 · that frame painted (the rig's next frame) 34 / 77

Leak control on the last turn: unbroken game 6365 elements, 895 listeners, 19.1 MB; after a reload 5280, 730, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 103 p95 104 · choose 8× p50 108 p95 179 · recruit 3× p50 – p95 – · pay 3× p50 145 p95 189 · next-round 1× p50 160 p95 160 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 2825 | 50 | 217 | 6 |
| span.tc-line:tcline | 2232 | 50 | 383 | 5 |
| span.cs-stack:js | 1424 | 50 | 383 | 7 |
| svg.leader:cult-breathe | 1333 | 50 | 267 | 7 |
| g.blink:cult-blink | 1333 | 50 | 267 | 7 |
| img.sprite.scene:cult-shift | 1333 | 50 | 267 | 7 |
| img.sprite.scene:cult-breathe | 1043 | 50 | 267 | 8 |
| span.tick.num:bump | 817 | 50 | 183 | 10 |
| span.lead:js | 480 | 67 | 267 | 13 |
| span.worker-fig:panelland-under | 1021 | 50 | 383 | 6 |
| div.path-inner:js | 1598 | 33 | 433 | 3 |
| span.base:opacity | 955 | 50 | 217 | 5 |

Longest frames: 438 ms (hn 318, FrameRequestCallback 16) · 336 ms (hn 253, FrameRequestCallback 14) · 204 ms (style/layout/paint) · 202 ms (hn 164, ResizeObserverCallback 8) · 176 ms (hn 25, Nf 104)

## Round II

Clicks by kind: place 4× p50 77 p95 77 · choose 7× p50 139 p95 362 · recruit 4× p50 197 p95 197 · pay 3× p50 221 p95 245 · pick 3× p50 57 p95 77 · next-round 1× p50 120 p95 120 · 6 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 4665 | 50 | 483 | 8 |
| span.tc-line:tcline | 2859 | 50 | 483 | 9 |
| span.cs-stack:js | 2509 | 50 | 483 | 8 |
| div.path-inner:js | 1965 | 50 | 267 | 8 |
| svg.leader:cult-breathe | 2073 | 50 | 383 | 7 |
| g.blink:cult-blink | 2073 | 50 | 383 | 7 |
| img.sprite.scene:cult-shift | 2073 | 50 | 383 | 7 |
| img.sprite.scene:cult-breathe | 2073 | 50 | 383 | 7 |
| button.card.lt-card:js | 1174 | 83 | 750 | 12 |
| div.piece-flight.piece-res:js | 1873 | 50 | 483 | 7 |
| span.base:opacity | 1258 | 50 | 283 | 9 |
| i.cs-min:cs-bob-eager | 1275 | 67 | 383 | 8 |

Longest frames: 751 ms (style/layout/paint) · 330 ms (hn 296) · 293 ms (ca 5) · 288 ms (hn 191) · 266 ms (Nf 156, FrameRequestCallback 6)

## Round III

Clicks by kind: place 5× p50 171 p95 171 · recruit 5× p50 255 p95 255 · pay 5× p50 145 p95 203 · choose 3× p50 281 p95 496 · pick 1× p50 188 p95 188 · next-round 1× p50 – p95 – · 8 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7778 | 50 | 767 | 5 |
| span.tc-line:tcline | 3949 | 50 | 217 | 6 |
| span.cs-stack:js | 3346 | 50 | 283 | 6 |
| div.path-inner:js | 3305 | 33 | 233 | 5 |
| span.tick.num:bump | 2081 | 50 | 150 | 7 |
| svg.leader:cult-breathe | 3270 | 33 | 767 | 4 |
| g.blink:cult-blink | 3270 | 33 | 767 | 4 |
| img.sprite.scene:cult-shift | 3270 | 33 | 767 | 4 |
| img.sprite.scene:cult-breathe | 3270 | 33 | 767 | 4 |
| div.piece-flight.piece-res:js | 2845 | 33 | 233 | 4 |
| div.seat-stolen:brief-out | 1516 | 50 | 133 | 6 |
| span.worker:js | 1108 | 50 | 200 | 8 |

Longest frames: 776 ms (style/layout/paint) · 441 ms (Lf 50, Nf 254) · 314 ms (hn 278) · 259 ms (hn 101) · 253 ms (Nf 189)
