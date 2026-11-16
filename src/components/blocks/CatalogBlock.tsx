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
import { CheckmarkCircle02Icon } from './dga-icons';
import { fmt } from './block-format';

// SDGA template card tags: status (green), category (blue), duration (neutral).
const TAG_VARIANTS = ['success-subtle', 'info-subtle', 'secondary-subtle'] as const;

export function CatalogBlock() {
  const { c } = useCopy();
  const cat = c.blocks.catalog;
  const ui = c.blocks.ui;

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

      <Carousel
        aria-label={cat.title}
        aria-roledescription={ui.carousel}
        announce={(i, m) => fmt(ui.announce, { n: i + 1, m })}
        slideSize="320px"
        gap="16px"
        align="center"
        flush
      >
        <CarouselViewport>
          {cat.services.map((svc, i) => (
            <CarouselSlide
              key={svc.name}
              aria-roledescription={ui.slide}
              aria-label={fmt(ui.slideOf, { n: i + 1, m: cat.services.length })}
            >
              <Card className="block-catalog__card">
                <CardHeader>
                  <CardIcon featured>
                    <CheckmarkCircle02Icon />
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
        <CarouselDots dotLabel={(i) => fmt(ui.goTo, { n: i + 1 })} />
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
