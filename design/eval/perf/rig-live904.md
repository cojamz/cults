# Perf rig: live904

2026-11-01T03:33:51.286Z · http://localhost:5301 · 4x CPU · relaxed · seed 20261028 · 1 person + 3 Normal bots · 7 min · game finished

Verdict: FAIL (8)
- round I: clicks p95 163 ms (bar 100)
- round I: hovers p95 105 ms (bar 100)
- round II: clicks p95 316 ms (bar 100)
- round II: idle table busy 16% (bar 10%)
- round III: clicks p95 235 ms (bar 100)
- leak: 5814 elements vs 4792 after a reload
- leak: 864 listeners vs 712 after a reload
- leak: heap 19.7 MB vs 9.2 MB after a reload

## Per round

| round | clicks p50/p95 ms | hovers p50/p95 ms | show frames p95 ms | hitch % | worst frame | long frames >100ms | idle busy % | idle style ms/3s | elements | listeners | heap MB |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I | 100 / 163 | 50 / 105 | 17 | 1 | 217 | 4 | 3 | 25 | 2025 | 485 | 10.5 |
| II | 151 / 316 | 62 / 75 | 17 | 1 | 517 | 10 | 16 | 14 | 3322 | 541 | 17 |
| III | 144 / 235 | 50 / 90 | 17 | 1 | 583 | 11 | 1 | 4 | 3777 | 593 | 19.6 |

Leak control on the last turn: unbroken game 5814 elements, 864 listeners, 19.7 MB; after a reload 4792, 712, 9.2 MB.

## Round I

Clicks by kind: place 3× p50 55 p95 56 · recruit 3× p50 107 p95 118 · pay 3× p50 145 p95 163 · next-round 1× p50 68 p95 68

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 3906 | 17 | 117 | 1 |
| span.cs-stack:js | 1448 | 17 | 117 | 2 |
| div.path-inner:js | 1880 | 17 | 117 | 1 |
| span.tc-line:tcline | 1702 | 17 | 117 | 1 |
| span.worker-fig:panelland-under | 821 | 17 | 117 | 2 |
| div.piece-flight.piece-res:js | 1402 | 17 | 117 | 1 |
| path.wash:fill | 278 | 33 | 117 | 5 |
| svg.leader:cult-breathe | 1311 | 17 | 217 | 1 |
| g.blink:cult-blink | 1311 | 17 | 217 | 1 |
| span.tick.num:bump | 1236 | 17 | 67 | 1 |
| img.sprite.scene:cult-shift | 1058 | 17 | 167 | 1 |
| img.sprite.scene:cult-breathe | 1058 | 17 | 167 | 1 |

Longest frames: 242 ms (style/layout/paint) · 120 ms (hn 111) · 105 ms (hn 89) · 102 ms (hn 88) · 93 ms (hn 5, hn 5, hn 69)

## Round II

Clicks by kind: place 4× p50 59 p95 61 · choose 1× p50 316 p95 316 · recruit 5× p50 178 p95 242 · pay 5× p50 152 p95 224 · next-round 1× p50 67 p95 67 · 1 changed nothing in 4 s

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 5482 | 17 | 517 | 1 |
| span.tc-line:tcline | 2660 | 17 | 133 | 1 |
| div.path-inner:js | 2478 | 17 | 83 | 1 |
| span.cs-stack:js | 2314 | 17 | 133 | 1 |
| div.piece-flight.piece-res:js | 2031 | 17 | 83 | 1 |
| span.worker-fig:panelland-under | 969 | 33 | 133 | 2 |
| span.tick.num:bump | 1737 | 17 | 83 | 1 |
| svg.leader:cult-breathe | 710 | 33 | 517 | 2 |
| g.blink:cult-blink | 710 | 33 | 517 | 2 |
| img.sprite.scene:cult-eager | 710 | 33 | 517 | 2 |
| i.cs-min:cs-bob | 710 | 33 | 517 | 2 |
| img.sprite.scene:cult-shift | 710 | 33 | 517 | 2 |

Longest frames: 528 ms (style/layout/paint) · 166 ms (hn 125, H 24) · 148 ms (hn 109, H 11) · 143 ms (hn 125) · 137 ms (style/layout/paint)

## Round III

Clicks by kind: place 5× p50 71 p95 78 · choose 7× p50 198 p95 236 · recruit 6× p50 147 p95 169 · pay 6× p50 144 p95 208 · next-round 1× p50 58 p95 58

| animating | frames | p95 | worst | hitch % |
|---|---|---|---|---|
| b.seat-delta.up:seatdelta | 7627 | 17 | 583 | 1 |
| span.tc-line:tcline | 4162 | 17 | 200 | 1 |
| div.path-inner:js | 3980 | 17 | 217 | 1 |
| span.cs-stack:js | 3226 | 17 | 100 | 1 |
| div.piece-flight.piece-res:js | 3211 | 17 | 217 | 1 |
| span.tick.num:bump | 2437 | 17 | 83 | 1 |
| span.base:opacity | 1199 | 17 | 100 | 2 |
| div.stage:opacity | 447 | 33 | 200 | 4 |
| path.wash:fill | 341 | 33 | 100 | 5 |
| div.as-card:js | 1674 | 17 | 167 | 1 |
| div.flight.shop-out:js | 749 | 17 | 217 | 2 |
| svg.leader:cult-breathe | 1448 | 17 | 133 | 1 |

Longest frames: 600 ms (style/layout/paint) · 200 ms (hn 74) · 188 ms (hn 5, hn 161) · 183 ms (hn 5, hn 131, H 21) · 153 ms (hn 112, H 22)
