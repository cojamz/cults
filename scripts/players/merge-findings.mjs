#!/usr/bin/env node
// Every reviewed game's findings about the game, grouped by what they're about, for the ranked list (Cory, Nov 13:
// "extract all the like recommendations and learnings and recommended members and things to change or tweak or remove
// into like a ranked list"). Reads design/eval/player-agents/findings-*.json; prints one block per subject with every
// game's finding, verdict and evidence, subjects seen in more games first.
import fs from 'node:fs';
import path from 'node:path';
const D = path.resolve(process.argv[2] || 'design/eval/player-agents');
const all = [];
for (const f of fs.readdirSync(D).filter(x => /^findings-.*\.json$/.test(x))) {
  const game = f.replace(/^findings-|\.json$/g, '');
  for (const x of JSON.parse(fs.readFileSync(path.join(D, f), 'utf8'))) all.push({ game, ...x });
}
// players per game, from its facts sheet's standings table (Cory, Nov 13: 2 and 3 players aren't balanced yet, weigh lower)
const seats = g => { try { return fs.readFileSync(path.join(D, `facts-${g}.md`), 'utf8').split('\n').filter(l => /^\| \w+ \| (new|experienced)/.test(l)).length; } catch { return 4; } };
const W = g => (seats(g) >= 4 ? 1 : 0.5);
const key = s => String(s).toLowerCase().replace(/^the /, '').replace(/[^a-z0-9 ]/g, '').trim();
const by = new Map();
for (const x of all) { const k = key(x.subject); if (!by.has(k)) by.set(k, []); by.get(k).push(x); }
const rows = [...by.values()].map(xs => ({ xs, games: new Set(xs.map(x => x.game)).size, true1: xs.filter(x => x.verdict === 1).length, str: xs.reduce((a, x) => a + (x.verdict === 1 ? (x.strength || 0) * W(x.game) : 0), 0), games4: new Set(xs.filter(x => seats(x.game) >= 4).map(x => x.game)).size }))
  .sort((a, b) => b.str - a.str || b.games - a.games);
const out = [`# Findings across ${new Set(all.map(x => x.game)).size} games (${all.length} findings, ${rows.length} subjects)`, ''];
for (const r of rows) {
  out.push(`## ${r.xs[0].subject} (${r.xs[0].kind}) · ${r.games} game(s) (${r.games4} with 4 players), ${r.true1} held up, weighted strength ${r.str}`);
  for (const x of r.xs) out.push(`- [${x.game}, ${seats(x.game)}p${x.count_specific ? ', player-count' : ''}] v${x.verdict} ${x.tone}${x.players?.length ? ` (${x.players.join(', ')})` : ''}${x.outdated ? ' OUTDATED' : ''}: ${x.claim} Evidence: ${x.evidence}`);
  out.push('');
}
console.log(out.join('\n'));
