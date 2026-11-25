// New members of Nov 24-25 in play (thread "Test the new members in play"): seeded 4-player games on the 10-card decks
// with the test set (the game since Nov 11), every engine and color invariant checked after every move (the cross-color
// fuzz runner). Writes one JSON line per game: each seat's members, followers and place, and any failure.
//   node scripts/members/nov25-hunt.mjs <first> <last> <kind=bot|random|mixed> <level=hard|normal> <out.jsonl> [limitSec=240]
import fs from 'node:fs';
import { runTable } from '../../src/test/engine/v4/fuzz-tables-runner.js';
import { followers } from '../../src/engine/v4/core.js';

const [first, last, kind = 'bot', level = 'hard', out, limit = '240'] = process.argv.slice(2);
const COLORS = ['red', 'echo', 'thieves', 'purple', 'market', 'trading', 'silver', 'yellow'];
const RULES = { cull: true, artifacts: true, deck: 10, testSet: true, guests: true };
// a fixed spread of 4-color tables: every color sits at half the tables
const tableFor = seed => { let x = seed * 2654435761 >>> 0; const pool = [...COLORS], t = [];
  while (t.length < 4) { x = (x * 1103515245 + 12345) >>> 0; t.push(pool.splice(x % pool.length, 1)[0]); } return t; };
for (let seed = Number(first); seed <= Number(last); seed++) {
  const quadrants = tableFor(seed), t0 = Date.now();
  const row = { seed, quadrants, kind, level };
  try {
    const { state } = runTable({ quadrants, n: 4, seed, kind, rules: RULES, levels: [level, level, level, level],
      onMove: () => { if (Date.now() - t0 > Number(limit) * 1000) throw new Error(`TIMEOUT over ${limit}s`); } });
    row.seats = state.players.map((p, i) => ({ members: p.members.map(u => state.cards[u].def), followers: followers(state, p), place: state.ranking.indexOf(p.id) }));
    row.ranking = state.ranking;
    row.log = state.log.filter(l => typeof l === 'string' ? true : true).map(l => (typeof l === 'string' ? l : l.text || JSON.stringify(l)));
  } catch (err) { row.error = String(err.stack || err).slice(0, 4000); }
  row.ms = Date.now() - t0;
  fs.appendFileSync(out, JSON.stringify(row) + '\n');
  console.log(seed, row.error ? 'FAIL ' + row.error.split('\n')[0].slice(0, 200) : 'ok', row.ms + 'ms');
}
