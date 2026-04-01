import { useMemo, useState } from 'react';
import { content } from './data';

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

function TagList({ items }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function SidebarCard({ title, children }) {
  return (
    <section className="sidebar-card">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
}

function TimelineItem({ item }) {
  return (
    <article className="timeline-item">
      <div className="timeline-header">
        <div>
          <h3>{item.role}</h3>
          <p className="company">{item.company}</p>
        </div>
        <div className="timeline-meta">
          <span>{item.period}</span>
          <span>{item.location}</span>
        </div>
      </div>
      <ul>
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <TagList items={item.stack} />
    </article>
  );
}

function PlatformCard({ title, items }) {
  return (
    <article className="platform-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function App() {
  const [lang, setLang] = useState('es');
  const cv = useMemo(() => content[lang], [lang]);
  const printResume = () => window.print();

  return (
    <div className="page-shell">
      <div className="toolbar no-print">
        <button className="toolbar-link" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
          {cv.meta.switchLabel}
        </button>
        <a href={cv.profile.linkedin} target="_blank" rel="noreferrer" className="toolbar-link">
          {cv.meta.linkedinLabel}
        </a>
        <button onClick={printResume} className="print-button">
          {cv.meta.printLabel}
        </button>
      </div>

      <main className="resume">
        <aside className="sidebar">
          <div className="identity-block">
            <img className="avatar-photo" src="/profile.jpg" alt="Edwin Gustavo Sierra Poveda" />
            <h1>{cv.profile.name}</h1>
            <p className="headline">{cv.profile.title}</p>
            <p className="location">{cv.profile.location}</p>
          </div>

          <SidebarCard title={lang === 'es' ? 'Contacto' : 'Contact'}>
            <ul className="info-list">
              {cv.contact.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <strong>{item.value}</strong>
                  )}
                </li>
              ))}
            </ul>
          </SidebarCard>

          <SidebarCard title={lang === 'es' ? 'Perfil' : 'Profile'}>
            <p className="sidebar-text">{cv.sidebarProfile}</p>
          </SidebarCard>

          <SidebarCard title={lang === 'es' ? 'Idiomas' : 'Languages'}>
            <ul className="bullet-list compact-list">
              {cv.languages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SidebarCard>

          <SidebarCard title={lang === 'es' ? 'Intereses profesionales' : 'Professional interests'}>
            <ul className="bullet-list compact-list">
              {cv.interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SidebarCard>
        </aside>

        <section className="content">
          <section className="hero-card">
            <p className="eyebrow">{cv.meta.eyebrow}</p>
            <h2>{cv.profile.title}</h2>
            <p>{cv.profile.summary}</p>
            <div className="hero-highlight-grid">
              {cv.profile.highlights.map((item) => (
                <div className="hero-highlight" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>{cv.sections.platforms}</SectionTitle>
            <div className="platform-grid">
              <PlatformCard title="Backend" items={cv.platforms.backend} />
              <PlatformCard title="Frontend" items={cv.platforms.frontend} />
              <PlatformCard title={lang === 'es' ? 'Bases de datos' : 'Databases'} items={cv.platforms.databases} />
              <PlatformCard title="Delivery / DevOps" items={cv.platforms.delivery} />
              <PlatformCard title="Cloud" items={cv.platforms.cloud} />
              <PlatformCard title={lang === 'es' ? 'Plataformas de ejecución' : 'Runtime platforms'} items={cv.platforms.runtimes} />
            </div>
          </section>

          <section>
            <SectionTitle>{cv.sections.projects}</SectionTitle>
            <div className="project-chip-grid">
              {cv.supportedProjects.map((project) => (
                <div className="project-chip" key={project}>{project}</div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>{cv.sections.experience}</SectionTitle>
            <div className="timeline">
              {cv.experience.map((item) => (
                <TimelineItem key={`${item.role}-${item.company}`} item={item} />
              ))}
            </div>
          </section>

          <section className="split-section">
            <div>
              <SectionTitle>{cv.sections.education}</SectionTitle>
              <div className="stacked-cards">
                {cv.education.map((item) => (
                  <article className="mini-card" key={`${item.degree}-${item.school}`}>
                    <h3>{item.degree}</h3>
                    <p>{item.school}</p>
                    <span>{item.period}</span>
                    <small>{item.area}</small>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle>{cv.sections.competencies}</SectionTitle>
              <div className="competency-list">
                {cv.competencies.map((item) => (
                  <div className="competency" key={item.name}>
                    <div className="competency-label">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${item.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionTitle>{cv.sections.stack}</SectionTitle>
            <TagList items={cv.skills} />
          </section>

          <section>
            <SectionTitle>{cv.sections.certifications}</SectionTitle>
            <div className="stacked-cards certifications-grid">
              {cv.certifications.map((item) => (
                <article className="mini-card certificate-card" key={item}>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
