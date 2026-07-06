---
title: Code Snippet
slug: code-snippet
category: Data display
status: new
description: 'A code block with tabs, line numbers, and a copy button.'
---

CodeSnippet takes a `languages` array; more than one entry shows tabs. Use `maxLines` for a Show More toggle, and `CodeSnippetInline` for one-line commands. Code always renders left to right.

## Example: Multiple languages

```tsx
import { CodeSnippet } from '@dev-dga/react';

const JS = `// Fetch the national service catalog
const res = await fetch(
  'https://api.gov.example.sa/v1/services',
);
const services = await res.json();
console.log(services.length);`;

const PYTHON = `# Fetch the national service catalog
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
  authority: 'Digital Government Authority',
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

const SCHEMA = `# Permit request schema
from pydantic import BaseModel

class PermitRequest(BaseModel):
    citizen_id: str
    service_code: str
    ministry: str
    submitted_at: str
    status: str = "pending"
    priority: int = 3

# Instance
request = PermitRequest(
    citizen_id="1000000000",
    service_code="BLD-204",
    ministry="Municipal Affairs",
    submitted_at="2026-07-02",
)`;

export default function Demo() {
  return (
    <CodeSnippet maxLines={8} languages={[{ value: 'python', label: 'Python', code: SCHEMA }]} />
  );
}
```

## Example: Inline command

```tsx
import { CodeSnippetInline } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <CodeSnippetInline prefix="pnpm">pnpm add @dev-dga/react @dev-dga/css</CodeSnippetInline>
      <CodeSnippetInline prefix="npm">npm install @dev-dga/react</CodeSnippetInline>
    </div>
  );
}
```
