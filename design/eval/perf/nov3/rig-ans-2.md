# Perf rig: ans-2

2026-11-03T15:24:00.633Z · http://localhost:5292/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 6 min · game NOT finished

Verdict: FAIL (9)
- round I: clicks p95 245 ms (bar 100)
- round I: hovers p95 128 ms (bar 100)
- round II: clicks p95 231 ms (bar 100)
- round II: hovers p95 101 ms (bar 100)
- round III: hovers p95 131 ms (bar 100)
- leak: 3607 elements vs 2903 after a reload
- leak: 561 listeners vs 500 after a reload
- leak: heap 20.4 MB vs 11.6 MB after a reload
- the game did not finish (harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot)

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 90 / 245 | 49 / 128 | 33 | 2 | 333 | 17 | 2 | 4 | 2490 | 492 | 13.3 |
| II | 149 / 231 | 72 / 101 | 33 | 3 | 733 | 16 | 2 | 5 | 3575 | 551 | 17.7 |
| III | – / – | 80 / 131 | 33 | 3 | 917 | 4 | – | – | 3942 | 577 | 21.2 |

Click phases (16 clicks that redrew the table, ms, median / p90): waiting for the browser 24 / 31 · rules 10 / 14 · React render and layout effects 29 / 79 · effects 20 / 38 · to the frame that shows it 15 / 23 · that frame painted (the rig's next frame) 30 / 73

Leak control on the last turn: unbroken game 3607 elements, 561 listeners, 20.4 MB; after a reload 2903, 500, 11.6 MB.

## Round I

Clicks by kind: place 3× p50 79 p95 79 · choose 5× p50 90 p95 245 · recruit 3× p50 – p95 – · pay 3× p50 138 p95 142 · next-round 1× p50 117 p95 117 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3334 | 33 | 250 | 2 |
| span.cs-stack:js | 1852 | 33 | 250 | 3 |
| span.tc-line:tcline | 2300 | 33 | 250 | 2 |
| svg.leader:cult-breathe | 1805 | 33 | 333 | 2 |
| g.blink:cult-blink | 1805 | 33 | 333 | 2 |
| img.sprite.scene:cult-shift | 1805 | 33 | 333 | 2 |
| span.tick.num:bump | 1070 | 33 | 117 | 3 |
| div.path-inner:js | 1586 | 33 | 133 | 2 |
| img.sprite.scene:cult-breathe | 1502 | 33 | 333 | 2 |
| span.lead:cult-scheme | 1026 | 33 | 167 | 2 |
| i.cs-min:cs-bob | 996 | 33 | 167 | 2 |
| div.as-card:js | 956 | 33 | 217 | 2 |

Longest frames: 273 ms (style/layout/paint) · 215 ms (hn 191) · 170 ms (hn 19, Lf 107) · 160 ms (style/layout/paint) · 157 ms (Worker.onmessage 14, Worker.onmessage 11, TimerHandler:setTimeout 73)

## Round II

Clicks by kind: place 4× p50 94 p95 94 · recruit 4× p50 191 p95 191 · pay 4× p50 142 p95 149 · choose 2× p50 231 p95 231 · next-round 1× p50 149 p95 149 · 6 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5822 | 33 | 733 | 3 |
| span.tc-line:tcline | 2978 | 33 | 217 | 4 |
| span.cs-stack:js | 2525 | 33 | 217 | 4 |
| span.tick.num:bump | 1283 | 33 | 117 | 4 |
| div.path-inner:js | 2548 | 33 | 183 | 2 |
| svg.leader:cult-breathe | 2269 | 33 | 133 | 2 |
| g.blink:cult-blink | 2269 | 33 | 133 | 2 |
| img.sprite.scene:cult-shift | 2269 | 33 | 133 | 2 |
| img.sprite.scene:cult-breathe | 2269 | 33 | 133 | 2 |
| div.piece-flight.piece-res:js | 2042 | 33 | 183 | 2 |
| span.lead:cult-scheme | 1521 | 17 | 133 | 2 |
| i.cs-min:cs-bob | 1521 | 17 | 133 | 2 |

Longest frames: 753 ms (style/layout/paint) · 290 ms (hn 217) · 202 ms (hn 163) · 170 ms (hn 150) · 148 ms (Lf 33)

## Round III

Clicks by kind: place 8× p50 – p95 – · 8 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.lead:cult-scheme | 3061 | 33 | 917 | 2 |
| svg.leader:cult-breathe | 3061 | 33 | 917 | 2 |
| g.blink:cult-blink | 3061 | 33 | 917 | 2 |
| i.cs-min:cs-bob-eager | 3061 | 33 | 917 | 2 |
| i.cs-min:cs-bob | 3061 | 33 | 917 | 2 |
| img.sprite.scene:cult-shift | 3061 | 33 | 917 | 2 |
| img.sprite.scene:cult-breathe | 3061 | 33 | 917 | 2 |
| b.seat-delta.up:seatdelta | 1125 | 33 | 917 | 3 |
| button.card.lt-card:js | 722 | 33 | 433 | 4 |
| div.flight.shop-out:js | 544 | 33 | 433 | 5 |
| div.worker-flight.minion-flight:js | 183 | 100 | 433 | 13 |
| g.glow:opacity | 768 | 33 | 100 | 3 |

Longest frames: 933 ms (style/layout/paint) · 377 ms (hn 212) · 345 ms (style/layout/paint) · 196 ms (hn 160) · 100 ms (xa 45, hn 8, TimerHandler:setTimeout 6)

Frames over 2 s, with the screen at the time:
- 2120 ms · setup · prompt "P4 is picking a cloak ···" · hover "" · options 

Errors:
- harness: stuck in place, options slot:0-0@slot slot:0-1@slot slot:0-2@slot slot:0-3@slot slot:0-4@slot slot:0-5@slot slot:1-0@slot slot:1-1@slot slot:1-2@slot slot:1-4@slot slot:1-5@slot slot:2-0@slot slot:2-1@slot slot:2-2@slot slot:2-3@slot slot:2-4@slot slot:2-5@slot slot:3-0@slot slot:3-1@slot slot:3-2@slot slot:3-3@slot slot:3-4@slot slot:3-5@slot
- harness: 8 clicks in a row changed nothing at round III
