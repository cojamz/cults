// Aggregate every expert player's FEEL lines and META notes across the games in this folder into feel.md.
// Usage: node design/eval/balance-1.0/expert/feel.mjs   (reads g*/meta.json; notes which build each game ran on)
import fs from 'node:fs';
import path from 'node:path';
const DIR = path.dirname(new URL(import.meta.url).pathname);
const BUILD = { 1: 'cd500e3a', 2: 'cd500e3a', 3: 'cd500e3a', 4: 'cd500e3a', 5: 'cd500e3a', 6: 'cd500e3a', 7: 'cd500e3a', 8: 'cd500e3a', 9: '363c554e', 10: '363c554e', 11: '291bfb1f final', 12: '291bfb1f final' };
const rows = {}, metas = [], games = [];
for (const g of fs.readdirSync(DIR).filter(d => /^g\d+$/.test(d)).map(d => +d.slice(1)).sort((a, b) => a - b)) {
  const m = JSON.parse(fs.readFileSync(`${DIR}/g${g}/meta.json`, 'utf8'));
  if (!Object.keys(m.post).length) continue;
  games.push(`g${g} (${m.names.length}p, ${m.colors.join(', ')}; build ${BUILD[g] || '?'})`);
  for (const [seat, t] of Object.entries(m.post)) {
    const name = m.names[seat];
    for (const mm of t.matchAll(/FEEL:\s*([^|]+)\|\s*(?:strategic\s*)?(\d)[^|]*\|\s*(?:fun[^0-9|]*)?(\d)[^|]*\|\s*(?:fits[^|a-z]*)?([^|]*)\|\s*([^]*?)(?=FEEL:|META:|$)/gi)) {
      const k = mm[1].trim().replace(/\s*\(.*\)$/, '');
      (rows[k] ??= []).push({ g, who: name, s: +mm[2], f: +mm[3], fit: mm[4].trim().toLowerCase().split(/\s/)[0], why: mm[5].trim().replace(/\s+/g, ' ').slice(0, 180) });
    }
    const me = t.match(/META:([^]*)$/i);
    if (me) metas.push(`g${g} ${name}: ${me[1].trim().replace(/\s+/g, ' ')}`);
  }
}
const avg = a => (a.reduce((x, y) => x + y, 0) / a.length).toFixed(1);
const keys = Object.keys(rows).sort((a, b) => rows[b].length - rows[a].length || a.localeCompare(b));
const L = [`# Expert AI players: feel ratings (balance-1.0, deck 10)`, '', `Games: ${games.join('; ')}.`, '',
  'Strategic and fun are 1 to 5 (averaged over every player who rated the card); fits = how many said it fits its color (yes/no/unsure). Every clause follows the table.', '',
  '| card | n | strategic | fun | fits y/n/? |', '|---|---|---|---|---|'];
for (const k of keys) { const r = rows[k], c = w => r.filter(x => x.fit.startsWith(w)).length; L.push(`| ${k} | ${r.length} | ${avg(r.map(x => x.s))} | ${avg(r.map(x => x.f))} | ${c('y')}/${c('n')}/${c('u')} |`); }
L.push('', '## Every clause', '');
for (const k of keys) { L.push(`### ${k}`); for (const x of rows[k]) L.push(`- g${x.g} ${x.who} (${x.s}/${x.f}, ${x.fit}): ${x.why}`); L.push(''); }
L.push('## META notes', '', ...metas.map(m => `- ${m}`));
fs.writeFileSync(`${DIR}/feel.md`, L.join('\n'));
console.log(`${games.length} games, ${keys.length} cards, ${metas.length} META notes`);
