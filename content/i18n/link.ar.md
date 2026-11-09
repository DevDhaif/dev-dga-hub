---
description: 'رابط نصي متاح الوصول في React، بـ 3 درجات وحجمين، مع وضع مضمن ووضع خارجي للمواقع الحكومية السعودية. تنعكس أيقونته النهائية في الاتجاه من اليمين إلى اليسار.'
seoTitle: 'رابط: مكون Link نصي متاح الوصول مع مؤشر خارجي'
---

استخدم Link للتنقل وButton للإجراءات. فعّل `inline` للروابط داخل النص لتبقى مسطّرة، و`external` للروابط الخارجية.

## When to use

استخدم Link لنقل المستخدم إلى مكان آخر: صفحة أخرى، أو مرساة داخل الصفحة، أو موقع خارجي. واستخدم Button للإجراءات التي تغيّر الحالة.

فعّل `inline` للروابط داخل الفقرات لتبقى مسطّرة ومقروءة وسط النص. وفعّل `external` للروابط الخارجية ليعرف المستخدم أنه يغادر الخدمة. تناسب الروابط المستقلة ذات السهم النهائي نمط "عرض الكل" في لوحات التحكم.

## Example: In-text links

```tsx
import { Link } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ maxWidth: '46ch', lineHeight: 1.7 }}>
      اطلع على{' '}
      <Link href="#docs" inline>
        توثيق الخدمة
      </Link>{' '}
      قبل أن تبدأ، أو تصفح{' '}
      <Link href="#guides" inline>
        الأدلة
      </Link>
      .
    </p>
  );
}
```

## Example: Tones

```tsx
import { Link } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Link href="#" tone="primary">
        أساسي، الأخضر السعودي
      </Link>
      <Link href="#" tone="neutral">
        محايد، رمادي
      </Link>
      <div style={{ background: 'var(--ddga-color-primary)', padding: 16, borderRadius: 8 }}>
        <Link href="#" tone="onColor">
          على اللون، أبيض على الأخضر السعودي
        </Link>
      </div>
    </div>
  );
}
```

## Example: External link

```tsx
import { Link } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ maxWidth: '46ch', lineHeight: 1.7 }}>
      اطلع على{' '}
      <Link href="https://design.dga.gov.sa" inline external target="_blank">
        نظام تصميم هيئة الحكومة الرقمية
      </Link>{' '}
      الرسمي للاطلاع على المواصفة المصدرية.
    </p>
  );
}
```

## Accessibility

يعرض Link عنصر `<a>` أصلياً، لذا يمكن الوصول إليه بلوحة المفاتيح وتعلنه التقنيات المساعدة رابطاً. تظهر الروابط الخارجية مؤشراً بصرياً، وأيقونته `aria-hidden`. لذلك أضف السياق في نص الرابط حين تكون الوجهة غير واضحة.

تنعكس الأيقونات الاتجاهية في الاتجاه من اليمين إلى اليسار ليبقى السهم مشيراً إلى اتجاه القراءة. اكتب نص رابط يصف الوجهة، وتجنب عبارة "اضغط هنا".
