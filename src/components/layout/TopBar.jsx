import React from 'react';

export function TopBar({ lang, meta, linkedin, github, onToggleLanguage, onPrint }) {
  const nav = [
    ['profile', lang === 'es' ? 'Perfil' : 'Profile'],
    ['vision', lang === 'es' ? 'Visión' : 'Vision'],
    ['skills', lang === 'es' ? 'Capacidades' : 'Capabilities'],
    ['projects', lang === 'es' ? 'Proyectos' : 'Projects'],
    ['experience', lang === 'es' ? 'Trayectoria' : 'Experience'],
    ['education', lang === 'es' ? 'Educación' : 'Education'],
    ['growth', lang === 'es' ? 'Crecimiento' : 'Growth']
  ];

  return (
    <header className="topbar no-print">
      <nav className="quick-nav" aria-label="Portfolio navigation">
        {nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <div className="toolbar">
        <button className="toolbar-link" onClick={onToggleLanguage}>{meta.switchLabel}</button>
        <a href={linkedin} target="_blank" rel="noreferrer" className="toolbar-link">LinkedIn</a>
        <a href={github} target="_blank" rel="noreferrer" className="toolbar-link">GitHub</a>
        <button onClick={onPrint} className="print-button">{meta.printLabel}</button>
      </div>
    </header>
  );
}
