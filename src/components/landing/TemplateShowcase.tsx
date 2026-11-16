'use client';

import Image from 'next/image';
import { Button, Tag } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { ExternalLink } from '@/components/icons';

// Full-page captures of each template (docs/screenshots in the template repo).
// The frames crop them to the top, so the hero and first sections show.
export function TemplateShowcase() {
  const { c, locale } = useCopy();
  const t = c.templates;

  return (
    <div className="template-cards">
      {t.items.map((item) => (
        <div className="example-card template-card" key={item.href}>
          <div className="example-card__media template-card__media">
            <div className="example-card__chrome" aria-hidden>
              <span className="example-card__dots">
                <span />
                <span />
                <span />
              </span>
              <span className="example-card__url">{item.href.replace('https://', '')}</span>
            </div>
            <div className="example-card__viewport">
              <Image
                src={item.shots[locale]}
                alt={item.altDesktop}
                fill
                sizes="(min-width: 760px) 60vw, 100vw"
                className="template-card__shot"
              />
            </div>
            <div className="template-card__phone">
              <Image
                src={item.shots.mobile}
                alt={item.altMobile}
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
            <h3 className="example-card__name">{item.name}</h3>
            <p className="example-card__desc">{item.desc}</p>
            <ul className="template-card__facts">
              {item.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <div className="example-card__actions">
              <Button asChild size="md" endIcon={<ExternalLink width={16} height={16} />}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {t.open}
                </a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="template-more">
        <h3 className="template-more__title">{t.more}</h3>
        <ul className="template-grid">
          {t.pages.map((page) => (
            <li key={page.slug} className="template-tile">
              <div className="template-tile__media">
                <Image
                  src={`/templates/pages/${page.slug}-${locale}.jpg`}
                  alt=""
                  fill
                  sizes="(min-width: 960px) 30vw, (min-width: 600px) 45vw, 100vw"
                  className="template-card__shot"
                />
              </div>
              <div className="template-tile__body">
                <h4 className="template-tile__name">
                  <a
                    className="template-tile__link"
                    href={`${t.allHref}/${page.slug}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {page.name}
                  </a>
                </h4>
                <p className="template-tile__desc">{page.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="template-more__all">
          <Button
            asChild
            variant="outline"
            size="md"
            endIcon={<ExternalLink width={16} height={16} />}
          >
            <a href={t.allHref} target="_blank" rel="noreferrer">
              {t.all}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
