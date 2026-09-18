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
    id: "stolen-devices-modernization",
    experienceId: "movistar-it-services-specialist",
    title: "Stolen Devices / IMEI Platform Modernization",
    summary: "Evolution and modernization of a mission-critical telecommunications platform for stolen-device and IMEI management.",
    points: [
      "Provided technical leadership for the evolution and modernization of the platform, coordinating activities across development, QA, architecture, infrastructure, database, vendor, and business teams.",
      "The solution integrated information from multiple Colombian operators and generated files and reports related to IMEI management and GSMA-related processes.",
      "The platform handled sensitive personal and operational data, requiring validation, traceability, analysis, and stabilization controls during changes.",
      "Participated in functional and technical testing, log analysis, information validation, audits, monitoring, and production stabilization.",
      "Applied Business Intelligence and operational analytics for KPI tracking, traceability, and reporting using Power BI, Excel, and Access."
    ],
    stack: ["Java", "Spring Boot", "Python", "Oracle", "PostgreSQL", "REST APIs", "SQL", "Power BI", "Excel", "Microsoft Access"],
    tags: ["telecommunications", "backend", "data", "application-modernization", "production-support"]
  },
  {
    id: "oracle-postgresql-migration",
    experienceId: "movistar-it-services-specialist",
    title: "Oracle to PostgreSQL Migration",
    summary: "Migration of approximately 500 GB of data from Oracle to PostgreSQL as part of the modernization of a mission-critical enterprise platform.",
    points: [
      "Contributed technically to the migration of approximately 500 GB of data from Oracle to PostgreSQL.",
      "Implemented and validated temporary trigger-based synchronization mechanisms to capture DML changes and preserve data consistency between both databases during the transition.",
      "Synchronization initially operated from Oracle to PostgreSQL and later from PostgreSQL back to Oracle as functional workloads were progressively migrated to the new platform.",
      "Performed data validation and cleansing, auditing, SQL analysis, log analysis, and production stabilization.",
      "Optimized stored procedures, batch processing, and error notification and handling mechanisms associated with the platform."
    ],
    stack: ["Oracle", "PostgreSQL", "SQL", "DML Triggers", "Batch Processing", "Java", "Python"],
    tags: ["database", "migration", "data", "modernization", "backend"]
  },
  {
    id: "scl-decoupling",
    experienceId: "movistar-it-services-specialist",
    title: "Progressive Decoupling and Retirement of the SCL CRM",
    summary: "Progressive modernization focused on decoupling enterprise components from the legacy SCL CRM without interrupting service operations.",
    points: [
      "Participated in a progressive modernization strategy that maintained temporary coexistence between legacy and new components.",
      "The transition progressively moved functional responsibilities to the new platform while preserving operational continuity.",
      "The decoupling process contributed to enabling the later decommissioning of the SCL CRM."
    ],
    stack: ["Oracle", "PostgreSQL", "REST APIs", "SOAP", "ESB"],
    tags: ["legacy-modernization", "architecture", "integration", "migration"]
  },
  {
    id: "argocd-gitops",
    experienceId: "movistar-it-services-specialist",
    title: "Argo CD Implementation and GitOps Practices",
    summary: "Evolution of deployment and operational processes for applications running on Kubernetes.",
    points: [
      "Participated in the implementation of Argo CD for applications deployed on Kubernetes.",
      "Introduced GitOps practices aimed at improving deployment control, traceability, and consistency.",
      "The initiative complemented existing CI/CD processes based on Azure DevOps, Git, and GitHub."
    ],
    stack: ["Argo CD", "Kubernetes", "GitOps", "Azure DevOps", "Git", "GitHub", "CI/CD"],
    tags: ["devops", "gitops", "cloud", "kubernetes"]
  },
  {
    id: "papiros-document-management",
    experienceId: "movistar-it-services-specialist",
    title: "PAPIROS – Corporate Document Management",
    summary: "Technical management of a corporate platform used to store and manage employee-related documentation.",
    points: [
      "Provided technical management for PAPIROS, a platform used to store contracts and employee communications, including salary increases and performance bonuses.",
      "Coordinated technical activities with development and QA teams for support, maintenance, and solution evolution."
    ],
    stack: ["Application Management", "QA Coordination", "Production Support"],
    tags: ["enterprise-applications", "document-management", "application-support"]
  },
  {
    id: "infissa-financial-platform",
    experienceId: "movistar-it-services-specialist",
    title: "INFISSA – Financial Services Platform",
    summary: "Technical and contractual coordination of a financial-services platform used by the company.",
    points: [
      "Served as the contract representative for INFISSA.",
      "Combined contract follow-up with technical coordination, application support, and vendor management."
    ],
    stack: ["Contract Management", "Application Support", "Vendor Management"],
    tags: ["vendor-management", "application-support", "financial-services"]
  },
  {
    id: "datastage-network-traffic",
    experienceId: "movistar-it-services-specialist",
    title: "Inter-network and Intra-network Traffic Processing with IBM DataStage",
    summary: "Processing and analysis of network-traffic information used for operational and regulatory reporting.",
    points: [
      "Worked with IBM DataStage on processes associated with inter-network and intra-network traffic analysis.",
      "The processed information was used in reporting for company operational and regulatory processes."
    ],
    stack: ["IBM DataStage", "Data Processing", "Reporting"],
    tags: ["data-engineering", "telecommunications", "reporting"]
  },
  {
    id: "legacy-integration-modernization",
    experienceId: "movistar-it-services-specialist",
    title: "Enterprise Integration Modernization",
    summary: "Progressive modernization of legacy integrations toward API-based services.",
    points: [
      "Participated in the modernization of Oracle/ESB-based integrations toward REST APIs.",
      "Maintained SOAP interoperability where required by existing enterprise systems."
    ],
    stack: ["REST APIs", "SOAP", "Oracle", "ESB"],
    tags: ["integration", "api", "modernization"]
  },
  {
    id: "two-factor-authentication",
    experienceId: "movistar-it-services-specialist",
    title: "2FA / MFA Authentication Integrations",
    summary: "Integration of stronger authentication mechanisms into enterprise applications.",
    points: [
      "Participated in integrations with two-factor authentication mechanisms for enterprise applications.",
      "Worked on the required connectivity processes using VPNs and internal corporate networks."
    ],
    stack: ["2FA/MFA", "VPN", "Enterprise Integration"],
    tags: ["authentication", "integration", "enterprise-applications"]
  },
  {
    id: "computer-vision-address-validation",
    experienceId: "movistar-it-services-specialist",
    title: "Computer Vision for Address Validation",
    summary: "Application of computer vision to support address validation during fixed-service home installations.",
    points: [
      "Participated in a computer-vision solution used to validate addresses during fixed-service home-installation processes.",
      "The solution supported process automation and improved information quality."
    ],
    stack: ["Computer Vision", "Automation", "Data Quality"],
    tags: ["computer-vision", "automation", "data-quality"]
  },
  {
    id: "subscriber-credit-validation",
    experienceId: "movistar-it-services-specialist",
    title: "Subscriber and Credit-Risk Validation Integrations",
    summary: "Enterprise integrations focused on strengthening validation and authentication processes.",
    points: [
      "Participated in integrations for subscriber validation and credit-risk-related processes.",
      "The initiative strengthened authentication and validation mechanisms used across enterprise applications."
    ],
    stack: ["Enterprise Integration", "APIs"],
    tags: ["enterprise-integration", "validation", "risk"]
  },
  {
    id: "sap-successfactors-integration",
    experienceId: "movistar-it-services-specialist",
    title: "SAP and SuccessFactors Integrations",
    summary: "Integration of internal applications with corporate business-process and talent-management platforms.",
    points: [
      "Participated in integrations between internal applications and SAP and SuccessFactors.",
      "Worked with APIs, corporate connectivity, VPNs, and internal networks in personnel-selection-related processes."
    ],
    stack: ["SAP", "SuccessFactors", "APIs", "VPN"],
    tags: ["enterprise-integration", "hr-systems", "api"]
  }
  ,{
    id: "automated-offer-validator",
    experienceId: "movistar-configuration-specialist",
    title: "Automated Commercial Offer Validator",
    summary: "Automation designed to validate end-to-end commercial offer configuration before production release.",
    points: [
      "Developed an automated validator to verify the consistency of commercial configurations before release.",
      "The solution supported end-to-end validation across platforms and helped reduce configuration errors.",
      "Used automation and data analysis to strengthen pre-production validation activities."
    ],
    stack: ["Python", "SQL", "Excel", "VBA", "CRM", "CBS", "Ericsson Altamira"],
    tags: ["automation", "validation", "billing", "telecommunications"]
  },
  {
    id: "integrated-rent-calculator",
    experienceId: "movistar-configuration-specialist",
    title: "Integrated Rent Calculator",
    summary: "Automation for calculating fixed and mobile service charges while considering tariff variations and taxes.",
    points: [
      "Developed an integrated-rent calculator for fixed and mobile services.",
      "The solution accounted for price variations by socioeconomic stratum and tax breakdowns.",
      "It supported tariff increases and changes associated with UVT."
    ],
    stack: ["Python", "Excel", "VBA", "SQL", "Billing"],
    tags: ["automation", "billing", "pricing", "data"]
  },
  {
    id: "601-dialing-scheme",
    experienceId: "movistar-configuration-specialist",
    title: "601 Dialing Scheme Preparation",
    summary: "Analysis of numbering rules and preparation of Ericsson Altamira changes associated with implementation of the 601 dialing scheme.",
    points: [
      "Analyzed and researched numbering rules configured in Ericsson Altamira.",
      "Participated in preparing the changes required to support implementation of the 601 dialing scheme."
    ],
    stack: ["Ericsson Altamira", "Numbering Rules", "Commercial Configuration"],
    tags: ["telecommunications", "configuration", "numbering"]
  }

  ,{
    id: "grupo-aval-sme-banking-ath",
    experienceId: "solem-support-analyst",
    title: "Grupo Aval Corporate/SME Banking Platform and ATH Integrations",
    summary: "Advanced support and integration of a banking platform used by Grupo Aval's four banks through ATH services.",
    points: [
      "Provided advanced support for the platform used by Banco de Bogotá, Banco Popular, AV Villas, and Banco de Occidente.",
      "Analyzed information flows across bank and ATH integration buses, reviewing SOAP services to locate failures in transaction processing.",
      "Supported bulk file payments, ACH transactions, and administration of permissions, roles, and profiles defined by each bank.",
      "Used Java, Oracle, and SQL for incident diagnosis, transaction validation, and analysis of customer and platform-process information.",
      "Supported deployments and platform changes by performing technical validations and monitoring to preserve operational continuity."
    ],
    stack: ["Java", "Oracle", "SQL", "SOAP", "Web Services", "ATH", "ACH", "JIRA", "Integration Buses"],
    tags: ["banking", "application-support", "enterprise-integration", "production-support"]
  }

  ,{
    id: "claro-4g-kpi-monitoring-automation",
    experienceId: "path-kpi-data-analyst",
    title: "4G/LTE Rollout Tracking and KPI Automation",
    summary: "Analysis and automation supporting Claro's 4G/LTE rollout tracking and mobile-network performance monitoring in Colombia.",
    points: [
      "Supported 4G/LTE rollout tracking through KPI analysis across 2G/GSM, 3G/UMTS, and 4G/LTE technologies.",
      "Developed automated georeferencing calculations to identify areas affected by interference, channel issues, coverage problems, and performance degradation.",
      "Automated follow-up reports in Excel using VBA, including automatic generation of PowerPoint presentations to communicate results and KPI evolution.",
      "Built dashboards and reports with Power BI, Excel, and Microsoft Access to visualize trends, degradations, and network behavior.",
      "Combined SQL, Nokia NetAct and Huawei U2000 data, automation, and visualization to reduce manual effort and improve operational network monitoring."
    ],
    stack: ["SQL", "Nokia NetAct", "Huawei U2000", "4G/LTE", "Network KPIs", "Georeferencing", "Excel", "VBA", "PowerPoint", "Power BI", "Microsoft Access"],
    tags: ["telecommunications", "data-analysis", "network-performance", "automation", "business-intelligence"]
  }

  ,{
    id: "path-rf-postprocessing-network-modernization",
    experienceId: "path-rf-network-performance",
    title: "RF, Post-Processing and Mobile Network Evolution",
    summary: "Participation in 2G, 3G, and 4G/LTE mobile-network migration, implementation, and optimization projects through RF drive testing and post-processing.",
    points: [
      "Participated in site migrations to Huawei equipment, performing drive-test validation and working in the field alongside Huawei engineers during integration, migration, and optimization activities.",
      "Contributed to 4G/LTE implementation and launch projects, including activities related to shared infrastructure between Tigo and Movistar and a 4G project for Avantel.",
      "Performed post-processing and network-performance analysis for a two-year telecommunications project implemented with Nokia technology.",
      "Used TEMS Investigation, TEMS Discovery, and Actix Analyzer to assess coverage, quality, interference, network KPIs, and overall network behavior from field measurements."
    ],
    stack: ["RF Engineering", "Drive Testing", "Post-Processing", "4G/LTE", "TEMS Investigation", "TEMS Discovery", "Actix Analyzer", "Huawei", "Nokia", "Network Optimization"],
    tags: ["telecommunications", "rf-engineering", "network-performance", "4g-lte", "network-optimization"]
  }

  ,{
    id: "osc-claro-mobile-network-benchmarking",
    experienceId: "osc-rf-engineer",
    title: "Claro, Tigo and Movistar Mobile Network Benchmarking",
    summary: "Benchmarking project for Claro in Bogotá comparing voice and data performance across Claro, Tigo, and Movistar networks through field measurements and RF analysis.",
    points: [
      "Participated in comparative measurements of Claro, Tigo, and Movistar networks using multiple devices configured for voice and data scenarios.",
      "Executed call, short-call, web-browsing, and upload/download tests using Sierra Wireless devices as part of the comparative evaluation.",
      "Collected RF measurements and georeferenced data through drive testing and analyzed KPIs, throughput, signaling, traffic, and network events.",
      "Used TEMS, Nemo, Actix Analyzer, Clarify, WindCatcher, MapInfo, and Excel to support technical analysis and result generation."
    ],
    stack: ["RF", "Benchmarking", "Drive Testing", "TEMS", "Nemo", "Actix Analyzer", "Clarify", "WindCatcher", "MapInfo", "Excel", "Network KPIs"],
    tags: ["telecommunications", "rf-engineering", "benchmarking", "network-performance"]
  }

];
