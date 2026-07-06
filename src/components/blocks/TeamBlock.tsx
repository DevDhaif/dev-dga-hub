'use client';

import { Avatar, AvatarFallback, Button, Card } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

export function TeamBlock() {
  const { c } = useCopy();
  const tm = c.blocks.team;

  return (
    <div className="block-team">
      <div className="block-team__bar">
        <div className="block-team__intro">
          <h3 className="block-team__title">{tm.title}</h3>
          <p className="block-team__lead">{tm.lead}</p>
        </div>
        <Button variant="outline">{tm.invite}</Button>
      </div>

      <div className="block-team__grid">
        {tm.members.map((m) => (
          <Card key={m.name} variant="outline" padding="lg" className="block-team__card">
            <Avatar size="lg">
              <AvatarFallback colorScheme="primary">{m.initials}</AvatarFallback>
            </Avatar>
            <div className="block-team__info">
              <p className="block-team__name">{m.name}</p>
              <p className="block-team__role">{m.role}</p>
            </div>
            <Button asChild variant="ghost" size="sm">
              <a href="#">{tm.action}</a>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export const teamCode = `import { Avatar, AvatarFallback, Button, Card } from '@dev-dga/react';

const members = [
  { name: 'Sara Al-Otaibi', role: 'Product lead', initials: 'SA' },
  { name: 'Faisal Al-Mutairi', role: 'Engineering', initials: 'FM' },
  { name: 'Noura Al-Qahtani', role: 'Design', initials: 'NK' },
  { name: 'Omar Al-Harbi', role: 'Operations', initials: 'OH' },
];

export function TeamDirectory() {
  return (
    <div style={{
      display: 'grid', gap: '1rem',
      gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))',
    }}>
      {members.map((m) => (
        <Card key={m.name} variant="outline" padding="lg"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
          <Avatar size="lg"><AvatarFallback colorScheme="primary">{m.initials}</AvatarFallback></Avatar>
          <div>
            <p style={{ fontWeight: 600 }}>{m.name}</p>
            <p>{m.role}</p>
          </div>
          <Button asChild variant="ghost" size="sm"><a href={\`/team/\${m.name}\`}>View profile</a></Button>
        </Card>
      ))}
    </div>
  );
}`;
