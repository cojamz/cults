// Two bot settings head to head: each table is played twice, A in seats 0 and 2 then in 1 and 3, so luck of the
// deal and the seat cancels. Reports seats won and the paired follower difference (A minus B, per table pair).
// Usage: DECK=10 node scripts/v4-bot-duel.mjs --a='{"level":"veryhard"}' --b='{"level":"veryhard","crn":true}' \
//          [--tables=20] [--first=1] [--par=4] [--out=design/eval/vh-duel/<label>.jsonl]
// A setting is chooseBotMove's opts (level, budget, candidates, crn, halving, window). Deterministic per table.
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { appendFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const arg = (k, d) => { const a = process.argv.find(x => x.startsWith(`--${k}=`)); return a ? a.slice(k.length + 3) : d; };

async function playOne({ g, side, A, B }) {
  const { createGame, applyMove, followers, memberCount, allQuadrantIds } = await import('../src/engine/v4/index.js');
  const { chooseBotMove } = await import('../src/engine/v4/bots.js');
  const { seededRandom } = await import('../src/engine/v4/rng.js');
  const { sphereVersion } = await import('../src/v4/tables.js');
  const { deckRules } = await import('./lib/deck-choice.mjs');
  const rand = seededRandom(g * 7717 + 3 + 4 * 101);
  const pool = allQuadrantIds().filter(q => sphereVersion(q) === '2.0'), quads = [];
  while (quads.length < 4) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: [0, 1, 2, 3].map(() => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: deckRules() });
  const who = [0, 1, 2, 3].map(i => (i % 2 === side ? 'A' : 'B'));
  let moves = 0;
  const t0 = Date.now();
  while (!s.over && ++moves < 4000) {
    const pl = s.pending.player;
    const o = who[pl] === 'A' ? A : B;
    s = applyMove(s, chooseBotMove(s, rand, { maxMs: Infinity, ...o }));
  }
  const f = s.players.map(p => followers(s, p));
  const top = Math.max(...f);
  return { g, side, quads, who, followers: f, members: s.players.map(p => memberCount(s, p)), won: f.map(x => x === top), ms: Date.now() - t0 };
}

if (!isMainThread) {
  playOne(workerData).then(r => parentPort.postMessage(r), e => parentPort.postMessage({ error: String(e.stack || e) }));
} else {
  const A = JSON.parse(arg('a', '{"level":"veryhard"}')), B = JSON.parse(arg('b', '{"level":"veryhard"}'));
  const tables = Number(arg('tables', 20)), first = Number(arg('first', 1)), par = Number(arg('par', 4));
  const out = arg('out', '');
  if (out) mkdirSync(dirname(out), { recursive: true });
  const jobs = [];
  for (let g = first; g < first + tables; g++) for (const side of [0, 1]) jobs.push({ g, side, A, B });
  const res = [];
  const file = fileURLToPath(import.meta.url);
  await new Promise(done => {
    let next = 0, live = 0;
    const launch = () => {
      if (next >= jobs.length) { if (!live) done(); return; }
      const job = jobs[next++]; live++;
      const w = new Worker(file, { workerData: job });
      w.once('message', r => {
        live--;
        if (r.error) { console.error(r.error); } else {
          res.push(r);
          if (out) appendFileSync(out, JSON.stringify({ A, B, ...r }) + '\n');
          console.log(`table ${r.g} side ${r.side}: ${r.who.map((x, i) => `${x}${r.followers[i]}${r.won[i] ? '*' : ''}`).join(' ')} (${Math.round(r.ms / 1000)}s)`);
        }
        w.terminate(); launch();
      });
      w.once('error', e => { live--; console.error(e); launch(); });
    };
    for (let i = 0; i < par; i++) launch();
  });
  let wa = 0, wb = 0;
  const diffs = [];
  for (let g = first; g < first + tables; g++) {
    const pair = res.filter(r => r.g === g);
    if (pair.length < 2) continue;
    let d = 0;
    for (const r of pair) r.who.forEach((x, i) => { d += (x === 'A' ? 1 : -1) * r.followers[i] / 2; if (r.won[i]) x === 'A' ? wa++ : wb++; });
    diffs.push(d / 2); // per seat, averaged over the two games
  }
  const m = diffs.reduce((a, b) => a + b, 0) / (diffs.length || 1);
  const sd = Math.sqrt(diffs.reduce((a, b) => a + (b - m) ** 2, 0) / Math.max(1, diffs.length - 1));
  const better = diffs.filter(d => d > 0).length;
  console.log(`\nA ${JSON.stringify(A)}\nB ${JSON.stringify(B)}`);
  console.log(`seats won A ${wa}, B ${wb} of ${res.length * 4}; followers per seat A−B ${m.toFixed(2)} ± ${(sd / Math.sqrt(diffs.length || 1)).toFixed(2)} (s.e.); A better on ${better} of ${diffs.length} tables`);
}
