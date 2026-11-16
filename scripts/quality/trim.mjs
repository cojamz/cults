// Trim a v4-critique seat sheet around one card: full blocks where it is named, the table view on its recruit turn, the next turn and every 4th kept turn, one-line summaries for the rest.
export function trim(sheet, name) {
  const re = new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  const lines = sheet.split('\n'), blocks = [];
  let cur = { head: [], lines: [] };
  for (const l of lines) { if (/^(### Move|## Round|## End)/.test(l)) { blocks.push(cur); cur = { head: [l], lines: [] }; } else cur.lines.push(l); }
  blocks.push(cur);
  const outL = [];
  let afterRecruit = false, dropped = 0, kept = 0;
  for (const b of blocks) {
    const h = b.head[0] || '';
    if (!h || /^## (Round|End)/.test(h)) { // header, round headers, end: keep, but trim Meanwhile lines
      if (h) outL.push(h);
      for (const l of b.lines) { if (/^- /.test(l) && !re.test(l) && !/^## End/.test(h) && !/Round .* begins|contest|wins|won/i.test(l) && h) { dropped++; continue; } outL.push(l); }
      continue;
    }
    let inFence = false; const outside = [];
    for (const l of b.lines) { if (l.startsWith('```')) { inFence = !inFence; continue; } if (!inFence) outside.push(l); }
    const mentions = outside.some(l => re.test(l) && !/^\*\*Meanwhile/.test(l));
    const recruited = outside.some(l => /^Result:/.test(l) && new RegExp(`recruited ${re.source}`, 'i').test(l));
    if (mentions || recruited || afterRecruit === 'next') {
      // the table view (several thousand characters) only where it matters: the recruit turn, the turn after, and
      // every 4th kept turn; elsewhere the decision and result alone
      const table = recruited || afterRecruit === 'next' || (kept++ % 4 === 0);
      let f = false; outL.push(h, ...b.lines.filter(l => { if (l.startsWith('```')) { f = !f; return table; } return table || !f; }));
      if (!table) outL.push('(table view left out on this turn)');
      afterRecruit = recruited ? 'next' : (afterRecruit === 'next' ? true : afterRecruit);
    } else {
      const pick = outside.find(l => /PICKED/.test(l)) || '', res = outside.find(l => /^Result:/.test(l)) || '';
      const mw = outside.filter(l => /^- /.test(l) && re.test(l));
      outL.push(`${h} (in brief) ${pick.replace(/^- \*\*▶ PICKED:\*\* /, 'picked: ')}${res ? ` → ${res.replace(/^Result: /, '')}` : ''}`.slice(0, 400), ...mw);
      dropped += outside.filter(l => /^- /.test(l) && !re.test(l)).length;
    }
  }
  return outL.join('\n').replace(/\n{3,}/g, '\n\n') + `\n\n(${dropped} rival log lines and option lines that don't name ${name} were left out; the .full.md file has everything.)\n`;
}
