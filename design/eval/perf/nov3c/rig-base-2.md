# Perf rig: base-2

2026-11-03T16:38:02.134Z · http://localhost:5291/ · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (7)
- round I: clicks p95 167 ms (bar 100)
- round II: clicks p95 355 ms (bar 100)
- round III: clicks p95 198 ms (bar 100)
- idle busy grows 2% → 7% over the game
- leak: 6290 elements vs 5093 after a reload
- leak: 856 listeners vs 697 after a reload
- leak: heap 20 MB vs 9.8 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 90 / 167 | 53 / 81 | 33 | 2 | 267 | 8 | 2 | 4 | 2490 | 492 | 13.5 |
| II | 134 / 355 | 63 / 78 | 33 | 2 | 817 | 14 | 1 | 2 | 3575 | 551 | 17.4 |
| III | 121 / 198 | 47 / 96 | 33 | 2 | 700 | 33 | 7 | 41 | 3945 | 577 | 20.5 |

Click phases (42 clicks that redrew the table, ms, median / p90): waiting for the browser 18 / 44 · rules 5 / 18 · React render and layout effects 41 / 64 · effects 12 / 41 · to the frame that shows it 16 / 25 · that frame painted (the rig's next frame) 29 / 48

Leak control on the last turn: unbroken game 6290 elements, 856 listeners, 20 MB; after a reload 5093, 697, 9.8 MB.

## Round I

Clicks by kind: place 3× p50 66 p95 73 · choose 5× p50 69 p95 167 · recruit 3× p50 140 p95 151 · pay 3× p50 98 p95 103 · next-round 1× p50 81 p95 81

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3300 | 33 | 267 | 2 |
| div.piece-flight.piece-res:js | 1619 | 17 | 217 | 2 |
| span.cs-stack:js | 1579 | 33 | 217 | 2 |
| span.base:opacity | 727 | 33 | 133 | 3 |
| span.tick.num:bump | 1082 | 33 | 83 | 2 |
| div.path-inner:js | 2028 | 17 | 217 | 1 |
| span.tc-line:tcline | 1930 | 33 | 133 | 1 |
| span.worker-fig:panelland-under | 802 | 33 | 133 | 2 |
| path.wash:fill | 200 | 67 | 133 | 8 |
| div.as-card:js | 698 | 17 | 117 | 2 |
| button.card.lt-card:js | 654 | 33 | 83 | 2 |
| span.face:opacity | 111 | 67 | 133 | 11 |

Longest frames: 288 ms (style/layout/paint) · 216 ms (hn 188) · 176 ms (style/layout/paint) · 148 ms (hn 119) · 112 ms (hn 106)

## Round II

Clicks by kind: place 4× p50 74 p95 86 · recruit 4× p50 156 p95 229 · pay 4× p50 137 p95 138 · choose 2× p50 355 p95 355 · next-round 1× p50 115 p95 115

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5615 | 33 | 817 | 2 |
| span.tc-line:tcline | 3177 | 33 | 200 | 2 |
| span.cs-stack:js | 2752 | 33 | 300 | 2 |
| span.tick.num:bump | 1520 | 33 | 100 | 2 |
| div.path-inner:js | 2889 | 17 | 117 | 1 |
| div.as-card:js | 1164 | 33 | 200 | 2 |
| div.piece-flight.piece-res:js | 2309 | 17 | 117 | 1 |
| svg.leader:cult-breathe | 1075 | 33 | 133 | 2 |
| g.blink:cult-blink | 1075 | 33 | 133 | 2 |
| img.sprite.scene:cult-shift | 1075 | 33 | 133 | 2 |
| img.sprite.scene:cult-breathe | 1075 | 33 | 133 | 2 |
| span.worker-fig:panelland-under | 916 | 33 | 200 | 2 |

Longest frames: 827 ms (style/layout/paint) · 257 ms (Lf 192) · 168 ms (hn 62) · 159 ms (Lf 138) · 135 ms (hn 122)

## Round III

Clicks by kind: place 5× p50 98 p95 122 · recruit 7× p50 122 p95 147 · pay 8× p50 185 p95 218 · pick 1× p50 144 p95 144 · choose 5× p50 78 p95 198 · next-round 1× p50 69 p95 69

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7706 | 33 | 700 | 2 |
| span.tc-line:tcline | 3726 | 33 | 333 | 3 |
| span.cs-stack:js | 3463 | 33 | 333 | 3 |
| div.piece-flight.piece-res:js | 3117 | 33 | 250 | 2 |
| svg.leader:cult-breathe | 2069 | 33 | 700 | 3 |
| g.blink:cult-blink | 2069 | 33 | 700 | 3 |
| img.sprite.scene:cult-shift | 2069 | 33 | 700 | 3 |
| img.sprite.scene:cult-breathe | 2069 | 33 | 700 | 3 |
| span.tick.num:bump | 2274 | 33 | 167 | 2 |
| div.path-inner:js | 4186 | 33 | 200 | 1 |
| i.cs-min:cs-bob-eager | 774 | 33 | 700 | 5 |
| i.cs-min:cs-bob | 774 | 33 | 700 | 5 |

Longest frames: 714 ms (style/layout/paint) · 302 ms (hn 291) · 274 ms (hn 110) · 245 ms (hn 6, hn 221) · 222 ms (hn 184)

Frames over 2 s, with the screen at the time:
- 2153 ms · setup · prompt "P4 is picking a cloak ···" · hover "" · options 
