// Party Crasher's Use (Cory's playtest, Nov 1: "still cant play party crasher"): lit on your seat, and using it lets your
// next minion onto a space a rival took.
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { createGame } from '../../src/engine/v4/index.js';
import { resume } from '../../src/engine/v4/core.js';
import { takeCard } from './lib/take.mjs';
const base = (process.env.V4_URL || 'http://localhost:5325').replace(/\/$/, '');
const out = `${process.env.V4_SHOTS || '/tmp/cults-crasher'}/party-crasher`; mkdirSync(out, { recursive: true });
const seats = ['You', 'Bo', 'Cy', 'Di'].map(name => ({ name, kind: 'human' }));
let s = createGame({ seats, seed: 67, quadrants: ['red', 'gold', 'trading', 'purple'] });
Object.assign(s, { round: 2, queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }], pending: null, squats: {}, order: [0, 1], log: [] }); delete s.echo;
s.slots = { '1-0': 1 }; // Bo stands on a gold space
s.players.forEach(p => { p.res = Object.fromEntries(s.resources.map(r => [r, 2])); p.left = 3; });
const uid = takeCard(s, 'benders.squatter'); s.players[0].members.push(uid); s.cards[uid].recruitedRound = 1;
s = resume(s); s.build = buildStamp();
const browser = await launchBrowser({ executablePath: browserPath });
let page;
try {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } }); page = await ctx.newPage(); page.setDefaultTimeout(12000);
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  await seedSave(page, { config: { seats, speed: 'quick' }, state: s, undo: null, savedAt: Date.now() });
  await page.goto(`${base}/?intro=0&speed=quick`); await page.locator('[data-home="resume"]').click();
  if (await page.locator('[data-handoff]').isVisible()) await page.locator('[data-handoff]').click();
  await page.locator('.app.game:not([data-animating])').waitFor();
  const fig = page.locator(`.cs-member[data-member="benders.squatter"]`).first();
  await fig.waitFor();
  if ((await fig.getAttribute('data-state')) !== 'ready') throw Error(`Party Crasher reads "${await fig.getAttribute('data-state')}", not ready`);
  await page.screenshot({ path: `${out}/ready.png` });
  await fig.locator('.fig').hover();
  const use = page.locator(`[data-option="use:${uid}"]:not([disabled])`).first(); await use.waitFor();
  await page.screenshot({ path: `${out}/card.png` });
  await use.click();
  await page.locator('.app.game:not([data-animating])').waitFor();
  await page.waitForFunction(() => { try { return JSON.parse(localStorage.getItem('patrons.v4.local')).state.players[0].crashNext === true; } catch { return false; } });
  await page.screenshot({ path: `${out}/used.png` });
  if (errors.length) throw Error(errors.join('; '));
  console.log('party-crasher: lit on the seat, Use pressed, next minion may crash.');
} catch (e) { if (page && !page.isClosed()) await page.screenshot({ path: `${out}/failure.png` }); throw e; } finally { await browser.close(); }
