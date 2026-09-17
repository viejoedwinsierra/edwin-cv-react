import React from 'react';
import { SidebarCard } from '../ui/SidebarCard';
import { targetRoles } from '../../data/core/roleFamilies';

const sidebarContactKinds = new Set(['phone', 'linkedin', 'github']);

export function Sidebar({ cv, lang }) {
  const contactItems = cv.contact.filter((item) => sidebarContactKinds.has(item.kind));

  return (
    <aside className="sidebar">
      <div className="identity-block">
        <img className="avatar-photo" src="/profile.jpg" alt={cv.profile.name} />
        <h1>{cv.profile.name}</h1>
        <p className="headline">{cv.profile.title}</p>
        <p className="location">{cv.profile.location}</p>
      </div>

      <SidebarCard title={lang === 'es' ? 'Perfil' : 'Profile'}>
        <p className="sidebar-text sidebar-profile-summary">{cv.profile.sidebarSummary}</p>
      </SidebarCard>

      <SidebarCard title={lang === 'es' ? 'Cargos objetivo' : 'Target roles'}>
        <ul className="target-role-list">
          {targetRoles[lang].map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </SidebarCard>

      <SidebarCard title={lang === 'es' ? 'Contacto' : 'Contact'}>
        <ul className="info-list">
          {contactItems.map((item) => (
            <li key={item.kind}>
              <span>{item.label}</span>
              {item.href
                ? <a href={item.href} target={item.kind === 'phone' ? undefined : '_blank'} rel={item.kind === 'phone' ? undefined : 'noreferrer'}>{item.value}</a>
                : <strong>{item.value}</strong>}
            </li>
          ))}
        </ul>
      </SidebarCard>

      <SidebarCard title={lang === 'es' ? 'Idiomas' : 'Languages'}>
        <ul className="bullet-list compact-list">
          {cv.languages.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </SidebarCard>
    </aside>
  );
}
