import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { CircleIndicator } from '../ui/CircleIndicator';

function CompetencyCategory({ title, description, items = [] }) {
  if (!items.length) return null;
  return (
    <section className="competency-category">
      <div className="competency-category-header">
        <h3 className="competency-category-title">{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <div className="circle-grid">
        {items.map((item) => <CircleIndicator key={item.name} {...item} />)}
      </div>
    </section>
  );
}

export function CompetenciesSection({ competencies, title, lang }) {
  const descriptions = lang === 'es'
    ? {
        technical: 'Fortalezas sustentadas en experiencia práctica con aplicaciones empresariales críticas.',
        leadership: 'Capacidades de influencia, coordinación técnica y crecimiento hacia arquitectura.',
        communication: 'Habilidades de colaboración y áreas de desarrollo profesional continuo.'
      }
    : {
        technical: 'Strengths supported by hands-on experience with critical enterprise applications.',
        leadership: 'Capabilities in influence, technical coordination, and growth toward architecture.',
        communication: 'Collaboration strengths and areas of continuous professional development.'
      };

  return (
    <section className="expertise-section">
      <SectionTitle id="skills">{title}</SectionTitle>
      <p className="section-intro">
        {lang === 'es'
          ? 'Los niveles representan evidencia actual y potencial de crecimiento; ningún valor pretende indicar dominio absoluto.'
          : 'Levels represent current evidence and growth potential; no value is intended to indicate absolute mastery.'}
      </p>
      <div className="competency-segments">
        <CompetencyCategory title={lang === 'es' ? 'Capacidades técnicas' : 'Technical capabilities'} description={descriptions.technical} items={competencies.technical} />
        <CompetencyCategory title={lang === 'es' ? 'Liderazgo y colaboración' : 'Leadership and collaboration'} description={descriptions.leadership} items={competencies.leadership} />
        <CompetencyCategory title={lang === 'es' ? 'Comunicación y crecimiento' : 'Communication and growth'} description={descriptions.communication} items={competencies.communication} />
      </div>
    </section>
  );
}
