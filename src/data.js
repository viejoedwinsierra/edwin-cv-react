export const content = {
  es: {
    meta: {
      lang: 'ES',
      switchLabel: 'English',
      linkedinLabel: 'Ver LinkedIn',
      printLabel: 'Descargar / Imprimir CV',
      eyebrow: 'CV web · versión bilingüe'
    },
    profile: {
      name: 'Edwin Gustavo Sierra Poveda',
      title: 'Cloud Architect | Technical Lead | Backend & Data Engineering',
      location: 'Chía / Bogotá, Colombia',
      linkedin: 'https://www.linkedin.com/in/edwin-gustavo-sierra-poveda-45994a109/',
      summary:
        'Arquitecto de soluciones y líder técnico con experiencia en arquitecturas distribuidas, microservicios, modernización de plataformas empresariales y operación cloud en Azure y AWS. He participado en backend, integración empresarial, automatización CI/CD, migraciones de bases de datos y soluciones data-driven en telecomunicaciones, banca y sistemas de facturación.',
      highlights: [
        'Migración de plataforma crítica de IMEI robado de Oracle a PostgreSQL',
        'Diseño, desarrollo y operación de servicios en Microsoft Azure',
        'Automatización con Python, SQL, Excel, CI/CD y procesos batch',
        'Experiencia transversal en telecom, banca, billing y analítica de datos'
      ]
    },
    contact: [
      { label: 'Ubicación', value: 'Chía / Bogotá, Colombia' },
      { label: 'LinkedIn', value: 'linkedin.com/in/edwin-gustavo-sierra-poveda-45994a109', href: 'https://www.linkedin.com/in/edwin-gustavo-sierra-poveda-45994a109/' },
      { label: 'Enfoque profesional', value: 'Cloud Architect · Technical Lead · Senior Backend Engineer · Data Engineer' }
    ],
    sidebarProfile:
      'Perfil orientado a arquitectura cloud, backend empresarial, integración de plataformas y data engineering, con visión de escalabilidad, confiabilidad operativa y alineación al valor de negocio.',
    languages: [
      'Español: nativo',
      'Inglés: nivel profesional para documentación técnica, entrevistas y colaboración internacional'
    ],
    interests: [
      'Arquitectura de software',
      'Cloud modernization',
      'Data engineering',
      'Automatización y CI/CD',
      'Plataformas distribuidas'
    ],
    sections: {
      experience: 'Experiencia profesional',
      education: 'Formación',
      competencies: 'Competencias',
      stack: 'Stack y conocimientos',
      certifications: 'Certificaciones y formación complementaria',
      platforms: 'Plataformas, delivery y ecosistema técnico',
      projects: 'Proyectos y dominios soportados'
    },
    skills: [
      'Java', 'Python', 'Node.js', '.NET', 'SQL', 'PostgreSQL', 'Oracle', 'SQL Server',
      'Azure', 'Azure Functions', 'Azure DevOps', 'AWS', 'React', 'Angular', 'Vue.js',
      'Microservicios', 'Arquitecturas orientadas a eventos', 'CI/CD', 'Docker',
      'Kubernetes-oriented operations', 'OpenShift', 'SAP', 'SuccessFactors', 'CRM / CBS',
      'Billing Systems', 'Flask', 'Express', 'Django', 'JUnit', 'Mockito', 'pandas',
      'Excel Macros', 'Batch Processing', 'Data Modeling'
    ],
    competencies: [
      { name: 'Liderazgo técnico', level: 93 },
      { name: 'Arquitectura cloud', level: 91 },
      { name: 'Backend & APIs', level: 89 },
      { name: 'Integración empresarial', level: 87 },
      { name: 'Automatización / CI-CD', level: 86 },
      { name: 'Data engineering & analytics', level: 82 }
    ],
    platforms: {
      backend: ['Java / Spring Boot', 'Python · Flask / batch automation', 'Node.js / Express', '.NET services'],
      frontend: ['Angular', 'React', 'Vue.js', 'JavaScript / SPA integrations'],
      databases: ['PostgreSQL', 'Oracle', 'SQL Server'],
      delivery: ['Azure DevOps', 'CI/CD pipelines', 'Git-based workflows', 'Enterprise support and release coordination'],
      cloud: ['Azure Functions', 'Azure services', 'AWS academic labs', 'Containerized and Kubernetes-oriented platforms'],
      runtimes: ['OpenShift', 'Azure-native serverless workloads', 'Distributed business applications']
    },
    supportedProjects: ['central_app_support', 'Hurto_de_terminales', 'Inmobiliario', 'NCA', 'Pandora', 'Papiros', 'Playflow', 'RegistrarDuplicados'],
    experience: [
      {
        role: 'IT Services Specialist – Cloud & Full-Stack Development',
        company: 'Colombia Telecomunicaciones S.A.',
        period: 'Mar 2022 – Actualidad',
        location: 'Bogotá, Colombia',
        points: [
          'Lideré la evolución y soporte de plataformas empresariales internas con foco en confiabilidad, escalabilidad y continuidad operativa.',
          'Ejecuté la migración de una plataforma crítica de IMEI robado desde Oracle hacia PostgreSQL.',
          'Participé en el desarrollo y operación de servicios cloud en Microsoft Azure, incluyendo servicios serverless y automatización de despliegues.',
          'Acompañé integraciones empresariales con SAP, SuccessFactors y otros dominios corporativos.',
          'Actué como referente técnico para resolución de incidentes complejos, soporte a equipos y mejora continua de la plataforma.'
        ],
        stack: ['Java', 'Python', 'PostgreSQL', 'Azure', 'Azure Functions', 'Azure DevOps', 'CI/CD', 'Flask']
      },
      {
        role: 'Configuration Specialist',
        company: 'Colombia Telecomunicaciones S.A.',
        period: 'Oct 2018 – Mar 2022',
        location: 'Colombia',
        points: [
          'Configuré ofertas comerciales, tarifas, impuestos, ciclos de facturación y cargos en plataformas de pricing y billing.',
          'Validé nuevos productos antes de su despliegue y configuré interfaces entre CRM, CBS y sistemas contables.',
          'Realicé regularizaciones masivas de cuentas y ajustes a nivel de base de datos.',
          'Desarrollé automatizaciones con macros de Excel y Python para reducir trabajo manual y mejorar eficiencia operativa.'
        ],
        stack: ['SQL', 'Python', 'Excel Macros', 'Billing Systems', 'CRM', 'CBS']
      },
      {
        role: 'Support Analyst Engineer',
        company: 'SOLEM',
        period: 'Abr 2018 – Oct 2018',
        location: 'Bogotá, Colombia',
        points: [
          'Monitoreé y soporté la aplicación bancaria SME usada por Grupo Aval a través de ATH.',
          'Di soporte a integraciones entre Banco de Bogotá, Banco Popular, AV Villas, Banco de Occidente y servicios ATH.',
          'Diagnostiqué incidentes de transacciones financieras y coordiné resolución con desarrollo usando JIRA.'
        ],
        stack: ['Soporte aplicativo', 'JIRA', 'Integración de servicios', 'Banca']
      },
      {
        role: 'Level III Support Engineer – Telecommunications Platforms',
        company: 'Teka Services S.A.S.',
        period: 'Sep 2017 – Abr 2018',
        location: 'Bogotá, Colombia',
        points: [
          'Participé en la implementación de la nueva plataforma comercial de Movistar Colombia, provista por Huawei.',
          'Aseguré la continuidad operativa durante despliegues, integraciones y transición entre plataformas telecom.',
          'Gestioné incidentes complejos y coordiné con infraestructura, aplicaciones, integración y proveedor.'
        ],
        stack: ['OSS/BSS', 'Telecom', 'Integración', 'Soporte nivel III']
      },
      {
        role: 'Software Engineer',
        company: 'Andicall Contact Center y BPO',
        period: 'Ago 2017 – Sep 2017',
        location: 'Bogotá, Colombia',
        points: [
          'Apoyé mantenimiento y evolución de aplicaciones internas de negocio.',
          'Brindé soporte a nuevas funcionalidades, pruebas, despliegues y administración de bases de datos.'
        ],
        stack: ['Software Development', 'SQL', 'Application Support']
      },
      {
        role: 'KPI Analyst / Data Analyst',
        company: 'PATH S.A.',
        period: 'Jun 2016 – Jul 2017',
        location: 'Colombia',
        points: [
          'Monitoreé KPIs operativos y generé reportes y tableros para apoyar toma de decisiones.',
          'Identifiqué oportunidades de mejora mediante análisis de datos y métricas de desempeño.'
        ],
        stack: ['SQL', 'Excel', 'Reporting', 'KPIs']
      },
      {
        role: 'RF Post-Processing & Network Performance Analyst / RF Engineer – Network Optimization',
        company: 'PATH S.A.',
        period: 'Oct 2012 – Dic 2015',
        location: 'Bogotá, Colombia',
        points: [
          'Analicé desempeño de redes 2G y 3G, postproceso de drive tests y optimización de cobertura.',
          'Elaboré reportes de desempeño, identifiqué interferencias y oportunidades de optimización.'
        ],
        stack: ['RF Engineering', 'Drive Tests', 'Network KPIs', '2G/3G']
      },
      {
        role: 'RF Engineer & Network Post-Processing Analyst',
        company: 'OSC Top Solutions Group',
        period: 'Oct 2010 – Dic 2011',
        location: 'Colombia',
        points: [
          'Soporté proyectos telecom para Millicom Colombia y Movistar Ecuador en optimización y análisis RF.',
          'Analicé handovers, cobertura, calidad de señal y oportunidades de mejora del desempeño de red.'
        ],
        stack: ['Telecommunications', 'RF', 'Network Optimization']
      }
    ],
    education: [
      {
        degree: 'Maestría en Ciencia de Datos (en curso)',
        school: 'Escuela Colombiana de Ingeniería Julio Garavito',
        period: '2026 – Actualidad',
        area: 'Profundización en data science, cloud y analítica aplicada'
      },
      {
        degree: 'Magíster en Ciencia de Datos',
        school: 'Pontificia Universidad Javeriana Cali',
        period: '2022',
        area: 'Analítica, modelado y ciencia de datos'
      },
      {
        degree: 'Ingeniería Electrónica y Telecomunicaciones',
        school: 'Universidad Católica de Colombia',
        period: '2013 – 2016',
        area: 'Electrónica y telecomunicaciones'
      },
      {
        degree: 'Tecnólogo en Electrónica y Telecomunicaciones',
        school: 'Escuela de Tecnologías - Universidad Católica',
        period: '2010 – 2011',
        area: 'Fundamentos de electrónica y telecomunicaciones'
      }
    ],
    certifications: [
      'Oracle Cloud Architecture Certification',
      'AWS cloud and data engineering studies as part of current master’s track',
      'Cómo migrar de monolitos a microservicios (2023)',
      'PostgreSQL: Complete PostgreSQL Course (2022)',
      'Curso de Bases de Datos en Azure (2022)',
      'Curso de Introducción al Desarrollo Backend (2022)',
      'Curso Básico de Python (2022)',
      'Curso de Análisis de Negocios para Ciencia de Datos (2022)',
      'SOLID Principles and Clean Code',
      'Transformation Program – GRETA (Telefónica)',
      'Fundamentals of Kanban',
      'Responsible Business Principles'
    ]
  },
  en: {
    meta: {
      lang: 'EN',
      switchLabel: 'Español',
      linkedinLabel: 'Open LinkedIn',
      printLabel: 'Download / Print CV',
      eyebrow: 'Web CV · bilingual version'
    },
    profile: {
      name: 'Edwin Gustavo Sierra Poveda',
      title: 'Cloud Architect | Technical Lead | Backend & Data Engineering',
      location: 'Chía / Bogotá, Colombia',
      linkedin: 'https://www.linkedin.com/in/edwin-gustavo-sierra-poveda-45994a109/',
      summary:
        'Cloud architect and technical leader with experience in distributed architectures, microservices, enterprise platform modernization, and cloud operations across Azure and AWS. Strong background in backend engineering, enterprise integration, CI/CD automation, database migrations, and data-driven solutions for telecom, banking, and billing environments.',
      highlights: [
        'Migration of a critical stolen-IMEI platform from Oracle to PostgreSQL',
        'Design, development, and operation of services on Microsoft Azure',
        'Automation with Python, SQL, Excel, CI/CD, and batch processing',
        'Cross-domain experience in telecom, banking, billing, and data analytics'
      ]
    },
    contact: [
      { label: 'Location', value: 'Chía / Bogotá, Colombia' },
      { label: 'LinkedIn', value: 'linkedin.com/in/edwin-gustavo-sierra-poveda-45994a109', href: 'https://www.linkedin.com/in/edwin-gustavo-sierra-poveda-45994a109/' },
      { label: 'Target profile', value: 'Cloud Architect · Technical Lead · Senior Backend Engineer · Data Engineer' }
    ],
    sidebarProfile:
      'Profile focused on cloud architecture, enterprise backend systems, platform integration, and data engineering, with emphasis on scalability, operational reliability, and business value alignment.',
    languages: [
      'Spanish: native',
      'English: professional level for technical documentation, interviews, and international collaboration'
    ],
    interests: [
      'Software architecture',
      'Cloud modernization',
      'Data engineering',
      'Automation and CI/CD',
      'Distributed platforms'
    ],
    sections: {
      experience: 'Professional experience',
      education: 'Education',
      competencies: 'Core competencies',
      stack: 'Technology stack',
      certifications: 'Certifications and additional training',
      platforms: 'Platforms, delivery, and technical ecosystem',
      projects: 'Projects and supported business domains'
    },
    skills: [
      'Java', 'Python', 'Node.js', '.NET', 'SQL', 'PostgreSQL', 'Oracle', 'SQL Server',
      'Azure', 'Azure Functions', 'Azure DevOps', 'AWS', 'React', 'Angular', 'Vue.js',
      'Microservices', 'Event-driven architectures', 'CI/CD', 'Docker',
      'Kubernetes-oriented operations', 'OpenShift', 'SAP', 'SuccessFactors', 'CRM / CBS',
      'Billing Systems', 'Flask', 'Express', 'Django', 'JUnit', 'Mockito', 'pandas',
      'Excel Macros', 'Batch Processing', 'Data Modeling'
    ],
    competencies: [
      { name: 'Technical leadership', level: 93 },
      { name: 'Cloud architecture', level: 91 },
      { name: 'Backend & APIs', level: 89 },
      { name: 'Enterprise integration', level: 87 },
      { name: 'Automation / CI-CD', level: 86 },
      { name: 'Data engineering & analytics', level: 82 }
    ],
    platforms: {
      backend: ['Java / Spring Boot', 'Python · Flask / batch automation', 'Node.js / Express', '.NET services'],
      frontend: ['Angular', 'React', 'Vue.js', 'JavaScript / SPA integrations'],
      databases: ['PostgreSQL', 'Oracle', 'SQL Server'],
      delivery: ['Azure DevOps', 'CI/CD pipelines', 'Git-based workflows', 'Enterprise support and release coordination'],
      cloud: ['Azure Functions', 'Azure services', 'AWS academic labs', 'Containerized and Kubernetes-oriented platforms'],
      runtimes: ['OpenShift', 'Azure-native serverless workloads', 'Distributed business applications']
    },
    supportedProjects: ['central_app_support', 'Hurto_de_terminales', 'Inmobiliario', 'NCA', 'Pandora', 'Papiros', 'Playflow', 'RegistrarDuplicados'],
    experience: [
      {
        role: 'IT Services Specialist – Cloud & Full-Stack Development',
        company: 'Colombia Telecomunicaciones S.A.',
        period: 'Mar 2022 – Present',
        location: 'Bogotá, Colombia',
        points: [
          'Led the evolution and support of internal enterprise platforms with a focus on reliability, scalability, and operational continuity.',
          'Executed the migration of a critical stolen-IMEI platform from Oracle to PostgreSQL.',
          'Contributed to the development and operation of cloud services on Microsoft Azure, including serverless services and deployment automation.',
          'Supported enterprise integrations with SAP, SuccessFactors, and other corporate domains.',
          'Acted as a technical reference for complex incident resolution, team support, and continuous platform improvement.'
        ],
        stack: ['Java', 'Python', 'PostgreSQL', 'Azure', 'Azure Functions', 'Azure DevOps', 'CI/CD', 'Flask']
      },
      {
        role: 'Configuration Specialist',
        company: 'Colombia Telecomunicaciones S.A.',
        period: 'Oct 2018 – Mar 2022',
        location: 'Colombia',
        points: [
          'Configured commercial offers, pricing, taxes, billing cycles, and charges across pricing and billing platforms.',
          'Validated new products before deployment and configured interfaces between CRM, CBS, and accounting systems.',
          'Performed mass account regularization and database-level adjustments.',
          'Built Excel macro and Python automations to reduce manual effort and improve operational efficiency.'
        ],
        stack: ['SQL', 'Python', 'Excel Macros', 'Billing Systems', 'CRM', 'CBS']
      },
      {
        role: 'Support Analyst Engineer',
        company: 'SOLEM',
        period: 'Apr 2018 – Oct 2018',
        location: 'Bogotá, Colombia',
        points: [
          'Monitored and supported the SME banking application used by Grupo Aval through ATH.',
          'Supported integrations across Banco de Bogotá, Banco Popular, AV Villas, Banco de Occidente, and ATH services.',
          'Diagnosed financial transaction incidents and coordinated resolution with development teams using JIRA.'
        ],
        stack: ['Application support', 'JIRA', 'Service integration', 'Banking']
      },
      {
        role: 'Level III Support Engineer – Telecommunications Platforms',
        company: 'Teka Services S.A.S.',
        period: 'Sep 2017 – Apr 2018',
        location: 'Bogotá, Colombia',
        points: [
          'Participated in the implementation of Movistar Colombia’s new commercial platform delivered by Huawei.',
          'Ensured operational continuity during deployments, integrations, and transition across telecom platforms.',
          'Handled complex incidents and coordinated with infrastructure, application, integration, and vendor teams.'
        ],
        stack: ['OSS/BSS', 'Telecom', 'Integration', 'L3 support']
      },
      {
        role: 'Software Engineer',
        company: 'Andicall Contact Center y BPO',
        period: 'Aug 2017 – Sep 2017',
        location: 'Bogotá, Colombia',
        points: [
          'Supported the maintenance and evolution of internal business applications.',
          'Contributed to new features, testing, deployments, and database administration.'
        ],
        stack: ['Software Development', 'SQL', 'Application Support']
      },
      {
        role: 'KPI Analyst / Data Analyst',
        company: 'PATH S.A.',
        period: 'Jun 2016 – Jul 2017',
        location: 'Colombia',
        points: [
          'Monitored operational KPIs and created reports and dashboards to support decision-making.',
          'Identified performance improvement opportunities through data analysis and metrics tracking.'
        ],
        stack: ['SQL', 'Excel', 'Reporting', 'KPIs']
      },
      {
        role: 'RF Post-Processing & Network Performance Analyst / RF Engineer – Network Optimization',
        company: 'PATH S.A.',
        period: 'Oct 2012 – Dec 2015',
        location: 'Bogotá, Colombia',
        points: [
          'Analyzed 2G/3G network performance, drive test post-processing, and coverage optimization.',
          'Produced performance reports and identified interference and optimization opportunities.'
        ],
        stack: ['RF Engineering', 'Drive Tests', 'Network KPIs', '2G/3G']
      },
      {
        role: 'RF Engineer & Network Post-Processing Analyst',
        company: 'OSC Top Solutions Group',
        period: 'Oct 2010 – Dec 2011',
        location: 'Colombia',
        points: [
          'Supported telecom projects for Millicom Colombia and Movistar Ecuador in RF optimization and analysis.',
          'Analyzed handovers, coverage, signal quality, and network performance improvement opportunities.'
        ],
        stack: ['Telecommunications', 'RF', 'Network Optimization']
      }
    ],
    education: [
      {
        degree: 'Master’s Degree in Data Science (ongoing)',
        school: 'Escuela Colombiana de Ingeniería Julio Garavito',
        period: '2026 – Present',
        area: 'Advanced studies in data science, cloud, and applied analytics'
      },
      {
        degree: 'Master’s Degree in Data Science',
        school: 'Pontificia Universidad Javeriana Cali',
        period: '2022',
        area: 'Analytics, modeling, and data science'
      },
      {
        degree: 'Electronic and Telecommunications Engineering',
        school: 'Universidad Católica de Colombia',
        period: '2013 – 2016',
        area: 'Electronics and telecommunications'
      },
      {
        degree: 'Technology Degree in Electronics and Telecommunications',
        school: 'Escuela de Tecnologías - Universidad Católica',
        period: '2010 – 2011',
        area: 'Electronics and telecommunications foundations'
      }
    ],
    certifications: [
      'Oracle Cloud Architecture Certification',
      'AWS cloud and data engineering studies as part of current master’s track',
      'Migrating from monoliths to microservices (2023)',
      'PostgreSQL: Complete PostgreSQL Course (2022)',
      'Azure Databases Course (2022)',
      'Backend Development Introduction (2022)',
      'Python Fundamentals (2022)',
      'Business Analysis for Data Science (2022)',
      'SOLID Principles and Clean Code',
      'Transformation Program – GRETA (Telefónica)',
      'Fundamentals of Kanban',
      'Responsible Business Principles'
    ]
  }
};
