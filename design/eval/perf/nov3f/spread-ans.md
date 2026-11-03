# Rig spread: ans

2026-11-03T18:03:40.636Z · http://localhost:5292/ · 3 runs, 1 at a time · --out=design/eval/perf/nov3f

Every run played the same game (55 picks).

Median (min–max) across runs.

| round | clicks p95 ms | choose p95 ms | place p95 ms | dead clicks | hovers p95 ms | show frames p95 ms | hitch % | idle busy % | round busy % |
|---|---|---|---|---|---|---|---|---|---|
| I | 270 (204–277) | 245 (204–270) | 91 (86–101) | 0 (0–0) | 96 (81–106) | 33.3 (33.3–33.4) | 3 (2–3) | 3 (2–3) | 64 (60–66) |
| II | 209 (205–296) | 164 (162–182) | 109 (91–205) | 0 (0–0) | 91 (91–98) | 33.4 (33.3–33.4) | 3 (3–3) | 2 (1–2) | 66 (65–67) |
| III | 227 (227–258) | 155 (121–221) | 139 (122–172) | 0 (0–0) | 100 (97–105) | 33.4 (33.4–33.4) | 4 (3–4) | 7 (7–7) | 72 (71–72) |

Leak control (unbroken vs reload): elements 6283 (6283–6287) vs 5093 (5093–5093), heap MB 20.1 (19.5–20.1) vs 9.8 (9.7–9.8).

Per run: rig-ans-1.md, rig-ans-2.md, rig-ans-3.md.
