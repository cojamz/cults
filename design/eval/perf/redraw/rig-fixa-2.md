# Perf rig: fixa-2

2026-11-01T08:47:06.639Z · http://localhost:5312 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (5)
- round I: clicks p95 323 ms (bar 100)
- round II: clicks p95 152 ms (bar 100)
- round III: clicks p95 204 ms (bar 100)
- leak: 5809 elements vs 5280 after a reload
- leak: heap 19.6 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 113 / 323 | 59 / 90 | 33 | 3 | 250 | 21 | 3 | 7 | 2363 | 499 | 13 |
| II | 92 / 152 | 53 / 94 | 17 | 2 | 667 | 13 | 6 | 31 | 3539 | 585 | 16.4 |
| III | 114 / 204 | 57 / 72 | 33 | 2 | 833 | 21 | 1 | 2 | 4044 | 595 | 20.1 |

Click phases (35 clicks that redrew the table, ms, median / p90): waiting for the browser 16 / 27 · rules 5 / 17 · React render and layout effects 36 / 67 · effects 16 / 31 · to the frame that shows it 14 / 33 · that frame painted (the rig's next frame) 26 / 40

Leak control on the last turn: unbroken game 5809 elements, 788 listeners, 19.6 MB; after a reload 5280, 730, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 85 p95 85 · choose 8× p50 113 p95 323 · recruit 3× p50 – p95 – · pay 3× p50 146 p95 259 · next-round 1× p50 73 p95 73 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3093 | 33 | 250 | 3 |
| span.tc-line:tcline | 2163 | 33 | 233 | 4 |
| span.cs-stack:js | 1325 | 50 | 183 | 5 |
| div.path-inner:js | 1801 | 33 | 133 | 3 |
| div.piece-flight.piece-res:js | 1565 | 33 | 183 | 3 |
| span.tick.num:bump | 919 | 33 | 133 | 5 |
| span.base:opacity | 979 | 33 | 233 | 4 |
| span.worker-fig:panelland-under | 1049 | 33 | 183 | 3 |
| span.worker-fig:panelland | 702 | 33 | 133 | 4 |
| svg.leader:cult-breathe | 1355 | 17 | 233 | 2 |
| g.blink:cult-blink | 1355 | 17 | 233 | 2 |
| img.sprite.scene:cult-shift | 1355 | 17 | 233 | 2 |

Longest frames: 275 ms (style/layout/paint) · 228 ms (Nf 198) · 196 ms (hn 174) · 181 ms (Nf 128, Lf 6) · 180 ms (hn 156)

## Round II

Clicks by kind: place 4× p50 80 p95 80 · choose 7× p50 100 p95 152 · recruit 4× p50 101 p95 101 · pay 3× p50 113 p95 118 · pick 3× p50 60 p95 66 · next-round 1× p50 84 p95 84 · 4 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5790 | 17 | 167 | 2 |
| span.cs-stack:js | 2908 | 17 | 167 | 2 |
| span.tc-line:tcline | 3592 | 17 | 167 | 1 |
| svg.leader:cult-breathe | 1587 | 33 | 200 | 2 |
| g.blink:cult-blink | 1587 | 33 | 200 | 2 |
| img.sprite.scene:cult-shift | 1587 | 33 | 200 | 2 |
| img.sprite.scene:cult-breathe | 1587 | 33 | 200 | 2 |
| span.tick.num:bump | 1566 | 33 | 117 | 2 |
| div.piece-flight.piece-res:js | 2806 | 17 | 150 | 1 |
| div.path-inner:js | 2793 | 17 | 167 | 1 |
| span.base:opacity | 1175 | 17 | 167 | 2 |
| span.lead:cult-scheme | 759 | 33 | 133 | 3 |

Longest frames: 676 ms (style/layout/paint) · 163 ms (hn 154) · 163 ms (hn 153) · 162 ms (hn 145) · 124 ms (Nf 79)

## Round III

Clicks by kind: place 5× p50 65 p95 65 · recruit 5× p50 138 p95 165 · pay 5× p50 114 p95 134 · choose 3× p50 157 p95 204 · pick 1× p50 88 p95 88 · next-round 1× p50 65 p95 65 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 8254 | 33 | 833 | 2 |
| span.tc-line:tcline | 4422 | 33 | 183 | 2 |
| span.cs-stack:js | 3833 | 33 | 217 | 2 |
| svg.leader:cult-breathe | 2893 | 33 | 833 | 2 |
| g.blink:cult-blink | 2893 | 33 | 833 | 2 |
| img.sprite.scene:cult-shift | 2893 | 33 | 833 | 2 |
| img.sprite.scene:cult-breathe | 2893 | 33 | 833 | 2 |
| span.tick.num:bump | 2611 | 33 | 183 | 2 |
| span.lead:cult-scheme | 1540 | 33 | 833 | 3 |
| i.cs-min:cs-bob | 1534 | 33 | 833 | 3 |
| i.cs-min:cs-bob-eager | 1445 | 33 | 833 | 3 |
| div.path-inner:js | 3984 | 17 | 183 | 1 |

Longest frames: 843 ms (style/layout/paint) · 299 ms (style/layout/paint) · 214 ms (hn 6, hn 167) · 213 ms (hn 83) · 168 ms (Nf 131)
