'use client';

import { Fragment } from 'react';
import {
  Button,
  Card,
  Divider,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TextInput,
  Textarea,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

export function SettingsBlock() {
  const { c } = useCopy();
  const t = c.blocks.settings;

  return (
    <Card variant="elevated" padding="lg" className="block-settings">
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">{t.tabs.profile}</TabsTrigger>
          <TabsTrigger value="notifications">{t.tabs.notifications}</TabsTrigger>
          <TabsTrigger value="security">{t.tabs.security}</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="block-settings__panel">
          <div className="block-settings__grid">
            <TextInput label={t.name} defaultValue="Sara Al-Otaibi" />
            <TextInput label={t.email} type="email" defaultValue="sara@gov.sa" dir="ltr" />
          </div>
          <Textarea label={t.bio} rows={3} />
          <div className="block-settings__actions">
            <Button type="button">{t.save}</Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="block-settings__panel">
          <p className="block-settings__subhead">{t.notifTitle}</p>
          {t.notif.map((n, i) => (
            <Fragment key={n.title}>
              {i > 0 && <Divider decorative />}
              <div className="block-settings__row">
                <div className="block-settings__row-text">
                  <p className="block-settings__row-title">{n.title}</p>
                  <p className="block-settings__row-desc">{n.desc}</p>
                </div>
                <Switch aria-label={n.title} defaultChecked={i < 2} />
              </div>
            </Fragment>
          ))}
        </TabsContent>

        <TabsContent value="security" className="block-settings__panel">
          <div className="block-settings__row">
            <div className="block-settings__row-text">
              <p className="block-settings__row-title">{t.twoFaTitle}</p>
              <p className="block-settings__row-desc">{t.twoFaDesc}</p>
            </div>
            <Switch aria-label={t.twoFaTitle} defaultChecked />
          </div>
          <Divider decorative />
          <p className="block-settings__subhead">{t.changePassword}</p>
          <div className="block-settings__grid">
            <TextInput label={t.currentPassword} type="password" dir="ltr" />
            <TextInput label={t.newPassword} type="password" dir="ltr" />
          </div>
          <div className="block-settings__actions">
            <Button type="button">{t.update}</Button>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export const settingsCode = `import { Fragment } from 'react';
import {
  Button, Card, Divider, Switch, Tabs, TabsContent, TabsList, TabsTrigger, TextInput, Textarea,
} from '@dev-dga/react';

const notifications = [
  { title: 'Email updates', desc: 'Status changes and approvals for your requests.' },
  { title: 'SMS alerts', desc: 'Time-sensitive notifications by text message.' },
  { title: 'Product news', desc: 'Occasional updates about new features.' },
];

export function SettingsPanel() {
  return (
    <Card variant="elevated" padding="lg">
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" style={{ display: 'grid', gap: '1.25rem' }}>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <TextInput label="Display name" defaultValue="Sara Al-Otaibi" />
            <TextInput label="Email address" type="email" defaultValue="sara@gov.sa" />
          </div>
          <Textarea label="Bio" rows={3} />
          <div><Button>Save changes</Button></div>
        </TabsContent>

        <TabsContent value="notifications" style={{ display: 'grid', gap: '1rem' }}>
          {notifications.map((n, i) => (
            <Fragment key={n.title}>
              {i > 0 && <Divider decorative />}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <div>
                  <p><strong>{n.title}</strong></p>
                  <p>{n.desc}</p>
                </div>
                <Switch aria-label={n.title} defaultChecked={i < 2} />
              </div>
            </Fragment>
          ))}
        </TabsContent>

        <TabsContent value="security" style={{ display: 'grid', gap: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
            <div>
              <p><strong>Two-factor authentication</strong></p>
              <p>Require a one-time code in addition to your password.</p>
            </div>
            <Switch aria-label="Two-factor authentication" defaultChecked />
          </div>
          <Divider decorative />
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <TextInput label="Current password" type="password" />
            <TextInput label="New password" type="password" />
          </div>
          <div><Button>Update password</Button></div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}`;
