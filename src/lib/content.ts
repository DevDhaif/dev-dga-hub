import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const CONTENT_DIR = join(process.cwd(), 'content', 'components');

export interface Example {
  title: string;
  code: string;
}

export interface ComponentFrontmatter {
  title?: string;
  slug?: string;
  category?: string;
  since?: string;
  status?: string;
  description?: string;
}

export interface ComponentContent {
  frontmatter: ComponentFrontmatter;
  intro: string;
  examples: Example[];
}

// Extraction order must match scripts/gen-demos.mjs so examples[i] pairs with demoRegistry[slug][i].
function parseBody(body: string): { intro: string; examples: Example[] } {
  const firstExample = body.search(/^##\s*Example/im);
  const intro = firstExample === -1 ? body.trim() : body.slice(0, firstExample).trim();

  const examples: Example[] = [];
  const sectionRe = /^##\s*Example:?\s*(.*)$/gim;
  const headings: { title: string; index: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = sectionRe.exec(body)) !== null) {
    headings.push({ title: (m[1] || `Example ${headings.length + 1}`).trim(), index: m.index });
  }
  headings.forEach((h, i) => {
    const end = i + 1 < headings.length ? headings[i + 1].index : body.length;
    const section = body.slice(h.index, end);
    const fence = section.match(/```tsx\n([\s\S]*?)\n```/);
    if (fence) examples.push({ title: h.title, code: fence[1] });
  });

  return { intro, examples };
}

export function getComponentContent(slug: string): ComponentContent | null {
  const file = join(CONTENT_DIR, `${slug}.md`);
  if (!existsSync(file)) return null;
  const raw = readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const { intro, examples } = parseBody(content);
  return { frontmatter: data as ComponentFrontmatter, intro, examples };
}

export function listContentSlugs(): string[] {
  if (!existsSync(CONTENT_DIR)) return [];
  return readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

const AR_DIR = join(process.cwd(), 'content', 'i18n');

export interface ArabicContent {
  description: string;
  intro: string;
}

export function getArabicContent(slug: string): ArabicContent | null {
  const file = join(AR_DIR, `${slug}.ar.md`);
  if (!existsSync(file)) return null;
  const { data, content } = matter(readFileSync(file, 'utf8'));
  const description = typeof data.description === 'string' ? data.description : '';
  const firstExample = content.search(/^##\s*Example/im);
  const intro = (firstExample === -1 ? content : content.slice(0, firstExample)).trim();
  if (!description && !intro) return null;
  return { description, intro };
}
