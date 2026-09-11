import { Landing } from '@/components/landing/Landing';
import { faqJsonLd } from '@/lib/faq';
import { serializeJsonLd } from '@/lib/seo';

export default function Home() {
  return (
    <>
      {/* FAQPage: the questions below are rendered visibly by <Faq />, which reads
          the same source. Google drops the rich result if the two diverge. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd('en')) }}
      />
      <Landing />
    </>
  );
}
