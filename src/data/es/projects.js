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
    id: "sage-sap-integrations",
    experienceId: "movistar-it-services-specialist",
    title: "SAGE — Asesoría técnica, Angular e integraciones SAP",
    summary: "Participación como desarrollador y asesor técnico en una solución Angular / Spring Boot con integraciones SAP SOAP–REST previstas; se contemplaban 14 interfaces. Hubo un release productivo limitado y el proyecto se canceló durante la certificación.",
    points: [
      "Desplegué componentes frontend Angular y participé en revisiones de arquitectura con el arquitecto de soluciones y el liderazgo del proyecto.",
      "Propuse agrupar interfaces en microservicios por responsabilidad funcional para reducir sobrecarga base de CPU y memoria; el equipo adoptó la propuesta.",
      "No se confirma la certificación o puesta en producción de todas las interfaces previstas."
    ],
    stack: ["Angular", "Java", "Spring Boot", "SAP", "SOAP", "REST APIs"],
    tags: ["architecture-review", "sap", "enterprise-integration", "frontend"]
  },
  {
    id: "temporary-personnel-platform",
    experienceId: "movistar-it-services-specialist",
    title: "Plataforma de Gestión de Personal Temporal",
    summary: "Análisis de requerimientos de Recursos Humanos y coordinación de desarrollo y QA de una solución React con 2FA; se desarrolló y probó, pero no se desplegó a producción.",
    points: [
      "Participé en el análisis funcional y la definición de la solución con el área de Recursos Humanos.",
      "Asigné y realicé seguimiento de tareas a 1 desarrollador y 1 profesional de QA.",
      "El proyecto fue cancelado por cambios de prioridades organizacionales, no por un fallo técnico documentado."
    ],
    stack: ["React", "2FA/MFA", "Requirements Analysis", "QA"],
    tags: ["enterprise-applications", "coordination", "not-released"]
  },
  {
    id: "stolen-devices-modernization",
    experienceId: "movistar-it-services-specialist",
    title: "Modernización IMEI y migración Oracle → PostgreSQL",
    summary: "Liderazgo técnico en la modernización de la validación IMEI para operaciones comerciales, incluida una migración gradual Oracle–PostgreSQL con continuidad productiva.",
    points: [
      "Coordiné técnicamente actividades con desarrollo, QA, arquitectura y operación en una plataforma crítica que llegó a producción.",
      "Participé en la migración de una base Oracle con aproximadamente 500 GB de espacio utilizado, con coexistencia temporal y sincronización unidireccional mediante procesos y triggers.",
      "Diseñé junto con QA consultas SQL para conciliación de datos y pruebas de carga, estrés y rendimiento con Apache JMeter.",
      "Tras certificar datos y procesos, se trasladaron progresivamente las conexiones a PostgreSQL."
    ],
    stack: ["Java", "Spring Boot", "Angular", "Oracle", "PostgreSQL", "SQL", "DML Triggers", "Apache JMeter", "REST APIs"],
    tags: ["telecommunications", "backend", "database", "migration", "production-support"]
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
    title: "Operación con Argo CD y prácticas GitOps",
    summary: "Evolución de los procesos de despliegue y operación de aplicaciones sobre Kubernetes.",
    points: [
      "Utilicé Argo CD durante la evolución de servicios hacia Kubernetes en Azure, como parte de la operación y seguimiento de despliegues de aplicaciones.",
      "Operé despliegues y adapté pipelines existentes de Azure DevOps, incluyendo YAML, variables de entorno y parámetros de configuración de aplicaciones.",
      "La iniciativa complementó los procesos existentes de CI/CD basados en Azure DevOps, Git y GitHub."
    ],
    stack: ["Argo CD", "Kubernetes", "GitOps", "Azure DevOps", "Git", "GitHub", "CI/CD"],
    tags: ["devops", "gitops", "cloud", "kubernetes"]
  },
  {
    id: "sigma-business-requirements",
    experienceId: "movistar-configuration-specialist",
    title: "SIGMA – Certificaciones y requerimientos de negocio",
    summary: "Base de datos SQL Server administrada por el equipo de Parametrización para registrar y dar seguimiento a certificaciones y requerimientos de negocio.",
    points: [
      "Administré junto con el equipo de Parametrización la base de datos SQL Server de SIGMA.",
      "La información se utilizaba para consultar y dar trazabilidad a certificaciones y requerimientos de negocio vinculados con procesos de configuración y liberación de cambios."
    ],
    stack: ["SQL Server", "SQL", "Business Requirements", "Certification Tracking", "Configuration Management"],
    tags: ["sql-server", "database", "business-requirements", "configuration"]
  },
  {
    id: "papiros-document-management",
    experienceId: "movistar-it-services-specialist",
    title: "PAPIROS – Gestión documental corporativa",
    summary: "Gestión técnica de una plataforma corporativa sobre SQL Server utilizada para almacenamiento y administración de documentación laboral, incluyendo su evolución de on-premises a cloud.",
    points: [
      "Gestioné técnicamente PAPIROS, plataforma utilizada para almacenar contratos y comunicaciones laborales, incluyendo aumentos y bonos de rendimiento.",
      "Coordiné actividades técnicas con equipos de desarrollo y QA para soporte, mantenimiento y evolución de la solución.",
      "Participé en la migración de PAPIROS desde infraestructura on-premises hacia cloud, dando seguimiento a la continuidad y estabilización de la plataforma durante la transición."
    ],
    stack: ["Application Management", "SQL Server", "Cloud Migration", "QA Coordination", "Production Support"],
    tags: ["enterprise-applications", "document-management", "application-support"]
  },
  {
    id: "infisa-financial-platform",
    experienceId: "movistar-it-services-specialist",
    title: "INFISA – Soporte y seguimiento contractual",
    summary: "Soporte técnico y administración operativa del contrato asignado, con seguimiento presupuestal, de facturación y SLA.",
    points: [
      "Asumí el soporte técnico y la administración del contrato asignado de INFISA, con seguimiento presupuestal y revisión de facturación bajo un esquema de pago único.",
      "Realicé seguimiento de SLA, incidentes y continuidad operativa, sin responsabilidad sobre negociación contractual o gestión comercial del proveedor."
    ],
    stack: ["Contract Monitoring", "Application Support", "SLA Monitoring", "Incident Management"],
    tags: ["contract-monitoring", "application-support", "financial-services"]
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

  ,{
    id: "claro-4g-kpi-monitoring-automation",
    experienceId: "path-kpi-data-analyst",
    title: "Seguimiento del despliegue 4G/LTE y automatización de KPIs",
    summary: "Análisis y automatización para apoyar el seguimiento del despliegue 4G/LTE de Claro y el desempeño de la red móvil en Colombia.",
    points: [
      "Apoyé el seguimiento del despliegue 4G/LTE mediante análisis de KPIs sobre tecnologías 2G/GSM, 3G/UMTS y 4G/LTE.",
      "Desarrollé cálculos automatizados de georreferenciación para identificar zonas con interferencia, problemas de canal, cobertura y degradaciones de desempeño.",
      "Automaticé reportes de seguimiento en Excel mediante VBA, incluyendo la generación automática de presentaciones en PowerPoint para comunicar resultados y evolución de KPIs.",
      "Construí tableros e informes con Power BI, Excel y Microsoft Access para visualizar tendencias, degradaciones y comportamiento de la red.",
      "Combiné SQL, datos de Nokia NetAct y Huawei U2000, automatización y visualización para reducir trabajo manual y facilitar el seguimiento operativo de la red."
    ],
    stack: ["SQL", "Nokia NetAct", "Huawei U2000", "4G/LTE", "Network KPIs", "Georeferencing", "Excel", "VBA", "PowerPoint", "Power BI", "Microsoft Access"],
    tags: ["telecommunications", "data-analysis", "network-performance", "automation", "business-intelligence"]
  }

  ,{
    id: "path-rf-postprocessing-network-modernization",
    experienceId: "path-rf-network-performance",
    title: "RF, postprocesamiento y evolución de redes móviles",
    summary: "Participación en proyectos de migración, implementación y optimización de redes móviles 2G, 3G y 4G/LTE mediante drive testing y postprocesamiento RF.",
    points: [
      "Participé en migraciones de sitios hacia equipamiento Huawei, realizando validaciones mediante drive tests y trabajando en campo con ingenieros de Huawei durante actividades de integración, migración y optimización.",
      "Participé en proyectos relacionados con la implementación y lanzamiento de 4G/LTE, incluyendo actividades sobre infraestructura compartida entre Tigo y Movistar y un proyecto 4G para Avantel.",
      "Realicé postprocesamiento y análisis de desempeño para un proyecto bianual de telecomunicaciones ejecutado con tecnología Nokia.",
      "Utilicé TEMS Investigation, TEMS Discovery y Actix Analyzer para analizar cobertura, calidad, interferencias, KPIs y comportamiento de la red a partir de mediciones de campo."
    ],
    stack: ["RF Engineering", "Drive Testing", "Post-Processing", "4G/LTE", "TEMS Investigation", "TEMS Discovery", "Actix Analyzer", "Huawei", "Nokia", "Network Optimization"],
    tags: ["telecommunications", "rf-engineering", "network-performance", "4g-lte", "network-optimization"]
  }

  ,{
    id: "osc-claro-mobile-network-benchmarking",
    experienceId: "osc-rf-engineer",
    title: "Benchmarking de redes móviles Claro, Tigo y Movistar",
    summary: "Proyecto de benchmarking para Claro en Bogotá comparando desempeño de voz y datos entre las redes de Claro, Tigo y Movistar mediante mediciones de campo y análisis RF.",
    points: [
      "Participé en mediciones comparativas de las redes de Claro, Tigo y Movistar utilizando múltiples terminales configurados para escenarios de voz y datos.",
      "Ejecuté pruebas de llamadas, llamadas cortas, navegación y upload/download con dispositivos Sierra Wireless como parte de la evaluación comparativa.",
      "Recolecté mediciones RF y datos georreferenciados mediante drive testing y analicé KPIs, throughput, señalización, tráfico y eventos de red.",
      "Utilicé TEMS, Nemo, Actix Analyzer, Clarify, WindCatcher, MapInfo y Excel para apoyar el análisis técnico y la generación de resultados."
    ],
    stack: ["RF", "Benchmarking", "Drive Testing", "TEMS", "Nemo", "Actix Analyzer", "Clarify", "WindCatcher", "MapInfo", "Excel", "Network KPIs"],
    tags: ["telecommunications", "rf-engineering", "benchmarking", "network-performance"]
  }

];
