import React from 'react';
import { CertificationsSection } from '../components/sections/CertificationsSection';

export function CertificationsView({ cv, lang }) {
  return <div className="view-panel"><CertificationsSection certifications={cv.certifications} title={cv.sections.certifications} lang={lang} /></div>;
}
