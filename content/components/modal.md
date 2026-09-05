---
title: Modal
slug: modal
category: Overlays
status: stable
description: 'Accessible React modal dialog built on Radix: header icon, title, description, body, footer actions, sizes, focus trapping, and Escape to close. Inherits theme and RTL.'
seoTitle: 'Modal: accessible React modal dialog with focus trap'
---

Modal opens a centered dialog from a trigger: header, body, and a footer of actions. It inherits theme and direction from the provider.

## When to use

Use Modal for a short task that must be completed or cancelled before returning. Examples: confirming a deletion, entering a verification code, or reviewing a summary before submission. Keep it to one purpose and a few controls.

For longer secondary flows, use Drawer. For a lightweight panel anchored to a control, use Popover.

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

## Accessibility

Modal is a Radix Dialog: it renders `role="dialog"` with `aria-modal`, traps focus while open, closes on Escape, and returns focus to the trigger on close. `ModalTitle` and `ModalDescription` are linked to the dialog so its name and purpose are announced.

The close button uses `closeLabel` as its accessible name, and the overlay inherits direction and theme from the provider.
