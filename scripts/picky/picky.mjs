#!/usr/bin/env node
// The picky UI bot (Cory, Nov 4: "we need a picky UI bot playing some games and sniffing out these issues"). It plays
// real games of the live build in a browser as one seat against 3 bots, and on each of its turns rests the pointer on
// every wheel space, rim plaque, shop card and seat member, reads the card that opens, and checks what's shown:
//   - member cards: the one-line rule against the full rule (the same effect said twice, a number the rule doesn't
//     have, a resource dot where the rule means members or the other way round), the price on the card against its
//     cost dots;
//   - every card: a sentence said twice, a word doubled, "undefined"/"NaN"/"[object", a card running off the screen;
//   - the whole screen, with the card open and without: text cut off or spilling out of its box (e2e/v4/lib/textclip.mjs);
//   - seats: followers and resources shown against the saved game's state.
// It also sweeps the members page (every member's card, both looks) before playing. Each finding gets a screenshot
// of the card or the screen; the list is deduplicated by what was wrong on which card.
//
//   node scripts/picky/picky.mjs [--games 2] [--url <base>] [--out <dir>] [--looks pictures,emoji] [--no-sweep]
//                                [--tables red,echo,thieves,purple;market,trading,silver,yellow] [--max-min 25]
//
// With no --url it plays what's live: main's play/ folder (the published build) served from a local copy, since this
// box can't reach github.io. Writes <out>/findings.json, <out>/findings.md and <out>/shots/. scripts/picky/README.md
// has how to read it and the running list (design/eval/picky/findings.md).
import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdirSync, writeFileSync, appendFileSync, readFileSync, existsSync, statSync, rmSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import { TEXT_CLIP } from '../../e2e/v4/lib/textclip.mjs';
import { answerChoice } from '../../e2e/v4/lib/answer.mjs';
import { browserPath } from '../../e2e/v4/lib/browser.mjs';
import { READ_CARD, READ_SEATS, READ_SHOP_FACES } from './probes.mjs';
import { judgeCard, judgeSeats, judgeShopFace, judgeClip, judgeFace } from './checks.mjs';

const args = process.argv.slice(2);
const flag = (name, dflt) => { const i = args.indexOf(`--${name}`); if (i < 0) return dflt; const v = args[i + 1]; return v == null || v.startsWith('--') ? true : v; };
const GAMES = Number(flag('games', 2));
const MAX_MIN = Number(flag('max-min', 25));
const LOOKS = String(flag('looks', 'pictures,emoji')).split(',');
const TABLES = String(flag('tables', 'red,echo,thieves,purple;market,trading,silver,yellow')).split(';');
const SWEEP = !flag('no-sweep', false);
const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
const OUT = resolve(String(flag('out', `/mnt/project-files/picky/${stamp}`)));
const SHOTS = join(OUT, 'shots');
mkdirSync(SHOTS, { recursive: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));

// --- what to play: a URL, or main's published build served here ---------------------------------------------------
let base = flag('url', null), server = null, build = null;
if (!base) {
  const dir = join(OUT, '.live');
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(join(dir, 'patrons'), { recursive: true });
  execSync('git fetch -q origin main', { stdio: 'inherit' });
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
  console.log(`live build ${build.version} (${build.commit.slice(0, 8)}) served at ${base}`);
}
base = String(base).replace(/\/?$/, '/');

// --- findings: one per (kind, what, where), with every place it was seen -------------------------------------------
const findings = new Map();
const stats = { hovers: 0, missed: 0, cards: 0, missedKinds: {} };
let shotN = 0;
async function note(page, f, clipEl = null) {
  const key = `${f.check}|${f.subject}|${f.detail}`;
  const had = findings.get(key);
  if (had) { had.seen += 1; if (!had.where.includes(f.where)) had.where.push(f.where); if (f.card && !had.cards.includes(f.card)) had.cards.push(f.card); return; }
  const file = `${String(++shotN).padStart(3, '0')}-${f.check}.png`;
  try {
    if (clipEl) {
      await clipEl.screenshot({ path: join(SHOTS, file), timeout: 3000 });
    } else await page.screenshot({ path: join(SHOTS, file) });
  } catch { /* the card closed: the finding stands without its picture */ }
  findings.set(key, { ...f, where: [f.where], cards: f.card ? [f.card] : [], seen: 1, shot: `shots/${file}` });
  console.log(`  ✗ ${f.check}: ${f.subject}: ${f.detail}`);
}
function save() {
  const list = [...findings.values()].sort((a, b) => (a.severity || 9) - (b.severity || 9) || a.check.localeCompare(b.check));
  writeFileSync(join(OUT, 'findings.json'), JSON.stringify({ build, base, at: new Date().toISOString(), findings: list }, null, 1));
  const SEV = ['', 'wrong', 'confusing', 'looks off'];
  const lines = [`# Picky UI bot: ${build ? `${build.version} (${build.commit.slice(0, 8)})` : base}`, '', `${list.length} findings, ${new Date().toISOString()}.`, ''];
  for (const f of list) lines.push(`- **${SEV[f.severity] || '?'}** · ${f.check} · **${f.subject}**: ${f.detail} (seen ${f.seen}×${f.cards && f.cards.length ? ` on ${f.cards.length} cards: ${f.cards.slice(0, 12).join(', ')}${f.cards.length > 12 ? '…' : ''}` : ''} · ${f.where.slice(0, 3).join('; ')}) [shot](${f.shot})`);
  writeFileSync(join(OUT, 'findings.md'), lines.join('\n') + '\n');
}

const browser = await chromium.launch({ executablePath: browserPath });
const pageErrors = [];
async function newPage(look) {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
  await ctx.addInitScript(l => { try { localStorage.setItem('patrons.v4.memberLook', l); } catch { /* */ } }, look);
  const page = await ctx.newPage();
  page.on('pageerror', e => pageErrors.push(String(e && e.message || e)));
  return page;
}

// the open hover card, read and judged
async function inspectHover(page, where) {
  const layer = await page.$('[data-hover-layer][data-open="1"]');
  stats.hovers++;
  if (!layer) { stats.missed++; return null; }
  const card = await page.evaluate(READ_CARD).catch(e => { console.log('  read failed: ' + String(e).slice(0, 200)); return null; });
  if (!card) return null;
  stats.cards++;
  appendFileSync(join(OUT, 'cards.jsonl'), JSON.stringify({ where, ...card }) + '\n');
  for (const f of judgeCard(card)) await note(page, { ...f, where }, layer);
  for (const f of judgeClip(await page.evaluate(TEXT_CLIP).catch(() => []))) await note(page, { ...f, where }, null);
  return card;
}

async function restOn(page, el) {
  const b = await el.boundingBox().catch(() => null);
  if (!b || b.width < 2) return false;
  await page.mouse.move(6, 694);
  await sleep(60);
  await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2, { steps: 3 });
  await page.waitForSelector('[data-hover-layer][data-open="1"]', { timeout: 1200 }).catch(() => null);
  await sleep(200);
  return true;
}

// --- 1. the members page: every member's card, both looks ----------------------------------------------------------
async function sweep(look) {
  const page = await newPage(look);
  await page.goto(`${base}?lab=members&members=${look}&intro=0&sound=off`);
  await page.waitForSelector('.card-face.mc, .lt-card', { timeout: 15000 }).catch(() => null);
  // Details: every member as its full card; the color buttons along the top, one color at a time
  await page.locator('button', { hasText: 'Details' }).first().click().catch(() => {});
  await sleep(400);
  const tabs = [];
  for (const b of await page.$$('.mp-nav button')) if (!/^(Cards|Details)$/.test((await b.textContent()).trim())) tabs.push(b);
  console.log(`sweep (${look}): ${tabs.length} colors`);
  const seen = new Set();
  for (let t = 0; t < tabs.length; t++) {
    await tabs[t].click().catch(() => {}); await sleep(400);
    // the full cards (Details) read without hovering
    const faces = await page.$$('.card-face.mc');
    for (const el of faces) {
      const id = await el.getAttribute('data-card');
      if (!id || seen.has(id)) continue;
      seen.add(id);
      const card = await el.evaluate(READ_CARD).catch(() => null);
      if (card) for (const f of judgeCard({ ...card, scrolls: true })) await note(page, { ...f, where: `members page (${look})` }, el);
    }
    for (const f of judgeClip(await page.evaluate(TEXT_CLIP).catch(() => []))) await note(page, { ...f, where: `members page (${look})` });
  }
  console.log(`sweep (${look}): ${seen.size} member cards read`);
  await page.context().close();
}

// --- 2. a game: one seat, three bots ------------------------------------------------------------------------------
async function play(g) {
  const look = LOOKS[g % LOOKS.length];
  const table = TABLES[g % TABLES.length];
  const page = await newPage(look);
  const tag = `game ${g + 1} (${table}, ${look})`;
  console.log(`${tag}: starting`);
  await page.goto(`${base}?intro=0&sound=off&speed=quick&members=${look}&table=${table}`);
  await page.click('[data-home="local"]');
  await page.waitForSelector('[data-start]');
  await page.click('[data-start]');
  await page.waitForSelector('.app.game', { timeout: 20000 });
  const t0 = Date.now();
  let dead = 0, lastMoves = -1, turns = 0, stalls = 0, sheets = 0, sheetAt = -1, stillAt = { moves: -1, t: Date.now() };
  const looked = new Set(); // (round, what) already rested on
  while (Date.now() - t0 < MAX_MIN * 60000) {
    if (await page.$('.results')) break;
    const hand = await page.$('[data-handoff]'); if (hand) { await hand.click().catch(() => {}); continue; }
    const next = await page.$('[data-next-round]');
    if (next) {
      // the round card: its own text checked once per round
      for (const f of judgeClip(await page.evaluate(TEXT_CLIP).catch(() => []))) await note(page, { ...f, where: `${tag}, round card` });
      await next.click().catch(() => {}); await sleep(600); continue;
    }
    const s = await page.evaluate(() => { const e = document.querySelector('.app.game'); return e ? { yours: e.dataset.yours === '1', phase: e.dataset.phase, anim: e.dataset.animating === 'true', moves: Number(e.dataset.moves), round: (document.querySelector('.hub-label b')?.textContent || '').trim() } : null; }).catch(() => null);
    // a table that hasn't moved in 45 s: say what's on screen, then try answering whatever is up
    if (s && s.moves !== stillAt.moves) stillAt = { moves: s.moves, t: Date.now() };
    if (Date.now() - stillAt.t > 45000) {
      const why = await page.evaluate(() => ({ prompt: (document.querySelector('[data-prompt]')?.textContent || '').slice(0, 100), dialogs: [...document.querySelectorAll('.dialog, [role=dialog]')].map(d => d.className.split(' ')[0]), options: [...document.querySelectorAll('[data-option]')].map(e => e.getAttribute('data-option')).slice(0, 10) })).catch(() => ({}));
      await note(page, { check: 'stuck', severity: 1, subject: `table at ${s ? s.phase : '?'}`, detail: `nothing moved for 45 s (${JSON.stringify({ yours: s && s.yours, anim: s && s.anim, ...why })})`, where: tag });
      await page.mouse.move(6, 694);
      await answerChoice(page, { last: ['pass'], skip: stalls++ }).catch(() => null);
      stillAt.t = Date.now();
      if (stalls > 6) break;
      continue;
    }
    if (!s || !s.yours || s.anim) { await sleep(100); continue; }
    const where = `${tag}, round ${s.round || '?'}`;
    if (s.phase === 'place') {
      if (s.moves !== lastMoves) {
        turns++;
        // the table at rest: seats against the saved state, the shop's faces, the whole screen for cut-off text
        await page.mouse.move(6, 694); await sleep(500);
        const seats = await page.evaluate(READ_SEATS).catch(() => null);
        if (seats) for (const f of judgeSeats(seats)) await note(page, { ...f, where });
        const faces = await page.evaluate(READ_SHOP_FACES).catch(() => []);
        for (const f of faces.flatMap(judgeShopFace)) await note(page, { ...f, where });
        for (const f of judgeClip(await page.evaluate(TEXT_CLIP).catch(() => []))) await note(page, { ...f, where });
        if (turns <= 3 || turns % 4 === 0) await page.screenshot({ path: join(SHOTS, `table-g${g + 1}-t${String(turns).padStart(2, '0')}.png`) });
        // every space, plaque, shop card and seat member, once per round each
        const targets = [
          ...(await page.$$('.lt-wheel [data-slot]')).map(el => ['space', el]),
          ...(await page.$$('[data-plaque]')).map(el => ['plaque', el]),
          ...(await page.$$('.lt-shop .card[data-uid]')).map(el => ['shop', el]),
          ...(await page.$$('section.lt-cult-seat .cs-head')).map(el => ['seat', el]),
        ];
        for (const [kind, el] of targets) {
          const id = await el.evaluate(e => e.getAttribute('data-slot') || e.getAttribute('data-plaque') || e.getAttribute('data-uid') || e.closest('[data-seat]')?.getAttribute('data-seat') || '').catch(() => '');
          const k = `${s.round}|${kind}|${id}`;
          if (looked.has(k)) continue;
          looked.add(k);
          if (!(await restOn(page, el))) continue;
          const got = await inspectHover(page, `${where}, ${kind} ${id}`);
          if (!got) { stats.missedKinds[kind] = (stats.missedKinds[kind] || 0) + 1; continue; }
          // a wheel space: every number its panel prints is on its hover card too
          if (kind === 'space') {
            const face = await el.evaluate(e => { const r = e.querySelector('[data-face], .face') || e, w = document.createTreeWalker(r, NodeFilter.SHOW_TEXT), t = []; while (w.nextNode()) t.push(w.currentNode.textContent); return t.join(' ').replace(/\s+/g, ' ').trim(); }).catch(() => '');
            for (const f of judgeFace(face, got)) await note(page, { ...f, where: `${where}, space ${id}` }, el);
          }
        }
        await page.mouse.move(6, 694); await sleep(450);
        lastMoves = s.moves;
      }
      const legal = await page.$$('.lt-wheel [data-slot][data-option]');
      if (legal.length) await legal[(s.moves * 7 + g) % legal.length].click({ timeout: 1500 }).catch(() => {});
      const confirm = await page.waitForSelector('[data-place]', { timeout: 500 }).catch(() => null);
      if (confirm) await confirm.click({ timeout: 1500 }).catch(() => {});
    } else if (s.phase === 'buy') {
      const cards = await page.$$('.lt-shop .card[data-option]');
      const rates = await page.$$('.lt-rates [data-rate][data-option]');
      const pick = cards[s.moves % Math.max(1, cards.length)] || rates[rates.length - 1] || await page.$('[data-option="pass"]');
      if (pick) await pick.click({ timeout: 1500 }).catch(() => {});
    } else {
      // a choice: read the prompt and any open sheet first, then answer like the e2e drivers do; the first few sheets
      // of a game are kept as pictures for a look by eye
      if (s.moves !== sheetAt && sheets < 6 && await page.$('.prompt.choice, .dialog.pay')) { sheetAt = s.moves; sheets++; await sleep(400); await page.screenshot({ path: join(SHOTS, `choice-g${g + 1}-${String(sheets).padStart(2, '0')}.png`) }); }
      for (const f of judgeClip(await page.evaluate(TEXT_CLIP).catch(() => []))) await note(page, { ...f, where: `${where}, choosing (${s.phase})` });
      const a = await answerChoice(page, { last: ['pass'], skip: dead }).catch(() => null);
      if (!a) await sleep(250);
    }
    await sleep(250);
    const after = await page.evaluate(() => Number(document.querySelector('.app.game')?.dataset.moves)).catch(() => s.moves);
    dead = after === s.moves ? dead + 1 : 0;
    if (dead === 12) { await note(page, { check: 'stuck', severity: 1, subject: `phase ${s.phase}`, detail: 'the bot\'s clicks changed nothing 12 times in a row', where }); }
    if (dead >= 30) break;
    save();
  }
  const over = !!(await page.$('.results'));
  if (over) {
    await sleep(1500);
    for (const f of judgeClip(await page.evaluate(TEXT_CLIP).catch(() => []))) await note(page, { ...f, where: `${tag}, results` });
    await page.screenshot({ path: join(SHOTS, `results-g${g + 1}.png`) });
    // the score bars: a part with no words or number is an empty box until you point at it
    const blank = await page.$$eval('.src-seg', els => els.filter(e => e.getBoundingClientRect().width >= 8 && !e.textContent.trim()).map(e => ({ label: e.getAttribute('aria-label') || e.getAttribute('data-hint') || '', w: Math.round(e.getBoundingClientRect().width) }))).catch(() => []);
    for (const b of blank) await note(page, { check: 'unlabeled', severity: 3, subject: 'final score bars', detail: `a part ${b.w}px wide shows no label or number (${b.label || 'pointing at it says what it is'})`, where: `${tag}, results` }, await page.$('.src-seg:empty'));
  }
  console.log(`${tag}: ${over ? 'finished' : 'stopped'} after ${turns} turns, ${stats.hovers} hovers (${stats.missed} opened nothing), ${stats.cards} cards read, missed by kind ${JSON.stringify(stats.missedKinds)}, ${Math.round((Date.now() - t0) / 1000)} s`);
  await page.context().close();
}

try {
  if (SWEEP) for (const look of LOOKS) await sweep(look);
  save();
  for (let g = 0; g < GAMES; g++) { await play(g); save(); }
} finally {
  for (const e of [...new Set(pageErrors)]) findings.set(`pageerror|${e}`, { check: 'page error', severity: 1, subject: 'page', detail: e.slice(0, 300), where: ['console'], seen: 1, shot: '' });
  save();
  await browser.close();
  if (server) server.close();
  console.log(`${findings.size} findings → ${join(OUT, 'findings.md')}`);
}
