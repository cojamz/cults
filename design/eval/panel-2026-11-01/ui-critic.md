# UI critic (blind, laptop 1270x700), live v0.9.908. Grade C. Box load 7-11: re-time every ms on a quiet box.
Table Red, Blue, Magenta, Purple vs 3 Normal bots. Shots were in /tmp/eyes/uicritic/ (container-local).

1. major: wheel faces never show the space's name, but toasts, log and "since your last turn" use only names (Tryout, Help Yourself, Stash, Lie Low, Hold Up).
2. major, CONFIRMED BUG: shop corner said Recruit Bonus counts as 2 members, seat hover 1. Shop used Claude's Oct 28 reading (worth N = N members) that Cory overturned Oct 29. Fixed.
3. major: payout vs face. Stash face +2, you'd-get +3, +3 landed, no reason shown. Lie Low face shows no gain, paid +1 magenta (the every-space +1 of its color).
4. major: no hover complete in 100 ms; most filled in 2-4 bursts (Stash 158/326, Hold Up 205/515, Peek 139/369, seat member 254/641). Load-inflated; bursts count regardless.
5. major: shop faces show no ability; details switch crops art and text size varies.
6. major: circled number in shop card corner repeats the total cost, undecoded.
7. major: chosen avatars (knight, robot, crab, ghost) don't appear as seat portraits; all seats are the same grey hooded figure.
8. major: seats re-sort by turn order each round.
9. major: turn read: own 1 magenta stolen before first turn, toast cut off ("P3 took Help Yourself ... from P2…", "+4 more").
10. major: pay sheet shows even when payment is forced; empty "Keeping" row.
11. major: pay sheet opens in different places (right for Crew, centered for Recruit Bonus).
12. major: round-end scoring panel is see-through over the wheel; summary rows sort by count, animation by seat.
13. major: Peek's reorder row opens ~600 px from the space; "Sticky Finge" clipped.
14. major: artifact draft says "pick an artifact" three times; seat says "from the wheel" but it's a popover.
15. major: contest leaders on the rim use the same tiny sprites as minions.
16. major: setup 1.0/2.0 badges unexplained; Gold offered (now fixed in v0.9.912); pick-order numbers ~9 px.
17-28 polish: minion tokens ~12 px; card hovers lack "short by" (rulebook promises it); "since your last turn" flips presentation and shows last round's moves into round II; shop grid 2x3 then 3 columns with a lone card; summary's "more each round" not on any face; log repeats Right Away; "1 members affordable" (fixed); seat counts 11 px and zeros as loud as counts; purple rim prize turned 90°; setup card rows misaligned; commit hash on home; start 907 ms then choppy intro (load).
Works: turn header with Undo and steps; one-click follower buys; followers hover breakdown; contest rim hover; linked log.
