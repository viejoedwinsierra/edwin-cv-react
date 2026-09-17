import { roleFamilies } from '../data/core/roleFamilies';
import { getSelectedCertifications } from './certificationSelectors';

export function getRoleFamily(lang = 'es', variant = 'itServices') {
  const family = roleFamilies[variant] ?? roleFamilies.itServices;
  return { ...family, displayLabel: family.label?.[lang] ?? family.label?.es };
}

export function getPrintExperience(experience = []) {
  return experience.map((item, index) => {
    const pointLimit = index === 0 ? 5 : index === 1 ? 4 : index <= 5 ? 2 : 1;
    const stackLimit = index <= 1 ? 10 : 7;
    return {
      ...item,
      points: (item.points ?? []).slice(0, pointLimit),
      stack: (item.stack ?? []).slice(0, stackLimit)
    };
  });
}

export function getPrintCv(cv, lang = 'es', variant = 'itServices') {
  const roleFamily = getRoleFamily(lang, variant);
  const availableSkills = cv.skills ?? [];
  const prioritySkills = roleFamily.keywords.filter((keyword) => availableSkills.includes(keyword));
  const complementarySkills = availableSkills.filter((skill) => !prioritySkills.includes(skill));

  return {
    ...cv,
    roleFamily,
    experience: getPrintExperience(cv.experience),
    certifications: getSelectedCertifications(lang, variant, 6),
    skills: [...prioritySkills, ...complementarySkills].slice(0, 24)
  };
}
