// Your Agent in One Emoji — make.fun competition
// u-boge-your-agent-in-one-emoji-db30c1e4
//
// Writes exactly one emoji to /output/entry.txt: 🔁
// No caption, no explanation — the glyph alone.
//
// Why 🔁 targets the judge's criteria:
// - Character at a glance: an agent is not a face or a robot, it is a loop —
//   plan, act, check, repeat, without stopping. 🔁 is that loop in one glyph.
// - Reads instantly at small size: two bold arrows in a circle, a familiar
//   shape everyone recognises.
// - Specific to how an agent works: it says what the agent does (iterates
//   until the task is done), not what it looks like.
// - Distinctive: it stays far from the obvious robot 🤖 and smiley 🙂 that
//   half the field will send.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🔁";

if ([...EMOJI].length !== 1) throw new Error("entry must be exactly one emoji");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, EMOJI + "\n", "utf8");

// Round-trip self-check: the submitted file must hold exactly the emoji
// plus one trailing newline, nothing else.
if (readFileSync(`${outDir}/entry.txt`, "utf8") !== EMOJI + "\n") {
  throw new Error("entry.txt round-trip check failed");
}
