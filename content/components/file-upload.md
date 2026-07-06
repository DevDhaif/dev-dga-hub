---
title: FileUpload
slug: file-upload
category: Form inputs
status: stable
description: 'A file uploader with drag and drop.'
---

FileUpload is fully controlled: you own the `files` array, run the upload yourself, and report each file's `status`. Validation uses `accept`, `maxSize`, and `maxFiles`.

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
