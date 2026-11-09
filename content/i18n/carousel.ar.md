---
description: 'عرض شرائح متاح الوصول في React يدعم الأسهم، النقاط، لوحة المفاتيح، السحب، والتكرار، ويتبع نموذج الدور carousel مع إعلانات حية. تنقل يراعي الاتجاه من اليمين إلى اليسار.'
seoTitle: 'عرض شرائح: مكون Carousel متاح الوصول بأسهم ونقاط'
---

يعرض Carousel شريحة واحدة في كل مرة داخل `CarouselViewport`. يعمل التنقل بالأسهم، النقاط، لوحة المفاتيح، والسحب. أضف `loop` للعودة إلى الشريحة الأولى بعد الأخيرة.

## When to use

استخدم Carousel لمجموعة صغيرة من الشرائح المتساوية الأهمية، مثل الخدمات المميزة أو الإعلانات في صفحة البوابة الرئيسية. اكتف بعدد قليل من الشرائح، ولا تشغل تلقائياً أي محتوى يحتاج المستخدم إلى قراءته.

إذا احتاج المستخدم إلى مقارنة العناصر، تناسبه الشبكة أكثر من عرض الشرائح.

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

يعرض Carousel `role="region"` مع `aria-roledescription="carousel"`، وتحمل كل شريحة `role="group"` مع وصف شريحة. ينتقل مفتاحا السهم الأيسر والأيمن بين الشرائح، وينتقل Home وEnd إلى الشريحة الأولى والأخيرة. تحمل الشرائح غير النشطة السمة inert، لذا لا يمكن التركيز على المحتوى المخفي.

يعلن Carousel تغييرات الشرائح بهدوء، وتحمل النقطة الحالية `aria-current`. ولزري السابق والتالي أسماء متاحة الوصول.
