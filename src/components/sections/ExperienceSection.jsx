import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { TimelineItem } from '../ui/TimelineItem';

export function ExperienceSection({ experience, title, lang, openJobs, onToggleJob }) {
  return (
    <section>
      <SectionTitle id="experience">{title}</SectionTitle>
      <div className="timeline">
        {experience.map((item, index) => (
          <TimelineItem
            key={`${item.role}-${item.company}`}
            item={item}
            lang={lang}
            expanded={openJobs.includes(index)}
            onToggle={() => onToggleJob(index)}
          />
        ))}
      </div>
    </section>
  );
}
