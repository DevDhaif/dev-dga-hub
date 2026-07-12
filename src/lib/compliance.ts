export type CoverageStatus = 'aligned' | 'partial' | 'extension';

export interface CoverageRow {
  official: string;
  component: string;
  slug?: string;
  status: Exclude<CoverageStatus, 'extension'>;
  highlight?: boolean;
}

export interface CoverageSection {
  id: string;
  rows: CoverageRow[];
}

export interface ExtensionRow {
  component: string;
  slug?: string;
}

export const COVERAGE_SECTIONS: CoverageSection[] = [
  {
    id: 'actions',
    rows: [
      { official: 'Buttons', component: 'Button', slug: 'button', status: 'aligned', highlight: true },
      { official: 'Floating button', component: 'FloatingButton', slug: 'floating-button', status: 'aligned' },
      { official: 'Link', component: 'Link', slug: 'link', status: 'aligned' },
      { official: 'Content switcher', component: 'ContentSwitcher', slug: 'content-switcher', status: 'aligned' },
    ],
  },
  {
    id: 'inputsText',
    rows: [
      { official: 'Text input', component: 'TextInput', slug: 'text-input', status: 'aligned' },
      { official: 'Textarea', component: 'Textarea', slug: 'textarea', status: 'aligned' },
      { official: 'Number input', component: 'NumberInput', slug: 'number-input', status: 'aligned' },
      { official: 'Search box', component: 'SearchBox', slug: 'search-box', status: 'aligned' },
      { official: 'File upload', component: 'FileUpload', slug: 'file-upload', status: 'aligned' },
    ],
  },
  {
    id: 'inputsSelection',
    rows: [
      { official: 'Checkbox', component: 'Checkbox', slug: 'checkbox', status: 'aligned' },
      { official: 'Radio', component: 'Radio', slug: 'radio', status: 'aligned' },
      { official: 'Switch', component: 'Switch', slug: 'switch', status: 'aligned' },
      { official: 'Dropdown input', component: 'Dropdown', slug: 'dropdown', status: 'aligned' },
      { official: 'Slider', component: 'Slider', slug: 'slider', status: 'aligned' },
      { official: 'Rating', component: 'Rating', slug: 'rating', status: 'aligned' },
      { official: 'Date picker', component: 'DatePicker', slug: 'date-picker', status: 'aligned', highlight: true },
      { official: 'Date picker (range)', component: 'DateRangePicker', slug: 'date-range-picker', status: 'aligned' },
    ],
  },
  {
    id: 'feedback',
    rows: [
      { official: 'Inline alert', component: 'InlineAlert', slug: 'inline-alert', status: 'aligned' },
      { official: 'Notification', component: 'Notification', slug: 'notification', status: 'aligned' },
      { official: 'Notification toast', component: 'NotificationToast', slug: 'notification-toast', status: 'aligned' },
      { official: 'Chip', component: 'Chip', slug: 'chip', status: 'aligned' },
      { official: 'Tags', component: 'Tag', slug: 'tag', status: 'aligned' },
      { official: 'Status tag', component: 'StatusTag', slug: 'status-tag', status: 'aligned' },
      { official: 'Progress bar', component: 'Progress · CircularProgress', slug: 'progress', status: 'aligned' },
      { official: 'Radial stepper', component: 'CircularProgress (segments)', slug: 'progress', status: 'partial' },
      { official: 'Progress indicator', component: 'ProgressIndicator', slug: 'progress-indicator', status: 'aligned' },
      { official: 'Loading', component: 'Spinner', slug: 'spinner', status: 'aligned' },
      { official: 'Skeleton', component: 'Skeleton', slug: 'skeleton', status: 'aligned' },
      { official: 'Tooltip', component: 'Tooltip · HelpIcon', slug: 'tooltip', status: 'aligned' },
    ],
  },
  {
    id: 'navigation',
    rows: [
      { official: 'Breadcrumbs', component: 'Breadcrumb', slug: 'breadcrumb', status: 'aligned' },
      { official: 'Pagination', component: 'Pagination', slug: 'pagination', status: 'aligned' },
      { official: 'Tabs', component: 'Tabs', slug: 'tabs', status: 'aligned' },
      { official: 'Menu', component: 'DropdownMenu', slug: 'dropdown-menu', status: 'aligned' },
      { official: 'Sideout menu', component: 'SlideoutMenu', slug: 'slideout-menu', status: 'aligned' },
      { official: 'Filtration', component: 'Filtration', slug: 'filtration', status: 'aligned' },
    ],
  },
  {
    id: 'dataDisplay',
    rows: [
      { official: 'Accordions', component: 'Accordion', slug: 'accordion', status: 'aligned' },
      { official: 'Table', component: 'Table', slug: 'table', status: 'aligned', highlight: true },
      { official: 'List', component: 'List', slug: 'list', status: 'aligned' },
      { official: 'Structured list', component: 'StructuredList', slug: 'structured-list', status: 'aligned' },
      { official: 'Metric', component: 'Metric', slug: 'metric', status: 'aligned' },
      { official: 'Avatar', component: 'Avatar', slug: 'avatar', status: 'aligned' },
      { official: 'Quote', component: 'Quote', slug: 'quote', status: 'aligned' },
      { official: 'Card', component: 'Card', slug: 'card', status: 'aligned' },
      { official: 'Charts', component: 'PieChart · LineChart · BarChart', slug: 'charts', status: 'aligned', highlight: true },
      { official: 'Carousel', component: 'Carousel', slug: 'carousel', status: 'aligned' },
      { official: 'Code snippet', component: 'CodeSnippet', slug: 'code-snippet', status: 'aligned' },
      { official: 'Digital stamp', component: 'DigitalStamp', slug: 'digital-stamp', status: 'aligned', highlight: true },
    ],
  },
  {
    id: 'overlays',
    rows: [{ official: 'Modals', component: 'Modal', slug: 'modal', status: 'aligned' }],
  },
  {
    id: 'utility',
    rows: [{ official: 'Divider', component: 'Divider', slug: 'divider', status: 'aligned' }],
  },
];

// Our components with no official Platforms Code page. Not claimed as DGA-compliant.
export const EXTENSIONS: ExtensionRow[] = [
  { component: 'Toggle', slug: 'toggle' },
  { component: 'Select', slug: 'select' },
  { component: 'InputOTP', slug: 'input-otp' },
  { component: 'TagInput', slug: 'tag-input' },
  { component: 'DescriptionList', slug: 'description-list' },
  { component: 'Timeline', slug: 'timeline' },
  { component: 'AspectRatio', slug: 'aspect-ratio' },
  { component: 'SaudiRiyal', slug: 'saudi-riyal' },
  { component: 'EmptyState', slug: 'empty-state' },
  { component: 'Drawer', slug: 'drawer' },
  { component: 'Popover', slug: 'popover' },
  { component: 'Menubar', slug: 'menubar' },
  { component: 'Collapsible', slug: 'collapsible' },
  { component: 'ScrollArea', slug: 'scroll-area' },
  { component: 'Command', slug: 'command' },
  { component: 'Sidebar', slug: 'sidebar' },
];

const allRows = COVERAGE_SECTIONS.flatMap((s) => s.rows);

export const COVERAGE_STATS = {
  aligned: allRows.filter((r) => r.status === 'aligned').length,
  partial: allRows.filter((r) => r.status === 'partial').length,
  officialPages: allRows.length,
  extensions: EXTENSIONS.length,
};
