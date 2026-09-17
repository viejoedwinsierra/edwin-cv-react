import React from 'react';

export function TopBar({ lang, meta, linkedin, github, activeView, onNavigate, variant, onVariantChange, onToggleLanguage, onPrint }) {
  const nav = [
    ['profile', lang === 'es' ? 'Perfil' : 'Profile'],
    ['experience', lang === 'es' ? 'Trayectoria' : 'Experience'],
    ['projects', lang === 'es' ? 'Proyectos' : 'Projects'],
    ['skills', lang === 'es' ? 'Capacidades' : 'Capabilities'],
    ['education', lang === 'es' ? 'Educación' : 'Education'],
    ['certifications', lang === 'es' ? 'Certificaciones' : 'Certifications']
  ];

  const variants = [
    ['itServices', lang === 'es' ? 'Servicios TI' : 'IT Services'],
    ['software', 'Software'],
    ['cloud', 'Cloud / DevOps'],
    ['data', 'Data / DB'],
    ['support', lang === 'es' ? 'Soporte L3' : 'L3 Support']
  ];

  return (
    <header className="topbar no-print">
      <nav className="quick-nav" aria-label="Portfolio navigation">
        {nav.map(([id, label]) => (
          <button type="button" key={id} className={activeView === id ? 'active' : ''} onClick={() => onNavigate(id)}>{label}</button>
        ))}
      </nav>
      <div className="toolbar">
        <label className="variant-control">
          <span>{lang === 'es' ? 'PDF orientado a' : 'PDF targeted to'}</span>
          <select value={variant} onChange={(event) => onVariantChange(event.target.value)}>
            {variants.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
        <button className="toolbar-link" onClick={onToggleLanguage}>{meta.switchLabel}</button>
        <a href={linkedin} target="_blank" rel="noreferrer" className="toolbar-link">LinkedIn</a>
        <a href={github} target="_blank" rel="noreferrer" className="toolbar-link">GitHub</a>
        <button onClick={onPrint} className="print-button">{meta.printLabel}</button>
      </div>
    </header>
  );
}
