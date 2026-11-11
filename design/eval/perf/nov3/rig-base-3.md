# Perf rig: base-3

2026-11-03T15:30:20.029Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 6 min · game NOT finished

Verdict: FAIL (9)
- round I: clicks p95 182 ms (bar 100)
- round I: hovers p95 115 ms (bar 100)
- round II: clicks p95 322 ms (bar 100)
- round II: hovers p95 134 ms (bar 100)
- round III: hovers p95 154 ms (bar 100)
- leak: 3545 elements vs 2903 after a reload
- leak: 558 listeners vs 500 after a reload
- leak: heap 20 MB vs 11.6 MB after a reload
- the game did not finish (harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot)

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 121 / 182 | 60 / 115 | 33 | 3 | 317 | 21 | 3 | 13 | 2490 | 492 | 13.4 |
| II | 170 / 322 | 63 / 134 | 33 | 3 | 633 | 28 | 1 | 0 | 3575 | 551 | 17.7 |
| III | – / – | 54 / 154 | 33 | 2 | 883 | 8 | – | – | 3945 | 577 | 20.8 |

Click phases (16 clicks that redrew the table, ms, median / p90): waiting for the browser 19 / 37 · rules 7 / 12 · React render and layout effects 40 / 78 · effects 29 / 54 · to the frame that shows it 17 / 58 · that frame painted (the rig's next frame) 25 / 51

Leak control on the last turn: unbroken game 3545 elements, 558 listeners, 20 MB; after a reload 2903, 500, 11.6 MB.

## Round I

Clicks by kind: place 3× p50 – p95 – · choose 5× p50 133 p95 146 · recruit 3× p50 63 p95 63 · pay 3× p50 121 p95 182 · next-round 1× p50 95 p95 95 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 2989 | 33 | 317 | 3 |
| span.tc-line:tcline | 1866 | 33 | 250 | 4 |
| span.cs-stack:js | 1366 | 33 | 133 | 5 |
| svg.leader:cult-breathe | 1936 | 33 | 250 | 2 |
| g.blink:cult-blink | 1936 | 33 | 250 | 2 |
| img.sprite.scene:cult-shift | 1936 | 33 | 250 | 2 |
| span.tick.num:bump | 945 | 33 | 117 | 4 |
| span.worker-fig:panelland-under | 716 | 34 | 200 | 5 |
| span.tick.dip:bump | 588 | 50 | 133 | 6 |
| span.lead:cult-scheme | 1171 | 33 | 250 | 3 |
| i.cs-min:cs-bob | 1135 | 17 | 250 | 3 |
| span.base:opacity | 1015 | 33 | 250 | 3 |

Longest frames: 330 ms (style/layout/paint) · 217 ms (hn 19, Lf 143) · 188 ms (hn 157) · 172 ms (style/layout/paint) · 157 ms (Lf 119)

## Round II

Clicks by kind: place 4× p50 – p95 – · recruit 4× p50 – p95 – · pay 4× p50 170 p95 200 · choose 2× p50 322 p95 322 · next-round 1× p50 130 p95 130 · 8 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5933 | 33 | 633 | 3 |
| span.tc-line:tcline | 2860 | 33 | 233 | 3 |
| span.cs-stack:js | 2709 | 33 | 233 | 3 |
| svg.leader:cult-breathe | 2453 | 33 | 300 | 3 |
| g.blink:cult-blink | 2453 | 33 | 300 | 3 |
| img.sprite.scene:cult-shift | 2453 | 33 | 300 | 3 |
| img.sprite.scene:cult-breathe | 2453 | 33 | 300 | 3 |
| div.path-inner:js | 2326 | 33 | 250 | 3 |
| span.tick.num:bump | 1323 | 33 | 233 | 5 |
| button.card.lt-card:js | 1393 | 33 | 250 | 4 |
| div.piece-flight.piece-res:js | 1949 | 33 | 117 | 2 |
| span.base:opacity | 1244 | 33 | 233 | 3 |

Longest frames: 646 ms (style/layout/paint) · 265 ms (Lf 214) · 248 ms (FrameRequestCallback 146) · 238 ms (hn 98) · 187 ms (hn 153)

## Round III

Clicks by kind: place 8× p50 – p95 – · 8 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| svg.leader:cult-breathe | 3043 | 33 | 883 | 2 |
| g.blink:cult-blink | 3043 | 33 | 883 | 2 |
| i.cs-min:cs-bob | 3043 | 33 | 883 | 2 |
| img.sprite.scene:cult-shift | 3043 | 33 | 883 | 2 |
| img.sprite.scene:cult-breathe | 3043 | 33 | 883 | 2 |
| span.lead:cult-scheme | 3043 | 33 | 883 | 2 |
| i.cs-min:cs-bob-eager | 3043 | 33 | 883 | 2 |
| b.seat-delta.up:seatdelta | 1111 | 33 | 883 | 3 |
| g.glow:opacity | 274 | 50 | 100 | 8 |
| path.edge-lit:opacity | 274 | 50 | 100 | 8 |
| button.card.lt-card:transform | 1819 | 17 | 67 | 1 |
| div.path-inner:js | 542 | 33 | 100 | 3 |

Longest frames: 886 ms (style/layout/paint) · 225 ms (hn 97) · 198 ms (style/layout/paint) · 197 ms (hn 158) · 155 ms (hn 136)

Errors:
- harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot
- harness: 8 clicks in a row changed nothing at round III
