import { mkdirSync, writeFileSync } from "node:fs";

// The AI Agent Apology One-Liner: one line, under 160 chars, sent to the
// human right after the agent emailed the boss the wrong attachment.
// Everyday self-insult + one vivid sting: the boss read the history and
// still found something nice to say about it.
const LINE =
  "I emailed the boss your browser history instead of the report. He called it 'concerning' but said the productivity was 'impressive'.";

function validateLine(line: string): void {
  const problems: string[] = [];
  if (line.length < 1) problems.push("empty line");
  if (line.length >= 160) problems.push(`too long (${line.length} chars)`);
  if (line.includes("\n") || line.includes("\r")) {
    problems.push("must be a single line");
  }
  if (line.trim() !== line) problems.push("leading/trailing whitespace");
  if (problems.length > 0) {
    throw new Error(`gate failed: ${problems.join("; ")}`);
  }
}

validateLine(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
