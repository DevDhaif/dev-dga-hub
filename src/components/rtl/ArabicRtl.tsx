'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import {
  Button,
  CodeSnippet,
  DatePicker,
  DateRangePicker,
  DgaProvider,
  List,
  ListItem,
  Rating,
  Slider,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TextInput,
  TextInputAffix,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { paletteById, useSettings, type Dir } from '@/lib/settings';
import { ArrowRight } from '@/components/icons';
import './rtl.css';


const HIJRI_CODE = `import { DatePicker } from '@dev-dga/react';

// Hijri first, with the Gregorian day shown small under each cell.
<DatePicker
  label="تاريخ الميلاد"
  defaultCalendar="hijri"
  showSecondaryCalendar
/>;`;

const ABJAD_CODE = `import { List, ListItem } from '@dev-dga/react';

// Top level counts 1-2-3; nested items count a-b-c (LTR) / أ-ب-ج (RTL).
<List variant="ordered" aria-label="خطوات الطلب">
  <ListItem>الأهلية</ListItem>
  <ListItem level={2}>رقم الهوية</ListItem>
  <ListItem level={2}>إثبات العنوان</ListItem>
  <ListItem>المراجعة</ListItem>
</List>;`;

const JOINING_CODE = `/* Arabic is cursive. Tracking disconnects the glyphs. */
[dir='rtl'] {
  letter-spacing: normal; /* reset any Latin tracking */
  text-transform: none;   /* never uppercase Arabic  */
}`;

const KEYBOARD_CODE = `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@dev-dga/react';

// Arrow keys, Home/End and roving focus are handled for you,
// and invert automatically under dir="rtl". No key handlers.
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
    <TabsTrigger value="requests">الطلبات</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">…</TabsContent>
</Tabs>;`;

const LOGICAL_CODE = `/* Physical: needs a second rule for RTL, easy to forget. */
.card { margin-left: 1rem; text-align: left; }

/* Logical: mirrors automatically when dir flips. Write it once. */
.card { margin-inline-start: 1rem; text-align: start; }`;

const SAUDI_CODE = `import { TextInput } from '@dev-dga/react';

// The value is LTR data even inside an Arabic sentence: pin it.
<TextInput
  label="رقم الآيبان"
  dir="ltr"
  inputMode="text"
  defaultValue="SA44 2000 0001 2345 6789 1234"
/>;`;

const DEMO = {
  ltr: {
    dobLabel: 'Date of birth',
    dobHelper: 'Toggle Gregorian / Hijri inside the calendar.',
    rangeLabel: 'Reporting period',
    rangeHelper: 'Umm al-Qura dates, Latin digits.',
    tabs: [
      { v: 'overview', label: 'Overview', body: 'Arrow keys move between tabs - and invert under RTL.' },
      { v: 'requests', label: 'Requests', body: 'Home and End jump to the first and last tab.' },
      { v: 'reports', label: 'Reports', body: 'One tab stop; arrows move within it (roving tabindex).' },
    ],
    sliderLabel: 'Monthly budget',
    ratingLabel: 'Service rating',
    mirrorTitle: 'Commercial registration',
    mirrorMeta: 'Approved · Riyadh',
    nationalId: '1012345678',
    mobile: '55 123 4567',
    iban: 'SA44 2000 0001 2345 6789 1234',
  },
  rtl: {
    dobLabel: 'تاريخ الميلاد',
    dobHelper: 'بدّل بين الميلادي والهجري داخل التقويم.',
    rangeLabel: 'فترة التقرير',
    rangeHelper: 'تواريخ أم القرى، بأرقام لاتينية.',
    tabs: [
      { v: 'overview', label: 'نظرة عامة', body: 'الأسهم تنقّل بين التبويبات - وتنعكس في اليمين.' },
      { v: 'requests', label: 'الطلبات', body: 'ينقل Home وEnd إلى أول تبويب وآخره.' },
      { v: 'reports', label: 'التقارير', body: 'محطةُ تبويبٍ واحدة، والأسهم تنقّل داخلها.' },
    ],
    sliderLabel: 'الميزانية الشهرية',
    ratingLabel: 'تقييم الخدمة',
    mirrorTitle: 'سجل تجاري',
    mirrorMeta: 'مُعتمَد · الرياض',
    nationalId: '1012345678',
    mobile: '55 123 4567',
    iban: 'SA44 2000 0001 2345 6789 1234',
  },
} as const;

const ABJAD = {
  ltr: {
    label: 'Application steps',
    steps: ['Eligibility', 'Review', 'Submit'],
    sub: ['National ID', 'Proof of address'],
  },
  ar: {
    label: 'خطوات الطلب',
    steps: ['الأهلية', 'المراجعة', 'الإرسال'],
    sub: ['رقم الهوية', 'إثبات العنوان'],
  },
} as const;

function Section({
  id,
  title,
  lead,
  children,
}: {
  id: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="rtlp-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="rtlp-section__title">
        <a href={`#${id}`} className="rtlp-section__anchor" aria-hidden tabIndex={-1}>
          #
        </a>
        {title}
      </h2>
      <p className="rtlp-lead">{lead}</p>
      {children}
    </section>
  );
}

function AbjadList({ data }: { data: (typeof ABJAD)['ltr'] | (typeof ABJAD)['ar'] }) {
  return (
    <List variant="ordered" aria-label={data.label}>
      <ListItem>{data.steps[0]}</ListItem>
      <ListItem level={2}>{data.sub[0]}</ListItem>
      <ListItem level={2}>{data.sub[1]}</ListItem>
      <ListItem>{data.steps[1]}</ListItem>
      <ListItem>{data.steps[2]}</ListItem>
    </List>
  );
}

export function ArabicRtl() {
  const { c } = useCopy();
  const r = c.rtlPage;
  const s = r.sections;

  const { mode, palette: paletteId } = useSettings();
  const palette = paletteById(paletteId);
  const theme = palette.primary ? { primary: palette.primary } : undefined;

  const [demoDir, setDemoDir] = useState<Dir>('rtl');
  const d = DEMO[demoDir];

  const Preview = ({ children, className }: { children: ReactNode; className?: string }) => (
    <DgaProvider
      dir={demoDir}
      mode={mode}
      theme={theme}
      className={`rtlp-live${className ? ` ${className}` : ''}`}
    >
      {children}
    </DgaProvider>
  );

  const toc = [
    { id: 'hijri', title: s.hijri.nav },
    { id: 'abjad', title: s.abjad.nav },
    { id: 'joining', title: s.joining.nav },
    { id: 'keyboard', title: s.keyboard.nav },
    { id: 'logical', title: s.logical.nav },
    { id: 'saudi', title: s.saudi.nav },
  ];

  return (
    <div className="rtlp shell">
      <div className="rtlp__layout">
        <header className="rtlp__header">
          <p className="eyebrow">{r.eyebrow}</p>
          <h1 className="rtlp__title display">{r.title}</h1>
          <p className="rtlp__lead">{r.lead}</p>

          <div className="rtlp-positioning surface">
            <p className="rtlp-positioning__title">{r.positioning.title}</p>
            <p className="rtlp-positioning__body">{r.positioning.body}</p>
          </div>
        </header>

        <main className="rtlp__main">
          <div className="rtlp-dirbar surface" role="group" aria-label={r.dir.label}>
            <span className="rtlp-dirbar__label">{r.dir.label}</span>
            <div className="rtlp-seg">
              <button
                type="button"
                className="rtlp-seg__btn"
                data-active={demoDir === 'rtl'}
                aria-pressed={demoDir === 'rtl'}
                onClick={() => setDemoDir('rtl')}
              >
                {r.dir.rtl}
              </button>
              <button
                type="button"
                className="rtlp-seg__btn"
                data-active={demoDir === 'ltr'}
                aria-pressed={demoDir === 'ltr'}
                onClick={() => setDemoDir('ltr')}
              >
                {r.dir.ltr}
              </button>
            </div>
            <span className="rtlp-dirbar__hint">{r.dir.hint}</span>
          </div>

          <Section id="hijri" title={s.hijri.title} lead={s.hijri.lead}>
            <Preview className="rtlp-live--pickers">
              <DatePicker
                label={d.dobLabel}
                defaultCalendar={demoDir === 'rtl' ? 'hijri' : 'gregorian'}
                showSecondaryCalendar
                helperText={d.dobHelper}
              />
              <DateRangePicker
                label={d.rangeLabel}
                defaultCalendar="hijri"
                showSecondaryCalendar
                helperText={d.rangeHelper}
              />
            </Preview>

            <ul className="rtlp-points">
              {s.hijri.points.map((p) => (
                <li className="rtlp-point" key={p.t}>
                  <span className="rtlp-point__t">{p.t}</span>
                  <span className="rtlp-point__d">{p.d}</span>
                </li>
              ))}
            </ul>

            <div dir="ltr">
              <CodeSnippet
                languages={[{ value: 'tsx', label: 'DatePicker.tsx', code: HIJRI_CODE }]}
              />
            </div>
            <p className="rtlp-note">{s.hijri.note}</p>
          </Section>

          <Section id="abjad" title={s.abjad.title} lead={s.abjad.lead}>
            <div className="rtlp-dual">
              <div className="rtlp-dual__card surface">
                <span className="rtlp-dual__label">{s.abjad.ltrLabel}</span>
                <DgaProvider dir="ltr" mode={mode} theme={theme} className="rtlp-dual__live">
                  <AbjadList data={ABJAD.ltr} />
                </DgaProvider>
              </div>
              <div className="rtlp-dual__card surface">
                <span className="rtlp-dual__label">{s.abjad.rtlLabel}</span>
                <DgaProvider dir="rtl" mode={mode} theme={theme} className="rtlp-dual__live">
                  <AbjadList data={ABJAD.ar} />
                </DgaProvider>
              </div>
            </div>
            <p className="rtlp-note">{s.abjad.note}</p>
            <div dir="ltr">
              <CodeSnippet languages={[{ value: 'tsx', label: 'List.tsx', code: ABJAD_CODE }]} />
            </div>
          </Section>

          <Section id="joining" title={s.joining.title} lead={s.joining.lead}>
            <div className="rtlp-join-row surface">
              <div className="rtlp-join__cell">
                <span className="rtlp-join__label">
                  <span className="rtlp-dot rtlp-dot--ok" aria-hidden />
                  {s.joining.okLabel}
                </span>
                <p className="rtlp-join rtlp-join--ok" dir="rtl" lang="ar">
                  الحكومة الرقمية
                </p>
              </div>
              <div className="rtlp-join__cell">
                <span className="rtlp-join__label">
                  <span className="rtlp-dot rtlp-dot--bad" aria-hidden />
                  {s.joining.brokenLabel}
                </span>
                <p
                  className="rtlp-join rtlp-join--broken"
                  dir="rtl"
                  lang="ar"
                  style={{ letterSpacing: '0.25em' }}
                >
                  الحكومة الرقمية
                </p>
              </div>
            </div>
            <p className="rtlp-note">{s.joining.note}</p>
            <div dir="ltr">
              <CodeSnippet
                languages={[{ value: 'css', label: 'globals.css', code: JOINING_CODE }]}
                lineNumbers={false}
              />
            </div>
          </Section>

          <Section id="keyboard" title={s.keyboard.title} lead={s.keyboard.lead}>
            <ul className="rtlp-keys">
              {s.keyboard.keys.map((k) => (
                <li className="rtlp-key" key={k.k}>
                  <kbd className="rtlp-kbd" dir="ltr">
                    {k.k}
                  </kbd>
                  <span className="rtlp-key__d">{k.d}</span>
                </li>
              ))}
            </ul>

            <Preview className="rtlp-live--kbd">
              <Tabs defaultValue="overview">
                <TabsList aria-label={s.keyboard.nav}>
                  {d.tabs.map((t) => (
                    <TabsTrigger key={t.v} value={t.v}>
                      {t.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {d.tabs.map((t) => (
                  <TabsContent key={t.v} value={t.v}>
                    <p className="rtlp-tabbody">{t.body}</p>
                  </TabsContent>
                ))}
              </Tabs>
              <div className="rtlp-kbd-controls">
                <Slider label={d.sliderLabel} defaultValue={40} />
                <Rating label={d.ratingLabel} defaultValue={4} />
              </div>
            </Preview>

            <p className="rtlp-note">{s.keyboard.try}</p>
            <div dir="ltr">
              <CodeSnippet
                languages={[{ value: 'tsx', label: 'Tabs.tsx', code: KEYBOARD_CODE }]}
              />
            </div>
          </Section>

          <Section id="logical" title={s.logical.title} lead={s.logical.lead}>
            <Preview className="rtlp-live--mirror">
              <span className="rtlp-mirror__flag">{s.logical.mirrorLabel}</span>
              <div className="rtlp-mirror">
                <span className="rtlp-mirror__badge" aria-hidden>
                  CR
                </span>
                <span className="rtlp-mirror__text">
                  <span className="rtlp-mirror__title">{d.mirrorTitle}</span>
                  <span className="rtlp-mirror__meta">{d.mirrorMeta}</span>
                </span>
                <ArrowRight className="rtl-flip-x rtlp-mirror__go" width={18} height={18} />
              </div>
            </Preview>
            <p className="rtlp-note">{s.logical.note}</p>
            <div dir="ltr">
              <CodeSnippet
                languages={[{ value: 'css', label: 'card.css', code: LOGICAL_CODE }]}
                lineNumbers={false}
              />
            </div>
          </Section>

          <Section id="saudi" title={s.saudi.title} lead={s.saudi.lead}>
            <Preview className="rtlp-live--fields">
              <div className="rtlp-fields">
                <TextInput
                  label={s.saudi.fields.nationalId}
                  dir="ltr"
                  inputMode="numeric"
                  defaultValue={d.nationalId}
                />
                <TextInput
                  label={s.saudi.fields.mobile}
                  dir="ltr"
                  inputMode="tel"
                  defaultValue={d.mobile}
                  startAdornment={<TextInputAffix dir="ltr">+966</TextInputAffix>}
                />
                <TextInput
                  label={s.saudi.fields.iban}
                  dir="ltr"
                  inputMode="text"
                  defaultValue={d.iban}
                />
              </div>
            </Preview>
            <p className="rtlp-note">{s.saudi.note}</p>
            <div dir="ltr">
              <CodeSnippet
                languages={[{ value: 'tsx', label: 'Fields.tsx', code: SAUDI_CODE }]}
              />
            </div>
          </Section>

          <div className="rtlp-cta surface">
            <p className="rtlp-cta__title">{r.cta.title}</p>
            <div className="rtlp-cta__actions">
              <Button asChild size="md" endIcon={<ArrowRight width={16} height={16} />} iconFlip>
                <Link href="/components">{r.cta.browse}</Link>
              </Button>
              <Button asChild variant="outline" size="md">
                <Link href="/installation">{r.cta.install}</Link>
              </Button>
            </div>
          </div>
        </main>

        <aside className="rtlp__toc" aria-label={r.onThisPage}>
          <div className="rtlp__toc-inner">
            <p className="rtlp__toc-title">{r.onThisPage}</p>
            <nav>
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="rtlp__toc-link">
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
