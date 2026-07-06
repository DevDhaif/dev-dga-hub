'use client';

import type { ComponentType } from 'react';
import { useCopy } from '@/lib/i18n';
import { BlockShowcase } from './BlockShowcase';
import { AnalyticsBlock, analyticsCode } from './AnalyticsBlock';
import { StatsBlock, statsCode } from './StatsBlock';
import { RequestsBlock, requestsCode } from './RequestsBlock';
import { SignInBlock, signInCode } from './SignInBlock';
import { MultiStepBlock, multiStepCode } from './MultiStepBlock';
import { ServiceFormBlock, serviceFormCode } from './ServiceFormBlock';
import { HeroBlock, heroCode } from './HeroBlock';
import { PricingBlock, pricingCode } from './PricingBlock';
import { FaqBlock, faqCode } from './FaqBlock';
import { SettingsBlock, settingsCode } from './SettingsBlock';
import { TeamBlock, teamCode } from './TeamBlock';
import { CatalogBlock, catalogCode } from './CatalogBlock';
import { EmptyStateBlock, emptyStateCode } from './EmptyStateBlock';
import { LoadingBlock, loadingCode } from './LoadingBlock';
import { ConfirmationBlock, confirmationCode } from './ConfirmationBlock';
import './blocks.css';

type BlockId =
  | 'analytics'
  | 'stats'
  | 'requests'
  | 'signIn'
  | 'multiStep'
  | 'serviceForm'
  | 'hero'
  | 'pricing'
  | 'faq'
  | 'settings'
  | 'team'
  | 'catalog'
  | 'emptyState'
  | 'loading'
  | 'confirmation';

const REGISTRY: Record<BlockId, { code: string; Component: ComponentType }> = {
  analytics: { code: analyticsCode, Component: AnalyticsBlock },
  stats: { code: statsCode, Component: StatsBlock },
  requests: { code: requestsCode, Component: RequestsBlock },
  signIn: { code: signInCode, Component: SignInBlock },
  multiStep: { code: multiStepCode, Component: MultiStepBlock },
  serviceForm: { code: serviceFormCode, Component: ServiceFormBlock },
  hero: { code: heroCode, Component: HeroBlock },
  pricing: { code: pricingCode, Component: PricingBlock },
  faq: { code: faqCode, Component: FaqBlock },
  settings: { code: settingsCode, Component: SettingsBlock },
  team: { code: teamCode, Component: TeamBlock },
  catalog: { code: catalogCode, Component: CatalogBlock },
  emptyState: { code: emptyStateCode, Component: EmptyStateBlock },
  loading: { code: loadingCode, Component: LoadingBlock },
  confirmation: { code: confirmationCode, Component: ConfirmationBlock },
};

type CategoryId = 'dashboards' | 'forms' | 'marketing' | 'content' | 'feedback';

const CATEGORIES: { id: CategoryId; items: BlockId[] }[] = [
  { id: 'dashboards', items: ['analytics', 'stats', 'requests'] },
  { id: 'forms', items: ['signIn', 'multiStep', 'serviceForm'] },
  { id: 'marketing', items: ['hero', 'pricing', 'faq'] },
  { id: 'content', items: ['settings', 'team', 'catalog'] },
  { id: 'feedback', items: ['emptyState', 'loading', 'confirmation'] },
];

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
