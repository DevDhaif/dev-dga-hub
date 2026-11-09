import type { Locale } from './locale';
import { COMPONENT_COUNT } from './catalog';

export interface FaqItem {
  /** The question, phrased the way people actually search for it. */
  q: string;
  /** Plain-text answer. Kept free of markup so it can feed FAQPage JSON-LD verbatim. */
  a: string;
  /** Optional locale-neutral path to the page that answers the question in full. */
  href?: string;
  /** Link label for `href`. */
  hrefLabel?: string;
}

// Visible on the home page AND emitted as FAQPage structured data. Google requires
// the two to match, so both read from this one source. Keep answers plain text.
export const FAQ: Record<Locale, FaqItem[]> = {
  en: [
    {
      q: 'Is there a React component library for the Saudi DGA Platforms Code?',
      a: `Yes. dev-dga is a free, MIT-licensed UI component library that implements the DGA Platforms Code in React 19. It ships ${COMPONENT_COUNT} accessible components across three npm packages: @dev-dga/react, @dev-dga/css, and @dev-dga/tokens.`,
      href: '/components',
      hrefLabel: 'Browse all components',
    },
    {
      q: 'What is the SDGA Platforms Code?',
      a: 'Platforms Code is Saudi Arabia’s national design system for government digital services, published by the Digital Government Authority. It defines the colors, typography, spacing, and interface components that government platforms share, so services from different agencies feel like one system.',
      href: '/compliance',
      hrefLabel: 'See the coverage matrix',
    },
    {
      q: 'How is dev-dga different from platformscode-new-react?',
      a: 'platformscode-new-react is an npm package that wraps @platformscode/core, a Stencil web component library, through Stencil’s React output target, so each component is a custom element with a generated React shim around it. Its npm listing carries no README, homepage, or source repository, and we could not establish who publishes it. The Digital Government Authority’s own Platforms Code pages distribute a PDF specification and name no npm package or repository at all, so confirm the provenance of any package yourself before depending on it. dev-dga is a native React 19 implementation with no custom-element runtime, React’s own props and types, and support for React Server Components. It is independent and does not claim to be official either.',
      href: '/compliance',
      hrefLabel: 'Compare against the specification',
    },
    {
      q: 'How do I install the DGA React components?',
      a: 'Install the three packages with npm i @dev-dga/react @dev-dga/css @dev-dga/tokens, import the stylesheet once at your app root, and wrap your tree in DgaProvider. The provider carries text direction, dark mode, and the brand theme. Tailwind is optional and both majors are supported through a token bridge.',
      href: '/installation',
      hrefLabel: 'Read the setup guide',
    },
    {
      q: 'Do these DGA UI components support Arabic and RTL?',
      a: 'Yes. Right-to-left is the default case, not a later patch. Every component mirrors through CSS logical properties, and the library ships Hijri and Umm al-Qura date pickers, abjad list counters, protected cursive letter-joining, and bidi-safe formatting for Saudi National IDs, IBANs, and +966 phone numbers.',
      href: '/rtl',
      hrefLabel: 'See the Arabic and RTL demos',
    },
    {
      q: 'Are the components accessible?',
      a: `Every one of the ${COMPONENT_COUNT} components targets WCAG 2.2 AA. Menus, dialogs, and tabs wrap Radix primitives for correct ARIA and focus management, keyboard semantics are verified in Playwright, and axe-core assertions fail the build on a regression. The conformance statement is self-assessed, not third-party audited.`,
      href: '/accessibility',
      hrefLabel: 'Read the conformance statement',
    },
    {
      q: 'Is dev-dga free to use commercially?',
      a: 'Yes. All three packages are MIT licensed and free to use in commercial and government projects, with no seat count, support contract, or attribution requirement.',
    },
    {
      q: 'Is this the official DGA component library?',
      a: 'No. dev-dga is an independent implementation and is not affiliated with, nor endorsed by, the Saudi Digital Government Authority. It follows the published Platforms Code specification and maps every component back to it, component by component, on the compliance page.',
      href: '/compliance',
      hrefLabel: 'Check Platforms Code parity',
    },
  ],
  ar: [
    {
      q: 'هل توجد مكتبة مكونات React لكود المنصات؟',
      a: `نعم. dev-dga مكتبة واجهات حرة الاستخدام برخصة MIT تطبق كود المنصات بـ React 19، وتضم ${COMPONENT_COUNT} مكون متاح الوصول في ثلاث حزم على npm: ‏@dev-dga/react و @dev-dga/css و @dev-dga/tokens.`,
      href: '/components',
      hrefLabel: 'تصفح كل المكونات',
    },
    {
      q: 'ما كود المنصات؟',
      a: 'كود المنصات نظام التصميم الموحد للخدمات الحكومية الرقمية في السعودية، وتصدره هيئة الحكومة الرقمية. يحدد الألوان، الخطوط، المسافات، ومكونات الواجهة التي تشترك فيها المنصات الحكومية، مما يجعل خدمات الجهات المختلفة تبدو نظاماً واحداً.',
      href: '/compliance',
      hrefLabel: 'عرض جدول التغطية',
    },
    {
      q: 'ما الفرق بين dev-dga وحزمة platformscode-new-react؟',
      a: 'تغلف حزمة platformscode-new-react على npm مكتبة @platformscode/core، وهي مكتبة مكونات ويب مبنية بـ Stencil، عبر مخرج React في Stencil. ويكون كل مكون فيها عنصراً مخصصاً (custom element) يحيط به غلاف React مولد. لا تحتوي صفحتها على npm على README أو موقع أو مستودع مصدري، ولم نتمكن من التأكد من الجهة الناشرة لها. وتنشر صفحات كود المنصات في هيئة الحكومة الرقمية دليلاً بصيغة PDF، ولا تذكر أي حزمة npm أو مستودع. لذلك تحقق بنفسك من مصدر أي حزمة قبل الاعتماد عليها. وتختلف dev-dga بأنها تطبيق أصلي بـ React 19: لا تحتاج إلى بيئة تشغيل للعناصر المخصصة، وتستخدم خصائص React وأنواعها مباشرة، وتدعم React Server Components. وهي أيضاً مكتبة مستقلة لا تدعي الصفة الرسمية.',
      href: '/compliance',
      hrefLabel: 'المقارنة بالمواصفة',
    },
    {
      q: 'كيف أثبت مكونات React لكود المنصات؟',
      a: 'ثبّت الحزم الثلاث بالأمر npm i @dev-dga/react @dev-dga/css @dev-dga/tokens، ثم استورد ملف الأنماط مرة واحدة في جذر التطبيق، وضع شجرتك داخل DgaProvider. يحمل المزود اتجاه النص، الوضع الداكن، وسمة العلامة. Tailwind اختياري، ويدعم جسر الرموز إصداريه الثالث والرابع.',
      href: '/installation',
      hrefLabel: 'قراءة دليل التثبيت',
    },
    {
      q: 'هل تدعم المكونات العربية والاتجاه من اليمين إلى اليسار؟',
      a: 'نعم. الاتجاه من اليمين إلى اليسار هو الوضع الأساسي في المكتبة منذ تصميمها. ينعكس كل مكون عبر الخصائص المنطقية في CSS. وتشمل المكتبة منتقي تاريخ هجري وأم القرى، ترقيم القوائم بالأبجدية، اتصال حروف محمياً، وعرضاً سليم الاتجاه لرقم الهوية والآيبان وأرقام الجوال ‎+966.',
      href: '/rtl',
      hrefLabel: 'عرض أمثلة العربية والاتجاه',
    },
    {
      q: 'هل المكونات متاحة الوصول؟',
      a: `تستهدف المكونات كلها، وعددها ${COMPONENT_COUNT}، معيار WCAG 2.2 AA. تعتمد القوائم، الحوارات، والتبويبات على أساسيات Radix لضبط ARIA وإدارة التركيز. ونختبر دلالات لوحة المفاتيح في Playwright، وتوقف فحوص axe-core البناء عند أي تراجع. والبيان تقييم ذاتي لم يخضع لتدقيق خارجي.`,
      href: '/accessibility',
      hrefLabel: 'قراءة بيان التوافق',
    },
    {
      q: 'هل dev-dga حرة الاستخدام تجارياً؟',
      a: 'نعم. الحزم الثلاث برخصة MIT، ويمكنك استخدامها مجاناً في المشاريع التجارية والحكومية دون حد لعدد المستخدمين أو عقد دعم أو شرط لذكر المصدر.',
    },
    {
      q: 'هل هذه المكتبة الرسمية لهيئة الحكومة الرقمية؟',
      a: 'لا. مكتبة dev-dga تطبيق مستقل، وليست تابعة لهيئة الحكومة الرقمية السعودية ولا معتمدة منها. تتبع المكتبة مواصفة كود المنصات المنشورة، وتربط صفحة التوافق كل مكون بما يقابله فيها.',
      href: '/compliance',
      hrefLabel: 'مراجعة التوافق مع كود المنصات',
    },
  ],
};

/** FAQPage structured data for the home page of one locale. */
export function faqJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: FAQ[locale].map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
