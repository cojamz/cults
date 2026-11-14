import { browserPath, launchBrowser } from './lib/browser.mjs';
// E2E: live cursors (Cory, 2026-11-07: "are we able to show other people's mouses?"). Hana hosts on a 1270x700 laptop,
// Gus joins on a bigger 1600x900 screen (BroadcastChannel tabs). Gus points at a wheel space, a shop card and his own
// seat; each time Hana's screen must show his arrow inside the same thing on her own (different) layout, with his name.
// Then Gus's mouse leaves the window and his arrow goes. Fails on any console error.
// Server: $V4_URL if set, else starts `npx vite --port 5183` itself.
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';

const SHOTS = process.env.V4_SHOTS || '/tmp/patrons-shots/v4';
mkdirSync(SHOTS, { recursive: true });
let server = null;
let base = process.env.V4_URL;
if (!base) {
  base = 'http://localhost:5183';
  server = spawn('npx', ['vite', '--port', '5183', '--strictPort'], { stdio: 'pipe' });
  let up = false;
  for (let k = 0; k < 60 && !up; k++) { await new Promise(r => setTimeout(r, 500)); up = await fetch(base).then(r => r.ok, () => false); }
  if (!up) { server.kill(); console.error('vite did not start'); process.exit(1); }
}
const log = (...a) => console.log('[cursors]', ...a);
const errors = [];
const browser = await launchBrowser({ executablePath: browserPath });
const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
const watch = (page, who) => { page.on('pageerror', e => errors.push(`${who}: ${e.message}`)); page.on('console', m => { if (m.type() === 'error') errors.push(`${who}: ${m.text()}`); }); return page; };
const url = `${base}/?transport=broadcast&botDelay=30&intro=0`;
const hana = watch(await ctx.newPage(), 'hana');
const gus = watch(await ctx.newPage(), 'gus');
await gus.setViewportSize({ width: 1600, height: 900 });

// where Gus's arrow tip is on Hana's screen, and whether it's showing
const arrow = () => hana.evaluate(() => {
  const el = document.querySelector('.cursors .cursor[data-cursor-seat="1"]');
  if (!el) return null;
  const r = el.querySelector('.cursor-arrow').getBoundingClientRect();
  return { x: r.left + 1, y: r.top + 1, shown: getComputedStyle(el).opacity !== '0' && !el.hasAttribute('data-off'), name: el.textContent };
});
const inside = (r, p) => p.x >= r.left - 2 && p.x <= r.right + 2 && p.y >= r.top - 2 && p.y <= r.bottom + 2;
async function pointAt(sel, label) {
  const g = await gus.$eval(sel, e => { const r = e.getBoundingClientRect(); return { x: r.left + r.width * 0.3, y: r.top + r.height * 0.6 }; });
  await gus.mouse.move(g.x - 30, g.y - 30);
  await gus.mouse.move(g.x, g.y, { steps: 6 });
  let a = null;
  for (let k = 0; k < 40; k++) {
    await hana.waitForTimeout(100);
    a = await arrow();
    const r = await hana.$eval(sel, e => { const b = e.getBoundingClientRect(); return { left: b.left, right: b.right, top: b.top, bottom: b.bottom }; });
    if (a && a.shown && inside(r, a)) { log(`${label}: Gus's arrow is on it on Hana's screen at`, Math.round(a.x), Math.round(a.y)); return; }
  }
  throw new Error(`${label}: Gus pointed at ${sel}, but Hana sees his arrow at ${JSON.stringify(a)}`);
}

let ok = false;
try {
  await hana.goto(url);
  await hana.fill('input[placeholder="Name"]', 'Hana');
  await hana.click('text=Host online game');
  await hana.waitForSelector('.code');
  const code = (await hana.$eval('.code', e => e.firstChild.textContent)).trim();
  await gus.goto(url);
  await gus.fill('input[placeholder="Name"]', 'Gus');
  await gus.fill('input[aria-label="Room code"]', code);
  await gus.click('text=Join with code');
  await gus.waitForSelector('.code');
  await hana.waitForFunction(() => document.querySelectorAll('.seats li').length === 2, null, { timeout: 15000 });
  await hana.click('text=Start game');
  await Promise.all([hana, gus].map(p => p.waitForSelector('.app.game .lt-seat[data-pid]', { timeout: 20000 })));
  log('started', code);
  await hana.waitForTimeout(1500);

  const slot = await gus.$eval('.lt .stage [data-slot]', e => e.getAttribute('data-slot'));
  await pointAt(`.lt .stage [data-slot="${slot}"]`, 'a wheel space');
  const a = await arrow();
  if (!/Gus/.test(a.name)) throw new Error(`Gus's arrow is labelled "${a.name}"`);
  await hana.screenshot({ path: `${SHOTS}/cursors-wheel.png` });
  const uid = await gus.$eval('.lt-shop [data-uid]', e => e.getAttribute('data-uid'));
  await pointAt(`.lt-shop [data-uid="${uid}"]`, 'a shop card');
  await hana.screenshot({ path: `${SHOTS}/cursors-shop.png` });
  await pointAt('.lt-seat[data-pid="1"]', 'his own seat');
  // Hana never sees her own arrow, and Gus sees nobody's (Hana's mouse hasn't moved)
  if (await hana.$('.cursors .cursor[data-cursor-seat="0"]')) throw new Error('Hana sees her own arrow');
  // Gus turns his cursor off in the menu: his arrow goes, and moving his mouse doesn't bring it back; on again, it's back
  await gus.click('.menu-glyph');
  await gus.click('[data-cursor-share="on"]');
  await hana.waitForFunction(() => !document.querySelector('.cursors .cursor[data-cursor-seat="1"]'), null, { timeout: 5000 });
  await gus.mouse.move(300, 300, { steps: 5 });
  await hana.waitForTimeout(600);
  if (await hana.$('.cursors .cursor[data-cursor-seat="1"]')) throw new Error('Gus hid his cursor, but Hana still sees it');
  log('Gus hid his cursor: Hana sees nothing');
  if (!(await gus.$('[data-cursor-share="off"]'))) await gus.click('.menu-glyph');
  await gus.click('[data-cursor-share="off"]');
  await gus.keyboard.press('Escape');
  await pointAt(`.lt .stage [data-slot="${slot}"]`, 'shown again');
  // the mouse leaves the window: the arrow goes
  await gus.evaluate(() => document.dispatchEvent(new PointerEvent('pointerout', { bubbles: true, relatedTarget: null })));
  await hana.waitForFunction(() => !document.querySelector('.cursors .cursor[data-cursor-seat="1"]'), null, { timeout: 5000 });
  log('Gus left the window: his arrow is gone');
  if (errors.length) throw new Error(`console errors:\n${errors.join('\n')}`);
  ok = true;
  log('PASS');
} catch (e) {
  console.error('[cursors] FAIL', e.message);
  await hana.screenshot({ path: `${SHOTS}/cursors-fail-hana.png` }).catch(() => {});
  await gus.screenshot({ path: `${SHOTS}/cursors-fail-gus.png` }).catch(() => {});
} finally {
  await browser.close();
  server?.kill();
}
process.exit(ok ? 0 : 1);
