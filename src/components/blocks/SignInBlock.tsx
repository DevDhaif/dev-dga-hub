'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Link,
  TextInput,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

export function SignInBlock() {
  const { c } = useCopy();
  const d = c.blocks.demo;

  return (
    <Card variant="elevated" padding="lg" className="block-auth">
      <CardHeader>
        <CardTitle>{d.signInTitle}</CardTitle>
        <CardDescription>{d.signInLead}</CardDescription>
      </CardHeader>
      <CardContent className="block-auth__form">
        <TextInput
          label={d.email}
          type="email"
          placeholder="name@gov.sa"
          autoComplete="email"
          dir="ltr"
        />
        <TextInput
          label={d.password}
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          dir="ltr"
        />
        <div className="block-auth__row">
          <Checkbox label={d.remember} defaultChecked />
          <Link href="#" size="sm">
            {d.forgot}
          </Link>
        </div>
        <Button fullWidth>{d.signIn}</Button>
      </CardContent>
      <CardFooter className="block-auth__footer">
        <span>{d.noAccount}</span>{' '}
        <Link href="#" size="sm">
          {d.register}
        </Link>
      </CardFooter>
    </Card>
  );
}

export const signInCode = `import {
  Button, Card, CardContent, CardDescription, CardFooter,
  CardHeader, CardTitle, Checkbox, Link, TextInput,
} from '@dev-dga/react';

export function SignInPanel() {
  return (
    <Card variant="elevated" padding="lg" style={{ maxInlineSize: '26rem' }}>
      <CardHeader>
        <CardTitle>Sign in to Masar</CardTitle>
        <CardDescription>Use your national single sign-on to continue.</CardDescription>
      </CardHeader>
      <CardContent style={{ display: 'grid', gap: '1rem' }}>
        <TextInput label="Email" type="email" placeholder="name@gov.sa" autoComplete="email" />
        <TextInput label="Password" type="password" autoComplete="current-password" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Checkbox label="Keep me signed in" defaultChecked />
          <Link href="/forgot" size="sm">Forgot password?</Link>
        </div>
        <Button fullWidth>Sign in</Button>
      </CardContent>
      <CardFooter>
        <span>Don’t have an account?</span> <Link href="/register" size="sm">Register</Link>
      </CardFooter>
    </Card>
  );
}`;
