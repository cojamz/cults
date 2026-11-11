# Perf rig: base2-2

2026-11-01T09:10:25.286Z · http://localhost:5310 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 225 ms (bar 100)
- round II: clicks p95 215 ms (bar 100)
- round III: clicks p95 299 ms (bar 100)
- round III: idle table busy 11% (bar 10%)
- idle busy grows 3% → 11% over the game
- leak: 6363 elements vs 5280 after a reload
- leak: 894 listeners vs 730 after a reload
- leak: heap 19.8 MB vs 9.7 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 100 / 225 | 29 / 86 | 17 | 2 | 217 | 11 | 3 | 6 | 2363 | 499 | 13.1 |
| II | 97 / 215 | 60 / 93 | 33 | 2 | 717 | 21 | 7 | 33 | 3539 | 585 | 16.3 |
| III | 136 / 299 | 53 / 79 | 33 | 2 | 750 | 27 | 11 | 2 | 4041 | 595 | 20.2 |

Click phases (35 clicks that redrew the table, ms, median / p90): waiting for the browser 16 / 27 · rules 12 / 24 · React render and layout effects 33 / 92 · effects 16 / 33 · to the frame that shows it 14 / 37 · that frame painted (the rig's next frame) 23 / 48

Leak control on the last turn: unbroken game 6363 elements, 894 listeners, 19.8 MB; after a reload 5280, 730, 9.7 MB.

## Round I

Clicks by kind: place 3× p50 90 p95 94 · choose 8× p50 100 p95 225 · recruit 3× p50 132 p95 132 · pay 3× p50 147 p95 161 · next-round 1× p50 83 p95 83 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3024 | 33 | 217 | 2 |
| span.cs-stack:js | 1769 | 33 | 167 | 3 |
| span.tc-line:tcline | 1969 | 17 | 133 | 2 |
| div.piece-flight.piece-res:js | 1660 | 17 | 167 | 2 |
| span.tick.num:bump | 1028 | 33 | 117 | 2 |
| div.path-inner:js | 1954 | 17 | 167 | 1 |
| span.worker-fig:panelland-under | 806 | 33 | 133 | 2 |
| div.as-card:js | 784 | 33 | 117 | 2 |
| path.wash:fill | 452 | 33 | 133 | 3 |
| span.cs-member.react-hop:js | 296 | 33 | 100 | 4 |
| button.card.lt-card:js | 573 | 17 | 117 | 2 |
| span.tick.dip:bump | 526 | 33 | 83 | 2 |

Longest frames: 230 ms (style/layout/paint) · 161 ms (hn 139) · 129 ms (Nf 96) · 121 ms (hn 107) · 110 ms (hn 64)

## Round II

Clicks by kind: place 4× p50 105 p95 105 · choose 7× p50 113 p95 215 · recruit 4× p50 – p95 – · pay 3× p50 91 p95 109 · pick 3× p50 54 p95 67 · next-round 1× p50 77 p95 77 · 6 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5750 | 33 | 200 | 2 |
| span.tc-line:tcline | 3803 | 33 | 200 | 2 |
| span.cs-stack:js | 3196 | 33 | 200 | 2 |
| div.path-inner:js | 2763 | 17 | 200 | 2 |
| button.card.lt-card:js | 1938 | 17 | 717 | 2 |
| svg.leader:cult-breathe | 1849 | 33 | 250 | 2 |
| g.blink:cult-blink | 1849 | 33 | 250 | 2 |
| img.sprite.scene:cult-shift | 1849 | 33 | 250 | 2 |
| img.sprite.scene:cult-breathe | 1849 | 33 | 250 | 2 |
| span.base:opacity | 1659 | 33 | 167 | 2 |
| path.wash:fill | 992 | 33 | 167 | 3 |
| span.tick.num:bump | 1458 | 33 | 167 | 2 |

Longest frames: 739 ms (style/layout/paint) · 183 ms (hn 7, hn 163) · 176 ms (style/layout/paint) · 169 ms (Nf 124) · 162 ms (hn 141)

## Round III

Clicks by kind: place 5× p50 – p95 – · recruit 5× p50 174 p95 184 · pay 5× p50 133 p95 141 · choose 3× p50 162 p95 299 · pick 1× p50 98 p95 98 · next-round 1× p50 63 p95 63 · 7 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 8124 | 33 | 750 | 2 |
| span.tc-line:tcline | 4099 | 33 | 183 | 2 |
| div.path-inner:js | 3818 | 33 | 183 | 2 |
| svg.leader:cult-breathe | 3690 | 17 | 750 | 2 |
| g.blink:cult-blink | 3690 | 17 | 750 | 2 |
| img.sprite.scene:cult-shift | 3690 | 17 | 750 | 2 |
| img.sprite.scene:cult-breathe | 3690 | 17 | 750 | 2 |
| span.lead:cult-scheme | 2334 | 33 | 750 | 3 |
| i.cs-min:cs-bob | 2327 | 33 | 750 | 3 |
| span.cs-stack:js | 3467 | 33 | 183 | 2 |
| i.cs-min:cs-bob-eager | 2239 | 33 | 750 | 3 |
| span.tick.num:bump | 2575 | 33 | 183 | 2 |

Longest frames: 756 ms (style/layout/paint) · 248 ms (Nf 192) · 196 ms (hn 165) · 186 ms (hn 84) · 160 ms (Lf 16, Nf 109)
