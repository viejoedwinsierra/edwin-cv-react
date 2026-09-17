import React from 'react';
import { ProjectsSection } from '../components/sections/ProjectsSection';

export function ProjectsView({ cv, lang }) {
  return <div className="view-panel"><ProjectsSection projects={cv.supportedProjects} title={cv.sections.projects} lang={lang} /></div>;
}
