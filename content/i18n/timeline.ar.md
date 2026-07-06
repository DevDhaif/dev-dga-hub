---
description: 'قائمة زمنية بعلامات حالة.'
---

ركب عناصر `TimelineItem`، لكل منها علامة ومحتوى. حالة العلامة `status` شكلية فقط، فاجعل المعنى في النص.

## Example: Order history

```tsx
import {
  Timeline,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Timeline aria-label="سجل الطلب">
      <TimelineItem>
        <TimelineMarker status="success" />
        <TimelineContent>
          <TimelineTime dateTime="2026-06-01T09:00">9:00 صباحًا</TimelineTime>
          <TimelineTitle>تم تقديم الطلب</TimelineTitle>
          <TimelineDescription>تم تأكيد 3 عناصر</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="success" />
        <TimelineContent>
          <TimelineTime dateTime="2026-06-01T11:30">11:30 صباحًا</TimelineTime>
          <TimelineTitle>تم الشحن</TimelineTitle>
          <TimelineDescription>الناقل: أرامكس</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker />
        <TimelineContent>
          <TimelineTitle>قيد التوصيل</TimelineTitle>
          <TimelineDescription>متوقع اليوم</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
```

## Example: Statuses

```tsx
import {
  Timeline,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  TimelineTitle,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Timeline aria-label="سجل النظام">
      <TimelineItem>
        <TimelineMarker status="info" />
        <TimelineContent>
          <TimelineTitle>بدأ النشر</TimelineTitle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="success" />
        <TimelineContent>
          <TimelineTitle>نجح البناء</TimelineTitle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="warning" />
        <TimelineContent>
          <TimelineTitle>ارتفاع زمن الاستجابة</TimelineTitle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="error" />
        <TimelineContent>
          <TimelineTitle>فشل فحص السلامة</TimelineTitle>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
```

## Example: Markers with icons

```tsx
import {
  Timeline,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  TimelineTitle,
} from '@dev-dga/react';

const Check = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="m5 13 4 4L19 7" />
  </svg>
);

const Info = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5m0-8h.01" />
  </svg>
);

export default function Demo() {
  return (
    <Timeline aria-label="النشر">
      <TimelineItem>
        <TimelineMarker status="info">
          <Info />
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>بدأ النشر</TimelineTitle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="success">
          <Check />
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>نجح البناء</TimelineTitle>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
```

## Example: Activity feed (with Avatar)

```tsx
import type { CSSProperties } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  TimelineTitle,
  TimelineTime,
  Avatar,
  AvatarFallback,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Timeline
      aria-label="النشاط الأخير"
      style={{ '--ddga-timeline-node-size': '2rem' } as CSSProperties}
    >
      <TimelineItem>
        <TimelineMarker status="default">
          <Avatar size="sm">
            <AvatarFallback>سع</AvatarFallback>
          </Avatar>
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>وافقت سارة على طلبك</TimelineTitle>
          <TimelineTime dateTime="2026-06-01T08:00">قبل ساعتين</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="default">
          <Avatar size="sm">
            <AvatarFallback>مح</AvatarFallback>
          </Avatar>
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>علّق محمد على المستند</TimelineTitle>
          <TimelineTime dateTime="2026-06-01T06:30">قبل 3 ساعات</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
```
