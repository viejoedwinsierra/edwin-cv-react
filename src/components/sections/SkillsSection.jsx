import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { TagList } from '../ui/TagList';

export function SkillsSection({ skills, platforms, title }) {
  const [filter, setFilter] = useState('All');
  const groups = useMemo(() => ({
    All: skills,
    Backend: platforms.backend,
    Frontend: platforms.frontend,
    Cloud: platforms.cloud,
    Data: platforms.databases,
    DevOps: platforms.delivery
  }), [skills, platforms]);

  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <div className="filter-row no-print">
        {Object.keys(groups).map((group) => (
          <button key={group} className={filter === group ? 'active' : ''} onClick={() => setFilter(group)}>{group}</button>
        ))}
      </div>
      <TagList items={groups[filter] ?? []} />
    </section>
  );
}
