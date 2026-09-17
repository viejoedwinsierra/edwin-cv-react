import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';

export function ProfileView({ cv, lang, onNavigate }) {
  const cards = [
    {
      id: 'experience',
      title: lang === 'es' ? 'Trayectoria profesional' : 'Professional experience',
      description: lang === 'es' ? 'Experiencia desde telecomunicaciones y KPIs hasta aplicaciones, software, cloud y datos.' : 'Experience from telecommunications and KPIs to applications, software, cloud, and data.'
    },
    {
      id: 'projects',
      title: lang === 'es' ? 'Proyectos' : 'Projects',
      description: lang === 'es' ? 'Proyectos y dominios empresariales vinculados con la experiencia profesional.' : 'Projects and business domains connected to professional experience.'
    },
    {
      id: 'skills',
      title: lang === 'es' ? 'Capacidades técnicas' : 'Technical capabilities',
      description: lang === 'es' ? 'Capacidades respaldadas por experiencia, proyectos y formación.' : 'Capabilities backed by experience, projects, and training.'
    },
    {
      id: 'education',
      title: lang === 'es' ? 'Educación' : 'Education',
      description: lang === 'es' ? 'Formación académica y evolución hacia Ciencia de Datos.' : 'Academic background and progression toward Data Science.'
    },
    {
      id: 'certifications',
      title: lang === 'es' ? 'Certificaciones' : 'Certifications',
      description: lang === 'es' ? 'Formación complementaria en software, cloud, datos, redes y seguridad.' : 'Complementary training in software, cloud, data, networks, and security.'
    }
  ];

  return (
    <div className="view-panel">
      <HeroSection profile={cv.profile} meta={cv.meta} />
      <section className="profile-overview">
        <div>
          <h3>{lang === 'es' ? 'Evolución profesional' : 'Professional evolution'}</h3>
          <p>{lang === 'es'
            ? 'Telecomunicaciones & RF → Redes & KPIs → Aplicaciones empresariales → Software & Bases de Datos → Integración → Cloud & DevOps → Data Engineering & Data Science.'
            : 'Telecommunications & RF → Networks & KPIs → Enterprise Applications → Software & Databases → Integration → Cloud & DevOps → Data Engineering & Data Science.'}</p>
        </div>
        <div className="profile-contact-highlight">
          <strong>{lang === 'es' ? 'Contacto directo' : 'Direct contact'}</strong>
          <a href={`tel:${cv.profile.phone.replace(/\s+/g, '')}`}>{cv.profile.phone}</a>
        </div>
      </section>
      <section className="view-card-grid">
        {cards.map((card) => (
          <button type="button" className="view-card-button" key={card.id} onClick={() => onNavigate(card.id)}>
            <strong>{card.title}</strong>
            <span>{card.description}</span>
          </button>
        ))}
      </section>
    </div>
  );
}
