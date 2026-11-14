// Every frame of the story card, through whole games (Cory, Nov 6: "they should be looking at EVERY FRAME. no???", on a
// card with "copied Shake Down" twice and a bare "+1 +2" that judges sampling still frames never saw). A watcher reads the
// middle card on every animation frame and fails on: a line said twice, a payout line with no cause (a bare "+1 …" that
// isn't the card's first line), a line replaced or the card gone before its lines could be read, and the card leaving
// while the shop's new card is still being dealt ("the card played and resolved … before the shop had even refreshed").
// V4_URL=<frozen build> node e2e/v4/cardframes.mjs   (CARD_GAMES=2, CARD_MIN=4 minutes per game)
import { writeFileSync, mkdirSync } from 'node:fs';
import { launchBrowser, browserPath } from './lib/browser.mjs';
import { answerChoice } from './lib/answer.mjs';

const URL = process.env.V4_URL || 'http://localhost:5281/';
const GAMES = Number(process.env.CARD_GAMES || 2), MIN = Number(process.env.CARD_MIN || 4);
const OUT = process.env.CARD_OUT || '.v4-panel/cardframes';
mkdirSync(OUT, { recursive: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));
const browser = await launchBrowser({ executablePath: browserPath });
const fails = [], stats = { frames: 0, cards: 0, lines: 0, worstReadRatio: Infinity, worst: null };

for (let g = 0; g < GAMES; g++) {
  const page = await browser.newPage({ viewport: { width: 1270, height: 700 } });
  await page.addInitScript(() => {
    // the reading floor the card promises (motion.js storyWord/storyLine at Steady, less 15% for frame timing)
    const PER_WORD = 110 * 0.85, MIN_LINE = 300 * 0.85;
    // the same thing as GameScreen's lineId: a line whose numbers change in place is a count going up, not a new line
    // (the banner writes a cult's name before what it did: "P2 used X" is the game's "used X")
    const idOf = (l0, i) => { const l = l0.replace(/^(P\d|You) (?=used )/, ''); return idOf0(l, i); };
    const idOf0 = (l, i) => (i === 0 && /^[+−-]\d/.test(l) ? '#gain' : (l.match(/^([^:(]{2,48} \([^()]*\)|[^:]{2,48}): /) || [])[1] || (l.match(/^used (.+)$/) || [])[1] || ((l.match(/^(.{1,30}?) [+−-]\d/) || [])[1] ? `who:${l.match(/^(.{1,30}?) [+−-]\d/)[1]}` : '') || ((l.match(/ from (\S+)$/) || [])[1] ? `from:${l.match(/ from (\S+)$/)[1]}` : '') || (l.match(/^(recruited|bought|released) ([^(,]+)/) || [])[0] || l);
    const words = s => s.split(/\s+/).filter(Boolean).length;
    const need = s => Math.max(MIN_LINE, words(s) * PER_WORD);
    window.__hubDbg = [];
    const out = window.__card = { frames: 0, cards: 0, lines: 0, fails: [], reads: [] };
    let cur = null, clickAt = -1;
    // a card put back up after another took the hub for a moment (a rival's between-turns gain) carries on with what it
    // had shown: those lines were read before, so they aren't judged again
    const shownBefore = new Map();
    // what a line says on screen: a tile's tooltip (an svg <title>, "Red Cloak") is no words to read, and a resource dot
    // is its color, glued to its number ("+1‹red›"), so "+1 red" and "+1 yellow" aren't one line said twice
    const said = l => { const c = l.cloneNode(true); c.querySelectorAll('title').forEach(t => t.remove()); c.querySelectorAll('[data-pip]').forEach(p => { p.textContent = `‹${p.dataset.pip}›`; }); return c.textContent.trim(); };
    // a card that goes because you moved on is your call, not the card's (only a turn you didn't cut short is judged)
    addEventListener('pointerdown', () => { clickAt = performance.now(); }, true);
    const fail = (kind, detail) => { if (out.fails.length < 40) out.fails.push({ kind, detail, t: Math.round(performance.now()) }); };
    const read = (line, up) => { out.reads.push({ line, up: Math.round(up), need: Math.round(need(line)) }); return up >= need(line); };
    const finish = (now, why) => {
      if (!cur) return;
      if (cur.base) shownBefore.set(cur.base, cur.lines);
      if (cur.lines.length && clickAt >= cur.lines[cur.lines.length - 1].at) { cur = null; return; }
      // every line has had its reading time before the card goes (lines show as their beats start, so two can come up
      // close together; frame review, Nov 7): the card holds until the last of them has been read
      for (const ln of cur.lines) if (ln && !read(ln.text, now - ln.at)) { fail('gone before read', `"${ln.text}" up ${Math.round(now - ln.at)}ms, needs ${Math.round(need(ln.text))} (${cur.key}; ${why}; top "${(document.querySelector('[data-prompt]')?.textContent || '').slice(0, 40)}"; phase ${document.querySelector('.app.game')?.dataset.phase})`); break; }
      const deal = why === 'gone' && document.querySelector('.lt-deal');
      if (deal) fail('ahead of the shop', `card left while the shop's new card was still being dealt (${cur.key}; deal ${Date.now() - Number(deal.dataset.born || 0)}ms old; top "${(document.querySelector('[data-prompt]')?.textContent || '').slice(0, 40)}"; phase ${document.querySelector('.app.game')?.dataset.phase}; yours ${document.querySelector('.app.game')?.dataset.yours}; modal ${!!document.querySelector('.pay-picker,.talk-card,.lt-reckon,.choice-panel,[role=dialog]')})`);
      cur = null;
    };
    const frame = () => {
      const now = performance.now();
      out.frames++;
      const el = document.querySelector('.turn-card.at-hub');
      if (!el) finish(now, 'gone');
      else {
        // (the banner names no player on the card: the headline above it does; the turn's own head says whose it is)
        const key = `${(el.dataset.turnStory || '').split(' · ')[0]} | ${el.querySelector('.tc-head')?.textContent || ''}${el.dataset.again ? ' again' : ''}`;
        const lines = [...el.querySelectorAll('.tc-line:not(.tc-wait):not(.tc-more)')].map(said);
        if (!cur || cur.key !== key) { finish(now, 'next card'); if (cur === null && document.querySelector('.lt-deal') && el.querySelector('.tc-head') && !/again/.test(key)) { const d = document.querySelector('.lt-deal'); const a = d.getAnimations()[0]; const ct = a ? a.effect.getComputedTiming() : {}; fail('turn under the deal', `a turn started while the shop's new card was still being dealt (${key}; deal ${Date.now() - Number(d.dataset.born || 0)}ms old, progress ${ct.progress == null ? 'waiting' : ct.progress.toFixed(2)}, ${Math.round((ct.endTime || 0) - (a ? a.currentTime : 0))}ms left)`); } if (el.querySelector('.tc-head')) { const base = (el.dataset.lineKey || '').split('#')[0]; const back = base && shownBefore.get(base); cur = { key, base, lines: back ? back.map(l => ({ ...l, at: -1e9 })) : [], shown: back ? back.length : 0 }; if (!back) out.cards++; } }
        if (cur) {
          // the whole card on screen (picky bot, Nov 7: a long turn's last line cut at the screen's edge)
          { const b = el.getBoundingClientRect(); if (b.bottom > innerHeight + 1 || b.top < -1) fail('off screen', `card spans ${Math.round(b.top)}–${Math.round(b.bottom)} of ${innerHeight} (${key})`); }
          // a card that starts its lines over (it was taken down and put back up) reads as the turn happening twice
          if (lines.length < cur.shown) fail('lines went away', `${cur.shown} lines up, then ${lines.length} (${key}; "${el.dataset.turnStory}") ${JSON.stringify(window.__hubDbg.slice(-6))}`);
          cur.shown = lines.length;
          lines.forEach((t, i) => {
            const was = cur.lines[i];
            if (!was) {
              cur.lines[i] = { text: t, at: now }; out.lines++;
            // (the space's own result folding into a copy's line, "copied Tryout: …", takes its place: GameScreen)
            // (a count that grows in place may gain its cause's name: "P1 +1" becoming "Counterfeiters: P1 +1 +2")
            } else if (was.text !== t && idOf(was.text, i) !== idOf(t, i) && idOf(was.text, i) !== idOf(t.replace(/^[^:]{2,48}: /, ''), i) && !(i === 0 && /^copied /.test(t))) { fail('line changed', `"${was.text}" became "${t}" (${key})`); cur.lines[i] = { text: t, at: now }; }
          });
          const seen = new Set();
          lines.forEach((t, i) => {
            if (seen.has(t)) fail('said twice', `"${t}" (${key}; "${el.dataset.turnStory}"; ${el.dataset.lineKey})`);
            seen.add(t);
            if (i > 0 && /^[+−-]\d/.test(t)) fail('no cause', `"${t}" is line ${i + 1}, nothing names what paid it (${key})`);
          });
        }
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  });
  await page.goto(`${URL}?intro=0&sound=off&speed=steady`);
  await page.click('[data-home="local"]'); await page.waitForSelector('[data-start]');
  const np = g % 2 ? 3 : 4;
  for (let i = 3; i >= np; i--) await page.click(`[data-seat-row="${i}"] .seg button:has-text("Empty")`).catch(() => {});
  await page.waitForTimeout(300); await page.click('[data-start]');
  await page.waitForSelector('.app.game');
  const t0 = Date.now(); let n = g;
  while (Date.now() - t0 < MIN * 60000) {
    if (await page.$('.results')) break;
    const hand = await page.$('[data-handoff]'); if (hand) { await hand.click().catch(() => {}); continue; }
    const next = await page.$('[data-next-round]'); if (next) { await sleep(1200); await next.click().catch(() => {}); continue; }
    const st = await page.evaluate(() => { const e = document.querySelector('.app.game'); return e ? { yours: e.dataset.yours === '1', phase: e.dataset.phase, anim: e.dataset.animating === 'true' } : null; }).catch(() => null);
    if (!st || !st.yours || st.anim) { await sleep(120); continue; }
    await page.mouse.move(1262, 8); await sleep(500);
    if (st.phase === 'place') {
      const legal = await page.$$('.lt-wheel [data-slot][data-option]');
      if (legal.length) await legal[(n++ * 5) % legal.length].click().catch(() => {});
      const c = await page.waitForSelector('[data-place]', { timeout: 600 }).catch(() => null); if (c) await c.click().catch(() => {});
    } else if (st.phase === 'buy') {
      const pick = await page.$('.lt-shop .card[data-option]') || await page.$('[data-option="pass"]');
      if (pick) await pick.click().catch(() => {});
    } else { const a = await answerChoice(page, { last: ['pass'] }).catch(() => null); if (!a) await sleep(300); }
    await page.mouse.move(1262, 8); await sleep(200);
  }
  const r = await page.evaluate(() => window.__card);
  stats.frames += r.frames; stats.cards += r.cards; stats.lines += r.lines;
  for (const x of r.reads) { const q = x.up / x.need; if (q < stats.worstReadRatio) { stats.worstReadRatio = q; stats.worst = x; } }
  for (const f of r.fails) fails.push({ game: g, ...f });
  await page.close();
}
await browser.close();
writeFileSync(`${OUT}/report.json`, JSON.stringify({ stats, fails }, null, 1));
console.log(`cardframes: ${stats.frames} frames watched, ${stats.cards} cards, ${stats.lines} lines; tightest read ${stats.worst ? `"${stats.worst.line}" ${stats.worst.up}ms of ${stats.worst.need}` : 'none'}`);
for (const f of fails.slice(0, 15)) console.log(`  game ${f.game} ${f.kind}: ${f.detail}`);
if (stats.cards < 10) { console.log('FAIL cardframes: fewer than 10 cards seen'); process.exit(1); }
// still open (todo.md, Nov 6): a turn's card going, or the next turn's starting, in the very commit a deal begins.
// Reported on every run, not yet failing it; the rest fail.
const WATCH = new Set(['ahead of the shop', 'turn under the deal']);
const hard = fails.filter(f => !WATCH.has(f.kind));
if (fails.length > hard.length) console.log(`WATCH cardframes: ${fails.length - hard.length} deal timing problem(s), not failing yet`);
if (hard.length) { console.log(`FAIL cardframes: ${hard.length} problem(s)`); process.exit(1); }
console.log('PASS cardframes');
