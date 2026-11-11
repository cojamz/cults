import { browserPath, launchBrowser } from './lib/browser.mjs';
// E2E: Greatest Hits at 1270×700. Since Nov 10 it reads "Choose a color other than green. Copy every action with a minion
// on its spaces. +1 green." (Cory; it copied your members' On Recruits from Nov 1). Round III, P2 took Kickback and P3
// Golden Years (both Gold), and P1 places their last minion:
//  (c1) the space's hover card opens;
//  (c2) after you take it and pick Gold, both Gold actions are copied for P1 and named in the log, whoever's minion;
//  (c3) the Chronicle carries those lines.
// Server: $V4_URL (a built preview). Shots: $V4_SHOTS/copyall (or $GH_SHOTS).
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { createGame, quadrant, applyMove } from '../../src/engine/v4/index.js';
import { resume } from '../../src/engine/v4/core.js';
import { seedSave } from './lib/seed.mjs';
import { answerChoice } from './lib/answer.mjs';

const SHOTS = process.env.GH_SHOTS || `${process.env.V4_SHOTS || '/tmp/patrons-shots/v4'}/copyall`;
mkdirSync(SHOTS, { recursive: true });
const base = (process.env.V4_URL || 'http://localhost:5532/').replace(/\/$/, '');
const QUADS = ['gold', 'red', 'purple', 'echo'];
const key = (q, k) => `${QUADS.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.key === k)}`;
const GH = key('echo', 'eternity');
const COPIED = [['Kickback', 'P2'], ['Golden Years', 'P3']];

/** Round III, P1 (the only person) to place their last minion, after P2 and P3 each took a Gold space. */
function copyAllSave(stamp) {
  const seats = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }];
  let s = createGame({ seats, seed: 7, quadrants: QUADS });
  s.build = stamp;
  Object.assign(s, { round: 3, slots: {}, squats: {}, order: [], pending: null });
  delete s.echo;
  s.players.forEach(p => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); p.left = 1; p.members = []; });
  s.queue = [1, 2, 0].map(p => ({ t: 'turn', p }));
  s = resume(s);
  const go = (pid, slot) => {
    s = applyMove(s, { player: pid, option: `slot:${slot}` });
    while (s.pending?.player === pid) s = applyMove(s, { player: pid, option: s.pending.options.find(o => o.id === 'pass')?.id || s.pending.options[0].id });
  };
  go(1, key('gold', 'jv')); go(2, key('gold', 'rush'));
  if (!(s.pending?.player === 0 && s.pending.options.some(o => o.id === `slot:${GH}`))) throw new Error('copyall: setup never offered Greatest Hits');
  return { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal' }, state: s, undo: null, savedAt: Date.now() };
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
  await seedSave(page, copyAllSave(stamp));
  await page.goto(`${base}/?botDelay=300&intro=0`);
  await page.waitForSelector('.lt-wheel, [data-home="resume"]');
  if (!(await page.$('.lt-wheel'))) await page.click('[data-home="resume"]');
  await page.waitForSelector(`[data-slot="${GH}"]`);
  await page.waitForTimeout(900);

  // (c1) the hover
  const box = await (await page.$(`[data-slot="${GH}"]`)).boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  const card = await page.waitForSelector(`[data-space-card="${GH}"]`, { timeout: 4000 }).catch(() => null);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${SHOTS}/01-hover.png` });
  if (!card) fail('Greatest Hits\' hover card never opened', 'c1');

  // (c2) take it, answer its choices as a person would
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  await page.waitForFunction(() => JSON.parse(localStorage.getItem('patrons.v4.local')).state.players[0].left === 0, null, { timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(600);
  for (let k = 0; k < 12; k++) {
    const st = await page.evaluate(() => JSON.parse(localStorage.getItem('patrons.v4.local')).state.pending);
    if (!st || st.player !== 0 || st.kind !== 'choose') break;
    await page.screenshot({ path: `${SHOTS}/02-choice-${k + 1}.png` });
    await answerChoice(page, { timeout: 2000 });
    await page.waitForTimeout(500);
  }
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${SHOTS}/03-after.png` });
  const log = await page.evaluate(() => JSON.parse(localStorage.getItem('patrons.v4.local')).state.log);
  const at = log.findIndex(l => /took Greatest Hits/.test(l));
  const after = at < 0 ? [] : log.slice(at);
  if (at < 0) fail('the game log never says P1 took Greatest Hits', 'c2');
  else {
    if (!after.includes("P1's Greatest Hits copies every action on Gold's spaces.")) fail(`no "P1's Greatest Hits copies every action on Gold's spaces.": ${JSON.stringify(after.slice(0, 12))}`, 'c2');
    for (const [n, who] of COPIED) if (!after.some(l => l.startsWith(`P1 copied ${n} (${who}'s)`))) fail(`no "P1 copied ${n} (${who}'s)": ${JSON.stringify(after.slice(0, 12))}`, 'c2');
  }

  // (c3) the Chronicle
  await page.click('.lt-menu .menu-glyph').catch(() => {});
  await page.click('.lt-menu .log-btn').catch(() => {});
  const chron = await page.waitForSelector('.lt-chron', { timeout: 4000 }).catch(() => null);
  if (chron) {
    const text = await page.evaluate(() => document.querySelector('.lt-chron').innerText);
    for (const [n, who] of COPIED) if (!new RegExp(`copied ${who}'s ${n}`).test(text)) fail(`the Chronicle doesn't carry the copy of ${n}`, 'c3');
    await page.screenshot({ path: `${SHOTS}/04-chronicle.png` });
  } else fail('the Chronicle did not open', 'c3');
  await ctx.close();
} finally { await browser.close(); }
if (errors.length) fail(errors.join(' | '), 'pageerror');
if (fails.length) { console.error(`copyall: ${fails.length} failure(s)\n${fails.join('\n')}`); process.exit(1); }
console.log('copyall: ok');
