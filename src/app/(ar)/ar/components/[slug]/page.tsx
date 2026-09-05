import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_COMPONENTS, componentBySlug } from '@/lib/catalog';
import { componentName } from '@/lib/component-names';
import { getArabicContent, getComponentContent } from '@/lib/content';
import { absoluteUrl, pageSeo, serializeJsonLd } from '@/lib/seo';
import { ComponentPage } from '@/components/showcase/ComponentPage';
import { componentProps } from '@/lib/props.generated';

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
  const ar = getArabicContent(slug);
  const name = componentName(slug, found.meta.name, 'ar');
  return {
    title: ar?.seoTitle ?? name,
    description: ar?.description || found.meta.blurb,
    ...pageSeo(`/components/${slug}`, 'ar'),
  };
}

function breadcrumbs(slug: string, name: string) {
  const trail = [
    { name: 'dev-dga', item: absoluteUrl('/ar') },
    { name: 'المكوّنات', item: absoluteUrl('/ar/components') },
    { name, item: absoluteUrl(`/ar/components/${slug}`) },
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(breadcrumbs(slug, componentName(slug, meta.name, 'ar'))),
        }}
      />
      <ComponentPage
        slug={slug}
        name={meta.name}
        categoryId={category.id}
        status={meta.status}
        en={{
          description: content?.frontmatter.description ?? meta.blurb,
          intro: content?.intro ?? '',
          sections: content?.sections ?? {},
        }}
        ar={ar ? { description: ar.description, intro: ar.intro, sections: ar.sections } : null}
        examples={content?.examples ?? []}
        propsDoc={componentProps[slug] ?? []}
        prev={prev ? { slug: prev.slug, name: prev.name } : null}
        next={next ? { slug: next.slug, name: next.name } : null}
      />
    </>
  );
}
