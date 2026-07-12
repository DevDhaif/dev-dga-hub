import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const SA_GREEN = '#1B8354';
const BG = '#0d121c';
const INK = '#f5f7fa';
const INK_2 = '#9aa7bd';

export function ogImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: BG,
          backgroundImage: `radial-gradient(1100px 500px at 80% -10%, ${SA_GREEN}26, transparent), radial-gradient(700px 400px at -5% 110%, ${SA_GREEN}1f, transparent)`,
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: SA_GREEN,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: BG,
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            d
          </div>
          <div style={{ display: 'flex', color: INK, fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
            dev-dga
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              color: SA_GREEN,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 18,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              color: INK,
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              color: INK_2,
              fontSize: 30,
              lineHeight: 1.4,
              marginTop: 22,
              maxWidth: 900,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', width: 28, height: 4, borderRadius: 2, background: SA_GREEN }} />
          <div style={{ display: 'flex', color: INK_2, fontSize: 24, fontWeight: 600, letterSpacing: 0.5 }}>
            MIT · React 19 · WCAG 2.2 AA · RTL-native
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
