export const contactCore = {
  name: 'Edwin Gustavo Sierra Poveda',
  phone: '+57 310 293 1349',
  phoneHref: 'tel:+573102931349',
  location: 'Chía / Bogotá, Colombia',

  website: 'https://kind-tree-0b760b300.1.azurestaticapps.net/',
  websiteLabel: 'kind-tree-0b760b300.1.azurestaticapps.net',

  linkedin: 'https://www.linkedin.com/in/edwin-gustavo-sierra-poveda-45994a109/',
  linkedinLabel: 'linkedin.com/in/edwin-gustavo-sierra-poveda-45994a109',

  github: 'https://github.com/viejoedwinsierra',
  githubLabel: 'github.com/viejoedwinsierra'
};

export function getContact(language = 'es') {
  const labels = language === 'en'
    ? {
        location: 'Location',
        phone: 'Phone',
        website: 'Web CV',
        positioning: 'Professional positioning'
      }
    : {
        location: 'Ubicación',
        phone: 'Teléfono',
        website: 'CV Web',
        positioning: 'Posicionamiento profesional'
      };

  return [
    {
      kind: 'phone',
      label: labels.phone,
      value: contactCore.phone,
      href: contactCore.phoneHref
    },
    {
      kind: 'location',
      label: labels.location,
      value: contactCore.location
    },
    {
      kind: 'website',
      label: labels.website,
      value: contactCore.websiteLabel,
      href: contactCore.website
    },
    {
      kind: 'linkedin',
      label: 'LinkedIn',
      value: contactCore.linkedinLabel,
      href: contactCore.linkedin
    },
    {
      kind: 'github',
      label: 'GitHub',
      value: contactCore.githubLabel,
      href: contactCore.github
    }
  ];
}