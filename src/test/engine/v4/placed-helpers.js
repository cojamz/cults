// Help Yourself steals 1 per minion its taker has placed this round, this one included (Cory, Nov 10). A test that needs
// a bigger steal puts some of the player's minions on the wheel first: placed(s, 0, 2) before Help Yourself steals 3.
// Inner-ring spaces of colors the test names in `avoid` are skipped; the inner rings fill first, so round I's open
// spaces stay free.
export function placed(s, pid, n, avoid = ['thieves']) {
  for (let qi = s.quadrants.length - 1; qi >= 0 && n > 0; qi--) {
    if (avoid.includes(s.quadrants[qi])) continue;
    for (let i = 5; i >= 0 && n > 0; i--) { const k = `${qi}-${i}`; if (s.slots[k] == null) { s.slots[k] = pid; n--; } }
  }
  if (n > 0) throw new Error('no room to place');
  return s;
}
