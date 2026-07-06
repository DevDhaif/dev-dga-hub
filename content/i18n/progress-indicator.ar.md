---
description: 'مؤشر خطوات للمسارات متعددة المراحل.'
---

يحدد كل `Step` حالته `state`: مكتملة أو حالية أو قادمة. بدل التخطيط بـ `orientation` وشكل العلامة بـ `appearance`.

## Example: Horizontal steps

```tsx
import {
  ProgressIndicator,
  Step,
  StepIndicator,
  StepContent,
  StepTitle,
  StepDescription,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <ProgressIndicator
      aria-label="تقدّم الطلب"
      style={{ inlineSize: 640, maxWidth: '100%' }}
    >
      <Step state="completed">
        <StepIndicator step={1} />
        <StepContent>
          <a href="#details">
            <StepTitle>بياناتك</StepTitle>
          </a>
          <StepDescription>مكتمل</StepDescription>
        </StepContent>
      </Step>
      <Step state="current">
        <StepIndicator step={2} />
        <StepContent>
          <a href="#documents">
            <StepTitle>رفع المستندات</StepTitle>
          </a>
          <StepDescription>قيد التنفيذ</StepDescription>
        </StepContent>
      </Step>
      <Step state="upcoming">
        <StepIndicator step={3} />
        <StepContent>
          <StepTitle>المراجعة</StepTitle>
        </StepContent>
      </Step>
      <Step state="upcoming">
        <StepIndicator step={4} />
        <StepContent>
          <StepTitle>إرسال</StepTitle>
        </StepContent>
      </Step>
    </ProgressIndicator>
  );
}
```

## Example: Vertical steps

```tsx
import {
  ProgressIndicator,
  Step,
  StepIndicator,
  StepContent,
  StepTitle,
  StepDescription,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <ProgressIndicator
      orientation="vertical"
      aria-label="الإعداد"
      style={{ inlineSize: 320, maxWidth: '100%' }}
    >
      <Step state="completed">
        <StepIndicator step={1} />
        <StepContent>
          <a href="#account">
            <StepTitle>إنشاء حساب</StepTitle>
          </a>
          <StepDescription>تم قبل يومين</StepDescription>
        </StepContent>
      </Step>
      <Step state="completed">
        <StepIndicator step={2} />
        <StepContent>
          <a href="#verify">
            <StepTitle>تأكيد البريد الإلكتروني</StepTitle>
          </a>
        </StepContent>
      </Step>
      <Step state="current">
        <StepIndicator step={3} />
        <StepContent>
          <a href="#profile">
            <StepTitle>استكمال الملف الشخصي</StepTitle>
          </a>
          <StepDescription>موصى به</StepDescription>
        </StepContent>
      </Step>
      <Step state="upcoming">
        <StepIndicator step={4} />
        <StepContent>
          <StepTitle>دعوة أعضاء الفريق</StepTitle>
        </StepContent>
      </Step>
    </ProgressIndicator>
  );
}
```

## Example: Dot appearance

```tsx
import { ProgressIndicator, Step, StepIndicator, StepContent, StepTitle } from '@dev-dga/react';

export default function Demo() {
  return (
    <ProgressIndicator
      appearance="dot"
      aria-label="تقدّم الرفع"
      style={{ inlineSize: 480, maxWidth: '100%' }}
    >
      <Step state="completed">
        <StepIndicator step={1} />
        <StepContent>
          <a href="#select">
            <StepTitle>الاختيار</StepTitle>
          </a>
        </StepContent>
      </Step>
      <Step state="current">
        <StepIndicator step={2} />
        <StepContent>
          <a href="#upload">
            <StepTitle>الرفع</StepTitle>
          </a>
        </StepContent>
      </Step>
      <Step state="upcoming">
        <StepIndicator step={3} />
        <StepContent>
          <StepTitle>المراجعة</StepTitle>
        </StepContent>
      </Step>
    </ProgressIndicator>
  );
}
```
