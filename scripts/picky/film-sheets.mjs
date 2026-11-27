#!/usr/bin/env node
// Cut a filmed game (scripts/picky/film.mjs) into still frames and numbered contact sheets for frame-by-frame review.
//
//   node scripts/picky/film-sheets.mjs <film dir> [--fps 4] [--per 12] [--cols 3]
//
// Frames are taken --fps times a second. A frame identical (near enough) to the one before is folded into it, so each
// kept frame carries how long it stayed on screen ("held 3.2 s"): a reviewer sees both motion (frames 0.25 s apart)
// and lingering (one frame held for seconds). Writes <dir>/frames/f<n>.jpg (full size, 1270x700), <dir>/sheets/
// s<n>.jpg (--per frames each, captioned "#n · m:ss.s · held x s"), and <dir>/sheets/s<n>.txt: the timeline lines
// (what the page showed, what "You" clicked) for that sheet's stretch of time.
import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { browserPath } from '../../e2e/v4/lib/browser.mjs';

const args = process.argv.slice(2);
const dir = resolve(args.find(a => !a.startsWith('--')) || '.');
const flag = (name, dflt) => { const i = args.indexOf(`--${name}`); return i < 0 ? dflt : args[i + 1]; };
const FPS = Number(flag('fps', 4)), PER = Number(flag('per', 12)), COLS = Number(flag('cols', 3));
const raw = join(dir, '.raw'), frames = join(dir, 'frames'), sheets = join(dir, 'sheets');
for (const d of [raw, frames, sheets]) { rmSync(d, { recursive: true, force: true }); mkdirSync(d, { recursive: true }); }

// 1. every 1/FPS s, a small grey copy for comparing and the full frame
execSync(`ffmpeg -loglevel error -i ${join(dir, 'game.webm')} -vf fps=${FPS} -q:v 3 ${join(raw, 'r%06d.jpg')}`);
execSync(`ffmpeg -loglevel error -i ${join(dir, 'game.webm')} -vf fps=${FPS},scale=160:88,format=gray -f rawvideo ${join(raw, 'small.gray')}`);
const small = readFileSync(join(raw, 'small.gray'));
const PX = 160 * 88, N = Math.floor(small.length / PX);
// 2. fold runs of the same picture: a frame is new when enough of it changed since the last kept one
const kept = [];
let ref = -1;
for (let i = 0; i < N; i++) {
  let changed = 0;
  if (ref >= 0) for (let p = 0; p < PX; p++) if (Math.abs(small[i * PX + p] - small[ref * PX + p]) > 10) changed++;
  if (ref < 0 || changed > PX * 0.0015) { kept.push({ i, t: i / FPS }); ref = i; }
}
for (let k = 0; k < kept.length; k++) kept[k].held = ((k + 1 < kept.length ? kept[k + 1].i : N) - kept[k].i) / FPS;
kept.forEach((f, k) => { f.n = k + 1; execSync(`cp ${join(raw, `r${String(f.i + 1).padStart(6, '0')}.jpg`)} ${join(frames, `f${String(f.n).padStart(5, '0')}.jpg`)}`); });
rmSync(raw, { recursive: true, force: true });

// 3. sheets: PER frames each, captioned, with the timeline lines for their stretch
const tl = existsSync(join(dir, 'timeline.jsonl')) ? readFileSync(join(dir, 'timeline.jsonl'), 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l)) : [];
const mmss = t => `${Math.floor(t / 60)}:${(t % 60).toFixed(2).padStart(5, "0")}`;
const browser = await chromium.launch({ executablePath: browserPath });
const page = await browser.newPage({ viewport: { width: 1290, height: 800 } });
const W = Math.floor(1270 / COLS) - 6, H = Math.round(W * 700 / 1270);
const index = [];
for (let s = 0; s * PER < kept.length; s++) {
  const group = kept.slice(s * PER, (s + 1) * PER);
  const from = group[0].t, to = group[group.length - 1].t + group[group.length - 1].held;
  const cells = group.map(f => {
    const long = f.held >= 2 ? ' long' : '';
    return `<figure><img src="file://${join(frames, `f${String(f.n).padStart(5, '0')}.jpg`)}"><figcaption class="${long}">#${f.n} · ${mmss(f.t)} · ${f.held >= 0.5 ? `held ${f.held.toFixed(f.held < 10 ? 2 : 0)} s` : `${(f.held * 1000).toFixed(0)} ms`}</figcaption></figure>`;
  }).join('');
  const html = join(sheets, '.sheet.html');
  writeFileSync(html, `<html><body style="margin:0;background:#111;color:#eee;font:13px/1.2 DejaVu Sans,sans-serif">
    <div style="padding:4px 8px">sheet ${s + 1} · frames #${group[0].n}-#${group[group.length - 1].n} · ${mmss(from)}-${mmss(to)} of the game</div>
    <div style="display:grid;grid-template-columns:repeat(${COLS},${W}px);gap:6px;padding:0 6px 6px">${cells}</div>
    <style>figure{margin:0}img{width:${W}px;height:${H}px;display:block;border:1px solid #333}figcaption{padding:2px 0}.long{color:#ffcf4a;font-weight:bold}</style></body></html>`);
  await page.goto(`file://${html}`);
  await page.waitForFunction(() => [...document.images].every(i => i.complete));
  const file = join(sheets, `s${String(s + 1).padStart(4, '0')}.jpg`);
  await page.screenshot({ path: file, fullPage: true, type: 'jpeg', quality: 82 });
  const lines = tl.filter(r => r.t >= from - 0.05 && r.t < to + 0.05).map(r => { const { t, ...rest } = r; return `${mmss(t)}  ${Object.entries(rest).map(([k, v]) => `${k}=${JSON.stringify(v)}`).join(' ')}`; });
  writeFileSync(file.replace(/\.jpg$/, '.txt'), `sheet ${s + 1}: frames #${group[0].n}-#${group[group.length - 1].n}, ${mmss(from)}-${mmss(to)}\n${group.map(f => `#${f.n} ${mmss(f.t)} held ${f.held.toFixed(2)} s`).join('\n')}\n\ntimeline:\n${lines.join('\n')}\n`);
  index.push({ sheet: s + 1, from, to, frames: [group[0].n, group[group.length - 1].n] });
}
await browser.close();
rmSync(join(sheets, '.sheet.html'), { force: true });
writeFileSync(join(dir, 'sheets.json'), JSON.stringify({ fps: FPS, per: PER, frames: kept.length, sampled: N, sheets: index }, null, 1));
console.log(`${N} samples → ${kept.length} distinct frames → ${index.length} sheets in ${sheets}`);
