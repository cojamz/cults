# Perf rig: base-1

2026-11-03T17:16:44.527Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (6)
- round I: clicks p95 220 ms (bar 100)
- round II: clicks p95 188 ms (bar 100)
- round III: clicks p95 257 ms (bar 100)
- round III: hovers p95 144 ms (bar 100)
- leak: 5679 elements vs 5093 after a reload
- leak: heap 20 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 92 / 220 | 52 / 80 | 33 | 2 | 233 | 16 | 3 | 12 | 2490 | 492 | 13.5 |
| II | 125 / 188 | 52 / 91 | 33 | 3 | 733 | 19 | 1 | 2 | 3575 | 551 | 17.7 |
| III | 129 / 257 | 57 / 144 | 33 | 3 | 717 | 40 | 6 | 48 | 3945 | 577 | 20.7 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 18 / 33 · rules 5 / 12 · React render and layout effects 38 / 80 · effects 14 / 37 · to the frame that shows it 16 / 27 · that frame painted (the rig's next frame) 35 / 58

Leak control on the last turn: unbroken game 5679 elements, 764 listeners, 20 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 65 p95 68 · choose 5× p50 81 p95 142 · recruit 3× p50 135 p95 186 · pay 3× p50 92 p95 120 · next-round 1× p50 220 p95 220

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3161 | 33 | 233 | 2 |
| span.cs-stack:js | 1608 | 33 | 233 | 3 |
| span.tc-line:tcline | 1805 | 33 | 167 | 2 |
| div.path-inner:js | 1699 | 33 | 233 | 2 |
| span.worker-fig:panelland-under | 747 | 33 | 167 | 4 |
| div.piece-flight.piece-res:js | 1439 | 33 | 233 | 2 |
| span.base:opacity | 596 | 33 | 167 | 4 |
| div.as-card:js | 775 | 33 | 150 | 3 |
| svg.leader:cult-breathe | 1067 | 33 | 200 | 2 |
| g.blink:cult-blink | 1067 | 33 | 200 | 2 |
| img.sprite.scene:cult-shift | 1067 | 33 | 200 | 2 |
| span.tick.num:bump | 1044 | 33 | 200 | 2 |

Longest frames: 254 ms (style/layout/paint) · 220 ms (hn 195) · 177 ms (Lf 123) · 155 ms (hn 131) · 125 ms (hn 116)

## Round II

Clicks by kind: place 4× p50 79 p95 89 · recruit 4× p50 173 p95 187 · pay 4× p50 125 p95 132 · choose 2× p50 188 p95 188 · next-round 1× p50 115 p95 115

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5417 | 33 | 733 | 2 |
| span.tc-line:tcline | 3072 | 33 | 167 | 3 |
| span.cs-stack:js | 2567 | 33 | 217 | 3 |
| div.path-inner:js | 2790 | 33 | 250 | 2 |
| div.piece-flight.piece-res:js | 2542 | 33 | 217 | 2 |
| span.tick.num:bump | 1430 | 33 | 150 | 3 |
| div.as-card:js | 1236 | 33 | 167 | 3 |
| span.worker-fig:panelland-under | 853 | 33 | 167 | 4 |
| svg.leader:cult-breathe | 1113 | 33 | 283 | 3 |
| g.blink:cult-blink | 1113 | 33 | 283 | 3 |
| img.sprite.scene:cult-shift | 1113 | 33 | 283 | 3 |
| img.sprite.scene:cult-breathe | 1113 | 33 | 283 | 3 |

Longest frames: 756 ms (style/layout/paint) · 243 ms (hn 127) · 207 ms (hn 196) · 192 ms (hn 151) · 163 ms (Lf 119)

## Round III

Clicks by kind: place 5× p50 87 p95 100 · recruit 7× p50 178 p95 257 · pay 8× p50 176 p95 204 · pick 1× p50 129 p95 129 · choose 5× p50 86 p95 296 · next-round 1× p50 61 p95 61

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7400 | 33 | 717 | 3 |
| span.tc-line:tcline | 3704 | 33 | 267 | 4 |
| span.cs-stack:js | 3334 | 33 | 217 | 3 |
| svg.leader:cult-breathe | 2125 | 33 | 717 | 4 |
| g.blink:cult-blink | 2125 | 33 | 717 | 4 |
| img.sprite.scene:cult-shift | 2125 | 33 | 717 | 4 |
| img.sprite.scene:cult-breathe | 2125 | 33 | 717 | 4 |
| span.worker-fig:panelland-under | 1312 | 33 | 267 | 5 |
| i.cs-min:cs-bob-eager | 806 | 50 | 717 | 8 |
| div.piece-flight.piece-res:js | 2975 | 33 | 117 | 2 |
| span.base:opacity | 1175 | 33 | 217 | 5 |
| i.cs-min:cs-bob | 827 | 50 | 717 | 7 |

Longest frames: 718 ms (style/layout/paint) · 249 ms (Tf 17, Lf 188) · 231 ms (hn 188) · 202 ms (hn 194) · 181 ms (hn 152)
