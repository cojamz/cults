# Perf rig: ans-3

2026-11-03T15:29:59.531Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 6 min · game NOT finished

Verdict: FAIL (9)
- round I: clicks p95 429 ms (bar 100)
- round I: hovers p95 103 ms (bar 100)
- round II: clicks p95 191 ms (bar 100)
- round II: hovers p95 157 ms (bar 100)
- round III: hovers p95 134 ms (bar 100)
- leak: 3542 elements vs 2952 after a reload
- leak: 558 listeners vs 507 after a reload
- leak: heap 20.3 MB vs 11.6 MB after a reload
- the game did not finish (harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot)

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 111 / 429 | 63 / 103 | 33 | 4 | 283 | 20 | 4 | 19 | 2490 | 492 | 13.4 |
| II | 105 / 191 | 68 / 157 | 33 | 3 | 750 | 31 | 2 | 6 | 3575 | 549 | 17.8 |
| III | – / – | 70 / 134 | 33 | 2 | 917 | 4 | – | – | 3942 | 578 | 21 |

Click phases (17 clicks that redrew the table, ms, median / p90): waiting for the browser 22 / 47 · rules 6 / 24 · React render and layout effects 32 / 60 · effects 18 / 63 · to the frame that shows it 11 / 33 · that frame painted (the rig's next frame) 24 / 53

Leak control on the last turn: unbroken game 3542 elements, 558 listeners, 20.3 MB; after a reload 2952, 507, 11.6 MB.

## Round I

Clicks by kind: place 3× p50 100 p95 100 · choose 5× p50 116 p95 429 · recruit 3× p50 167 p95 167 · pay 3× p50 111 p95 209 · next-round 1× p50 108 p95 108 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3122 | 33 | 283 | 4 |
| span.tc-line:tcline | 1738 | 33 | 267 | 4 |
| span.cs-stack:js | 1686 | 33 | 267 | 4 |
| span.tick.num:bump | 992 | 50 | 283 | 5 |
| svg.leader:cult-breathe | 1614 | 33 | 300 | 3 |
| g.blink:cult-blink | 1614 | 33 | 300 | 3 |
| img.sprite.scene:cult-shift | 1614 | 33 | 300 | 3 |
| div.path-inner:js | 1516 | 33 | 117 | 3 |
| div.piece-flight.piece-res:js | 1383 | 33 | 133 | 3 |
| img.sprite.scene:cult-breathe | 1239 | 33 | 300 | 3 |
| span.tick.dip:bump | 594 | 50 | 133 | 6 |
| span.lead:cult-scheme | 873 | 33 | 300 | 4 |

Longest frames: 281 ms (hn 246) · 256 ms (style/layout/paint) · 234 ms (hn 212) · 214 ms (hn 169) · 212 ms (hn 171)

## Round II

Clicks by kind: place 4× p50 78 p95 83 · recruit 4× p50 105 p95 105 · pay 4× p50 109 p95 180 · choose 2× p50 191 p95 191 · next-round 1× p50 – p95 – · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5430 | 33 | 750 | 3 |
| span.tc-line:tcline | 3477 | 33 | 200 | 4 |
| span.cs-stack:js | 2920 | 33 | 200 | 4 |
| div.path-inner:js | 2723 | 33 | 517 | 3 |
| div.as-card:js | 1759 | 33 | 250 | 3 |
| button.card.lt-card:js | 1308 | 33 | 317 | 4 |
| svg.leader:cult-breathe | 1523 | 33 | 333 | 3 |
| g.blink:cult-blink | 1523 | 33 | 333 | 3 |
| img.sprite.scene:cult-shift | 1523 | 33 | 333 | 3 |
| img.sprite.scene:cult-breathe | 1523 | 33 | 333 | 3 |
| span.worker-fig:panelland-under | 1520 | 33 | 517 | 3 |
| span.worker:js | 1066 | 33 | 517 | 4 |

Longest frames: 770 ms (style/layout/paint) · 472 ms (hn 423) · 287 ms (hn 187) · 258 ms (hn 150) · 225 ms (style/layout/paint)

## Round III

Clicks by kind: place 8× p50 – p95 – · 8 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.lead:cult-scheme | 3080 | 17 | 917 | 1 |
| svg.leader:cult-breathe | 3080 | 17 | 917 | 1 |
| g.blink:cult-blink | 3080 | 17 | 917 | 1 |
| i.cs-min:cs-bob-eager | 3080 | 17 | 917 | 1 |
| i.cs-min:cs-bob | 3080 | 17 | 917 | 1 |
| img.sprite.scene:cult-shift | 3080 | 17 | 917 | 1 |
| img.sprite.scene:cult-breathe | 3080 | 17 | 917 | 1 |
| g.glow:opacity | 1448 | 17 | 83 | 2 |
| path.edge-lit:opacity | 1448 | 17 | 83 | 2 |
| b.seat-delta.up:seatdelta | 1118 | 33 | 917 | 2 |
| button.card.lt-card:transform | 1896 | 17 | 83 | 1 |
| span.face:transform | 1230 | 17 | 83 | 1 |

Longest frames: 924 ms (style/layout/paint) · 197 ms (FrameRequestCallback 7) · 123 ms (hn 103) · 106 ms (style/layout/paint) · 91 ms (hn 55)

Errors:
- harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot
- harness: 8 clicks in a row changed nothing at round III
