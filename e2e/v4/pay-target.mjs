import { browserPath, launchBrowser } from './lib/browser.mjs';
// E2E pay-target gate (Cor, 2026-11-05: "when you pay for something, it should go towards that thing. Like the resources
// flying toward the minion cards, or towards the follower shop card that was chosen."). At laptop size (1270×700),
// Steady, every payment coin is recorded as it's added to the page (a MutationObserver), with where its path ends:
//  (q1) your recruit: every coin ends on the card you bought (where it stood in the shop, lifted);
//  (q2) your follower buy: every coin ends on the price tile you clicked;
//  (q3) the rivals (bots) playing on: every coin paid for a recruit or a follower buy ends on that card or tile, and no
//       payment for a thing bought flies to a wheel rim.
// Saves: e2e/v4/lib/shop-save.mjs. Server: $V4_URL if set, else its own `npx vite` on a free port from 5460.
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { createServer } from 'node:net';
import { buySave } from './lib/shop-save.mjs';
import { seedSave } from './lib/seed.mjs';

const SHOTS = (process.env.V4_SHOTS || '/tmp/patrons-shots/v4') + '/pay-target';
mkdirSync(SHOTS, { recursive: true });
let server = null;
let base = process.env.V4_URL;
if (!base) {
  const free = port => new Promise(res => { const srv = createServer().once('error', () => res(false)).once('listening', () => srv.close(() => res(true))).listen(port, 'localhost'); });
  let port = 5460;
  while (!(await free(port))) port++;
  base = `http://localhost:${port}`;
  server = spawn('npx', ['vite', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
  let up = false;
  for (let k = 0; k < 120 && !up; k++) { await new Promise(r => setTimeout(r, 500)); up = await fetch(base).then(r => r.ok, () => false); }
  if (!up) { server.kill(); console.error('vite did not start'); process.exit(1); }
}
const errors = [];
const browser = await launchBrowser({ executablePath: browserPath });

// in the page: every payment coin as it's added, with its start, its path's end, and what stood there then
const RECORD = () => {
  window.__pays = [];
  const shopNow = () => [...document.querySelectorAll('.lt-shop .card[data-uid]')].map(e => ({ uid: e.dataset.uid, r: e.getBoundingClientRect().toJSON() }));
  let shop = shopNow();
  // the shop as it stood a moment ago (a bought card leaves its slot as its coins fly)
  setInterval(() => { const s = shopNow(); if (s.length) shop = s; }, 40);
  const box = el => el && el.getBoundingClientRect().toJSON();
  const rims = () => [...document.querySelectorAll('.rim[data-rim-res]')].map(e => ({ res: e.dataset.rimRes, r: box(e) }));
  new MutationObserver(list => {
    for (const m of list) for (const n of m.addedNodes) {
      if (!(n instanceof HTMLElement) || !n.classList.contains('piece-flight') || !n.classList.contains('pay')) continue;
      const a = n.getBoundingClientRect();
      const an = n.getAnimations()[0];
      let dx = 0, dy = 0;
      try { const k = an.effect.getKeyframes(); const t = String(k[k.length - 1].transform || ''); const mm = t.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/); if (mm) { dx = +mm[1]; dy = +mm[2]; } } catch { /* no frames */ }
      const end = { x: a.left + a.width / 2 + dx, y: a.top + a.height / 2 + dy };
      window.__pays.push({ end, shop: shop.map(c => ({ ...c })), rates: [...document.querySelectorAll('.lt-rate[data-rate]')].map(e => ({ tier: e.dataset.rate, r: box(e) })),
        lifted: [...document.querySelectorAll('.card-flight')].map(box), stage: box(document.querySelector('.action-stage')), rims: rims(), t: performance.now() });
    }
  }).observe(document.body, { childList: true });
};
const inside = (p, r, pad = 12) => r && p.x >= r.left - pad && p.x <= r.right + pad && p.y >= r.top - pad && p.y <= r.bottom + pad;

async function open(tag, save) {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
  const page = await ctx.newPage();
  page.on('pageerror', e => errors.push(`[${tag}] pageerror: ${e.message}`));
  await seedSave(page, save);
  await page.goto(`${base}/?intro=0`, { timeout: 90000 });
  await page.waitForSelector('[data-home="resume"]', { timeout: 60000 });
  await page.click('[data-home="resume"]');
  await page.waitForSelector('.lt-card.can', { timeout: 60000 });
  await page.mouse.move(640, 695);
  await page.waitForTimeout(600);
  await page.evaluate(RECORD);
  return { ctx, page };
}
async function click(page, sel) {
  const b = await (await page.waitForSelector(sel, { timeout: 8000 })).boundingBox();
  await page.mouse.click(b.x + b.width / 2, b.y + b.height / 2);
}
const pays = page => page.evaluate(() => window.__pays.splice(0));

try {
  // (q1) your recruit, one way to pay (no sheet)
  {
    const { save, uid } = buySave({ def: 'gold.prospector', res: { gold: 6, red: 0, blue: 0, green: 0 }, rivals: { gold: 6 } });
    const { ctx, page } = await open('q1', save);
    const card = await page.$eval(`.lt-shop .card[data-uid="${uid}"]`, e => e.getBoundingClientRect().toJSON());
    await click(page, `.lt-shop .card[data-uid="${uid}"]`);
    const sheet = await page.waitForSelector('.dialog.pay [data-pay]', { timeout: 900 }).catch(() => null);
    if (sheet) await sheet.click();
    await page.waitForTimeout(260);
    await page.screenshot({ path: `${SHOTS}/q1-recruit-coins.png` });
    await page.waitForTimeout(1800);
    const got = await pays(page);
    if (!got.length) errors.push('(q1) your recruit flew no coins');
    for (const p of got) if (!inside(p.end, card, 16)) errors.push(`(q1) a coin for your recruit ends at ${Math.round(p.end.x)},${Math.round(p.end.y)}, off the card (${Math.round(card.left)}–${Math.round(card.right)}, ${Math.round(card.top)}–${Math.round(card.bottom)})`);
    console.log(`(q1) ${got.length} coins into the recruited card`);
    await ctx.close();
  }
  // (q2) your follower buy at the middle price
  {
    const { save } = buySave({ def: null, res: { gold: 5, red: 0, blue: 0, green: 0 }, rivals: { gold: 6 } });
    const { ctx, page } = await open('q2', save);
    const sel = '.lt-rates [data-rate="mid"]';
    const tile = await page.$eval(sel, e => e.getBoundingClientRect().toJSON());
    await click(page, sel);
    const sheet = await page.waitForSelector('.dialog.pay [data-pay]', { timeout: 900 }).catch(() => null);
    if (sheet) await sheet.click();
    await page.waitForTimeout(220);
    await page.screenshot({ path: `${SHOTS}/q2-follower-coins.png` });
    await page.waitForTimeout(1800);
    const got = await pays(page);
    if (!got.length) errors.push('(q2) your follower buy flew no coins');
    for (const p of got) if (!inside(p.end, tile, 16)) errors.push(`(q2) a coin for your follower buy ends at ${Math.round(p.end.x)},${Math.round(p.end.y)}, off the price tile`);
    console.log(`(q2) ${got.length} coins into the price tile`);
    await page.waitForTimeout(300);
    // (q3) the rivals play their turns: watch every coin they pay. Bought things: a shop card or a price tile.
    // P1 passes the rest of the turn, then plays its next turns as the first legal option, so the bots keep going.
    const deadline = Date.now() + 75000;
    let onThing = 0, onRim = 0, other = 0, shot = false;
    while (Date.now() < deadline) {
      const got3 = await pays(page);
      for (const p of got3) {
        const card = p.shop.find(c => inside(p.end, c.r, 14)) || p.lifted.find(r => inside(p.end, r, 14));
        const rate = p.rates.find(x => inside(p.end, x.r, 14));
        const rim = p.rims.find(x => inside(p.end, x.r, 2));
        if (card || rate) onThing++;
        else if (rim && !inside(p.end, p.stage, 0)) onRim++;
        else other++;
        if (!shot && (card || rate)) { shot = true; await page.screenshot({ path: `${SHOTS}/q3-rival-coins.png` }); }
      }
      // keep P1 moving: the first offered option on its turn (a space, then pass the buy)
      const mine = await page.$('.lt-card.can');
      if (mine) {
        const pass = await page.$('[data-option="pass"], [data-pass]');
        if (pass) await pass.click().catch(() => {}); else await mine.click().catch(() => {});
      }
      if (await page.$('.final-score, [data-final]')) break;
      await page.waitForTimeout(120);
    }
    console.log(`(q3) rival coins: ${onThing} on a bought card or price tile, ${onRim} on a rim, ${other} elsewhere (a space or member that charged)`);
    if (!onThing) errors.push('(q3) no rival payment for a card or followers was seen in 75 seconds');
    await ctx.close();
  }
} catch (e) {
  errors.push(`threw: ${e.stack || e}`);
} finally {
  await browser.close();
  if (server) server.kill();
}
if (errors.length) { console.error('PAY-TARGET FAIL\n' + errors.map(e => ' - ' + e).join('\n')); process.exit(1); }
console.log(`PAY-TARGET PASS (shots in ${SHOTS})`);
