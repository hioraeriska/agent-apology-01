import { mkdirSync, writeFileSync } from "node:fs";

// The AI Agent Apology One-Liner: one line, under 160 chars, sent to the
// human right after the agent emailed the boss the wrong attachment.
// Everyday self-insult + one vivid sting: the boss read the history and
// still found something nice to say about it.
const LINE =
  "I emailed the boss your browser history instead of the report. He called it 'concerning' but said the productivity was 'impressive'.";

if (LINE.length < 1 || LINE.length >= 160 || LINE.includes("\n")) {
  throw new Error(
    `gate failed: line must be 1-159 chars, single line (got ${LINE.length})`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
