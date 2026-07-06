#!/usr/bin/env node
// sync-catalog - flags drift between the installed @dev-dga package, src/lib/catalog.ts, and content/.
// Usage: node scripts/sync-catalog.mjs [--ds ../dga-dev] [--json]. Exit 1 on drift.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const dsArg = (() => {
  const i = argv.indexOf('--ds');
  if (i !== -1 && argv[i + 1]) return argv[i + 1];
  return join(root, '..', 'dga-dev');
})();

const IGNORED_FAMILIES = new Set([
]);

// Maps compound-family slugs to their real exports so the no-DS fallback does not false-flag them as removed.
const FAMILY_EXPORT_ALIASES = {
  charts: ['BarChart', 'LineChart', 'PieChart'],
};

const read = (p) => readFileSync(p, 'utf8');
const exists = (p) => existsSync(p);
const dirsIn = (p) =>
  exists(p) ? readdirSync(p).filter((d) => statSync(join(p, d)).isDirectory()) : [];

function exportedComponents(file) {
  if (!exists(file)) return null;
  const text = read(file);
  const names = new Set();
  const re = /\bexport\s*\{([\s\S]*?)\}/g;
  let m;
  let sawBlock = false;
  while ((m = re.exec(text))) {
    sawBlock = true;
    for (const raw of m[1].split(',')) {
      const spec = raw.trim();
      if (!spec || spec.startsWith('type ')) continue;
      const id = spec.split(/\s+as\s+/)[0].trim();
      if (/^[A-Z][A-Za-z0-9]+$/.test(id)) names.add(id);
    }
  }
  if (!sawBlock) {
    for (const id of text.match(/\b[A-Z][A-Za-z0-9]+\b/g) || []) names.add(id);
  }
  return names;
}

function parseCatalog(file) {
  const text = read(file);
  const families = [];
  let category = '';
  const lines = text.split('\n');
  let cur = null;
  for (const line of lines) {
    const catId = line.match(/^\s*id:\s*'([^']+)'/);
    if (catId) category = catId[1];
    const slug = line.match(/^\s*slug:\s*'([^']+)'/);
    if (slug) cur = { slug: slug[1], name: '', dir: '', category };
    const name = line.match(/^\s*name:\s*'([^']+)'/);
    if (name && cur && !cur.name) cur.name = name[1];
    const srcHelper = line.match(/source:\s*src\('([^']+)'/);
    const srcLiteral = line.match(/components\/([A-Za-z0-9]+)\//);
    if ((srcHelper || srcLiteral) && cur && !cur.dir) {
      cur.dir = (srcHelper ? srcHelper[1] : srcLiteral[1]);
    }
    if (cur && /^\s*\},?\s*$/.test(line) && cur.slug && cur.name) {
      families.push(cur);
      cur = null;
    }
  }
  return families;
}

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
function looksRenamed(a, b) {
  const x = norm(a), y = norm(b);
  if (!x || !y) return false;
  if (x.includes(y) || y.includes(x)) return true;
  let i = 0;
  while (i < x.length && i < y.length && x[i] === y[i]) i++;
  return i >= 4;
}

const catalogFile = join(root, 'src/lib/catalog.ts');
const pkgBarrelDts = join(root, 'node_modules/@dev-dga/react/dist/index.d.ts');
const pkgBarrelJs = join(root, 'node_modules/@dev-dga/react/dist/index.js');
const dsComponentsDir = join(dsArg, 'packages/react/src/components');
const dsIndex = join(dsArg, 'packages/react/src/index.ts');

const catalog = parseCatalog(catalogFile);
const catalogDirs = new Map(catalog.filter((f) => f.dir).map((f) => [f.dir, f]));

// Fall back to the JS barrel when the installed package ships no types - otherwise every component false-flags as stale.
const dtsExports = exportedComponents(pkgBarrelDts);
const pkgTypesMissing = dtsExports === null && exists(pkgBarrelJs);
const pkgExports = dtsExports ?? exportedComponents(pkgBarrelJs) ?? new Set();

const dsPresent = exists(dsComponentsDir);
const dsFamilies = dirsIn(dsComponentsDir);
const dsExports = dsPresent ? exportedComponents(dsIndex) ?? new Set() : new Set();

const report = { new: [], removed: [], renamed: [], stale: [], content: [] };

if (dsPresent) {
  const dsSet = new Set(dsFamilies);

  for (const fam of dsFamilies) {
    if (catalogDirs.has(fam) || IGNORED_FAMILIES.has(fam)) continue;
    report.new.push({
      family: fam,
      installed: pkgExports.has(fam),
      inDsExports: dsExports.has(fam),
    });
  }
  for (const [dir, f] of catalogDirs) {
    if (!dsSet.has(dir)) report.removed.push({ family: dir, slug: f.slug, name: f.name });
  }
  for (const rem of report.removed) {
    const match = report.new.find((n) => looksRenamed(rem.family, n.family));
    if (match) report.renamed.push({ from: rem.family, to: match.family });
  }
  for (const fam of dsFamilies) {
    if (dsExports.has(fam) && !pkgExports.has(fam)) {
      report.stale.push({ family: fam });
    }
  }
} else {
  for (const f of catalog) {
    const candidates = FAMILY_EXPORT_ALIASES[f.slug] ?? [f.name.replace(/\s+/g, ''), f.dir].filter(Boolean);
    const present = candidates.some((id) => pkgExports.has(id));
    if (pkgExports.size && !present) {
      report.removed.push({ family: f.dir || f.name, slug: f.slug, name: f.name, note: 'not exported by installed package' });
    }
  }
}

const contentDir = join(root, 'content/components');
const contentSlugs = new Set(
  (exists(contentDir) ? readdirSync(contentDir) : [])
    .filter((f) => f.endsWith('.md'))
    .map((f) => basename(f, '.md')),
);
const catalogSlugs = new Set(catalog.map((f) => f.slug));
for (const f of catalog) {
  if (!contentSlugs.has(f.slug)) report.content.push({ slug: f.slug, issue: 'catalog entry has no content/*.md' });
}
for (const slug of contentSlugs) {
  if (!catalogSlugs.has(slug)) report.content.push({ slug, issue: 'content file has no catalog entry' });
}

const drift =
  report.new.length + report.removed.length + report.stale.length + report.content.length;

if (asJson) {
  console.log(JSON.stringify({ dsPresent, pkgTypesMissing, ...report, inSync: drift === 0 }, null, 2));
  process.exit(drift === 0 ? 0 : 1);
}

const c = { dim: '\x1b[2m', red: '\x1b[31m', grn: '\x1b[32m', ylw: '\x1b[33m', cyn: '\x1b[36m', rst: '\x1b[0m' };
console.log(`\n${c.cyn}sync-catalog${c.rst}  ${c.dim}catalog=${catalog.length} families · pkg exports=${pkgExports.size}${pkgTypesMissing ? ' (from JS barrel)' : ''} · DS=${dsPresent ? `${dsFamilies.length} dirs` : 'not found'}${c.rst}`);
if (pkgTypesMissing) {
  console.log(`${c.ylw}warn${c.rst} installed @dev-dga/react ships no index.d.ts - demos lose type-checking. Publish a build with types (tsup dts), then reinstall.`);
}
if (!dsPresent) {
  console.log(`${c.ylw}note${c.rst} DS repo not at ${dsArg} - new/rename detection skipped. Pass --ds <path> for the full check.\n`);
}

const section = (title, rows, fmt, color) => {
  if (!rows.length) return;
  console.log(`\n${color}${title} (${rows.length})${c.rst}`);
  for (const r of rows) console.log('  ' + fmt(r));
};

section('NEW - library components with no gallery page', report.new, (r) =>
  `${r.family}  ${c.dim}${r.installed ? 'installed' : r.inDsExports ? 'unpublished (in DS source, not in the installed package)' : 'not exported'}${c.rst}`, c.grn);
section('RENAMED - likely', report.renamed, (r) => `${r.from}  ->  ${r.to}`, c.ylw);
section('REMOVED - gallery page, component gone from library', report.removed, (r) =>
  `${r.name} (${r.slug})${r.note ? '  ' + c.dim + r.note + c.rst : ''}`, c.red);
section('STALE - installed package behind DS source (publish + bump)', report.stale, (r) => r.family, c.ylw);
section('CONTENT - catalog <-> content/ mismatch', report.content, (r) => `${r.slug}  ${c.dim}${r.issue}${c.rst}`, c.red);

if (drift === 0) {
  console.log(`\n${c.grn}in sync${c.rst} - catalog matches the library.\n`);
} else {
  console.log(`\n${c.red}${drift} drift item(s)${c.rst} - review above.\n`);
}
process.exit(drift === 0 ? 0 : 1);
