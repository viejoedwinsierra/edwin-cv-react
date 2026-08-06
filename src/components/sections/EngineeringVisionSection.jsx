import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function EngineeringVisionSection({ vision }) {
  if (!vision?.pillars?.length) return null;

  return (
    <section className="vision-section" id="vision">
      <SectionTitle>{vision.title}</SectionTitle>
      <p className="section-intro vision-intro">{vision.intro}</p>
      <div className="vision-grid">
        {vision.pillars.map((pillar) => (
          <article className="vision-card" key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
