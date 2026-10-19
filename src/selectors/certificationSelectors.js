import { certificationCatalog } from '../data/core/certifications';
import { roleFamilies } from '../data/core/roleFamilies';

export function getLocalizedCertifications(lang = 'es') {
  return certificationCatalog.map((item) => ({
    ...item,
    displayName: item.name?.[lang] ?? item.name?.es ?? item.id
  }));
}

// The printable CV intentionally uses a fixed four-item selection in every role family.
// The website continues to display the complete catalog.
export const PRINT_CERTIFICATION_IDS = [
  'tmforum-oda-introduction',
  'agility',
  'cybersecurity-personal-data',
  'contract-management'
];

export function getSelectedCertifications(lang = 'es', variant = 'itServices', limit = 4) {
  const localized = getLocalizedCertifications(lang);
  const byId = new Map(localized.map((item) => [item.id, item]));
  return PRINT_CERTIFICATION_IDS.slice(0, limit)
    .map((id) => byId.get(id))
    .filter(Boolean);
}
