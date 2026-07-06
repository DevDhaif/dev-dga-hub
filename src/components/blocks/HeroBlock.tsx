'use client';

import { Button } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

export function HeroBlock() {
  const { c } = useCopy();
  const h = c.blocks.hero;

  return (
    <div className="block-hero">
      <span className="eyebrow block-hero__eyebrow">{h.eyebrow}</span>
      <h3 className="block-hero__title">{h.title}</h3>
      <p className="block-hero__lead">{h.lead}</p>
      <div className="block-hero__cta">
        <Button size="lg">{h.primary}</Button>
        <Button size="lg" variant="outline">
          {h.secondary}
        </Button>
      </div>
      <div className="block-hero__stats">
        {h.stats.map((s) => (
          <div className="block-hero__stat" key={s.label}>
            <span className="block-hero__stat-value">{s.value}</span>
            <span className="block-hero__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const heroCode = `import { Button } from '@dev-dga/react';

const stats = [
  { value: '200+', label: 'Connected services' },
  { value: '18M', label: 'Verified citizens' },
  { value: '99.9%', label: 'Uptime' },
];

export function Hero() {
  return (
    <div style={{ textAlign: 'center', maxInlineSize: '46rem', marginInline: 'auto' }}>
      <span className="eyebrow">National single sign-on</span>
      <h1>Every government service, one trusted account.</h1>
      <p>Sign in once with Nafath and reach 200+ services across ministries.</p>
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button size="lg">Get started</Button>
        <Button size="lg" variant="outline">Explore services</Button>
      </div>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {stats.map((s) => (
          <div key={s.label}>
            <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>{s.value}</div>
            <div>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}`;
