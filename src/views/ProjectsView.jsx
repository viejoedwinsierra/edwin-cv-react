import React from 'react';
import { ProjectsSection } from '../components/sections/ProjectsSection';

export function ProjectsView({ cv, lang }) {
  const projects = cv.projectDetails?.length
    ? cv.projectDetails
    : cv.supportedProjects ?? [];

  return (
    <div className="view-panel">
      <ProjectsSection
        projects={projects}
        title={cv.sections.projects}
        lang={lang}
      />
    </div>
  );
}
