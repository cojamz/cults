#!/usr/bin/env node
// Plays every game in matrix.json with player agents, a few at a time, then writes each game's page.
//   node scripts/players/run-matrix.mjs <games dir> <shared out dir> [--parallel 4] [--model claude-opus-5-5] [--only g01,g02]
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const [gamesDir, outDir, ...rest] = process.argv.slice(2);
const flag = (k, d) => { const i = rest.indexOf(`--${k}`); return i >= 0 ? rest[i + 1] : d; };
const PAR = Number(flag('parallel', 4)), MODEL = flag('model', 'claude-opus-5-5'), ONLY = flag('only', '');
const NAMES = ['Ava', 'Ben', 'Cal', 'Dee'];
const games = JSON.parse(fs.readFileSync(path.join(HERE, 'matrix.json'), 'utf8')).games.filter(g => !ONLY || ONLY.split(',').includes(g.id));
const run = (args, log) => new Promise(res => { const p = spawn('node', args, { cwd: path.resolve(HERE, '../..'), stdio: ['ignore', fs.openSync(log, 'a'), fs.openSync(log, 'a')] }); p.on('close', res); });
async function one(g) {
  const dir = path.join(gamesDir, g.id), out = path.join(outDir, g.id), log = path.join(gamesDir, `${g.id}.log`);
  const names = NAMES.slice(0, g.colors.length).join(',');
  const code = await run([path.join(HERE, 'play.mjs'), dir, '--colors', g.colors.join(','), '--kinds', g.kinds.join(','), '--names', names, '--model', MODEL, '--limit', '5400', '--out', out], log);
  if (code === 0) await run([path.join(HERE, 'page.mjs'), dir, path.join(out, `${g.id}.html`)], log);
  console.log(`${g.id}: exit ${code}`);
}
fs.mkdirSync(gamesDir, { recursive: true });
const queue = [...games];
await Promise.all(Array.from({ length: PAR }, async () => { while (queue.length) await one(queue.shift()); }));
console.log('all done');
