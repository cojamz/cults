// Purple's "Went last" contest mid-round (Cory, Nov 14: "the 'leading' on the purple contest is weird and misleading").
// Mid-round, whoever placed most recently is not ahead of anything: the contest goes to whoever places the round's
// last minion, so the rim and its card name the player who goes last as the turns stand (the Goes Last token holder
// when it has minions on it), and say it can still change. Fixture: round I, You to place, one rival placed most
// recently, another holds the Goes Last token.
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { createGame, applyMove } from '../../src/engine/v4/index.js';
import { chooseBotMove } from '../../src/engine/v4/bots.js';
import { turnSequence } from '../../src/v4/format.js';
const base = (process.env.V4_URL || 'http://localhost:5323').replace(/\/$/, '');
const out = `${process.env.V4_SHOTS || '/tmp/cults-purple-went-last'}`;
mkdirSync(out, { recursive: true });
const seats = ['You', 'Bo', 'Cy', 'Di'].map(name => ({ name, kind: 'human' }));
// a seeded random for the bots, so the fixture is the same game every run
const rng = seed => () => { seed = (seed + 0x6D2B79F5) | 0; let x = Math.imul(seed ^ (seed >>> 15), 1 | seed); x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x; return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
let s = null;
for (let seed = 1; seed < 60 && !s; seed++) {
  let g = createGame({ seats, seed, quadrants: ['purple', 'red', 'echo', 'thieves'], rules: { contests: 'byColor', deck: 10, roundDecks: 2 } });
  const rand = rng(seed);
  for (let i = 0; i < 400 && g.pending; i++) {
    g = applyMove(g, chooseBotMove(g, rand));
    if (g.round > 1) break;
    // You to place, a rival placed most recently, and another rival holds the Goes Last token with minions on it
    if (g.pending?.player === 0 && g.pending?.kind === 'place' && g.lastPlaced?.pid > 0 && g.goesLast?.round === 1 && g.goesLast.pid > 0 && g.goesLast.pid !== g.lastPlaced.pid
      && turnSequence(g).filter(t => t.at !== 'done').at(-1)?.pid === g.goesLast.pid) { s = g; break; } // with minions on the token: they place last
  }
}
if (!s) throw new Error('no fixture: no seed reached a rival placing last so far while another holds the Goes Last token');
const NAMES = ['You', 'Bo', 'Cy', 'Di'], lastSoFar = NAMES[s.lastPlaced.pid], holder = NAMES[s.goesLast.pid];
console.log(`fixture: seed ${s.seed}, ${lastSoFar} placed most recently, ${holder} holds the Goes Last token`);
s.build = buildStamp();
const save = { config: { seats, speed: 'fast' }, state: s, undo: null, savedAt: Date.now() };
const browser = await launchBrowser({ executablePath: browserPath });
try {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } }), page = await ctx.newPage();
  page.setDefaultTimeout(15000);
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  await seedSave(page, save); await page.goto(`${base}/?intro=0&speed=quick&sound=off`);
  await page.locator('[data-home="resume"]').click();
  if (await page.locator('[data-handoff]').isVisible()) await page.locator('[data-handoff]').click();
  await page.locator('.app.game:not([data-animating])').waitFor(); await page.waitForTimeout(600);
  const leaders = await page.$$eval('[data-rim-leader]', els => els.map(e => ({ id: e.getAttribute('data-rim-leader'), t: e.textContent })));
  const rim = page.locator('path.rim-hit[data-rim="purple"]');
  const aria = await rim.getAttribute('aria-label');
  await rim.focus(); await page.keyboard.press('Enter');
  await page.waitForSelector('[data-prize-line="purple"]', { timeout: 3000 });
  await page.waitForTimeout(350);
  await page.screenshot({ path: `${out}/purple-went-last.png` });
  const card = await page.locator('[data-prize-line="purple"]').locator('xpath=..').innerText().catch(() => '');
  console.log(JSON.stringify({ leaders, aria, card }, null, 1));
  if (errors.length) throw new Error(errors.join('; '));
  if (process.env.CHECK !== '0') {
    if (new RegExp(`${lastSoFar} leads`).test(aria)) throw new Error(`rim says ${lastSoFar} leads: the last to place so far is not ahead of anything`);
    if (!aria.includes(holder) || !card.includes(holder)) throw new Error(`${holder} holds the Goes Last token and goes last: the rim and card must say so`);
    console.log(`purple went last: the rim and its card name ${holder}, who goes last as the turns stand.`);
  }
  await ctx.close();
} finally { await browser.close(); }
