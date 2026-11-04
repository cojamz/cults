// one-off probe: a Body Snatchers card with N of your members, at 1270x700, measured
import { chromium } from 'playwright';
import { defById } from '../src/engine/v4/index.js';
const N = Number(process.argv[2] || 6), OUT = process.argv[3] || '/tmp/ptprobe';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
const page = await b.newPage({ viewport: { width: 1270, height: 700 } });
await page.goto('http://localhost:5391/?botDelay=60');
await page.click('[data-home="local"]'); await page.waitForSelector('[data-start]');
for (let i = 0; i < 6; i++) await page.locator(`[data-seat-row="${i}"]`).locator('button', { hasText: new RegExp('^' + (i === 0 ? 'Person' : i < 5 ? 'Bot' : 'Empty') + '$') }).click();
await page.locator('button', { hasText: /^Custom$/ }).click();
for (const el of await page.$$('[data-sphere][aria-pressed="true"]')) await el.click();
for (const c of ['red', 'silver', 'trading', 'echo', 'thieves']) await page.click(`[data-sphere="${c}"]`);
await page.click('[data-start]');
const intro = await page.waitForSelector('[data-intro]', { timeout: 4000 }).catch(() => null);
if (intro) await page.click('[data-intro-skip]');
await page.waitForSelector('.lt-seat[data-pid]');
for (let t = 0; t < 200; t++) {
  const r = await page.$eval('.app.game', e => e.dataset.round + e.dataset.phase).catch(() => '');
  if (r === '1place' && await page.$('[data-option^="slot"]:not([disabled])')) break;
  const o = await page.$('[data-option]:not([disabled])'); if (o) await o.click().catch(() => {});
  await page.waitForTimeout(150);
}
await page.waitForTimeout(500);
const v = await page.evaluate(() => JSON.parse(localStorage.getItem('patrons.v4.local')));
const s = v.state;
const cost = u => { const d = defById(s.cards[u].def); return (d.s || 0) + (d.w || 0); };
const free = [...s.pile, ...Object.values(s.waiting || {}).flat()];
const byCost = {}; for (const u of free) (byCost[cost(u)] ||= []).push(u);
const mine = [], theirs = [];
for (const c of Object.keys(byCost).sort((a, b) => byCost[b].length - byCost[a].length)) {
  for (const u of byCost[c]) { if (mine.length < N && mine.filter(x => cost(x) == c).length < 2) mine.push(u); else if (theirs.filter(x => cost(x) == c).length < 1 && mine.some(x => cost(x) == c)) theirs.push(u); }
}
for (const id of (process.env.FIRST || '').split(',').filter(Boolean)) { const u = free.find(x => s.cards[x].def === id && !mine.includes(x) && !theirs.includes(x)); if (u != null) { mine.unshift(u); const t = free.find(x => x !== u && cost(x) === cost(u) && !mine.includes(x) && !theirs.includes(x)); if (t != null) theirs.push(t); } }
const take = u => { for (const arr of [s.pile, ...Object.values(s.waiting)]) { const i = arr.indexOf(u); if (i >= 0) arr.splice(i, 1); } };
mine.forEach(u => { take(u); s.players[0].members.push(u); });
theirs.forEach((u, i) => { take(u); s.players[1 + (i % 4)].members.push(u); });
const opts = [];
for (const a of mine) for (const t of theirs) if (cost(a) === cost(t)) opts.push({ id: `trade:${a}:${t}`, label: 'x', kind: 'trade', value: [a, t] });
opts.push({ id: 'none', label: 'Don’t swap', kind: 'pass', value: null });
const prompt = 'Body Snatchers: swap one of your members with a rival’s of the same cost?';
s.queue.unshift({ t: 'choose', p: 0, prompt, options: opts, h: 'red.snatch', data: null });
s.pending = { kind: 'choose', player: 0, prompt, options: opts };
while (s.shop.length < Number(process.env.SHOP || 8) && s.pile.length) s.shop.push(s.pile.shift());
v.undo = null;
await page.evaluate(v => localStorage.setItem('patrons.v4.local', JSON.stringify(v)), v);
await page.reload();
await page.waitForSelector(".gift-card", { timeout: 10000 }).catch(async () => { await page.screenshot({ path: OUT + "/fail.png" }); console.log("nocard", await page.$eval(".app.game", e => e.dataset.round + e.dataset.phase).catch(() => "no game")); process.exit(1); });
await page.waitForTimeout(1200);
await page.mouse.move(640, 4);
const m = await page.evaluate(() => {
  const c = document.querySelector('.gift-card'), r = c.getBoundingClientRect();
  const cut = [...c.querySelectorAll('.gc-name')].filter(e => e.scrollWidth > e.clientWidth + 1 || e.getBoundingClientRect().right > e.closest('.gc-item').getBoundingClientRect().right + 1).map(e => e.textContent);
  return { cut, card: [Math.round(r.left), Math.round(r.right)], dense: c.dataset.dense, items: [...c.querySelectorAll('.gc-row[data-row="1"] .gc-item')].map(e => { const q = e.getBoundingClientRect(); return [e.innerText.split('\n').pop(), Math.round(q.left), Math.round(q.right)]; }) };
});
console.log(JSON.stringify(m));
await page.screenshot({ path: `${OUT}/trade-${N}.png` });
await b.close();
