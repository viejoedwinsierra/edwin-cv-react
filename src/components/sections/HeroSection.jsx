import React from 'react';
export function HeroSection({ profile, meta }) {
  return (
    <section className="hero-card" id="profile">
      <p className="eyebrow">{meta.eyebrow}</p>
      <h2>{profile.title}</h2>
      <p>{profile.summary}</p>
      <div className="hero-highlight-grid">
        {profile.highlights.map((item) => <div className="hero-highlight" key={item}>{item}</div>)}
      </div>
    </section>
  );
}
