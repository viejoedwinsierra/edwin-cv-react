import React, { useId, useState } from 'react';
import { TagList } from './TagList';

export function TimelineItem({ item, expanded, onToggle, lang, projects = [], onOpenProject }) {
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const projectsPanelId = useId();

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
        {projects.length > 0 && (
          <div className="experience-projects no-print">
            <button
              type="button"
              className="experience-projects-toggle"
              aria-expanded={projectsExpanded}
              aria-controls={projectsPanelId}
              onClick={() => setProjectsExpanded((current) => !current)}
            >
              <span className="experience-projects-toggle-label">
                {lang === 'es' ? 'Proyectos relacionados' : 'Related projects'}
                <span className="experience-projects-count">{projects.length}</span>
              </span>
              <span className="experience-projects-toggle-action">
                {projectsExpanded
                  ? (lang === 'es' ? 'Ocultar' : 'Hide')
                  : (lang === 'es' ? 'Mostrar' : 'Show')}
                <span aria-hidden="true">{projectsExpanded ? '▴' : '▾'}</span>
              </span>
            </button>
            {projectsExpanded && (
              <div id={projectsPanelId} className="tag-list experience-project-tags">
                {projects.map((project) => (
                  <button
                    type="button"
                    className="tag project-link-tag"
                    key={project.id}
                    onClick={() => onOpenProject?.(project.id)}
                    title={project.title}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        <TagList items={item.stack ?? []} />
      </div>
    </article>
  );
}
