// One-Line Office Joke Laugh-Off — program/v1 entry.
// Writes a single original one-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const JOKE =
  "My performance review said I 'thrive under pressure,' which is HR for 'we will never hire anyone to help you.'";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir; // paths are resolved relative to this script, never process.cwd()

// The sealed gate requires 1-200 UTF-8 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry line is ${JOKE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
