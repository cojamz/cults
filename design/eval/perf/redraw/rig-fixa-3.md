# Perf rig: fixa-3

2026-11-01T08:54:32.639Z · http://localhost:5312 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (5)
- round I: clicks p95 194 ms (bar 100)
- round I: hovers p95 104 ms (bar 100)
- round II: clicks p95 127 ms (bar 100)
- round III: clicks p95 176 ms (bar 100)
- leak: heap 19.7 MB vs 9.6 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 91 / 194 | 42 / 104 | 17 | 1 | 200 | 7 | 1 | 6 | 2363 | 499 | 13 |
| II | 81 / 127 | 51 / 77 | 17 | 1 | 450 | 12 | 5 | 23 | 3528 | 583 | 16.3 |
| III | 123 / 176 | 44 / 93 | 17 | 1 | 850 | 24 | 1 | 1 | 4041 | 595 | 20 |

Click phases (38 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 23 · rules 4 / 14 · React render and layout effects 32 / 72 · effects 13 / 24 · to the frame that shows it 13 / 26 · that frame painted (the rig's next frame) 24 / 44

Leak control on the last turn: unbroken game 5806 elements, 788 listeners, 19.7 MB; after a reload 5280, 730, 9.6 MB.

## Round I

Clicks by kind: place 3× p50 62 p95 66 · choose 8× p50 78 p95 194 · recruit 3× p50 161 p95 161 · pay 3× p50 98 p95 133 · next-round 1× p50 128 p95 128 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.tc-line:tcline | 2033 | 17 | 200 | 2 |
| span.cs-stack:js | 1868 | 17 | 200 | 2 |
| b.seat-delta.up:seatdelta | 3269 | 17 | 200 | 1 |
| span.worker-fig:panelland-under | 771 | 33 | 200 | 3 |
| div.path-inner:js | 2064 | 17 | 133 | 1 |
| div.piece-flight.piece-res:js | 1643 | 17 | 133 | 1 |
| path.wash:fill | 420 | 33 | 200 | 3 |
| button.fb.lt-rate:opacity | 370 | 33 | 200 | 3 |
| button.card.lt-card:opacity | 370 | 33 | 200 | 3 |
| span.tick.num:bump | 1016 | 17 | 100 | 1 |
| div.as-member.bubble:js | 499 | 17 | 67 | 2 |
| svg.leader:cult-breathe | 963 | 17 | 100 | 1 |

Longest frames: 207 ms (style/layout/paint) · 203 ms (hn 181) · 131 ms (hn 119) · 126 ms (hn 13, Nf 95) · 125 ms (Nf 89)

## Round II

Clicks by kind: place 4× p50 78 p95 81 · choose 7× p50 103 p95 127 · recruit 4× p50 109 p95 109 · pay 3× p50 93 p95 100 · pick 3× p50 51 p95 63 · next-round 1× p50 113 p95 113 · 3 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5710 | 17 | 200 | 1 |
| span.tc-line:tcline | 3853 | 17 | 200 | 1 |
| span.cs-stack:js | 3117 | 17 | 200 | 1 |
| div.path-inner:js | 2909 | 17 | 200 | 1 |
| div.piece-flight.piece-res:js | 2600 | 17 | 100 | 1 |
| button.card.lt-card:js | 1982 | 17 | 450 | 1 |
| svg.leader:cult-breathe | 1562 | 17 | 133 | 1 |
| g.blink:cult-blink | 1562 | 17 | 133 | 1 |
| img.sprite.scene:cult-shift | 1562 | 17 | 133 | 1 |
| img.sprite.scene:cult-breathe | 1562 | 17 | 133 | 1 |
| span.tick.num:bump | 1560 | 33 | 83 | 1 |
| path.wash:fill | 490 | 33 | 133 | 3 |

Longest frames: 468 ms (style/layout/paint) · 188 ms (hn 180) · 136 ms (hn 117) · 130 ms (hn 110) · 127 ms (hn 11, Nf 76)

## Round III

Clicks by kind: place 5× p50 74 p95 74 · recruit 5× p50 152 p95 163 · pay 5× p50 118 p95 134 · choose 3× p50 160 p95 176 · pick 1× p50 85 p95 85 · next-round 1× p50 69 p95 69 · 2 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 8018 | 17 | 850 | 1 |
| span.tc-line:tcline | 4674 | 17 | 167 | 1 |
| div.path-inner:js | 4236 | 17 | 183 | 1 |
| span.cs-stack:js | 3536 | 33 | 183 | 1 |
| span.worker-fig:panelland-under | 1675 | 33 | 167 | 2 |
| div.piece-flight.piece-res:js | 3224 | 17 | 183 | 1 |
| span.tick.num:bump | 2610 | 33 | 117 | 1 |
| svg.leader:cult-breathe | 2273 | 33 | 850 | 1 |
| g.blink:cult-blink | 2273 | 33 | 850 | 1 |
| img.sprite.scene:cult-shift | 2273 | 33 | 850 | 1 |
| img.sprite.scene:cult-breathe | 2273 | 33 | 850 | 1 |
| path.wash:fill | 740 | 33 | 167 | 3 |

Longest frames: 861 ms (style/layout/paint) · 222 ms (style/layout/paint) · 188 ms (hn 152) · 178 ms (hn 72) · 173 ms (Nf 124)
