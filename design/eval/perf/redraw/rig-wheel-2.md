# Perf rig: wheel-2

2026-11-01T10:13:04.921Z · http://localhost:5315 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (5)
- round I: clicks p95 169 ms (bar 100)
- round II: clicks p95 162 ms (bar 100)
- round II: hovers p95 110 ms (bar 100)
- round III: clicks p95 190 ms (bar 100)
- leak: heap 19.2 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 87 / 169 | 37 / 76 | 17 | 1 | 217 | 11 | 2 | 6 | 2363 | 499 | 13 |
| II | 92 / 162 | 33 / 110 | 17 | 2 | 683 | 15 | 4 | 21 | 3538 | 585 | 16.3 |
| III | 94 / 190 | 59 / 84 | 33 | 2 | 733 | 18 | 3 | 3 | 3921 | 582 | 21.2 |

Click phases (44 clicks that redrew the table, ms, median / p90): waiting for the browser 15 / 22 · rules 4 / 10 · React render and layout effects 27 / 65 · effects 15 / 29 · to the frame that shows it 11 / 19 · that frame painted (the rig's next frame) 22 / 30

Leak control on the last turn: unbroken game 5958 elements, 796 listeners, 19.2 MB; after a reload 5430, 738, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 62 p95 169 · choose 8× p50 87 p95 147 · recruit 3× p50 118 p95 118 · pay 3× p50 114 p95 146 · next-round 1× p50 78 p95 78 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| span.cs-stack:js | 1815 | 17 | 150 | 2 |
| b.seat-delta.up:seatdelta | 3086 | 17 | 217 | 1 |
| span.tc-line:tcline | 2035 | 17 | 133 | 1 |
| div.path-inner:js | 1907 | 17 | 133 | 1 |
| div.piece-flight.piece-res:js | 1576 | 17 | 133 | 1 |
| span.worker-fig:panelland-under | 786 | 33 | 133 | 2 |
| path.wash:fill | 396 | 33 | 133 | 3 |
| span.tick.num:bump | 1096 | 33 | 83 | 1 |
| svg.leader:cult-breathe | 926 | 17 | 83 | 1 |
| g.blink:cult-blink | 926 | 17 | 83 | 1 |
| img.sprite.scene:cult-shift | 926 | 17 | 83 | 1 |
| img.sprite.scene:cult-breathe | 872 | 17 | 83 | 1 |

Longest frames: 241 ms (style/layout/paint) · 151 ms (hn 123) · 136 ms (hn 116) · 125 ms (hn 7, hn 86) · 124 ms (Lf 100)

## Round II

Clicks by kind: place 4× p50 68 p95 68 · choose 7× p50 89 p95 162 · recruit 4× p50 140 p95 140 · pay 4× p50 100 p95 138 · next-round 1× p50 92 p95 92 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5815 | 33 | 133 | 1 |
| span.tc-line:tcline | 3932 | 17 | 167 | 1 |
| span.tick.num:bump | 1652 | 33 | 150 | 2 |
| button.card.lt-card:js | 1628 | 33 | 683 | 2 |
| span.cs-stack:js | 3084 | 17 | 167 | 1 |
| div.path-inner:js | 2765 | 17 | 117 | 1 |
| div.piece-flight.piece-res:js | 2538 | 17 | 117 | 1 |
| span.lead:cult-scheme | 1245 | 33 | 167 | 2 |
| i.cs-min:cs-bob-eager | 1245 | 33 | 167 | 2 |
| span.cs-member:js | 590 | 33 | 117 | 4 |
| i.cs-min:cs-bob | 1091 | 17 | 167 | 2 |
| svg.leader:cult-breathe | 2045 | 33 | 167 | 1 |

Longest frames: 699 ms (style/layout/paint) · 146 ms (hn 92) · 142 ms (Lf 110) · 142 ms (style/layout/paint) · 139 ms (hn 126)

## Round III

Clicks by kind: place 5× p50 91 p95 91 · choose 10× p50 80 p95 197 · recruit 5× p50 109 p95 132 · pay 5× p50 114 p95 190 · pick 3× p50 54 p95 66 · next-round 1× p50 61 p95 61 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7459 | 33 | 733 | 2 |
| span.tc-line:tcline | 4811 | 33 | 250 | 2 |
| span.cs-stack:js | 4358 | 33 | 250 | 2 |
| svg.leader:cult-breathe | 2433 | 33 | 733 | 2 |
| g.blink:cult-blink | 2433 | 33 | 733 | 2 |
| img.sprite.scene:cult-shift | 2433 | 33 | 733 | 2 |
| img.sprite.scene:cult-breathe | 2433 | 33 | 733 | 2 |
| button.card.lt-card:js | 1586 | 33 | 250 | 3 |
| span.tick.num:bump | 2377 | 33 | 183 | 2 |
| span.base:opacity | 1529 | 33 | 250 | 3 |
| div.path-inner:js | 3717 | 33 | 200 | 1 |
| span.lead:cult-scheme | 1206 | 33 | 733 | 3 |

Longest frames: 729 ms (style/layout/paint) · 251 ms (hn 6, hn 233) · 208 ms (style/layout/paint) · 189 ms (hn 174) · 188 ms (Lf 111)
