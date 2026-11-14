import { browserPath, launchBrowser } from './lib/browser.mjs';
// E2E: Impersonator shows what it copies (Cory's playtest, Nov 5: "impersonator doesnt show what it copied?"). Round II
// at 1270×700; P1 recruits Impersonator, P2 holds Treasurer and Hustler, P3 Tycoon:
//  (i1) the choice lays the rivals' members out as whole cards to pick, rules showing (as Sample's does);
//  (i2) once Treasurer is picked, Impersonator's seat row reads "Has Treasurer's ability: …";
//  (i3) its hover card shows Treasurer's rule and "Has the ability of Treasurer".
// Server: $V4_URL (a built preview). Shots: $V4_SHOTS/impersonator-shows.
import { mkdirSync } from 'node:fs';
import { createGame } from '../../src/engine/v4/index.js';
import { resume, contextFor } from '../../src/engine/v4/core.js';
import { seedSave } from './lib/seed.mjs';

const SHOTS = process.env.GH_SHOTS || `${process.env.V4_SHOTS || '/tmp/patrons-shots/v4'}/impersonator-shows`;
mkdirSync(SHOTS, { recursive: true });
const base = (process.env.V4_URL || 'http://localhost:5532/').replace(/\/$/, '');
const QUADS = ['gold', 'red', 'purple', 'echo'];
const HOLD = [[], ['gold.seed', 'gold.hustler'], ['gold.tycoon']];
const add = (s, def) => { const u = Math.max(...Object.keys(s.cards).map(Number)) + 1; s.cards[u] = { uid: u, def }; return u; };

function save(stamp) {
  const seats = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }];
  let s = createGame({ seats, seed: 7, quadrants: QUADS });
  s.build = stamp;
  Object.assign(s, { round: 2, slots: {}, squats: {}, order: [], pending: null });
  delete s.echo;
  s.players.forEach((p, i) => {
    p.res = Object.fromEntries(s.resources.map(r => [r, 0])); p.left = 2; p.members = [];
    for (const def of HOLD[i]) p.members.push(add(s, def));
  });
  const imp = add(s, 'echo.impersonators');
  s.shop.push(imp);
  s.queue = [0, 1, 2].map(p => ({ t: 'turn', p }));
  contextFor(s).recruit(s.players[0], imp, { free: true });
  s = resume(s);
  if (!/^Impersonator:/.test(s.pending?.prompt || '')) throw new Error(`impersonator-shows: setup asked ${s.pending?.prompt}`);
  return { s, imp, config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal' } };
}

const fails = [];
const fail = (m, tag) => fails.push(`[${tag}] ${m}`);
const errors = [];
const browser = await launchBrowser({ executablePath: browserPath });
try {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
  const page = await ctx.newPage();
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(`${base}/?botDelay=300&intro=0`);
  await page.click('[data-home="local"]');
  await page.click('[data-start]');
  await page.waitForFunction(() => { try { return !!JSON.parse(localStorage.getItem('patrons.v4.local')).state.build; } catch { return false; } });
  const stamp = await page.evaluate(() => JSON.parse(localStorage.getItem('patrons.v4.local')).state.build);
  const { s, imp, config } = save(stamp);
  const treasurer = s.players[1].members[0];
  await seedSave(page, { config, state: s, undo: null, savedAt: Date.now() });
  await page.goto(`${base}/?botDelay=300&intro=0`);
  await page.waitForSelector('.lt-wheel, [data-home="resume"]');
  if (!(await page.$('.lt-wheel'))) await page.click('[data-home="resume"]');
  // (i1) the tray
  const tray = await page.waitForSelector('.lt-shop-cards[data-tray="members"]', { timeout: 6000 }).catch(() => null);
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${SHOTS}/01-choice.png` });
  if (!tray) fail('Impersonator\'s choice has no tray of cards', 'i1');
  else {
    const laid = await page.$$eval('.lt-shop-cards[data-tray="members"] .lt-card[data-uid]', els => els.map(e => ({ uid: Number(e.dataset.uid), opt: !!e.dataset.option, rule: !!e.querySelector('.lt-pick-ability') })));
    if (laid.length !== 3 || laid.some(x => !x.opt || !x.rule)) fail(`tray ${JSON.stringify(laid)}, want the rivals' three members, pickable, rules showing`, 'i1');
    await page.click(`.lt-shop-cards[data-tray="members"] .lt-card[data-uid="${treasurer}"]`);
  }
  const took = await page.waitForFunction(u => { const st = JSON.parse(localStorage.getItem('patrons.v4.local')).state; return st.cards[u].ability === 'gold.seed'; }, imp, { timeout: 6000 }).then(() => true, () => false);
  if (!took) fail('Impersonator never took Treasurer\'s ability', 'i1');
  await page.waitForTimeout(1500);
  // (i2) the seat row
  const seatText = await page.$$eval(`.cs-member[data-uids~="${imp}"]`, els => els.map(e => (e.getAttribute('aria-label') || '') + ' ' + (e.getAttribute('title') || '') + ' ' + e.innerText).join(' | '));
  const chip = await page.$(`.cs-member[data-uids~="${imp}"]`);
  if (!chip) fail('Impersonator not on its seat', 'i2');
  else {
    await chip.hover();
    const card = await page.waitForSelector('[data-ability-of]', { timeout: 4000 }).catch(() => null);
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${SHOTS}/02-hover.png` });
    if (!card) fail(`Impersonator's hover doesn't say whose ability it has (seat: ${seatText})`, 'i3');
    else {
      const t = await page.evaluate(() => document.querySelector('[data-ability-of]').closest('.card-face').innerText.replace(/\s+/g, ' '));
      if (!/Has the ability of Treasurer/.test(t) || !/per .* you have/.test(t)) fail(`hover reads "${t}"`, 'i3');
    }
  }
  await ctx.close();
} finally { await browser.close(); }
if (errors.length) fail(errors.join(' | '), 'pageerror');
if (fails.length) { console.error(`impersonator-shows: ${fails.length} failure(s)\n${fails.join('\n')}`); process.exit(1); }
console.log('impersonator-shows: ok');
