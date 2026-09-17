import React, { useMemo, useState } from 'react';
import { useCvContent } from './hooks/useCvContent';
import { TopBar } from './components/layout/TopBar';
import { WebCvView } from './views/WebCvView';
import { PrintCvView } from './views/PrintCvView';
import { getPrintCv } from './selectors/cvSelectors';

const validViews = new Set(['profile', 'experience', 'projects', 'skills', 'education', 'certifications']);

function getInitialView() {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  return validViews.has(hash) ? hash : 'profile';
}

function App() {
  const [lang, setLang] = useState('es');
  const [variant, setVariant] = useState('itServices');
  const [activeView, setActiveView] = useState(getInitialView);
  const [openJobs, setOpenJobs] = useState([0]);
  const cv = useCvContent(lang);
  const printCv = useMemo(() => getPrintCv(cv, lang, variant), [cv, lang, variant]);

  const toggleJob = (index) => {
    setOpenJobs((current) => current.includes(index)
      ? current.filter((item) => item !== index)
      : [...current, index]);
  };

  const navigate = (view) => {
    if (!validViews.has(view)) return;
    setActiveView(view);
    window.history.replaceState(null, '', `#/${view}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-shell">
      <TopBar
        lang={lang}
        meta={cv.meta}
        linkedin={cv.profile.linkedin}
        github={cv.profile.github}
        activeView={activeView}
        onNavigate={navigate}
        variant={variant}
        onVariantChange={setVariant}
        onToggleLanguage={() => setLang((current) => current === 'es' ? 'en' : 'es')}
        onPrint={() => window.print()}
      />

      <WebCvView cv={cv} lang={lang} activeView={activeView} onNavigate={navigate} openJobs={openJobs} onToggleJob={toggleJob} />
      <PrintCvView cv={printCv} lang={lang} />
    </div>
  );
}

export default App;
