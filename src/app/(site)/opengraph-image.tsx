import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'dev-dga - Saudi Arabia’s DGA Platforms Code, as accessible React 19 components.';

export default function Image() {
  return ogImage({
    eyebrow: 'Platforms Code · React 19',
    title: 'Saudi Arabia’s design system, as React.',
    subtitle: 'Accessible, RTL-native, Arabic-first React 19 components.',
  });
}
