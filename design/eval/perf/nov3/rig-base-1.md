# Perf rig: base-1

2026-11-03T15:18:04.916Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 6 min · game NOT finished

Verdict: FAIL (8)
- round I: clicks p95 203 ms (bar 100)
- round I: hovers p95 130 ms (bar 100)
- round II: clicks p95 267 ms (bar 100)
- round III: hovers p95 121 ms (bar 100)
- leak: 3608 elements vs 2952 after a reload
- leak: 561 listeners vs 507 after a reload
- leak: heap 19.8 MB vs 11.7 MB after a reload
- the game did not finish (harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot)

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 141 / 203 | 58 / 130 | 33 | 3 | 317 | 29 | 3 | 18 | 2490 | 492 | 13.4 |
| II | 149 / 267 | 67 / 88 | 33 | 3 | 867 | 21 | 1 | 2 | 3576 | 551 | 17.5 |
| III | – / – | 64 / 121 | 33 | 2 | 767 | 6 | – | – | 3943 | 577 | 20.5 |

Click phases (16 clicks that redrew the table, ms, median / p90): waiting for the browser 21 / 28 · rules 8 / 11 · React render and layout effects 42 / 93 · effects 30 / 48 · to the frame that shows it 19 / 44 · that frame painted (the rig's next frame) 32 / 55

Leak control on the last turn: unbroken game 3608 elements, 561 listeners, 19.8 MB; after a reload 2952, 507, 11.7 MB.

## Round I

Clicks by kind: place 3× p50 119 p95 119 · choose 5× p50 143 p95 203 · recruit 3× p50 – p95 – · pay 3× p50 132 p95 153 · next-round 1× p50 155 p95 155 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3504 | 33 | 317 | 3 |
| span.cs-stack:js | 1858 | 33 | 317 | 5 |
| span.tc-line:tcline | 2030 | 33 | 283 | 4 |
| div.path-inner:js | 1788 | 33 | 167 | 3 |
| div.piece-flight.piece-res:js | 1493 | 33 | 167 | 3 |
| span.tick.num:bump | 1057 | 33 | 150 | 4 |
| span.worker-fig:panelland-under | 1050 | 33 | 317 | 4 |
| span.base:opacity | 972 | 33 | 317 | 4 |
| svg.leader:cult-breathe | 1145 | 33 | 267 | 3 |
| g.blink:cult-blink | 1145 | 33 | 267 | 3 |
| img.sprite.scene:cult-shift | 1145 | 33 | 267 | 3 |
| span.tick.dip:bump | 594 | 50 | 100 | 5 |

Longest frames: 295 ms (hn 268) · 291 ms (style/layout/paint) · 235 ms (Lf 178) · 192 ms (hn 74) · 180 ms (hn 159)

## Round II

Clicks by kind: place 4× p50 77 p95 77 · recruit 4× p50 193 p95 193 · pay 4× p50 149 p95 172 · choose 2× p50 267 p95 267 · next-round 1× p50 61 p95 61 · 6 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5508 | 33 | 867 | 3 |
| span.cs-stack:js | 2486 | 33 | 183 | 4 |
| span.tc-line:tcline | 3161 | 33 | 217 | 3 |
| span.tick.num:bump | 1330 | 50 | 133 | 6 |
| div.path-inner:js | 2597 | 33 | 183 | 3 |
| svg.leader:cult-breathe | 1911 | 33 | 250 | 4 |
| g.blink:cult-blink | 1911 | 33 | 250 | 4 |
| img.sprite.scene:cult-shift | 1911 | 33 | 250 | 4 |
| img.sprite.scene:cult-breathe | 1911 | 33 | 250 | 4 |
| button.card.lt-card:js | 1409 | 33 | 333 | 4 |
| div.piece-flight.piece-res:js | 2207 | 33 | 183 | 2 |
| span.base:opacity | 1016 | 33 | 217 | 4 |

Longest frames: 872 ms (style/layout/paint) · 319 ms (hn 137) · 237 ms (hn 187) · 212 ms (Lf 156) · 189 ms (hn 168)

## Round III

Clicks by kind: place 8× p50 – p95 – · 8 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| svg.leader:cult-breathe | 3068 | 33 | 767 | 2 |
| g.blink:cult-blink | 3068 | 33 | 767 | 2 |
| i.cs-min:cs-bob | 3068 | 33 | 767 | 2 |
| img.sprite.scene:cult-shift | 3068 | 33 | 767 | 2 |
| img.sprite.scene:cult-breathe | 3068 | 33 | 767 | 2 |
| span.lead:cult-scheme | 3068 | 33 | 767 | 2 |
| i.cs-min:cs-bob-eager | 3068 | 33 | 767 | 2 |
| b.seat-delta.up:seatdelta | 1159 | 33 | 767 | 3 |
| button.card.lt-card:js | 713 | 33 | 233 | 3 |
| g.glow:opacity | 929 | 33 | 83 | 2 |
| path.edge-lit:opacity | 929 | 33 | 83 | 2 |
| button.card.lt-card:transform | 1836 | 17 | 100 | 1 |

Longest frames: 772 ms (style/layout/paint) · 237 ms (hn 92) · 199 ms (style/layout/paint) · 180 ms (hn 148) · 139 ms (style/layout/paint)

Frames over 2 s, with the screen at the time:
- 2397 ms · setup · prompt "P4 is picking a cloak ···" · hover "" · options 

Errors:
- harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot
- harness: 8 clicks in a row changed nothing at round III
