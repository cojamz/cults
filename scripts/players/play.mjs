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

// Recruits are scarce (Cory, Nov 13: "it costs the recruit, like that's the whole thing. Recruits are valuable. You only
// have so many."): a rules fact every player gets, so nobody prices a 1-follower buy as free.
const RECRUITS = 'Recruits are scarce. Each turn you place a minion you get one recruit: one member, or one follower pack (1, 5 or 10). With 3, 4 and 5 minions that is about 12 recruits in a whole game. A 1-follower buy uses up the whole recruit, the same as a 10-follower buy or a member. So what anything really costs includes the recruit it uses.';

// Kinds (coordinator's review of pilot 1; Cory: "the experienced and the new don't sound remotely different"):
//   exp   — has played many times; rules, cards, strategy primer, and the strong-player questions; plans around them
//   new   — first game ever; rules and cards only; no strategy words; learns as it goes and says what confuses it
//   plain — experienced, but no primer and no questions (the control table for the questions)
function systemPrompt(seat) {
  const name = NAMES[seat], kind = kinds[seat];
  const rivals = NAMES.filter((_, i) => i !== seat).join(', ');
  const who = {
    exp: 'You have played Cults many times and play it well. Below are the rules, every card in this game, a strategy primer, and the questions strong players ask themselves. Plan around those questions: in your reasoning, say which of them drove the decision. You talk like a seasoned hobby gamer.',
    plain: 'You have played Cults many times and play it well. Below are the rules and every card in this game. You talk like a seasoned hobby gamer.',
    new: 'This is your very first game of Cults. A friend explained the rules ten minutes ago and you have the rulebook and the cards in front of you, nothing else. You have played a few board games but you are not a strategy expert: you don\'t use strategy jargon, you often aren\'t sure what is strong, and you learn as you go. When a rule, a card or the board confuses you, say so plainly. Your own notes from earlier in this game are your lessons. You still try hard to win.',
  }[kind];
  return [
    `You are ${name}, playing a ${N}-player game of Cults, a worker-placement board game, against ${rivals}. You are playing to win, not to place.`,
    who,
    'You are also a playtester. The designer wants to hear how the game feels to play: what feels good, what feels bad or pointless, what confuses you. Report what you feel and notice, never how to fix it (no new numbers, prices or card text).',
    '',
    '# RULES', rulebook, '', RECRUITS,
    '', '# EVERY CARD IN THIS GAME', cards,
    ...(kind === 'exp' ? ['', '# STRATEGY PRIMER', primer, '', '# QUESTIONS STRONG PLAYERS ASK', principles] : []),
    '',
    '# HOW TO ANSWER',
    'Each message shows the table as you see it and a numbered list of your legal options. Answer with only a JSON object, no other text:',
    '{"option": <one number from the list>, "why": "<your reasoning>", "feel": "<a feel note, or empty>", "idea": "<an idea, or empty>"}',
    kind === 'new'
      ? 'Before you answer, think it through the way a first-time player would: what you are trying to do, what each choice seems to give you, and what you are unsure about.'
      : 'Before you answer, think the decision through: the options that matter, what each gets you in numbers, what it does to the contests and to the rival you must beat, what rivals will do before your turn comes back, and the recruits and rounds you have left.',
    `- why: 1 to 3 sentences in first person, as you would mutter over your pieces. ${kind === 'new' ? 'Plain words, as a newcomer thinking aloud.' : 'What you are going for, the options and numbers you weighed, which rival you are watching.'} Name the cards and spaces. A few words are fine for a small follow-up like a payment. Say plainly when something surprised you or you misjudged.`,
    '- feel: empty unless something right now felt good, bad, pointless, confusing or exciting. Then one plain sentence: what, and why it felt that way. Never a fix.',
    '- idea: usually empty. When your situation made you wish for a member or a wheel space that does not exist (a choice felt bad, or your plan wanted something), describe it in one sentence: its name and what it would do. Raw ideas are welcome here, and only here.',
    'Only numbers shown in the current list are legal.',
  ].join('\n');
}

// ---------- the model ----------
let spent = 0;
// every seat's whole brief, once (the full prompt of each decision = this file + the logged "prompt")
NAMES.forEach((n, i) => { const fp = f(`system-${n}.md`); if (!fs.existsSync(fp)) fs.writeFileSync(fp, systemPrompt(i)); });
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
      log({ seat, label, chars: prompt.length, prompt, cost, usage: usage && { in: usage.input_tokens, cacheRead: usage.cache_read_input_tokens, cacheNew: usage.cache_creation_input_tokens, out: usage.output_tokens }, answer: text, err: text ? undefined : (err || out).slice(0, 400) });
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
  if (n.plan) out.push(`YOUR CURRENT PLAN: ${n.plan}`, '');
  const rounds = Object.entries(n.rounds);
  if (rounds.length) out.push('YOUR ROUND NOTES SO FAR', ...rounds.map(([r, t]) => `- After round ${ROMAN[r]}: ${t}`), '');
  if (n.feel.length) out.push('YOUR FEEL NOTES SO FAR', ...n.feel.slice(-8).map(x => `- Round ${ROMAN[x.round]}: ${x.text}`), '');
  if (n.moves.length) out.push('YOUR LAST MOVES (oldest first)', ...n.moves.slice(-8).map(x => `- Round ${ROMAN[x.round]}: ${x.label}. Why: ${x.why}`), '');
  return out.join('\n');
}
const clean = v => v.split('\n').filter(l => !/node scripts\/v4-expert\.mjs|^Answer with:/.test(l)).join('\n');

// ---------- prescriptions: observations only ----------
const FIX = /\b(should (cost|be cheaper|be pricier|give|pay|read|say)|cost(s|ing)? (only )?\d|make (it|them)|change (it|them) to|instead of|cheaper|pricier|nerf|buff|lower (the|its)|raise (the|its)|reduce|increase (the|its)|cap (it|at)|limit (it|to)|\+\d|\bto \d+\b)/i;

// Once a round, before the round's first move (coordinator's review of pilot 1, items 1 and 4: players only weighed the
// next contest, and never asked whether their line could win): a forecast, a keep-or-switch decision and the plan.
// After rounds I and II it also carries the round notes.
async function roundNotes(seat, r, { start = false, end = false } = {}) {
  const kind = kinds[seat];
  if (end) return endNotes(seat);
  const v = clean(ex('view', DIR, String(seat), '--full'));
  const looking = start ? 'Round I is about to start.' : `Round ${ROMAN[r]} just ended.`;
  const ask1 = start ? '' : `- notes: 2 to 4 sentences: what you were going for, what felt good, what felt bad or pointless (name the spaces, members and moments).${kind === 'new' ? ' Also what you learned about how to play, so you play better next round.' : ''} Observations only, never how to fix anything.\n`;
  const forecast = kind === 'new'
    ? '- forecast: in your own words, how you think you are doing, who looks like they are winning and why, and roughly how many followers you might end with.\n'
    : '- forecast: your projected final followers on two lines, counted honestly with the recruits and rounds left: a member line (recruit the best members you can afford in the shop now and next round, counting their printed followers, what their abilities pay in the rounds left, and the contests they help) and a buy-followers line; then the projected finish of the player you must beat. Pick the line by these numbers, not by habit.\n';
  const prompt = `${memory(seat)}\nTHE TABLE NOW\n${v}\n\n${looking} Before you play on, take stock.\n${ask1}${forecast}- decision: "keep" or "switch": is your plan good enough to win?\n- plan: one or two sentences: the plan you will follow from here.\n- ideas: usually an empty list; any member or wheel space that does not exist that your situation made you wish for (name and what it does), one sentence each.\nAnswer with only: {${start ? '' : '"notes": "...", '}"forecast": "...", "decision": "keep|switch", "plan": "...", "ideas": []}`;
  const a = await ask(seat, prompt, start ? 'plan before round I' : `round notes ${ROMAN[r]}`, x => ((start || (typeof x.notes === 'string' && x.notes.length > 20)) && typeof x.plan === 'string' && typeof x.forecast === 'string' ? '' : 'the JSON needs forecast, decision, plan (and notes after a round).'));
  notes[seat].plan = a.plan;
  (notes[seat].plans ||= []).push({ round: r, start, forecast: a.forecast, decision: a.decision, plan: a.plan });
  if (!start) notes[seat].rounds[r] = a.notes;
  saveNotes();
  const evRound = start ? 0 : r;
  fs.appendFileSync(f('events.jsonl'), JSON.stringify({ t: Date.now(), type: 'plan', seat, round: evRound, start, forecast: a.forecast, decision: a.decision, plan: a.plan }) + '\n');
  addIdeas(seat, start ? 1 : r + 1, a.ideas, start ? 'before round I' : `after round ${ROMAN[r]}`);
  if (!start) ex('diary', DIR, String(seat), a.notes);
}
async function endNotes(seat) {
  const v = clean(ex('view', DIR, String(seat), '--full'));
  const a = await ask(seat, `${memory(seat)}\nTHE TABLE AT THE END\n${v}\n\nRound III and the game just ended. Write your round notes in 2 to 4 sentences: what you were going for, what felt good, what felt bad or pointless (name the spaces, members and moments). Observations only.\nAnswer with only: {"notes": "..."}`, 'round notes III', x => (typeof x.notes === 'string' && x.notes.length > 20 ? '' : 'notes must be a few sentences.'));
  notes[seat].rounds[3] = a.notes; saveNotes();
  ex('diary', DIR, String(seat), a.notes);
}
function addIdeas(seat, round, ideas, at) {
  for (const t of (Array.isArray(ideas) ? ideas : [ideas]).map(x => String(x || '').trim()).filter(x => x.length > 8)) {
    fs.appendFileSync(f('events.jsonl'), JSON.stringify({ t: Date.now(), type: 'idea', seat, round, at, text: t }) + '\n');
    fs.appendFileSync(f('ideas.jsonl'), JSON.stringify({ game: path.basename(DIR), player: NAMES[seat], kind: kinds[seat], round, at, text: t }) + '\n');
  }
}

async function decide(seat) {
  const meta = readJson(f('meta.json'));
  const s = readJson(f('state.json'));
  // which round's notes are owed (the same rule v4-expert enforces)
  const owed = meta.diaryOn && s.round > 1 && !meta.diary?.[seat]?.[s.round - 1] ? s.round - 1 : 0;
  if (owed) { await roundNotes(seat, owed); return decide(seat); }
  if (s.round === 1 && !notes[seat].plans?.length) { await roundNotes(seat, 1, { start: true }); return decide(seat); }
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
  if (a.idea) addIdeas(seat, s.round, a.idea, label);
  saveNotes();
  console.log(`r${s.round} ${NAMES[seat]} (${kinds[seat]}): ${label} | ${a.why.slice(0, 140)}${a.feel ? ` | FEEL: ${a.feel}` : ''}`);
  if (/refused|No such option|isn't offered/.test(res)) console.log(`  !! move refused: ${res.slice(0, 200)}`);
}

// Debrief (coordinator's review, item 5; Cory: "some of their feedback about what feels bad, feels based on their
// commitment to a losing strategy"): what they'd do differently first, then each complaint checked against another
// line, tagged with the player's own strategy so a report can weigh it; then ideas (Cory, Nov 13: suggestions for
// replacement spaces and members, from their strategy).
async function debrief(seat) {
  const kind = kinds[seat];
  const v = clean(ex('view', DIR, String(seat), '--full'));
  const plans = (notes[seat].plans || []).map(x => `- ${x.start ? 'Before round I' : `After round ${ROMAN[x.round]}`}: forecast ${x.forecast} | ${x.decision} | plan: ${x.plan}`).join('\n');
  const base = `${memory(seat)}\nYOUR PLANS THROUGH THE GAME\n${plans || '(none)'}\n\nALL YOUR FEEL NOTES\n${notes[seat].feel.map(x => `- Round ${ROMAN[x.round]} (${x.at}): ${x.text}`).join('\n') || '(none)'}\n\nTHE TABLE AT THE END\n${v}\n\nThe game is over. Write your debrief for the designer, as ${kind === 'new' ? 'a first-time player' : 'an experienced player'} after a game night. Plain words; name every space, member and artifact you mention.\n- strategy: one sentence: the line you played (what you built or chased).\n- result: 2 to 4 sentences on why you won or lost and the moment that decided it.\n- differently: what you would do differently next time, and why.\n- members: looking back, which member did you pass on that you should have recruited, or which did you recruit that was not worth it, with the numbers as you see them now.\n- good: what felt good (moments, spaces, members, decisions), each with why.\n- bad: what felt bad, pointless or confusing. For each, say whether it would still bother you if you had played a line that could have won, and why. If it only hurt because of your own plan, say so.\n- change: what you would want the designer to look at: name the thing and say what is wrong with it as you felt it at the table. Never say how to fix it: no new numbers, prices, limits or card text.\n- ideas: members or wheel spaces that do not exist that your game made you want (name and what it does, one sentence each), drawn from your strategy and situation. A replacement for a card you disliked is welcome here.\n- again: would you play again, and what would bring you back or keep you away (1 to 2 sentences).\nAnswer with only: {"strategy": "...", "result": "...", "differently": "...", "members": "...", "good": ["..."], "bad": [{"what": "...", "otherLine": "yes|no", "why": "..."}], "change": ["..."], "ideas": ["..."], "again": "..."}`;
  const shape = x => (typeof x.result === 'string' && typeof x.strategy === 'string' && Array.isArray(x.good) && Array.isArray(x.bad) && x.bad.every(b => b && typeof b.what === 'string') && Array.isArray(x.change) ? '' : 'the JSON needs strategy, result, differently, good, bad (objects with what, otherLine, why), change, ideas and again.');
  let a = await ask(seat, base, 'debrief', shape);
  const fixes = a.change.filter(c => FIX.test(c));
  if (fixes.length) {
    log({ seat, label: 'debrief prescriptions flagged', fixes });
    a = await ask(seat, `${base}\n\nYour first answer proposed fixes in "change" (${fixes.map(x => `"${x}"`).join('; ')}). Rewrite every "change" item as what is wrong as you felt it, with no fix, number, price or new wording. Ideas for new cards belong only in "ideas".`, 'debrief rewrite', shape);
  }
  addIdeas(seat, 3, a.ideas, 'debrief');
  const text = [`STRATEGY: ${a.strategy}`, `RESULT: ${a.result}`, `DIFFERENTLY: ${a.differently || ''}`, `MEMBERS LOOKING BACK: ${a.members || ''}`, 'GOOD:', ...a.good.map(x => `- ${x}`), 'BAD:', ...a.bad.map(x => `- ${x.what} (would it bother me on another line? ${x.otherLine}: ${x.why || ''})`), 'WANT LOOKED AT:', ...a.change.map(x => `- ${x}`), 'IDEAS:', ...(a.ideas || []).map(x => `- ${x}`), `AGAIN: ${a.again || ''}`].join('\n');
  ex('postgame', DIR, String(seat), text);
  fs.writeFileSync(f(`debrief-${NAMES[seat]}.json`), JSON.stringify({ kind, ...a }, null, 2));
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
for (let seat = 0; seat < N; seat++) if (!metaEnd.diary?.[seat]?.[3]) await roundNotes(seat, 3, { end: true });
for (let seat = 0; seat < N; seat++) if (!readJson(f('meta.json')).post?.[seat]) await debrief(seat);

// ---------- transcript ----------
function kindWord(i) { return { exp: 'experienced', new: 'new', plain: 'experienced, no strategy notes' }[kinds[i]] || kinds[i]; }
const rep = ex('report', DIR);
const evs = fs.readFileSync(f('events.jsonl'), 'utf8').trim().split('\n').map(l => JSON.parse(l));
const feel = evs.filter(e => e.type === 'feel');
const head = [`# Player agents game: ${path.basename(DIR)}`, '',
  `Players: ${NAMES.map((n, i) => `${n} (${kindWord(i)})`).join(', ')}. Model: ${MODEL}. Cost of the model calls: $${spent.toFixed(2)} this run.`, '',
  '## Feel notes during play', ...feel.map(e => `- Round ${ROMAN[e.round]}, ${NAMES[e.seat]} (${kindWord(e.seat)}), at "${e.at}": ${e.text}`), '', ''].join('\n');
fs.writeFileSync(f('transcript.md'), head + rep);
if (flags.out) { fs.mkdirSync(flags.out, { recursive: true }); for (const n of ['transcript.md', 'cards.md', 'events.jsonl', 'agents.jsonl', 'notes.json', 'players.json', 'meta.json', 'ideas.jsonl', ...NAMES.map(x => `debrief-${x}.json`), ...NAMES.map(x => `system-${x}.md`)]) if (fs.existsSync(f(n))) fs.copyFileSync(f(n), path.join(flags.out, n)); }
console.log(`Done: ${moves} decisions this run, $${spent.toFixed(2)}, ${Math.round((Date.now() - T0) / 60000)} min. ${f('transcript.md')}`);
