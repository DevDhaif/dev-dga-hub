---
title: Carousel
slug: carousel
category: Navigation
status: new
description: 'Accessible React carousel with arrows, dots, keyboard, swipe, and loop, using the carousel role pattern with live announcements. RTL-aware navigation.'
seoTitle: 'Carousel: accessible React carousel with arrows and dots'
---

Carousel shows one slide at a time inside `CarouselViewport`. Navigation works with arrows, dots, keyboard, and swipe; add `loop` to wrap around.

## When to use

Use Carousel for a small set of equally important slides, such as featured services or announcements on a portal home page. Keep it to a handful of slides and never autoplay content the user needs to read.

If users must compare items, a grid is better than a carousel.

## Example: Dots

```tsx
import { Carousel, CarouselViewport, CarouselSlide, CarouselDots } from '@dev-dga/react';

const SLIDES = [
  { title: 'National ID renewal', bg: '#F3FCF6', fg: '#14573A' },
  { title: 'Vehicle registration', bg: '#EFF8FF', fg: '#175CD3' },
  { title: 'Business licensing', bg: '#FFFAEB', fg: '#B54708' },
];

export default function Demo() {
  return (
    <Carousel
      aria-label="Featured services"
      controls="dots"
      style={{ maxInlineSize: 640, width: '100%' }}
    >
      <CarouselViewport>
        {SLIDES.map((slide) => (
          <CarouselSlide key={slide.title}>
            <div
              style={{
                display: 'grid',
                placeItems: 'center',
                blockSize: 200,
                borderRadius: 8,
                background: slide.bg,
                color: slide.fg,
                font: '600 22px/1.4 inherit',
              }}
            >
              {slide.title}
            </div>
          </CarouselSlide>
        ))}
      </CarouselViewport>
      <CarouselDots />
    </Carousel>
  );
}
```

## Example: Arrows

```tsx
import {
  Carousel,
  CarouselViewport,
  CarouselSlide,
  CarouselPrevious,
  CarouselNext,
} from '@dev-dga/react';

const SLIDES = [
  { title: 'Slide 1', bg: '#F3FCF6', fg: '#14573A' },
  { title: 'Slide 2', bg: '#EFF8FF', fg: '#175CD3' },
  { title: 'Slide 3', bg: '#FFFAEB', fg: '#B54708' },
];

export default function Demo() {
  return (
    <Carousel
      aria-label="Featured services"
      controls="arrows"
      style={{ maxInlineSize: 640, width: '100%' }}
    >
      <CarouselPrevious label="Previous slide" />
      <CarouselViewport>
        {SLIDES.map((slide) => (
          <CarouselSlide key={slide.title}>
            <div
              style={{
                display: 'grid',
                placeItems: 'center',
                blockSize: 200,
                borderRadius: 8,
                background: slide.bg,
                color: slide.fg,
                font: '600 22px/1.4 inherit',
              }}
            >
              {slide.title}
            </div>
          </CarouselSlide>
        ))}
      </CarouselViewport>
      <CarouselNext label="Next slide" />
    </Carousel>
  );
}
```

## Example: Arrows, dots, and loop

```tsx
import {
  Carousel,
  CarouselViewport,
  CarouselSlide,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from '@dev-dga/react';

const SLIDES = [
  { title: 'الخدمة الأولى', bg: '#F3FCF6', fg: '#14573A' },
  { title: 'الخدمة الثانية', bg: '#EFF8FF', fg: '#175CD3' },
  { title: 'الخدمة الثالثة', bg: '#F9F5FA', fg: '#532D75' },
];

export default function Demo() {
  return (
    <Carousel
      aria-label="الخدمات المميزة"
      controls="both"
      loop
      style={{ maxInlineSize: 640, width: '100%' }}
    >
      <CarouselPrevious label="الشريحة السابقة" />
      <CarouselViewport>
        {SLIDES.map((slide) => (
          <CarouselSlide key={slide.title}>
            <div
              style={{
                display: 'grid',
                placeItems: 'center',
                blockSize: 200,
                borderRadius: 8,
                background: slide.bg,
                color: slide.fg,
                font: '600 22px/1.4 inherit',
              }}
            >
              {slide.title}
            </div>
          </CarouselSlide>
        ))}
      </CarouselViewport>
      <CarouselNext label="الشريحة التالية" />
      <CarouselDots />
    </Carousel>
  );
}
```

## Accessibility

The carousel renders `role="region"` with `aria-roledescription="carousel"`, and each slide is a `role="group"` with a slide description. The left and right arrow keys move between slides, and Home and End jump to the ends. Inactive slides are marked inert, so hidden content is not focusable.

Slide changes are announced politely, previous and next have accessible names, and the current dot carries `aria-current`.
