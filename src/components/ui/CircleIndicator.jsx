import React from 'react';

export function CircleIndicator({ name, value, level, label, evidence }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const numericValue = Number(value ?? 0);
  const safeValue = Math.max(0, Math.min(numericValue, 99));
  const levelName = String(label ?? level ?? 'medium').toLowerCase();
  const offset = circumference - (safeValue / 100) * circumference;

  return (
    <article className={`circle-skill level-${levelName}`} aria-label={`${name}: ${safeValue}%`}>
      <div className="circle-wrap">
        <svg viewBox="0 0 100 100" role="img" aria-hidden="true">
          <circle className="circle-bg" cx="50" cy="50" r={radius} />
          <circle
            className="circle-value"
            cx="50"
            cy="50"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <strong>{safeValue}%</strong>
      </div>
      <h3>{name}</h3>
      <span className="competency-level">{levelName}</span>
      {evidence && <p className="competency-evidence">{evidence}</p>}
    </article>
  );
}
