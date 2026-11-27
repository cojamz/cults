# Where slow clicks spend their time: prof-cpu

9 clicks over 150 ms, CPU-profiled (self time, 4x CPU). Shares, not ms: profiling slows every click.

Main thread over those clicks: 3589 ms busy; style 489 ms in 394 recalcs, layout 151 ms in 65, script 978 ms.

| share | ms | function | clicks |
|---|---|---|---|
| 69.1% | 4387 | (program) :0 | recruit choose pay |
| 6.0% | 382 | (idle) :0 | recruit choose pay |
| 3.4% | 216 | getBoundingClientRect :0 | recruit choose pay |
| 1.2% | 79 | elementsFromPoint :0 | choose pay |
| 1.2% | 78 | removeChild :0 | choose pay |
| 0.8% | 53 | focus :0 | recruit choose pay |
| 0.8% | 52 | (garbage collector) :0 | recruit pay choose |
| 0.7% | 46 | (anon) :0 | choose pay |
| 0.7% | 43 | querySelector :0 | recruit choose pay |
| 0.6% | 39 | (anon) ShopCards-B2z8DmQp.js:81 | recruit choose pay |
| 0.4% | 28 | query :5287 | choose pay |
| 0.4% | 26 | querySelectorAll :0 | recruit choose pay |
| 0.4% | 24 | requestAnimationFrame :0 | choose pay |
| 0.4% | 24 | getAnimations :0 | choose pay |
| 0.3% | 18 | ai index-Sd7PAssw.js:4170 | recruit choose pay |
| 0.3% | 17 | worker.onmessage Info-oLGV3Xom.js:2574 | recruit choose |
| 0.3% | 17 | kk index-Sd7PAssw.js:5366 | recruit choose pay |
| 0.3% | 17 | (anon) CultSeat-uM50obXR.js:470 | pay choose |
| 0.3% | 16 | (anon) index-Sd7PAssw.js:3083 | recruit choose pay |
| 0.2% | 16 | b index-Sd7PAssw.js:2627 | pay choose |
| 0.2% | 15 | inert ShopCards-B2z8DmQp.js:77 | recruit pay choose |
| 0.2% | 15 | flush Glyphs-CGGnXiZF.js:5201 | choose pay |
| 0.2% | 14 | previewNode :7569 | choose pay |
| 0.2% | 14 | (anon) :1 | choose pay |
| 0.2% | 13 | postMessage :0 | choose |
| 0.2% | 13 | hk index-Sd7PAssw.js:5284 | recruit choose pay |
| 0.2% | 12 | snapshotShop ShopCards-B2z8DmQp.js:78 | recruit pay choose |
| 0.2% | 12 | eachMemberOf Glyphs-CGGnXiZF.js:6576 | choose |
| 0.2% | 12 | q index-Sd7PAssw.js:382 | choose pay |
| 0.2% | 11 | Gl index-Sd7PAssw.js:7015 | choose pay |
| 0.2% | 11 | requestPreviews Info-oLGV3Xom.js:2590 | choose |
| 0.2% | 11 | toStanding Glyphs-CGGnXiZF.js:9661 | choose |
| 0.2% | 11 | (anon) ShopCards-B2z8DmQp.js:224 | choose |
| 0.2% | 10 | (anon) Glyphs-CGGnXiZF.js:5229 | pay |
| 0.2% | 10 | look :37 | choose |
| 0.1% | 9 | setAttribute :0 | choose |
| 0.1% | 9 | plainCopy Glyphs-CGGnXiZF.js:22 | recruit choose pay |
| 0.1% | 9 | k2 index-Sd7PAssw.js:3699 | pay choose |
| 0.1% | 8 | hi index-Sd7PAssw.js:4209 | recruit pay choose |
| 0.1% | 8 | GameScreen App-CLV6Bl0Q.js:6551 | recruit pay choose |
| 0.1% | 8 | takePiece ShopCards-B2z8DmQp.js:423 | pay choose |
| 0.1% | 8 | Nb index-Sd7PAssw.js:1947 | recruit choose pay |
| 0.1% | 8 | (anon) Glyphs-CGGnXiZF.js:6204 | choose |
| 0.1% | 8 | setItem :0 | recruit pay choose |
| 0.1% | 8 | animate :0 | pay choose |
| 0.1% | 7 | setTimeout :0 | pay choose |
| 0.1% | 7 | (anon) ShopCards-B2z8DmQp.js:2658 | choose |
| 0.1% | 7 | write App-CLV6Bl0Q.js:2669 | choose pay |
| 0.1% | 7 | gainsBetween ShopCards-B2z8DmQp.js:1234 | pay choose |
| 0.1% | 7 | m2 index-Sd7PAssw.js:3776 | recruit pay choose |
| 0.1% | 7 | C2 index-Sd7PAssw.js:3837 | recruit choose pay |
| 0.1% | 6 | matchMedia :0 | choose pay |
| 0.1% | 6 | sigOf App-CLV6Bl0Q.js:5703 | choose pay |
| 0.1% | 6 | appendChild :0 | recruit choose pay |
| 0.1% | 6 | (anon) ShopCards-B2z8DmQp.js:4012 | recruit |
| 0.1% | 6 | reactionsBetween CultSeat-uM50obXR.js:437 | pay choose |
| 0.1% | 6 | push Glyphs-CGGnXiZF.js:5144 | pay |
| 0.1% | 6 | ua index-Sd7PAssw.js:1398 | pay choose |
| 0.1% | 6 | tick :12 | recruit choose pay |
| 0.1% | 6 | Rich Info-oLGV3Xom.js:540 | recruit choose |

## Total time (self plus what it calls), our code only

| share | ms | function |
|---|---|---|
| 2.0% | 125 | submit App-CLV6Bl0Q.js:879 |
| 2.0% | 124 | apply App-CLV6Bl0Q.js:811 |
| 1.7% | 105 | snapshotShop ShopCards-B2z8DmQp.js:78 |
| 1.5% | 97 | pay App-CLV6Bl0Q.js:4584 |
| 1.3% | 85 | applyMove Glyphs-CGGnXiZF.js:5408 |
| 1.3% | 84 | accounted Glyphs-CGGnXiZF.js:7036 |
| 1.3% | 83 | playChain ShopCards-B2z8DmQp.js:2476 |
| 1.1% | 68 | step$1 App-CLV6Bl0Q.js:101 |
| 1.0% | 65 | GameScreen App-CLV6Bl0Q.js:6551 |
| 1.0% | 65 | underCause Glyphs-CGGnXiZF.js:5153 |
| 0.9% | 59 | Wheel Wheel-D_Ea5jPz.js:414 |
| 0.9% | 54 | eachMember Glyphs-CGGnXiZF.js:6642 |
| 0.8% | 54 | emit App-CLV6Bl0Q.js:805 |
| 0.8% | 53 | eachMemberOf Glyphs-CGGnXiZF.js:6576 |
| 0.8% | 52 | emit App-CLV6Bl0Q.js:21 |
| 0.8% | 51 | onClick ShopCards-B2z8DmQp.js:4460 |
| 0.7% | 46 | fit ShopCards-B2z8DmQp.js:4546 |
| 0.7% | 45 | resolveTask Glyphs-CGGnXiZF.js:5908 |
| 0.7% | 45 | over2 ShopCards-B2z8DmQp.js:4552 |
| 0.7% | 42 | sameSeat App-CLV6Bl0Q.js:5734 |
| 0.6% | 41 | advance Glyphs-CGGnXiZF.js:5716 |
| 0.6% | 40 | sigOf App-CLV6Bl0Q.js:5703 |
| 0.6% | 36 | recruited Glyphs-CGGnXiZF.js:6352 |
| 0.5% | 34 | flush Glyphs-CGGnXiZF.js:5201 |
| 0.5% | 33 | planChain ShopCards-B2z8DmQp.js:1551 |
| 0.5% | 31 | onClick App-CLV6Bl0Q.js:5313 |
| 0.5% | 30 | push Glyphs-CGGnXiZF.js:5144 |
| 0.5% | 30 | GameScreen.beforeShow.current App-CLV6Bl0Q.js:6892 |
| 0.5% | 30 | buyFollowers Glyphs-CGGnXiZF.js:6517 |
| 0.5% | 29 | runTask Glyphs-CGGnXiZF.js:6014 |
| 0.4% | 27 | buyFollowersNow Glyphs-CGGnXiZF.js:6520 |
| 0.4% | 27 | incomeOf ShopCards-B2z8DmQp.js:3529 |
| 0.4% | 26 | roundStartIncome Info-oLGV3Xom.js:191 |
| 0.4% | 26 | place App-CLV6Bl0Q.js:4595 |
| 0.4% | 25 | resume Glyphs-CGGnXiZF.js:5443 |
| 0.4% | 24 | stageCenter ShopCards-B2z8DmQp.js:1340 |
| 0.4% | 24 | hubRect ShopCards-B2z8DmQp.js:1358 |
| 0.4% | 23 | requestPreviews Info-oLGV3Xom.js:2590 |
| 0.3% | 21 | startRound Glyphs-CGGnXiZF.js:6097 |
| 0.3% | 21 | standings Glyphs-CGGnXiZF.js:9669 |
| 0.3% | 21 | ShopCards ShopCards-B2z8DmQp.js:4475 |
| 0.3% | 19 | pieces ShopCards-B2z8DmQp.js:1624 |
| 0.3% | 18 | scoringSnapshot Glyphs-CGGnXiZF.js:9682 |
| 0.3% | 17 | measure ShopCards-B2z8DmQp.js:2496 |
| 0.3% | 17 | dist ShopCards-B2z8DmQp.js:1557 |
| 0.3% | 17 | fly ShopCards-B2z8DmQp.js:1558 |
| 0.3% | 17 | worker.onmessage Info-oLGV3Xom.js:2574 |
| 0.3% | 16 | send ShopCards-B2z8DmQp.js:4701 |
| 0.2% | 15 | inert ShopCards-B2z8DmQp.js:77 |
| 0.2% | 14 | saveLocal App-CLV6Bl0Q.js:2749 |
| 0.2% | 14 | flushLocalSave App-CLV6Bl0Q.js:2762 |
| 0.2% | 14 | requestIdleCallback.timeout App-CLV6Bl0Q.js:2783 |
| 0.2% | 14 | write App-CLV6Bl0Q.js:2669 |
| 0.2% | 14 | wrapped Glyphs-CGGnXiZF.js:3867 |
| 0.2% | 13 | pop Glyphs-CGGnXiZF.js:5148 |
| 0.2% | 13 | where ShopCards-B2z8DmQp.js:2485 |
| 0.2% | 13 | stageRect ShopCards-B2z8DmQp.js:1349 |
| 0.2% | 12 | one ShopCards-B2z8DmQp.js:481 |
| 0.2% | 12 | flyPath ShopCards-B2z8DmQp.js:475 |
| 0.2% | 12 | snapshotChips ShopCards-B2z8DmQp.js:221 |

## Browser calls by caller (forced style and layout show up here)

| ms | call ← caller |
|---|---|
| 79 | elementsFromPoint ← ? |
| 78 | removeChild ← Jk index-Sd7PAssw.js:5944 |
| 45 | getBoundingClientRect ← over2 ShopCards-B2z8DmQp.js:4552 |
| 32 | getBoundingClientRect ← (anon) ShopCards-B2z8DmQp.js:3246 |
| 28 | query ← ? |
| 27 | querySelector ← ? |
| 25 | focus ← (anon) Info-oLGV3Xom.js:1359 |
| 25 | getBoundingClientRect ← place App-CLV6Bl0Q.js:4595 |
| 24 | getBoundingClientRect ← stageCenter ShopCards-B2z8DmQp.js:1340 |
| 24 | getAnimations ← ? |
| 24 | requestAnimationFrame ← ? |
| 22 | getBoundingClientRect ← snapshotShop ShopCards-B2z8DmQp.js:78 |
| 22 | getBoundingClientRect ← ? |
| 19 | focus ← (anon) Info-oLGV3Xom.js:1311 |
| 14 | previewNode ← ? |
| 11 | getBoundingClientRect ← shown ShopCards-B2z8DmQp.js:2175 |
| 10 | querySelectorAll ← snapshotShop ShopCards-B2z8DmQp.js:78 |
| 10 | querySelectorAll ← ? |
| 10 | look ← ? |
| 9 | setAttribute ← ua index-Sd7PAssw.js:1398 |
| 8 | querySelector ← (anon) App-CLV6Bl0Q.js:6712 |
| 8 | postMessage ← requestPreviews Info-oLGV3Xom.js:2590 |
| 8 | getBoundingClientRect ← (anon) ShopCards-B2z8DmQp.js:317 |
| 8 | getBoundingClientRect ← place2 ShopCards-B2z8DmQp.js:3974 |
| 8 | getBoundingClientRect ← (anon) ShopCards-B2z8DmQp.js:246 |
| 7 | querySelector ← turnCardDock App-CLV6Bl0Q.js:6456 |
| 7 | setItem ← write App-CLV6Bl0Q.js:2669 |
| 6 | getBoundingClientRect ← (anon) ShopCards-B2z8DmQp.js:81 |
| 6 | tick ← ? |
| 6 | focus ← (anon) App-CLV6Bl0Q.js:6994 |
| 5 | getBoundingClientRect ← (anon) ShopCards-B2z8DmQp.js:2968 |
| 5 | postMessage ← exports$1.unstable_scheduleCallback index-Sd7PAssw.js:1227 |
| 5 | elementFromPoint ← ? |
| 5 | checkVisibility ← ? |
| 4 | getTotalLength ← getBoundingClientRect ShopCards-B2z8DmQp.js:2232 |
| 3 | evaluate ← ? |
| 3 | now ← Jl index-Sd7PAssw.js:7084 |
| 3 | parseEvaluationResultValue ← ? |
| 3 | setTimeout ← watch Info-oLGV3Xom.js:2548 |
| 3 | appendChild ← Gk index-Sd7PAssw.js:5935 |
