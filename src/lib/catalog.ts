
export type Status = 'stable' | 'new';

export interface ComponentMeta {
  slug: string;
  name: string;
  blurb: string;
  status?: Status;
  source?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  components: ComponentMeta[];
}

const src = (dir: string, file: string) => `packages/react/src/components/${dir}/${file}`;

export const CATEGORIES: Category[] = [
  {
    id: 'actions',
    title: 'Actions & buttons',
    description: 'Controls that trigger an action or a change in state.',
    components: [
      {
        slug: 'button',
        name: 'Button',
        blurb: 'The primary interactive control - variants, sizes, loading, asChild.',
        source: src('Button', 'Button.tsx'),
      },
      {
        slug: 'floating-button',
        name: 'FloatingButton',
        blurb: 'A standalone floating action button (FAB) for a primary page action.',
        status: 'new',
        source: src('FloatingButton', 'FloatingButton.tsx'),
      },
      {
        slug: 'link',
        name: 'Link',
        blurb: 'A styled, accessible text link with variants and external affordances.',
        source: src('Link', 'Link.tsx'),
      },
      {
        slug: 'toggle',
        name: 'Toggle',
        blurb: 'A two-state button that stays pressed - bold/underline style controls.',
        source: src('Toggle', 'Toggle.tsx'),
      },
      {
        slug: 'content-switcher',
        name: 'ContentSwitcher',
        blurb: 'A segmented control for switching between mutually exclusive views.',
        source: src('ContentSwitcher', 'ContentSwitcher.tsx'),
      },
    ],
  },
  {
    id: 'inputs',
    title: 'Form inputs',
    description: 'Fields and controls for collecting input, with built-in field a11y.',
    components: [
      {
        slug: 'text-input',
        name: 'TextInput',
        blurb: 'A single-line text field with affixes, dropdowns, and validation states.',
        source: src('TextInput', 'TextInput.tsx'),
      },
      {
        slug: 'textarea',
        name: 'Textarea',
        blurb: 'A multi-line text field that grows with its content.',
        source: src('Textarea', 'Textarea.tsx'),
      },
      {
        slug: 'number-input',
        name: 'NumberInput',
        blurb: 'A numeric field with stepper buttons and min/max/step.',
        source: src('NumberInput', 'NumberInput.tsx'),
      },
      {
        slug: 'select',
        name: 'Select',
        blurb: 'A Radix-backed listbox for choosing one option from many.',
        source: src('Select', 'Select.tsx'),
      },
      {
        slug: 'dropdown',
        name: 'Dropdown',
        blurb: 'A form dropdown input supporting single and multiple selection.',
        source: src('Dropdown', 'Dropdown.tsx'),
      },
      {
        slug: 'checkbox',
        name: 'Checkbox',
        blurb: 'A checkbox with indeterminate state and field wiring.',
        source: src('Checkbox', 'Checkbox.tsx'),
      },
      {
        slug: 'radio',
        name: 'Radio',
        blurb: 'A radio group - one choice from a small, visible set.',
        source: src('Radio', 'Radio.tsx'),
      },
      {
        slug: 'switch',
        name: 'Switch',
        blurb: 'An on/off toggle for a single binary setting.',
        source: src('Switch', 'Switch.tsx'),
      },
      {
        slug: 'slider',
        name: 'Slider',
        blurb: 'A range slider for single values or dual-thumb ranges.',
        source: src('Slider', 'Slider.tsx'),
      },
      {
        slug: 'rating',
        name: 'Rating',
        blurb: 'A star rating input, keyboard-operable and half-step aware.',
        source: src('Rating', 'Rating.tsx'),
      },
      {
        slug: 'input-otp',
        name: 'InputOTP',
        blurb: 'A segmented one-time-passcode input.',
        source: src('InputOTP', 'InputOTP.tsx'),
      },
      {
        slug: 'tag-input',
        name: 'TagInput',
        blurb: 'An input that collects free-form values as removable tags.',
        source: src('TagInput', 'TagInput.tsx'),
      },
      {
        slug: 'search-box',
        name: 'SearchBox',
        blurb: 'A search field composing TextInput, with optional voice affordance.',
        status: 'new',
        source: src('SearchBox', 'SearchBox.tsx'),
      },
      {
        slug: 'file-upload',
        name: 'FileUpload',
        blurb: 'A drag-and-drop file upload with validation and progress.',
        source: src('FileUpload', 'FileUpload.tsx'),
      },
      {
        slug: 'date-picker',
        name: 'DatePicker',
        blurb: 'A calendar date field supporting Gregorian and Hijri systems.',
        status: 'new',
        source: src('DatePicker', 'DatePicker.tsx'),
      },
      {
        slug: 'date-range-picker',
        name: 'DateRangePicker',
        blurb: 'A dual-calendar range picker built on the same calendar core.',
        status: 'new',
        source: src('DateRangePicker', 'DateRangePicker.tsx'),
      },
      {
        slug: 'chip',
        name: 'Chip',
        blurb: 'A compact, selectable chip - filters, choices, and removable tokens.',
        status: 'new',
        source: src('Chip', 'Chip.tsx'),
      },
    ],
  },
  {
    id: 'data-display',
    title: 'Data display',
    description: 'Surfaces and primitives for presenting content and records.',
    components: [
      {
        slug: 'card',
        name: 'Card',
        blurb: 'A composable content surface - image, header, body, footer, expandable.',
        source: src('Card', 'Card.tsx'),
      },
      {
        slug: 'tag',
        name: 'Tag',
        blurb: 'A small label for categorization and metadata.',
        source: src('Tag', 'Tag.tsx'),
      },
      {
        slug: 'status-tag',
        name: 'StatusTag',
        blurb: 'A semantic status pill - success, warning, error, info.',
        source: src('StatusTag', 'StatusTag.tsx'),
      },
      {
        slug: 'avatar',
        name: 'Avatar',
        blurb: 'A user avatar with image, fallback, status dot, and groups.',
        source: src('Avatar', 'Avatar.tsx'),
      },
      {
        slug: 'divider',
        name: 'Divider',
        blurb: 'A horizontal or vertical rule, optionally with a label.',
        source: src('Divider', 'Divider.tsx'),
      },
      {
        slug: 'description-list',
        name: 'DescriptionList',
        blurb: 'Term/description pairs for key–value detail views.',
        source: src('DescriptionList', 'DescriptionList.tsx'),
      },
      {
        slug: 'list',
        name: 'List',
        blurb: 'Ordered and unordered lists with consistent rhythm.',
        source: src('List', 'List.tsx'),
      },
      {
        slug: 'structured-list',
        name: 'StructuredList',
        blurb: 'A lightweight tabular list for structured rows.',
        source: src('StructuredList', 'StructuredList.tsx'),
      },
      {
        slug: 'metric',
        name: 'Metric',
        blurb: 'A KPI tile - value, change delta, and inline trend chart.',
        source: src('Metric', 'Metric.tsx'),
      },
      {
        slug: 'quote',
        name: 'Quote',
        blurb: 'A pull quote / blockquote with attribution.',
        source: src('Quote', 'Quote.tsx'),
      },
      {
        slug: 'timeline',
        name: 'Timeline',
        blurb: 'A vertical timeline of events with markers and status.',
        source: src('Timeline', 'Timeline.tsx'),
      },
      {
        slug: 'table',
        name: 'Table',
        blurb: 'A composable data table - header, body, footer, caption.',
        source: src('Table', 'Table.tsx'),
      },
      {
        slug: 'aspect-ratio',
        name: 'AspectRatio',
        blurb: 'A container that locks its children to a fixed ratio.',
        source: src('AspectRatio', 'AspectRatio.tsx'),
      },
      {
        slug: 'digital-stamp',
        name: 'DigitalStamp',
        blurb: 'A government verification bar with official SDGA marks.',
        status: 'new',
        source: src('DigitalStamp', 'DigitalStamp.tsx'),
      },
      {
        slug: 'code-snippet',
        name: 'CodeSnippet',
        blurb: 'A code block with tabs, line numbers, copy, and always-LTR code.',
        status: 'new',
        source: src('CodeSnippet', 'CodeSnippet.tsx'),
      },
      {
        slug: 'saudi-riyal',
        name: 'SaudiRiyal',
        blurb: 'The official Riyal symbol with SDGA-compliant amount formatting - fixed symbol, RTL-aware sign, numerals.',
        status: 'new',
        source: src('SaudiRiyal', 'SaudiRiyal.tsx'),
      },
    ],
  },
  {
    id: 'data-viz',
    title: 'Data visualization',
    description: 'Charts built on the DGA categorical palette.',
    components: [
      {
        slug: 'charts',
        name: 'Charts',
        blurb: 'Pie, line, and bar charts using the DGA categorical color scale.',
        status: 'new',
        source: src('Charts', 'Charts.tsx'),
      },
    ],
  },
  {
    id: 'feedback',
    title: 'Feedback',
    description: 'Status, progress, and transient messaging.',
    components: [
      {
        slug: 'inline-alert',
        name: 'InlineAlert',
        blurb: 'An inline, in-flow message with semantic variants and actions.',
        source: src('InlineAlert', 'InlineAlert.tsx'),
      },
      {
        slug: 'notification',
        name: 'Notification',
        blurb: 'A prominent, dismissible notification banner.',
        status: 'new',
        source: src('Notification', 'Notification.tsx'),
      },
      {
        slug: 'notification-toast',
        name: 'NotificationToast',
        blurb: 'A toast system with an imperative toast() API and viewport.',
        source: src('NotificationToast', 'NotificationToast.tsx'),
      },
      {
        slug: 'tooltip',
        name: 'Tooltip',
        blurb: 'A Radix tooltip with a HelpIcon convenience trigger.',
        source: src('Tooltip', 'Tooltip.tsx'),
      },
      {
        slug: 'spinner',
        name: 'Spinner',
        blurb: 'An indeterminate loading spinner in several sizes.',
        source: src('Spinner', 'Spinner.tsx'),
      },
      {
        slug: 'skeleton',
        name: 'Skeleton',
        blurb: 'A shimmering placeholder for loading content.',
        source: src('Skeleton', 'Skeleton.tsx'),
      },
      {
        slug: 'progress',
        name: 'Progress',
        blurb: 'Linear and circular progress indicators.',
        source: src('Progress', 'Progress.tsx'),
      },
      {
        slug: 'empty-state',
        name: 'EmptyState',
        blurb: 'A zero-data state with media, message, and actions.',
        source: src('EmptyState', 'EmptyState.tsx'),
      },
    ],
  },
  {
    id: 'overlays',
    title: 'Overlays',
    description: 'Layers that float above the page - all portal into the DgaProvider root.',
    components: [
      {
        slug: 'modal',
        name: 'Modal',
        blurb: 'A centered dialog with header icon, body, and footer actions.',
        source: src('Modal', 'Modal.tsx'),
      },
      {
        slug: 'drawer',
        name: 'Drawer',
        blurb: 'A side sheet for secondary flows and detail panels.',
        source: src('Drawer', 'Drawer.tsx'),
      },
      {
        slug: 'popover',
        name: 'Popover',
        blurb: 'A non-modal floating panel anchored to a trigger.',
        source: src('Popover', 'Popover.tsx'),
      },
      {
        slug: 'slideout-menu',
        name: 'SlideoutMenu',
        blurb: 'A slide-in navigation panel for app-level menus.',
        status: 'new',
        source: src('SlideoutMenu', 'SlideoutMenu.tsx'),
      },
      {
        slug: 'dropdown-menu',
        name: 'DropdownMenu',
        blurb: 'An action menu with items, checkboxes, radios, and submenus.',
        source: src('DropdownMenu', 'DropdownMenu.tsx'),
      },
      {
        slug: 'menubar',
        name: 'Menubar',
        blurb: 'A desktop-style horizontal menu bar with nested menus.',
        source: src('Menubar', 'Menubar.tsx'),
      },
      {
        slug: 'filtration',
        name: 'Filtration',
        blurb: 'A faceted filter panel - overlay or inline, with staged apply.',
        status: 'new',
        source: src('Filtration', 'Filtration.tsx'),
      },
      {
        slug: 'command',
        name: 'Command',
        blurb: 'A ⌘K command palette for fast, searchable actions.',
        source: src('Command', 'Command.tsx'),
      },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigation',
    description: 'Wayfinding, sequencing, and content disclosure.',
    components: [
      {
        slug: 'tabs',
        name: 'Tabs',
        blurb: 'Switch between related panels with a roving tablist.',
        source: src('Tabs', 'Tabs.tsx'),
      },
      {
        slug: 'breadcrumb',
        name: 'Breadcrumb',
        blurb: 'A hierarchical trail with overflow collapsing.',
        source: src('Breadcrumb', 'Breadcrumb.tsx'),
      },
      {
        slug: 'pagination',
        name: 'Pagination',
        blurb: 'Page navigation with an underline-bar current page and jump-to.',
        source: src('Pagination', 'Pagination.tsx'),
      },
      {
        slug: 'accordion',
        name: 'Accordion',
        blurb: 'Vertically stacked, collapsible sections.',
        source: src('Accordion', 'Accordion.tsx'),
      },
      {
        slug: 'progress-indicator',
        name: 'ProgressIndicator',
        blurb: 'A stepper showing progress through a multi-step flow.',
        status: 'new',
        source: src('ProgressIndicator', 'ProgressIndicator.tsx'),
      },
      {
        slug: 'collapsible',
        name: 'Collapsible',
        blurb: 'A single show/hide disclosure region.',
        source: src('Collapsible', 'Collapsible.tsx'),
      },
      {
        slug: 'scroll-area',
        name: 'ScrollArea',
        blurb: 'A styled, cross-browser custom scroll container.',
        source: src('ScrollArea', 'ScrollArea.tsx'),
      },
      {
        slug: 'carousel',
        name: 'Carousel',
        blurb: 'A swipeable slide carousel with arrows and dots.',
        status: 'new',
        source: src('Carousel', 'Carousel.tsx'),
      },
    ],
  },
  {
    id: 'app-shell',
    title: 'App shell',
    description: 'Structural layout for full applications.',
    components: [
      {
        slug: 'sidebar',
        name: 'Sidebar',
        blurb: 'A collapsible application sidebar with groups, menus, and rail.',
        source: src('Sidebar', 'Sidebar.tsx'),
      },
    ],
  },
  {
    id: 'provider',
    title: 'Provider & utilities',
    description: 'The runtime context, hooks, and helpers that tie it together.',
    components: [
      {
        slug: 'dga-provider',
        name: 'DgaProvider',
        blurb: 'The root provider - theme, direction, dark mode, and the overlay portal.',
        source: 'packages/react/src/providers/DgaProvider.tsx',
      },
    ],
  },
];

export const ALL_COMPONENTS: ComponentMeta[] = CATEGORIES.flatMap((c) => c.components);

export function componentBySlug(slug: string): { meta: ComponentMeta; category: Category } | null {
  for (const category of CATEGORIES) {
    const meta = category.components.find((c) => c.slug === slug);
    if (meta) return { meta, category };
  }
  return null;
}

export const COMPONENT_COUNT = ALL_COMPONENTS.length;
