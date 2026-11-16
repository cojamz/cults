# Perf rig: ans-1

2026-11-03T15:17:51.706Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 6 min · game NOT finished

Verdict: FAIL (8)
- round I: clicks p95 283 ms (bar 100)
- round II: clicks p95 351 ms (bar 100)
- round II: hovers p95 215 ms (bar 100)
- round III: hovers p95 140 ms (bar 100)
- leak: 3542 elements vs 2952 after a reload
- leak: 558 listeners vs 507 after a reload
- leak: heap 20.1 MB vs 11.5 MB after a reload
- the game did not finish (harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot)

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 96 / 283 | 53 / 83 | 33 | 3 | 317 | 22 | 4 | 13 | 2490 | 492 | 13.3 |
| II | 108 / 351 | 68 / 215 | 33 | 4 | 700 | 20 | 2 | 3 | 3575 | 549 | 17.6 |
| III | – / – | 72 / 140 | 33 | 2 | 667 | 5 | – | – | 3942 | 577 | 20.9 |

Click phases (18 clicks that redrew the table, ms, median / p90): waiting for the browser 22 / 49 · rules 6 / 12 · React render and layout effects 26 / 63 · effects 16 / 31 · to the frame that shows it 14 / 27 · that frame painted (the rig's next frame) 24 / 228

Leak control on the last turn: unbroken game 3542 elements, 558 listeners, 20.1 MB; after a reload 2952, 507, 11.5 MB.

## Round I

Clicks by kind: place 3× p50 86 p95 86 · choose 5× p50 96 p95 283 · recruit 3× p50 – p95 – · pay 3× p50 103 p95 110 · next-round 1× p50 159 p95 159 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3372 | 33 | 317 | 3 |
| span.cs-stack:js | 1708 | 33 | 167 | 5 |
| span.tc-line:tcline | 2101 | 33 | 200 | 4 |
| div.path-inner:js | 1697 | 33 | 133 | 4 |
| div.piece-flight.piece-res:js | 1462 | 33 | 150 | 3 |
| span.worker-fig:panelland-under | 826 | 33 | 200 | 4 |
| span.tick.num:bump | 1078 | 33 | 133 | 3 |
| div.stage:opacity | 806 | 33 | 200 | 4 |
| span.tick.dip:bump | 582 | 50 | 133 | 5 |
| button.btn.lt-done:background-color | 720 | 33 | 200 | 4 |
| path.wash:fill | 403 | 50 | 200 | 7 |
| span.worker:js | 703 | 33 | 117 | 4 |

Longest frames: 337 ms (style/layout/paint) · 216 ms (style/layout/paint) · 187 ms (hn 171) · 184 ms (hn 166) · 171 ms (style/layout/paint)

## Round II

Clicks by kind: place 4× p50 79 p95 79 · recruit 4× p50 140 p95 160 · pay 4× p50 102 p95 116 · choose 2× p50 351 p95 351 · next-round 1× p50 108 p95 108 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5417 | 33 | 700 | 3 |
| span.tc-line:tcline | 2913 | 33 | 233 | 4 |
| div.path-inner:js | 2592 | 33 | 233 | 4 |
| span.cs-stack:js | 2442 | 33 | 233 | 4 |
| button.card.lt-card:js | 1420 | 50 | 517 | 5 |
| div.piece-flight.piece-res:js | 2266 | 33 | 233 | 3 |
| span.worker-fig:panelland-under | 1214 | 50 | 233 | 5 |
| span.tick.num:bump | 1310 | 33 | 117 | 4 |
| span.worker:js | 822 | 50 | 217 | 6 |
| div.as-card:js | 1197 | 33 | 233 | 4 |
| b.deck-join-tag.ghost-layer:js | 383 | 67 | 517 | 11 |
| span.worker:land | 795 | 33 | 217 | 5 |

Longest frames: 715 ms (style/layout/paint) · 470 ms (hn 335) · 217 ms (hn 210) · 214 ms (hn 177) · 191 ms (hn 166)

## Round III

Clicks by kind: place 8× p50 – p95 – · 8 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.lead:cult-scheme | 3001 | 33 | 667 | 2 |
| svg.leader:cult-breathe | 3001 | 33 | 667 | 2 |
| g.blink:cult-blink | 3001 | 33 | 667 | 2 |
| i.cs-min:cs-bob-eager | 3001 | 33 | 667 | 2 |
| i.cs-min:cs-bob | 3001 | 33 | 667 | 2 |
| img.sprite.scene:cult-shift | 3001 | 33 | 667 | 2 |
| img.sprite.scene:cult-breathe | 3001 | 33 | 667 | 2 |
| b.seat-delta.up:seatdelta | 1098 | 33 | 667 | 3 |
| button.card.lt-card:js | 756 | 33 | 433 | 3 |
| div.flight.shop-out:js | 575 | 33 | 433 | 3 |
| g.glow:opacity | 508 | 33 | 117 | 3 |
| path.edge-lit:opacity | 508 | 33 | 117 | 3 |

Longest frames: 687 ms (style/layout/paint) · 355 ms (hn 229) · 257 ms (style/layout/paint) · 129 ms (style/layout/paint) · 125 ms (hn 106)

Frames over 2 s, with the screen at the time:
- 2474 ms · setup · prompt "P4 is picking a cloak ···" · hover "" · options 

Errors:
- harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot
- harness: 8 clicks in a row changed nothing at round III
