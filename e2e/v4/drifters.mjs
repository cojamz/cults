// Drifters' color pick (Cory's playtest, Nov 1): every color on the table is offered, the ones you hold none of too,
// and afterwards the card says which color Drifters counts as.
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { createGame, applyMove, quadrant } from '../../src/engine/v4/index.js';
import { resume } from '../../src/engine/v4/core.js';
import { takeCard } from './lib/take.mjs';
const base = (process.env.V4_URL || 'http://localhost:5325').replace(/\/$/, '');
const out = `${process.env.V4_SHOTS || '/tmp/cults-drifters'}/drifters`; mkdirSync(out, { recursive: true });
const seats = ['You', 'Bo', 'Cy', 'Di'].map(name => ({ name, kind: 'human' }));
const quads = ['yellow', 'red', 'trading', 'purple'];
let s = createGame({ seats, seed: 61, quadrants: quads });
Object.assign(s, { round: 3, queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }], pending: null, slots: {}, squats: {}, order: [0, 0], log: [] }); delete s.echo;
s.pile = [...s.shop, ...s.pile]; s.shop = [];
// resources in only two colors: the pick must still offer all four
s.players.forEach((p, i) => { p.res = Object.fromEntries(s.resources.map(r => [r, i === 0 && (r === 'red' || r === 'yellow') ? 3 : 0])); p.left = 5; });
const drifters = takeCard(s, 'yellow.drifters'); s.shop.push(drifters);
for (const d of ['red.volunteer', 'red.twins', 'red.host', 'red.mentor', 'red.loyalists', 'red.mob', 'red.panel']) s.shop.push(takeCard(s, d));
s = resume(s); s.build = buildStamp();
const take = `slot:1-${quadrant('red').actions.findIndex(a => a.key === 'take')}`;
const browser = await launchBrowser({ executablePath: browserPath });
let page;
try {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } }); page = await ctx.newPage(); page.setDefaultTimeout(12000);
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  await seedSave(page, { config: { seats, speed: 'quick' }, state: s, undo: null, savedAt: Date.now() });
  await page.goto(`${base}/?intro=0&speed=quick`); await page.locator('[data-home="resume"]').click();
  if (await page.locator('[data-handoff]').isVisible()) await page.locator('[data-handoff]').click();
  const press = async id => {
    await page.locator('.app.game:not([data-animating])').waitFor();
    const el = page.locator(`[data-option=${JSON.stringify(id)}]:not([disabled]):not([aria-disabled="true"])`).first(); await el.waitFor(); await el.click();
    const confirm = page.getByRole('button', { name: 'Place here', exact: true }); if (await confirm.isVisible()) await confirm.click();
  };
  await press(take); await press(`card:${drifters}`);
  await page.locator('.app.game:not([data-animating])').waitFor();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${out}/pick.png` });
  // every color is offered and none of them looks off: the ones you hold none of included
  for (const q of quads) {
    const el = page.locator(`[data-option="color:${q}"]`).first();
    if (!(await el.isVisible())) throw Error(`no visible ${q} option`);
    const op = await el.evaluate(n => { let o = 1; for (let e = n; e; e = e.parentElement) o *= Number(getComputedStyle(e).opacity); return o; });
    if (op < 0.95) throw Error(`${q} option looks off (opacity ${op.toFixed(2)})`);
  }
  await press('color:trading');
  await page.locator('.app.game:not([data-animating])').waitFor();
  await page.locator(`.cs-member[data-member="yellow.drifters"] .fig`).first().hover();
  const said = page.locator('[data-counts-as]').first(); await said.waitFor();
  const text = await said.innerText();
  if (!/White/i.test(text)) throw Error(`card says "${text}", not White`);
  await page.screenshot({ path: `${out}/after.png` });
  if (errors.length) throw Error(errors.join('; '));
  console.log(`drifters: all 4 colors offered at full strength; the card says "${text}".`);
} catch (e) { if (page && !page.isClosed()) await page.screenshot({ path: `${out}/failure.png` }); throw e; } finally { await browser.close(); }
