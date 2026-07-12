'use client';

import type { ReactNode } from 'react';
import { useCopy } from '@/lib/i18n';
import { sectionIllustrations } from '@/lib/illustrations.generated';
import { enrichIllustration } from '@/lib/illustration-motion';
import { Hero } from './Hero';
import { ProofStrip } from './ProofStrip';
import { Pillars } from './Pillars';
import { ThemingDemo } from './ThemingDemo';
import { RtlDemo, DarkModeDemo } from './ParityDemos';
import {
  AboutFeatures,
  Architecture,
  A11yFeatures,
  CategoryTeaser,
  Closer,
  ExampleShowcase,
  InstallSteps,
} from './StaticSections';
import './landing.css';
import '../showcase/illustration-motion.css';

function Section({
  eyebrow,
  title,
  lead,
  tint,
  spot,
  split,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  tint?: boolean;
  spot?: string;
  split?: boolean;
  children: ReactNode;
}) {
  const entry = spot ? sectionIllustrations[spot] : undefined;
  const art = entry ? enrichIllustration(entry.svg, spot as string) : undefined;
  const head = (
    <div className="section__head">
      {art && (
        <span
          className="section__spot"
          data-motion={art.motion}
          aria-hidden
          dangerouslySetInnerHTML={{ __html: art.html }}
        />
      )}
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section__title">{title}</h2>
      <p className="section__lead">{lead}</p>
    </div>
  );
  return (
    <section className={tint ? 'section section--tint' : 'section'}>
      <div className="shell">
        {split ? (
          <div className="section__split">
            {head}
            <div className="section__split-body">{children}</div>
          </div>
        ) : (
          <>
            {head}
            {children}
          </>
        )}
      </div>
    </section>
  );
}

export function Landing() {
  const { c } = useCopy();
  return (
    <>
      <Hero />
      <ProofStrip />

      <Section eyebrow={c.pillars.eyebrow} title={c.pillars.title} lead={c.pillars.lead}>
        <Pillars />
      </Section>

      <Section eyebrow={c.about.eyebrow} title={c.about.title} lead={c.about.lead} tint split>
        <AboutFeatures />
      </Section>

      <Section eyebrow={c.install.eyebrow} title={c.install.title} lead={c.install.lead}>
        <InstallSteps />
      </Section>

      <Section
        eyebrow={c.theming.eyebrow}
        title={c.theming.title}
        lead={c.theming.lead}
        tint
        spot="theming"
      >
        <ThemingDemo />
      </Section>

      <Section eyebrow={c.rtl.eyebrow} title={c.rtl.title} lead={c.rtl.lead} spot="rtl">
        <RtlDemo />
      </Section>

      <Section eyebrow={c.dark.eyebrow} title={c.dark.title} lead={c.dark.lead} tint spot="dark">
        <DarkModeDemo />
      </Section>

      <Section eyebrow={c.a11y.eyebrow} title={c.a11y.title} lead={c.a11y.lead} spot="a11y">
        <A11yFeatures />
      </Section>

      <Section
        eyebrow={c.arch.eyebrow}
        title={c.arch.title}
        lead={c.arch.lead}
        tint
        spot="architecture"
      >
        <Architecture />
      </Section>

      <Section eyebrow={c.examples.eyebrow} title={c.examples.title} lead={c.examples.lead}>
        <ExampleShowcase />
      </Section>

      <Section
        eyebrow={c.gallery.eyebrow}
        title={c.gallery.teaserTitle}
        lead={c.gallery.teaserLead}
        tint
      >
        <CategoryTeaser />
      </Section>

      <Closer />
    </>
  );
}
