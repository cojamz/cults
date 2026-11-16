# Perf rig: base-2

2026-11-01T08:46:50.074Z · http://localhost:5310 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 183 ms (bar 100)
- round II: clicks p95 198 ms (bar 100)
- round II: hovers p95 115 ms (bar 100)
- round III: clicks p95 223 ms (bar 100)
- leak: 6363 elements vs 5280 after a reload
- leak: 894 listeners vs 730 after a reload
- leak: heap 19.8 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 109 / 183 | 41 / 82 | 33 | 3 | 267 | 25 | 3 | 19 | 2363 | 499 | 13 |
| II | 88 / 198 | 53 / 115 | 17 | 1 | 317 | 17 | 6 | 25 | 3528 | 583 | 16.3 |
| III | 123 / 223 | 48 / 59 | 33 | 2 | 667 | 25 | 1 | 1 | 4041 | 595 | 20.1 |

Click phases (37 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 27 · rules 13 / 22 · React render and layout effects 30 / 64 · effects 15 / 26 · to the frame that shows it 13 / 26 · that frame painted (the rig's next frame) 23 / 50

Leak control on the last turn: unbroken game 6363 elements, 894 listeners, 19.8 MB; after a reload 5280, 730, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 88 p95 88 · choose 8× p50 115 p95 148 · recruit 3× p50 121 p95 121 · pay 3× p50 150 p95 183 · next-round 1× p50 87 p95 87 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3036 | 33 | 267 | 3 |
| span.tc-line:tcline | 1872 | 33 | 167 | 4 |
| span.cs-stack:js | 1451 | 33 | 167 | 5 |
| div.path-inner:js | 1680 | 33 | 217 | 3 |
| span.worker-fig:panelland-under | 717 | 50 | 167 | 6 |
| div.piece-flight.piece-res:js | 1399 | 33 | 183 | 3 |
| span.tick.num:bump | 894 | 33 | 117 | 4 |
| svg.leader:cult-breathe | 1724 | 33 | 200 | 2 |
| g.blink:cult-blink | 1724 | 33 | 200 | 2 |
| img.sprite.scene:cult-shift | 1724 | 33 | 200 | 2 |
| span.base:opacity | 1049 | 33 | 200 | 3 |
| div.as-card:js | 727 | 33 | 183 | 4 |

Longest frames: 282 ms (style/layout/paint) · 211 ms (style/layout/paint) · 181 ms (hn 167) · 168 ms (Nf 136) · 151 ms (hn 140)

## Round II

Clicks by kind: place 4× p50 96 p95 96 · choose 7× p50 124 p95 198 · recruit 4× p50 97 p95 97 · pay 3× p50 88 p95 110 · pick 3× p50 63 p95 69 · next-round 1× p50 73 p95 73 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5634 | 17 | 233 | 1 |
| svg.leader:cult-breathe | 1890 | 17 | 183 | 2 |
| g.blink:cult-blink | 1890 | 17 | 183 | 2 |
| img.sprite.scene:cult-shift | 1890 | 17 | 183 | 2 |
| img.sprite.scene:cult-breathe | 1890 | 17 | 183 | 2 |
| span.tc-line:tcline | 3621 | 17 | 233 | 1 |
| span.tick.num:bump | 1591 | 17 | 117 | 2 |
| span.cs-stack:js | 3089 | 17 | 233 | 1 |
| div.path-inner:js | 2757 | 17 | 233 | 1 |
| div.piece-flight.piece-res:js | 2538 | 17 | 167 | 1 |
| span.base:opacity | 1093 | 17 | 233 | 2 |
| span.lead:cult-scheme | 1050 | 33 | 183 | 2 |

Longest frames: 328 ms (style/layout/paint) · 224 ms (hn 211) · 186 ms (Lf 18) · 169 ms (Nf 109) · 164 ms (hn 148)

## Round III

Clicks by kind: place 5× p50 86 p95 98 · recruit 5× p50 181 p95 190 · pay 5× p50 97 p95 128 · choose 3× p50 201 p95 223 · pick 1× p50 140 p95 140 · next-round 1× p50 58 p95 58 · 2 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7768 | 33 | 667 | 2 |
| span.tc-line:tcline | 4330 | 33 | 150 | 2 |
| span.cs-stack:js | 3527 | 33 | 200 | 2 |
| span.tick.num:bump | 2459 | 33 | 117 | 2 |
| svg.leader:cult-breathe | 2252 | 33 | 667 | 2 |
| g.blink:cult-blink | 2252 | 33 | 667 | 2 |
| img.sprite.scene:cult-shift | 2252 | 33 | 667 | 2 |
| img.sprite.scene:cult-breathe | 2252 | 33 | 667 | 2 |
| div.path-inner:js | 4385 | 17 | 200 | 1 |
| span.worker-fig:panelland-under | 1251 | 33 | 150 | 3 |
| div.seat-stolen:brief-out | 1709 | 33 | 100 | 2 |
| div.piece-flight.piece-res:js | 3198 | 17 | 200 | 1 |

Longest frames: 694 ms (style/layout/paint) · 242 ms (style/layout/paint) · 206 ms (Nf 154) · 194 ms (hn 88) · 183 ms (hn 160)
