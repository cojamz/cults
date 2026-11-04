// In-page readers for the picky UI bot (scripts/picky/picky.mjs). Each runs in the browser and returns plain facts;
// scripts/picky/checks.mjs judges them. Self-contained functions: page.evaluate ships their source, not their scope.

// The open hover card (or, called on an element, that element): its text by sentence, every member card in it with
// its one-line rule and full rule split out, and every symbol with the words it stands for.
export const READ_CARD = el => {
  const root = el instanceof Element ? el : document.querySelector('[data-hover-layer][data-open="1"]');
  if (!root) return null;
  const vis = e => { for (let a = e; a && a !== document.body; a = a.parentElement) { const s = getComputedStyle(a); if (s.display === 'none' || s.visibility === 'hidden') return false; } return true; };
  // the text a person reads: hidden words (a symbol's spelled-out twin, screen-reader text) left out
  const shown = node => {
    if (!node) return '';
    const parts = [];
    const walk = n => {
      if (n.nodeType === 3) { parts.push(n.textContent); return; }
      if (n.nodeType !== 1) return;
      const e = n;
      if (e.matches('svg[data-res-glyph]')) { parts.push(` ⟨${e.getAttribute('data-res-glyph')} dot⟩ `); return; }
      if (e.matches('svg[data-member-glyph]')) { parts.push(` ⟨${e.getAttribute('data-member-glyph')} member⟩ `); return; }
      if (e.matches('svg.follower-mark, svg[class*="follower"]')) { parts.push(' ⟨follower⟩ '); return; }
      if (e instanceof SVGElement || e.matches('title, style, script')) return;
      const s = getComputedStyle(e), r = e.getBoundingClientRect();
      if (s.display === 'none' || s.visibility === 'hidden' || (r.width <= 1 && r.height <= 1 && s.overflow === 'hidden') || /inset\(50%\)/.test(s.clipPath) || e.classList.contains('mem-words') || e.classList.contains('mc-sr')) return;
      const block = !/^inline/.test(s.display) && s.display !== 'contents';
      if (block) parts.push('\n');
      for (const c of e.childNodes) walk(c);
      if (block) parts.push('\n');
    };
    walk(node);
    return parts.join('').replace(/[ \t]+/g, ' ').replace(/ *\n[\s]*/g, '\n').trim();
  };
  const glyphs = node => node ? [...node.querySelectorAll('svg[data-res-glyph], svg[data-member-glyph]')].filter(vis).map(g => ({
    kind: g.hasAttribute('data-res-glyph') ? 'dot' : 'member', color: g.getAttribute('data-res-glyph') || g.getAttribute('data-member-glyph'),
    says: (g.closest('[title]') && g.closest('[title]') !== root ? g.closest('[title]').getAttribute('title') : '') || '',
  })) : [];
  const members = [...root.querySelectorAll('.card-face.mc')].concat(root.matches('.card-face.mc') ? [root] : []).map(mc => {
    const line = mc.querySelector('.mc-line');
    const full = mc.querySelector('.mc-text');
    const cost = mc.querySelector('.mc-cost');
    return {
      id: mc.getAttribute('data-card'),
      name: (mc.querySelector('.mc-name')?.textContent || '').trim(),
      price: mc.querySelector('.mc-price') ? Number(mc.querySelector('.mc-price').textContent) : null,
      costDots: cost ? cost.querySelectorAll('svg[data-res-glyph]').length : null,
      costText: shown(cost),
      line: line ? shown(line) : null,
      lineRaw: line ? line.textContent.trim() : null, // the words under the symbols too
      lineGlyphs: glyphs(line),
      full: full ? shown(full) : null,
      fullRaw: full ? full.textContent.trim() : null,
      fullGlyphs: glyphs(full),
      text: shown(mc),
    };
  });
  const r = root.getBoundingClientRect();
  return {
    kind: root.getAttribute('data-kind') || root.firstElementChild?.className?.split?.(' ')[0] || '',
    title: (root.querySelector('h3, h4, .mc-name, b')?.textContent || '').trim().slice(0, 60),
    text: shown(root),
    rect: { left: r.left, top: r.top, right: r.right, bottom: r.bottom, w: r.width, h: r.height },
    vw: document.documentElement.clientWidth, vh: document.documentElement.clientHeight,
    members,
  };
};

// Every seat as shown, plus the saved game the table is showing (localStorage), for the numbers check.
export const READ_SEATS = () => {
  let save = null;
  try { save = JSON.parse(localStorage.getItem('patrons.v4.local') || 'null'); } catch { /* */ }
  const seats = [...document.querySelectorAll('section.lt-cult-seat[data-seat]')].map(sec => ({
    pid: Number(sec.getAttribute('data-seat')),
    name: (sec.querySelector('.cs-name')?.textContent || '').trim().slice(0, 30),
    followers: sec.querySelector('[data-followers]') ? Number(sec.querySelector('[data-followers]').getAttribute('data-followers')) : null,
    followersShown: (sec.querySelector('[data-followers]')?.textContent || '').trim(),
    members: sec.querySelector('[data-members]') ? Number(sec.querySelector('[data-members]').getAttribute('data-members')) : null,
    res: Object.fromEntries([...sec.querySelectorAll('.cs-stack[data-res]')].map(s => [s.getAttribute('data-res'), Number(s.querySelector('b.num')?.textContent)])),
    picking: !!sec.closest('[data-pick]') || !!sec.querySelector('.cs-took'),
  }));
  return { seats, state: save && save.state ? save.state : null };
};

// The shop's cards as they sit (no hover): name, price on the face, the face's one-line rule.
export const READ_SHOP_FACES = () => [...document.querySelectorAll('.lt-shop .card[data-uid]')].map(c => ({
  uid: c.getAttribute('data-uid'),
  def: c.getAttribute('data-def') || '',
  text: (c.innerText || '').replace(/\s+/g, ' ').trim(),
  line: c.querySelector('[data-emoji-line]') ? c.querySelector('[data-emoji-line]').textContent.trim() : null,
  dots: [...c.querySelectorAll('[data-emoji-line] svg[data-res-glyph], [data-emoji-line] svg[data-member-glyph]')].map(g => (g.hasAttribute('data-res-glyph') ? 'dot:' : 'member:') + (g.getAttribute('data-res-glyph') || g.getAttribute('data-member-glyph'))),
}));
