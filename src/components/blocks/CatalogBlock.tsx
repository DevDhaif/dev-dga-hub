'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
  Carousel,
  CarouselDots,
  CarouselSlide,
  CarouselViewport,
  Tag,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

const ICONS = [
  'M3 8h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8Z|M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2', // business
  'M3 21h18|M5 21V7l7-4 7 4v14|M9 21v-5h6v5', // housing
  'M21 12a9 9 0 1 1-3-6.7|M21 3v5h-5', // renewal
  'M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5v5H3v-5Z|M7 18v1M17 18v1|M6.5 13h11', // transport
  'M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6Z|M12 9v6M9 12h6', // health
  'M3 6h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z|M7 10h4M7 14h6|M15.5 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3', // identity
];

// SDGA template card tags: status (green), category (blue), duration (neutral).
const TAG_VARIANTS = ['success-subtle', 'info-subtle', 'secondary-subtle'] as const;

function Glyph({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
    <section className="block-catalog" aria-labelledby="block-catalog-title">
      <div className="block-catalog__intro">
        <div className="block-catalog__heading">
          <h2 id="block-catalog-title" className="block-catalog__title">
            {cat.title}
          </h2>
          <Button asChild variant="outline" size="lg">
            <a href="#">{cat.viewAll}</a>
          </Button>
        </div>
        <p className="block-catalog__lead">{cat.lead}</p>
      </div>

      <Carousel aria-label={cat.title} slideSize="320px" gap="16px" align="center" flush>
        <CarouselViewport>
          {cat.services.map((svc, i) => (
            <CarouselSlide key={svc.name}>
              <Card className="block-catalog__card">
                <CardHeader>
                  <CardIcon featured>
                    <Glyph d={ICONS[i % ICONS.length]} />
                  </CardIcon>
                  <CardTitle>{svc.name}</CardTitle>
                  <CardDescription>{svc.desc}</CardDescription>
                </CardHeader>
                <CardContent className="block-catalog__tags">
                  {svc.tags.map((tag, t) => (
                    <Tag key={tag} variant={TAG_VARIANTS[t % TAG_VARIANTS.length]} shape="squared">
                      {tag}
                    </Tag>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="lg">
                    <a href="#">{cat.details}</a>
                  </Button>
                  <Button asChild size="lg">
                    <a href="#">{cat.start}</a>
                  </Button>
                </CardFooter>
              </Card>
            </CarouselSlide>
          ))}
        </CarouselViewport>
        <CarouselDots />
      </Carousel>
    </section>
  );
}

export const catalogCode = `import {
  Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardIcon, CardTitle,
  Carousel, CarouselDots, CarouselSlide, CarouselViewport, Tag,
} from '@dev-dga/react';

const services = [
  { name: 'Commercial registration', desc: 'Register a new business and receive your CR number.', tags: ['e-Service', 'Business', '1 day'] },
  { name: 'Building permit', desc: 'Apply for construction and renovation permits.', tags: ['e-Service', 'Individuals', '5 days'] },
  { name: 'Work permit renewal', desc: 'Renew an existing work permit for an employee.', tags: ['e-Service', 'Business', 'Instant'] },
];
const tagVariants = ['success-subtle', 'info-subtle', 'secondary-subtle'] as const;

export function ServicesSection() {
  return (
    <section className="services">
      <div className="services__heading">
        <h2>Services</h2>
        <Button asChild variant="outline" size="lg"><a href="/services">View all</a></Button>
      </div>
      <p>Start a government service online. Each card shows who the service is for and how long it takes.</p>

      <Carousel aria-label="Services" slideSize="320px" gap="16px" align="center" flush>
        <CarouselViewport>
          {services.map((svc) => (
            <CarouselSlide key={svc.name}>
              <Card>
                <CardHeader>
                  <CardIcon featured><MyServiceIcon /></CardIcon>
                  <CardTitle>{svc.name}</CardTitle>
                  <CardDescription>{svc.desc}</CardDescription>
                </CardHeader>
                <CardContent style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ddga-space-2)' }}>
                  {svc.tags.map((tag, i) => (
                    <Tag key={tag} variant={tagVariants[i]} shape="squared">{tag}</Tag>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="lg"><a href={\`/services/\${svc.name}\`}>Details</a></Button>
                  <Button asChild size="lg"><a href={\`/services/\${svc.name}/start\`}>Start</a></Button>
                </CardFooter>
              </Card>
            </CarouselSlide>
          ))}
        </CarouselViewport>
        <CarouselDots />
      </Carousel>
    </section>
  );
}

/* services.css: DGA Home Page services section.
.services { display: grid; gap: var(--ddga-space-8); padding: var(--ddga-space-10) var(--ddga-space-20); background: var(--ddga-gray-50); }
.services__heading { display: flex; align-items: center; justify-content: space-between; gap: var(--ddga-space-8); }
.services__heading h2 { margin: 0; font-size: var(--ddga-font-size-display-sm); line-height: var(--ddga-font-line-height-display-sm); font-weight: 700; }
*/`;
