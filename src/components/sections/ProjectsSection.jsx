import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function ProjectsSection({ projects, title, lang }) {
  return (
    <section>
      <SectionTitle id="projects">{title}</SectionTitle>
      <p className="section-intro">{lang === 'es' ? 'Plataformas y soluciones empresariales en las que he participado.' : 'Enterprise platforms and solutions I have contributed to.'}</p>
      <div className="project-chip-grid">
        {projects.map((project) => (
          <div className="project-chip" key={project}>
            <span>{project}</span>
            <small>{lang === 'es' ? 'Proyecto empresarial' : 'Enterprise project'}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
