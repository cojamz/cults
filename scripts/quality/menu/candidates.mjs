// Every card behind a REPLACE switch (each switch file alone, then each header key alone), with what it replaces.
//   node scripts/quality/menu/candidates.mjs > candidates.json
import { readdirSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const dir = new URL('../../../src/engine/v4/content/', import.meta.url).pathname;
const X = new URL('./extract.mjs', import.meta.url).pathname;
const run = env => { try { return JSON.parse(execFileSync('node', [X], { env: { ...process.env, ...env }, maxBuffer: 1 << 26, stdio: ['ignore', 'pipe', 'ignore'] })); } catch { return null; } };
const base = run({});
const key = c => `${c.color}|${c.name}|${c.text}`;
const seen = new Set([...base.members, ...base.spaces].map(key));
const baseRetired = new Set(base.members.filter(m => m.retired).map(m => m.color + '|' + m.id));
const baseSpace = new Map(base.spaces.map(s => [s.color + '|' + s.round + '|' + (s.slot ?? s.name), s]));
const out = new Map();
for (const f of readdirSync(dir).filter(f => /^replace\d+\.js$/.test(f))) {
  const n = f.match(/\d+/)[0], src = readFileSync(dir + f, 'utf8');
  const hdr = new Map([...src.matchAll(/->\s*[\w]+\.(\w+)\s+\(([^)]*)\)/g)].map(m => [m[1], m[2]]));
  const oldOf = new Map([...src.matchAll(/(?:space|member)\s+[\w.]+\s+\(([^)]*)\)\s*->\s*[\w]+\.(\w+)\s+\(([^)]*)\)/g)].map(m => [m[3].replace(/,.*$/, '').trim(), m[1]]));
  const envs = [{ [`REPLACE${n}`]: '1' }, ...[...hdr.keys()].map(k => ({ [`REPLACE${n}`]: k }))];
  for (const env of envs) {
    const d = run(env); if (!d) continue;
    const newlyRetired = d.members.filter(m => m.retired && !baseRetired.has(m.color + '|' + m.id));
    const gone = base.spaces.filter(s => !d.spaces.some(t => key(t) === key(s)));
    for (const kind of ['members', 'spaces']) for (const c of d[kind]) {
      if (seen.has(key(c)) || c.retired || out.has(key(c))) continue;
      const rep = oldOf.get(c.name) || (kind === 'spaces' ? gone.find(s => s.color === c.color && s.round === c.round)?.name : (newlyRetired.filter(m => m.color === c.color).length === 1 ? newlyRetired.find(m => m.color === c.color).name : null));
      out.set(key(c), { ...c, kind: kind === 'members' ? 'member' : 'space', switch: `REPLACE${n}=${env[`REPLACE${n}`]}`, file: f, replaces: rep || null });
    }
  }
}
process.stdout.write(JSON.stringify([...out.values()], null, 1));
