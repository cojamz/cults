// Blind game write-ups for the feel judges. For each mix: whole Hard bot games on several seeds, each written out for a
// different seat (scripts/v4-critique.mjs), filed under a random code. The key (code -> mix) goes to --key, outside
// the judges' folder. Usage: DECK=10 node scripts/econ/sheets.mjs --mixes=a,b,c --seeds=3,11,23 --out=<dir> --key=<file>
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { MIXES } from './mixes.mjs';
const flags = Object.fromEntries(process.argv.slice(2).map(a => { const [k, ...v] = a.replace(/^--/, '').split('='); return [k, v.join('=')]; }));
const mixes = flags.mixes.split(','), seeds = flags.seeds.split(',').map(Number), out = flags.out;
mkdirSync(out, { recursive: true });
const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ'.split('');
// a fixed shuffle so the codes don't follow the mix order
let x = Number(flags.salt || 7); const rnd = () => ((x = (x * 48271) % 2147483647) / 2147483647);
const codes = [...letters].sort(() => rnd() - 0.5);
const key = {};
mixes.forEach((n, i) => {
  const code = codes[i], env = { ...process.env, ...Object.fromEntries(Object.entries(MIXES[n]).map(([k, v]) => [k, String(v)])) };
  key[code] = n;
  mkdirSync(`${out}/${code}`, { recursive: true });
  seeds.forEach((seed, j) => {
    const game = `${out}/${code}/game${j + 1}.txt`;
    execFileSync('node', ['scripts/v4-critique.mjs', 'botgame', game, '--seed', String(seed), '--level', 'hard'], { env, stdio: 'ignore' });
    execFileSync('node', ['scripts/v4-critique.mjs', game, '--seat', String((j % 4) + 1), '--out', `${out}/${code}/game${j + 1}.md`], { env, stdio: 'ignore' });
    console.log(`${code} game ${j + 1} done`);
  });
});
writeFileSync(flags.key, JSON.stringify(key, null, 2));
