'use client';

import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  DgaProvider,
  TextInput,
  Tag,
  type DgaProviderProps,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

function MiniService({ arabic = false }: { arabic?: boolean }) {
  const t = (en: string, ar: string) => (arabic ? ar : en);
  return (
    <Card style={{ width: '100%', boxShadow: 'none' }}>
      <CardHeader>
        <CardTitle>{t('Renew vehicle registration', 'تجديد استمارة المركبة')}</CardTitle>
      </CardHeader>
      <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        <TextInput
          label={t('Plate number', 'رقم اللوحة')}
          helperText={t('Letters and numbers', 'أحرف وأرقام')}
          defaultValue={t('RUH 4821', 'ر و ح 4821')}
          size="md"
        />
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Tag variant="success-subtle">{t('Eligible', 'مؤهلة')}</Tag>
          <Tag variant="primary-subtle">{t('SR 300', '300 ر.س')}</Tag>
        </div>
      </CardContent>
      <CardFooter style={{ gap: '0.6rem' }}>
        <Button size="sm" endIcon={<Arrow />} iconFlip>
          {t('Continue', 'متابعة')}
        </Button>
        <Button size="sm" variant="ghost">
          {t('Cancel', 'إلغاء')}
        </Button>
      </CardFooter>
    </Card>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pane({
  label,
  hint,
  dir,
  mode,
  arabic,
}: {
  label: string;
  hint: string;
  dir?: DgaProviderProps['dir'];
  mode?: DgaProviderProps['mode'];
  arabic?: boolean;
}) {
  return (
    <DgaProvider dir={dir} mode={mode} className="pane" style={{ display: 'block' }}>
      <div className="pane__label">
        <span>{label}</span>
        <span>{hint}</span>
      </div>
      <div className="pane__body">
        <MiniService arabic={arabic} />
      </div>
    </DgaProvider>
  );
}

export function RtlDemo() {
  return (
    <div className="split">
      <Pane label='dir="ltr"' hint="English" dir="ltr" />
      <Pane label='dir="rtl"' hint="العربية" dir="rtl" arabic />
    </div>
  );
}

export function DarkModeDemo() {
  const { locale } = useCopy();
  const ar = locale === 'ar';
  return (
    <div className="split split--joined">
      <Pane label='mode="light"' hint="light" mode="light" arabic={ar} />
      <Pane label='mode="dark"' hint="dark" mode="dark" arabic={ar} />
    </div>
  );
}
