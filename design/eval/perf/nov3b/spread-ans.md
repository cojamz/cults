# Rig spread: ans

2026-11-03T16:22:38.556Z · http://localhost:5292/ · 3 runs, 1 at a time · --out=design/eval/perf/nov3b

Every run played the same game (55 picks).

Median (min–max) across runs.

| round | clicks p95 ms | choose p95 ms | place p95 ms | dead clicks | hovers p95 ms | show frames p95 ms | hitch % | idle busy % | round busy % |
|---|---|---|---|---|---|---|---|---|---|
| I | 294 (246–391) | 294 (246–391) | 94 (89–167) | 0 (0–0) | 95 (71–109) | 33.4 (33.3–33.4) | 3 (2–3) | 3 (3–3) | 64 (62–65) |
| II | 213 (211–271) | 202 (117–208) | 121 (92–149) | 0 (0–0) | 105 (96–126) | 33.3 (33.3–33.3) | 3 (2–3) | 1 (1–1) | 62 (62–64) |
| III | 213 (198–258) | 156 (119–181) | 133 (131–258) | 0 (0–0) | 99 (79–132) | 33.4 (33.3–33.4) | 3 (3–3) | 6 (5–7) | 68 (67–68) |

Leak control (unbroken vs reload): elements 6286 (6286–6287) vs 5093 (5093–5093), heap MB 20.1 (20–20.3) vs 9.8 (9.7–9.8).

Per run: rig-ans-1.md, rig-ans-2.md, rig-ans-3.md.
