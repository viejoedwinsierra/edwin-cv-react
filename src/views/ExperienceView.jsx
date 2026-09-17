import React from 'react';
import { ExperienceSection } from '../components/sections/ExperienceSection';

export function ExperienceView({ cv, lang, openJobs, onToggleJob }) {
  return <div className="view-panel"><ExperienceSection experience={cv.experience} title={cv.sections.experience} lang={lang} openJobs={openJobs} onToggleJob={onToggleJob} /></div>;
}
