import React from 'react';
import { SectionTitle } from './SectionTitle';

export function SidebarCard({ title, children }) {
  return (
    <section className="sidebar-card">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
}
