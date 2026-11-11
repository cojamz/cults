#!/usr/bin/env node
// Film a whole game for frame-by-frame review (Cory, Nov 7: "get super picky UI bots reviewing every frame of each
// game - and they should be able to intuit things like speed and how long things have lingered").
//
//   node scripts/picky/film.mjs [--url <base>] [--out <dir>] [--speed relaxed|steady|quick] [--table a,b,c,d]
//                               [--look pictures|emoji] [--think 1500] [--max-min 45] [--seed-label <name>]
//
// One seat ("You") against three bots at 1270x700, the whole game recorded as video. "You" plays like a person: it
// waits --think ms on a settled table before each click, never hovers. Alongside the video, a timeline (timeline.jsonl)
// samples the page every 100 ms and writes a line whenever what it shows changes: the phase, whose turn, the prompt
// line, open sheets and cards, and every click "You" made, each with its time in the video. Then
// scripts/picky/film-sheets.mjs cuts the video into still frames, folds runs of identical frames into one frame with
// how long it held, and lays them out as numbered contact sheets with times, for reviewers.
//
// With no --url it plays what's live (main's play/ folder served here), like picky.mjs.
import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdirSync, writeFileSync, appendFileSync, readFileSync, existsSync, statSync, rmSync, readdirSync, renameSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import { answerChoice } from '../../e2e/v4/lib/answer.mjs';
import { browserPath } from '../../e2e/v4/lib/browser.mjs';

const args = process.argv.slice(2);
const flag = (name, dflt) => { const i = args.indexOf(`--${name}`); if (i < 0) return dflt; const v = args[i + 1]; return v == null || v.startsWith('--') ? true : v; };
const SPEED = String(flag('speed', 'relaxed'));
const TABLE = String(flag('table', 'red,echo,thieves,purple'));
const LOOK = String(flag('look', 'pictures'));
const THINK = Number(flag('think', 1500));
const MAX_MIN = Number(flag('max-min', 45));
const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
const OUT = resolve(String(flag('out', `/mnt/project-files/film/${stamp}-${SPEED}`)));
mkdirSync(OUT, { recursive: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));

let base = flag('url', null), server = null, build = null;
if (!base) {
  const dir = join(OUT, '.live');
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(join(dir, 'patrons'), { recursive: true });
  for (let k = 0; k < 4; k++) { try { execSync('git fetch -q origin main', { stdio: 'inherit' }); break; } catch { execSync('sleep 3'); } }
  execSync(`git archive origin/main play | tar -x -C ${join(dir, 'patrons')}`);
  build = JSON.parse(readFileSync(join(dir, 'patrons/play/build.json'), 'utf8'));
  const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.webp': 'image/webp', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.wav': 'audio/wav' };
  server = createServer((req, res) => {
    let p = join(dir, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
    if (!p.startsWith(dir) || !existsSync(p)) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'content-type': TYPES[extname(p)] || 'application/octet-stream' });
    res.end(readFileSync(p));
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  base = `http://127.0.0.1:${server.address().port}/patrons/play/`;
}
base = String(base).replace(/\/?$/, '/');
console.log(`filming ${build ? `${build.version} (${build.commit.slice(0, 8)})` : base} at ${SPEED}, table ${TABLE} → ${OUT}`);

// what the page shows, sampled in the page every 100 ms; a line is written only when it changes
const SAMPLER = () => {
  const vis = e => { if (!e) return false; const r = e.getBoundingClientRect(); const s = getComputedStyle(e); return r.width > 2 && r.height > 2 && s.visibility !== 'hidden' && Number(s.opacity) > 0.05; };
  const txt = (sel, n = 160) => { const e = [...document.querySelectorAll(sel)].find(vis); return e ? (e.innerText || e.textContent || '').replace(/\s+/g, ' ').trim().slice(0, n) : ''; };
  const t0 = performance.timeOrigin;
  let last = {};
  window.__film = [];
  setInterval(() => {
    const g = document.querySelector('.app.game');
    const cur = {
      phase: g?.dataset.phase || (document.querySelector('.results') ? 'results' : ''),
      yours: g?.dataset.yours || '', moves: g?.dataset.moves || '', anim: g?.dataset.animating || '',
      round: txt('.hub-label', 30),
      prompt: txt('[data-prompt]'),
      sheet: [...document.querySelectorAll('.dialog, [role=dialog], .prompt.choice')].filter(vis).map(d => d.className.split(' ').slice(0, 2).join('.')).join(','),
      hover: txt('[data-hover-layer][data-open="1"]', 60),
      roundCard: document.querySelector('[data-next-round]') ? 'round card up' : '',
    };
    const diff = {};
    for (const k of Object.keys(cur)) if (cur[k] !== last[k]) diff[k] = cur[k];
    if (Object.keys(diff).length) { window.__film.push({ at: Math.round(t0 + performance.now()), ...diff }); last = cur; }
  }, 100);
};

const browser = await chromium.launch({ executablePath: browserPath });
const vdir = join(OUT, '.video');
rmSync(vdir, { recursive: true, force: true });
const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 }, recordVideo: { dir: vdir, size: { width: 1270, height: 700 } } });
await ctx.addInitScript(l => { try { localStorage.setItem('patrons.v4.memberLook', l); } catch { /* */ } }, LOOK);
await ctx.addInitScript(SAMPLER);
const page = await ctx.newPage();
const T0 = Date.now(); // the video's first frame, near enough (the page opens with the recording)
const TL = join(OUT, 'timeline.jsonl');
writeFileSync(TL, '');
const log = o => appendFileSync(TL, JSON.stringify({ t: Math.round((Date.now() - T0)) / 1000, ...o }) + '\n');
const errors = [];
page.on('pageerror', e => { errors.push(String(e?.message || e)); log({ error: String(e?.message || e).slice(0, 200) }); });
async function drain() {
  const rows = await page.evaluate(() => { const r = window.__film || []; window.__film = []; return r; }).catch(() => []);
  for (const r of rows) { const { at, ...rest } = r; appendFileSync(TL, JSON.stringify({ t: Math.round(at - T0) / 1000, ...rest }) + '\n'); }
}
const did = async (what) => { await drain(); log({ you: what }); };

await page.goto(`${base}?intro=0&sound=off&speed=${SPEED}&members=${LOOK}&table=${TABLE}`);
await sleep(THINK);
await did('home: Play here'); await page.click('[data-home="local"]');
await page.waitForSelector('[data-start]');
await sleep(THINK);
await did('setup: Start'); await page.click('[data-start]');
await page.waitForSelector('.app.game', { timeout: 20000 });
const t0 = Date.now();
let dead = 0, still = { moves: -1, t: Date.now() };
while (Date.now() - t0 < MAX_MIN * 60000) {
  await drain();
  if (await page.$('.results')) break;
  const hand = await page.$('[data-handoff]'); if (hand) { await sleep(THINK); await did('hand-off'); await hand.click().catch(() => {}); continue; }
  const next = await page.$('[data-next-round]');
  if (next) { await sleep(THINK * 2); await did('round card: next round'); await next.click().catch(() => {}); await sleep(300); continue; }
  const s = await page.evaluate(() => { const e = document.querySelector('.app.game'); return e ? { yours: e.dataset.yours === '1', phase: e.dataset.phase, anim: e.dataset.animating === 'true', moves: Number(e.dataset.moves) } : null; }).catch(() => null);
  if (s && s.moves !== still.moves) still = { moves: s.moves, t: Date.now() };
  if (Date.now() - still.t > 60000) { log({ note: 'nothing moved for 60 s; answering whatever is up' }); await answerChoice(page, { last: ['pass'], skip: dead++ }).catch(() => null); still.t = Date.now(); if (dead > 8) break; continue; }
  if (!s || !s.yours || s.anim) { await sleep(100); continue; }
  // a settled table on "You": think like a person, then act
  await sleep(THINK);
  const s2 = await page.evaluate(() => { const e = document.querySelector('.app.game'); return e ? { yours: e.dataset.yours === '1', phase: e.dataset.phase, anim: e.dataset.animating === 'true', moves: Number(e.dataset.moves) } : null; }).catch(() => null);
  if (!s2 || !s2.yours || s2.anim || s2.moves !== s.moves) continue;
  if (s.phase === 'place') {
    const legal = await page.$$('.lt-wheel [data-slot][data-option]');
    if (legal.length) {
      const el = legal[(s.moves * 7) % legal.length];
      await did(`place: ${await el.getAttribute('data-option').catch(() => '?')}`);
      await el.click({ timeout: 1500 }).catch(() => {});
      const confirm = await page.waitForSelector('[data-place]', { timeout: 600 }).catch(() => null);
      if (confirm) { await sleep(500); await confirm.click({ timeout: 1500 }).catch(() => {}); }
    }
  } else if (s.phase === 'buy') {
    const cards = await page.$$('.lt-shop .card[data-option]');
    const rates = await page.$$('.lt-rates [data-rate][data-option]');
    const pick = cards[s.moves % Math.max(1, cards.length)] || rates[rates.length - 1] || await page.$('[data-option="pass"]');
    if (pick) { await did(`recruit: ${await pick.getAttribute('data-option').catch(() => '?')}`); await pick.click({ timeout: 1500 }).catch(() => {}); }
  } else {
    await drain();
    const a = await answerChoice(page, { last: ['pass'], skip: dead }).catch(() => null);
    log({ you: `answer ${s.phase}: ${a ? a.id : 'nothing to click'}` });
  }
  await sleep(300);
  const after = await page.evaluate(() => Number(document.querySelector('.app.game')?.dataset.moves)).catch(() => s.moves);
  dead = after === s.moves ? dead + 1 : 0;
  if (dead >= 30) { log({ note: 'stuck: 30 clicks changed nothing' }); break; }
}
if (await page.$('.results')) { await sleep(6000); await drain(); log({ note: 'results screen' }); }
const secs = Math.round((Date.now() - T0) / 1000);
await page.close();
await ctx.close();
await browser.close();
if (server) server.close();
const vid = readdirSync(vdir).find(f => f.endsWith('.webm'));
if (vid) renameSync(join(vdir, vid), join(OUT, 'game.webm'));
writeFileSync(join(OUT, 'meta.json'), JSON.stringify({ build, base, speed: SPEED, table: TABLE, look: LOOK, think: THINK, secs, errors: [...new Set(errors)] }, null, 1));
console.log(`done: ${secs} s of game → ${join(OUT, 'game.webm')}, timeline ${TL}`);
