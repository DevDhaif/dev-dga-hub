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
- [Styling with Tailwind](${absoluteUrl('/installation#styling')}): three recipes (no Tailwind, Tailwind v3, Tailwind v4), the cascade-layer rules, and a live bridge demo.
- [Components](${absoluteUrl('/components')}): all ${COMPONENT_COUNT} components. Each page has when-to-use guidance, live examples, a props table generated from the typings, and accessibility notes.
- [Blocks](${absoluteUrl('/blocks')}): prebuilt UI blocks composed from the components.
- [Theme Studio](${absoluteUrl('/theme')}): edit every --ddga-* design token live and export CSS.
- [Arabic & RTL](${absoluteUrl('/rtl')}): Hijri calendars, abjad counters, bidi-safe Saudi data.
- [Accessibility](${absoluteUrl('/accessibility')}): WCAG 2.2 AA conformance statement.
- [Platforms Code compliance](${absoluteUrl('/compliance')}): component-by-component parity with the official DGA Figma.
- [Templates](https://dev-dga-templates.vercel.app/): the DGA home page template, built only from @dev-dga. Arabic and English, light and dark.

## Styling

\`@dev-dga/css\` is plain CSS in two cascade layers (ddga-base, ddga-components). Tailwind is optional;
both majors get every DGA token as utilities (bg-primary, text-ink, rounded-lg, text-display-md, max-w-dga):

- \`@dev-dga/css/tailwind.css\`: Tailwind v4 bridge, an \`@theme inline\` block plus \`@custom-variant dark\` on [data-theme='dark']; import it after '@dev-dga/css'.
- \`@dev-dga/tokens/tailwind-preset\`: the same keys as a Tailwind v3 preset (ESM and CJS), darkMode ['selector', '[data-theme="dark"]'].

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
