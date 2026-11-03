// v4-playtest: one full local game through the screen, hunting bugs (playtest thread, Nov 1).
//   node scripts/v4-playtest.mjs <name> <colors, comma> <seats, e.g. PPBB> [Easy|Normal|Hard|Very Hard] [seed]
//   env: PT_URL (default the live play link; a box that can't reach github.io serves main's play/ locally:
//        git archive origin/main play | tar -x -C <dir>, then python3 -m http.server, and point PT_URL at it),
//        PT_DECK=10|15, PT_SPEED=Quick|Steady|Relaxed, PT_EXTRAS=1 (undo, a reload each round, log, shop views),
//        PT_CONTESTS='As printed'|'By color',
//        PT_SMART=0..1 (share of the person's moves a Normal bot picks, the rest random legal), PT_OUT (.v4-playtest).
// Person seats (P) answer on the board like a person; bots (B) play themselves. Writes shots, moves.txt, stories.txt,
// results.txt and bugs.txt (console errors, stuck turns, odd text like "undefined", seat scores against the save,
// answers covered by the stage or a card, a cut "Since your last turn", undo and reload checks) under PT_OUT/<name>.
// Known false alarms: a score mismatch or "stuck" during the round's scoring (the count-up and the round card).
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync, appendFileSync } from 'node:fs';
import { answerChoice } from '../e2e/v4/lib/answer.mjs';
import { followers, chooseBotMove } from '../src/engine/v4/index.js';
const SMART = Number(process.env.PT_SMART ?? 0.75);

const [name, colors, seatSpec, level = 'Normal', seedArg = '1'] = process.argv.slice(2);
const URL0 = process.env.PT_URL || 'https://cojamz.github.io/patrons/play/';
const OUT = `${process.env.PT_OUT || '.v4-playtest'}/${name}`;
mkdirSync(OUT, { recursive: true });
let seed = Number(seedArg) >>> 0 || 1;
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 2 ** 32; };
const bugs = [];
const note = (m, extra) => { if (bugs.some(b => b.m === m)) return false; bugs.push({ m, extra }); console.log('BUG?', m); appendFileSync(`${OUT}/bugs.txt`, m + (extra ? `\n   ${extra}` : '') + '\n'); return true; };
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1270, height: 700 } });
page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') note(`console ${m.type()}: ${m.text().slice(0, 300)}`); });
page.on('pageerror', e => note(`pageerror: ${e.message}`, e.stack?.slice(0, 400)));
let shotN = 0;
const shot = async label => { const f = `${OUT}/${String(++shotN).padStart(3, '0')}-${label.replace(/[^a-z0-9]+/gi, '_').slice(0, 50)}.png`; await page.screenshot({ path: f }).catch(() => {}); return f; };

await page.goto(URL0 + '?botDelay=60');
await page.waitForSelector('[data-home="local"]');
await page.click('[data-home="local"]');
await page.waitForSelector('[data-start]');
// seats
for (let i = 0; i < 6; i++) {
  const want = { P: 'Person', B: 'Bot' }[seatSpec[i]] || 'Empty';
  await page.locator(`[data-seat-row="${i}"]`).locator('button', { hasText: new RegExp('^' + want + '$') }).click();
}
await page.locator('[aria-label="Bot level"] button', { hasText: new RegExp('^' + level + '$') }).click();
await page.locator('button', { hasText: new RegExp('^' + (process.env.PT_SPEED || 'Quick') + '$') }).click();
if (process.env.PT_DECK) await page.locator('button[role="radio"]', { hasText: new RegExp('^' + process.env.PT_DECK + ' per color$') }).click();
if (process.env.PT_CONTESTS) await page.locator('[data-contest-pick] button', { hasText: new RegExp('^' + process.env.PT_CONTESTS + '$') }).click();
await page.locator('button', { hasText: /^Custom$/ }).click();
await page.waitForTimeout(200);
// clear what's on, then pick ours
for (const el of await page.$$('[data-sphere][aria-pressed="true"]')) await el.click();
for (const c of colors.split(',')) await page.click(`[data-sphere="${c}"]`);
await page.waitForTimeout(200);
await shot('setup');
const why = await page.$eval('[data-start-why]', e => e.textContent).catch(() => '');
if (why) console.log('start why:', why);
await page.click('[data-start]');
const intro = await page.waitForSelector('[data-intro]', { timeout: 4000 }).catch(() => null);
if (intro) await page.click('[data-intro-skip]');
await page.waitForSelector('.lt-seat[data-pid]');

const stories = [];
let lastMoves = null, lastChange = Date.now(), steps = 0, lastRound = '';
const t0 = Date.now();
const seenRounds = new Set();
const extrasDone = new Set();
while (!(await page.$('.results'))) {
  if (Date.now() - t0 > 20 * 60000) { note('game did not finish in 20 minutes'); await shot('timeout'); break; }
  const moves = await page.$eval('.app.game', e => e.dataset.moves).catch(() => null);
  if (moves !== lastMoves) { lastMoves = moves; lastChange = Date.now(); }
  if (Date.now() - lastChange > 25000) { const f = await shot('stuck'); note(`stuck: no move for 25s at move ${moves}`, f); lastChange = Date.now(); }
  if (await page.$('[data-intro]')) await page.click('[data-intro-skip]').catch(() => {});
  const hand = await page.$('[data-handoff]');
  if (hand) { await hand.click().catch(() => {}); continue; }
  const next = await page.$('[data-next-round]');
  if (next) {
    const h = await page.$eval('.roundend h2', e => e.textContent).catch(() => 'roundend');
    if (!seenRounds.has(h)) { seenRounds.add(h); await page.waitForTimeout(900); await shot(`roundend ${h}`); }
    await next.click().catch(() => {});
    continue;
  }
  const story = await page.evaluate(() => document.querySelector('[data-turn-story]')?.getAttribute('data-turn-story')).catch(() => null);
  if (story && stories[stories.length - 1] !== story) stories.push(story);
  const anyOpt = await page.$('[data-option]:not([disabled]), .dialog.pay');
  if (!anyOpt) { await page.waitForTimeout(80); continue; }
  // settle, then look
  await page.waitForFunction(() => document.querySelector('.app.game')?.dataset.animating !== 'true', null, { timeout: 4000 }).catch(() => {});
  await page.waitForTimeout(120);
  const look = await page.evaluate(() => {
    const txt = document.body.innerText;
    const bad = (txt.match(/[^\n]{0,40}(undefined|NaN|\[object|\bnull\b|Infinity)[^\n]{0,40}/g) || []);
    const round = document.querySelector('.app.game')?.dataset.round;
    const phase = document.querySelector('.app.game')?.dataset.phase;
    const seats = [...document.querySelectorAll('.lt-seat[data-pid]')].map(s => ({ pid: +s.dataset.pid, f: +s.querySelector('[data-followers]')?.dataset.followers }));
    const opts = [...document.querySelectorAll('[data-option]:not([disabled])')].map(e => e.getAttribute('data-option'));
    const prompt = document.querySelector('.lt-prompt')?.innerText?.replace(/\s+/g, ' ').slice(0, 200);
    return { bad, round, phase, seats, opts, prompt };
  });
  // anything from the stage or a pop card sitting on top of an answer the person has to click
  const covered = async () => page.evaluate(() => {
    const vis = e => { const st = getComputedStyle(e); const r = e.getBoundingClientRect(); return st.visibility !== 'hidden' && st.display !== 'none' && +st.opacity > 0.3 && r.width > 0 ? r : null; };
    const opts = [...document.querySelectorAll('[data-option]:not([disabled])')].map(e => [e, vis(e)]).filter(x => x[1]);
    const covers = [...document.querySelectorAll('.action-stage > *, .pop-card, [role="tooltip"]')].map(e => [e, vis(e)]).filter(x => x[1]);
    const out = [];
    for (const [o, b] of opts) for (const [c, r] of covers) {
      if (c.contains(o) || o.contains(c)) continue;
      const w = Math.min(b.right, r.right) - Math.max(b.left, r.left), h = Math.min(b.bottom, r.bottom) - Math.max(b.top, r.top);
      if (w > 8 && h > 8) out.push(`${o.getAttribute('data-option')} under ${String(c.className).slice(0, 40)} "${c.innerText.replace(/\s+/g, ' ').slice(0, 40)}"`);
    }
    return out;
  });
  await page.mouse.move(640, 4);
  await page.waitForTimeout(150);
  let cov = await covered();
  if (cov.some(c => /^\S+ under as-/.test(c))) {
    const t1 = Date.now(); const f0 = await shot('stage-over');
    while (Date.now() - t1 < 8000 && (await covered()).some(c => / under as-/.test(c))) await page.waitForTimeout(100);
    appendFileSync(`${OUT}/stage-over.txt`, `${moves} r${look.round} ${look.prompt?.slice(0, 80)} covered ${Date.now() - t1}ms+ ${cov[0]} ${f0}\n`);
    cov = await covered();
  }
  if (cov.length) { await page.waitForTimeout(2500); cov = await covered(); }
  if (cov.length) note(`answers covered at r${look.round} ${look.phase}: ${cov.slice(0, 3).join('; ')}`, await shot('covered'));
  const since = await page.evaluate(() => {
    const sec = document.querySelector('.lt-since'); if (!sec) return [];
    const sb = sec.getBoundingClientRect(); const card = document.querySelector('.turn-card')?.getBoundingClientRect();
    const out = [];
    for (const e of sec.querySelectorAll('.since-title, .since-more, .since-log, .pool-cap')) {
      const r = e.getBoundingClientRect(); if (!r.width || getComputedStyle(e).visibility === 'hidden') continue;
      if (r.bottom > sb.bottom + 1) out.push(`${e.className} "${e.textContent.slice(0, 30)}" cut ${Math.round(r.bottom - sb.bottom)}px`);
      if (card && r.bottom > card.top + 1 && r.top < card.bottom) out.push(`${e.className} under the turn card`);
      if (/since-more/.test(e.className) && r.height > 24) out.push(`${e.className} "${e.textContent}" wraps (${Math.round(r.height)}px)`);
    }
    return out;
  });
  // anything inside the question's card running past its edges (playtest Nov 3: Body Snatchers' members ran off the right)
  const spill = await page.evaluate(() => {
    const card = document.querySelector('.prompt.choice'); if (!card) return null;
    const cr = card.getBoundingClientRect(); const out = [];
    for (const e of card.querySelectorAll('button, .gc-item, .gc-member')) {
      const r = e.getBoundingClientRect(); if (!r.width) continue;
      let clip = false; for (let a = e.parentElement; a && a !== card; a = a.parentElement) { const ov = getComputedStyle(a).overflowX; if (ov === 'auto' || ov === 'scroll') { clip = true; break; } }
      if (!clip && (r.right > cr.right + 1 || r.left < cr.left - 1)) out.push(`"${e.innerText.replace(/\s+/g, ' ').slice(0, 24)}" ${Math.round(r.right - cr.right)}px past the card (card ${Math.round(cr.width)}px, parent ${card.parentElement.className.slice(0, 30)})`);
    }
    return out.length ? out.slice(0, 3).join('; ') : null;
  });
  if (spill) note(`question card spills: ${spill}`, await shot('spill'));
  for (const x of since) note(`since strip: ${x}`, await shot('since'));
  for (const b of look.bad) note(`odd text on screen: "${b.trim()}"`, await shot('odd-text'));
  // screen vs saved state (after the save lands)
  const st = await page.evaluate(() => { try { return JSON.parse(localStorage.getItem('patrons.v4.local'))?.state; } catch { return null; } });
  if (st && st.moves == Number(moves)) {
    for (const s of look.seats) {
      const f = followers(st, st.players[s.pid]);
      if (Number.isFinite(s.f) && f !== s.f) {
        await page.waitForTimeout(1500);
        const again = await page.$eval(`.lt-seat[data-pid="${s.pid}"] [data-followers]`, e => +e.dataset.followers).catch(() => null);
        const st2 = await page.evaluate(() => JSON.parse(localStorage.getItem('patrons.v4.local'))?.state).catch(() => null);
        if (st2 && again !== followers(st2, st2.players[s.pid])) note(`seat ${s.pid} shows ${again} followers, game has ${followers(st2, st2.players[s.pid])}`, await shot('followers-mismatch'));
      }
      for (const r of Object.keys(st.players[s.pid].res)) if (st.players[s.pid].res[r] < 0) note(`seat ${s.pid} has negative ${r}`);
    }
  }
  // PT_GIVE=<def ids, comma>: hand the person (seat 0) these members early in round I, through the save and a reload,
  // so a person (not only the bots) meets them in play. Their On Recruit doesn't fire; Round Start and the rest do.
  if (process.env.PT_GIVE && !extrasDone.has('give') && look.round === '1' && look.phase === 'place') {
    extrasDone.add('give');
    const gave = await page.evaluate(ids => {
      const v = JSON.parse(localStorage.getItem('patrons.v4.local'));
      const s = v.state, me = s.players[0], out = [];
      for (const id of ids) {
        const uid = Object.keys(s.cards).map(Number).find(u => s.cards[u].def === id && !s.players.some(p => p.members.includes(u)));
        if (uid == null) { out.push(id + ' missing'); continue; }
        for (const arr of [s.pile, ...Object.values(s.waiting || {})]) { const i = arr.indexOf(uid); if (i >= 0) arr.splice(i, 1); }
        const k = s.shop.indexOf(uid); if (k >= 0) { if (s.pile.length) s.shop[k] = s.pile.shift(); else s.shop.splice(k, 1); }
        me.members.push(uid); out.push(id + ' ' + uid);
      }
      v.undo = null;
      localStorage.setItem('patrons.v4.local', JSON.stringify(v));
      return out;
    }, process.env.PT_GIVE.split(','));
    appendFileSync(`${OUT}/extras.txt`, `gave ${gave.join(', ')}\n`);
    console.log('gave', gave.join(', '));
    await page.reload();
    const res = await page.waitForSelector('[data-home="resume"]', { timeout: 8000 }).catch(() => null);
    if (res) await res.click();
    // (a local game resumes by itself after a reload; Resume shows only sometimes)
    await page.waitForSelector('.lt-seat[data-pid]', { timeout: 10000 }).catch(() => note('give: table did not come back', null));
    await shot('after-give');
    continue;
  }
  if (look.round !== lastRound) { lastRound = look.round; }
  steps++;
  if (steps % 4 === 1 || look.opts.some(o => !/^(slot|card|pass)/.test(o))) await shot(`r${look.round}-${look.phase}-${(look.opts[0] || 'pay').split(':')[0]}`);
  let r = null;
  // extras a person does: undo, reload, the log, the shop views
  const EX = Number(process.env.PT_EXTRAS || 0);
  if (EX) {
    const undoBtn = await page.$('button.undo');
    if (undoBtn && rnd() < 0.15 * EX) {
      const before = Number(moves);
      await undoBtn.click().catch(() => {}); undoBtn.dispose();
      await page.waitForTimeout(700);
      const after = Number(await page.$eval('.app.game', e => e.dataset.moves).catch(() => NaN));
      appendFileSync(`${OUT}/extras.txt`, `undo at ${before} -> ${after}\n`);
      if (!(after < before)) note(`undo at move ${before} left moves at ${after}`, await shot('undo'));
      await shot(`after-undo-${before}`);
      continue;
    }
    if (look.round && !extrasDone.has('reload' + look.round) && look.phase === 'place' && rnd() < 0.3) {
      extrasDone.add('reload' + look.round);
      const sig = await page.evaluate(() => [...document.querySelectorAll('.lt-seat[data-pid]')].map(e => e.dataset.pid + ':' + e.querySelector('[data-followers]')?.dataset.followers + ':' + e.querySelector('[data-members]')?.textContent).join('|'));
      await page.reload();
      const back = await page.waitForSelector('.lt-seat[data-pid]', { timeout: 10000 }).catch(() => null);
      if (!back) { note(`reload in round ${look.round} did not come back to the table`, await shot('reload')); const res = await page.$('[data-home="resume"], button:has-text("Resume")'); if (res) await res.click(); }
      await page.waitForTimeout(1500);
      const m2 = await page.$eval('.app.game', e => e.dataset.moves).catch(() => null);
      const sig2 = await page.evaluate(() => [...document.querySelectorAll('.lt-seat[data-pid]')].map(e => e.dataset.pid + ':' + e.querySelector('[data-followers]')?.dataset.followers + ':' + e.querySelector('[data-members]')?.textContent).join('|'));
      appendFileSync(`${OUT}/extras.txt`, `reload r${look.round} at ${moves} -> ${m2}\n  ${sig}\n  ${sig2}\n`);
      if (m2 !== moves) note(`reload at move ${moves} came back at move ${m2}`, await shot('reload-moves'));
      else if (sig !== sig2) note(`reload at move ${moves}: seats changed`, `${sig} vs ${sig2}`);
      await shot(`after-reload-r${look.round}`);
      continue;
    }
    if (look.round && !extrasDone.has('views' + look.round) && look.phase === 'buy') {
      extrasDone.add('views' + look.round);
      for (const sel of ['.lt-view-btn[aria-label="Show member abilities"]', '.lt-sort', '.lt-view-btn[aria-label="Fade members you can\'t afford"]']) {
        await page.click(sel).catch(e => note(`could not press ${sel}: ${e.message.slice(0, 80)}`));
        await page.waitForTimeout(300);
        await shot(`view-${sel.slice(0, 25)}-r${look.round}`);
        await page.click(sel).catch(() => {});
        await page.waitForTimeout(200);
      }
      await page.click('[data-open-log]').catch(e => note(`could not open the log: ${e.message.slice(0, 80)}`));
      await page.waitForTimeout(500);
      await shot(`log-r${look.round}`);
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);
      continue;
    }
  }
  if (/Peek: set the order/.test(look.prompt || '') && rnd() < 0.85) { const k = await page.$('[data-option="keep"]'); if (k) { await k.click().catch(() => {}); r = { id: 'keep' }; k.dispose(); } }
  if (!r && st && st.moves == Number(moves) && st.pending && rnd() < SMART && !(await page.$('.dialog.pay'))) {
    let mv = null; try { mv = chooseBotMove(st, rnd, { level: 'normal' }); } catch (e) { appendFileSync(`${OUT}/misses.txt`, `bot threw ${e.message}\n`); }
    const id = mv && (mv.option ?? mv);
    if (typeof id === 'string') {
      const el = await page.$(`[data-option="${id.replace(/"/g, '\\"')}"]:not([disabled])`);
      if (el) { try { await el.click({ timeout: 1500 }); r = { id, kind: 'smart' }; } catch { appendFileSync(`${OUT}/misses.txt`, `${moves} ${id} on screen but click refused\n`); } }
      else appendFileSync(`${OUT}/misses.txt`, `${moves} ${id} not on screen; screen has ${look.opts.slice(0, 12).join(' ')}\n`);
      if (el) el.dispose().catch(() => {});
    }
  }
  const buyish = look.opts.some(o => /^(card|tier):/.test(o)) && rnd() < 0.8;
  if (!r) r = await answerChoice(page, buyish ? { prefer: [/^card:/, /^tier:/], avoid: [/^undo/] } : { skip: Math.floor(rnd() * 30), avoid: [/^undo/] });
  appendFileSync(`${OUT}/moves.txt`, `${moves} r${look.round} ${look.phase} [${look.opts.length}] ${look.prompt || ''} -> ${r ? r.id : 'none'}\n`);
  if (!r) await page.waitForTimeout(150);
  else await page.waitForTimeout(60);
}
await page.waitForTimeout(1500);
await shot('results');
const res = await page.$eval('.results', e => e.innerText.slice(0, 1500)).catch(() => '');
writeFileSync(`${OUT}/stories.txt`, stories.join('\n'));
writeFileSync(`${OUT}/results.txt`, res);
console.log('RESULTS\n' + res);
console.log(`steps ${steps}, ${Math.round((Date.now() - t0) / 1000)}s, bugs ${bugs.length}`);
await browser.close();
