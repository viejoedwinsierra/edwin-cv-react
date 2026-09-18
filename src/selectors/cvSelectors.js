import { roleFamilies } from '../data/core/roleFamilies';
import { getSelectedCertifications } from './certificationSelectors';

export function getRoleFamily(lang = 'es', variant = 'itServices') {
  const family = roleFamilies[variant] ?? roleFamilies.itServices;

  return {
    ...family,
    displayLabel: family.label?.[lang] ?? family.label?.es
  };
}

export function getPrintExperience(experience = []) {
  return experience.map((item) => ({
    ...item,
    points: item.points ?? [],
    stack: item.stack ?? []
  }));
}

function collectExistingCapabilities(cv = {}) {
  const values = new Set(cv.skills ?? []);

  (cv.experience ?? []).forEach((item) => {
    (item.stack ?? []).forEach((skill) => values.add(skill));
  });

  (cv.projectDetails ?? []).forEach((project) => {
    (project.stack ?? []).forEach((skill) => values.add(skill));
  });

  return values;
}

function getPrintCapabilityDomains(cv = {}, lang = 'es') {
  const available = collectExistingCapabilities(cv);

  const definitions = [
    {
      id: 'software',
      label: lang === 'es' ? 'Ingeniería de software' : 'Software Engineering',
      skills: [
        'Java', 'Spring Boot', 'Python', 'C#', '.NET', 'Node.js', 'Express',
        'Flask', 'Django', 'REST APIs', 'SOAP', 'Web Services', 'Microservices',
        'React', 'Angular', 'Vue.js', 'JUnit', 'Mockito'
      ]
    },
    {
      id: 'data',
      label: lang === 'es' ? 'Bases de datos y datos' : 'Databases & Data',
      skills: [
        'PostgreSQL', 'Oracle', 'SQL Server', 'MySQL', 'SQL', 'Data Modeling',
        'Data Analysis', 'Data Processing', 'Business Intelligence (BI)',
        'Power BI', 'Microsoft Access', 'IBM DataStage', 'pandas', 'KPIs',
        'Dashboards', 'Automated Reporting'
      ]
    },
    {
      id: 'cloud',
      label: lang === 'es' ? 'Cloud e infraestructura' : 'Cloud & Infrastructure',
      skills: [
        'Azure', 'AWS', 'Oracle Cloud', 'Azure Functions', 'Azure Blob Storage',
        'Azure Virtual Network', 'VPN', 'Docker', 'Kubernetes',
        'Kubernetes-oriented operations', 'OpenShift', 'Infrastructure Monitoring'
      ]
    },
    {
      id: 'devops',
      label: lang === 'es' ? 'DevOps y operaciones' : 'DevOps & Operations',
      skills: [
        'Azure DevOps', 'Git', 'GitHub', 'CI/CD', 'GitOps', 'Argo CD',
        'SonarQube', 'Static Code Analysis', 'Code Quality', 'ITSM',
        'Incident Management', 'Change Management', 'Release Management',
        'Root Cause Analysis (RCA)', 'Production Support', 'L2/L3 Support',
        'L3 Support', 'Troubleshooting', '24x7 Support', '24x7 On-Call'
      ]
    },
    {
      id: 'enterprise',
      label: lang === 'es' ? 'Aplicaciones empresariales' : 'Enterprise Applications',
      skills: [
        'CRM / CBS', 'CRM', 'CBS', 'Billing Systems', 'Billing',
        'Rating & Charging', 'SAP', 'SuccessFactors', 'Enterprise Integration',
        'Enterprise APIs', 'APIs', 'ESB', 'Service Integration',
        'Application Management', 'Application Support', 'Vendor Management'
      ]
    },
    {
      id: 'telecom',
      label: lang === 'es' ? 'Telecomunicaciones' : 'Telecommunications',
      skills: [
        'Telecommunications', 'OSS/BSS', 'RF', 'RF Engineering', '2G', '2G/GSM',
        '3G', '3G/UMTS', '4G/LTE', 'Network KPIs', 'Network Performance',
        'Network Optimization', 'Drive Testing', 'Post-Processing',
        'Telecom Integration', 'IMEI Management', 'GSMA'
      ]
    }
  ];

  const alreadyUsed = new Set();

  return definitions
    .map((domain) => {
      const skills = domain.skills.filter((skill) => {
        if (!available.has(skill) || alreadyUsed.has(skill)) return false;
        alreadyUsed.add(skill);
        return true;
      });

      return { ...domain, skills };
    })
    .filter((domain) => domain.skills.length > 0);
}

export function getPrintCv(cv, lang = 'es', variant = 'itServices') {
  const roleFamily = getRoleFamily(lang, variant);

  return {
    ...cv,
    roleFamily,
    experience: getPrintExperience(cv.experience),
    projectDetails: cv.projectDetails ?? [],
    capabilityDomains: getPrintCapabilityDomains(cv, lang),
    certifications: getSelectedCertifications(lang, variant, 6)
  };
}
