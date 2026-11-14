# Perf rig: base-2

2026-11-03T15:24:04.685Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 6 min · game NOT finished

Verdict: FAIL (9)
- round I: clicks p95 207 ms (bar 100)
- round I: hovers p95 283 ms (bar 100)
- round II: clicks p95 325 ms (bar 100)
- round II: hovers p95 179 ms (bar 100)
- round III: hovers p95 136 ms (bar 100)
- leak: 3610 elements vs 2952 after a reload
- leak: 561 listeners vs 507 after a reload
- leak: heap 19.9 MB vs 11.6 MB after a reload
- the game did not finish (harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot)

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 114 / 207 | 54 / 283 | 33 | 3 | 350 | 19 | 3 | 9 | 2490 | 492 | 13.4 |
| II | 159 / 325 | 77 / 179 | 33 | 4 | 633 | 31 | 2 | 3 | 3575 | 549 | 17.7 |
| III | – / – | 69 / 136 | 33 | 3 | 917 | 7 | – | – | 3945 | 577 | 20.6 |

Click phases (18 clicks that redrew the table, ms, median / p90): waiting for the browser 20 / 48 · rules 6 / 15 · React render and layout effects 36 / 90 · effects 23 / 60 · to the frame that shows it 14 / 64 · that frame painted (the rig's next frame) 27 / 51

Leak control on the last turn: unbroken game 3610 elements, 561 listeners, 19.9 MB; after a reload 2952, 507, 11.6 MB.

## Round I

Clicks by kind: place 3× p50 73 p95 73 · choose 5× p50 118 p95 207 · recruit 3× p50 75 p95 75 · pay 3× p50 142 p95 167 · next-round 1× p50 111 p95 111 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3233 | 33 | 350 | 3 |
| span.cs-stack:js | 1785 | 33 | 183 | 4 |
| span.tc-line:tcline | 1969 | 33 | 183 | 3 |
| svg.leader:cult-breathe | 1638 | 33 | 217 | 3 |
| g.blink:cult-blink | 1638 | 33 | 217 | 3 |
| img.sprite.scene:cult-shift | 1638 | 33 | 217 | 3 |
| img.sprite.scene:cult-breathe | 1527 | 33 | 217 | 3 |
| div.path-inner:js | 1610 | 33 | 150 | 2 |
| span.tick.num:bump | 1001 | 33 | 133 | 3 |
| div.piece-flight.piece-res:js | 1470 | 33 | 150 | 2 |
| span.lead:cult-scheme | 854 | 33 | 200 | 3 |
| i.cs-min:cs-bob | 827 | 33 | 200 | 3 |

Longest frames: 363 ms (style/layout/paint) · 202 ms (Tf 137) · 197 ms (hn 155) · 176 ms (hn 143) · 173 ms (hn 157)

## Round II

Clicks by kind: place 4× p50 72 p95 72 · recruit 4× p50 134 p95 134 · pay 4× p50 159 p95 191 · choose 2× p50 325 p95 325 · next-round 1× p50 244 p95 244 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5598 | 33 | 633 | 4 |
| span.tc-line:tcline | 3070 | 33 | 183 | 4 |
| span.cs-stack:js | 3009 | 33 | 183 | 4 |
| div.path-inner:js | 2372 | 33 | 117 | 3 |
| span.tick.num:bump | 1332 | 33 | 117 | 5 |
| svg.leader:cult-breathe | 1604 | 33 | 383 | 4 |
| g.blink:cult-blink | 1604 | 33 | 383 | 4 |
| img.sprite.scene:cult-shift | 1604 | 33 | 383 | 4 |
| img.sprite.scene:cult-breathe | 1604 | 33 | 383 | 4 |
| div.piece-flight.piece-res:js | 2106 | 33 | 133 | 3 |
| span.base:opacity | 971 | 33 | 167 | 5 |
| span.worker-fig:panelland-under | 1107 | 33 | 167 | 4 |

Longest frames: 657 ms (style/layout/paint) · 290 ms (Lf 224) · 283 ms (hn 148) · 273 ms (hn 253) · 187 ms (Lf 131)

## Round III

Clicks by kind: place 8× p50 – p95 – · 8 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| svg.leader:cult-breathe | 3055 | 33 | 917 | 2 |
| g.blink:cult-blink | 3055 | 33 | 917 | 2 |
| i.cs-min:cs-bob | 3055 | 33 | 917 | 2 |
| img.sprite.scene:cult-shift | 3055 | 33 | 917 | 2 |
| img.sprite.scene:cult-breathe | 3055 | 33 | 917 | 2 |
| span.lead:cult-scheme | 3055 | 33 | 917 | 2 |
| i.cs-min:cs-bob-eager | 3055 | 33 | 917 | 2 |
| b.seat-delta.up:seatdelta | 1121 | 33 | 917 | 4 |
| button.card.lt-card:js | 752 | 33 | 217 | 3 |
| g.glow:opacity | 449 | 33 | 100 | 4 |
| path.edge-lit:opacity | 449 | 33 | 100 | 4 |
| button.card.lt-card:transform | 1392 | 17 | 83 | 1 |

Longest frames: 925 ms (style/layout/paint) · 296 ms (hn 242) · 205 ms (hn 84) · 138 ms (style/layout/paint) · 138 ms (hn 121)

Frames over 2 s, with the screen at the time:
- 2042 ms · setup · prompt "P4 is picking a cloak ···" · hover "" · options 

Errors:
- harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot
- harness: 8 clicks in a row changed nothing at round III
