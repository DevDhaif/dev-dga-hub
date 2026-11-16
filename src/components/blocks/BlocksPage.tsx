'use client';

import type { ComponentType } from 'react';
import { useCopy } from '@/lib/i18n';
import { BlockShowcase } from './BlockShowcase';
import { CATEGORIES, type BlockId } from './categories';
import { AnalyticsBlock, analyticsCode } from './AnalyticsBlock';
import { StatsBlock, statsCode } from './StatsBlock';
import { RequestsBlock, requestsCode } from './RequestsBlock';
import { SignInBlock, signInCode } from './SignInBlock';
import { MultiStepBlock, multiStepCode } from './MultiStepBlock';
import { ServiceFormBlock, serviceFormCode } from './ServiceFormBlock';
import { HeroBlock, heroCode } from './HeroBlock';
import { FaqBlock, faqCode } from './FaqBlock';
import { SettingsBlock, settingsCode } from './SettingsBlock';
import { CatalogBlock, catalogCode } from './CatalogBlock';
import { ConfirmationBlock, confirmationCode } from './ConfirmationBlock';
import { SearchBlock, searchCode } from './SearchBlock';
import { SitemapBlock, sitemapCode } from './SitemapBlock';
import { NotFoundBlock, notFoundCode } from './NotFoundBlock';
import { RatingBlock, ratingCode } from './RatingBlock';
import { PageFeedbackBlock, pageFeedbackCode } from './PageFeedbackBlock';
import { CookiesBlock, cookiesCode } from './CookiesBlock';
import { ChatbotBlock, chatbotCode } from './ChatbotBlock';
import './blocks.css';

const REGISTRY: Record<BlockId, { code: string; Component: ComponentType }> = {
  analytics: { code: analyticsCode, Component: AnalyticsBlock },
  stats: { code: statsCode, Component: StatsBlock },
  requests: { code: requestsCode, Component: RequestsBlock },
  signIn: { code: signInCode, Component: SignInBlock },
  multiStep: { code: multiStepCode, Component: MultiStepBlock },
  serviceForm: { code: serviceFormCode, Component: ServiceFormBlock },
  hero: { code: heroCode, Component: HeroBlock },
  faq: { code: faqCode, Component: FaqBlock },
  settings: { code: settingsCode, Component: SettingsBlock },
  catalog: { code: catalogCode, Component: CatalogBlock },
  confirmation: { code: confirmationCode, Component: ConfirmationBlock },
  search: { code: searchCode, Component: SearchBlock },
  sitemap: { code: sitemapCode, Component: SitemapBlock },
  notFound: { code: notFoundCode, Component: NotFoundBlock },
  rating: { code: ratingCode, Component: RatingBlock },
  pageFeedback: { code: pageFeedbackCode, Component: PageFeedbackBlock },
  cookies: { code: cookiesCode, Component: CookiesBlock },
  chatbot: { code: chatbotCode, Component: ChatbotBlock },
};

export function BlocksPage() {
  const { c } = useCopy();

  return (
    <div className="blocks shell">
      <header className="blocks__header">
        <p className="eyebrow">{c.blocks.eyebrow}</p>
        <h1 className="blocks__title display">{c.blocks.title}</h1>
        <p className="blocks__lead">{c.blocks.lead}</p>

        <nav className="blocks__index" aria-label={c.blocks.eyebrow}>
          {CATEGORIES.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="blocks__chip">
              {c.blocks.categories[cat.id].title}
              <span className="blocks__chip-count">{cat.items.length}</span>
            </a>
          ))}
        </nav>
      </header>

      {CATEGORIES.map((cat) => {
        const meta = c.blocks.categories[cat.id];
        return (
          <section key={cat.id} id={cat.id} className="blocks-cat" aria-labelledby={`${cat.id}-h`}>
            <div className="blocks-cat__head">
              <div className="blocks-cat__heading">
                <h2 id={`${cat.id}-h`} className="blocks-cat__title">
                  {meta.title}
                </h2>
                <p className="blocks-cat__desc">{meta.desc}</p>
              </div>
              <span className="blocks-cat__count">
                {cat.items.length} {c.blocks.count}
              </span>
            </div>

            <div className="blocks-cat__list">
              {cat.items.map((id) => {
                const item = c.blocks.items[id];
                const reg = REGISTRY[id];
                return (
                  <BlockShowcase
                    key={id}
                    id={id}
                    name={item.name}
                    desc={item.desc}
                    code={reg.code}
                    Component={reg.Component}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
