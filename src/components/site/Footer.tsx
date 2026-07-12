'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wordmark } from './Wordmark';
import { useCopy } from '@/lib/i18n';
import { isArabicPath, localizeHref } from '@/lib/locale-routes';

const REPO_URL = 'https://github.com/DevDhaif/dev-dga-hub';
const STORYBOOK_URL = 'https://dev-dga.vercel.app/';

const AUTHOR_NAME = 'Dhaifallah Alfarawi';
const AUTHOR_PORTFOLIO = 'https://devdhaif.vercel.app/';
const AUTHOR_GITHUB = 'https://github.com/DevDhaif';

export function Footer() {
  const { c } = useCopy();
  const isAr = isArabicPath(usePathname());
  const href = (p: string) => localizeHref(p, isAr);
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__brand">
          <Wordmark />
          <p className="footer__tagline">{c.footer.tagline}</p>
        </div>

        <nav className="footer__col" aria-label={c.footer.explore}>
          <p className="footer__heading">{c.footer.explore}</p>
          <Link href={href('/components')}>{c.footer.components}</Link>
          <Link href={href('/installation')}>{c.footer.installation}</Link>
          <Link href={href('/theme')}>{c.themePage.eyebrow}</Link>
          <Link href={href('/blocks')}>{c.footer.blocks}</Link>
          <Link href={href('/examples/masar')}>{c.nav.examples}</Link>
          <a href={STORYBOOK_URL} target="_blank" rel="noreferrer">
            {c.footer.storybook}
          </a>
        </nav>

        <nav className="footer__col" aria-label={c.footer.proof}>
          <p className="footer__heading">{c.footer.proof}</p>
          <Link href={href('/compliance')}>{c.footer.compliance}</Link>
          <Link href={href('/accessibility')}>{c.footer.accessibility}</Link>
          <Link href={href('/rtl')}>{c.footer.rtl}</Link>
        </nav>

        <nav className="footer__col" aria-label={c.footer.project}>
          <p className="footer__heading">{c.footer.project}</p>
          <a href={REPO_URL} target="_blank" rel="noreferrer">
            {c.footer.github}
          </a>
          <a href={`${REPO_URL}/blob/HEAD/LICENSE`} target="_blank" rel="noreferrer">
            {c.footer.license}
          </a>
          <a href="https://www.npmjs.com/package/@dev-dga/react" target="_blank" rel="noreferrer">
            {c.footer.npm}
          </a>
        </nav>
      </div>

      <div className="shell footer__legal">
        <div>
          <p>{c.footer.disclaimer}</p>
          <p className="footer__author">
            {c.footer.builtBy}{' '}
            <a href={AUTHOR_PORTFOLIO} target="_blank" rel="noreferrer">
              {AUTHOR_NAME}
            </a>
            <span aria-hidden> · </span>
            <a href={AUTHOR_GITHUB} target="_blank" rel="noreferrer">
              @DevDhaif
            </a>
          </p>
        </div>
        <p className="mono footer__legal-mono" dir="ltr">
          {c.footer.legalMono}
        </p>
      </div>
    </footer>
  );
}
