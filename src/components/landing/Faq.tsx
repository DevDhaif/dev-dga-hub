'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import { useHref } from '@/lib/use-href';
import { FAQ } from '@/lib/faq';
import { ArrowRight } from '@/components/icons';

// Renders the same questions and answers that the home page emits as FAQPage
// structured data. Native <details> so every answer is in the server HTML.
export function Faq() {
  const locale = useLocale();
  const hrefFor = useHref();

  return (
    <div className="faq">
      {FAQ[locale].map((item, i) => (
        <details className="faq__item" key={item.q} open={i === 0}>
          <summary className="faq__q">
            <span>{item.q}</span>
            <span className="faq__marker" aria-hidden />
          </summary>
          <div className="faq__a">
            <p>{item.a}</p>
            {item.href && (
              <Link className="faq__link" href={hrefFor(item.href)}>
                {item.hrefLabel}
                <ArrowRight width={15} height={15} className="rtl-flip-x" />
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
