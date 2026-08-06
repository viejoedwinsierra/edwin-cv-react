import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function CareerGrowthSection({ growth }) {
  if (!growth?.goals?.length) return null;

  return (
    <section className="growth-section" id="growth">
      <SectionTitle>{growth.title}</SectionTitle>
      <div className="growth-panel">
        <p>{growth.text}</p>
        <ul>
          {growth.goals.map((goal) => <li key={goal}>{goal}</li>)}
        </ul>
      </div>
    </section>
  );
}
