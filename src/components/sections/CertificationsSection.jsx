import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function CertificationsSection({ certifications, title, lang }) {
  return (
    <section className="page-section" id="certifications">
      <SectionTitle>{title}</SectionTitle>
      <p className="section-intro">
        {lang === 'es'
          ? 'Formación complementaria organizada como evidencia de aprendizaje. No se presenta automáticamente como experiencia profesional.'
          : 'Complementary training organized as learning evidence. It is not automatically presented as professional experience.'}
      </p>
      <div className="certification-view-grid">
        {certifications.map((item) => (
          <article className="mini-card certificate-card" key={item.id ?? item}>
            <h3>{item.displayName ?? item}</h3>
            {item.issuer && <small>{item.issuer}</small>}
            {item.domains?.length > 0 && <p className="certificate-domains">{item.domains.join(' · ')}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
