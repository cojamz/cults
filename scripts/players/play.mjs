#!/usr/bin/env node
// Player agents (Cory, Nov 12): AI players play a real game of Cults, one model call per decision, and write what
// felt good, bad or pointless. The game engine (through scripts/v4-expert.mjs) shows each seat its view and the
// numbered legal moves; the player must pick one of those numbers, so no rule can be invented. Plan:
// /mnt/project-files/player-agents/plan.md.
//
//   node scripts/players/play.mjs <dir> --colors red,purple,silver,echo --kinds exp,new,exp,new [--seed N]
//        [--names Ava,Ben,Cal,Dee] [--model sonnet] [--limit 7200] [--max-moves N] [--out <shared dir>]
//
// Resumes a game already in <dir>. Writes <dir>/agents.jsonl (every call: prompt size, answer, cost) and, at the end,
// <dir>/transcript.md (the game with every reason, feel note, round note and debrief).
import fs from 'node:fs';
import path from 'node:path';
import { spawn, execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const EXPERT = path.join(ROOT, 'scripts/v4-expert.mjs');
const ROMAN = ['', 'I', 'II', 'III'];

const argv = process.argv.slice(2);
const flags = {}; const pos = [];
for (let i = 0; i < argv.length; i++) {
  if (argv[i].startsWith('--')) { const k = argv[i].slice(2); const v = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true; flags[k] = v; } else pos.push(argv[i]);
}
const DIR = path.resolve(pos[0] || '');
if (!pos[0]) { console.error('usage: play.mjs <dir> --colors a,b,c,d --kinds exp,new,...'); process.exit(2); }
const MODEL = flags.model || 'sonnet';
const LIMIT_S = Number(flags.limit || 3 * 3600);
const MAX_MOVES = Number(flags['max-moves'] || 1e9);
const T0 = Date.now();

const ex = (...a) => execFileSync('node', [EXPERT, ...a], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26 });
const readJson = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const f = n => path.join(DIR, n);
const log = (o) => fs.appendFileSync(f('agents.jsonl'), JSON.stringify({ t: new Date().toISOString(), ...o }) + '\n');

// ---------- setup ----------
if (!fs.existsSync(f('meta.json'))) {
  const names = String(flags.names || 'Ava,Ben,Cal,Dee').split(',');
  const colors = String(flags.colors || '').split(',').filter(Boolean);
  const kinds = String(flags.kinds || '').split(',').filter(Boolean);
  if (colors.length !== names.length || kinds.length !== names.length) { console.error('need one color and one kind (exp|new) per player'); process.exit(2); }
  const args = ['new', DIR, '--today', '--diary', '--colors', colors.join(','), '--names', names.join(',')];
  if (flags.seed) args.push('--seed', String(flags.seed));
  console.log(ex(...args).trim());
  fs.writeFileSync(f('players.json'), JSON.stringify({ kinds, model: MODEL, startedAt: new Date().toISOString() }, null, 2));
}
const meta0 = readJson(f('meta.json'));
const { kinds } = readJson(f('players.json'));
const NAMES = meta0.names;
const N = NAMES.length;

// ---------- what each player knows ----------
const rulebook = fs.readFileSync(path.join(ROOT, 'design/rulebook.md'), 'utf8');
const cards = fs.readFileSync(f('cards.md'), 'utf8');
const primer = fs.readFileSync(path.join(ROOT, 'design/notes/expert-primer.md'), 'utf8');
const principles = fs.readFileSync(path.join(HERE, 'principles.md'), 'utf8');

function systemPrompt(seat) {
  const name = NAMES[seat], exp = kinds[seat] === 'exp';
  const rivals = NAMES.filter((_, i) => i !== seat).join(', ');
  return [
    `You are ${name}, playing a ${N}-player game of Cults, a worker-placement board game, against ${rivals}. You are playing to win.`,
    exp
      ? 'You have played Cults many times and play it well. Below are the rules, every card in this game, a strategy primer, and the principles strong players follow. Use them, but think for yourself about this table.'
      : 'This is your first game of Cults. You have read the rules and the cards in this game and nothing else. Work out how to play well as you go: your own notes from earlier in the game are your lessons. You are a capable board-gamer who thinks carefully before each move.',
    'You are also a playtester. The designer wants to hear how the game feels to play: what feels good, what feels bad or pointless, what confuses you. Report what you feel and notice, never how to fix it (no new numbers, prices or card text).',
    '',
    '# RULES', rulebook,
    '', '# EVERY CARD IN THIS GAME', cards,
    ...(exp ? ['', '# STRATEGY PRIMER', primer, '', '# HOW STRONG PLAYERS THINK', principles] : []),
    '',
    '# HOW TO ANSWER',
    'Each message shows the table as you see it and a numbered list of your legal options. Answer with only a JSON object, no other text:',
    '{"option": <one number from the list>, "why": "<your reasoning>", "feel": "<a feel note, or empty>"}',
    'Before you answer, think the decision through: the options that matter, what each gets you in numbers, what it does to the contests and to the rival you must beat, and what rivals will do before your turn comes back.',
    '- why: 1 to 3 sentences in first person, as you would mutter over your pieces: what you are going for, the options and numbers you weighed, which rival you are watching. Name the cards and spaces. A few words are fine for a small follow-up like a payment. Say plainly when something surprised you or you misjudged.',
    '- feel: empty unless something right now felt good, bad, pointless, confusing or exciting. Then one plain sentence: what, and why it felt that way. Never a fix.',
    'Only numbers shown in the current list are legal.',
  ].join('\n');
}

// ---------- the model ----------
let spent = 0;
function callModel(seat, prompt, label) {
  return new Promise((resolve) => {
    const args = ['-p', '--setting-sources', '', '--strict-mcp-config', '--model', MODEL, '--effort', String(flags.effort || 'medium'), '--system-prompt', systemPrompt(seat), '--tools', '', '--no-session-persistence', '--output-format', 'json'];
    const cwd = '/tmp/pa-cwd'; fs.mkdirSync(cwd, { recursive: true });
    const p = spawn('claude', args, { cwd, stdio: ['pipe', 'pipe', 'pipe'] });
    let out = '', err = '';
    const timer = setTimeout(() => p.kill('SIGKILL'), 75_000);
    p.stdout.on('data', d => { out += d; }); p.stderr.on('data', d => { err += d; });
    p.on('close', () => {
      clearTimeout(timer);
      let text = '', cost = 0, usage = null;
      try { const d = JSON.parse(out); text = d.result || ''; cost = d.total_cost_usd || 0; usage = d.usage; } catch { text = ''; }
      spent += cost;
      log({ seat, label, chars: prompt.length, cost, usage: usage && { in: usage.input_tokens, cacheRead: usage.cache_read_input_tokens, cacheNew: usage.cache_creation_input_tokens, out: usage.output_tokens }, answer: text, err: text ? undefined : (err || out).slice(0, 400) });
      resolve(text);
    });
    p.stdin.end(prompt);
  });
}
function parseJson(text) {
  const m = text && text.match(/\{[\s\S]*\}/);
  if (!m) return null;
  try { return JSON.parse(m[0]); } catch { return null; }
}
async function ask(seat, prompt, label, ok) {
  let p = prompt;
  for (let i = 0; i < 6; i++) {
    if (i) await new Promise(r => setTimeout(r, 3000 * i));
    const a = parseJson(await callModel(seat, p, label));
    const bad = !a ? 'Your answer was not a single JSON object.' : ok(a);
    if (!bad) return a;
    p = `${prompt}\n\n(Your last answer was refused: ${bad} Answer again with only the JSON object.)`;
  }
  throw new Error(`seat ${seat}: no usable answer for ${label}`);
}

// ---------- each player's own notes ----------
const notesFile = f('notes.json');
const notes = fs.existsSync(notesFile) ? readJson(notesFile) : NAMES.map(() => ({ moves: [], feel: [], rounds: {} }));
const saveNotes = () => fs.writeFileSync(notesFile, JSON.stringify(notes, null, 2));
function memory(seat) {
  const n = notes[seat];
  const out = [];
  const rounds = Object.entries(n.rounds);
  if (rounds.length) out.push('YOUR ROUND NOTES SO FAR', ...rounds.map(([r, t]) => `- After round ${ROMAN[r]}: ${t}`), '');
  if (n.feel.length) out.push('YOUR FEEL NOTES SO FAR', ...n.feel.slice(-8).map(x => `- Round ${ROMAN[x.round]}: ${x.text}`), '');
  if (n.moves.length) out.push('YOUR LAST MOVES (oldest first)', ...n.moves.slice(-8).map(x => `- Round ${ROMAN[x.round]}: ${x.label}. Why: ${x.why}`), '');
  return out.join('\n');
}
const clean = v => v.split('\n').filter(l => !/node scripts\/v4-expert\.mjs|^Answer with:/.test(l)).join('\n');

// ---------- prescriptions: observations only ----------
const FIX = /\b(should (cost|be cheaper|be pricier|give|pay|read|say)|cost(s|ing)? (only )?\d|make (it|them)|change (it|them) to|instead of|cheaper|pricier|nerf|buff|lower (the|its)|raise (the|its)|reduce|increase (the|its)|cap (it|at)|limit (it|to)|\+\d|\bto \d+\b)/i;

async function roundNotes(seat, r) {
  const exp = kinds[seat] === 'exp';
  const v = clean(ex('view', DIR, String(seat), '--full'));
  const prompt = `${memory(seat)}\nTHE TABLE NOW\n${v}\n\nRound ${ROMAN[r]} just ended. Before you play on, write your round notes in 2 to 4 sentences: what you were going for, what felt good, what felt bad or pointless (name the spaces, members and moments).${exp ? '' : ' Also what you learned about how to play this game, so you play better next round.'} Observations only, never how to fix anything.\nAnswer with only: {"notes": "<text>"}`;
  const a = await ask(seat, prompt, `round notes ${ROMAN[r]}`, x => (typeof x.notes === 'string' && x.notes.length > 20 ? '' : 'notes must be a few sentences.'));
  notes[seat].rounds[r] = a.notes; saveNotes();
  ex('diary', DIR, String(seat), a.notes);
}

async function decide(seat) {
  const meta = readJson(f('meta.json'));
  const s = readJson(f('state.json'));
  // which round's notes are owed (the same rule v4-expert enforces)
  const owed = meta.diaryOn && s.round > 1 && !meta.diary?.[seat]?.[s.round - 1] ? s.round - 1 : 0;
  if (owed) { await roundNotes(seat, owed); return decide(seat); }
  // "since you last looked" comes from a fresh view
  const fresh = clean(ex('wait', DIR, String(seat), '--max', '1', '--full'));
  const legal = [...fresh.matchAll(/^\s+\[(\d+)\]/gm)].map(m => Number(m[1]));
  if (!legal.length) throw new Error(`seat ${seat}: no options in view\n${fresh}`);
  // one legal option: nothing to decide, so no model call (a table would just do it)
  if (legal.length === 1) {
    ex('move', DIR, String(seat), String(legal[0]), '--why', '(only option)');
    console.log(`r${s.round} ${NAMES[seat]}: only option`);
    return;
  }
  const prompt = `${memory(seat)}\nTHE TABLE NOW\n${fresh}\n\nYour legal options are the numbers in brackets above: ${legal.join(', ')}.`;
  const a = await ask(seat, prompt, `move r${s.round} m${s.moves}`, x => (!legal.includes(Number(x.option)) ? `${x.option} is not one of ${legal.join(', ')}.` : typeof x.why !== 'string' || !x.why.trim() ? 'why is missing.' : ''));
  const res = ex('move', DIR, String(seat), String(a.option), '--why', a.why);
  const evs = fs.readFileSync(f('events.jsonl'), 'utf8').trim().split('\n').map(l => JSON.parse(l));
  const mv = [...evs].reverse().find(e => e.type === 'move' && e.seat === seat);
  const label = mv?.label || `option ${a.option}`;
  notes[seat].moves.push({ round: s.round, label, why: a.why });
  if (a.feel && String(a.feel).trim()) {
    notes[seat].feel.push({ round: s.round, text: String(a.feel).trim(), at: label });
    fs.appendFileSync(f('events.jsonl'), JSON.stringify({ t: Date.now(), type: 'feel', seat, round: s.round, at: label, text: String(a.feel).trim() }) + '\n');
  }
  saveNotes();
  console.log(`r${s.round} ${NAMES[seat]} (${kinds[seat]}): ${label} | ${a.why.slice(0, 140)}${a.feel ? ` | FEEL: ${a.feel}` : ''}`);
  if (/refused|No such option|isn't offered/.test(res)) console.log(`  !! move refused: ${res.slice(0, 200)}`);
}

async function debrief(seat) {
  const exp = kinds[seat] === 'exp';
  const v = clean(ex('view', DIR, String(seat), '--full'));
  const base = `${memory(seat)}\nALL YOUR FEEL NOTES\n${notes[seat].feel.map(x => `- Round ${ROMAN[x.round]} (${x.at}): ${x.text}`).join('\n') || '(none)'}\n\nTHE TABLE AT THE END\n${v}\n\nThe game is over. Write your debrief for the designer, as a ${exp ? 'experienced' : 'first-time'} player after a game night. Plain words; name every space, member and artifact you mention.\n- result: 2 to 4 sentences on why you won or lost and the moment that decided it.\n- good: what felt good (moments, spaces, members, decisions), each with why.\n- bad: what felt bad, pointless or confusing, each with why.\n- change: what you would want the designer to look at: name the thing and say what is wrong with it as you felt it at the table. Never say how to fix it: no new numbers, prices, limits or card text.\n- again: would you play again, and what would bring you back or keep you away (1 to 2 sentences).\nAnswer with only: {"result": "...", "good": ["..."], "bad": ["..."], "change": ["..."], "again": "..."}`;
  const shape = x => (typeof x.result === 'string' && Array.isArray(x.good) && Array.isArray(x.bad) && Array.isArray(x.change) ? '' : 'the JSON needs result, good, bad, change and again.');
  let a = await ask(seat, base, 'debrief', shape);
  const fixes = a.change.filter(c => FIX.test(c));
  if (fixes.length) {
    log({ seat, label: 'debrief prescriptions flagged', fixes });
    a = await ask(seat, `${base}\n\nYour first answer proposed fixes in "change" (${fixes.map(x => `"${x}"`).join('; ')}). Rewrite every item as what is wrong as you felt it, with no fix, number, price or new wording.`, 'debrief rewrite', shape);
  }
  const text = [`RESULT: ${a.result}`, 'GOOD:', ...a.good.map(x => `- ${x}`), 'BAD:', ...a.bad.map(x => `- ${x}`), 'WANT LOOKED AT:', ...a.change.map(x => `- ${x}`), `AGAIN: ${a.again || ''}`].join('\n');
  ex('postgame', DIR, String(seat), text);
  fs.writeFileSync(f(`debrief-${NAMES[seat]}.json`), JSON.stringify({ kind: kinds[seat], ...a }, null, 2));
}

// ---------- the loop ----------
let moves = 0;
for (;;) {
  const s = readJson(f('state.json'));
  if (s.over) break;
  if ((Date.now() - T0) / 1000 > LIMIT_S) { console.log(`Time limit ${LIMIT_S}s reached; stopping (resume by running again).`); process.exit(3); }
  if (moves >= MAX_MOVES) { console.log(`Stopped after ${moves} moves (--max-moves).`); process.exit(0); }
  await decide(s.pending.player);
  moves++;
  if (moves % 10 === 0) console.log(`  [${moves} decisions, $${spent.toFixed(2)}, ${Math.round((Date.now() - T0) / 60000)} min]`);
}
// round III notes, then debriefs
const metaEnd = readJson(f('meta.json'));
for (let seat = 0; seat < N; seat++) if (!metaEnd.diary?.[seat]?.[3]) await roundNotes(seat, 3);
for (let seat = 0; seat < N; seat++) if (!readJson(f('meta.json')).post?.[seat]) await debrief(seat);

// ---------- transcript ----------
const rep = ex('report', DIR);
const evs = fs.readFileSync(f('events.jsonl'), 'utf8').trim().split('\n').map(l => JSON.parse(l));
const feel = evs.filter(e => e.type === 'feel');
const head = [`# Player agents game: ${path.basename(DIR)}`, '',
  `Players: ${NAMES.map((n, i) => `${n} (${kinds[i] === 'exp' ? 'experienced' : 'new'})`).join(', ')}. Model: ${MODEL}. Cost of the model calls: $${spent.toFixed(2)} this run.`, '',
  '## Feel notes during play', ...feel.map(e => `- Round ${ROMAN[e.round]}, ${NAMES[e.seat]} (${kinds[e.seat] === 'exp' ? 'experienced' : 'new'}), at "${e.at}": ${e.text}`), '', ''].join('\n');
fs.writeFileSync(f('transcript.md'), head + rep);
if (flags.out) { fs.mkdirSync(flags.out, { recursive: true }); for (const n of ['transcript.md', 'cards.md', 'events.jsonl', 'agents.jsonl', 'notes.json', 'players.json', 'meta.json', ...NAMES.map(x => `debrief-${x}.json`)]) if (fs.existsSync(f(n))) fs.copyFileSync(f(n), path.join(flags.out, n)); }
console.log(`Done: ${moves} decisions this run, $${spent.toFixed(2)}, ${Math.round((Date.now() - T0) / 60000)} min. ${f('transcript.md')}`);
