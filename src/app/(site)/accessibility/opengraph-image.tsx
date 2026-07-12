import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'dev-dga accessibility - a public WCAG 2.2 AA conformance statement, self-assessed.';

export default function Image() {
  return ogImage({
    eyebrow: 'Accessibility',
    title: 'WCAG 2.2 AA, self-assessed and documented.',
    subtitle: 'What is supported, how it is tested, and where responsibility passes to you.',
  });
}
