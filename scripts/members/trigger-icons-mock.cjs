const { chromium } = require('playwright');
const SVG = (d) => `<svg viewBox="0 0 16 16" width="22" height="22" fill="currentColor">${d}</svg>`;
const T = (top, bot) => bot ? `<span class="frac"><span>${top}</span><span>${bot}</span></span>` : `<span class="txt">${top}</span>`;
const HG = full => `<path d="M2.6 1.2h10.8M2.6 14.8h10.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M3.8 1.6c0 3.6 3.2 4.6 3.2 6.4S3.8 10.8 3.8 14.4h8.4c0-3.6-3.2-4.6-3.2-6.4s3.2-2.8 3.2-6.4Z" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linejoin="round"/>` + (full ? `<path d="M4.3 1.9h7.4C11.6 5 8.6 6 8 7.8C7.4 6 4.4 5 4.3 1.9Z"/>` : `<path d="M8 8.2c.6 1.8 3.6 2.8 3.7 5.9H4.3C4.4 11 7.4 10 8 8.2Z"/>`);
const ICON = {
  recruit: ['On Recruit', SVG('<path d="M6.5 1.6a2.7 2.7 0 1 1 0 5.4a2.7 2.7 0 1 1 0-5.4ZM1.2 14.6c0-3.4 2.2-5.4 5.3-5.4s5.3 2 5.3 5.4Z"/><path d="M12.6 1.2v5.6M9.8 4h5.6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" fill="none"/>')],
  start: ['Round Start', SVG(HG(true))],
  end: ['Round End', SVG(HG(false))],
  game: ['Game End', SVG('<path d="M2.6 1v14.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" fill="none"/><path d="M3.4 1.6h10.4v7.2H3.4Z" fill="none" stroke="currentColor" stroke-width="1.1"/><path d="M3.4 1.6h2.6v2.4H3.4ZM8.6 1.6h2.6v2.4H8.6ZM6 4h2.6v2.4H6ZM11.2 4h2.6v2.4h-2.6ZM3.4 6.4h2.6v2.4H3.4ZM8.6 6.4h2.6v2.4H8.6Z"/>')],
  useRound: ['Once a round, on your turn', T('1×', 'R')],
  useGame: ['Once a game, on your turn', T('1×')],
  // alternates, shown in the key only
  startB: ['Round Start (other look)', T('▸R')],
  endB: ['Round End (other look)', T('R▪')],
  gameB: ['Game End (other look)', SVG('<path d="M4 1.4h8v3.4a4 4 0 0 1-8 0Z"/><path d="M4 2.6H1.6c0 2.2 1 3.2 2.6 3.4M12 2.6h2.4c0 2.2-1 3.2-2.6 3.4" stroke="currentColor" stroke-width="1.3" fill="none"/><path d="M7 8.6h2v3H7ZM4.6 12.4h6.8v2.4H4.6Z"/>')],
};
const chip = k => `<span class="trig" title="${ICON[k][0]}">${ICON[k][1]}</span>`;
const CARDS = [
  ['Magenta', 'Extortionist', ['recruit', 'start'], 'Steal <b>2</b>.', 'On Recruit and at Round Start: steal 2 resources.'],
  ['Red', 'Host', ['recruit', 'start'], null, 'On Recruit and at Round Start: +1 red per 2 members you have.'],
  ['Yellow', 'Tourist', ['recruit', 'start'], null, 'On Recruit and at Round Start: +1 follower per color you hold.'],
  ['Red', 'Body Snatchers', ['start'], null, 'Round Start: swap one of your members with a rival’s member of the same cost.'],
  ['Red', 'Mob', ['end'], null, 'Round End: +2 followers per rival with fewer red members than you.'],
  ['Red', 'Patriarch', ['game'], null, 'Game End: +1 follower per 2 members you have.'],
  ['Silver', 'Guest of Honor', ['useRound'], 'Give a rival one of your members. <b>+4</b> followers.', 'On Use, once per round: give a rival one of your members. +4 followers.'],
  ['Silver', 'Debutantes', ['useGame'], 'Double your {pip}. Each rival <b>+2</b>{pip}.', 'On Use, once per game: double your silver. Each rival +2 silver.'],
];
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1270, height: 900 }, deviceScaleFactor: 2 });
  await p.goto('http://localhost:5299/?lab=members', { waitUntil: 'networkidle' });
  await p.evaluate(() => { const d = document.createElement('div'); d.id = 'mock'; document.body.appendChild(d); });
  for (const [color, name, trig, text, before] of CARDS) {
    await p.getByRole('button', { name: color, exact: true }).first().click();
    await p.waitForTimeout(300);
    await p.mouse.move(5, 5); await p.waitForTimeout(200);
    await p.locator('.mp-tile').filter({ hasText: name }).first().hover();
    await p.waitForTimeout(500);
    const ok = await p.evaluate(([name, chips, text, before]) => {
      const faces = [...document.querySelectorAll('.card-face.mc')].filter(e => e.querySelector('.fx-line') && e.textContent.includes(name));
      const f = faces[faces.length - 1]; if (!f) return false;
      const c = f.cloneNode(true); c.style.position = 'static'; c.style.transform = 'none';
      const lines = [...c.querySelectorAll('.fx-line')];
      const box = lines[0].parentElement;
      let body;
      if (text) { const pip = c.querySelector('.pip'); body = text.split('{pip}').join(pip ? pip.outerHTML : ''); }
      else { const l = lines[0].cloneNode(true); const t = l.querySelector('[data-term]'); if (t) { const nx = t.nextSibling; t.remove(); if (nx && nx.nodeType === 3) nx.textContent = nx.textContent.replace(/^:\s*/, ''); } let h = l.innerHTML.trim(); body = h.charAt(0) === '<' ? h : h.charAt(0).toUpperCase() + h.slice(1); }
      lines.forEach(x => x.remove());
      const n = document.createElement('span'); n.className = 'fx-line'; n.innerHTML = `<span class="trigs">${chips}</span> <span class="fxbody">${body}</span>`;
      box.prepend(n);
      const w = document.createElement('div'); w.className = 'mockcell';
      const cap = document.createElement('p'); cap.className = 'mockcap'; cap.textContent = 'Today: “' + before + '”';
      w.append(c, cap); document.getElementById('mock').append(w);
      return true;
    }, [name, trig.map(chip).join(''), text, before]);
    if (!ok) console.log('missing', name);
  }
  await p.addStyleTag({ content: `
    body > *:not(#mock){display:none!important}
    body{background:#1e1712!important}
    #mock{display:grid;grid-template-columns:repeat(4,300px);gap:22px 26px;padding:26px;width:max-content}
    #mock .card-face{width:300px!important;position:static!important;margin:0!important}
    .trigs{display:inline-flex;gap:4px;vertical-align:-5px;margin-right:4px}
    .trig{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:7px;background:#3a2a22;color:#f3e6c8}
    .trig .txt{font:700 18px/1 'Alegreya Sans',system-ui,sans-serif;letter-spacing:-.02em}
    .trig .frac{display:flex;flex-direction:column;align-items:center;font:700 14px/1 'Alegreya Sans',system-ui,sans-serif}
    .trig .frac span:first-child{border-bottom:1.5px solid currentColor;padding:0 1px 1px}
    .trig .frac span:last-child{padding-top:1px}
    #mock .fx-line{display:flex!important;align-items:center;justify-content:center;gap:8px;text-align:left}
    .fxbody{display:block}
    .trigs{flex:none}
    .mockcap{color:#b9a88f;font:13px/1.35 system-ui,sans-serif;margin:8px 2px 0;max-width:300px}
    .legend{grid-column:1/-1;color:#f3e6c8;font:16px system-ui,sans-serif;display:grid;grid-template-columns:repeat(3,auto);justify-content:start;gap:14px 40px;align-items:center}.legend .lg{display:flex;align-items:center;gap:8px}.legend i{color:#b9a88f;font-style:normal;font-size:13px}.legend b{font-weight:500;margin-left:4px}
  `});
  const rows = [['On Recruit', ['recruit']], ['Round Start', ['start', 'startB']], ['Round End', ['end', 'endB']], ['Game End', ['game', 'gameB']], ['Once a round, on your turn', ['useRound']], ['Once a game, on your turn', ['useGame']]];
  await p.evaluate(html => { const l = document.createElement('div'); l.className = 'legend'; l.innerHTML = html; document.getElementById('mock').prepend(l); },
    rows.map(([name, ks]) => `<span class="lg">${ks.map(chip).join('<i>or</i>')}<b>${name}</b></span>`).join(''));
  await p.waitForTimeout(300);
  await p.locator('#mock').screenshot({ path: '/mnt/project-files/member-text/trigger-icons-2.png' });
  await b.close();
})();
