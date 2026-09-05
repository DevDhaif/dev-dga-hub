---
title: FileUpload
slug: file-upload
category: Form inputs
status: stable
description: 'React file upload with drag and drop, accept and size validation, per-file status and progress, and a compact button variant. Fully controlled, RTL ready.'
seoTitle: 'FileUpload: React drag-and-drop file uploader'
---

FileUpload is fully controlled: you own the `files` array, run the upload yourself, and report each file's `status`. Validation uses `accept`, `maxSize`, and `maxFiles`.

## When to use

Use FileUpload for attachments such as ID scans, contracts, or supporting documents. Set `accept`, `maxSize`, and `maxFiles` to match the service rules, and report each file's `status` as your upload proceeds.

Use the button variant inside dense forms and the drop zone when files are the main task. Keep the rules visible in the helper text.

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
        description="Maximum file size 2MB. Accepted formats: .jpg, .png, and .pdf."
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
      label="National ID copy"
      description="A single PDF or image, up to 5MB."
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
        description="Up to 3 files. Max 2MB each. .jpg, .png, or .pdf."
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

The drop zone is also a button, so keyboard users can open the file picker with Enter or Space. Rejections are announced through a `role="alert"` list with the reason for each file.

Each file row exposes its status and a labelled remove button. The field label, helper text, and error are wired like TextInput.
