// Body Snatchers check (Cory, Nov 12: "body snatchers seems... super broken? ... are the bots just using it as idiots"):
// Very Hard bots, Red at every table, today's rules. Logs every Body Snatchers swap (what was given, what was taken,
// each member's worth and price) and how the game ended for the snatcher and the rival it took from.
// Usage: DECK=10 node scripts/skill/snatch-watch.mjs --tables=12 --par=4 --limit=1200 --out=<file.jsonl>
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { appendFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const arg = (k, d) => { const a = process.argv.find(x => x.startsWith(`--${k}=`)); return a ? a.slice(k.length + 3) : d; };
async function playOne({ g }) {
  const { createGame, applyMove, followers, memberCount, allQuadrantIds } = await import('../../src/engine/v4/index.js');
  const { defById } = await import('../../src/engine/v4/content/index.js');
  const { chooseBotMove } = await import('../../src/engine/v4/bots.js');
  const { seededRandom } = await import('../../src/engine/v4/rng.js');
  const { sphereVersion } = await import('../../src/v4/tables.js');
  const { deckRules } = await import('../lib/deck-choice.mjs');
  const rand = seededRandom(g * 7717 + 3 + 4 * 101);
  const pool = allQuadrantIds().filter(q => sphereVersion(q) === '2.0'), quads = ['red'];
  pool.splice(pool.indexOf('red'), 1);
  while (quads.length < 4) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: [0, 1, 2, 3].map(() => ({ kind: 'bot', bot: 'veryhard' })), seed: g, quadrants: quads, rules: { ...deckRules(), roundDecks: 2, contests: 'byColor', plus1: 'game' } });
  const swaps = [], bought = [];
  const bsUid = Object.keys(s.cards).find(u => s.cards[u].def === 'red.bodysnatchers');
  let holder = null;
  let moves = 0; const t0 = Date.now();
  while (!s.over && ++moves < 6000) {
    const pend = s.pending;
    if (bsUid) { const h = s.players.find(p => p.members.includes(bsUid)); if (h && h.id !== holder) { bought.push({ round: s.round, p: h.id }); } holder = h ? h.id : null; }
    const m = chooseBotMove(s, rand, { maxMs: Infinity, level: 'veryhard' });
    if (/^Body Snatchers/.test(pend.prompt || '')) {
      const opt = pend.options.find(o => o.id === m.option);
      const info = uid => { const d = defById(s.cards[uid].def); const owner = s.players.find(p => p.members.includes(uid)); return { name: d.name, f: d.f, price: (d.s || 0) + (d.w || 0), owner: owner?.id }; };
      const fBefore = s.players.map(p => followers(s, p));
      const best = pend.options.filter(o => o.kind === 'trade').map(o => ({ give: info(o.value[0]), take: info(o.value[1]) }))
        .sort((x, y) => (y.take.f + y.take.price - y.give.f - y.give.price) - (x.take.f + x.take.price - x.give.f - x.give.price))[0];
      const rec = { round: s.round, p: pend.player, choices: pend.options.length - 1, fBefore, best, pick: opt?.value ? { give: info(opt.value[0]), take: info(opt.value[1]) } : 'none' };
      s = applyMove(s, m);
      rec.fAfter = s.players.map(p => followers(s, p));
      swaps.push(rec);
      continue;
    }
    s = applyMove(s, m);
  }
  const f = s.players.map(p => followers(s, p)), top = Math.max(...f);
  return { g, quads, followers: f, members: s.players.map(p => memberCount(s, p)), won: f.map(x => x === top), swaps, bought, inGame: !!bsUid, ms: Date.now() - t0 };
}
if (!isMainThread) playOne(workerData).then(r => parentPort.postMessage(r), e => parentPort.postMessage({ error: String(e.stack || e) }));
else {
  const tables = Number(arg('tables', 12)), first = Number(arg('first', 1)), par = Number(arg('par', 4)), limit = Number(arg('limit', 1200)), out = arg('out', '');
  const jobs = []; for (let g = first; g < first + tables; g++) jobs.push({ g });
  const file = fileURLToPath(import.meta.url);
  let next = 0, live = 0;
  await new Promise(done => {
    const launch = () => {
      if (next >= jobs.length) { if (!live) done(); return; }
      const job = jobs[next++]; live++;
      const w = new Worker(file, { workerData: job });
      const timer = setTimeout(() => { console.log(`STUCK, skipped: table ${job.g}`); w.removeAllListeners('message'); w.terminate(); live--; launch(); }, limit * 1000);
      w.once('message', r => { clearTimeout(timer); live--; if (r.error) console.error(r.error); else { if (out) appendFileSync(out, JSON.stringify(r) + '\n'); console.log(`table ${r.g}: ${r.followers.join(' ')} swaps ${r.swaps.length} (${Math.round(r.ms / 1000)}s)`); } w.terminate(); launch(); });
      w.once('error', e => { clearTimeout(timer); live--; console.error(e); launch(); });
    };
    for (let i = 0; i < par; i++) launch();
  });
}
