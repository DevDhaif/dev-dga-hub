'use client';

import { Button, Carousel, CarouselDots, CarouselSlide, CarouselViewport } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

export function HeroBlock() {
  const { c } = useCopy();
  const h = c.blocks.hero;

  return (
    <section className="block-hero">
      <Carousel aria-label={h.label} controls="dots" gap="32px" flush loop>
        <CarouselViewport>
          {h.slides.map((s) => (
            <CarouselSlide key={s.title}>
              <div className="block-hero__content">
                <h2 className="block-hero__title">{s.title}</h2>
                <p className="block-hero__lead">{s.lead}</p>
                <Button onColor size="lg">
                  {s.cta}
                </Button>
              </div>
            </CarouselSlide>
          ))}
        </CarouselViewport>
        <CarouselDots bare />
      </Carousel>
    </section>
  );
}

export const heroCode = `import { Button, Carousel, CarouselDots, CarouselSlide, CarouselViewport } from '@dev-dga/react';

const slides = [
  {
    title: 'Government services in one place',
    lead: 'Apply for permits, renew documents, and track your requests online at any time.',
    cta: 'Browse services',
  },
  {
    title: 'Renew your documents online',
    lead: 'Renew your national ID, residency, and licenses without visiting a branch.',
    cta: 'Start a renewal',
  },
];

export function Hero() {
  return (
    <section className="hero">
      <Carousel aria-label="Announcements" controls="dots" gap="32px" flush loop>
        <CarouselViewport>
          {slides.map((s) => (
            <CarouselSlide key={s.title}>
              <div className="hero__content">
                <h1 className="hero__title">{s.title}</h1>
                <p className="hero__lead">{s.lead}</p>
                <Button onColor size="lg">{s.cta}</Button>
              </div>
            </CarouselSlide>
          ))}
        </CarouselViewport>
        <CarouselDots bare />
      </Carousel>
    </section>
  );
}

/* hero.css: the DGA Home Page hero lays SA-950 at 80% over the section photo.
.hero {
  padding: var(--ddga-space-10) var(--ddga-space-20);
  color: var(--ddga-alpha-white-100);
  background:
    linear-gradient(color-mix(in srgb, var(--ddga-sa-950) 80%, transparent) 0 0),
    url('/hero.jpg') center / cover,
    var(--ddga-sa-950);
}
.hero__content { display: grid; gap: var(--ddga-space-8); justify-items: start; max-inline-size: 39rem; }
.hero__title { margin: 0; font-size: var(--ddga-font-size-display-xl); line-height: var(--ddga-font-line-height-display-xl); font-weight: 600; }
.hero__lead { margin: 0; font-size: var(--ddga-font-size-xl); line-height: var(--ddga-font-line-height-xl); }
*/`;
