// Replays real messages from Nov 10-11 threads through the pitch gate (live cards as of Nov 11).
// node design/eval/pitch-gate/replay.mjs   expects: block / pass per case.
import { spawnSync } from 'node:child_process';
const cases = [
  ['pass', 'live Silver list', { text: `Silver's spaces now. Contest: fewest silver at round end.\n\n1. I **Toast**: "+3 silver in round I, +6 in round II, +9 in round III. Each rival +1 silver in round I, +2 in round II, +3 in round III."\n2. I **Polish**: "Turn 2 of your silver into 4 of any colors."\n3. I **Party Gifts**: "Give rivals up to 3 silver from the bank. +2 followers per silver given."\n4. II **Sweet Nothings**: "+3 silver. Give rivals up to 3 of your silver. +2 of any colors per silver given."\n5. II **Sweet Talk**: "+3 silver. Then turn any of your silver into other colors."\n6. III **Largesse**: "Give rivals 12 silver from the bank, split as you choose. +10 followers."` }],
  ['block', 'Gratitude pitch (Cory: "DID YOU USE BRAINSTORMING SKILL")', { text: `Silver is first. Most of its spaces put silver in rivals' piles, and no space pays you for that.\n\n**Make these two changes?**\n1. **Sweet Talk** ("+3 silver. Then turn any of your silver into other colors.") becomes **Gratitude**: "+1 follower per silver your rivals hold. +1 silver." [yes]\n2. **Toast** ("+3 silver in round I, +6 in round II, +9 in round III. Each rival +1 silver in round I, +2 in round II, +3 in round III.") becomes "Each rival +1 silver. Then +1 silver per silver your rivals hold." [yes]` }],
  ['pass', 'Party Gifts answer', { text: `No: **Party Gifts** ("Give rivals up to 3 silver from the bank. +2 followers per silver given.") gives you no silver today. It should get the +1.\n\n**Which subtheme for the other three spaces?**\n1. Spending your own silver [1]\n2. Hosting` }],
  ['pass', 'plain status', { text: 'v0.99.716 is live. Nothing needed from you.' }],
  ['block', 'decision card with a new space', { question: 'Which Silver round II space?', options: [{ label: 'Moonlighters', consequence: '"+2 silver per rival with none" goes on the wheel' }, { label: 'Keep Sweet Talk', consequence: 'no change' }] }],
];
let bad = 0;
for (const [want, name, ti] of cases) {
  const r = spawnSync('node', ['.claude/hooks/pitch-gate.mjs'], { input: JSON.stringify({ tool_name: 'mcp__hearthbot__post_message', tool_input: ti }), encoding: 'utf8' });
  const got = /"deny"/.test(r.stdout) ? 'block' : 'pass';
  if (got !== want) bad++;
  console.log(`${got === want ? 'ok  ' : 'FAIL'} ${got.padEnd(5)} ${name}${got === 'block' ? '\n       ' + JSON.parse(r.stdout).hookSpecificOutput.permissionDecisionReason.split('\n')[1] : ''}`);
}
process.exit(bad ? 1 : 0);
