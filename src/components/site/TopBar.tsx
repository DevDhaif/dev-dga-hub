'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeControls } from './ThemeControls';
import { Wordmark } from './Wordmark';
import { OPEN_COMMAND_EVENT } from './CommandPalette';
import { SearchBox } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { isArabicPath, localizeHref, toEnglishPath } from '@/lib/locale-routes';
import { GitHub, ExternalLink, Menu, Close } from '@/components/icons';

const REPO_URL = 'https://github.com/DevDhaif/dev-dga-hub';
const STORYBOOK_URL = 'https://dev-dga.vercel.app/';

export function TopBar() {
  const pathname = usePathname();
  const { c, locale } = useCopy();
  const href = (p: string) => localizeHref(p, locale === 'ar');
  const current = isArabicPath(pathname) ? toEnglishPath(pathname) : pathname;
  const [open, setOpen] = useState(false);

  const nav = [
    { href: '/components', label: c.nav.components },
    { href: '/compliance', label: c.nav.compliance },
    { href: '/accessibility', label: c.nav.accessibility },
    { href: '/rtl', label: c.nav.rtl },
    { href: '/installation', label: c.nav.installation },
  ];
  const mobileExtras = [
    { href: '/blocks', label: c.nav.blocks },
    { href: '/examples/masar', label: c.nav.examples },
  ];

  return (
    <header className="topbar">
      <div className="shell topbar__inner">
        <Link href={href('/')} className="topbar__brand" aria-label={c.nav.home}>
          <Wordmark />
        </Link>

        <nav className="topbar__nav" aria-label={c.chrome.navPrimary}>
          {nav.map((item) => {
            const target = href(item.href);
            const active = current === item.href || current.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={target}
                className="topbar__link"
                data-active={active}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            className="topbar__link topbar__link--ext"
            href={STORYBOOK_URL}
            target="_blank"
            rel="noreferrer"
          >
            {c.nav.storybook} <ExternalLink width={14} height={14} />
          </a>
        </nav>

        <div className="topbar__end">
          <div className="topbar__searchwrap">
            <SearchBox
              className="topbar__search"
              size="md"
              voiceSearch={false}
              value=""
              readOnly
              placeholder={c.nav.search}
              aria-label={c.nav.search}
              onChange={() => {}}
              onClick={() => window.dispatchEvent(new Event(OPEN_COMMAND_EVENT))}
              onKeyDown={(e) => {
                if (e.key === 'Enter') window.dispatchEvent(new Event(OPEN_COMMAND_EVENT));
              }}
            />
          </div>
          <ThemeControls />
          <a
            className="icon-btn topbar__gh"
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={c.nav.github}
          >
            <GitHub />
          </a>
          <button
            type="button"
            className="icon-btn topbar__burger"
            aria-expanded={open}
            aria-label={c.nav.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="topbar__mobile">
          <div className="shell topbar__mobile-inner">
            {[...nav, ...mobileExtras].map((item) => (
              <Link key={item.href} href={href(item.href)} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a href={STORYBOOK_URL} target="_blank" rel="noreferrer">
              {c.nav.storybook}
            </a>
            <a href={REPO_URL} target="_blank" rel="noreferrer">
              {c.nav.github}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
