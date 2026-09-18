import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

function LegacyProjectCard({ project, lang }) {
  return (
    <article className="project-chip">
      <span>{project}</span>
      <small>{lang === 'es' ? 'Proyecto empresarial' : 'Enterprise project'}</small>
    </article>
  );
}

function ProjectCard({ project, lang }) {
  const detailLabel = lang === 'es' ? 'Ver detalle técnico' : 'View technical details';
  const technologiesLabel = lang === 'es' ? 'Tecnologías' : 'Technologies';

  return (
    <article className="project-chip project-chip--detailed">
      <h3>{project.title}</h3>

      {project.summary && (
        <p className="project-summary">{project.summary}</p>
      )}

      {project.stack?.length > 0 && (
        <div className="project-technologies">
          <small><strong>{technologiesLabel}:</strong> {project.stack.join(' · ')}</small>
        </div>
      )}

      {project.points?.length > 0 && (
        <details className="project-details">
          <summary>{detailLabel}</summary>
          <ul>
            {project.points.map((point, index) => (
              <li key={`${project.id}-point-${index}`}>{point}</li>
            ))}
          </ul>
        </details>
      )}
    </article>
  );
}

export function ProjectsSection({ projects = [], title, lang }) {
  const intro = lang === 'es'
    ? 'Plataformas, modernizaciones e iniciativas empresariales en las que he participado.'
    : 'Enterprise platforms, modernization initiatives, and solutions I have contributed to.';

  return (
    <section>
      <SectionTitle id="projects">{title}</SectionTitle>
      <p className="section-intro">{intro}</p>

      <div className="project-chip-grid">
        {projects.map((project) => {
          if (typeof project === 'string') {
            return (
              <LegacyProjectCard
                key={project}
                project={project}
                lang={lang}
              />
            );
          }

          return (
            <ProjectCard
              key={project.id ?? project.title}
              project={project}
              lang={lang}
            />
          );
        })}
      </div>
    </section>
  );
}
