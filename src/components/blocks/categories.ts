// Kept apart from BlocksPage so the landing page can read it without bundling every block.
export type BlockId =
  | 'analytics'
  | 'stats'
  | 'requests'
  | 'signIn'
  | 'multiStep'
  | 'serviceForm'
  | 'hero'
  | 'faq'
  | 'settings'
  | 'catalog'
  | 'confirmation'
  | 'search'
  | 'sitemap'
  | 'notFound'
  | 'rating'
  | 'pageFeedback'
  | 'cookies'
  | 'chatbot';

export type CategoryId = 'pages' | 'forms' | 'engagement' | 'apps';

export const CATEGORIES: { id: CategoryId; items: BlockId[] }[] = [
  { id: 'pages', items: ['hero', 'catalog', 'faq', 'search', 'sitemap', 'notFound'] },
  { id: 'forms', items: ['serviceForm', 'multiStep'] },
  { id: 'engagement', items: ['rating', 'pageFeedback', 'cookies', 'chatbot'] },
  {
    id: 'apps',
    items: ['analytics', 'stats', 'requests', 'settings', 'signIn', 'confirmation'],
  },
];

export const BLOCK_COUNT = CATEGORIES.reduce((n, c) => n + c.items.length, 0);
