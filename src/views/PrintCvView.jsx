import React from 'react';

function ContactLine({ cv }) {
  const visible = (cv.contact ?? []).filter((item) =>
    ['phone', 'location', 'website', 'linkedin', 'github'].includes(item.kind)
  );

  return (
    <div className="print-contact">
      {visible.map((item) =>
        item.href ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            {item.value}
          </a>
        ) : (
          <span key={item.label}>{item.value}</span>
        )
      )}
    </div>
  );
}

function PrintExperience({ experience }) {
  return (
    <>
      {experience.map((item) => (
        <article
          className="print-job"
          key={`${item.company}-${item.period}`}
        >
          <div className="print-job-head">
            <div>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
            </div>

            <span>{item.period}</span>
          </div>

          <ul>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <p className="print-stack">
            {item.stack.join(' · ')}
          </p>
        </article>
      ))}
    </>
  );
}

export function PrintCvView({ cv, lang }) {
  const labels =
    lang === 'es'
      ? {
          profile: 'Perfil profesional',
          experience: 'Experiencia profesional',
          skills: 'Capacidades técnicas',
          education: 'Formación',
          certs: 'Certificaciones seleccionadas'
        }
      : {
          profile: 'Professional profile',
          experience: 'Professional experience',
          skills: 'Technical capabilities',
          education: 'Education',
          certs: 'Selected certifications'
        };

  return (
    <main className="print-cv print-only">
      <header className="print-header">
        <div className="print-header-layout">
          <img
            className="print-avatar"
            src="/profile.jpg"
            alt={cv.profile.name}
          />

          <div className="print-header-content">
            <h1>{cv.profile.name}</h1>

            <p className="print-headline">
              {cv.profile.title}
            </p>

            <p className="print-role-family">
              {cv.roleFamily.displayLabel}
            </p>

            <ContactLine cv={cv} />
          </div>
        </div>
      </header>

      <section className="print-section print-profile">
        <h2>{labels.profile}</h2>
        <p>{cv.profile.summary}</p>
      </section>

      <section className="print-section">
        <h2>{labels.skills}</h2>
        <p className="print-skills">
          {cv.skills.join(' · ')}
        </p>
      </section>

      <section className="print-section">
        <h2>{labels.experience}</h2>
        <PrintExperience experience={cv.experience} />
      </section>

      <div className="print-two-columns">
        <section className="print-section">
          <h2>{labels.education}</h2>

          {cv.education.map((item) => (
            <article
              className="print-compact-item"
              key={`${item.degree}-${item.school}`}
            >
              <strong>{item.degree}</strong>
              <span>
                {item.school} · {item.period}
              </span>
            </article>
          ))}
        </section>

        <section className="print-section">
          <h2>{labels.certs}</h2>

          {cv.certifications.map((item) => (
            <article
              className="print-compact-item"
              key={item.id}
            >
              <strong>{item.displayName}</strong>
              <span>{item.issuer}</span>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}