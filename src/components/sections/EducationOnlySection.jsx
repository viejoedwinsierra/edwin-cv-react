import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function EducationOnlySection({ education, title }) {
  return (
    <section className="page-section" id="education">
      <SectionTitle>{title}</SectionTitle>
      <div className="education-view-grid">
        {education.map((item) => (
          <article className="mini-card" key={`${item.degree}-${item.school}`}>
            <h3>{item.degree}</h3>
            <p>{item.school}</p>
            <span>{item.period}</span>
            <small>{item.area}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
