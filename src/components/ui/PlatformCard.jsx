import React from 'react';
export function PlatformCard({ title, items = [] }) {
  return (
    <article className="platform-card">
      <h3>{title}</h3>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  );
}
