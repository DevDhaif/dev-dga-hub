'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@dev-dga/react';
import { CATEGORIES } from '@/lib/catalog';
import { useCopy } from '@/lib/i18n';
import { isArabicPath, localizeHref } from '@/lib/locale-routes';
import { componentName } from '@/lib/component-names';

export const OPEN_COMMAND_EVENT = 'dga:open-command';

export function CommandPalette() {
  const router = useRouter();
  const isAr = isArabicPath(usePathname());
  const { c, locale } = useCopy();
  const [open, setOpen] = useState(false);

  const pages = [
    { value: 'home', label: c.command.home, href: '/' },
    { value: 'all-components', label: c.command.allComponents, href: '/components' },
    { value: 'compliance', label: c.nav.compliance, href: '/compliance' },
    { value: 'accessibility', label: c.nav.accessibility, href: '/accessibility' },
    { value: 'rtl', label: c.nav.rtl, href: '/rtl' },
    { value: 'installation', label: c.command.installation, href: '/installation' },
    { value: 'theme', label: c.themePage.eyebrow, href: '/theme' },
    { value: 'blocks', label: c.command.blocks, href: '/blocks' },
  ];
  const catTitle = (id: string) => c.categories[id as keyof typeof c.categories]?.title ?? id;

  useEffect(() => {
    const openIt = () => setOpen(true);
    window.addEventListener(OPEN_COMMAND_EVENT, openIt);
    return () => window.removeEventListener(OPEN_COMMAND_EVENT, openIt);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(localizeHref(href, isAr));
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen} label={c.command.label}>
      <CommandInput placeholder={c.command.placeholder} />
      <CommandList>
        <CommandEmpty>{c.command.empty}</CommandEmpty>
        <CommandGroup heading={c.command.goTo}>
          {pages.map((p) => (
            <CommandItem key={p.value} value={p.value} onSelect={() => go(p.href)}>
              {p.label}
            </CommandItem>
          ))}
        </CommandGroup>
        {CATEGORIES.map((cat) => (
          <CommandGroup key={cat.id} heading={catTitle(cat.id)}>
            {cat.components.map((comp) => (
              <CommandItem
                key={comp.slug}
                value={comp.slug}
                keywords={[comp.name, comp.slug, catTitle(cat.id), cat.title]}
                onSelect={() => go(`/components/${comp.slug}`)}
              >
                {componentName(comp.slug, comp.name, locale)}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
