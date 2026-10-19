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
    "id": "matrix-project-01",
    "experienceId": "movistar-it-services-specialist",
    "title": "Hurto de Terminales — Migración Oracle → PostgreSQL",
    "summary": "Modernizar la persistencia de datos de Hurto de Terminales, migrando la información principal desde Oracle a PostgreSQL sin interrumpir la operación.",
    "points": [
      "Coordiné las etapas técnicas de la migración Oracle a PostgreSQL, articulando actividades de desarrollo y QA, sincronización entre bases y pruebas para mantener la continuidad operativa. Realicé seguimiento a los OKR de la iniciativa, participé en validaciones de datos y en la aprobación de cambios para producción dentro del alcance de Hurto de Terminales.",
      "Migración de aproximadamente 300 GB de datos principales (sobre una evaluación inicial de 500 GB en Oracle, incluidos logs y auditoría); ejecución de 42 cambios en Oracle productivo; implementación de triggers de auditoría y sincronización; unificación del tratamiento de logs y transacciones.",
      "Continuidad operativa durante la transición y sincronización entre Oracle y PostgreSQL mientras coexistieron las plataformas comerciales."
    ],
    "stack": [
      "Oracle Database",
      "PostgreSQL",
      "SQL",
      "PL/SQL",
      "Python",
      "modelado de datos",
      "procesos batch",
      "ChatGPT"
    ],
    "status": "Producción",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-02",
    "experienceId": "movistar-it-services-specialist",
    "title": "Hurto de Terminales — Desacoplamiento del CRM SCL",
    "summary": "Separar Hurto de Terminales del CRM legado, que compartía su base de datos y realizaba validaciones directamente sobre tablas comerciales.",
    "points": [
      "Coordiné las etapas de desacoplamiento de Hurto respecto al CRM SCL, organizando tareas de desarrollo y QA y articulando la evolución de componentes de dependencias de datos e integraciones. Realicé seguimiento a los OKR de la iniciativa, participé en validaciones de datos y en la aprobación de cambios para producción dentro del alcance de Hurto de Terminales.",
      "Separación progresiva de los componentes de Hurto de Terminales que dependían del CRM legado, incluyendo funcionalidades de consulta y registro de IMEI, integraciones y accesos a datos del sistema comercial. Implementación de componentes independientes para reducir el acoplamiento tecnológico y facilitar la evolución de la plataforma.",
      "Mayor autonomía de Hurto frente al CRM legacy; la iniciativa contribuyó a eliminar dependencia para su retiro del CRM legacy."
    ],
    "stack": [
      "Oracle Database",
      "PostgreSQL",
      "Azure Functions",
      "CRM legado",
      "ChatGPT"
    ],
    "status": "Producción",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-03",
    "experienceId": "movistar-it-services-specialist",
    "title": "Hurto de Terminales — Modernización de capa de integración OSB → OpenShift",
    "summary": "Modernizar la capa intermedia de servicios de Hurto de Terminales, sustituyendo conexiones desde OSB a componentes on-premises por servicios en OpenShift y destinos en Azure Kubernetes.",
    "points": [
      "Coordiné las etapas de modernización de la capa de integración de Hurto, articulando desarrollo, QA, configuración de direccionamientospruebas y despliegues con los equipos responsables. Realicé seguimiento a los OKR de la iniciativa, participé en validaciones de datos y en la aprobación de cambios para producción dentro del alcance de Hurto de Terminales.",
      "Modernización de la capa de integración de Hurto de Terminales mediante la migración de servicios desde Oracle Service Bus (OSB) hacia Red Hat OpenShift. Actualización de los direccionamientos hacia servicios desplegados en infraestructura on-premises y Kubernetes en Azure, coordinación de pruebas de integración y validación de despliegues. Participación en la racionalización de servicios y en las actividades que facilitaron el retiro de infraestructura legada.",
      "Simplificación de la capa de integración y continuidad de los flujos durante la modernización, sin atribuir un retiro general de OSB o de servidores fuera del alcance de Hurto."
    ],
    "stack": [
      "Oracle Service Bus (OSB)",
      "Red Hat OpenShift",
      "Jenkins",
      "Azure DevOps",
      "Kubernetes en Azure",
      "Aks",
      "CI/CD",
      "microservicios",
      "Postman",
      "REST APIs",
      "SOAP",
      "ChatGPT"
    ],
    "status": "Producción",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-04",
    "experienceId": "movistar-it-services-specialist",
    "title": "Hurto de Terminales — Integraciones GSMA",
    "summary": "Evolucionar los procesos batch de intercambio de información de IMEI con GSMA y operadores asociados.",
    "points": [
      "Coordiné la evolución de las integraciones batch de GSMA, articulando actividades de desarrollo y QA para sustituir el acceso directo a tablas por consumo de servicios en Kubernetes de Azure. Realicé seguimiento a los OKR de la iniciativa, participé en validaciones de datos y en la aprobación de cambios para producción dentro del alcance de Hurto de Terminales.",
      "Evolución de los procesos batch de intercambio de información de IMEI con GSMA, sustituyendo los accesos directos a tablas de la plataforma de Hurto de Terminales por el consumo de servicios desplegados en Kubernetes en Azure. Coordinación de las actividades de integración, pruebas y puesta en operación.",
      "Procesamiento batch mediante servicios de la plataforma modernizada, generación de reportes y menor dependencia de escrituras directas sobre tablas de Hurto."
    ],
    "stack": [
      "Bash/Shell scripting, procesamiento batch, PostgreSQL, REST APIs, Kubernetes en Azure, Azure DevOps"
    ],
    "status": "Producción",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-05",
    "experienceId": "movistar-it-services-specialist",
    "title": "Hurto de Terminales — Adaptación de IBM DataStage a PostgreSQL",
    "summary": "Mantener el procesamiento interred/intrared tras el cambio de la base de datos Oracle a PostgreSQL.",
    "points": [
      "Coordiné las etapas de adaptación de IBM DataStage de Oracle a PostgreSQL, organizando cambios de conexiones y consultas, validaciones con desarrollo y QA y seguimiento operativo; sin rediseñar los flujos. Realicé seguimiento a los OKR de la iniciativa, participé en validaciones de datos y en la aprobación de cambios para producción dentro del alcance de Hurto de Terminales.",
      "Redireccionamiento de 52 jobs de DataStage para consumir PostgreSQL en lugar de Oracle, preservando la lógica funcional; incorporación de herramientas de monitoreo del procesamiento.",
      "Continuidad de los procesos interred/intrared sobre PostgreSQL y mayor capacidad de seguimiento de su ejecución."
    ],
    "stack": [
      "Oracle Service Bus (OSB), Red Hat OpenShift, Kubernetes en Azure, Jenkins, Azure DevOps, CI/CD, REST APIs."
    ],
    "status": "Producción",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-06",
    "experienceId": "movistar-it-services-specialist",
    "title": "Hurto de Terminales — Registro de IMEI en lista positiva",
    "summary": "Ofrecer a clientes con SIM Movistar el registro de terminales adquiridos o traídos del exterior mediante una solución modernizada.",
    "points": [
      "Coordiné las etapas de desarrollo, integración, QA y puesta en producción del registro de IMEI en lista positiva, articulando frontend, microservicios y validación de identidad del solicitante. Realicé seguimiento a los OKR de la iniciativa, participé en validaciones de datos y en la aprobación de cambios para producción dentro del alcance de Hurto de Terminales.",
      "Despliegue del frontend de registro; integración con servicio de riesgo crediticio exclusivamente para validar la identidad del usuario; integración con CRM/IVR y habilitación de herramientas de monitoreo del proceso.",
      "Canal de registro de IMEI disponible para clientes con SIM Movistar sobre la solución modernizada, con seguimiento operativo del proceso."
    ],
    "stack": [
      "Java",
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "microservicios",
      "REST APIs",
      "JUnit",
      "Mockito",
      "Postman"
    ],
    "status": "Producción",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-07",
    "experienceId": "movistar-it-services-specialist",
    "title": "Hurto de Terminales — Frontend de consulta y registro de IMEI en lista negativa",
    "summary": "Proveer a Fraude y Soporte interno una interfaz para consultar y registrar IMEI en lista negativa fuera del CRM legado.",
    "points": [
      "Coordiné las etapas de implementación del frontend interno de consulta y registro de IMEI en lista negativa, articulando actividades de desarrollo, integración backend, QA y despliegue. Realicé seguimiento a los OKR de la iniciativa, participé en validaciones de datos y en la aprobación de cambios para producción dentro del alcance de Hurto de Terminales.",
      "Implementación y despliegue del frontend para usuarios de Fraude y Soporte; integración con microservicios y herramientas de monitoreo del proceso.",
      "Autonomía funcional del módulo de negativos y contribución al desacoplamiento de Hurto del CRM anterior; el apagado completo del CRM no correspondía a este dominio."
    ],
    "stack": [
      "Java",
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "microservicios",
      "REST APIs",
      "JUnit",
      "Mockito",
      "Postman"
    ],
    "status": "Producción",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-08",
    "experienceId": "movistar-it-services-specialist",
    "title": "SAGE — Integraciones SAP",
    "summary": "Desarrollar una solución empresarial con backend Java/Spring Boot y componentes web para integrar procesos con SAP.",
    "points": [
      "Desarrollo backend desde etapas tempranas; asesoría técnica; despliegue de componentes Angular; propuesta de agrupación de interfaces por dominio funcional.",
      "Desarrollo de componentes backend con Java y Spring Boot para la integración de servicios SAP mediante tecnologías SOAP y REST. Acompañamiento técnico en los componentes frontend Angular, infraestructura y despliegues. Propuesta y adopción de una organización de interfaces SAP por dominios funcionales. Se alcanzó un release en producción de operación limitada; el proyecto fue cancelado por cambios organizacionales mientras continuaba su proceso de certificación.",
      "Entrega parcial con operación productiva limitada, sin consolidación ni certificación completa de toda la solución."
    ],
    "stack": [
      "Java",
      "Spring Boot",
      "Angular",
      "SAP",
      "SOAP",
      "REST APIs",
      "Postman"
    ],
    "status": "Cancelado; release limitado en producción",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-09",
    "experienceId": "movistar-it-services-specialist",
    "title": "Plataforma de Gestión de Personal Temporal",
    "summary": "Apoyar la gestión de personal temporal de Recursos Humanos con una aplicación y controles de acceso.",
    "points": [
      "Levantamiento de requerimientos con Recursos Humanos; apoyo al diseño de la solución y coordinación de un desarrollador y un profesional de QA durante desarrollo y pruebas, responsable del cumplimienti del OKR,validaciones de datos,AProbador de los cambios hechos en ambie no productivos",
      "Desarrollo y validación de componentes frontend y backend para la gestión de personal temporal, incluyendo funcionalidades de autenticación multifactor (MFA/2FA). Coordinación de las actividades de desarrollo y aseguramiento de calidad (QA), seguimiento de avances y validación funcional en ambientes no productivos. La solución completó las etapas de desarrollo y pruebas, pero no fue desplegada en producción debido a cambios en las prioridades del negocio.",
      "Solución desarrollada y validada en pruebas, sin salida a producción por cambio de prioridades del negocio.\nDesarrollo acelerado con uso de IA"
    ],
    "stack": [
      "React",
      "Java",
      "Spring Boot",
      "Node.js",
      "Vue.js",
      "Django y Flask",
      "MFA/2FA",
      "Kiro",
      "IA generativa",
      "ChatGPT"
    ],
    "status": "Cancelado; QA completado; no productivo",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-10",
    "experienceId": "movistar-it-services-specialist",
    "title": "SAP SuccessFactors y Nómina",
    "summary": "Mantener la réplica de la estructura organizacional para procesos internos y sistemas legados relacionados con nómina.",
    "points": [
      "Seguimiento de procesamiento batch, validación de archivos maestros y atención de incidentes de sincronización.",
      "Procesamiento por lotes de archivos maestros XML para replicar la estructura organizacional en sistemas legados.",
      "Continuidad de la sincronización de información organizacional para procesos dependientes."
    ],
    "stack": [
      "SAP SuccessFactors",
      "SAP",
      "XML",
      "procesamiento batch",
      "archivos maestros"
    ],
    "status": "Operación / mantenimiento",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-11",
    "experienceId": "movistar-it-services-specialist",
    "title": "PAPIROS — Modernización de gestión documental",
    "summary": "Modernizar el acceso a documentos contractuales de la compañía y de sus trabajadores mediante una interfaz web desplegada en Azure.",
    "points": [
      "Acompañamiento técnico y coordinación con desarrollo, QA e infraestructura durante la evolución de la plataforma.",
      "Entrega de un nuevo frontend en Azure y disponibilidad de diez servicios backend registrados en el proyecto, principalmente asociados a carga y descarga de contratos.",
      "Disponibilidad de una nueva interfaz y servicios de gestión documental durante la modernización."
    ],
    "stack": [
      "Java",
      "Microsoft SQL Server",
      "Microsoft Azure",
      ".NET"
    ],
    "status": "Modernización / operación",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-12",
    "experienceId": "movistar-it-services-specialist",
    "title": "INFISA — Seguimiento operativo y contractual",
    "summary": "Asegurar continuidad de soporte, seguimiento contractual y cumplimiento de compromisos de servicio de INFISA.",
    "points": [
      "Seguimiento de SLA, incidentes, renovación contractual y coordinación de soporte especializado del proveedor.",
      "Gestión de renovación contractual y seguimiento de compromisos de soporte y atención de incidentes.",
      "Continuidad del soporte especializado y seguimiento al cumplimiento de SLA del proveedor."
    ],
    "stack": [
      "Oracle"
    ],
    "status": "Operación / mantenimiento",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-13",
    "experienceId": "movistar-it-services-specialist",
    "title": "Visión por computador — Validación de direcciones",
    "summary": "Facilitar la validación de direcciones de instalación a partir de imágenes de recibos de servicios públicos, evitando depender siempre de correcciones telefónicas.",
    "points": [
      "Desarrollo e integración backend para extraer y validar direcciones desde imágenes de recibos de servicios públicos mediante Azure AI Document Intelligence, con participación en componentes Python/Java y tecnologías web Django/Flask según aclaración del usuario.",
      "Desarrollo de pilotos de extracción y procesamiento de información de recibos de servicios públicos utilizando Python, Django, Flask y OpenCV. Posterior implementación e integración de componentes backend con Azure AI Document Intelligence para extraer información de direcciones y facilitar su validación durante el proceso de instalación. Despliegue de la solución en producción como apoyo al flujo operativo de los técnicos.",
      "Habilitación de validación de direcciones en campo y menor necesidad de llamadas al centro especializado para corregir direcciones, sin cifra histórica disponible."
    ],
    "stack": [
      "Python, Django, Flask, OpenCV, Java, Azure AI Document Intelligence, REST APIs."
    ],
    "status": "Producción",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-14",
    "experienceId": "movistar-it-services-specialist",
    "title": "Adopción transversal de Argo CD y GitOps",
    "summary": "Estandarizar la gestión de despliegues de los microservicios y repositorios de la célula mediante prácticas GitOps.",
    "points": [
      "Participación en adaptación de procesos de despliegue y ajustes de pipelines existentes en Azure DevOps para integración con Argo CD.",
      "Adecuación de los despliegues de los microservicios de la célula para la adopción de Argo CD.",
      "Uso transversal de un flujo de despliegue GitOps en la célula."
    ],
    "stack": [
      "Azure DevOps",
      "Argo CD",
      "GitOps",
      "CI/CD",
      "Kubernetes",
      "despliegue de microservicios"
    ],
    "status": "Iniciativa transversal implementada",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-15",
    "experienceId": "movistar-configuration-specialist",
    "title": "SIGMA y Validador Automático de Ofertas Comerciales",
    "summary": "Integrar la trazabilidad de configuración comercial con validaciones automáticas entre SIGMA, el sistema comercial y CBS.",
    "points": [
      "Administración compartida de SQL Server de SIGMA, seguimiento de certificaciones y participación en validaciones de ofertas.",
      "Integración del validador con SIGMA, el sistema comercial y CBS para apoyar revisión de configuraciones.",
      "Mayor consistencia y trazabilidad en la revisión de ofertas comerciales antes de su liberación, sin métricas históricas de error."
    ],
    "stack": [
      "Microsoft SQL Server",
      "SIGMA",
      "CRM/CBS",
      "Microsoft Excel",
      "Microsoft Access",
      "VBA",
      "Python"
    ],
    "status": "Implementado / operación",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-16",
    "experienceId": "movistar-configuration-specialist",
    "title": "Calculador de rentas integradas — Planes Todo Incluido Movistar Fijo y Móvil",
    "summary": "Apoyar el cálculo y validación de rentas de planes integrados fijos y móviles, incluidos ajustes por cambios de UVT.",
    "points": [
      "Desarrollo de automatización y validación de reglas comerciales, parámetros de renta y tributarios.",
      "Implementación del calculador de rentas integradas y soporte a la revisión de ajustes tarifarios anuales asociados con UVT.",
      "Mayor capacidad de revisión previa de cobros y ajustes de tarifas antes de aplicarlos al cliente, sin afirmar disminuciones porcentuales de errores."
    ],
    "stack": [
      "Microsoft SQL Server",
      "Oracle Database",
      "Microsoft Excel",
      "Microsoft Access",
      "VBA",
      "XML",
      "CRM/CBS"
    ],
    "status": "Implementado",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-17",
    "experienceId": "movistar-configuration-specialist",
    "title": "Automatización de Configuración para Validaciones de Facturación",
    "summary": "Automatizar verificaciones de parámetros comerciales y tributarios usadas en certificación de productos y facturación.",
    "points": [
      "Diseño y desarrollo de herramienta con Access, VBA y SQL Server; análisis de rentas, impuestos y UVT.",
      "Sustitución de consultas SQL repetitivas y búsquedas manuales en Excel por validaciones automatizadas.",
      "Estandarización de verificaciones y apoyo a la resolución más ágil de incidencias de configuración; sin cifra de MTTR disponible."
    ],
    "stack": [
      "Microsoft SQL Server",
      "SQL",
      "Microsoft Excel",
      "Microsoft Access",
      "VBA",
      "CRM/CBS"
    ],
    "status": "Implementado",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-18",
    "experienceId": "movistar-configuration-specialist",
    "title": "Preparación del esquema de marcación 601",
    "summary": "Adaptar las reglas de numeración y tarificación a cambios regulatorios de marcación de telefonía fija en Colombia.",
    "points": [
      "Configuración de reglas de numeración en el tarificador y validaciones de compatibilidad con servicios móviles, \ntrabajo en conjunto con las personas del PCRF y soporte Altamira.",
      "Adecuación de reglas para soportar el esquema de marcación 601.",
      "Preparación de la plataforma de tarificación para operar conforme al nuevo esquema de marcación."
    ],
    "stack": [
      "Oracle Database",
      "SQL",
      "sistemas de tarificación Ericsson Altamira,"
    ],
    "status": "Implementado; fecha exacta no documentada",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-19",
    "experienceId": "movistar-configuration-specialist",
    "title": "Ilimitados para Movistar",
    "summary": "Habilitar ofertas de navegación ilimitada para planes pospago bajo condiciones comerciales diferenciadas por tipo de tráfico.",
    "points": [
      "Configuración de parámetros de tarificación y grupos de tráfico en Ericsson Altamira para las condiciones de la oferta.",
      "Configuración de reglas que distinguían la navegación del cliente y el uso compartido de datos mediante Wi-Fi/tethering según condiciones del plan.",
      "Habilitación técnica de la oferta para clientes B2C, respetando las restricciones comerciales definidas."
    ],
    "stack": [
      "Oracle Database",
      "SQL",
      "Ericsson Altamira",
      "CRM",
      "Microsoft Excel",
      "VBA",
      "sistemas de tarificación Altamira"
    ],
    "status": "Implementado",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-20",
    "experienceId": "movistar-configuration-specialist",
    "title": "Iniciativas de Productos Prepago",
    "summary": "Habilitar nuevos productos, promociones y recargas del segmento prepago mediante configuración de sistemas comerciales y de tarificación.",
    "points": [
      "Configuración de ofertas y parámetros de aprovisionamiento, recargas y tarificación; validaciones previas a liberación.",
      "Implementación de configuraciones comerciales y coordinación funcional entre MTH, TIAXA y Ericsson Altamira.",
      "Habilitación técnica de lanzamientos y cambios de productos prepago solicitados por el área comercial.\nSoporte de nuevos productos prepgago atraves de casos en remedy."
    ],
    "stack": [
      "Oracle Database",
      "SQL",
      "CRM",
      "Ericsson MTH",
      "TIAXA",
      "Ericsson Altamira",
      "Microsoft Excel",
      "VBA",
      "Remedy"
    ],
    "status": "Iniciativas implementadas",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-21",
    "experienceId": "teka-l3-support",
    "title": "GRETA — Nuevo Sistema Comercial",
    "summary": "Acompañar la implementación del nuevo CRM prepago de Movistar y sostener su operación durante la transición.",
    "points": [
      "Soporte técnico L3, diagnóstico y RCA; consultas Oracle/SQL; automatización de análisis con Python y formatos Excel/VBA; coordinación con equipos Huawei.",
      "Acompañamiento de ventanas de implementación; soporte a incidentes y cambios; preparación de formatos de configuración ejecutados por equipos responsables.",
      "Apoyo a la estabilidad operativa y resolución/escalamiento técnico de incidencias del nuevo sistema comercial."
    ],
    "stack": [
      "Java",
      "Oracle Database",
      "Python",
      "SQL",
      "Microsoft Excel",
      "VBA",
      "CRM/CBS",
      "Service Manager"
    ],
    "status": "Implementación / soporte productivo",
    "company": "Teka Services S.A.S.",
    "period": "Sep 2017 - Abr 2018",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-22",
    "experienceId": "solem-support-analyst",
    "title": "Plataforma bancaria Grupo Aval / ATH",
    "summary": "Dar soporte a la operación de banca empresarial de varias entidades del Grupo Aval integrada con servicios ATH.",
    "points": [
      "Soporte L2/L3, análisis de transacciones, consultas SQL, diagnóstico SOAP y gestión de incidentes y despliegues.",
      "Atención de incidentes, documentación y escalamiento a equipos responsables; acompañamiento de cambios en operación 7×24.",
      "Continuidad del soporte operativo y trazabilidad de fallas y cambios en servicios bancarios críticos, sin porcentajes de disponibilidad."
    ],
    "stack": [
      "Java",
      "Oracle Database",
      "SQL",
      "SOAP",
      "Web Services",
      "Jira"
    ],
    "status": "Operación productiva",
    "company": "SOLEM",
    "period": "Abr 2018 - Oct 2018",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-23",
    "experienceId": "path-kpi-data-analyst",
    "title": "Despliegue 4G/LTE y automatización de KPIs",
    "summary": "Apoyar el seguimiento de desempeño y despliegue de redes móviles mediante análisis y reportería consistente de KPIs.",
    "points": [
      "Extracción y transformación de datos desde plataformas de red; automatización de reportes y análisis de desempeño.",
      "Consolidación de KPIs y automatización de reportería con herramientas de análisis y BI.",
      "Reportes más consistentes y comparables para identificar degradaciones y apoyar decisiones de optimización, sin cuantificar ahorros de tiempo."
    ],
    "stack": [
      "SQL",
      "Microsoft Excel",
      "VBA",
      "Microsoft Power BI",
      "Nokia NetAct",
      "Huawei U2000"
    ],
    "status": "Actividades ejecutadas",
    "company": "PATH S.A.",
    "period": "Jun 2016 - Jul 2017",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-24",
    "experienceId": "path-rf-network-performance",
    "title": "RF y postprocesamiento de redes móviles",
    "summary": "Evaluar cobertura, calidad e interferencia de redes 2G, 3G y 4G durante integración, migración y optimización de infraestructura.",
    "points": [
      "Ejecución de drive tests, postprocesamiento de mediciones y análisis de indicadores de desempeño.",
      "Elaboración y entrega de reportes técnicos de medición y validación a clientes y equipos de red.",
      "Evidencia técnica para analizar el desempeño de la red y orientar acciones de optimización."
    ],
    "stack": [
      "TEMS",
      "Nemo",
      "Actix Analyzer",
      "MapInfo",
      "Microsoft Excel"
    ],
    "status": "Actividades ejecutadas",
    "company": "PATH S.A.",
    "period": "Oct 2012 - Dic 2015",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-25",
    "experienceId": "osc-rf-engineer",
    "title": "Benchmarking y Postprocesamiento de Redes Móviles",
    "summary": "Comparar el desempeño de redes móviles mediante mediciones RF, postprocesamiento y análisis georreferenciado.",
    "points": [
      "Drive tests y mediciones street-by-street; postprocesamiento de KPIs, throughput, handovers, señalización y tráfico; elaboración de mapas.",
      "Recolección de información en campo, elaboración de reportes comparativos y mapas; validaciones postintegración junto con equipos Nokia y Huawei.",
      "Disponibilidad de información técnica procesada para comparar redes y detectar oportunidades de mejora, sin métricas de impacto histórico."
    ],
    "stack": [
      "TEMS",
      "Nemo",
      "Actix Analyzer",
      "WindCatcher",
      "MapInfo",
      "Microsoft Excel"
    ],
    "status": "Actividades ejecutadas",
    "company": "OSC Top Solutions Group",
    "period": "Oct 2010 - Dic 2011",
    "tags": [
      "project-matrix-v22"
    ]
  }
];
