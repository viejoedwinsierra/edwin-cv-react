# CV React v3 — Master Data + Web/PDF Separation

## Objective
Keep one professional source of truth while deriving different presentation views from it.

## Main changes
- `views/WebCvView.jsx`: complete interactive portfolio.
- `views/PrintCvView.jsx`: compact ATS-oriented print/PDF view.
- `data/core/certifications.js`: structured certification catalog instead of plain strings.
- `data/core/roleFamilies.js`: commercial role families used to select relevant evidence.
- `selectors/cvSelectors.js`: prepares compact PDF data without changing factual experience.
- `selectors/certificationSelectors.js`: localizes and selects certifications by role family.
- Competencies no longer display subjective HIGH/MEDIUM/LOW percentages.
- The main positioning is now `IT Services Specialist / Especialista de Servicios TI`.
- The PDF target can be switched between IT Services, Software, Cloud/DevOps, Data/DB and L3 Support.

## Evidence model
Training/certification does not automatically imply professional hands-on experience. Certifications are tagged as training or corporate training and professional experience remains in the experience dataset.

## Next refactor
The remaining ES/EN experience facts are still duplicated. The next incremental migration should split immutable facts (company, dates, technology IDs, relationships) into `data/core/experience.js` and keep only narrative translations in language files.
