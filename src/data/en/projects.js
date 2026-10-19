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

// Enriched structure that preserves the technical depth of projects and initiatives.
// supportedProjects remains unchanged to preserve compatibility with the current CV/PDF export.
export const projectDetails = [
  {
    "id": "matrix-project-01",
    "experienceId": "movistar-it-services-specialist",
    "title": "Stolen Device Management — Oracle to PostgreSQL Migration",
    "summary": "Migrated the main stolen-device platform data from Oracle to PostgreSQL while preserving operational continuity.",
    "points": [
      "Coordinated the Oracle-to-PostgreSQL migration, development and QA activities, database synchronization, testing, OKR tracking, data validation, and production change approvals within the stolen-device platform.",
      "Migrated approximately 300 GB of core data from an initially assessed 500 GB Oracle footprint, including logs and audit data; performed 42 production Oracle changes and implemented audit and synchronization triggers.",
      "Maintained operational continuity while Oracle and PostgreSQL coexisted."
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
    "status": "Production",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-02",
    "experienceId": "movistar-it-services-specialist",
    "title": "Stolen Device Management — SCL CRM Decoupling",
    "summary": "Progressively decoupled the stolen-device platform from the legacy SCL CRM and its shared data dependencies.",
    "points": [
      "Coordinated development, QA, data-dependency and integration work to decouple the stolen-device platform from the legacy SCL CRM; tracked OKRs and validated changes.",
      "Progressively separated IMEI lookup and registration, integrations, and commercial data access from the legacy CRM by introducing independent components.",
      "Increased platform autonomy and reduced reliance on the legacy CRM."
    ],
    "stack": [
      "Oracle Database",
      "PostgreSQL",
      "Azure Functions",
      "CRM legado",
      "ChatGPT"
    ],
    "status": "Production",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-03",
    "experienceId": "movistar-it-services-specialist",
    "title": "Stolen Device Management — OSB to OpenShift Integration Modernization",
    "summary": "Modernized integration services from Oracle Service Bus to OpenShift while maintaining production operation.",
    "points": [
      "Coordinated integration-layer modernization with development, QA, service-routing configuration, integration testing, and deployment teams; tracked project OKRs and validated changes.",
      "Migrated stolen-device integration services from Oracle Service Bus to Red Hat OpenShift; updated routing to on-premises and Azure Kubernetes services and validated deployments.",
      "Simplified integration flows within the stolen-device scope without claiming company-wide OSB retirement."
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
    "status": "Production",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-04",
    "experienceId": "movistar-it-services-specialist",
    "title": "Stolen Device Management — GSMA Integrations",
    "summary": "Evolved GSMA-related integrations supporting stolen-device information exchange.",
    "points": [
      "Coordinated development and QA to modernize GSMA IMEI batch integrations, replacing direct table access with services running in Azure Kubernetes.",
      "Updated IMEI batch exchange processes, integrated the new service endpoints, tested and supported operational rollout.",
      "Enabled batch processing and reporting through modernized services with fewer direct table dependencies."
    ],
    "stack": [
      "Bash/Shell scripting, procesamiento batch, PostgreSQL, REST APIs, Kubernetes en Azure, Azure DevOps"
    ],
    "status": "Production",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-05",
    "experienceId": "movistar-it-services-specialist",
    "title": "Stolen Device Management — IBM DataStage Migration to PostgreSQL",
    "summary": "Adapted IBM DataStage data processing jobs to operate against PostgreSQL instead of Oracle.",
    "points": [
      "Coordinated changes to IBM DataStage connections and queries from Oracle to PostgreSQL, with development and QA validation, while retaining existing job logic.",
      "Redirected 52 DataStage jobs to PostgreSQL and added processing monitoring tools.",
      "Maintained inter-network and intra-network processing continuity with improved execution tracking."
    ],
    "stack": [
      "Oracle Service Bus (OSB), Red Hat OpenShift, Kubernetes en Azure, Jenkins, Azure DevOps, CI/CD, REST APIs."
    ],
    "status": "Production",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-06",
    "experienceId": "movistar-it-services-specialist",
    "title": "Stolen Device Management — Positive IMEI List Registration",
    "summary": "Evolved the positive IMEI list registration workflow and its supporting services.",
    "points": [
      "Coordinated development, backend/frontend integration, QA, and production deployment of the positive-list IMEI registration flow, including requester identity validation.",
      "Deployed the registration frontend and integrated identity validation, CRM/IVR, and process monitoring.",
      "Enabled IMEI registration for customers with Movistar SIM cards on the modernized platform."
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
    "status": "Production",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-07",
    "experienceId": "movistar-it-services-specialist",
    "title": "Stolen Device Management — Negative IMEI List Frontend",
    "summary": "Enhanced the frontend used to query and register IMEIs in the negative list.",
    "points": [
      "Coordinated implementation of an internal negative-list IMEI frontend with development, backend integration, QA, and deployment.",
      "Deployed the frontend for Fraud and Support users with microservice integration and monitoring.",
      "Improved functional autonomy and reduced legacy CRM dependency without claiming full CRM shutdown."
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
    "status": "Production",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-08",
    "experienceId": "movistar-it-services-specialist",
    "title": "SAGE — SAP Integrations",
    "summary": "Developed SAP SOAP-to-REST integrations within a Java Spring Boot and Angular solution; 14 interfaces were planned. A limited production release occurred before cancellation during certification.",
    "points": [
      "Developed Java/Spring Boot backend components from early project stages, provided technical advice, supported Angular deployments, and proposed organizing SAP interfaces by functional domain.",
      "Built SOAP/REST SAP integration components and supported frontend, infrastructure, and deployment work. One limited production release occurred before cancellation during certification.",
      "Partial delivery with limited production operation; full certification and completion were not achieved."
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
    "status": "Cancelled; limited production release",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-09",
    "experienceId": "movistar-it-services-specialist",
    "title": "Temporary Personnel Management Platform",
    "summary": "Coordinated development and QA for an HR personnel management solution with authentication controls; canceled before production.",
    "points": [
      "Gathered HR requirements, contributed to solution design, coordinated one developer and one QA professional, tracked OKRs, and approved non-production changes.",
      "Developed and tested frontend/backend components, including multifactor authentication, in non-production environments.",
      "Development and QA were completed, but the solution was not released to production due to changed business priorities."
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
    "status": "Cancelled; QA completed; not deployed to production",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-10",
    "experienceId": "movistar-it-services-specialist",
    "title": "SAP SuccessFactors and Payroll",
    "summary": "Supported SAP SuccessFactors and payroll-related application integration and operations.",
    "points": [
      "Monitored batch processing, validated master files, and resolved synchronization incidents.",
      "Processed XML master files to replicate organizational structures into legacy systems.",
      "Supported continuity of organizational data synchronization."
    ],
    "stack": [
      "SAP SuccessFactors",
      "SAP",
      "XML",
      "procesamiento batch",
      "archivos maestros"
    ],
    "status": "Operations / maintenance",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-11",
    "experienceId": "movistar-it-services-specialist",
    "title": "PAPIROS — Document Management Modernization",
    "summary": "Participated in document management application modernization and operational support.",
    "points": [
      "Provided technical coordination with development, QA, and infrastructure during document-management modernization.",
      "Delivered a new Azure-hosted frontend and documented ten backend services, primarily for contract upload and download.",
      "Made the new interface and document-management services available during modernization."
    ],
    "stack": [
      "Java",
      "Microsoft SQL Server",
      "Microsoft Azure",
      ".NET"
    ],
    "status": "Modernization / operations",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-12",
    "experienceId": "movistar-it-services-specialist",
    "title": "INFISA — Contract and Operations Tracking",
    "summary": "Supported INFISA operational and contractual tracking capabilities.",
    "points": [
      "Tracked SLAs, incidents, contract renewal, and specialized vendor support.",
      "Managed contract renewal and monitored support commitments and incident response.",
      "Maintained specialized support and vendor SLA oversight."
    ],
    "stack": [
      "Oracle"
    ],
    "status": "Operations / maintenance",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-13",
    "experienceId": "movistar-it-services-specialist",
    "title": "Computer Vision — Address Validation",
    "summary": "Applied computer vision and document-processing techniques to address validation workflows.",
    "points": [
      "Developed and integrated backend components for extracting and validating addresses from utility-bill images, using document intelligence and computer vision.",
      "Built extraction pilots and later production backend integration for address validation during installation workflows.",
      "Supported field address validation and reduced the need for specialized correction calls, without a documented numerical impact."
    ],
    "stack": [
      "Python, Django, Flask, OpenCV, Java, Azure AI Document Intelligence, REST APIs."
    ],
    "status": "Production",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-14",
    "experienceId": "movistar-it-services-specialist",
    "title": "Cross-Application Argo CD and GitOps Adoption",
    "summary": "Participated in adopting Argo CD and GitOps practices for application deployment and operations.",
    "points": [
      "Participated in adapting deployment processes and existing Azure DevOps pipelines to integrate with Argo CD.",
      "Updated deployment workflows for the team’s microservices to adopt GitOps.",
      "Established a shared GitOps deployment flow within the team."
    ],
    "stack": [
      "Azure DevOps",
      "Argo CD",
      "GitOps",
      "CI/CD",
      "Kubernetes",
      "despliegue de microservicios"
    ],
    "status": "Implemented cross-team initiative",
    "company": "Movistar Colombia",
    "period": "Mar 2022 - May 2026",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-15",
    "experienceId": "movistar-configuration-specialist",
    "title": "SIGMA and Automated Commercial Offer Validator",
    "summary": "Supported commercial-offer configuration, validation and process automation.",
    "points": [
      "Shared SQL Server administration for SIGMA, monitored certifications, and validated commercial offers.",
      "Integrated an offer validator with SIGMA, commercial systems, and CBS to support configuration review.",
      "Improved consistency and traceability of pre-release offer validation without quantified error metrics."
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
    "status": "Implemented / operational",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-16",
    "experienceId": "movistar-configuration-specialist",
    "title": "Integrated Revenue Calculator — Movistar Fixed and Mobile Plans",
    "summary": "Implemented calculation support for integrated fixed and mobile plan revenues.",
    "points": [
      "Developed automation and validated commercial rules, rental charges, and tax parameters.",
      "Implemented an integrated recurring-charge calculator and supported annual tariff adjustments related to UVT.",
      "Improved pre-release review of charges and tariffs without claiming a measured error reduction."
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
    "status": "Implemented",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-17",
    "experienceId": "movistar-configuration-specialist",
    "title": "Billing Configuration Validation Automation",
    "summary": "Automated billing configuration checks and operational validations.",
    "points": [
      "Designed and developed a validation tool using Access, VBA, and SQL Server to analyze recurring charges, taxes, and UVT.",
      "Replaced repetitive SQL queries and manual Excel searches with automated checks.",
      "Standardized validation and supported faster configuration incident analysis, without documented MTTR metrics."
    ],
    "stack": [
      "Microsoft SQL Server",
      "SQL",
      "Microsoft Excel",
      "Microsoft Access",
      "VBA",
      "CRM/CBS"
    ],
    "status": "Implemented",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-18",
    "experienceId": "movistar-configuration-specialist",
    "title": "601 Area Code Migration Preparation",
    "summary": "Prepared systems and validations for the 601 dialing-code change.",
    "points": [
      "Configured numbering rules in the rating system and validated compatibility with mobile services in coordination with PCRF and Altamira support.",
      "Adapted rating rules for the 601 dialing scheme.",
      "Prepared the rating platform for the new dialing scheme; exact implementation date is not documented."
    ],
    "stack": [
      "Oracle Database",
      "SQL",
      "sistemas de tarificación Ericsson Altamira,"
    ],
    "status": "Implemented; exact date not documented",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-19",
    "experienceId": "movistar-configuration-specialist",
    "title": "Unlimited Plans for Movistar",
    "summary": "Supported commercial configuration for Movistar unlimited-plan offerings.",
    "points": [
      "Configured charging parameters and traffic groups in Ericsson Altamira according to commercial offer rules.",
      "Set up rules distinguishing direct mobile browsing from Wi-Fi sharing and tethering under plan conditions.",
      "Technically enabled the B2C unlimited offer under its commercial restrictions."
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
    "status": "Implemented",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-20",
    "experienceId": "movistar-configuration-specialist",
    "title": "Prepaid Product Initiatives",
    "summary": "Participated in the configuration and validation of prepaid product initiatives.",
    "points": [
      "Configured prepaid offers, provisioning, top-up and charging parameters; performed pre-release validations.",
      "Implemented commercial configurations across MTH, TIAXA, and Ericsson Altamira and supported new prepaid products through Remedy cases.",
      "Technically enabled prepaid product launches and commercial changes."
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
    "status": "Implemented initiatives",
    "company": "Movistar Colombia",
    "period": "Oct 2018 - Mar 2022",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-21",
    "experienceId": "teka-l3-support",
    "title": "GRETA — New Commercial System",
    "summary": "Provided implementation and production support for the GRETA commercial platform.",
    "points": [
      "Provided level-three support, incident diagnosis and root cause analysis, Oracle/SQL queries, Python and Excel/VBA analysis automation, and coordination with Huawei teams.",
      "Supported implementation windows, incidents and changes; prepared configuration templates for execution by responsible teams.",
      "Supported operational stability and technical incident resolution or escalation."
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
    "status": "Implementation / production support",
    "company": "Teka Services S.A.S.",
    "period": "Sep 2017 - Abr 2018",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-22",
    "experienceId": "solem-support-analyst",
    "title": "Grupo Aval / ATH Banking Platform",
    "summary": "Supported a production banking platform and integrations across Grupo Aval and ATH.",
    "points": [
      "Provided L2/L3 support, transaction analysis, SQL queries, SOAP diagnostics, incident management and deployment assistance.",
      "Handled incidents, documentation, escalation and 24/7 operational changes.",
      "Supported critical banking-service continuity and change traceability without claiming availability percentages."
    ],
    "stack": [
      "Java",
      "Oracle Database",
      "SQL",
      "SOAP",
      "Web Services",
      "Jira"
    ],
    "status": "Production operations",
    "company": "SOLEM",
    "period": "Abr 2018 - Oct 2018",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-23",
    "experienceId": "path-kpi-data-analyst",
    "title": "4G/LTE Rollout and KPI Automation",
    "summary": "Analyzed 4G/LTE rollout indicators and automated KPI reporting.",
    "points": [
      "Extracted and transformed data from network platforms, automated reports, and analyzed performance.",
      "Consolidated KPIs and automated reporting with analytics and BI tools.",
      "Produced more consistent comparative reports to identify degradation and inform optimization, without quantified time savings."
    ],
    "stack": [
      "SQL",
      "Microsoft Excel",
      "VBA",
      "Microsoft Power BI",
      "Nokia NetAct",
      "Huawei U2000"
    ],
    "status": "Activities completed",
    "company": "PATH S.A.",
    "period": "Jun 2016 - Jul 2017",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-24",
    "experienceId": "path-rf-network-performance",
    "title": "Mobile Network RF and Post-Processing",
    "summary": "Performed mobile network RF analysis, drive-test post-processing and performance reporting.",
    "points": [
      "Performed drive tests, post-processed measurements, and analyzed network performance indicators.",
      "Prepared and delivered technical measurement and validation reports to customers and network teams.",
      "Provided evidence for network performance assessment and optimization decisions."
    ],
    "stack": [
      "TEMS",
      "Nemo",
      "Actix Analyzer",
      "MapInfo",
      "Microsoft Excel"
    ],
    "status": "Activities completed",
    "company": "PATH S.A.",
    "period": "Oct 2012 - Dic 2015",
    "tags": [
      "project-matrix-v22"
    ]
  },
  {
    "id": "matrix-project-25",
    "experienceId": "osc-rf-engineer",
    "title": "Mobile Network Benchmarking and Post-Processing",
    "summary": "Performed comparative network benchmarking and post-processing for mobile operators.",
    "points": [
      "Performed drive tests and street-by-street measurements; analyzed throughput, handovers, signaling, traffic, and KPIs; generated maps.",
      "Collected field data, produced comparative reports and maps, and supported post-integration validations with Nokia and Huawei teams.",
      "Provided processed technical information for network benchmarking and improvement analysis, without historical impact metrics."
    ],
    "stack": [
      "TEMS",
      "Nemo",
      "Actix Analyzer",
      "WindCatcher",
      "MapInfo",
      "Microsoft Excel"
    ],
    "status": "Activities completed",
    "company": "OSC Top Solutions Group",
    "period": "Oct 2010 - Dic 2011",
    "tags": [
      "project-matrix-v22"
    ]
  }
];
