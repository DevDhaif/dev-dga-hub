import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'dev-dga compliance - mapped to the Saudi DGA Platforms Code, component by component.';

export default function Image() {
  return ogImage({
    eyebrow: 'Compliance',
    title: 'Mapped to the Platforms Code, component by component.',
    subtitle: 'Every component traced to its official DGA page, with a coverage status.',
  });
}
