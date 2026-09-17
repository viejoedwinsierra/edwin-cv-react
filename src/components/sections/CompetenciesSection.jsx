import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

function CompetencyCategory({ title, items = [] }) {
  if (!items.length) return null;
  return (
    <section className="competency-category">
      <h3 className="competency-category-title">{title}</h3>
      <div className="evidence-grid">
        {items.map((item) => (
          <article className="evidence-card" key={item.name}>
            <strong>{item.name}</strong>
            {item.evidence && <p>{item.evidence}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

export function CompetenciesSection({ competencies, title, lang }) {
  return (
    <section className="expertise-section">
      <SectionTitle id="skills">{title}</SectionTitle>
      <p className="section-intro">
        {lang === 'es'
          ? 'Las capacidades se presentan mediante evidencia profesional, no mediante porcentajes subjetivos.'
          : 'Capabilities are presented through professional evidence rather than subjective percentages.'}
      </p>
      <div className="competency-segments">
        <CompetencyCategory title={lang === 'es' ? 'Capacidades técnicas' : 'Technical capabilities'} items={competencies.technical} />
        <CompetencyCategory title={lang === 'es' ? 'Liderazgo y colaboración' : 'Leadership and collaboration'} items={competencies.leadership} />
        <CompetencyCategory title={lang === 'es' ? 'Comunicación y crecimiento' : 'Communication and growth'} items={competencies.communication} />
      </div>
    </section>
  );
}
