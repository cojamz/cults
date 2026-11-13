#!/usr/bin/env node
// The data a watch page replays: setup plus every move with the player's reason and feel note.
//   node scripts/players/watch-data.mjs <game dir> <out.json>
import fs from 'node:fs';
import path from 'node:path';
const [dir, out] = process.argv.slice(2);
const rd = n => fs.readFileSync(path.join(dir, n), 'utf8');
const meta = JSON.parse(rd('meta.json')), players = JSON.parse(rd('players.json'));
const evs = rd('events.jsonl').split('\n').filter(Boolean).map(l => JSON.parse(l));
const moves = [];
evs.forEach(e => {
  if (e.type === 'move') moves.push({ p: e.seat, o: e.option, ...(e.think === '(only option)' ? { quick: 1 } : { say: e.think }) });
  else if (e.type === 'feel' && moves.length && moves.at(-1).p === e.seat) moves.at(-1).feel = e.text;
});
fs.writeFileSync(out, JSON.stringify({ names: meta.names, kinds: players.kinds, seed: meta.seed, colors: meta.colors, rules: meta.rules, moves }));
console.log(`${moves.length} moves -> ${out}`);
