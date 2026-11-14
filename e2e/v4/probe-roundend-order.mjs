// Probe (round-end order, Nov 6): seeds round I with Cheerleaders, Sore Loser, two Mobs and Victors in the cults, plays
// to the round's end and screenshots each step the Reckoning heads, then the round's card. Server: $V4_URL; shots: $OUT.
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { createGame, applyMove, chooseBotMove } from '../../src/engine/v4/index.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { answerChoice } from './lib/answer.mjs';

const base = process.env.V4_URL, OUT = process.env.OUT || '/tmp/roundend-order';
mkdirSync(OUT, { recursive: true });
const seats = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
let s = createGame({ seats, seed: Number(process.env.SEED || 5) });
s.build = buildStamp();
const rand = seededRandom(5);
for (let n = 0; n < 4000 && !(s.round === 1 && s.pending && s.pending.kind === 'place' && s.pending.player === 0); n++) s = applyMove(s, chooseBotMove(s, rand));
s = JSON.parse(JSON.stringify(s));
const taken = new Set(s.players.flatMap(p => p.members));
const give = (pid, def) => {
  const c = Object.values(s.cards).find(x => x.def === def && !taken.has(x.uid));
  const uid = c ? c.uid : Math.max(...Object.keys(s.cards).map(Number)) + 1;
  if (!c) s.cards[uid] = { uid, def };
  for (const k of Object.keys(s)) if (Array.isArray(s[k]) && s[k].includes(uid) && k !== 'members') s[k] = s[k].filter(x => x !== uid);
  taken.add(uid);
  s.players[pid].members.push(uid);
};
give(0, 'benders.cheerleaders'); give(2, 'benders.sorelosers'); give(1, 'red.mob'); give(3, 'benders.victors');
const browser = await launchBrowser({ executablePath: browserPath });
const page = await browser.newPage({ viewport: { width: 1270, height: 700 } });
const errs = [];
page.on('pageerror', e => errs.push(e.message));
await seedSave(page, { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })) }, state: s, undo: null, savedAt: Date.now() });
await page.goto(`${base}/?intro=0&sound=off&botDelay=40`);
await (await page.waitForSelector('[data-home="resume"]', { timeout: 8000 })).click();
await page.waitForSelector('.app.game', { timeout: 10000 });
const t0 = Date.now();
while (!(await page.$('.lt-reckon')) && Date.now() - t0 < 150000) {
  if (await answerChoice(page, { timeout: 600, avoid: [/^release:/] }).catch(() => null)) continue;
  let ok = false;
  for (const el of await page.$$('[data-option]:not([disabled])')) {
    const id = await el.getAttribute('data-option').catch(() => null);
    if (!id || id.startsWith('toggle:') || id === 'back' || id.startsWith('release:')) continue;
    try { await el.click({ timeout: 600 }); ok = true; break; } catch { /* gone */ }
  }
  if (!ok) await page.waitForTimeout(80);
}
let k = 0, last = '';
while (!(await page.$('[data-next-round]')) && k < 400) {
  const head = await page.$eval('[data-reckon-phase]', e => e.closest('.reckon-head').innerText).catch(() => '');
  const verdict = await page.$eval('.reckon-verdict.on', e => e.innerText).catch(() => '');
  const key = head + verdict;
  if (head && key !== last) { last = key; await page.screenshot({ path: `${OUT}/reckon-${String(k).padStart(3, '0')}.png` }); console.log('HEAD', head.replace(/\n+/g, ' | ')); }
  k++;
  await page.waitForTimeout(120);
}
await page.waitForTimeout(700);
await page.screenshot({ path: `${OUT}/summary.png` });
console.log('ERRS', errs.join(' ; ') || 'none');
await browser.close();
