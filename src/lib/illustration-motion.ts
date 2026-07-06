export type Motion =
  | 'pulse'
  | 'draw'
  | 'fill'
  | 'stagger'
  | 'spin'
  | 'float'
  | 'blink';

export interface EnrichedIllustration {
  html: string;
  motion: Motion;
}

const OVERRIDES: Record<string, Motion> = {
  spinner: 'spin',
  progress: 'fill',
  'progress-indicator': 'fill',
  slider: 'fill',
  skeleton: 'fill',
  charts: 'fill',
  'text-input': 'blink',
  textarea: 'blink',
  'input-otp': 'blink',
  table: 'stagger',
  'dropdown-menu': 'stagger',
  dropdown: 'stagger',
  command: 'stagger',
  filtration: 'stagger',
  accordion: 'stagger',
  chip: 'pulse',
  'tag-input': 'pulse',
  'floating-button': 'pulse',
  card: 'float',
  carousel: 'float',
  popover: 'float',
  tooltip: 'float',
  drawer: 'float',
  modal: 'float',
  'slideout-menu': 'float',
  'scroll-area': 'float',
  'aspect-ratio': 'float',
  'notification-toast': 'float',
};

interface Shapes {
  accentStrokePath: boolean;
  accentRect: boolean;
  anyAccent: boolean;
  lineCount: number;
}

const SHAPE_TAG = /<(rect|circle|path|line|ellipse|polygon)\b([^>]*)>/g;
const PRIMARY = 'var(--ddga-color-primary)';

function injectHooks(svg: string): { html: string; shapes: Shapes } {
  const shapes: Shapes = {
    accentStrokePath: false,
    accentRect: false,
    anyAccent: false,
    lineCount: 0,
  };
  let lineIdx = 0;

  const html = svg.replace(SHAPE_TAG, (_m, tag: string, attrs: string) => {
    let extra = '';
    const isAccent = attrs.includes(PRIMARY);
    const isTextLine = attrs.includes('fill="currentColor"') && attrs.includes('fill-opacity');

    if (isAccent) {
      shapes.anyAccent = true;
      extra += ' data-accent';
      if (tag === 'rect') shapes.accentRect = true;
      if (tag === 'path' && attrs.includes(`stroke="${PRIMARY}"`)) {
        shapes.accentStrokePath = true;
        extra += ' pathLength="1"';
      }
    } else if (isTextLine && tag === 'rect') {
      extra += ` data-line style="--i:${lineIdx++}"`;
      shapes.lineCount++;
    }

    return `<${tag}${extra}${attrs}>`;
  });

  return { html, shapes };
}

function resolveMotion(preferred: Motion | undefined, s: Shapes): Motion {
  const viable = (m: Motion): boolean => {
    switch (m) {
      case 'draw':
        return s.accentStrokePath;
      case 'fill':
        return s.accentRect;
      case 'stagger':
        return s.lineCount >= 2;
      case 'blink':
      case 'pulse':
        return s.anyAccent;
      case 'spin':
      case 'float':
        return true;
    }
  };

  if (preferred && viable(preferred)) return preferred;

  if (s.accentStrokePath) return 'draw';
  if (s.lineCount >= 3) return 'stagger';
  if (s.anyAccent) return 'pulse';
  if (s.lineCount >= 1) return 'stagger';
  return 'float';
}

export function enrichIllustration(svg: string, key: string): EnrichedIllustration {
  const { html, shapes } = injectHooks(svg);
  const motion = resolveMotion(OVERRIDES[key], shapes);
  return { html, motion };
}
