export const supportedProjects = [
  "central_app_support",
  "Hurto_de_terminales",
  "Inmobiliario",
  "NCA",
  "Pandora",
  "Papiros",
  "Playflow",
  "RegistrarDuplicados",
  "Computer_Vision_Utility_Bills",
  "OCR_Document_Processing"
];

// Estructura enriquecida para preservar el detalle técnico de proyectos e iniciativas.
// Se mantiene supportedProjects sin cambios para conservar compatibilidad con la exportación actual del CV/PDF.
export const projectDetails = [
  {
    id: "stolen-devices-modernization",
    experienceId: "movistar-it-services-specialist",
    title: "Modernización de la plataforma de Hurto de Terminales / IMEI",
    summary: "Evolución y modernización de una plataforma crítica de telecomunicaciones para gestión de terminales hurtados e información IMEI.",
    points: [
      "Ejercí liderazgo técnico sobre la evolución y modernización de la plataforma, coordinando actividades con desarrollo, QA, arquitectura, infraestructura, bases de datos, proveedores y áreas de negocio.",
      "La solución integraba información con diferentes operadores de Colombia y generaba archivos y reportes relacionados con gestión de IMEI y procesos asociados con GSMA.",
      "La plataforma manejaba información personal y operativa sensible, requiriendo controles de validación, trazabilidad, análisis y estabilización durante los cambios.",
      "Participé en pruebas funcionales y técnicas, análisis de logs, validación de información, auditorías, monitoreo y estabilización productiva.",
      "Apliqué Business Intelligence y analítica operativa para seguimiento de KPIs, trazabilidad y reportería mediante Power BI, Excel y Access."
    ],
    stack: ["Java", "Spring Boot", "Python", "Oracle", "PostgreSQL", "REST APIs", "SQL", "Power BI", "Excel", "Microsoft Access"],
    tags: ["telecommunications", "backend", "data", "application-modernization", "production-support"]
  },
  {
    id: "oracle-postgresql-migration",
    experienceId: "movistar-it-services-specialist",
    title: "Migración Oracle → PostgreSQL",
    summary: "Migración aproximada de 500 GB de información de Oracle a PostgreSQL como parte de la modernización de una plataforma empresarial crítica.",
    points: [
      "Participé técnicamente en la migración de aproximadamente 500 GB de información desde Oracle hacia PostgreSQL.",
      "Implementé y validé mecanismos temporales de sincronización mediante triggers para detectar cambios DML y mantener consistencia entre ambas bases de datos durante la transición.",
      "La sincronización evolucionó inicialmente de Oracle hacia PostgreSQL y posteriormente de PostgreSQL hacia Oracle a medida que la carga funcional era trasladada hacia la nueva plataforma.",
      "Participé en validación y depuración de información, auditorías, análisis SQL, revisión de logs y estabilización productiva.",
      "Optimicé procedimientos almacenados, procesamiento batch y mecanismos de notificación y manejo de errores asociados a la plataforma."
    ],
    stack: ["Oracle", "PostgreSQL", "SQL", "DML Triggers", "Batch Processing", "Java", "Python"],
    tags: ["database", "migration", "data", "modernization", "backend"]
  },
  {
    id: "scl-decoupling",
    experienceId: "movistar-it-services-specialist",
    title: "Desacoplamiento y retiro progresivo del CRM SCL",
    summary: "Modernización progresiva orientada a desacoplar componentes empresariales del CRM legado SCL sin interrumpir la operación.",
    points: [
      "Participé en una estrategia de modernización progresiva manteniendo coexistencia temporal entre componentes legados y nuevos.",
      "La transición permitió trasladar gradualmente responsabilidades funcionales hacia la nueva plataforma manteniendo continuidad operativa.",
      "El proceso de desacoplamiento contribuyó a habilitar el posterior apagado del CRM SCL."
    ],
    stack: ["Oracle", "PostgreSQL", "REST APIs", "SOAP", "ESB"],
    tags: ["legacy-modernization", "architecture", "integration", "migration"]
  },
  {
    id: "argocd-gitops",
    experienceId: "movistar-it-services-specialist",
    title: "Implementación de Argo CD y prácticas GitOps",
    summary: "Evolución de los procesos de despliegue y operación de aplicaciones sobre Kubernetes.",
    points: [
      "Participé en la implementación de Argo CD para aplicaciones desplegadas sobre Kubernetes.",
      "Incorporé prácticas GitOps orientadas a mejorar control, trazabilidad y consistencia de los despliegues.",
      "La iniciativa complementó los procesos existentes de CI/CD basados en Azure DevOps, Git y GitHub."
    ],
    stack: ["Argo CD", "Kubernetes", "GitOps", "Azure DevOps", "Git", "GitHub", "CI/CD"],
    tags: ["devops", "gitops", "cloud", "kubernetes"]
  },
  {
    id: "papiros-document-management",
    experienceId: "movistar-it-services-specialist",
    title: "PAPIROS – Gestión documental corporativa",
    summary: "Gestión técnica de una plataforma corporativa utilizada para almacenamiento y administración de documentación laboral.",
    points: [
      "Gestioné técnicamente PAPIROS, plataforma utilizada para almacenar contratos y comunicaciones laborales, incluyendo aumentos y bonos de rendimiento.",
      "Coordiné actividades técnicas con equipos de desarrollo y QA para soporte, mantenimiento y evolución de la solución."
    ],
    stack: ["Application Management", "QA Coordination", "Production Support"],
    tags: ["enterprise-applications", "document-management", "application-support"]
  },
  {
    id: "infissa-financial-platform",
    experienceId: "movistar-it-services-specialist",
    title: "INFISSA – Plataforma de servicios financieros",
    summary: "Coordinación técnica y contractual de una plataforma de servicios financieros utilizada por la compañía.",
    points: [
      "Fui representante del contrato asociado con INFISSA.",
      "Combiné seguimiento contractual con coordinación técnica, soporte de la solución y relación con el proveedor."
    ],
    stack: ["Contract Management", "Application Support", "Vendor Management"],
    tags: ["vendor-management", "application-support", "financial-services"]
  },
  {
    id: "datastage-network-traffic",
    experienceId: "movistar-it-services-specialist",
    title: "Procesamiento de tráfico interred e intrared con IBM DataStage",
    summary: "Procesamiento y análisis de información de tráfico de red utilizada para reportería operativa y regulatoria.",
    points: [
      "Trabajé con IBM DataStage en procesos asociados al análisis de tráfico interred e intrared.",
      "La información procesada era utilizada en reportería para procesos operativos y regulatorios de la compañía."
    ],
    stack: ["IBM DataStage", "Data Processing", "Reporting"],
    tags: ["data-engineering", "telecommunications", "reporting"]
  },
  {
    id: "legacy-integration-modernization",
    experienceId: "movistar-it-services-specialist",
    title: "Modernización de integraciones empresariales",
    summary: "Evolución progresiva de integraciones legacy hacia servicios basados en APIs.",
    points: [
      "Participé en la modernización de integraciones basadas en Oracle y ESB hacia APIs REST.",
      "Mantuve interoperabilidad con servicios SOAP cuando era requerida por sistemas empresariales existentes."
    ],
    stack: ["REST APIs", "SOAP", "Oracle", "ESB"],
    tags: ["integration", "api", "modernization"]
  },
  {
    id: "two-factor-authentication",
    experienceId: "movistar-it-services-specialist",
    title: "Integraciones de autenticación 2FA / MFA",
    summary: "Integración de mecanismos de autenticación reforzada en aplicaciones empresariales.",
    points: [
      "Participé en integraciones con mecanismos de doble factor de autenticación para aplicaciones empresariales.",
      "Trabajé en los procesos de conectividad necesarios mediante VPN y redes internas."
    ],
    stack: ["2FA/MFA", "VPN", "Enterprise Integration"],
    tags: ["authentication", "integration", "enterprise-applications"]
  },
  {
    id: "computer-vision-address-validation",
    experienceId: "movistar-it-services-specialist",
    title: "Visión por computador para validación de direcciones",
    summary: "Aplicación de visión por computador para apoyar la validación de direcciones durante instalaciones de servicios fijos.",
    points: [
      "Participé en una solución de visión por computador para validar direcciones durante procesos de instalación de servicios fijos en hogares.",
      "La solución apoyaba la automatización del proceso y la mejora de calidad de la información."
    ],
    stack: ["Computer Vision", "Automation", "Data Quality"],
    tags: ["computer-vision", "automation", "data-quality"]
  },
  {
    id: "subscriber-credit-validation",
    experienceId: "movistar-it-services-specialist",
    title: "Integraciones para validación de abonados y riesgo crediticio",
    summary: "Integraciones empresariales orientadas a fortalecer procesos de validación y autenticación.",
    points: [
      "Participé en integraciones para validación de abonados y procesos relacionados con riesgo crediticio.",
      "La iniciativa reforzó mecanismos de autenticación y validación utilizados por aplicaciones empresariales."
    ],
    stack: ["Enterprise Integration", "APIs"],
    tags: ["enterprise-integration", "validation", "risk"]
  },
  {
    id: "sap-successfactors-integration",
    experienceId: "movistar-it-services-specialist",
    title: "Integraciones SAP y SuccessFactors",
    summary: "Integración de aplicaciones internas con plataformas corporativas de procesos empresariales y gestión de talento.",
    points: [
      "Participé en integraciones entre aplicaciones internas y SAP y SuccessFactors.",
      "Trabajé con APIs, conectividad corporativa, VPN y redes internas en procesos relacionados con selección de personal."
    ],
    stack: ["SAP", "SuccessFactors", "APIs", "VPN"],
    tags: ["enterprise-integration", "hr-systems", "api"]
  }
  ,{
    id: "automated-offer-validator",
    experienceId: "movistar-configuration-specialist",
    title: "Validador automático de ofertas comerciales",
    summary: "Automatización para validar integralmente la configuración de ofertas antes de su liberación a producción.",
    points: [
      "Desarrollé un validador automático para verificar la consistencia de configuraciones comerciales antes de su liberación.",
      "La solución apoyaba la validación integral entre plataformas y contribuía a reducir errores de configuración.",
      "Utilicé automatización y análisis de datos para fortalecer las validaciones previas a producción."
    ],
    stack: ["Python", "SQL", "Excel", "VBA", "CRM", "CBS", "Ericsson Altamira"],
    tags: ["automation", "validation", "billing", "telecommunications"]
  },
  {
    id: "integrated-rent-calculator",
    experienceId: "movistar-configuration-specialist",
    title: "Calculador de rentas integradas",
    summary: "Automatización para calcular rentas de servicios fijos y móviles considerando variaciones tarifarias e impuestos.",
    points: [
      "Desarrollé un calculador de rentas integradas para servicios fijos y móviles.",
      "La solución contemplaba variaciones de precio por estrato y discriminación de impuestos.",
      "Fue utilizado como apoyo para alzas tarifarias y cambios asociados con UVT."
    ],
    stack: ["Python", "Excel", "VBA", "SQL", "Billing"],
    tags: ["automation", "billing", "pricing", "data"]
  },
  {
    id: "601-dialing-scheme",
    experienceId: "movistar-configuration-specialist",
    title: "Preparación del esquema de marcación 601",
    summary: "Análisis de reglas de numeración y preparación de cambios en Ericsson Altamira asociados con la implementación del esquema de marcación 601.",
    points: [
      "Realicé análisis e investigación de las reglas de numeración configuradas en Ericsson Altamira.",
      "Participé en la preparación de los cambios requeridos para soportar la implementación del esquema de marcación 601."
    ],
    stack: ["Ericsson Altamira", "Numbering Rules", "Commercial Configuration"],
    tags: ["telecommunications", "configuration", "numbering"]
  }

  ,{
    id: "grupo-aval-sme-banking-ath",
    experienceId: "solem-support-analyst",
    title: "Plataforma de banca empresarial/PYMES Grupo Aval e integraciones ATH",
    summary: "Soporte avanzado e integración de una plataforma bancaria utilizada por los cuatro bancos de Grupo Aval a través de servicios ATH.",
    points: [
      "Brindé soporte avanzado a la plataforma utilizada por Banco de Bogotá, Banco Popular, AV Villas y Banco de Occidente.",
      "Analicé flujos de información entre los buses de integración de los bancos y ATH, revisando servicios SOAP para localizar fallas en el procesamiento de operaciones.",
      "Soporté pagos masivos mediante archivos, transacciones ACH y administración de permisos, roles y perfiles definidos por cada banco.",
      "Utilicé Java, Oracle y SQL para diagnóstico de incidentes, validación de transacciones y análisis de información de clientes y procesos de la plataforma.",
      "Acompañé despliegues y cambios de la solución, realizando validaciones técnicas y seguimiento para preservar la continuidad operativa."
    ],
    stack: ["Java", "Oracle", "SQL", "SOAP", "Web Services", "ATH", "ACH", "JIRA", "Integration Buses"],
    tags: ["banking", "application-support", "enterprise-integration", "production-support"]
  }

];
