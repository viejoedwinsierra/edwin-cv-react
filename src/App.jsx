import React, { useState } from 'react';
import { useCvContent } from './hooks/useCvContent';
import { TopBar } from './components/layout/TopBar';
import { Sidebar } from './components/layout/Sidebar';
import { HeroSection } from './components/sections/HeroSection';
import { CompetenciesSection } from './components/sections/CompetenciesSection';
import { PlatformsSection } from './components/sections/PlatformsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { EngineeringVisionSection } from './components/sections/EngineeringVisionSection';
import { CareerGrowthSection } from './components/sections/CareerGrowthSection';

function App() {
  const [lang, setLang] = useState('es');
  const [openJobs, setOpenJobs] = useState([0]);
  const cv = useCvContent(lang);

  const toggleJob = (index) => {
    setOpenJobs((current) => current.includes(index)
      ? current.filter((item) => item !== index)
      : [...current, index]);
  };

  return (
    <div className="page-shell">
      <TopBar
        lang={lang}
        meta={cv.meta}
        linkedin={cv.profile.linkedin}
        github={cv.profile.github}
        onToggleLanguage={() => setLang((current) => current === 'es' ? 'en' : 'es')}
        onPrint={() => window.print()}
      />

      <main className="resume">
        <Sidebar cv={cv} lang={lang} />
        <section className="content">
          <HeroSection profile={cv.profile} meta={cv.meta} />
          <EngineeringVisionSection vision={cv.vision} />
          <CompetenciesSection competencies={cv.competencies} title={cv.sections.competencies} lang={lang} />
          <PlatformsSection platforms={cv.platforms} title={cv.sections.platforms} lang={lang} />
          <ProjectsSection projects={cv.supportedProjects} title={cv.sections.projects} lang={lang} />
          <ExperienceSection experience={cv.experience} title={cv.sections.experience} lang={lang} openJobs={openJobs} onToggleJob={toggleJob} />
          <EducationSection education={cv.education} certifications={cv.certifications} sections={cv.sections} />
          <SkillsSection skills={cv.skills} platforms={cv.platforms} title={cv.sections.stack} />
          <CareerGrowthSection growth={cv.growth} />

          <footer className="resume-footer">
            <strong>{cv.profile.name}</strong>
            <span>{lang === 'es' ? 'CV interactivo listo para reclutamiento y exportación a PDF.' : 'Interactive CV ready for recruiting and PDF export.'}</span>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
