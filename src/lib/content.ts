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
  seoTitle?: string;
}

export type ProseSections = Record<string, string>;

export interface ComponentContent {
  frontmatter: ComponentFrontmatter;
  intro: string;
  examples: Example[];
  sections: ProseSections;
}

const H2_RE = /^##\s+(.+?)\s*$/gm;
const EXAMPLE_HEADING_RE = /^Example:?\s*(.*)$/i;

export function sectionKey(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9؀-ۿ]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Example extraction order must match scripts/gen-demos.mjs so examples[i] pairs
// with demoRegistry[slug][i]. Non-example headings are collected as prose sections.
function parseBody(body: string): { intro: string; examples: Example[]; sections: ProseSections } {
  const headings: { title: string; index: number; end: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = H2_RE.exec(body)) !== null) {
    headings.push({ title: m[1].trim(), index: m.index, end: m.index + m[0].length });
  }
  const intro = (headings.length === 0 ? body : body.slice(0, headings[0].index)).trim();

  const examples: Example[] = [];
  const sections: ProseSections = {};
  headings.forEach((h, i) => {
    const sliceEnd = i + 1 < headings.length ? headings[i + 1].index : body.length;
    const section = body.slice(h.end, sliceEnd);
    const ex = h.title.match(EXAMPLE_HEADING_RE);
    if (ex) {
      const fence = section.match(/```tsx\n([\s\S]*?)\n```/);
      if (fence) {
        examples.push({ title: (ex[1] || `Example ${examples.length + 1}`).trim(), code: fence[1] });
      }
      return;
    }
    const text = section.trim();
    if (text) sections[sectionKey(h.title)] = text;
  });

  return { intro, examples, sections };
}

export function getComponentContent(slug: string): ComponentContent | null {
  const file = join(CONTENT_DIR, `${slug}.md`);
  if (!existsSync(file)) return null;
  const raw = readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return { frontmatter: data as ComponentFrontmatter, ...parseBody(content) };
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
  seoTitle?: string;
  intro: string;
  sections: ProseSections;
}

export function getArabicContent(slug: string): ArabicContent | null {
  const file = join(AR_DIR, `${slug}.ar.md`);
  if (!existsSync(file)) return null;
  const { data, content } = matter(readFileSync(file, 'utf8'));
  const description = typeof data.description === 'string' ? data.description : '';
  const seoTitle = typeof data.seoTitle === 'string' ? data.seoTitle : undefined;
  const { intro, sections } = parseBody(content);
  if (!description && !intro) return null;
  return { description, seoTitle, intro, sections };
}
