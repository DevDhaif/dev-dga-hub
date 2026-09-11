---
description: 'كتلة كود في React بتبويبات لغات وأرقام أسطر وزر نسخ وطيّ «عرض المزيد» ونمط مضمّن. يبقى الكود من اليسار إلى اليمين في الصفحات العربية.'
seoTitle: 'مقتطف كود: مكوّن CodeSnippet بتبويبات وزر نسخ'
---

يستقبل CodeSnippet مصفوفة `languages`، وتظهر التبويبات عند وجود أكثر من لغة. استخدم `maxLines` لزر إظهار المزيد، و`CodeSnippetInline` للأوامر القصيرة. تعرض الشيفرة دائمًا من اليسار إلى اليمين.

## When to use

استخدم CodeSnippet في وثائق المطوّرين وبوّابات واجهات البرمجة وأدلّة التكامل. مرّر عدّة `languages` لإظهار التبويبات، واستخدم `maxLines` للعيّنات الطويلة، و`CodeSnippetInline` للأوامر أو القيم المفردة داخل الجملة.

## Accessibility

لزر النسخ اسم متاح ويعلن النجاح عبر منطقة حيّة. يعرض زر «عرض المزيد» `aria-expanded`.

يُعرض الكود داخل `<pre>` و`<code>` باتجاه إجباري من اليسار إلى اليمين، فيُقرأ بشكل صحيح داخل المحتوى العربي. التبويبات تعمل بلوحة المفاتيح.

## Example: Multiple languages

```tsx
import { CodeSnippet } from '@dev-dga/react';

const JS = `// جلب دليل الخدمات الوطني
const res = await fetch(
  'https://api.gov.example.sa/v1/services',
);
const services = await res.json();
console.log(services.length);`;

const PYTHON = `# جلب دليل الخدمات الوطني
import requests

res = requests.get("https://api.gov.example.sa/v1/services")
services = res.json()
print(len(services))`;

export default function Demo() {
  return (
    <CodeSnippet
      languages={[
        { value: 'js', label: 'JavaScript', code: JS },
        { value: 'python', label: 'Python', code: PYTHON },
      ]}
    />
  );
}
```

## Example: Single language, no line numbers

```tsx
import { CodeSnippet } from '@dev-dga/react';

const CONFIG = `export const config = {
  authority: 'هيئة الحكومة الرقمية',
  region: 'sa-central-1',
  retries: 3,
};`;

export default function Demo() {
  return (
    <CodeSnippet
      lineNumbers={false}
      languages={[{ value: 'ts', label: 'TypeScript', code: CONFIG }]}
    />
  );
}
```

## Example: Collapsible with Show More

```tsx
import { CodeSnippet } from '@dev-dga/react';

const SCHEMA = `# مخطّط طلب الرخصة
from pydantic import BaseModel

class PermitRequest(BaseModel):
    citizen_id: str
    service_code: str
    ministry: str
    submitted_at: str
    status: str = "pending"
    priority: int = 3

# مثال
request = PermitRequest(
    citizen_id="1000000000",
    service_code="BLD-204",
    ministry="الشؤون البلدية",
    submitted_at="2026-07-02",
)`;

export default function Demo() {
  return (
    <CodeSnippet maxLines={8} languages={[{ value: 'python', label: 'Python', code: SCHEMA }]} />
  );
}
```
