import { useMemo } from 'react';
import { content } from '../data/index.js';
import { normalizeCvContent } from '../utils/cvNormalizer';
import { getLocalizedCertifications } from '../selectors/certificationSelectors';
import { contactCore, getContact } from '../data/core/contact';

export function useCvContent(language) {
  return useMemo(() => {
    const selected = content[language] ?? content.es ?? {};
    const normalized = normalizeCvContent(selected);

    return {
      ...normalized,
      profile: {
        ...normalized.profile,
        name: contactCore.name,
        location: contactCore.location,
        phone: contactCore.phone,
        linkedin: contactCore.linkedin,
        github: contactCore.github
      },
      contact: getContact(language),
      certifications: getLocalizedCertifications(language)
    };
  }, [language]);
}
