'use client';

import Image from 'next/image';
import { Button, Tag } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { ExternalLink } from '@/components/icons';

const TEMPLATES_URL = 'https://dev-dga-templates.vercel.app/';

// Full-page captures of the template (docs/screenshots in the template repo).
// The frames crop them to the top, so the hero and first sections show.
const DESKTOP_SHOT = {
  en: '/templates/home-en-desktop-dark.jpg',
  ar: '/templates/home-ar-desktop-light.jpg',
} as const;
const MOBILE_SHOT = '/templates/home-ar-mobile-light.jpg';

export function TemplateShowcase() {
  const { c, locale } = useCopy();
  const t = c.templates;

  return (
    <div className="example-card template-card">
      <div className="example-card__media template-card__media">
        <div className="example-card__chrome" aria-hidden>
          <span className="example-card__dots">
            <span />
            <span />
            <span />
          </span>
          <span className="example-card__url">dev-dga-templates.vercel.app</span>
        </div>
        <div className="example-card__viewport">
          <Image
            src={DESKTOP_SHOT[locale]}
            alt={t.altDesktop}
            fill
            sizes="(min-width: 760px) 60vw, 100vw"
            className="template-card__shot"
          />
        </div>
        <div className="template-card__phone">
          <Image
            src={MOBILE_SHOT}
            alt={t.altMobile}
            fill
            sizes="150px"
            className="template-card__shot"
          />
        </div>
      </div>

      <div className="example-card__body">
        <Tag className="example-card__tag" variant="primary-subtle">
          {t.tag}
        </Tag>
        <h3 className="example-card__name">{t.name}</h3>
        <p className="example-card__desc">{t.desc}</p>
        <ul className="template-card__facts">
          {t.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <div className="example-card__actions">
          <Button asChild size="md" endIcon={<ExternalLink width={16} height={16} />}>
            <a href={TEMPLATES_URL} target="_blank" rel="noreferrer">
              {t.open}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
