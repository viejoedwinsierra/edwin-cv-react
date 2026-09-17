import React from 'react';

export function ProfileView({ cv, lang }) {
  const labels = lang === 'es'
    ? {
        positioning: 'Identificación profesional',
        profile: 'Perfil profesional',
        evolution: 'Evolución profesional',
        languages: 'Idiomas'
      }
    : {
        positioning: 'Professional identification',
        profile: 'Professional Profile',
        evolution: 'Professional Evolution',
        languages: 'Languages'
      };

  return (
    <div className="view-panel profile-view">
      <section className="profile-positioning page-section" aria-labelledby="professional-positioning-title">
        <p className="eyebrow">{labels.positioning}</p>
        <h2 id="professional-positioning-title">{cv.profile.title}</h2>
      </section>

      <section className="profile-section page-section" aria-labelledby="professional-profile-title">
        <h3 className="section-title" id="professional-profile-title">{labels.profile}</h3>
        <p className="profile-copy">{cv.profile.summary}</p>
      </section>

      <section className="profile-section page-section" aria-labelledby="professional-evolution-title">
        <h3 className="section-title" id="professional-evolution-title">{labels.evolution}</h3>
        <p className="profile-evolution">{cv.professionalEvolution}</p>
      </section>

      <section className="profile-section page-section" aria-labelledby="profile-languages-title">
        <h3 className="section-title" id="profile-languages-title">{labels.languages}</h3>
        <ul className="profile-languages">
          {cv.languages.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}
