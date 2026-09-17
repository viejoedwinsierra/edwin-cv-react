import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function EducationSection({ education, certifications, sections }) {
  return (
    <section className="split-section" id="education">
      <div>
        <SectionTitle>{sections.education}</SectionTitle>
        <div className="stacked-cards">
          {education.map((item) => (
            <article className="mini-card" key={`${item.degree}-${item.school}`}>
              <h3>{item.degree}</h3><p>{item.school}</p><span>{item.period}</span><small>{item.area}</small>
            </article>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>{sections.certifications}</SectionTitle>
        <div className="stacked-cards certifications-grid">
          {certifications.map((item) => (
            <article className="mini-card certificate-card" key={item.id ?? item}>
              <h3>{item.displayName ?? item}</h3>
              {item.issuer && <small>{item.issuer}</small>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
