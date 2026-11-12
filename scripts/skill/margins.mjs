// How close are contests at the end of each round? Plays all-bot games and saves, for every contest at every round's end,
// every player's score. Usage: DECK=10 TODAY=1 node scripts/skill/margins.mjs [--level=hard] [--games=48] [--first=101] [--par=2] [--limit=300] --out=<file.jsonl>
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { appendFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const arg = (k, d) => { const a = process.argv.find(x => x.startsWith(`--${k}=`)); return a ? a.slice(k.length + 3) : d; };

async function playOne({ g, level }) {
  const { createGame, applyMove, allQuadrantIds } = await import('../../src/engine/v4/index.js');
  const { chooseBotMove } = await import('../../src/engine/v4/bots.js');
  const { seededRandom } = await import('../../src/engine/v4/rng.js');
  const { sphereVersion } = await import('../../src/v4/tables.js');
  const { deckRules } = await import('../lib/deck-choice.mjs');
  const deal = seededRandom(g * 7717 + 3 + 4 * 101);
  const pool = allQuadrantIds().filter(q => sphereVersion(q) === '2.0'), quads = [];
  while (quads.length < 4) quads.push(pool.splice(Math.floor(deal() * pool.length), 1)[0]);
  const rand = seededRandom(g * 7717 + 99);
  let s = createGame({ seats: [0, 1, 2, 3].map(() => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: { ...deckRules(), roundDecks: 2, contests: 'byColor', plus1: 'game' } });
  let moves = 0;
  while (!s.over && ++moves < 4000) s = applyMove(s, chooseBotMove(s, rand, { maxMs: Infinity, level }));
  const rows = [];
  for (const c of s.contests) for (const r of c.results) rows.push({ g, round: c.round, qid: r.qid, label: r.label, prize: c.prize, scores: r.rows.map(x => x.score), winners: r.winners });
  return rows;
}
if (!isMainThread) playOne(workerData).then(r => parentPort.postMessage(r), e => parentPort.postMessage({ error: String(e.stack || e) }));
else {
  const level = arg('level', 'hard'), games = Number(arg('games', 48)), first = Number(arg('first', 101)), par = Number(arg('par', 2)), limit = Number(arg('limit', 300)), out = arg('out', '');
  if (out) mkdirSync(dirname(out), { recursive: true });
  const file = fileURLToPath(import.meta.url);
  await new Promise(done => {
    let next = first, live = 0;
    const launch = () => {
      if (next >= first + games) { if (!live) done(); return; }
      const g = next++; live++;
      const w = new Worker(file, { workerData: { g, level } });
      const t = setTimeout(() => { console.log(`STUCK, skipped game ${g}`); w.removeAllListeners('message'); w.terminate(); live--; launch(); }, limit * 1000);
      w.once('message', r => { clearTimeout(t); live--; if (r.error) console.error(r.error); else { for (const x of r) if (out) appendFileSync(out, JSON.stringify(x) + '\n'); console.log(`game ${g} done`); } w.terminate(); launch(); });
      w.once('error', e => { clearTimeout(t); live--; console.error(e); launch(); });
    };
    for (let i = 0; i < par; i++) launch();
  });
}
