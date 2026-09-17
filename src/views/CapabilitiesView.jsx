import React from 'react';
import { CompetenciesSection } from '../components/sections/CompetenciesSection';
import { PlatformsSection } from '../components/sections/PlatformsSection';
import { SkillsSection } from '../components/sections/SkillsSection';

export function CapabilitiesView({ cv, lang }) {
  return (
    <div className="view-panel">
      <CompetenciesSection competencies={cv.competencies} title={cv.sections.competencies} lang={lang} />
      <details className="secondary-details">
        <summary>{lang === 'es' ? 'Ver ecosistema técnico y stack completo' : 'View technical ecosystem and full stack'}</summary>
        <PlatformsSection platforms={cv.platforms} title={cv.sections.platforms} lang={lang} />
        <SkillsSection skills={cv.skills} platforms={cv.platforms} title={cv.sections.stack} />
      </details>
    </div>
  );
}
