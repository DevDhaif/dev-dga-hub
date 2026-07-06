---
title: Progress Indicator
slug: progress-indicator
category: Navigation
status: new
description: 'A stepper for multi-step flows.'
---

Each `Step` declares its `state`: completed, current, or upcoming. Switch layout with `orientation` and the marker style with `appearance`.

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
      aria-label="Application progress"
      style={{ inlineSize: 640, maxWidth: '100%' }}
    >
      <Step state="completed">
        <StepIndicator step={1} />
        <StepContent>
          <a href="#details">
            <StepTitle>Your details</StepTitle>
          </a>
          <StepDescription>Completed</StepDescription>
        </StepContent>
      </Step>
      <Step state="current">
        <StepIndicator step={2} />
        <StepContent>
          <a href="#documents">
            <StepTitle>Upload documents</StepTitle>
          </a>
          <StepDescription>In progress</StepDescription>
        </StepContent>
      </Step>
      <Step state="upcoming">
        <StepIndicator step={3} />
        <StepContent>
          <StepTitle>Review</StepTitle>
        </StepContent>
      </Step>
      <Step state="upcoming">
        <StepIndicator step={4} />
        <StepContent>
          <StepTitle>Submit</StepTitle>
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
      aria-label="Onboarding"
      style={{ inlineSize: 320, maxWidth: '100%' }}
    >
      <Step state="completed">
        <StepIndicator step={1} />
        <StepContent>
          <a href="#account">
            <StepTitle>Create account</StepTitle>
          </a>
          <StepDescription>Done 2 days ago</StepDescription>
        </StepContent>
      </Step>
      <Step state="completed">
        <StepIndicator step={2} />
        <StepContent>
          <a href="#verify">
            <StepTitle>Verify email</StepTitle>
          </a>
        </StepContent>
      </Step>
      <Step state="current">
        <StepIndicator step={3} />
        <StepContent>
          <a href="#profile">
            <StepTitle>Complete profile</StepTitle>
          </a>
          <StepDescription>Recommended</StepDescription>
        </StepContent>
      </Step>
      <Step state="upcoming">
        <StepIndicator step={4} />
        <StepContent>
          <StepTitle>Invite teammates</StepTitle>
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
      aria-label="Upload progress"
      style={{ inlineSize: 480, maxWidth: '100%' }}
    >
      <Step state="completed">
        <StepIndicator step={1} />
        <StepContent>
          <a href="#select">
            <StepTitle>Select</StepTitle>
          </a>
        </StepContent>
      </Step>
      <Step state="current">
        <StepIndicator step={2} />
        <StepContent>
          <a href="#upload">
            <StepTitle>Upload</StepTitle>
          </a>
        </StepContent>
      </Step>
      <Step state="upcoming">
        <StepIndicator step={3} />
        <StepContent>
          <StepTitle>Review</StepTitle>
        </StepContent>
      </Step>
    </ProgressIndicator>
  );
}
```
