import { certificationCatalog } from '../data/core/certifications';
import { roleFamilies } from '../data/core/roleFamilies';

export function getLocalizedCertifications(lang = 'es') {
  return certificationCatalog.map((item) => ({
    ...item,
    displayName: item.name?.[lang] ?? item.name?.es ?? item.id
  }));
}

export function getSelectedCertifications(lang = 'es', variant = 'itServices', limit = 6) {
  const domains = new Set(roleFamilies[variant]?.certificationDomains ?? []);
  const ranked = getLocalizedCertifications(lang)
    .map((item) => ({ ...item, score: item.domains.reduce((total, domain) => total + (domains.has(domain) ? 1 : 0), 0) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.displayName.localeCompare(b.displayName));

  return ranked.slice(0, limit);
}
