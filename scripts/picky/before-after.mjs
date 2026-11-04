// Before/after picture of one table in two published builds (picky bot, Nov 4).
// node scripts/picky/before-after.mjs <before main sha> <after main sha> <out.png> [table]
// Each build's play/ comes from main at that commit, served locally; a new game on the same table, the setup's same
// seed, opened to its first turn; the two shots stacked with their versions printed above each.
import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdirSync, rmSync, readFileSync, existsSync, statSync, mkdtempSync } from 'node:fs';
import { join, extname } from 'node:path';
import { tmpdir } from 'node:os';

const [before, after, out, table = 'market,trading,silver,yellow'] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.webp': 'image/webp' };
async function serve(sha) {
  const dir = mkdtempSync(join(tmpdir(), 'ba-'));
  execSync(`git archive ${sha} play | tar -x -C ${dir}`);
  const server = createServer((req, res) => {
    let p = join(dir, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
    if (!p.startsWith(dir) || !existsSync(p)) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'content-type': TYPES[extname(p)] || 'application/octet-stream' }); res.end(readFileSync(p));
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const version = JSON.parse(readFileSync(join(dir, 'play/build.json'), 'utf8')).version;
  return { server, version, url: `http://127.0.0.1:${server.address().port}/play/` };
}
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const shots = [];
for (const sha of [before, after]) {
  const s = await serve(sha);
  const page = await browser.newPage({ viewport: { width: 1270, height: 700 }, deviceScaleFactor: 2 });
  await page.goto(`${s.url}?intro=0&sound=off&speed=quick&members=pictures&table=${table}`);
  await page.click('[data-home="local"]'); await page.waitForSelector('[data-start]');
  await page.evaluate(() => { Math.random = (() => { let x = 7; return () => ((x = (x * 16807) % 2147483647) / 2147483647); })(); });
  await page.click('[data-start]'); await page.waitForSelector('.app.game');
  await page.waitForFunction(() => document.querySelector('.app.game')?.dataset.yours === '1', null, { timeout: 60000 }).catch(() => {});
  await page.waitForTimeout(1500);
  shots.push({ version: s.version, png: (await page.screenshot()).toString('base64') });
  await page.close(); s.server.close();
}
const page = await browser.newPage({ viewport: { width: 1270, height: 1460 }, deviceScaleFactor: 1 });
await page.setContent(`<body style="margin:0;background:#222;color:#eee;font:600 18px sans-serif">${shots.map(s => `<div style="padding:4px 10px">${s.version}${s === shots[0] ? ' (before)' : ' (after)'}</div><img src="data:image/png;base64,${s.png}" style="width:1270px;display:block">`).join('')}</body>`);
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(out);
