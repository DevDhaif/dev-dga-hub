---
title: Timeline
slug: timeline
category: Data display
status: stable
description: 'A chronological list with status markers.'
---

Compose `TimelineItem`s, each with a marker and content. The marker `status` is visual only, so keep the meaning in the text.

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
    <Timeline aria-label="Order history">
      <TimelineItem>
        <TimelineMarker status="success" />
        <TimelineContent>
          <TimelineTime dateTime="2026-06-01T09:00">9:00 AM</TimelineTime>
          <TimelineTitle>Order placed</TimelineTitle>
          <TimelineDescription>3 items confirmed</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="success" />
        <TimelineContent>
          <TimelineTime dateTime="2026-06-01T11:30">11:30 AM</TimelineTime>
          <TimelineTitle>Shipped</TimelineTitle>
          <TimelineDescription>Carrier: Aramex</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker />
        <TimelineContent>
          <TimelineTitle>Out for delivery</TimelineTitle>
          <TimelineDescription>Expected today</TimelineDescription>
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
    <Timeline aria-label="System log">
      <TimelineItem>
        <TimelineMarker status="info" />
        <TimelineContent>
          <TimelineTitle>Deploy started</TimelineTitle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="success" />
        <TimelineContent>
          <TimelineTitle>Build succeeded</TimelineTitle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="warning" />
        <TimelineContent>
          <TimelineTitle>Elevated latency</TimelineTitle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="error" />
        <TimelineContent>
          <TimelineTitle>Health check failed</TimelineTitle>
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
    <Timeline aria-label="Deployment">
      <TimelineItem>
        <TimelineMarker status="info">
          <Info />
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>Deploy started</TimelineTitle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="success">
          <Check />
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>Build succeeded</TimelineTitle>
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
      aria-label="Recent activity"
      style={{ '--ddga-timeline-node-size': '2rem' } as CSSProperties}
    >
      <TimelineItem>
        <TimelineMarker status="default">
          <Avatar size="sm">
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>Sara approved your request</TimelineTitle>
          <TimelineTime dateTime="2026-06-01T08:00">2h ago</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineMarker status="default">
          <Avatar size="sm">
            <AvatarFallback>MH</AvatarFallback>
          </Avatar>
        </TimelineMarker>
        <TimelineContent>
          <TimelineTitle>Mohammed commented on the document</TimelineTitle>
          <TimelineTime dateTime="2026-06-01T06:30">3h ago</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
```
