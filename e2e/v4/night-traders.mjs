// Night Traders' swaps (Cory, Nov 5: the swapping "is also clunky"): the swap card sets the colors with − and +, and one
// press of Swap sends them all. The card is Early Traders now (Cory, Nov 11: "Round Start: swap up to 4 of your
// resources"), so the card opens at round III's start: You hold 7 blue and 2 purple, and set 3 of the 4 swaps.
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { createGame } from '../../src/engine/v4/index.js';
import { resume } from '../../src/engine/v4/core.js';
import { takeCard } from './lib/take.mjs';
const base = (process.env.V4_URL || 'http://localhost:5325').replace(/\/$/, '');
const out = `${process.env.V4_SHOTS || '/tmp/cults-night-traders'}/night-traders`; mkdirSync(out, { recursive: true });
const seats = [{ name: 'You', kind: 'human' }, ...['Bo', 'Cy', 'Di'].map(name => ({ name, kind: 'bot' }))];
let s = createGame({ seats, seed: 61, quadrants: ['red', 'market', 'purple', 'yellow'] });
Object.assign(s, { round: 2, queue: [{ t: 'round', r: 3 }], pending: null, slots: {}, squats: {}, order: [], log: [] }); delete s.echo;
s.players.forEach((p, i) => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); p.left = 0; if (i === 1) p.res.blue = 4; });
Object.assign(s.players[0].res, { blue: 7, purple: 2 });
s.players[0].members.push(takeCard(s, 'yellow.nightmarket'));
s = resume(s); s.build = buildStamp();
const browser = await launchBrowser({ executablePath: browserPath });
let fail = null;
try {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 }, deviceScaleFactor: Number(process.env.V4_DPR || 1) });
  const page = await ctx.newPage(); page.setDefaultTimeout(12000);
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  await seedSave(page, { config: { seats, speed: 'quick' }, state: s, undo: null, savedAt: Date.now() });
  await page.goto(`${base}/?intro=0&speed=quick`); await page.locator('[data-home="resume"]').click();
  if (await page.locator('[data-handoff]').isVisible()) await page.locator('[data-handoff]').click();
  const card = page.locator('.swap-card'); await card.waitFor();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${out}/open.png` });
  const plus = c => page.locator(`[data-swap="${c}"] [data-step="+"]`).click();
  await plus('purple'); await plus('purple'); await plus('red');
  await page.screenshot({ path: `${out}/set.png` });
  const n = c => page.locator(`[data-swap="${c}"]`).getAttribute('data-n');
  const set = [await n('blue'), await n('purple'), await n('red')];
  if (set.join() !== '4,4,1') fail = `after three presses: blue, purple, red = ${set}`;
  await page.getByRole('button', { name: 'Swap 3' }).click();
  await card.waitFor({ state: 'detached' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${out}/after.png` });
  const log = await page.evaluate(() => document.body.innerText);
  if (!fail && errors.length) fail = `page errors: ${errors.join('; ')}`;
  console.log(fail ? `FAIL night-traders: ${fail}` : `ok night-traders: three swaps in one press (${out})`, log.includes('Early Traders') ? '' : '');
} finally { await browser.close(); }
if (fail) process.exit(1);
