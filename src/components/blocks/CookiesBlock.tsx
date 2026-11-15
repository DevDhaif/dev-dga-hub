'use client';

import { useId, useState } from 'react';
import { Button, Link, Switch } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { CloseIcon, CookieIcon } from './block-icons';

type View = 'default' | 'manage' | 'saved' | 'hidden';

export function CookiesBlock() {
  const { c } = useCopy();
  const k = c.blocks.cookies;
  const id = useId();
  const [view, setView] = useState<View>('default');
  const [prev, setPrev] = useState<View>('default');
  const [optional, setOptional] = useState([true, true, true]);

  const save = (from: View) => {
    setPrev(from);
    setView('saved');
  };

  if (view === 'hidden') {
    return (
      <div className="block-cookies">
        <Button variant="outline" onClick={() => setView('default')}>
          {k.reopen}
        </Button>
      </div>
    );
  }

  return (
    <div className="block-cookies">
      <section className="block-cookies__banner" aria-labelledby={`${id}-title`}>
        <div className="block-cookies__header">
          <span className="block-cookies__icon">
            <CookieIcon size={20} />
          </span>
          <h2 id={`${id}-title`} className="block-cookies__title">
            {view === 'manage' ? k.manageTitle : k.title}
          </h2>
          <Button
            variant="ghost"
            size="icon-md"
            aria-label={k.close}
            onClick={() => setView('hidden')}
          >
            <CloseIcon size={20} />
          </Button>
        </div>

        {view === 'default' && (
          <>
            <div className="block-cookies__content">
              <p className="block-cookies__body">{k.body}</p>
              <Link href="#">{k.privacy}</Link>
            </div>
            <div className="block-cookies__actions">
              <Button fullWidth onClick={() => save('default')}>
                {k.accept}
              </Button>
              <Button variant="outline" fullWidth onClick={() => save('default')}>
                {k.reject}
              </Button>
              <Button variant="ghost" fullWidth onClick={() => setView('manage')}>
                {k.manage}
              </Button>
            </div>
          </>
        )}

        {view === 'manage' && (
          <>
            <p className="block-cookies__body">{k.manageBody}</p>
            <div className="block-cookies__switches">
              <Switch label={k.categories[0]} checked disabled />
              {k.categories.slice(1).map((label, i) => (
                <Switch
                  key={label}
                  label={label}
                  checked={optional[i]}
                  onCheckedChange={(on) =>
                    setOptional((cur) => cur.map((v, j) => (j === i ? on : v)))
                  }
                />
              ))}
            </div>
            <div className="block-cookies__actions">
              <Button fullWidth onClick={() => save('manage')}>
                {k.confirm}
              </Button>
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  setOptional([false, false, false]);
                  save('manage');
                }}
              >
                {k.reject}
              </Button>
            </div>
          </>
        )}

        {view === 'saved' && (
          <>
            <p className="block-cookies__body" role="status">
              {k.saved}
            </p>
            <div className="block-cookies__actions">
              <Button variant="ghost" fullWidth onClick={() => setView(prev)}>
                {k.undo}
              </Button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export const cookiesCode = `import { useState } from 'react';
import { Button, Link, Switch } from '@dev-dga/react';

export function CookiesBanner({ onSave }) {
  const [view, setView] = useState('default'); // default | manage | saved
  const [optional, setOptional] = useState({ performance: true, functional: true, targeting: true });

  return (
    <section className="cookies" aria-labelledby="cookies-title">
      <h2 id="cookies-title">{view === 'manage' ? 'Manage cookies' : 'Cookies'}</h2>

      {view === 'default' && (
        <>
          <p>This site uses cookies to keep it easy to use and to improve your experience.</p>
          <Link href="/privacy">Privacy policy</Link>
          <Button fullWidth onClick={() => { onSave('all'); setView('saved'); }}>Accept all</Button>
          <Button variant="outline" fullWidth onClick={() => { onSave('none'); setView('saved'); }}>Reject all</Button>
          <Button variant="ghost" fullWidth onClick={() => setView('manage')}>Manage cookies</Button>
        </>
      )}

      {view === 'manage' && (
        <>
          <Switch label="Strictly necessary cookies (always active)" checked disabled />
          {Object.keys(optional).map((key) => (
            <Switch
              key={key}
              label={key}
              checked={optional[key]}
              onCheckedChange={(on) => setOptional({ ...optional, [key]: on })}
            />
          ))}
          <Button fullWidth onClick={() => { onSave(optional); setView('saved'); }}>Confirm my choices</Button>
        </>
      )}

      {view === 'saved' && (
        <>
          <p role="status">Thank you. Your choice is saved. To change it, select Undo.</p>
          <Button variant="ghost" fullWidth onClick={() => setView('default')}>Undo</Button>
        </>
      )}
    </section>
  );
}

/* cookies.css: DGA Cookies Banner, a floating card.
.cookies { display: grid; gap: var(--ddga-space-4); padding: var(--ddga-space-8);
  background: var(--ddga-color-card); border-radius: var(--ddga-radius-md); box-shadow: var(--ddga-shadow-xl); }
*/`;
