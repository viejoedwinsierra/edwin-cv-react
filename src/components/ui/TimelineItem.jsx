import React from 'react';
import { TagList } from './TagList';

export function TimelineItem({ item, expanded, onToggle, lang }) {
  return (
    <article className={`timeline-item ${expanded ? 'is-open' : ''}`}>
      <button className="timeline-toggle no-print" onClick={onToggle} aria-expanded={expanded}>
        <span>{expanded ? '−' : '+'}</span>
        {lang === 'es' ? 'Ver detalles' : 'View details'}
      </button>
      <div className="timeline-header">
        <div><h3>{item.role}</h3><p className="company">{item.company}</p></div>
        <div className="timeline-meta"><span>{item.period}</span><span>{item.location}</span></div>
      </div>
      <div className={`timeline-details ${expanded ? 'open' : ''}`}>
        <ul>{(item.points ?? []).map((point) => <li key={point}>{point}</li>)}</ul>
        <TagList items={item.stack ?? []} />
      </div>
    </article>
  );
}
