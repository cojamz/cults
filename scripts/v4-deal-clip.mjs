import { browserPath, launchBrowser } from '../e2e/v4/lib/browser.mjs';
// The shop's deal, on video (Cory, Nov 7: "deck deal animation is terrible"): a round's end into round II (the old row
// goes, the new row deals) and the bots' refills before it, recorded at 1270x700, cut to frames and a contact sheet.
//   node scripts/v4-deal-clip.mjs <base url> <outDir> [speed=steady] [fps=12]
// Writes <outDir>/deal.mp4, <outDir>/f-###.png (the deal only) and <outDir>/sheet.png.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createGame, applyMove, chooseBotMove } from '../src/engine/v4/index.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { buildStamp } from '../e2e/v4/lib/stamp.mjs';

const [base, out, speed = 'steady', fps = '12'] = process.argv.slice(2);
if (!base || !out) { console.error('usage: node scripts/v4-deal-clip.mjs <base url> <outDir> [speed] [fps]'); process.exit(2); }
mkdirSync(out, { recursive: true });
const SEATS = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
function saveAt(seed, pick) {
  let s = createGame({ seats: SEATS, seed });
  const rand = seededRandom(seed);
  for (let n = 0; n < 2000 && !s.over && !pick(s, n); n++) s = applyMove(s, chooseBotMove(s, rand));
  s.build = buildStamp();
  return { config: { seats: SEATS.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal' }, state: s, undo: null, savedAt: Date.now() };
}
const save = saveAt(Number(process.env.SEED || 5), s => s.pending && s.pending.player === 0 && s.pending.kind === 'place' && s.round === 1 && s.players[0].left === 1);
const vdir = join(tmpdir(), `v4-deal-${process.pid}`);
rmSync(vdir, { recursive: true, force: true });
const b = await launchBrowser({ executablePath: browserPath });
const ctx = await b.newContext({ viewport: { width: 1270, height: 700 }, recordVideo: { dir: vdir, size: { width: 1270, height: 700 } } });
const p = await ctx.newPage();
const t0 = Date.now();
await p.goto(`${base}/?intro=0&speed=${speed}`);
await p.evaluate(v => localStorage.setItem('patrons.v4.local', JSON.stringify(v)), save);
await p.reload();
await (await p.waitForSelector('[data-home="resume"]', { timeout: 20000 })).click();
await p.waitForSelector('.lt[data-phase="place"][data-yours="1"] .slot.can .base', { timeout: 20000 });
await p.waitForTimeout(500);
// log every deal's start (video time) so the frames can be cut around them
await p.evaluate(() => { window.__dealT = []; new MutationObserver(ms => { for (const m of ms) for (const n of m.addedNodes) if (n.classList && n.classList.contains('lt-deal')) window.__dealT.push(performance.timeOrigin + performance.now()); }).observe(document.body, { childList: true }); });
const el = await p.$('.slot.can .base');
await el.click();
for (let k = 0; k < 12 && !(await p.$('.lt[data-phase="buy"][data-yours="1"]')); k++) {
  const opt = await p.$('.lt[data-phase="choose"] .prompt.choice button[data-option]:not([disabled]):not([data-option="pass"]):not(.undo)');
  if (opt) await opt.click().catch(() => {});
  await p.waitForTimeout(250);
}
const pass = await p.waitForSelector('.lt[data-phase="buy"][data-yours="1"] [data-option="pass"]', { timeout: 10000 }).catch(() => null);
if (pass) await pass.click();
const next = await p.waitForSelector('[data-next-round]', { timeout: 60000 }).catch(() => null);
if (next) { await p.waitForTimeout(800); await next.click(); }
await p.waitForTimeout(3500);
const deals = await p.evaluate(() => window.__dealT);
await p.screenshot({ path: join(out, 'end.png') });
await ctx.close(); await b.close();
const src = join(vdir, readdirSync(vdir).find(f => f.endsWith('.webm')));
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', src, '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '20', join(out, 'deal.mp4')]);
// the last deal burst (the new round's row): from 300 ms before its first card to 1.6 s after
const last = deals.length ? deals[deals.length - 1] : 0;
let first = last; for (let i = deals.length - 1; i >= 0 && last - deals[i] < 3000; i--) first = deals[i];
const start = Math.max(0, (first - t0) / 1000 - 0.3);
for (const f of readdirSync(out)) if (/^f-\d+\.png$/.test(f)) rmSync(join(out, f));
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', String(start), '-t', '1.8', '-i', join(out, 'deal.mp4'), '-vf', `fps=${fps}`, join(out, 'f-%03d.png')]);
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', String(start), '-t', '1.8', '-i', join(out, 'deal.mp4'), '-vf', `fps=${fps},crop=1270:330:0:370,scale=635:-2,drawtext=text='%{eif\\:n*${Math.round(1000 / fps)}\\:d} ms':x=8:y=8:fontsize=18:fontcolor=white:box=1:boxcolor=black@0.6,tile=3x6`, '-frames:v', '1', join(out, 'sheet.png')]);
rmSync(vdir, { recursive: true, force: true });
console.log(`${deals.length} card(s) dealt; new row's deal from ${start.toFixed(2)}s of the video; ${out}/sheet.png`);
