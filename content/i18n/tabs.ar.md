---
description: 'تبويبات للوحات تتشارك سياقًا واحدًا.'
---

يرتبط كل `TabsTrigger` بـ `TabsContent` عبر `value`، ويحدد `defaultValue` اللوحة الأولى وتتنقل مفاتيح الأسهم بين التبويبات.

## Example: Basic tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@dev-dga/react';

export default function Demo() {
  return (
    <Tabs defaultValue="overview" style={{ inlineSize: 480, maxWidth: '100%' }}>
      <TabsList>
        <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
        <TabsTrigger value="details">التفاصيل</TabsTrigger>
        <TabsTrigger value="settings">الإعدادات</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        ملخص سريع للخدمة. بدّل التبويبات بمفاتيح الأسهم.
      </TabsContent>
      <TabsContent value="details">عرض تفصيلي كامل، الحقول والمرفقات والسجل.</TabsContent>
      <TabsContent value="settings">تفضيلات خاصة بالخدمة.</TabsContent>
    </Tabs>
  );
}
```

## Example: With leading icons

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@dev-dga/react';

const Home = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="M3 10.5 12 3l9 7.5M5 9v11h14V9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Bell = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path
      d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Gear = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <circle cx="12" cy="12" r="3" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Demo() {
  return (
    <Tabs defaultValue="overview" style={{ inlineSize: 480, maxWidth: '100%' }}>
      <TabsList>
        <TabsTrigger value="overview" startIcon={<Home />}>
          نظرة عامة
        </TabsTrigger>
        <TabsTrigger value="activity" startIcon={<Bell />}>
          النشاط
        </TabsTrigger>
        <TabsTrigger value="settings" startIcon={<Gear />}>
          الإعدادات
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">تظهر الأيقونات قبل التسمية بحجم ثابت 16px.</TabsContent>
      <TabsContent value="activity">النشاط الأخير لهذا العنصر.</TabsContent>
      <TabsContent value="settings">محتوى الإعدادات.</TabsContent>
    </Tabs>
  );
}
```

## Example: Full-width

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@dev-dga/react';

export default function Demo() {
  return (
    <Tabs defaultValue="pending" style={{ inlineSize: 480, maxWidth: '100%' }}>
      <TabsList fullWidth>
        <TabsTrigger value="pending">قيد الانتظار</TabsTrigger>
        <TabsTrigger value="approved">مقبول</TabsTrigger>
        <TabsTrigger value="rejected">مرفوض</TabsTrigger>
      </TabsList>
      <TabsContent value="pending">تتمدّد المشغّلات المتساوية العرض لملء الصف.</TabsContent>
      <TabsContent value="approved">الطلبات المقبولة.</TabsContent>
      <TabsContent value="rejected">الطلبات المرفوضة.</TabsContent>
    </Tabs>
  );
}
```
