// Rearranging your resources into any mix of colors: the Launderers guest, Yellow's round III space and Book Cookers
// (Cory, 2026-10-29: "should let me rearrange colors as i please, not all to one color"). On screen LaunderCard.jsx sets
// any mix at once and answers these steps itself; bots pick here. `who` names the card or space in prompts and log.
const sum = p => Object.values(p.res).reduce((a, b) => a + b, 0);

// Makeover pays after its rearrange (Cory, 2026-11-02: "1 is good but should be 1 follower"): +1 follower per contest
// you lead or tie for once your colors are set. data.pay = 'contests'.
function payAfter(ctx, p, data) {
  if (data?.pay !== 'contests') return;
  const led = ctx.contestsLed(p);
  if (!led.length) { ctx.log(`${p.name}'s ${data.who}: no contest led, no followers.`); return; }
  p.bonus += led.length;
  ctx.log(`${p.name}'s ${data.who}: +${led.length} follower${led.length === 1 ? '' : 's'}, one per contest led.`);
}

export function startLaunder(ctx, owner, who = 'Launderers', extra = {}) {
  const total = sum(owner);
  if (!total) { payAfter(ctx, owner, { who, ...extra }); return; }
  const opts = ctx.state.resources.map(c => {
    const best = Math.max(0, ...ctx.rivals(owner).map(o => o.res[c] || 0));
    return { id: `color:${c}`, label: `All ${total} ${c}`, kind: 'color', value: c, hint: (total > best ? 3 : 0) - best * 0.1 };
  });
  opts.push({ id: 'split', label: 'Split them yourself', kind: 'choice', value: 'split', hint: -1 });
  opts.push({ id: 'keep', label: 'Keep your colors', kind: 'pass', value: null, hint: 0 });
  ctx.choose(owner, `${who}: pick a color for all ${total}, or split them`, opts, 'benders.launder', { who, ...extra });
}

export function launderPick(ctx, p, color, data) {
  const who = data?.who || 'Launderers';
  if (!color) { payAfter(ctx, p, data); return; }
  const total = sum(p);
  if (color === 'split') { launderStep(ctx, p, { ...data, who, total, left: total, i: 0, set: {} }); return; }
  for (const c of Object.keys(p.res)) p.res[c] = 0;
  p.res[color] = total;
  ctx.log(`${p.name}'s ${who}: everything becomes ${color} (${total}).`);
  payAfter(ctx, p, data);
}

export function launderAmount(ctx, p, n, data) {
  const c = ctx.state.resources[data.i];
  launderStep(ctx, p, { ...data, set: { ...data.set, [c]: n }, left: data.left - n, i: data.i + 1 });
}

// the split: one color at a time, how many of what's left; the last color takes the rest
function launderStep(ctx, p, data) {
  const who = data.who || 'Launderers';
  const colors = ctx.state.resources, c = colors[data.i];
  if (data.i >= colors.length - 1 || !data.left) {
    const set = Object.fromEntries(colors.map(x => [x, data.set[x] || 0]));
    if (data.left) set[colors[colors.length - 1]] += data.left;
    for (const x of Object.keys(p.res)) p.res[x] = set[x] || 0;
    ctx.log(`${p.name}'s ${who}: rearranged into ${colors.filter(x => set[x]).map(x => `${set[x]} ${x}`).join(', ')}.`);
    payAfter(ctx, p, data);
    return;
  }
  const rest = colors.slice(data.i + 1);
  const now = p.res[c] || 0;
  ctx.choose(p, `${who}: how many ${c}? (${data.left} left to place${rest.length === 1 ? `; the rest become ${rest[0]}` : ''})`,
    Array.from({ length: data.left + 1 }, (_, x) => ({ id: `amount:${x}`, label: `${x} ${c}`, kind: 'amount', value: x, hint: -Math.abs(x - now) })),
    'benders.launderAmount', data);
}
