'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCopy } from '@/lib/i18n';
import { isArabicPath, localizeHref } from '@/lib/locale-routes';
import { ArrowRight, ExternalLink } from '@/components/icons';

const STORYBOOK_URL = 'https://dev-dga.vercel.app/';

const HREFS = ['/compliance', '/accessibility', '/rtl', STORYBOOK_URL];

function CardShell({
  href,
  external,
  children,
}: {
  href: string;
  external: boolean;
  children: ReactNode;
}) {
  if (external) {
    return (
      <a className="pillar" href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className="pillar" href={href}>
      {children}
    </Link>
  );
}

export function Pillars() {
  const { c } = useCopy();
  const isAr = isArabicPath(usePathname());
  return (
    <div className="pillars">
      {c.pillars.items.map((item, i) => {
        const raw = HREFS[i];
        const external = raw.startsWith('http');
        const href = external ? raw : localizeHref(raw, isAr);
        return (
          <CardShell key={item.tag} href={href} external={external}>
            <span className="pillar__tag">{item.tag}</span>
            <span className="pillar__title">{item.title}</span>
            <span className="pillar__body">{item.body}</span>
            <span className="pillar__cta">
              {item.cta}
              {external ? (
                <ExternalLink width={15} height={15} />
              ) : (
                <ArrowRight className="rtl-flip-x" width={15} height={15} />
              )}
            </span>
          </CardShell>
        );
      })}
    </div>
  );
}
