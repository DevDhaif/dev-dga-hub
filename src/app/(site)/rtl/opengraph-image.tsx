import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'dev-dga Arabic & RTL - right-to-left, engineered as a first language.';

export default function Image() {
  return ogImage({
    eyebrow: 'Arabic & RTL',
    title: 'Right-to-left, engineered as a first language.',
    subtitle: 'Hijri calendars, abjad counters, and bidi-safe Saudi data - all live.',
  });
}
