// optimize-illustrations - SVGO-optimizes assets/illustrations/ SVGs into public/illustrations/
// and tokenizes the two DS colors (currentColor + var(--ddga-color-primary)).

import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { optimize } from 'svgo';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcDir = join(root, 'assets', 'illustrations');
const outDir = join(root, 'public', 'illustrations');

const NEUTRAL_HEX = /#161616\b/gi;
const ACCENT_HEX = /#1b8354\b/gi;

const svgoConfig = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // removeUselessStrokeAndFill deletes fill="none" and turns line-art into black blobs.
          removeUselessStrokeAndFill: false,
          // Keep data-* (we read data-flip) and aria-*.
          removeUnknownsAndDefaults: { keepDataAttrs: true, keepAriaAttrs: true },
          cleanupIds: { minify: false },
        },
      },
    },
    'removeDimensions',
  ],
};

function tokenize(svg) {
  return svg.replace(NEUTRAL_HEX, 'currentColor').replace(ACCENT_HEX, 'var(--ddga-color-primary)');
}

function walk(dir, base = dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, base, acc);
    else if (entry.endsWith('.svg')) acc.push(relative(base, full));
  }
  return acc;
}

function main() {
  if (!existsSync(srcDir)) {
    console.warn(`[illustrations] no sources at ${relative(root, srcDir)} - skipping.`);
    return;
  }
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  const files = walk(srcDir);
  let count = 0;
  let totalBytes = 0;
  let largest = { name: '', bytes: 0 };

  for (const rel of files) {
    const raw = readFileSync(join(srcDir, rel), 'utf8');
    const { data, error } = optimize(raw, { ...svgoConfig, path: rel });
    if (error) throw new Error(`[illustrations] SVGO failed on ${rel}: ${error}`);
    const out = tokenize(data);
    const dest = join(outDir, rel);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, out);
    count += 1;
    const bytes = Buffer.byteLength(out);
    totalBytes += bytes;
    if (bytes > largest.bytes) largest = { name: rel, bytes };
  }

  const kb = (n) => (n / 1024).toFixed(1);
  console.log(
    `[illustrations] optimized ${count} SVG(s) → public/illustrations/ ` +
      `(${kb(totalBytes)} KB total, largest ${largest.name} ${kb(largest.bytes)} KB)`,
  );
}

main();
