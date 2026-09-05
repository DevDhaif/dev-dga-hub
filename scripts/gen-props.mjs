// Extracts each catalog component's own props from the @dev-dga/react typings into src/lib/props.generated.ts.

import { readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'node_modules', '@dev-dga', 'react', 'dist');
const DTS_FILES = ['index.d.ts', 'date-picker.d.ts'].map((f) => realpathSync(join(distDir, f)));
const outPath = join(root, 'src', 'lib', 'props.generated.ts');

// Components whose props live under other export names or need parts the prefix rule misses.
const OVERRIDES = {
  charts: { main: ['BarChart', 'LineChart', 'PieChart'] },
  dropdown: { skip: ['DropdownBase', 'DropdownSingle', 'DropdownMultiple'] },
  'progress-indicator': {
    extra: ['Step', 'StepIndicator', 'StepTitle', 'StepDescription', 'StepContent'],
  },
  radio: { extra: ['RadioGroup'] },
  'text-input': { extra: ['FieldMessage'] },
};

function catalogEntries() {
  const src = readFileSync(join(root, 'src', 'lib', 'catalog.ts'), 'utf8');
  const re = /slug: '([^']+)',\s*name: '([^']+)'/g;
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) out.push({ slug: m[1], name: m[2] });
  return out;
}

// Unresolved imports (cva, radix-ui, cmdk) would silently turn VariantProps into any, so fail hard.
const program = ts.createProgram(DTS_FILES, {
  skipLibCheck: false,
  noEmit: true,
  jsx: ts.JsxEmit.ReactJSX,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  module: ts.ModuleKind.ESNext,
  target: ts.ScriptTarget.ES2022,
  typeRoots: [join(root, 'node_modules', '@types')],
});
{
  const unresolved = new Set();
  for (const f of DTS_FILES) {
    const sf = program.getSourceFile(f);
    for (const d of program.getSemanticDiagnostics(sf)) {
      const msg = ts.flattenDiagnosticMessageText(d.messageText, ' ');
      if (msg.startsWith('Cannot find module')) unresolved.add(msg);
    }
  }
  if (unresolved.size) {
    console.error('[gen-props] unresolved imports in the typings:\n  ' + [...unresolved].join('\n  '));
    process.exit(1);
  }
}
const checker = program.getTypeChecker();
const ownFiles = new Set(DTS_FILES.map((f) => f.replace(/\\/g, '/')));
const isOwn = (node) => ownFiles.has(node.getSourceFile().fileName.replace(/\\/g, '/'));
const LIB_DEP_RE = /node_modules\/(?:\.pnpm\/[^/]+\/node_modules\/)?(?:radix-ui|@radix-ui\/[^/]+|cmdk|react-aria-components)\//;
const isLibDep = (node) => LIB_DEP_RE.test(node.getSourceFile().fileName.replace(/\\/g, '/'));

const propTypes = new Map();
for (const sf of program.getSourceFiles()) {
  if (!isOwn(sf)) continue;
  sf.forEachChild((node) => {
    if (
      (ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) &&
      node.name.text.endsWith('Props')
    ) {
      propTypes.set(node.name.text, node);
    }
  });
}

const FORMAT = ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope;

function typeString(type, node) {
  let s = checker.typeToString(type, node, FORMAT);
  if (/\$\d/.test(s)) s = checker.typeToString(type, node, FORMAT | ts.TypeFormatFlags.InTypeAlias);
  return s
    .replace(/\s*\|\s*undefined$/, '')
    .replace(/\s*\|\s*null$/, '')
    .replace(/^\(([^()]*)\)$/, '$1')
    .replace(/\bReact\.ReactNode\b/g, 'ReactNode');
}

function collectProps(name) {
  const decl = propTypes.get(name);
  if (!decl) return null;
  const type = checker.getTypeAtLocation(decl.name);
  const members = type.isUnion() ? type.types : [type];
  const seen = new Map();
  for (const t of members) {
    for (const sym of t.getProperties()) {
      const decls = sym.getDeclarations() ?? [];
      const own = decls.find((d) => isOwn(d)) ?? decls.find((d) => isLibDep(d));
      if (!own) continue;
      const key = sym.getName();
      if (seen.has(key)) continue;
      const propType = checker.getTypeOfSymbolAtLocation(sym, own);
      const tags = sym.getJsDocTags(checker);
      const def = tags.find((tag) => tag.name === 'default' || tag.name === 'defaultValue');
      seen.set(key, {
        name: key,
        type: typeString(propType, own),
        required: !(sym.flags & ts.SymbolFlags.Optional),
        // House style: no em-dashes.
        description: ts
          .displayPartsToString(sym.getDocumentationComment(checker))
          .trim()
          .replace(/\s*—\s*/g, ' - '),
        defaultValue: def ? ts.displayPartsToString(def.text).trim() : undefined,
        pos: own.getSourceFile().fileName + ':' + String(own.pos).padStart(8, '0'),
      });
    }
  }
  const props = [...seen.values()].sort((a, b) => (a.pos < b.pos ? -1 : a.pos > b.pos ? 1 : 0));
  for (const p of props) delete p.pos;
  return props;
}

function partsFor(entry, allNames) {
  const override = OVERRIDES[entry.slug] ?? {};
  const mains = override.main ?? [entry.name];
  const others = allNames.filter((n) => n !== entry.name);
  const prefixed = [...propTypes.keys()]
    .map((k) => k.replace(/Props$/, ''))
    .filter(
      (k) =>
        k !== entry.name &&
        k.startsWith(entry.name) &&
        /^[A-Z]/.test(k.slice(entry.name.length)) &&
        // Internal helper types are not public parts.
        !/(Own|Base|Root|Section|GroupDiv)$/.test(k) &&
        // A sibling catalog component is not a part of this one.
        !others.some((o) => k === o || k.startsWith(o)),
    );
  const skip = new Set(override.skip ?? []);
  const names = [...new Set([...mains, ...prefixed, ...(override.extra ?? [])])].filter(
    (n) => !skip.has(n),
  );
  const parts = [];
  for (const n of names) {
    const props = collectProps(`${n}Props`);
    if (!props) continue;
    if (props.length === 0 && !mains.includes(n)) continue;
    parts.push({ name: n, props });
  }
  return parts;
}

function main() {
  const entries = catalogEntries();
  const allNames = entries.map((e) => e.name);
  const result = {};
  const report = [];
  for (const entry of entries) {
    const parts = partsFor(entry, allNames);
    result[entry.slug] = parts;
    const total = parts.reduce((n, p) => n + p.props.length, 0);
    report.push(`${entry.slug}: ${parts.length} part(s), ${total} props${total === 0 ? '  <-- EMPTY' : ''}`);
  }
  const body = `// AUTO-GENERATED by scripts/gen-props.mjs from @dev-dga/react typings - do not edit.

export interface PropDoc {
  name: string;
  type: string;
  required: boolean;
  description: string;
  defaultValue?: string;
}

export interface PropsPart {
  /** Exported component (or sub-part) name, e.g. "Modal" or "ModalContent". */
  name: string;
  props: PropDoc[];
}

export const componentProps: Record<string, PropsPart[]> = ${JSON.stringify(result, null, 2)};
`;
  writeFileSync(outPath, body);
  console.log(report.join('\n'));
  console.log(`[gen-props] ${entries.length} components -> ${outPath}`);
}

main();
