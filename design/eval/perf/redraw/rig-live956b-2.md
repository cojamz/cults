# Perf rig: live956b-2

2026-11-01T10:37:51.786Z · http://localhost:5316 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 8 min · game finished

Verdict: FAIL (5)
- round I: clicks p95 166 ms (bar 100)
- round II: clicks p95 178 ms (bar 100)
- round II: hovers p95 103 ms (bar 100)
- round III: clicks p95 164 ms (bar 100)
- leak: heap 19.2 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 96 / 166 | 48 / 68 | 33 | 2 | 217 | 14 | 3 | 12 | 2363 | 499 | 13 |
| II | 102 / 178 | 49 / 103 | 33 | 2 | 800 | 11 | 4 | 20 | 3527 | 583 | 16.3 |
| III | 91 / 164 | 65 / 98 | 33 | 2 | 683 | 25 | 4 | 7 | 3921 | 582 | 20.9 |

Click phases (43 clicks that redrew the table, ms, median / p90): waiting for the browser 14 / 25 · rules 5 / 13 · React render and layout effects 31 / 52 · effects 17 / 30 · to the frame that shows it 13 / 25 · that frame painted (the rig's next frame) 19 / 38

Leak control on the last turn: unbroken game 5955 elements, 796 listeners, 19.2 MB; after a reload 5430, 738, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 84 p95 84 · choose 8× p50 76 p95 166 · recruit 3× p50 147 p95 147 · pay 3× p50 131 p95 150 · next-round 1× p50 84 p95 84 · 2 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3251 | 33 | 217 | 2 |
| span.tc-line:tcline | 1919 | 33 | 133 | 2 |
| div.path-inner:js | 1876 | 33 | 167 | 2 |
| span.cs-stack:js | 1760 | 33 | 133 | 2 |
| div.piece-flight.piece-res:js | 1484 | 33 | 167 | 2 |
| svg.leader:cult-breathe | 1222 | 33 | 200 | 2 |
| g.blink:cult-blink | 1222 | 33 | 200 | 2 |
| img.sprite.scene:cult-shift | 1222 | 33 | 200 | 2 |
| img.sprite.scene:cult-breathe | 1166 | 33 | 200 | 2 |
| div.as-card:js | 720 | 33 | 117 | 3 |
| span.worker-fig:panelland-under | 684 | 33 | 117 | 3 |
| span.tick.num:bump | 1018 | 33 | 133 | 2 |

Longest frames: 226 ms (style/layout/paint) · 192 ms (hn 156) · 144 ms (style/layout/paint) · 126 ms (Lf 84) · 123 ms (hn 98)

## Round II

Clicks by kind: place 4× p50 68 p95 68 · choose 7× p50 99 p95 178 · recruit 4× p50 102 p95 102 · pay 4× p50 113 p95 175 · next-round 1× p50 102 p95 102 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5562 | 33 | 167 | 2 |
| span.tc-line:tcline | 3339 | 33 | 117 | 2 |
| div.path-inner:js | 3224 | 33 | 167 | 2 |
| div.piece-flight.piece-res:js | 3029 | 17 | 167 | 2 |
| span.cs-stack:js | 2600 | 33 | 117 | 2 |
| span.tick.num:bump | 1571 | 33 | 117 | 3 |
| svg.leader:cult-breathe | 1871 | 33 | 167 | 2 |
| g.blink:cult-blink | 1871 | 33 | 167 | 2 |
| img.sprite.scene:cult-shift | 1871 | 33 | 167 | 2 |
| img.sprite.scene:cult-breathe | 1871 | 33 | 167 | 2 |
| button.card.lt-card:js | 1843 | 33 | 800 | 2 |
| span.cs-member:js | 581 | 33 | 117 | 4 |

Longest frames: 820 ms (style/layout/paint) · 174 ms (hn 158) · 152 ms (hn 5, hn 135) · 147 ms (Lf 122) · 138 ms (Lf 83)

## Round III

Clicks by kind: place 5× p50 65 p95 110 · choose 10× p50 91 p95 164 · recruit 5× p50 111 p95 111 · pay 5× p50 106 p95 183 · pick 3× p50 52 p95 55 · next-round 1× p50 42 p95 42 · 5 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7913 | 33 | 683 | 2 |
| span.tc-line:tcline | 5335 | 33 | 217 | 2 |
| span.cs-stack:js | 5024 | 33 | 217 | 2 |
| div.path-inner:js | 3911 | 33 | 233 | 2 |
| span.tick.num:bump | 2316 | 33 | 183 | 2 |
| span.base:opacity | 1447 | 33 | 217 | 3 |
| span.worker:js | 1279 | 33 | 233 | 3 |
| svg.leader:cult-breathe | 1889 | 33 | 683 | 2 |
| g.blink:cult-blink | 1889 | 33 | 683 | 2 |
| img.sprite.scene:cult-shift | 1889 | 33 | 683 | 2 |
| img.sprite.scene:cult-breathe | 1889 | 33 | 683 | 2 |
| button.card.lt-card:js | 1855 | 33 | 217 | 2 |

Longest frames: 697 ms (style/layout/paint) · 229 ms (hn 6, hn 204) · 215 ms (hn 205) · 184 ms (hn 72) · 170 ms (hn 141)
