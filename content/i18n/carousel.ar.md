---
description: 'عرض شرائح متاح الوصول في React بأسهم ونقاط ولوحة مفاتيح وسحب وتكرار، بنمط دور carousel وإعلانات حيّة. تنقّل يراعي الاتجاه العربي.'
seoTitle: 'عرض شرائح: مكوّن Carousel متاح الوصول بأسهم ونقاط'
---

يعرض Carousel شريحة واحدة في كل مرة داخل `CarouselViewport`. يعمل التنقل بالأسهم والنقاط ولوحة المفاتيح والسحب، وأضف `loop` للدوران المستمر.

## When to use

استخدم Carousel لمجموعة صغيرة من الشرائح المتساوية الأهمّية، مثل الخدمات المميّزة أو الإعلانات في صفحة البوّابة الرئيسية. اجعلها شرائح قليلة ولا تشغّل تلقائيًا محتوى يحتاج المستخدم إلى قراءته.

إن كان على المستخدم مقارنة العناصر، فالشبكة أفضل من عرض الشرائح.

## Example: Dots

```tsx
import { Carousel, CarouselViewport, CarouselSlide, CarouselDots } from '@dev-dga/react';

const SLIDES = [
  { title: 'تجديد الهوية الوطنية', bg: '#F3FCF6', fg: '#14573A' },
  { title: 'تسجيل مركبة', bg: '#EFF8FF', fg: '#175CD3' },
  { title: 'تراخيص الأعمال', bg: '#FFFAEB', fg: '#B54708' },
];

export default function Demo() {
  return (
    <Carousel
      aria-label="الخدمات المميزة"
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
  { title: 'الشريحة 1', bg: '#F3FCF6', fg: '#14573A' },
  { title: 'الشريحة 2', bg: '#EFF8FF', fg: '#175CD3' },
  { title: 'الشريحة 3', bg: '#FFFAEB', fg: '#B54708' },
];

export default function Demo() {
  return (
    <Carousel
      aria-label="الخدمات المميزة"
      controls="arrows"
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
    </Carousel>
  );
}
```

## Accessibility

يعرض عرض الشرائح `role="region"` مع `aria-roledescription="carousel"`، وكل شريحة `role="group"` بوصف شريحة. ينقل السهمان الأيسر والأيمن بين الشرائح، ويقفز Home وEnd إلى الطرفين، وتُعلّم الشرائح غير النشطة بـ inert فلا يمكن التركيز على محتوى مخفي.

تُعلن تغييرات الشرائح بهدوء، ولزرَي السابق والتالي أسماء متاحة، وتحمل النقطة الحالية `aria-current`.
