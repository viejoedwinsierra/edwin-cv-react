import React from 'react';
import { SidebarCard } from '../ui/SidebarCard';

export function Sidebar({ cv, lang }) {
  return (
    <aside className="sidebar">
      <div className="identity-block">
        <img className="avatar-photo" src="/profile.jpg" alt={cv.profile.name} />
        <h1>{cv.profile.name}</h1>
        <p className="headline">{cv.profile.title}</p>
        <p className="location">{cv.profile.location}</p>
      </div>

      <SidebarCard title={lang === 'es' ? 'Contacto' : 'Contact'}>
        <ul className="info-list">
          {cv.contact.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              {item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.value}</a> : <strong>{item.value}</strong>}
            </li>
          ))}
        </ul>
      </SidebarCard>

      <SidebarCard title={lang === 'es' ? 'Perfil' : 'Profile'}>
        <p className="sidebar-text">{cv.sidebarProfile}</p>
      </SidebarCard>

      <SidebarCard title={lang === 'es' ? 'Idiomas' : 'Languages'}>
        <ul className="bullet-list compact-list">{cv.languages.map((item) => <li key={item}>{item}</li>)}</ul>
      </SidebarCard>

      <SidebarCard title={lang === 'es' ? 'Intereses profesionales' : 'Professional interests'}>
        <ul className="bullet-list compact-list">{cv.interests.map((item) => <li key={item}>{item}</li>)}</ul>
      </SidebarCard>
    </aside>
  );
}
