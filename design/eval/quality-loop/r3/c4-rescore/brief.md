# C4 rescore (rubric v1.2)

You score ONE rubric question, C4 Fun, for each card named in cards.txt (76 cards). The cards' full text and their colors are in ../board-with-plants.txt (that file is the truth; the guest members are in the Guest section).

C4 Fun (v1.2): Is it fun to play, and fair to whoever it hits?
- 2: a moment the owner enjoys; a sting the victim shrugs off or can see coming and block; a gift.
- 1: fine.
- 0: ONLY a sting that feels bad (the victim feels robbed: losing a member before round III, choosing their own punishment, being singled out with no answer; Cory on Shake Down: "just feels too bad"), or a card that is no fun to play.
- Whether rivals notice or react is NOT this question (that is C5). A quiet card nobody else notices is not a 0 here; judge whether playing it is fun for its owner.

Picture one concrete turn with each card in a 4-player game before scoring. Use the whole range.
Do not read any judge-*.json in ../, ranking files, design/decisions.md, design/pitch-ledger.md, calibration files or /mnt/project-files/quality/pitches/.

Write JSON to the path you are given: an array of {"name","C4":0|1|2,"why":"one plain line"}, one entry per name in cards.txt, names exactly as listed. Re-read the file after writing and check every name is there.
