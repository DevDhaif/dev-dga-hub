import { CATEGORIES, COMPONENT_COUNT } from '@/lib/catalog';
import { SITE_URL, absoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
  const sections = CATEGORIES.map((cat) => {
    const items = cat.components
      .map((c) => `- [${c.name}](${absoluteUrl(`/components/${c.slug}`)}): ${c.blurb}`)
      .join('\n');
    return `## ${cat.title}\n\n${items}`;
  }).join('\n\n');

  const body = `# dev-dga

> An independent, MIT-licensed React 19 implementation of Saudi Arabia's DGA "Platforms Code"
> national design system. ${COMPONENT_COUNT} accessible components: RTL-native, Arabic-first,
> dark-mode ready, RSC-compatible, WCAG 2.2 AA. Not affiliated with the official DGA.

Install: \`npm i @dev-dga/react @dev-dga/css @dev-dga/tokens\`

Every page below also exists in Arabic under the \`/ar\` prefix
(for example ${absoluteUrl('/ar/components/button')}).

## Docs

- [Installation](${absoluteUrl('/installation')}): install, wrap in DgaProvider, theme via CSS variables.
- [Components](${absoluteUrl('/components')}): all ${COMPONENT_COUNT} components with live examples.
- [Blocks](${absoluteUrl('/blocks')}): prebuilt UI blocks composed from the components.
- [Theme Studio](${absoluteUrl('/theme')}): edit every --ddga-* design token live and export CSS.
- [Arabic & RTL](${absoluteUrl('/rtl')}): Hijri calendars, abjad counters, bidi-safe Saudi data.
- [Accessibility](${absoluteUrl('/accessibility')}): WCAG 2.2 AA conformance statement.
- [Platforms Code compliance](${absoluteUrl('/compliance')}): component-by-component parity with the official DGA Figma.

${sections}

## Source

- [GitHub](https://github.com/DevDhaif/dev-dga-hub)
- [npm: @dev-dga/react](https://www.npmjs.com/package/@dev-dga/react)
- [Sitemap](${SITE_URL}/sitemap.xml)
`;

  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
