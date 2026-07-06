---
title: Modal
slug: modal
category: Overlays
status: stable
description: 'A centered dialog over the page.'
---

Modal opens a centered dialog from a trigger: header, body, and a footer of actions. It inherits theme and direction from the provider.

## Example: Confirmation dialog

```tsx
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  ModalClose,
  Button,
} from '@dev-dga/react';

const Info = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open dialog</Button>
      </ModalTrigger>
      <ModalContent closeLabel="Close">
        <ModalHeader icon={<Info />}>
          <ModalTitle>Publish this dataset?</ModalTitle>
        </ModalHeader>
        <ModalBody>
          Once published, the dataset becomes visible on the national open-data portal. You can
          unpublish it at any time.
        </ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="outline">Cancel</Button>
          </ModalClose>
          <ModalClose asChild>
            <Button>Publish</Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
```
