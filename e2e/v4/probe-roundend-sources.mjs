// Probe (round-end follower sources, Nov 26; Cory: "little plus followers get added to people's score at the end of
// the round, and I have no idea where they're coming from"): seeds round I with every live Round End follower member
// (Harlequin, Pilgrims, Clan Chief, Bannermen) and a Round Start one (Spice Merchant), plays to the round's end and
// films the table from round I through the Reckoning and the round card into round II's start, logging every seat's
// follower total each time one changes. Server: $V4_URL; shots: $OUT.
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { createGame, applyMove, chooseBotMove } from '../../src/engine/v4/index.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { answerChoice } from './lib/answer.mjs';

const base = process.env.V4_URL, OUT = process.env.OUT || '/tmp/roundend-sources';
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
  for (const k of ['pile', 'shop', 'discard']) s[k] = s[k].filter(x => x !== uid); for (const r of Object.keys(s.waiting || {})) s.waiting[r] = s.waiting[r].filter(x => x !== uid); // card lists only: order and firstOrder hold player ids
  taken.add(uid);
  s.players[pid].members.push(uid);
};
give(0, 'yellow.cosmopolitans'); give(0, 'yellow.tourists'); give(1, 'yellow.pilgrims'); give(2, 'red.clan'); give(3, 'red.purists');
const browser = await launchBrowser({ executablePath: browserPath });
const page = await browser.newPage({ viewport: { width: 1270, height: 700 } });
const errs = [];
page.on('pageerror', e => errs.push(e.message));
await seedSave(page, { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })) }, state: s, undo: null, savedAt: Date.now() });
await page.goto(`${base}/?intro=0&sound=off&botDelay=40`);
await (await page.waitForSelector('[data-home="resume"]', { timeout: 8000 })).click();
await page.waitForSelector('.app.game', { timeout: 10000 });
const totals = () => page.$$eval('.lt-seat[data-pid]', els => els.map(e => `${e.dataset.pid}:${e.querySelector('[data-followers]')?.dataset.followers ?? '?'}`).join(' ')).catch(() => '');
const caption = () => page.$eval('.reckon-head', e => e.innerText.replace(/\s+/g, ' ').slice(0, 140)).catch(() => '');
let frame = 0, lastT = '';
const snap = async tag => {
  const t = `${await totals()} | ${await caption()}`;
  if (t === lastT && !tag) return;
  lastT = t;
  const f = String(frame++).padStart(3, '0');
  await page.screenshot({ path: `${OUT}/${f}${tag ? '-' + tag : ''}.png` });
  console.log(f, tag || '', t);
};
const t0 = Date.now();
while (!(await page.$('.lt-reckon')) && Date.now() - t0 < 150000) {
  await snap();
  if (await answerChoice(page, { timeout: 600, avoid: [/^release:/] }).catch(() => null)) continue;
  let ok = false;
  for (const el of await page.$$('[data-option]:not([disabled])')) {
    const id = await el.getAttribute('data-option').catch(() => null);
    if (!id || id.startsWith('toggle:') || id === 'back' || id.startsWith('release:')) continue;
    try { await el.click({ timeout: 600 }); ok = true; break; } catch { /* gone */ }
  }
  if (!ok) await page.waitForTimeout(80);
}
await snap('reckon-open');
for (let k = 0; k < 400 && !(await page.$('[data-next-round]')); k++) { await snap(); await page.waitForTimeout(100); }
await page.waitForTimeout(700);
await snap('summary');
await page.click('[data-next-round]').catch(() => {});
// round II's start, frame by frame: the Round Start followers fly in named (Spice Merchant)
for (let k = 0; k < 30; k++) { await page.screenshot({ path: `${OUT}/start-${String(k).padStart(2, '0')}.png` }); await page.waitForTimeout(60); }
await snap('round2');
console.log('ERRS', errs.join(' ; ') || 'none');
await browser.close();
