import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_COMPONENTS, componentBySlug } from '@/lib/catalog';
import { getArabicContent, getComponentContent } from '@/lib/content';
import { ComponentPage } from '@/components/showcase/ComponentPage';

export function generateStaticParams() {
  return ALL_COMPONENTS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = componentBySlug(slug);
  if (!found) return {};
  return {
    title: found.meta.name,
    description: found.meta.blurb,
    alternates: { canonical: `/components/${slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = componentBySlug(slug);
  if (!found) notFound();

  const { meta, category } = found;
  const content = getComponentContent(slug);
  const ar = getArabicContent(slug);

  const idx = ALL_COMPONENTS.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? ALL_COMPONENTS[idx - 1] : null;
  const next = idx < ALL_COMPONENTS.length - 1 ? ALL_COMPONENTS[idx + 1] : null;

  return (
    <ComponentPage
      slug={slug}
      name={meta.name}
      categoryId={category.id}
      status={meta.status}
      en={{
        description: content?.frontmatter.description ?? meta.blurb,
        intro: content?.intro ?? '',
      }}
      ar={ar ? { description: ar.description, intro: ar.intro } : null}
      examples={content?.examples ?? []}
      prev={prev ? { slug: prev.slug, name: prev.name } : null}
      next={next ? { slug: next.slug, name: next.name } : null}
    />
  );
}
