// How much of a game is the deal? Four identical bots play the same deal (same seed: colors, shop, round I order)
// several times; only the bots' own coin flips (close calls, playouts) differ between replays.
// Usage: DECK=10 TODAY=1 node scripts/skill/luck.mjs [--level=hard] [--deals=40] [--first=1] [--replays=6] [--par=4] --out=<file.jsonl>
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { appendFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const arg = (k, d) => { const a = process.argv.find(x => x.startsWith(`--${k}=`)); return a ? a.slice(k.length + 3) : d; };

async function playOne({ g, rep, level }) {
  const { createGame, applyMove, followers, memberCount, allQuadrantIds } = await import('../../src/engine/v4/index.js');
  const { chooseBotMove } = await import('../../src/engine/v4/bots.js');
  const { seededRandom } = await import('../../src/engine/v4/rng.js');
  const { sphereVersion } = await import('../../src/v4/tables.js');
  const { deckRules } = await import('../lib/deck-choice.mjs');
  const deal = seededRandom(g * 7717 + 3 + 4 * 101); // the deal's colors: same for every replay
  const pool = allQuadrantIds().filter(q => sphereVersion(q) === '2.0'), quads = [];
  while (quads.length < 4) quads.push(pool.splice(Math.floor(deal() * pool.length), 1)[0]);
  const rand = seededRandom(g * 7717 + 3 + 4 * 101 + 1000003 * (rep + 1)); // the bots' coin flips: differ by replay
  let s = createGame({ seats: [0, 1, 2, 3].map(() => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: { ...deckRules(), roundDecks: 2, contests: 'byColor', plus1: 'game' } });
  let moves = 0;
  const t0 = Date.now();
  let order1 = null;
  while (!s.over && ++moves < 4000) {
    if (!order1 && s.round === 1 && s.pending?.kind === 'place') order1 = s.pending.player;
    s = applyMove(s, chooseBotMove(s, rand, { maxMs: Infinity, level }));
  }
  const f = s.players.map(p => followers(s, p));
  const top = Math.max(...f);
  return { g, rep, level, quads, first: order1, followers: f, members: s.players.map(p => memberCount(s, p)), won: f.map(x => x === top), cloaks: s.players.map(p => p.cloak ?? null), ms: Date.now() - t0 };
}

if (!isMainThread) {
  playOne(workerData).then(r => parentPort.postMessage(r), e => parentPort.postMessage({ error: String(e.stack || e) }));
} else {
  const level = arg('level', 'hard'), deals = Number(arg('deals', 40)), first = Number(arg('first', 1)), replays = Number(arg('replays', 6)), par = Number(arg('par', 4));
  const out = arg('out', '');
  if (out) mkdirSync(dirname(out), { recursive: true });
  const jobs = [];
  for (let g = first; g < first + deals; g++) for (let rep = 0; rep < replays; rep++) jobs.push({ g, rep, level });
  const file = fileURLToPath(import.meta.url);
  await new Promise(done => {
    let next = 0, live = 0;
    const launch = () => {
      if (next >= jobs.length) { if (!live) done(); return; }
      const job = jobs[next++]; live++;
      const w = new Worker(file, { workerData: job });
      // --limit=<seconds>: a game still playing after that is stopped and skipped (one stuck game held a run for an hour, Nov 12)
      const limit = Number(arg('limit', 0));
      const timer = limit ? setTimeout(() => { console.log(`STUCK, skipped: deal ${job.g} replay ${job.rep}`); w.removeAllListeners('message'); w.terminate(); live--; launch(); }, limit * 1000) : null;
      w.once('message', r => {
        clearTimeout(timer);
        live--;
        if (r.error) console.error(r.error);
        else { if (out) appendFileSync(out, JSON.stringify(r) + '\n'); console.log(`deal ${r.g} replay ${r.rep}: ${r.followers.map((x, i) => `${x}${r.won[i] ? '*' : ''}`).join(' ')} (${Math.round(r.ms / 1000)}s)`); }
        w.terminate(); launch();
      });
      w.once('error', e => { live--; console.error(e); launch(); });
    };
    for (let i = 0; i < par; i++) launch();
  });
}
