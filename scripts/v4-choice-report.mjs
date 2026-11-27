// Read the choice log that v4-balance.mjs writes with CHOICES=<file> and say, per space and per member, whether the
// strong bots treat it as a real choice, an auto-pick, filler or dead weight.
// Usage: node scripts/v4-choice-report.mjs <choices.jsonl | glob...> [--md=out.md] [--json=out.json] [--min=20]
//
// Each log line is one looked-ahead decision: every legal option ("offered"), Normal's static top 8 ("normal"), the
// options Hard actually played out with their mean rollout margin in followers ("played", its contenders) and its
// pick ("chose"). Means are only comparable inside one decision, so every number below is built per decision first.
//
// Per card (spaces, members, member uses and the rest kept apart), by round I, II, III and all:
//   offered    decisions where it was legal
//   contender  share of offered where Hard played it out
//   chosen     share of offered where Hard took it
//   close      share of offered where it was a contender within CLOSE of the best mean and some other contender was
//              too: a real dilemma, counted whether or not it was taken
//   auto       share of its picks where the runner-up was more than AUTO below it, or it was the only contender while
//              AUTO_MENU+ options were on offer
//   solo       share of its picks where it was the only contender: Normal's static score left nothing else
//              within reach, so the lookahead never weighed it (Normal's call, not the lookahead's)
//   thin       share of its picks made from a thin menu (at most THIN x the usual number of options for that kind of
//              decision and round), or as the only option: taken because little else was left
//   regret     when played out and passed over, the mean gap to what was taken (followers; small = nearly as good)
//   disagree   share of its scored contender appearances where Normal's static top pick and the lookahead's top
//              pick disagree about it being best. "under" = lookahead liked it best and Normal didn't; "over" = the
//              reverse. High disagreement means Normal-bot numbers about this card are suspect, not the card.
import { readFileSync, writeFileSync, globSync } from 'node:fs';

// ---- thresholds (tags only apply when offered >= --min) ----
const CLOSE = 1.5;            // followers: within this of the best played mean counts as close
const AUTO = 5;               // followers: a pick this far ahead of the runner-up is an auto-pick
const AUTO_MENU = 3;          // an only-contender pick counts as auto when at least this many options were offered
const THIN = 0.5;             // a menu at most this share of the usual size (median, per kind and round) is thin
const T = {
  deadContender: 0.10,        // DEAD: a contender in under 10% of offers ...
  deadChosen: 0.03,           // ... and chosen under 3%
  autoShare: 0.5,             // AUTO-PICK: at least half its picks are auto ...
  autoChosen: 0.10,           // ... and chosen in at least 10% of offers
  realClose: 0.10,            // REAL CHOICE: a close call in at least 10% of offers
  fillerThin: 0.5,            // FILLER: at least half its picks from a thin menu ...
  fillerClose: 0.05,          // ... and a close call in under 5% of offers
  misjudged: 0.5,             // MISJUDGED (added to any tag): Normal disagrees in at least half ...
  misjudgedMin: 8,            // ... of at least 8 scored contender appearances
};

const flags = Object.fromEntries(process.argv.slice(2).filter(a => a.startsWith('--')).map(a => { const [k, v] = a.slice(2).split('='); return [k, v ?? true]; }));
const args = process.argv.slice(2).filter(a => !a.startsWith('--'));
const MIN = Number(flags.min || 20);
const files = args.flatMap(a => (/[*?[]/.test(a) ? globSync(a) : [a]));
if (!files.length) { console.error('Usage: node scripts/v4-choice-report.mjs <choices.jsonl...> [--md=out.md] [--json=out.json] [--min=20]'); process.exit(1); }
const rows = files.flatMap(f => readFileSync(f, 'utf8').split('\n').filter(Boolean).map(l => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean));

const ROUNDS = { 1: 'I', 2: 'II', 3: 'III' };
const rk = r => ROUNDS[r] || `R${r}`;
// "space:silver: Name" -> spaces, "member:X (c)" -> members, "use:X (c)" -> uses, anything else -> other
const group = l => ({ space: 'spaces', member: 'members', use: 'uses' })[l.split(':')[0]] || 'other';
const colorOf = l => l.match(/^space:(\w+):/)?.[1] || l.match(/\(([a-z]+)\)$/)?.[1] || null;
const pct = x => (x === null || Number.isNaN(x) ? '–' : `${Math.round(x * 100)}%`);
const num = x => (x === null || Number.isNaN(x) ? '–' : x.toFixed(1));
const median = a => { const s = [...a].sort((x, y) => x - y); return s.length ? s[Math.floor(s.length / 2)] : 0; };

// usual menu size per kind and round, for "thin menu"
const sizes = {};
for (const d of rows) (sizes[`${d.kind}:${d.round}`] ??= []).push(new Set(d.offered).size);
const usual = Object.fromEntries(Object.entries(sizes).map(([k, a]) => [k, median(a)]));

const stats = {};   // stats[label][roundKey] = counters
const blank = () => ({ offered: 0, contender: 0, chosen: 0, close: 0, picks: 0, auto: 0, solo: 0, thin: 0, regretN: 0, regret: 0, scored: 0, disagree: 0, under: 0, over: 0 });
const bump = (l, r, f) => { const s = (stats[l] ??= {}); f(s[rk(r)] ??= blank()); f(s.all ??= blank()); };
const colors = {};  // per color: decisions by seats of that color, and decisions where that color's option was taken
const cblank = () => ({ seatN: 0, seatClose: 0, pickN: 0, pickClose: 0 });

// a member or space picked as a target (a "choose" step, e.g. which card to copy) isn't a buy or a placement:
// key it by its decision kind so it lands in "everything else" instead of muddying the buy and placement numbers
const keyed = (d, l) => ((group(l) === 'members' && d.kind !== 'buy') || (group(l) === 'spaces' && d.kind !== 'place') ? `${d.kind} ${l}` : l);
for (const raw of rows) {
  const k = l => keyed(raw, l);
  const d = { ...raw, offered: raw.offered.map(k), played: (raw.played || []).map(([l, m, n]) => [k(l), m, n]), normal: (raw.normal || []).map(([l, v]) => [k(l), v]), chose: k(raw.chose) };
  const offered = [...new Set(d.offered)];
  // the same label can appear twice (two slots of one space): keep its best mean
  const played = new Map();
  for (const [l, m] of d.played || []) if (!played.has(l) || (m !== null && (played.get(l) === null || m > played.get(l)))) played.set(l, m);
  const means = [...played.entries()].filter(([, m]) => m !== null);
  const best = means.length ? Math.max(...means.map(([, m]) => m)) : null;
  const near = means.filter(([, m]) => best - m <= CLOSE).map(([l]) => l);
  const dilemma = near.length >= 2;
  const chosenMean = played.get(d.chose) ?? null;
  const runnerUp = means.filter(([l]) => l !== d.chose).reduce((a, [, m]) => Math.max(a, m), -Infinity);
  const isAuto = (chosenMean !== null && runnerUp > -Infinity && chosenMean - runnerUp > AUTO) || (played.size === 1 && offered.length >= AUTO_MENU);
  const isThin = offered.length <= 1 || offered.length <= THIN * (usual[`${d.kind}:${d.round}`] || 0);
  const normalTop = d.normal?.[0]?.[0] ?? null;
  // the lookahead's own top: the chosen option (it takes the best mean, with its small nudge)
  const lookTop = d.chose;

  for (const l of offered) bump(l, d.round, s => {
    s.offered++;
    if (played.has(l)) {
      s.contender++;
      const m = played.get(l);
      if (dilemma && near.includes(l)) s.close++;
      if (means.length >= 2 && m !== null && normalTop) {
        s.scored++;
        const nb = normalTop === l, lb = lookTop === l;
        if (nb !== lb) { s.disagree++; if (lb) s.under++; else s.over++; }
      }
      if (l !== d.chose && m !== null && chosenMean !== null) { s.regretN++; s.regret += chosenMean - m; }
    }
    if (l === d.chose) { s.chosen++; s.picks++; if (isAuto) s.auto++; if (played.size <= 1) s.solo++; if (isThin || played.size <= 1 && offered.length < AUTO_MENU) s.thin++; }
  });

  const g = group(d.chose);
  if (g === 'spaces' || g === 'members' || g === 'uses') {
    if (d.color) { const c = (colors[d.color] ??= cblank()); c.seatN++; if (dilemma) c.seatClose++; }
    const pc = colorOf(d.chose);
    if (pc) { const c = (colors[pc] ??= cblank()); c.pickN++; if (dilemma) c.pickClose++; }
  }
}

// shares from counters
const view = s => s && {
  offered: s.offered,
  contender: s.contender / s.offered, chosen: s.chosen / s.offered, close: s.close / s.offered,
  auto: s.picks ? s.auto / s.picks : null, solo: s.picks ? s.solo / s.picks : null, thin: s.picks ? s.thin / s.picks : null,
  regret: s.regretN ? s.regret / s.regretN : null,
  disagree: s.scored ? s.disagree / s.scored : null, scored: s.scored, under: s.under, over: s.over,
};
const tagOf = v => {
  if (!v || v.offered < MIN) return 'THIN DATA';
  if (v.contender < T.deadContender && v.chosen < T.deadChosen) return 'DEAD';
  if (v.auto !== null && v.auto >= T.autoShare && v.chosen >= T.autoChosen) return 'AUTO-PICK';
  if (v.close >= T.realClose) return 'REAL CHOICE';
  if (v.thin !== null && v.thin >= T.fillerThin && v.close < T.fillerClose) return 'FILLER';
  return 'MIXED';
};
const misjudged = v => v && v.offered >= MIN && v.scored >= T.misjudgedMin && v.disagree >= T.misjudged;

const out = { decisions: rows.length, files, thresholds: { CLOSE, AUTO, AUTO_MENU, THIN, ...T, min: MIN }, cards: {}, colors: {} };
for (const [l, s] of Object.entries(stats)) {
  const v = Object.fromEntries(Object.entries(s).map(([r, c]) => [r, view(c)]));
  out.cards[l] = { group: group(l), color: colorOf(l), tag: tagOf(v.all), misjudged: misjudged(v.all), ...v };
}
for (const [c, x] of Object.entries(colors)) out.colors[c] = { ...x, seatCloseShare: x.seatN ? x.seatClose / x.seatN : null, pickCloseShare: x.pickN ? x.pickClose / x.pickN : null };
const allClose = rows.filter(d => { const ms = (d.played || []).map(p => p[1]).filter(m => m !== null); const b = Math.max(...ms); return ms.filter(m => b - m <= CLOSE).length >= 2; }).length;
out.closeShare = rows.length ? allClose / rows.length : null;

// ---- markdown ----
const ORDER = ['REAL CHOICE', 'AUTO-PICK', 'MIXED', 'FILLER', 'DEAD', 'THIN DATA'];
const short = l => l.replace(/^(space|member|use):\s*/, '');
const roundCell = (c, r) => { const v = c[r]; return v ? `${v.offered}/${pct(v.chosen)}/${pct(v.close)}` : '–'; };
const table = list => [
  '| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |',
  '|---|---|---|---|---|---|---|---|---|---|---|---|---|---|',
  ...list.map(([l, c]) => { const a = c.all; return `| ${short(l)} | ${c.tag}${c.misjudged ? ' + MISJUDGED' : ''} | ${a.offered} | ${pct(a.contender)} | ${pct(a.chosen)} | ${pct(a.close)} | ${pct(a.auto)} | ${pct(a.solo)} | ${pct(a.thin)} | ${num(a.regret)} | ${pct(a.disagree)} (${a.under}/${a.over}) | ${roundCell(c, 'I')} | ${roundCell(c, 'II')} | ${roundCell(c, 'III')} |`; }),
];
const sorted = g => Object.entries(out.cards).filter(([, c]) => c.group === g)
  .sort(([, a], [, b]) => ORDER.indexOf(a.tag) - ORDER.indexOf(b.tag) || b.all.close - a.all.close || b.all.chosen - a.all.chosen);
const games = new Set(rows.map(d => `${d.game}`)).size;
const md = [
  `# Choice report`,
  '',
  `${rows.length} looked-ahead decisions from ${games} games (${files.join(', ')}). ${pct(out.closeShare)} of all decisions were close calls.`,
  '',
  `How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. ` +
  `A **close call** is a decision where it and at least one other contender ended within ${CLOSE} followers of the best: a real dilemma. ` +
  `An **auto-pick** is taken more than ${AUTO} followers ahead of the runner-up, or as the only contender while ${AUTO_MENU}+ options were legal. ` +
  `**Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. ` +
  `**Thin** picks came from a menu at most ${THIN * 100}% of the usual size: taken because little else was left. ` +
  `**Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). ` +
  `**Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; ` +
  `"under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. ` +
  `Round columns read offered/chosen/close. Tags (offered >= ${MIN}): REAL CHOICE close >= ${pct(T.realClose)}; AUTO-PICK auto >= ${pct(T.autoShare)} of picks and chosen >= ${pct(T.autoChosen)}; ` +
  `FILLER thin >= ${pct(T.fillerThin)} of picks and close < ${pct(T.fillerClose)}; DEAD contender < ${pct(T.deadContender)} and chosen < ${pct(T.deadChosen)}; ` +
  `MISJUDGED disagree >= ${pct(T.misjudged)} of ${T.misjudgedMin}+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.`,
  '',
];
// the catch-all group has one label per trade pair and the like: show only what was offered often enough
const section = (g, line) => {
  const all = sorted(g), l = g === 'other' ? all.filter(([, c]) => c.all.offered >= MIN) : all;
  if (l.length) md.push(line, '', ...table(l), '', ...(l.length < all.length ? [`(${all.length - l.length} rarer options offered under ${MIN} times left out; they are in --json.)`, ''] : []));
};
section('spaces', '## Spaces\n\nEach space on the wheel, as a place to send a minion.');
section('members', '## Members\n\nEach member as a buy, whenever it was in the shop and affordable.');
section('uses', '## Member uses\n\nEach member\'s own action, when using it was an option.');
section('other', '## Everything else\n\nFollower buys, passes and the other small choices.');
md.push('## Colors', '', 'How often a color\'s decisions were close calls: by seats playing that color, and by decisions where that color\'s space or member was taken.', '',
  '| color | seat decisions | close | picks of this color | close |', '|---|---|---|---|---|',
  ...Object.entries(out.colors).sort(([, a], [, b]) => (b.pickCloseShare ?? 0) - (a.pickCloseShare ?? 0))
    .map(([c, x]) => `| ${c} | ${x.seatN} | ${pct(x.seatCloseShare)} | ${x.pickN} | ${pct(x.pickCloseShare)} |`), '');

const text = md.join('\n');
if (flags.md) writeFileSync(flags.md, text); else console.log(text);
if (flags.json) writeFileSync(flags.json, JSON.stringify(out, null, 1));
if (flags.md) console.log(`${rows.length} decisions -> ${flags.md}`);
