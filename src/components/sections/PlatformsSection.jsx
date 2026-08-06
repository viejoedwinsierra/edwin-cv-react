import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { PlatformCard } from '../ui/PlatformCard';

export function PlatformsSection({ platforms, title, lang }) {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <div className="platform-grid">
        <PlatformCard title="Backend" items={platforms.backend} />
        <PlatformCard title="Frontend" items={platforms.frontend} />
        <PlatformCard title={lang === 'es' ? 'Bases de datos' : 'Databases'} items={platforms.databases} />
        <PlatformCard title="Delivery / DevOps" items={platforms.delivery} />
        <PlatformCard title="Cloud" items={platforms.cloud} />
        <PlatformCard title={lang === 'es' ? 'Plataformas de ejecución' : 'Runtime platforms'} items={platforms.runtimes} />
      </div>
    </section>
  );
}
