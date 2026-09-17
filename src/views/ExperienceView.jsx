import React from 'react';
import { ExperienceSection } from '../components/sections/ExperienceSection';

export function ExperienceView({ cv, lang, openJobs, onToggleJob }) {
  const evolutionTitle =
    lang === 'es' ? 'Evolución profesional' : 'Professional Evolution';

  const evolutionSteps = cv.professionalEvolution
    .split('→')
    .map((step) => step.trim())
    .filter(Boolean);

  return (
    <div className="view-panel experience-view">
      <section
        className="career-evolution-intro"
        aria-labelledby="career-evolution-title"
      >
        <p className="eyebrow" id="career-evolution-title">
          {evolutionTitle}
        </p>

        <div className="career-evolution-flow">
          {evolutionSteps.map((step, index) => (
            <React.Fragment key={`${step}-${index}`}>
              <span className="career-evolution-step">{step}</span>

              {index < evolutionSteps.length - 1 && (
                <span
                  className="career-evolution-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <ExperienceSection
        experience={cv.experience}
        title={cv.sections.experience}
        lang={lang}
        openJobs={openJobs}
        onToggleJob={onToggleJob}
      />
    </div>
  );
}