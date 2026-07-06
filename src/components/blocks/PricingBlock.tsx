'use client';

import { useState } from 'react';
import { Button, Card, Divider, List, ListItem, Tag } from '@dev-dga/react';
import { ContentSwitcher, ContentSwitcherItem } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

type Billing = 'monthly' | 'annual';

export function PricingBlock() {
  const { c } = useCopy();
  const p = c.blocks.pricing;
  const [billing, setBilling] = useState<Billing>('monthly');
  const period = billing === 'monthly' ? p.perMonth : p.perYear;

  return (
    <div className="block-pricing">
      <div className="block-pricing__intro">
        <h3 className="block-pricing__title">{p.title}</h3>
        <p className="block-pricing__lead">{p.lead}</p>
        <ContentSwitcher
          size="sm"
          aria-label={`${p.monthly} / ${p.annual}`}
          value={billing}
          onValueChange={(v) => {
            if (v === 'monthly' || v === 'annual') setBilling(v);
          }}
        >
          <ContentSwitcherItem value="monthly">{p.monthly}</ContentSwitcherItem>
          <ContentSwitcherItem value="annual">{p.annual}</ContentSwitcherItem>
        </ContentSwitcher>
      </div>

      <div className="block-pricing__grid">
        {p.tiers.map((tier, i) => {
          const featured = i === 1;
          const amount = billing === 'monthly' ? tier.monthly : tier.annual;
          return (
            <Card
              key={tier.name}
              variant={featured ? 'elevated' : 'outline'}
              padding="lg"
              className={`block-pricing__card${featured ? ' block-pricing__card--featured' : ''}`}
            >
              <div className="block-pricing__head">
                <span className="block-pricing__plan">
                  <span className="block-pricing__name">{tier.name}</span>
                  {featured && <Tag variant="primary">{p.popular}</Tag>}
                </span>
                <p className="block-pricing__desc">{tier.desc}</p>
              </div>

              <p className="block-pricing__price">
                {tier.priceIsWord ? (
                  <span className="block-pricing__amount">{amount}</span>
                ) : (
                  <>
                    <span className="block-pricing__cur">{p.currency}</span>
                    <span className="block-pricing__amount">{amount}</span>
                    <span className="block-pricing__per">{period}</span>
                  </>
                )}
              </p>

              <Button fullWidth variant={featured ? 'primary' : 'outline'}>
                {p.cta}
              </Button>

              <Divider decorative />

              <List variant="with-icon" tone="primary" className="block-pricing__features">
                {tier.features.map((f) => (
                  <ListItem key={f}>{f}</ListItem>
                ))}
              </List>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export const pricingCode = `import { useState } from 'react';
import { Button, Card, ContentSwitcher, ContentSwitcherItem, Divider, List, ListItem, Tag } from '@dev-dga/react';

const tiers = [
  { name: 'Starter', desc: 'For small teams piloting a single service.', monthly: 'Free', annual: 'Free', word: true,
    features: ['1 service portal', 'Up to 5 seats', 'Community support'] },
  { name: 'Professional', desc: 'For agencies running services in production.', monthly: '499', annual: '4,990', word: false,
    features: ['Unlimited services', 'Up to 50 seats', 'Priority support', 'SSO (Nafath)'] },
  { name: 'Enterprise', desc: 'For ministries with bespoke requirements.', monthly: 'Custom', annual: 'Custom', word: true,
    features: ['Unlimited everything', 'Dedicated support', 'Custom SLAs'] },
];

export function PricingPlans() {
  const [billing, setBilling] = useState('monthly');
  const period = billing === 'monthly' ? '/month' : '/year';
  return (
    <div>
      <ContentSwitcher size="sm" aria-label="Billing" value={billing}
        onValueChange={(v) => v && setBilling(v)}>
        <ContentSwitcherItem value="monthly">Monthly</ContentSwitcherItem>
        <ContentSwitcherItem value="annual">Annual</ContentSwitcherItem>
      </ContentSwitcher>

      <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {tiers.map((tier, i) => {
          const featured = i === 1;
          const amount = billing === 'monthly' ? tier.monthly : tier.annual;
          return (
            <Card key={tier.name} variant={featured ? 'elevated' : 'outline'} padding="lg">
              <span style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <strong>{tier.name}</strong>
                {featured && <Tag variant="primary">Most popular</Tag>}
              </span>
              <p>{tier.desc}</p>
              <p>
                {tier.word ? amount : <><span>SAR </span><strong>{amount}</strong><span>{period}</span></>}
              </p>
              <Button fullWidth variant={featured ? 'primary' : 'outline'}>Get started</Button>
              <Divider decorative />
              <List variant="with-icon" tone="primary">
                {tier.features.map((f) => <ListItem key={f}>{f}</ListItem>)}
              </List>
            </Card>
          );
        })}
      </div>
    </div>
  );
}`;
