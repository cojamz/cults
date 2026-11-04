#!/usr/bin/env node
// Cory's ranking menu (Nov 4: "a ranking list, which includes views for ALL MEMBERS including archived ones, and a view
// for just live ones or recently considered ones ... better reasoning (though still concise) on why they score the way
// they do. Same for actions."). Gathers every member and space the game has known, the card team's latest ranking,
// bot-game numbers and trial results, and writes one data file plus one page.
//   node scripts/quality/menu/build.mjs [--out /mnt/project-files/ranking-menu]
// Sources (each optional; a missing one only empties its column):
//   engine (extract.mjs, candidates.mjs)            every card's printed text and whether it is live, cut, retired or behind a switch
//   quality/ranking.json                             the director's current ranking of the live deck (scores, why, play A/B)
//   quality/evals/r1/judge-*.json                    the first paper round, which also scored ~50 cards since cut
//   quality/steering/baseline-run/report.md (or --bots <report.md>)   Hard-bot owner win rates per member and space
//   scripts/quality/menu/reasons.json                hand-written reasons and statuses (wins over the generated ones)
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const Q = '/mnt/project-files/quality';
const OUT = arg('--out', '/mnt/project-files/ranking-menu');
const BOTS = arg('--bots', `${Q}/steering/baseline-run/report.md`);
const here = new URL('.', import.meta.url).pathname;
const readJ = (p, d = null) => { try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return d; } };
const readT = p => { try { return readFileSync(p, 'utf8'); } catch { return ''; } };
const node = (f, env = {}) => JSON.parse(execFileSync('node', [here + f], { env: { ...process.env, ...env }, maxBuffer: 1 << 27, stdio: ['ignore', 'pipe', 'ignore'] }));

const COLOR = { red: 'Red', purple: 'Purple', silver: 'Silver', yellow: 'Yellow', market: 'Blue', thieves: 'Magenta', trading: 'White', echo: 'Green', guests: 'Grey', gold: 'Gold' };
const LIVE_COLORS = new Set(['red', 'purple', 'silver', 'yellow', 'market', 'thieves', 'trading', 'echo', 'guests']);
const PROTECTED = new Set(['heiresses', 'dabblers', 'spoilsport', 'spoilsports', 'magpie', 'hoarder']); // Cory, Nov 4
const norm = s => (s || '').toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, ' ').trim();
const ROMAN = { 1: 'I', 2: 'II', 3: 'III' };

const base = node('extract.mjs');
const cands = existsSync(here + 'candidates.json') && process.argv.includes('--cached') ? readJ(here + 'candidates.json', []) : node('candidates.mjs');
const rank = readJ(`${Q}/ranking.json`, { members: [], spaces: [] });
const overrides = readJ(here + 'reasons.json', {});

// --- paper round 1 (covers cards since cut): median total and the median judge's why
const r1 = new Map();
{
  const js = [1, 2, 3].map(i => readJ(`${Q}/evals/r1/judge-${i}.json`, []));
  const by = new Map();
  for (const j of js) for (const c of j) { const k = c.kind + '|' + norm(c.name) + '|' + c.color; (by.get(k) || by.set(k, []).get(k)).push(c); }
  for (const [k, cs] of by) { const s = [...cs].sort((a, b) => a.total - b.total); const mid = s[Math.floor(s.length / 2)]; r1.set(k, { median: mid.total, why: mid.why, color: mid.color }); }
}

// --- Hard-bot numbers from a balance report: "Members by lift" and "Spaces by lift" in the Hard section
const bots = { members: new Map(), spaces: new Map(), fewMembers: new Set(), label: '' };
{
  const t = readT(BOTS);
  const hardAt = t.indexOf('## Win rates (Hard');
  const h = hardAt >= 0 ? t.slice(hardAt, t.indexOf('\n## ', hardAt + 5) > 0 ? t.indexOf('\n## ', hardAt + 5) : undefined) : '';
  const head = t.match(/^# Balance run (\S+)[\s\S]*?\nBuild (\w+)/);
  const games = h.match(/hard bots, (\d+) games/);
  bots.label = head ? `build ${head[2]}, ${games ? games[1] : '?'} Hard-bot games` : '';
  for (const m of h.matchAll(/^ {2}(.+?) \((\w+)\): ([+-]?\d+) ±(\d+)(?: (STRONG|WEAK))? \| wins (\d+)% vs (\d+)% \| owned (\d+)/gm))
    bots.members.set(norm(m[1]), { lift: +m[3], pm: +m[4], wins: +m[6], exp: +m[7], owners: +m[8] });
  const few = h.match(/Too few owners to read \(owned\/in shop\): (.*)/);
  if (few) for (const x of few[1].split(/, (?=[A-Z])/)) { const n = x.match(/^(.+?) \(/); if (n) bots.fewMembers.add(norm(n[1])); }
  for (const m of h.matchAll(/^ {2}(\w+): (.+?): ([+-]?\d+) ±(\d+) \| ([\d.]+)\/game/gm))
    bots.spaces.set(norm(m[2]), { lift: +m[3], pm: +m[4], uses: +m[5] });
  // tags from the summary sections (TRAP, DEAD, STRONG, WEAK)
  for (const m of t.matchAll(/^- \*\*(TRAP|SLEEPER|STRONG|WEAK)\*\*: (.*)$/gm)) for (const x of m[2].split(/\); /)) {
    const n = x.match(/^(?:\w+: )?(.+?) \(/); if (!n) continue;
    const e = bots.members.get(norm(n[1])) || bots.spaces.get(norm(n[1])); if (e) (e.tags ||= []).push(m[1]);
  }
}
const dash = readT(`${Q}/dashboard.md`);
const dead = new Set();
for (const row of dash.split('\n').filter(l => /^\| (red|purple|silver|yellow|blue|magenta|white|green|guests) \|/.test(l))) {
  const cells = row.split('|').map(s => s.trim()); for (const n of (cells[6] || '').split(',')) if (n.trim() && n.trim() !== '-') dead.add(norm(n));
}

// --- retired notes ("Replaced by X")
const retiredNote = new Map();
for (const f of ['design/archive/members/retired-2026-11-04.md', 'design/archive/spaces/retired-2026-11-04.md'])
  for (const m of readT(new URL('../../../' + f, import.meta.url).pathname).matchAll(/^- \*\*(.+?)\*\*.*?(?:Replaced by|Retired Nov 4 for) \*\*(.+?)\*\*/gm)) retiredNote.set(norm(m[1]), m[2]);

// --- assemble
const cards = [];
const rankBy = new Map([...rank.members.map(r => ['member|' + norm(r.name), r]), ...rank.spaces.map(r => ['space|' + norm(r.name), r])]);
const liveSpaceKeys = new Set();
const push = c => {
  const k = c.kind + '|' + norm(c.name);
  const rk = c.status === 'live' ? rankBy.get(k) : null;
  const p1 = c.status === 'archived' ? r1.get(k + '|' + c.color) : null;
  const b = c.kind === 'member' ? bots.members.get(norm(c.name)) : bots.spaces.get(norm(c.name));
  const o = overrides[k] || overrides[norm(c.name)] || {};
  cards.push({
    ...c,
    protected: PROTECTED.has(norm(c.name)) || !!rk?.protected,
    paper: rk ? { score: rk.median, of: 20, round: rank.label || 'r4', why: rk.why, overBar: rk.overBar, hardFails: [...new Set(rk.hardFails || [])].length ? rk.hardFails[0] : null, prev: rk.prevMedian } : (p1 ? { score: p1.median, of: 20, round: 'r1', why: p1.why, overBar: p1.median >= 13 } : null),
    play: rk?.play || null,
    bots: b ? { ...b } : (dead.has(norm(c.name)) ? { dead: true } : bots.fewMembers.has(norm(c.name)) ? { few: true } : null),
    replacedBy: retiredNote.get(norm(c.name)) || null,
    ...o,
  });
};
for (const m of base.members) {
  if (!LIVE_COLORS.has(m.color) && m.color !== 'gold') continue; // blue and green are old test stand-ins
  const status = m.color === 'gold' ? 'archived' : (m.retired || m.cut || m.cut10) ? 'archived' : 'live';
  if (m.artifact) continue;
  push({ kind: 'member', name: m.name, text: m.text, color: m.color, price: m.price, status,
    why_left: m.color === 'gold' ? 'Gold is parked: not one of the colors on the table.' : m.retired ? 'Retired for a replacement.' : m.cut10 ? 'Left out of the 10-card deck.' : m.cut ? 'Cut from the deck.' : null });
}
for (const s of base.spaces) {
  if (!LIVE_COLORS.has(s.color) && s.color !== 'gold') continue;
  const status = s.color === 'gold' ? 'archived' : 'live';
  push({ kind: 'space', name: s.name, text: s.text, color: s.color, round: ROMAN[s.round] || s.round, status, why_left: s.color === 'gold' ? 'Gold is parked: not one of the colors on the table.' : null });
  if (status === 'live') liveSpaceKeys.add(norm(s.name));
}
// spaces only in the retired notes or switches' old cards
for (const [n, by] of retiredNote) if (!cards.some(c => norm(c.name) === n)) {
  const line = readT(new URL('../../../design/archive/spaces/retired-2026-11-04.md', import.meta.url).pathname).split('\n').find(l => norm(l).includes('**' + n + '**'));
  if (line) { const m = line.match(/^- \*\*(.+?)\*\* \((\w+), round (\w+)\): "(.+?)"/); if (m) push({ kind: 'space', name: m[1], text: m[4], color: Object.keys(COLOR).find(k => COLOR[k] === m[2]) || m[2].toLowerCase(), round: m[3], status: 'archived', why_left: `Replaced by ${by}.` }); }
}
const have = new Set(cards.map(c => c.kind + '|' + norm(c.name) + '|' + norm(c.text)));
for (const c of cands) {
  if (!LIVE_COLORS.has(c.color)) continue;
  if (have.has(c.kind + '|' + norm(c.name) + '|' + norm(c.text))) continue;
  push({ kind: c.kind, name: c.name, text: c.text, color: c.color, price: c.price, round: c.kind === 'space' ? (ROMAN[c.round] || c.round) : undefined, status: 'considered', replaces: c.replaces, switch: c.switch });
}

// --- verdict: the card team's numbers, read the same way for every card (no new judging here)
for (const c of cards) {
  const p = c.paper, b = c.bots, pl = c.play || '';
  const playWin = /\bpass\b/.test(pl) && !/^no\b/.test(pl);
  const playLoss = /^no\b|lost/i.test(pl);
  const botBad = b && (b.dead || (typeof b.lift === 'number' && b.lift <= -8));
  const botHot = b && typeof b.lift === 'number' && b.lift >= 15;
  if (!c.verdict) {
    if (c.status === 'archived') c.verdict = 'out';
    else if (c.protected) c.verdict = 'keep';
    else if (p?.hardFails) c.verdict = 'cut';
    else if (playWin && !botBad) c.verdict = 'keep';
    else if (p?.overBar && !botBad && !botHot && !playLoss) c.verdict = 'keep';
    else if (!p) c.verdict = 'untested';
    else if (!p.overBar && !(b && b.lift >= 5)) c.verdict = 'cut';
    else c.verdict = 'watch';
  }
  c.score = c.paper ? c.paper.score : null;
  // evidence lines in plain words
  const ev = [];
  if (b && typeof b.lift === 'number') ev.push({ k: 'bots', t: `Hard bots: owners won ${b.wins ?? '?'}%${b.exp != null ? ` vs ${b.exp}% expected` : ''}${b.owners ? ` (${b.owners} owners)` : ''}`, v: b.lift, tone: b.lift >= 15 ? 'hot' : b.lift <= -8 ? 'bad' : b.lift >= 5 ? 'good' : 'flat' });
  if (b && typeof b.lift === 'number' && b.uses != null) ev[ev.length - 1].t = `Hard bots: takers won ${b.lift >= 0 ? '+' : ''}${b.lift} points over even, ${b.uses} uses a game`;
  if (b?.dead) ev.push({ k: 'bots', t: 'Hard bots almost never pick it', tone: 'bad' });
  if (b?.few) ev.push({ k: 'bots', t: 'Too few bot owners to read', tone: 'flat' });
  if (pl) for (const part of pl.split(/;\s*/).slice(-1)) {
    const m = part.match(/^(pass|no|bot bug)\s*([+-][\d.]+)\s*vs\s*(.+)$/);
    if (m) ev.push({ k: 'play', t: m[1] === 'pass' ? `Beat ${m[3]} in blind judging of bot games (${m[2]})` : m[1] === 'no' ? `Did not beat ${m[3]} in blind judging of bot games (${m[2]})` : `Bots misplayed it against ${m[3]}; that test doesn't count`, tone: m[1] === 'pass' ? 'good' : m[1] === 'no' ? 'bad' : 'flat' });
  }
  if (p?.hardFails) ev.push({ k: 'rule', t: `Breaks a standing rule: ${p.hardFails.replace(/\s*\(.*\)$/, '')}`, tone: 'bad' });
  c.evidence = ev;
  if (!c.reason) {
    const bits = [];
    if (p?.why) bits.push(p.why.replace(/\s+$/, ''));
    if (c.status === 'archived') bits.push(c.replacedBy ? `Replaced by ${c.replacedBy}.` : (c.why_left || ''));
    if (c.status === 'considered' && c.replaces) bits.push(`Tried in ${c.replaces}'s place.`);
    if (c.protected) bits.push('Protected by Cory.');
    c.reason = bits.filter(Boolean).join(' ') || (c.status === 'considered' ? 'Built for testing; no scored result yet.' : 'No scores yet.');
  }
}
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
const data = { built: new Date().toISOString(), ranking: rank.label || null, bots: bots.label, cards };
writeFileSync(`${OUT}/menu.json`, JSON.stringify(data, null, 1));
const tpl = readFileSync(here + 'page.html', 'utf8');
writeFileSync(`${OUT}/index.html`, tpl.replace('/*DATA*/null', JSON.stringify(data).replace(/</g, '\\u003c')));
const n = s => cards.filter(c => c.status === s).length;
console.log(`menu: ${cards.length} cards (live ${n('live')}, considered ${n('considered')}, archived ${n('archived')}) -> ${OUT}/index.html`);
