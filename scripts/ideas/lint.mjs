// Hard-rule check on card text for the idea pipeline (scripts/ideas/README.md). Catches the rules a word can show;
// the rest (both sides of a choice, works without any one color, refused shapes) stays on the paper sheet.
// Usage: node scripts/ideas/lint.mjs <batch.json>   or   node scripts/ideas/lint.mjs --text "<card text>" [--space] [--color <own color>]
// Exit 1 when any card fails.
import { readFileSync } from 'node:fs';

const RULES = [
  [/\b(top( \d+)?( (member|card)s?)? of the (pile|deck)|from the pile|draws? (a|the|from)|random(ly|ness)?|shuffle[sd]?|face[- ]down|hidden|secret(ly)?|look at)\b/i,
    'not public and certain (Cory, Nov 7: no pile draws, no randomness, all public information)'],
  [/\b(cheaper|costs? (\d+ )?less|discount)\b/i, 'a member price that changes as you play (verdict 23)'],
  [/(?<!Goes Last )\btoken\b(?![^.]*Goes Last)/i, 'a token other than the Goes Last token (verdict 21: tokens come from Cory)'],
  [/\b(copies|copy|skip(s|ped)?|gift(s|ed)?)\b.*\brival'?s? (action|turn)/i, 'may lean on another color\'s verb (verdict 20): check it works without that color'],
];
// A card naming its own color's spaces or members is fine (Bench Warmers: "Green spaces"); another color's is flagged.
const OTHER_COLOR = /\b(Red|Green|Magenta|Blue|Purple|Silver|Yellow|White) (space|action|member)s?\b/g;
const SPACE_ONLY = [
  [/\b(this round|whenever|at round (start|end)|round end|round start|until)\b/i, 'a space must finish when taken (verdict 11): lasting effects belong on members'],
];
const CHOICE = /\b(they choose|rival chooses|each rival chooses|or you|may choose)\b/i;

function check({ text, kind, color }) {
  const out = [];
  for (const [re, why] of RULES) if (re.test(text)) out.push(`FAIL ${text.match(re)[0]}: ${why}`);
  for (const m of text.matchAll(OTHER_COLOR)) if (!color || m[1].toLowerCase() !== String(color).toLowerCase())
    out.push(`FAIL ${m[0]}: names another color's spaces or members: check it works without that color`);
  if (kind === 'space') for (const [re, why] of SPACE_ONLY) if (re.test(text)) out.push(`FAIL ${text.match(re)[0]}: ${why}`);
  if (CHOICE.test(text)) out.push('CHECK a choice: the paper sheet must play the chooser\'s side; if one side always wins, cut it (verdict 15b). Choosing on another player\'s turn: avoid; bend it only when it really makes sense, and say why (Cory, Nov 7).');
  const words = text.split(/\s+/).length;
  if (words > 22) out.push(`CHECK ${words} words: one plain sentence a table reads first time`);
  return out;
}

const args = process.argv.slice(2);
let cards;
if (args[0] === '--text') { const i = args.indexOf('--color'); cards = [{ name: 'card', text: args[1], kind: args.includes('--space') ? 'space' : 'member', color: i > 0 ? args[i + 1] : null }]; }
else cards = JSON.parse(readFileSync(args[0], 'utf8')).cards.map(c => ({ name: c.now.name, text: c.now.text, kind: c.kind, color: c.color }));
let bad = 0;
for (const c of cards) {
  const r = check(c);
  const fails = r.filter(l => l.startsWith('FAIL')).length;
  bad += fails ? 1 : 0;
  console.log(`${fails ? 'FAIL' : 'ok  '} ${c.name}: "${c.text}"`);
  for (const l of r) console.log('     ' + l);
}
process.exit(bad ? 1 : 0);
