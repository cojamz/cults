// Second pass after names-rename.mjs: an old name inside a longer string or template in its card file (log lines,
// prompts: `${owner.name}'s Caterer: ...`) becomes the new name. Comments are left as history. Skips a match that is
// already part of the new name (Merchant inside "Gold Merchant") or of a longer name (Grand Host).
//   node scripts/names-strings.mjs design/names/members-map.json [--dry] [files...]
import { readFileSync, writeFileSync } from 'node:fs';
const [map, ...rest] = process.argv.slice(2);
const dry = rest.includes('--dry'), only = rest.filter(a => a !== '--dry');
const spec = JSON.parse(readFileSync(map, 'utf8'));
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
for (const [file, names] of Object.entries(spec)) {
  if (only.length && !only.includes(file)) continue;
  const path = `src/engine/v4/content/${file}`;
  const lines = readFileSync(path, 'utf8').split('\n');
  let n = 0;
  const out = lines.map((line, i) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return line;
    const cut = line.search(/(?<![:'"`\w])\/\/(?![^'"`]*['"`]\s*[,)\]}])/); // a trailing comment, not one inside a string
    let code = cut >= 0 ? line.slice(0, cut) : line; const tail = cut >= 0 ? line.slice(cut) : '';
    for (const [from, to] of Object.entries(names)) {
      if (from === to) continue;
      const re = new RegExp(`(?<![\\w-])(?<!\\b[A-Z][a-z]+ )${esc(from)}(?![\\w-])(?! [A-Z][a-z])`, 'g');
      code = code.replace(re, (m, at, s) => {
        const pre = s.slice(Math.max(0, at - to.length), at + m.length);
        if (pre.endsWith(to)) return m; // already the new name
        // only inside a string or template: an odd count of quotes of one kind before it on this line
        const before = s.slice(0, at);
        const inStr = ["'", '"', '`'].some(q => (before.split(q).length - 1) % 2 === 1);
        if (!inStr) return m;
        n++; if (dry) console.log(`${file}:${i + 1}: ${from} -> ${to} | ${line.trim().slice(0, 140)}`);
        return to;
      });
    }
    return code + tail;
  });
  if (n) console.log(`${file}: ${n} strings`);
  if (!dry) writeFileSync(path, out.join('\n'));
}
