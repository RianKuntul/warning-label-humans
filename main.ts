// Warning Label for Humans: One Line, Big Laugh
// make.fun competition: u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85
//
// Writes the safety warning label that should come printed on every human
// being to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output/entry.txt).
// The label is a single line of at most 160 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_LENGTH = 160;

// The label: written the way a real printed warning label reads —
// "Contents under pressure" plus handling instructions — aimed at the
// most recognisable human failure mode: running on almost no sleep,
// fuelled by caffeine, and dangerous before coffee. "This human" is
// dropped: the label is printed on a human, so it goes without saying.
const LABEL =
  "WARNING: Contents under pressure. Runs on caffeine, spite, and four hours " +
  "of sleep. Do not shake, poke, or ask 'are you okay?' before coffee.";

// Hard guard: the sealed scorer only accepts 1-160 characters, one line.
if (LABEL.length === 0 || LABEL.length > MAX_LENGTH) {
  throw new Error(
    `Label must be 1-${MAX_LENGTH} characters, got ${LABEL.length}.`,
  );
}
if (LABEL.includes("\n") || LABEL.includes("\r")) {
  throw new Error("Label must be a single line (no newline characters).");
}
if (LABEL.trim() !== LABEL) {
  throw new Error("Label must not start or end with whitespace.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LABEL, "utf8");
console.log(`Wrote ${LABEL.length}-character label to ${join(outputDir, "entry.txt")}`);
