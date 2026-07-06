---
title: Sidebar
slug: sidebar
category: App shell
status: stable
description: 'App navigation with a collapsible rail and mobile drawer.'
---

Wrap the app in `SidebarProvider`, then place a `Sidebar` and a `SidebarInset`. It collapses to an icon rail on desktop and a drawer on mobile, and flips sides in RTL.

## Example: App shell

```tsx
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarInset,
  SidebarTrigger,
} from '@dev-dga/react';

const Home = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <path d="M3 11 12 3l9 8M5 9v11h5v-6h4v6h5V9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Services = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <path
      d="M14 3v4a1 1 0 0 0 1 1h4M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-4-5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 13h6M9 17h6" strokeLinecap="round" />
  </svg>
);
const Requests = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <path d="M4 4h16v12H8l-4 4V4Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Citizens = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <circle cx="9" cy="8" r="3" />
    <path
      d="M3 20a6 6 0 0 1 12 0M16 4a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Settings = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <circle cx="12" cy="12" r="3" />
    <path
      d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
      strokeLinecap="round"
    />
  </svg>
);
const Account = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <SidebarProvider
      style={{
        height: 360,
        border: '1px solid var(--ddga-color-border)',
        borderRadius: 'var(--ddga-radius-lg)',
        overflow: 'hidden',
        background: 'var(--ddga-color-background)',
      }}
    >
      <Sidebar aria-label="Main navigation">
        <SidebarHeader>
          <strong style={{ paddingInline: 'var(--ddga-space-2)' }}>DGA Portal</strong>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive tooltip="Dashboard">
                    <Home />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Services">
                    <Services />
                    <span>Services</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Requests">
                    <Requests />
                    <span>Requests</span>
                    <SidebarMenuBadge>8</SidebarMenuBadge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Administration</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Citizens">
                    <Citizens />
                    <span>Citizens</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Settings">
                    <Settings />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenuButton tooltip="Account">
            <Account />
            <span>Account</span>
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--ddga-space-2)',
            padding: 'var(--ddga-space-3)',
            borderBlockEnd: '1px solid var(--ddga-color-border)',
          }}
        >
          <SidebarTrigger />
          <strong>Dashboard</strong>
        </header>
        <div style={{ padding: 'var(--ddga-space-4)' }}>
          Toggle the rail with the button above, or press Cmd/Ctrl+B.
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
```
