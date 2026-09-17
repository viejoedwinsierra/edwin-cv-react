import React from 'react';
import { EducationOnlySection } from '../components/sections/EducationOnlySection';

export function EducationView({ cv }) {
  return <div className="view-panel"><EducationOnlySection education={cv.education} title={cv.sections.education} /></div>;
}
