# Perf rig: answer-1

2026-11-01T10:49:55.229Z · http://localhost:5318 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 193 ms (bar 100)
- round I: hovers p95 161 ms (bar 100)
- round II: clicks p95 235 ms (bar 100)
- round II: hovers p95 205 ms (bar 100)
- round III: clicks p95 184 ms (bar 100)
- round III: hovers p95 111 ms (bar 100)
- leak: heap 19.3 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 112 / 193 | 64 / 161 | 33 | 5 | 250 | 24 | 4 | 9 | 2363 | 499 | 13 |
| II | 139 / 235 | 83 / 205 | 33 | 5 | 617 | 31 | 6 | 38 | 3538 | 585 | 16.4 |
| III | 111 / 184 | 64 / 111 | 33 | 5 | 1000 | 35 | 4 | 3 | 3921 | 582 | 21.3 |

Click phases (41 clicks that redrew the table, ms, median / p90): waiting for the browser 21 / 32 · rules 6 / 16 · React render and layout effects 32 / 55 · effects 17 / 29 · to the frame that shows it 13 / 21 · that frame painted (the rig's next frame) 22 / 43

Leak control on the last turn: unbroken game 5956 elements, 796 listeners, 19.3 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 155 p95 164 · choose 8× p50 124 p95 193 · recruit 3× p50 – p95 – · pay 3× p50 97 p95 188 · next-round 1× p50 73 p95 73 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 2874 | 50 | 250 | 5 |
| span.cs-stack:js | 1389 | 50 | 200 | 7 |
| span.tc-line:tcline | 1918 | 50 | 217 | 5 |
| div.path-inner:js | 1712 | 50 | 183 | 5 |
| div.piece-flight.piece-res:js | 1529 | 33 | 183 | 5 |
| svg.leader:cult-breathe | 1475 | 33 | 217 | 4 |
| g.blink:cult-blink | 1475 | 33 | 217 | 4 |
| img.sprite.scene:cult-shift | 1475 | 33 | 217 | 4 |
| img.sprite.scene:cult-breathe | 1173 | 33 | 150 | 5 |
| span.tick.num:bump | 800 | 50 | 150 | 7 |
| div.as-card:js | 982 | 33 | 183 | 5 |
| span.worker-fig:panelland-under | 814 | 50 | 183 | 6 |

Longest frames: 268 ms (style/layout/paint) · 192 ms (hn 185) · 191 ms (Lf 161) · 179 ms (style/layout/paint) · 176 ms (style/layout/paint)

## Round II

Clicks by kind: place 4× p50 92 p95 92 · choose 7× p50 83 p95 195 · recruit 4× p50 215 p95 215 · pay 4× p50 147 p95 159 · next-round 1× p50 235 p95 235 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 4915 | 33 | 283 | 4 |
| span.tc-line:tcline | 3465 | 33 | 200 | 5 |
| span.cs-stack:js | 2592 | 33 | 150 | 5 |
| span.tick.num:bump | 1363 | 50 | 283 | 8 |
| svg.leader:cult-breathe | 1904 | 33 | 283 | 5 |
| g.blink:cult-blink | 1904 | 33 | 283 | 5 |
| img.sprite.scene:cult-shift | 1904 | 33 | 283 | 5 |
| img.sprite.scene:cult-breathe | 1904 | 33 | 283 | 5 |
| div.path-inner:js | 2679 | 33 | 200 | 3 |
| button.card.lt-card:js | 1487 | 50 | 617 | 5 |
| div.piece-flight.piece-res:js | 2451 | 33 | 167 | 3 |
| span.worker-fig:panelland-under | 1025 | 50 | 200 | 6 |

Longest frames: 631 ms (FrameRequestCallback 7) · 263 ms (hn 9) · 206 ms (hn 155) · 194 ms (Lf 137) · 174 ms (Lf 134)

## Round III

Clicks by kind: place 5× p50 78 p95 78 · choose 10× p50 111 p95 158 · recruit 5× p50 98 p95 98 · pay 5× p50 113 p95 141 · pick 3× p50 184 p95 220 · next-round 1× p50 70 p95 70 · 8 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 6976 | 50 | 1000 | 5 |
| span.tc-line:tcline | 4827 | 50 | 267 | 5 |
| span.cs-stack:js | 4074 | 50 | 267 | 5 |
| span.tick.num:bump | 1920 | 50 | 167 | 7 |
| div.path-inner:js | 2995 | 33 | 167 | 4 |
| svg.leader:cult-breathe | 2846 | 33 | 1000 | 4 |
| g.blink:cult-blink | 2846 | 33 | 1000 | 4 |
| img.sprite.scene:cult-shift | 2846 | 33 | 1000 | 4 |
| img.sprite.scene:cult-breathe | 2846 | 33 | 1000 | 4 |
| div.piece-flight.piece-res:js | 2732 | 33 | 250 | 4 |
| span.lead:cult-scheme | 1707 | 50 | 1000 | 6 |
| i.cs-min:cs-bob | 1700 | 50 | 1000 | 6 |

Longest frames: 1009 ms (style/layout/paint) · 422 ms (hn 264) · 400 ms (hn 8) · 230 ms (hn 218) · 229 ms (hn 213)

Frames over 2 s, with the screen at the time:
- 2589 ms · setup · prompt "P4 is picking an artifact ···" · hover "" · options 
