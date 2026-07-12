# Accessibility Conformance Statement

**Product:** `@dev-dga/react`, `@dev-dga/css`, `@dev-dga/tokens` (the `@dev-dga/*` design system)
**Target standard:** [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Level AA, following the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
**Statement version:** as of `0.13.0` (2026-07-12)
**Conformance basis:** self-assessment through automated and manual testing (see [Conformance basis](#conformance-basis)). **Not independently audited.**

`@dev-dga` is an independent, community-maintained React implementation of Saudi Arabia's DGA (Digital Government Authority) **Platforms Code** design system. It is not affiliated with or endorsed by the DGA. Accessibility is a primary design goal: the official Bootstrap reference system publishes no accessibility statement, and Saudi (and international) government procurement increasingly requires WCAG conformance, so this document sets out exactly what the library provides, how it is verified, and where responsibility passes to you, the consumer.

---

## Summary

| Area                                               | Status                                                                                                                                                                      |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Keyboard operability                               | **Supports** - every interactive component is keyboard-operable and e2e-verified                                                                                            |
| Focus visibility & management                      | **Supports** - visible keyboard focus rings; focus trap / restore on overlays                                                                                               |
| Screen readers / ARIA semantics                    | **Supports** - WAI-ARIA roles, states, and properties on all interactive widgets                                                                                            |
| RTL & Arabic                                       | **Supports** - direction-native, enforced by a build-failing lint gate                                                                                                      |
| High-contrast mode (Windows HCM / `forced-colors`) | **Supports** - 63 of 66 component stylesheets                                                                                                                               |
| Reduced motion                                     | **Supports** - honored by every animated component                                                                                                                          |
| Color contrast                                     | **Partially / by design target** - default tokens are designed to DGA/WCAG thresholds but are **not independently measured in CI**; re-theming shifts responsibility to you |
| Target size, page structure, content semantics     | **Shared responsibility** - see [Consumer responsibilities](#consumer-responsibilities)                                                                                     |

Automated accessibility checks (axe-core) run against **all 64 components** on every test run, and **47 Playwright end-to-end specs** exercise the keyboard, focus, and RTL behaviors that a DOM-only test cannot honor.

---

## Conformance basis

We assess conformance ourselves, using:

1. **Automated unit-level checks** - every component has at least one [`vitest-axe`](https://github.com/chaance/vitest-axe) (axe-core) assertion, run in both LTR and RTL/Arabic contexts as part of the standard test suite (1,700+ unit tests).
2. **Manual and automated behavioral testing** - 47 Playwright specs drive real-browser keyboard navigation, roving tabindex, focus traps, arrow-key semantics, Escape handling, focus restoration, RTL key inversion, and focus-ring geometry.
3. **Foundational primitives** - interactive widgets are built on [Radix Primitives](https://www.radix-ui.com/primitives) and [React Aria](https://react-spectrum.adobe.com/react-aria/), which implement the WAI-ARIA Authoring Practices for keyboard and ARIA behavior.

**What this basis does _not_ include, and you should not assume:**

- **No independent third-party audit or certified VPAT.** This is a good-faith self-assessment.
- **Automated tooling catches a minority of issues.** axe-core detects roughly a third of WCAG problems; it cannot judge whether an accessible name is _meaningful_, whether reading order makes sense, or whether your content is understandable.
- **Color-contrast ratios are not measured in CI.** The default color tokens are _designed_ against the DGA/WCAG thresholds (4.5:1 body text, 3:1 large text and UI components), but there is no automated contrast gate, and re-theming (`<DgaProvider theme=…>`) can change the result. See [Known limitations](#known-limitations) and [Consumer responsibilities](#consumer-responsibilities).

---

## How the library is built for accessibility

**Interactive widgets stand on accessible foundations.** Complex behavior (menus, dialogs, tabs, selects, sliders, switches, date pickers, and more) is delegated to battle-tested primitives rather than re-implemented:

- **25 components on Radix Primitives** - Accordion, Avatar, Checkbox, Collapsible, Command, ContentSwitcher, Drawer, Dropdown, DropdownMenu, Filtration, Menubar, Modal, NotificationToast, Pagination, Popover, Progress, Radio, ScrollArea, Select, SlideoutMenu, Slider, Switch, Tabs, Toggle, Tooltip. These provide keyboard interaction, focus management, and ARIA roles/states per the WAI-ARIA APG.
- **2 components on React Aria** - DatePicker and DateRangePicker (with `@internationalized/date`) for the calendar grid's roving focus, arrow-key navigation, and localized (including Hijri / Umm al-Qura) semantics.
- **Presentational and simpler components use native semantic HTML** (`<button>`, `<a>`, `<table>`, `<dl>`, `<ul>`/`<ol>`, `<blockquote>`, `<figure>`) plus Radix `Slot` for polymorphic composition (`asChild`).

**Cross-cutting a11y features baked into the system:**

- **Visible keyboard focus.** Focus rings key off `:focus-visible` (not `:focus`), so they appear for keyboard users without flashing on mouse clicks. The ring uses a dedicated `--ddga-color-focus-ring` ink token (`#161616`). `:focus-visible` styling is present across 43 component stylesheets and verified for ring geometry in e2e.
- **High-contrast / forced-colors mode.** 63 of 66 component stylesheets carry a `@media (forced-colors: active)` block restoring focus, borders, and state indicators under Windows High Contrast Mode. (The 3 without are static or field-composing components; documented below.)
- **Reduced motion.** Every animated component honors `@media (prefers-reduced-motion: reduce)`, freezing or removing transitions and animations (42 stylesheets).
- **RTL is direction-native and enforced.** `<DgaProvider dir="rtl">` sets `dir`/`lang` on the root, wraps children in Radix's `DirectionProvider` (so portalled overlays inherit direction), and mirrors direction onto the body-level portal container. All component CSS uses logical properties (`margin-inline`, `inset-inline`, `text-align: start/end`), and a **build-failing test gate** (`rtl-logical-properties.test.ts`) rejects any physical-direction CSS or inline `translateX` that would break RTL.
- **Screen-reader-only text.** A global `.ddga-sr-only` utility provides visually-hidden accessible names/announcements (used for live regions, icon-only affordance labels, and currency names).
- **Dev-time accessibility warnings.** In development builds, components warn when a required accessible name is missing:
  - The shared `useFieldA11y` hook warns any of **15 form controls** (Checkbox, DatePicker, DateRangePicker, Dropdown, FileUpload, InputOTP, NumberInput, Radio, Rating, Select, Slider, Switch, TagInput, Textarea, TextInput) that has no `label`, `aria-label`, or `aria-labelledby`.
  - Icon-only or region components (Button, Card selectable, Carousel, ContentSwitcher, Filtration, FloatingButton, Link-without-href, Popover, CircularProgress, ScrollArea, StructuredList, Table region/sort/filter, Tabs, Tag) warn when their name is missing.

---

## Testing and evidence

| Method                      | Coverage                                                                                                                                                                            |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **axe-core (`vitest-axe`)** | Automated a11y assertions on **all 64 components**, run in LTR and RTL/Arabic contexts                                                                                              |
| **Playwright end-to-end**   | **47 specs** covering keyboard nav, roving tabindex, focus traps, arrow-key & Home/End semantics, type-ahead, Escape, focus restoration, RTL key inversion, and focus-ring geometry |
| **RTL gate**                | `rtl-logical-properties.test.ts` fails the build on physical-direction CSS or inline `translateX`                                                                                   |
| **Unit tests**              | 1,700+ tests across the component surface                                                                                                                                           |

Representative e2e coverage (not exhaustive):

- **Focus trap + Escape + focus restoration** - Drawer, Modal, SlideoutMenu, Popover, Filtration (Radix Dialog family): focus moves into the overlay on open, Tab/Shift+Tab cycle stays trapped, Escape closes and returns focus to the trigger.
- **Roving tabindex + arrow keys + type-ahead** - Tabs (arrow traversal, Home/End, disabled-skip, vertical, RTL inversion), DropdownMenu (arrow nav, submenus open/close on ArrowRight/Left and inverted in RTL, type-ahead), Menubar (cross-bar roving), Dropdown/combobox, Rating (arrow step, RTL inverted), Chip (Space/Enter toggle).
- **Calendar grid keyboard** - DatePicker: arrow keys move day cells (RTL-reversed), Enter picks, Escape returns focus; Hijri toggle; full Arabic-locale path. The weekday header renders the SDGA 2-letter row locale-aware (`Su Mo Tu…` in English; distinct single Arabic letters - never a collapsed "ال").
- **Hover vs. keyboard focus are visually distinct** - verified that mouse hover shows no focus ring while keyboard focus does.

---

## WCAG 2.2 AA support by criterion

Component-level assessment. Criteria whose satisfaction depends on _your_ content or configuration are marked **Shared** and explained under [Consumer responsibilities](#consumer-responsibilities).

| Success criterion                                                      | Level    | Status                           | Notes                                                                                                                      |
| ---------------------------------------------------------------------- | -------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 1.3.1 Info and Relationships                                           | A        | Supports                         | Semantic HTML + ARIA from Radix/React Aria; form controls wired via `useFieldA11y` (label/description/error associations). |
| 1.3.2 Meaningful Sequence                                              | A        | Supports                         | Logical DOM order; RTL handled via logical properties + `DirectionProvider`.                                               |
| 1.4.1 Use of Color                                                     | A        | Supports                         | State is never conveyed by color alone (icons, text, patterns, focus rings accompany color).                               |
| 1.4.3 Contrast (Minimum)                                               | AA       | **Partially / by design target** | Default tokens designed to DGA thresholds; **not measured in CI**; re-theming is your responsibility.                      |
| 1.4.10 Reflow                                                          | AA       | Supports                         | Responsive, container-aware layouts; no fixed-width traps in components.                                                   |
| 1.4.11 Non-text Contrast                                               | AA       | **Partially / by design target** | Focus rings and control borders designed to ≥3:1 with default tokens; not independently measured.                          |
| 1.4.12 Text Spacing                                                    | AA       | Supports                         | Components use relative units and do not clip on increased text spacing.                                                   |
| 1.4.13 Content on Hover or Focus                                       | AA       | Supports                         | Tooltip/Popover content is dismissable (Escape), hoverable, and persistent (Radix behavior).                               |
| 2.1.1 Keyboard                                                         | A        | Supports                         | All interactive components operable by keyboard; e2e-verified.                                                             |
| 2.1.2 No Keyboard Trap                                                 | A        | Supports                         | Overlays trap focus intentionally and release on Escape/close; no unintended traps.                                        |
| 2.3.3 Animation from Interactions                                      | AAA\*    | Supports                         | `prefers-reduced-motion` honored library-wide (exceeds AA).                                                                |
| 2.4.3 Focus Order                                                      | A        | Supports                         | Focus order follows DOM/visual order; overlays restore focus to trigger.                                                   |
| 2.4.7 Focus Visible                                                    | AA       | Supports                         | `:focus-visible` ink ring on all interactive components.                                                                   |
| 2.4.11 Focus Not Obscured (Minimum)                                    | AA (2.2) | Supports                         | Portalled overlays render above content; focused elements are not hidden by component chrome.                              |
| 2.5.8 Target Size (Minimum)                                            | AA (2.2) | **Partially**                    | Form controls use ≥24px targets (e.g. Radio/Checkbox 24px hit frames); not audited across every component/size.            |
| 3.2.1 On Focus / 3.2.2 On Input                                        | A        | Supports                         | No context change on focus or input beyond documented, expected behavior.                                                  |
| 3.3.1 Error Identification / 3.3.2 Labels or Instructions              | A        | Supports (with your content)     | Field a11y wires errors/help text and `aria-invalid`; you supply the label and message text.                              |
| 4.1.2 Name, Role, Value                                                | A        | Supports                         | Roles/states/values from Radix/React Aria + native elements; dev warnings catch missing names.                             |
| 1.1.1 Non-text Content                                                 | A        | **Shared**                       | You provide `alt`/`aria-label` for images, icons, and media you pass in.                                                   |
| 2.4.2 Page Titled / 2.4.6 Headings and Labels / 3.1.1 Language of Page | A/AA     | **Shared**                       | Page-level concerns owned by your application.                                                                             |

\* 2.3.3 is a AAA criterion; we honor it as a matter of course.

---

## Known limitations

- **No independent third-party audit or certified VPAT.** This statement is a self-assessment.
- **Color contrast is not measured in CI.** Default tokens target the DGA/WCAG thresholds, but ratios are not asserted by any automated gate. If you change the theme, palette, or place components on custom backgrounds, re-verify contrast yourself.
- **Three stylesheets have no `forced-colors` block** by design: `field.css` (shared primitive, inherits from consumers), `list.css` (static text list, zero color surface), and `search-box.css` (composes the TextInput field, which carries the block). No interactive affordance is left unstyled under HCM.
- **Target Size (2.5.8)** is met for form controls but not exhaustively audited across every component and size variant.
- **Automated coverage is a floor, not a ceiling.** Passing axe does not guarantee a good screen-reader experience; test with real assistive technology and real content.

---

## Consumer responsibilities

The library gives you accessible building blocks. Your application must still:

1. **Provide accessible names.** Pass `label`, `aria-label`, or `aria-labelledby` to form controls, icon-only buttons, regions (Table, ScrollArea, Carousel, Popover), and CircularProgress. Development-mode warnings flag omissions.
2. **Provide text alternatives** for images, icons, avatars, and media you render through the components.
3. **Maintain document structure** - a sensible heading hierarchy, landmark regions, page `<title>`, and page `lang` (set `lang`/`dir` at the app root; `DgaProvider` sets them on its subtree).
4. **Re-verify contrast if you re-theme.** Custom palettes, brand colors, or non-default backgrounds can drop below AA. Use the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or the [EightShapes Contrast Grid](https://contrast-grid.eightshapes.com/).
5. **Write meaningful error and helper text** for form fields; the library wires the associations, you supply the words.
6. **Test with assistive technology** (NVDA, VoiceOver, JAWS) and keyboard-only, against your real content and flows.

---

## Reporting an accessibility issue

Accessibility bugs are treated as high priority. Please report them at the public issue tracker: **[dev-dga-hub](https://github.com/DevDhaif/dev-dga-hub/issues)**. Include the component, the assistive technology / browser / OS, the expected vs. actual behavior, and a reproduction if possible.

---

## References

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) · [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Radix Primitives - Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)
- [React Aria - Accessibility](https://react-spectrum.adobe.com/react-aria/accessibility.html)
