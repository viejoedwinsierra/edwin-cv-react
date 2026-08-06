import { useMemo } from 'react';
import { content } from '../data/index.js';
import { normalizeCvContent } from '../utils/cvNormalizer';

export function useCvContent(language) {
  return useMemo(() => {
    const selected = content[language] ?? content.es ?? {};
    return normalizeCvContent(selected);
  }, [language]);
}
