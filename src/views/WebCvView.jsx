import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { ProfileView } from './ProfileView';
import { ExperienceView } from './ExperienceView';
import { ProjectsView } from './ProjectsView';
import { CapabilitiesView } from './CapabilitiesView';
import { EducationView } from './EducationView';
import { CertificationsView } from './CertificationsView';

export function WebCvView({ cv, lang, activeView, onNavigate, openJobs, onToggleJob }) {
  const views = {
    profile: <ProfileView cv={cv} lang={lang} onNavigate={onNavigate} />,
    experience: <ExperienceView cv={cv} lang={lang} openJobs={openJobs} onToggleJob={onToggleJob} />,
    projects: <ProjectsView cv={cv} lang={lang} />,
    skills: <CapabilitiesView cv={cv} lang={lang} />,
    education: <EducationView cv={cv} />,
    certifications: <CertificationsView cv={cv} lang={lang} />
  };

  return (
    <main className="resume web-cv screen-only">
      <Sidebar cv={cv} lang={lang} />
      <section className="content">
        {views[activeView] ?? views.profile}
        <footer className="resume-footer">
          <strong>{cv.profile.name}</strong>
          <span>{lang === 'es' ? 'CV web modular · PDF resumido independiente.' : 'Modular web CV · independent compact PDF.'}</span>
        </footer>
      </section>
    </main>
  );
}
