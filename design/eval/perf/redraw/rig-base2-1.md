# Perf rig: base2-1

2026-11-01T09:02:30.556Z · http://localhost:5310 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 190 ms (bar 100)
- round II: clicks p95 195 ms (bar 100)
- round III: clicks p95 251 ms (bar 100)
- idle busy grows 2% → 7% over the game
- leak: 5809 elements vs 5280 after a reload
- leak: heap 19.5 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 82 / 190 | 50 / 75 | 17 | 2 | 200 | 8 | 2 | 5 | 2363 | 499 | 13 |
| II | 99 / 195 | 55 / 68 | 33 | 2 | 550 | 21 | 5 | 25 | 3528 | 583 | 16.3 |
| III | 136 / 251 | 49 / 71 | 33 | 2 | 850 | 26 | 7 | 1 | 4023 | 595 | 20.1 |

Click phases (37 clicks that redrew the table, ms, median / p90): waiting for the browser 15 / 26 · rules 12 / 23 · React render and layout effects 30 / 80 · effects 14 / 27 · to the frame that shows it 14 / 26 · that frame painted (the rig's next frame) 22 / 51

Leak control on the last turn: unbroken game 5809 elements, 788 listeners, 19.5 MB; after a reload 5280, 730, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 52 p95 69 · choose 8× p50 75 p95 159 · recruit 3× p50 99 p95 99 · pay 3× p50 121 p95 190 · next-round 1× p50 82 p95 82 · 2 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3211 | 17 | 200 | 2 |
| span.cs-stack:js | 2169 | 17 | 167 | 2 |
| span.tc-line:tcline | 2216 | 17 | 167 | 1 |
| span.tick.num:bump | 1032 | 33 | 167 | 2 |
| div.path-inner:js | 2015 | 17 | 167 | 1 |
| span.worker-fig:panelland-under | 1003 | 17 | 167 | 2 |
| svg.leader:cult-breathe | 934 | 17 | 167 | 2 |
| g.blink:cult-blink | 934 | 17 | 167 | 2 |
| img.sprite.scene:cult-shift | 934 | 17 | 167 | 2 |
| img.sprite.scene:cult-breathe | 907 | 17 | 167 | 2 |
| div.piece-flight.piece-res:js | 1601 | 17 | 167 | 1 |
| div.as-card:js | 795 | 17 | 133 | 2 |

Longest frames: 210 ms (style/layout/paint) · 169 ms (hn 145) · 151 ms (Nf 124) · 134 ms (hn 116) · 126 ms (hn 9)

## Round II

Clicks by kind: place 4× p50 91 p95 92 · choose 7× p50 127 p95 205 · recruit 4× p50 117 p95 195 · pay 3× p50 104 p95 140 · pick 3× p50 55 p95 87 · next-round 1× p50 90 p95 90 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5520 | 33 | 267 | 2 |
| span.cs-stack:js | 2861 | 33 | 267 | 3 |
| span.tc-line:tcline | 3338 | 33 | 267 | 2 |
| div.path-inner:js | 2837 | 33 | 267 | 2 |
| span.tick.num:bump | 1455 | 33 | 150 | 3 |
| svg.leader:cult-breathe | 1199 | 33 | 250 | 3 |
| g.blink:cult-blink | 1199 | 33 | 250 | 3 |
| img.sprite.scene:cult-shift | 1199 | 33 | 250 | 3 |
| img.sprite.scene:cult-breathe | 1199 | 33 | 250 | 3 |
| span.base:opacity | 879 | 33 | 267 | 4 |
| span.cs-member:js | 675 | 33 | 133 | 5 |
| button.card.lt-card:js | 1626 | 33 | 550 | 2 |

Longest frames: 569 ms (style/layout/paint) · 248 ms (hn 233) · 176 ms (hn 116) · 163 ms (hn 129) · 163 ms (hn 155)

## Round III

Clicks by kind: place 5× p50 85 p95 105 · recruit 5× p50 140 p95 155 · pay 5× p50 101 p95 165 · choose 3× p50 198 p95 251 · pick 1× p50 142 p95 142 · next-round 1× p50 64 p95 64 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7658 | 33 | 850 | 2 |
| span.tc-line:tcline | 4708 | 33 | 167 | 2 |
| div.path-inner:js | 3810 | 33 | 167 | 2 |
| span.cs-stack:js | 3506 | 33 | 217 | 2 |
| span.tick.num:bump | 2713 | 33 | 167 | 2 |
| svg.leader:cult-breathe | 2568 | 33 | 850 | 2 |
| g.blink:cult-blink | 2568 | 33 | 850 | 2 |
| img.sprite.scene:cult-shift | 2568 | 33 | 850 | 2 |
| img.sprite.scene:cult-breathe | 2568 | 33 | 850 | 2 |
| span.worker-fig:panelland-under | 1549 | 33 | 200 | 3 |
| span.worker:js | 1331 | 33 | 133 | 3 |
| span.lead:cult-scheme | 1203 | 33 | 850 | 3 |

Longest frames: 850 ms (style/layout/paint) · 249 ms (style/layout/paint) · 210 ms (Nf 158) · 206 ms (hn 98) · 204 ms (hn 175)
