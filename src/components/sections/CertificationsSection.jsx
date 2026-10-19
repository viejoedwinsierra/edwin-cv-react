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
            {item.issued && <p className="certificate-domains">{lang === 'es' ? 'Emisión' : 'Issued'}: {item.issued}{item.expires ? ` · ${lang === 'es' ? 'Vencimiento' : 'Expiration'}: ${item.expires}` : ''}</p>}
            {item.credentialId && <p className="certificate-domains">{lang === 'es' ? 'ID de credencial' : 'Credential ID'}: {item.credentialId}</p>}
            {item.evidenceLevel === 'badge' && <p className="certificate-domains">{lang === 'es' ? 'Insignia de participación' : 'Participation badge'}</p>}
            {item.credentialUrl && <p className="certificate-domains"><a href={item.credentialUrl} target="_blank" rel="noreferrer">{lang === 'es' ? 'Consultar directorio del emisor' : 'View issuer directory'}</a></p>}
            {item.domains?.length > 0 && <p className="certificate-domains">{item.domains.join(' · ')}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
