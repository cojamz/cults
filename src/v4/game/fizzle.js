// An action or member that found nothing to act on (Sample with no rival On Recruit, Cover with no empty space, a steal
// with no one to rob): the engine only logged it and the turn moved on. Cory, Nov 5 playtest: "if something like this
// happens, it needs to alert the player rather than just move on". Read from the engine's own log line, so every
// "nothing to do" the engine words this way is told, not just Sample's.
// "no contest led" (Racket), never a bare "no contest": Sore Loser's steal says "won no contest; steals 5" (frame review, Nov 7)
const NOTHING = /\b(?:found no|found nothing|has nothing|gave nothing|changed nothing|swapped nothing|recruits nothing|turned nothing|takes none|does nothing|nothing to|nothing worth|none of|no (?:rival|shop|face-up|eligible|free|contest led|members?|white|silver|turn|recruited|round I|one|extra|minions?|empty)\b)/i;

/**
 * The note to show for a log line of name's that says it did nothing, or null. you: write it as "You"/"Your" (one
 * person at this screen); otherwise the name stays (hot seat).
 *   "P1: no rival's member has an On Recruit to copy." → "Nothing to copy: no rival's member has an On Recruit to copy."
 */
export function fizzleNote(line, name, you = true) {
  if (!line || !name || !line.startsWith(name)) return null;
  const rest = line.slice(name.length);
  if (!/^(?::|'s |’s | )/.test(rest)) return null;
  if (/couldn't afford anything/.test(rest)) return null; // its own toast
  // "P1: no rival's…" / "P1's Pawn Shop: nothing to turn in." / "P1 found no empty action to copy."
  const body = rest.replace(/^:\s*/, '');
  const said = /^['’]s /.test(rest) ? `${you ? 'Your' : `${name}’s`} ${rest.replace(/^['’]s /, '')}` : /^ /.test(rest) ? `${you ? 'You' : name}${you ? youVerb(rest) : rest}` : body.charAt(0).toUpperCase() + body.slice(1);
  // only the "nothing happened" part decides it: a line that also names a gain ("so only the yellow") still counts
  if (!NOTHING.test(said) && !NOTHING.test(rest)) return null;
  return said.replace(new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['’]s\\b`, 'g'), you ? 'your' : `${name}’s`)
    .replace(new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g'), you ? 'you' : name)
    .replace(/^you\b/, 'You').replace(/^your\b/, 'Your');
}

// "P1 has no minions…" said to you is "You have no minions…", not "You has" (picky run, Nov 6).
const IRREGULAR = { has: 'have', is: 'are', was: 'were', does: 'do', goes: 'go' };
function youVerb(rest) {
  return rest.replace(/^ ([a-z]+)\b/, (all, v) => {
    if (IRREGULAR[v]) return ` ${IRREGULAR[v]}`;
    if (/[^aeiou]ies$/.test(v)) return ` ${v.slice(0, -3)}y`; // copies → copy
    if (/(?:ches|shes|sses|xes)$/.test(v)) return ` ${v.slice(0, -2)}`;
    if (/[^su]s$/.test(v)) return ` ${v.slice(0, -1)}`; // recruits → recruit, lies → lie
    return all; // found, gave, used: already fine after "You"
  });
}

const esc = t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/** The space name took last among these log lines ("P1 took Sample (Green)." → "Sample"), or null. */
export function tookSpace(lines, name) {
  const re = new RegExp(`^${esc(name)} took (.+?) \\(`);
  const hit = lines.map(l => re.exec(l)).filter(Boolean).pop();
  return hit ? hit[1] : null;
}
