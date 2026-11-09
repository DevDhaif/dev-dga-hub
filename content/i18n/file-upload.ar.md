---
description: 'مكون رفع ملفات في React بالسحب والإفلات، مع التحقق من النوع والحجم، حالة وتقدم لكل ملف، ونمط زر مضغوط. خاضع للتحكم بالكامل وجاهز للاتجاه العربي.'
seoTitle: 'رفع الملفات: مكون FileUpload بالسحب والإفلات'
---

يعمل FileUpload خاضعاً للتحكم بالكامل: تملك أنت مصفوفة `files`، وتنفذ الرفع بنفسك، وتحدّث `status` لكل ملف. يتحقق المكون من الملفات عبر `accept`، `maxSize`، و`maxFiles`.

## When to use

استخدم FileUpload للمرفقات مثل صور الهوية، العقود، والمستندات الداعمة. اضبط `accept`، `maxSize`، و`maxFiles` بحسب قواعد الخدمة، وحدّث `status` لكل ملف مع تقدم الرفع.

استخدم نمط الزر داخل النماذج الكثيفة، ومنطقة الإفلات حين يمثل رفع الملفات المهمة الرئيسية. أبق القواعد ظاهرة في النص المساعد.

## Example: Drag-and-drop zone

```tsx
import { useRef, useState } from 'react';
import { FileUpload, type UploadFile } from '@dev-dga/react';

export default function Demo() {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const idRef = useRef(0);

  function handleAdded(accepted: File[]) {
    const added = accepted.map<UploadFile>((file) => ({
      id: `f${idRef.current++}`,
      file,
      status: 'uploading',
    }));
    setFiles((prev) => [...prev, ...added]);
    // Simulate each upload finishing after a moment.
    added.forEach((item) =>
      setTimeout(() => {
        setFiles((prev) => prev.map((f) => (f.id === item.id ? { ...f, status: 'success' } : f)));
      }, 1200),
    );
  }

  return (
    <div style={{ maxWidth: 360 }}>
      <FileUpload
        files={files}
        onFilesAdded={handleAdded}
        onRemove={(id) => setFiles((prev) => prev.filter((f) => f.id !== id))}
        accept="image/*,.pdf"
        maxSize={2 * 1024 * 1024}
        description="الحد الأقصى لحجم الملف 2 ميجابايت. الصيغ المقبولة: .jpg و.png و.pdf."
      />
    </div>
  );
}
```

## Example: Single file (button variant)

```tsx
import { useState } from 'react';
import { FileUpload, type UploadFile } from '@dev-dga/react';

export default function Demo() {
  const [files, setFiles] = useState<UploadFile[]>([]);

  return (
    <FileUpload
      variant="button"
      multiple={false}
      label="نسخة من الهوية الوطنية"
      description="ملف PDF واحد أو صورة، بحد أقصى 5 ميجابايت."
      accept="image/*,.pdf"
      files={files}
      onFilesAdded={(accepted) =>
        setFiles(accepted.map<UploadFile>((file) => ({ id: '1', file, status: 'success' })))
      }
      onRemove={() => setFiles([])}
    />
  );
}
```

## Example: Validation & rejections

```tsx
import { useRef, useState } from 'react';
import { FileUpload, type UploadFile, type FileRejection } from '@dev-dga/react';

export default function Demo() {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [notice, setNotice] = useState<string | null>(null);
  const idRef = useRef(0);

  return (
    <div style={{ maxWidth: 360 }}>
      <FileUpload
        files={files}
        accept="image/*,.pdf"
        maxSize={2 * 1024 * 1024}
        maxFiles={3}
        description="حتى 3 ملفات. بحد أقصى 2 ميجابايت لكل ملف. .jpg أو .png أو .pdf."
        onFilesAdded={(accepted) => {
          setNotice(null);
          setFiles((prev) => [
            ...prev,
            ...accepted.map<UploadFile>((file) => ({
              id: `f${idRef.current++}`,
              file,
              status: 'success',
            })),
          ]);
        }}
        onFilesRejected={(rejections: FileRejection[]) =>
          setNotice(`${rejections[0].file.name}: ${rejections[0].errors.join(', ')}`)
        }
        onRemove={(id) => setFiles((prev) => prev.filter((f) => f.id !== id))}
      />
      {notice && (
        <p role="status" style={{ color: 'var(--ddga-color-error)', fontSize: 14, marginTop: 8 }}>
          {notice}
        </p>
      )}
    </div>
  );
}
```

## Accessibility

تعمل منطقة الإفلات زراً أيضاً، مما يتيح لمستخدم لوحة المفاتيح فتح منتقي الملفات بمفتاح Enter أو Space. تعلن التقنيات المساعدة الملفات المرفوضة عبر قائمة `role="alert"` تذكر سبب رفض كل ملف.

يعرض كل صف ملف حالته وزر إزالة له تسمية. ويربط المكون تسمية الحقل، النص المساعد، ورسالة الخطأ كما يربطها TextInput.
