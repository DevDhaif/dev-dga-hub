'use client';

import Link from 'next/link';
import {
  Button,
  DgaProvider,
  DigitalStamp,
  CodeSnippetInline,
  Select,
  SelectItem,
  Switch,
  Tag,
  TextInput,
} from '@dev-dga/react';
import { COPY, useCopy } from '@/lib/i18n';
import { paletteById, useSettings } from '@/lib/settings';
import { ArrowRight, ExternalLink } from '@/components/icons';

const STORYBOOK_URL = 'https://devdhaif.github.io/dev-dga/';

const DgaMark = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden
  >
    <path d="M12 2 21 6v6c0 5-3.5 9.5-9 12-5.5-2.5-9-7-9-12V6z" strokeLinejoin="round" />
    <path d="m8 12 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function ServicePane({
  paneLocale,
  mode,
  theme,
  side,
}: {
  paneLocale: 'en' | 'ar';
  mode: 'light' | 'dark';
  theme: { primary: string } | undefined;
  side: 'start' | 'end';
}) {
  const ar = paneLocale === 'ar';
  const t = (en: string, arabic: string) => (ar ? arabic : en);

  return (
    <DgaProvider
      dir={ar ? 'rtl' : 'ltr'}
      mode={mode}
      theme={theme}
      className={`hero__pane hero__pane--${side}`}
    >
      <div className="hero__pane-head">
        <span className="hero__pane-title">{t('Building permit', 'رخصة بناء')}</span>
        <Tag variant="primary-subtle" size="sm">
          {t('Step 2 of 4', 'الخطوة 2 من 4')}
        </Tag>
      </div>

      <div className="hero__pane-fields">
        <TextInput
          label={t('Establishment name', 'اسم المنشأة')}
          defaultValue={t('Najd Logistics Co.', 'شركة نجد اللوجستية')}
          size="md"
        />
        <Select label={t('Region', 'المنطقة')} defaultValue="riyadh" size="md">
          <SelectItem value="riyadh">{t('Riyadh', 'الرياض')}</SelectItem>
          <SelectItem value="makkah">{t('Makkah', 'مكة المكرمة')}</SelectItem>
          <SelectItem value="eastern">{t('Eastern Province', 'المنطقة الشرقية')}</SelectItem>
        </Select>
        <Switch label={t('SMS status updates', 'إشعارات الحالة')} defaultChecked />
      </div>

      <div className="hero__pane-foot">
        <Button size="sm" endIcon={<ArrowRight width={16} height={16} />} iconFlip>
          {t('Continue', 'متابعة')}
        </Button>
        <span className="hero__pane-lang" dir="ltr" aria-hidden>
          {ar ? 'rtl · ع' : 'ltr · EN'}
        </span>
      </div>
    </DgaProvider>
  );
}

export function Hero() {
  const { c, locale } = useCopy();
  const { mode, palette } = useSettings();
  const pal = paletteById(palette);
  const theme = pal.primary ? { primary: pal.primary } : undefined;

  const echo = COPY[locale === 'ar' ? 'en' : 'ar'].hero;

  const stampProps =
    locale === 'ar'
      ? {
          'aria-label': 'التحقق من الموقع الحكومي',
          statement: 'خدمة حكومية مسجّلة لدى هيئة الحكومة الرقمية.',
          triggerLabel: 'كيف تتحقق؟',
          registrationLabel: 'مسجّلة لدى هيئة الحكومة الرقمية:',
          domainTitle: (
            <>
              المواقع الحكومية الرسمية في السعودية تنتهي بـ <strong>gov.sa.</strong>
            </>
          ),
          domainDescription:
            'المواقع التابعة لجهةٍ حكومية رسمية في المملكة العربية السعودية تنتهي دائمًا بالنطاق gov.sa.',
          securityTitle: (
            <>
              المواقع الموثوقة تستخدم <strong>HTTPS</strong>
            </>
          ),
          securityDescription: 'تأكّد من أن الموقع يستخدم بروتوكول HTTPS.',
        }
      : {};

  return (
    <section className="hero">
      <div className="shell">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">{c.hero.eyebrow}</p>

            <h1 className="hero__title">
              <span className="hero__title-lead">
                {c.hero.titleA} <em>{c.hero.titleEm}</em>
              </span>
              <span className="hero__title-echo" aria-hidden>
                {echo.titleA} {echo.titleEm}
              </span>
            </h1>

            <p className="hero__lead">{c.hero.lead}</p>

            <div className="hero__cta">
              <Button asChild size="lg">
                <Link href="/components">{c.hero.browse}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                endIcon={<ExternalLink width={16} height={16} />}
              >
                <a href={STORYBOOK_URL} target="_blank" rel="noreferrer">
                  Storybook
                </a>
              </Button>
            </div>
          </div>

          <div className="hero__stage">
            <div className="hero__mirror-wrap">
              <div className="hero__live">
                <Tag variant="primary">{c.hero.liveTag}</Tag>
              </div>

              <div className="hero__mirror overflow-visible!">
                <ServicePane paneLocale="en" mode={mode} theme={theme} side="start" />
                <ServicePane paneLocale="ar" mode={mode} theme={theme} side="end" />
                <span className="hero__seam" dir="ltr" aria-hidden>
                  <span className="hero__seam-dot" />
                  ع&nbsp;↔&nbsp;EN
                </span>
              </div>

              <div className="hero__stamp">
                <DigitalStamp registrationNumber="20230103200" logo={<DgaMark />} {...stampProps} />
              </div>
            </div>
          </div>
        </div>

        <div className="hero__install">
          <span className="hero__install-label">{c.hero.installEyebrow}</span>
          <div className="hero__install-list" dir="ltr">
            <CodeSnippetInline>npm i @dev-dga/react @dev-dga/css @dev-dga/tokens</CodeSnippetInline>
          </div>
        </div>
      </div>
    </section>
  );
}
