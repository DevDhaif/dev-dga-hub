'use client';

import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
  Tag,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { ArrowRight } from '@/components/icons';

const ICONS = [
  'M3 8h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8Z|M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2', // business
  'M3 21h18|M5 21V7l7-4 7 4v14|M9 21v-5h6v5', // housing
  'M21 12a9 9 0 1 1-3-6.7|M21 3v5h-5', // renewal
  'M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5v5H3v-5Z|M7 18v1M17 18v1|M6.5 13h11', // transport
  'M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6Z|M12 9v6M9 12h6', // health
  'M3 6h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z|M7 10h4M7 14h6|M15.5 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3', // identity
];

function Glyph({ d }: { d: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {d.split('|').map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

export function CatalogBlock() {
  const { c } = useCopy();
  const cat = c.blocks.catalog;

  return (
    <div className="block-catalog">
      <div className="block-catalog__intro">
        <h3 className="block-catalog__title">{cat.title}</h3>
        <p className="block-catalog__lead">{cat.lead}</p>
      </div>

      <div className="block-catalog__grid">
        {cat.services.map((svc, i) => (
          <Card
            key={svc.name}
            interactive
            variant="outline"
            padding="lg"
            className="block-catalog__card"
          >
            <CardHeader>
              <div className="block-catalog__top">
                <CardIcon featured>
                  <Glyph d={ICONS[i % ICONS.length]} />
                </CardIcon>
                <Tag variant="primary-subtle" size="sm">
                  {svc.tag}
                </Tag>
              </div>
              <CardTitle>{svc.name}</CardTitle>
              <CardDescription>{svc.desc}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                asChild
                variant="ghost"
                size="sm"
                endIcon={<ArrowRight width={15} height={15} />}
                iconFlip
              >
                <a href="#">{cat.action}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export const catalogCode = `import {
  Button, Card, CardDescription, CardFooter, CardHeader, CardIcon, CardTitle, Tag,
} from '@dev-dga/react';

const services = [
  { name: 'Commercial registration', desc: 'Register a new business and receive your CR number.', tag: 'Business' },
  { name: 'Building permit', desc: 'Apply for construction and renovation permits.', tag: 'Housing' },
  { name: 'Work permit renewal', desc: 'Renew an existing work permit for an employee.', tag: 'Labor' },
];

export function ServiceCatalog() {
  return (
    <div style={{
      display: 'grid', gap: '1.25rem',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    }}>
      {services.map((svc) => (
        <Card key={svc.name} interactive variant="outline" padding="lg">
          <CardHeader>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardIcon featured><MyServiceIcon /></CardIcon>
              <Tag variant="primary-subtle" size="sm">{svc.tag}</Tag>
            </div>
            <CardTitle>{svc.name}</CardTitle>
            <CardDescription>{svc.desc}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost" size="sm" endIcon={<ArrowRight />} iconFlip>
              <a href={\`/services/\${svc.name}\`}>Open service</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}`;
