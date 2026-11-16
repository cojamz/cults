# Perf rig: live956-1

2026-11-01T10:05:13.625Z · http://localhost:5316 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (4)
- round I: clicks p95 156 ms (bar 100)
- round II: clicks p95 195 ms (bar 100)
- round III: clicks p95 219 ms (bar 100)
- leak: heap 18.6 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 74 / 156 | 45 / 100 | 17 | 2 | 200 | 10 | 2 | 5 | 2363 | 499 | 13 |
| II | 101 / 195 | 61 / 97 | 17 | 2 | 483 | 18 | 4 | 22 | 3538 | 585 | 16.2 |
| III | 87 / 219 | 56 / 72 | 33 | 2 | 717 | 23 | 3 | 8 | 3921 | 582 | 20.4 |

Click phases (45 clicks that redrew the table, ms, median / p90): waiting for the browser 13 / 26 · rules 5 / 15 · React render and layout effects 29 / 65 · effects 18 / 28 · to the frame that shows it 12 / 18 · that frame painted (the rig's next frame) 22 / 31

Leak control on the last turn: unbroken game 5958 elements, 796 listeners, 18.6 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 60 p95 61 · choose 8× p50 67 p95 144 · recruit 3× p50 156 p95 156 · pay 3× p50 104 p95 135 · next-round 1× p50 74 p95 74 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3060 | 17 | 200 | 2 |
| span.tc-line:tcline | 2092 | 33 | 200 | 2 |
| div.path-inner:js | 2027 | 17 | 167 | 2 |
| span.cs-stack:js | 1796 | 33 | 200 | 2 |
| span.worker-fig:panelland-under | 770 | 33 | 200 | 3 |
| span.tick.num:bump | 1064 | 17 | 100 | 2 |
| div.piece-flight.piece-res:js | 1684 | 17 | 167 | 1 |
| span.base:opacity | 834 | 17 | 200 | 2 |
| button.fb.lt-rate:opacity | 370 | 33 | 200 | 4 |
| button.card.lt-card:opacity | 370 | 33 | 200 | 4 |
| path.wash:fill | 458 | 33 | 200 | 3 |
| button.fb.lt-rate:background-color | 353 | 33 | 167 | 3 |

Longest frames: 218 ms (style/layout/paint) · 197 ms (hn 176) · 141 ms (hn 126) · 130 ms (Lf 93) · 127 ms (hn 9, Lf 85)

## Round II

Clicks by kind: place 4× p50 78 p95 101 · choose 7× p50 123 p95 195 · recruit 4× p50 92 p95 92 · pay 4× p50 107 p95 157 · next-round 1× p50 94 p95 94 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5997 | 17 | 233 | 1 |
| span.tc-line:tcline | 3588 | 17 | 150 | 1 |
| svg.leader:cult-breathe | 1733 | 17 | 233 | 2 |
| g.blink:cult-blink | 1733 | 17 | 233 | 2 |
| img.sprite.scene:cult-shift | 1733 | 17 | 233 | 2 |
| img.sprite.scene:cult-breathe | 1733 | 17 | 233 | 2 |
| span.tick.num:bump | 1630 | 33 | 117 | 2 |
| div.path-inner:js | 3125 | 17 | 200 | 1 |
| div.piece-flight.piece-res:js | 3036 | 17 | 200 | 1 |
| button.card.lt-card:js | 1480 | 33 | 483 | 2 |
| span.cs-stack:js | 2825 | 17 | 150 | 1 |
| span.cs-member:js | 598 | 33 | 133 | 4 |

Longest frames: 501 ms (style/layout/paint) · 198 ms (hn 181) · 179 ms (hn 166) · 162 ms (hn 107) · 146 ms (hn 95)

## Round III

Clicks by kind: place 5× p50 78 p95 219 · choose 10× p50 78 p95 259 · recruit 5× p50 117 p95 123 · pay 5× p50 116 p95 151 · pick 3× p50 74 p95 87 · next-round 1× p50 69 p95 69 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7568 | 33 | 717 | 2 |
| span.tc-line:tcline | 5097 | 33 | 217 | 2 |
| span.cs-stack:js | 4630 | 33 | 267 | 2 |
| span.tick.num:bump | 2410 | 33 | 217 | 2 |
| svg.leader:cult-breathe | 2233 | 33 | 717 | 2 |
| g.blink:cult-blink | 2233 | 33 | 717 | 2 |
| img.sprite.scene:cult-shift | 2233 | 33 | 717 | 2 |
| img.sprite.scene:cult-breathe | 2233 | 33 | 717 | 2 |
| div.path-inner:js | 3865 | 17 | 267 | 1 |
| button.card.lt-card:js | 1681 | 33 | 267 | 2 |
| div.piece-flight.piece-res:js | 3199 | 17 | 267 | 1 |
| span.base:opacity | 1569 | 17 | 217 | 2 |

Longest frames: 728 ms (style/layout/paint) · 261 ms (hn 120) · 212 ms (style/layout/paint) · 209 ms (hn 207) · 205 ms (hn 188)
