/**
 * Portfolio Data Configuration
 *
 * Edit this file to update portfolio content without touching component code.
 */
import { calculateExperience, calculateDuration } from "../lib/utils";

// ─── Personal Information ───────────────────────────────────────────────────
export const personalInfo = {
  name: "JEEVENTHIRAN V",
  title: "Senior Java Full Stack Web Developer",
  location: "Chennai, Tamil Nadu, India",
  email: "vjeeventhiran01@gmail.com",
  tagline:
    "Architecting enterprise-grade financial systems for India's leading BFSI institutions.",
  about:
    "Senior Java Full Stack Developer with " +
    calculateExperience() +
    " of hands-on experience engineering mission-critical applications for India's top BFSI clients — ICICI Home Finance, TVS Credit, Centrum Unity, and Chola SCF. I specialize in secure, high-performance backend systems built on Java, Spring Boot, and Spring Security (JWT/RBAC), backed by optimized MS SQL Server databases with stored-procedure-level tuning that has delivered 30% query performance gains. I've owned end-to-end integration of 10+ fintech APIs spanning credit scoring, KYC/OCR, e-sign, and payment gateways — implementing AES-256 encryption and concurrent multithreading (ThreadPoolExecutor) to keep enterprise workflows reliable at scale.",

  profilePhoto: "/src/assets/profile-photo.jpg",

  social: {
    linkedin: "https://www.linkedin.com/in/jeeventhiranv",
    github: "https://github.com/jeeventhiranv",
    email: "mailto:vjeeventhiran01@gmail.com",
  },

  rotatingTitles: [
    "Senior Java Full Stack Developer",
    "Spring Boot & Security Architect",
    "BFSI Domain Expert",
    "Backend Performance Engineer",
    "API Integration Specialist",
  ],
};

// ─── Technical Skills ───────────────────────────────────────────────────────
export const technicalSkills = {
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 92 },
      { name: "Spring MVC", level: 90 },
      { name: "Spring Security — JWT & RBAC", level: 88 },
      { name: "RESTful Web Services", level: 92 },
      { name: "Concurrent Programming (ThreadPoolExecutor)", level: 82 },
      { name: "Maven", level: 85 },
    ],
  },
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript / jQuery", level: 88 },
      { name: "JSP", level: 85 },
      { name: "HTML5 / CSS3", level: 88 },
      { name: "React (Basics)", level: 55 },
    ],
  },
  database: {
    title: "Database & Query Engineering",
    skills: [
      { name: "MS SQL Server", level: 92 },
      { name: "Stored Procedures", level: 88 },
      { name: "Query Optimization & Indexing", level: 88 },
      { name: "Database Schema Design", level: 82 },
    ],
  },
  tools: {
    title: "Tools & Platforms",
    skills: [
      { name: "GitLab — Version Control & CI/CD", level: 82 },
      { name: "Azure DevOps", level: 80 },
      { name: "Joget Workflow", level: 78 },
      { name: "Postman", level: 90 },
      { name: "Apache Tomcat", level: 85 },
      { name: "Apache JMeter", level: 78 },
      { name: "Eclipse IDE", level: 85 },
    ],
  },
  integrations: {
    title: "Third-Party & FinTech API Integrations",
    skills: [
      "Perfios",
      "TransUnion CIBIL",
      "Karza OCR",
      "Hunter",
      "Leegality (e-Sign)",
      "Paytm",
      "Paynimo",
      "Highmark",
      "Finfort",
      "Astute",
      "OneMoney",
    ],
  },
};

// ─── Work Experience ────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    company: "Uncia Technologies Pvt. Ltd.",
    role: "Senior Java Full Stack Web Developer",
    location: "Chennai, Tamil Nadu",
    companyWebsite: "https://www.uncia.ai/",
    startDate: "2021-08-12",
    endDate: null, // null = currently working
    duration: calculateDuration("2021-08-12"),
    responsibilities: [
      {
        title: "Loan Sanction Workflow (LSW) Development",
        description:
          "Engineered core modules of ICICI Home Finance's large-scale LSW platform — covering loan application processing, multi-stage sanction workflows, document verification, and customer servicing for 10,000+ monthly transactions.",
      },
      {
        title: "Security Architecture & Encryption",
        description:
          "Designed JWT-based authentication with RBAC authorization using Spring Security, protecting REST APIs across multiple user roles. Applied AES-256 encryption for all API request/response payloads and thread-safe file handling via ReentrantLock.",
      },
      {
        title: "Concurrent & Multithreaded Processing",
        description:
          "Implemented ThreadPoolExecutor for concurrent background processing and Spring cron schedulers with retry mechanisms, improving throughput of batch operations and scheduled API executions.",
      },
      {
        title: "Database Performance Engineering",
        description:
          "Designed and optimized MS SQL Server stored procedures, applied strategic indexing, and refactored backend logic — achieving 30% reduction in query response times across critical loan processing operations.",
      },
      {
        title: "Third-Party FinTech API Integration",
        description:
          "Owned end-to-end integration of 10+ fintech APIs including TransUnion CIBIL, Karza OCR, Leegality e-sign, Paytm, Paynimo, Perfios, and OneMoney — managing full technical and functional flow.",
      },
      {
        title: "Joget Workflow Customization",
        description:
          "Customized Joget Workflow for dynamic form-based business processes, role-based routing, and audit trail management aligned with BFSI compliance and regulatory requirements.",
      },
    ],
    achievements: [
      "Delivered enterprise solutions for ICICI Home Finance, Centrum Unity, TVS Credit & Chola SCF",
      "Achieved 30% backend performance improvement via SQL tuning and code refactoring",
      "Integrated 10+ third-party fintech APIs with complete end-to-end ownership",
      "Implemented AES-256 encryption & JWT/RBAC — zero production security incidents",
      "Built Spring schedulers with retry logic, improving workflow automation reliability",
      "Received 3 consecutive awards including CTO-level recognition from ICICI Home Finance",
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
// Array order is REVERSED on display — put earliest/least-prominent first.
// Display order: ICICI → Centrum → Chola → LedgerMate → Portfolio
export const projects = [
  // ── 5th displayed (last in array after reverse) ──────────────────
  {
    id: 5,
    title: "Personal Portfolio Website — Jeeventhiran V",
    category: "Personal Branding / Developer Portfolio",
    description:
      "A modern, interactive portfolio website built to showcase my professional journey, technical expertise, and client projects. Designed with clean architecture, seamless animations, and dynamic content management — reflecting my skills in React, TypeScript, and UI/UX design.",

    preview: "./projects/portfolio-preview.png",
    live: "https://jeeventhiranv.github.io/Jeeventhiran",
    source: "https://github.com/JeeventhiranV/Jeeventhiran",

    keyFeatures: [
      "Clean, scalable React + TypeScript architecture with modular components",
      "Dynamic sections: About, Skills, Experience, Projects, Awards & Contact",
      "Editable data structure for easy content updates via a single config file",
      "Dark/Light theme toggle with persistent user preference via Context API",
      "Animated transitions and scroll reveals using Framer Motion",
      "Responsive and accessible design optimized for all devices",
      "Automated GitHub Actions CI/CD deployment to GitHub Pages",
    ],

    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      utilities: ["React Hook Form", "Lucide Icons", "shadcn/ui"],
      deployment: ["GitHub Pages"],
      tools: ["Vite", "Git", "GitHub Actions"],
    },

    impact: [
      "Created a premium digital identity that communicates seniority and domain expertise",
      "Improved recruiter engagement with an interactive, content-rich portfolio",
      "Enhanced maintainability with modular, clean-architecture React structure",
      "Built reusable UI components to accelerate future project development",
    ],

    responsibilities: [
      "Architected the React-based application with reusable UI components",
      "Implemented responsive layouts using Tailwind CSS and Flex/Grid systems",
      "Added interactive animations and transitions with Framer Motion",
      "Developed dark/light theme persistence using React Context and localStorage",
      "Optimized build for GitHub Pages deployment with automated CI/CD",
      "Ensured accessibility, performance optimization, and SEO enhancements",
    ],
  },

  // ── 4th displayed ────────────────────────────────────────────────
  {
    id: 4,
    title: "LedgerMate — Offline-First Personal Finance Tracker (PWA)",
    category: "Personal Finance Web Application",
    description:
      "LedgerMate is an offline-first personal finance tracker that helps users manage daily income and expenses securely, with no cloud dependency. Designed with a modern UI, smooth animations, and voice recognition — it works seamlessly even without internet access.",

    preview: "./projects/ledgermate-preview.png",
    live: "https://jeeventhiranv.github.io/LedgerMate",
    source: "https://github.com/JeeventhiranV/LedgerMate",

    keyFeatures: [
      "Voice recognition for hands-free expense entry",
      "Offline data storage using IndexedDB — no cloud dependency",
      "Interactive charts powered by Chart.js for income/expense trends",
      "Category-based transaction management with filters",
      "Export and import data functionality for backups",
      "Progressive Web App (PWA) with install-on-device option",
      "Dark and light theme support for better user experience",
    ],

    techStack: {
      frontend: ["HTML5", "Tailwind CSS", "JavaScript", "Chart.js"],
      storage: ["IndexedDB (Client-side)"],
      architecture: ["PWA", "Service Workers"],
      tools: ["Vite", "GitHub Pages"],
    },

    impact: [
      "Achieved 100% offline functionality and PWA installability",
      "Zero data loss with persistent offline IndexedDB storage",
      "Enhanced financial insight through interactive Chart.js visualizations",
      "Empowered users to track finances without any backend infrastructure",
    ],

    responsibilities: [
      "Developed the complete frontend and offline storage logic",
      "Implemented IndexedDB for client-side data persistence",
      "Built interactive charts with Chart.js and dynamic data updates",
      "Designed responsive layouts using Tailwind CSS",
      "Integrated PWA service workers for offline and installable features",
      "Optimized UI/UX with animations and accessibility enhancements",
    ],
  },

  // ── 3rd displayed ────────────────────────────────────────────────
  {
    id: 3,
    title: "Chola SCF — KYC OCR Automation Module",
    category: "FinTech — KYC Automation",
    description:
      "Automated KYC verification module for Chola SCF using OCR technology to extract and validate customer identity data from uploaded documents — eliminating manual processing and significantly reducing loan onboarding turnaround time.",

    preview: "",
    live: "",
    source: "",

    keyFeatures: [
      "Automated PAN, Aadhaar, and Driving Licence data extraction via Karza OCR APIs",
      "Secure REST endpoints for document upload and OCR processing pipeline",
      "Cross-validation logic matching OCR-extracted data against existing customer profiles",
      "Structured KYC validation response with error classification",
      "Full end-to-end automation — zero manual intervention in onboarding flow",
    ],

    techStack: {
      backend: ["Java", "Spring MVC", "REST APIs"],
      database: ["MS SQL Server"],
      integrations: ["Karza OCR", "KYC/Identity APIs"],
      server: ["Apache Tomcat"],
    },

    impact: [
      "Eliminated manual KYC processing overhead entirely",
      "Significantly reduced loan onboarding turnaround time",
      "Improved data accuracy via automated cross-validation against customer profiles",
      "Reduced human error in identity verification to near zero",
    ],

    responsibilities: [
      "Integrated Karza OCR APIs for PAN, Aadhaar, and Driving Licence extraction",
      "Developed secure REST endpoints for document upload and processing pipeline",
      "Implemented cross-validation logic for OCR-extracted vs. profile data accuracy",
      "Designed structured KYC response format for downstream system consumption",
      "Collaborated with client teams to validate automation accuracy thresholds",
    ],
  },

  // ── 2nd displayed ────────────────────────────────────────────────
  {
    id: 2,
    title: "Centrum Unity — Loan Origination & Workflow Platform",
    category: "Enterprise — Loan Origination System",
    description:
      "Workflow-driven Loan Origination System (LOS) for Centrum Unity supporting eligibility checks, rule-based routing, and multi-level approval workflows. Contributed as Technical Consultant responsible for server provisioning, backend enhancement, and compliance-driven rule-engine updates.",

    preview: "",
    live: "",
    source: "",

    keyFeatures: [
      "Multi-level approval workflow engine with role/permission management",
      "Rule-based eligibility determination and compliance-driven routing",
      "Loan initiation module with dynamic form handling and validations",
      "SQL-optimized backend for fast transaction processing",
      "Third-party verification service integration for identity validation",
    ],

    techStack: {
      backend: ["Java", "Spring MVC"],
      frontend: ["JavaScript", "jQuery", "JSP"],
      database: ["MS SQL Server"],
      server: ["Apache Tomcat"],
    },

    impact: [
      "Reduced average loan transaction processing time through SQL and backend optimization",
      "Ensured compliance with regulatory eligibility rules through rule-engine updates",
      "Improved user reliability via enhanced jQuery form validations",
      "Delivered server infrastructure setup and environment configuration from scratch",
    ],

    responsibilities: [
      "Provisioned server infrastructure and configured deployment environment",
      "Enhanced loan initiation modules and multi-level approval workflow routing",
      "Updated rule-engine configurations per regulatory and compliance requirements",
      "Optimized SQL queries and backend processing logic for transaction throughput",
      "Improved UI form validations and client-side handling using jQuery",
      "Coordinated with third-party integration teams to connect verification services",
    ],
  },

  // ── 1st displayed (last in array → shown first after reverse) ────
  {
    id: 1,
    title: "ICICI Home Finance — Loan Sanction Workflow (LSW)",
    category: "Enterprise Financial Platform — BFSI",
    description:
      "Large-scale Loan Sanction Workflow platform for ICICI Home Finance managing the end-to-end home loan lifecycle: application intake, multi-stage sanction workflows, document verification, KYC automation, credit scoring, and customer servicing. A mission-critical system processing 10,000+ loan applications monthly across production environments.",

    preview: "./projects/home-loan-preview.png",
    live: "",
    source: "",

    keyFeatures: [
      "End-to-end loan sanction workflow with configurable multi-stage approvals",
      "AES-256 encrypted API communication and thread-safe file handling (ReentrantLock)",
      "JWT-based authentication with RBAC authorization via Spring Security",
      "Integrated TransUnion CIBIL, Karza OCR, Leegality e-sign, and Paytm/Paynimo",
      "Spring-based cron schedulers with retry logic for automated API executions",
      "Admin panel: status tracking, customer management, and audit trail",
      "JVM memory optimization and concurrent batch processing via ThreadPoolExecutor",
    ],

    techStack: {
      backend: ["Java", "Spring Boot", "Spring MVC", "Spring Security"],
      frontend: ["JavaScript", "jQuery", "JSP", "HTML5", "CSS3"],
      database: ["MS SQL Server"],
      integrations: [
        "TransUnion CIBIL",
        "Karza",
        "Leegality",
        "Paytm",
        "Paynimo",
        "Perfios",
        "Hunter",
        "Highmark",
        "OneMoney",
      ],
    },

    impact: [
      "Processed 10,000+ loan applications monthly in production",
      "Achieved 30% backend performance improvement via SQL tuning and code refactoring",
      "Reduced application processing time by 40% through workflow automation",
      "Maintained 99.5%+ uptime across UAT, staging, and production environments",
      "Recognized by ICICI Home Finance CTO for 3 consecutive years of exemplary delivery",
    ],

    responsibilities: [
      "Developed and enhanced core LSW modules: Sanction Workflow, Status Tracking, Admin Panel",
      "Implemented AES-256 encryption for API payloads and ReentrantLock for file handling",
      "Built REST APIs for seamless UI-backend orchestration and third-party integration",
      "Designed and optimized MS SQL Server stored procedures with strategic indexing",
      "Implemented JWT/RBAC with Spring Security across all REST endpoints",
      "Conducted load and stress testing using Apache JMeter for peak concurrency validation",
    ],
  },
];

// ─── Awards & Recognition ────────────────────────────────────────────────────
// Display order (after reverse): ICICI Certificate → Emerging Champion → Outstanding Rookie
export const awards = [
  {
    id: 1,
    title: "Outstanding Rookie Award",
    organization: "Uncia Technologies Pvt. Ltd.",
    year: "2021 – 2022",
    description:
      "Awarded for exceeding performance expectations during the first year — demonstrating exceptional learning speed, technical aptitude, and measurable impact on project delivery.",
    icon: "star",
  },
  {
    id: 2,
    title: "Emerging Champion of the Year",
    organization: "Uncia Technologies Pvt. Ltd.",
    year: "2023 – 2024",
    description:
      "Recognized for exceptional problem-solving, technical leadership, and outstanding contributions to key projects — driving both client satisfaction and internal engineering excellence.",
    icon: "trophy",
  },
  {
    id: 3,
    title: "Certificate of Appreciation (3 Consecutive Years)",
    organization:
      "ICICI Home Finance — Mr. Amit Bhatia (CTO) & Mr. Gaurav Kalyankar (Head-BT)",
    year: "2022 – 2025",
    description:
      "Presented by ICICI Home Finance's CTO and Head of Business Technology for consistent delivery of high-quality outputs, timely support, and exemplary service over 3 consecutive years on the Loan Sanction Workflow platform.",
    icon: "award",
  },
];

// ─── Education ───────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Bharathiyar University",
    location: "Erode, Tamil Nadu",
    duration: "2018 – 2021",
    cgpa: "7.2 / 10.0",
    highlights: [
      "Focused on Data Structures, Algorithms, and Database Systems",
      "Completed projects in Java, Web Development, and DBMS",
      "Active participant in technical workshops and coding competitions",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Higher Secondary School",
    location: "Gobichettipalayam, Erode",
    duration: "2016 – 2018",
    cgpa: "7.4 / 10.0",
    highlights: [
      "Computer Science stream with strong Mathematics foundation",
      "Foundation in logical reasoning and computer fundamentals",
    ],
  },
];

// ─── Current Activities / Timeline ──────────────────────────────────────────
export const currentActivities = [
  {
    id: 1,
    status: "active",
    title: "Open to New Opportunities",
    description:
      "Actively exploring senior roles in Java Full Stack / BFSI / FinTech product companies and MNCs",
    date: "Current",
  },
  {
    id: 2,
    status: "learning",
    title: "Exploring Microservices Architecture",
    description:
      "Deep-diving into Spring Boot microservices, Docker, and distributed system patterns",
    date: "Ongoing",
  },
  {
    id: 3,
    status: "completed",
    title: "ICICI Home Finance — Certificate of Appreciation",
    description:
      "Recognized by CTO for 3 consecutive years of exemplary delivery (2022–2025)",
    date: "2025",
  },
  {
    id: 4,
    status: "completed",
    title: calculateExperience() + " Professional Milestone",
    description:
      "Completed " +
      calculateExperience() +
      " of enterprise Java full-stack development at Uncia Technologies",
    date: "2026",
  },
];

// ─── Activity Feed ────────────────────────────────────────────────────────────
// Array order is REVERSED on display — put oldest first.
export const feedActivities = [
  {
    id: 1,
    type: "achievement",
    title: "Emerging Champion of the Year — 2023-24",
    description:
      "Honored with Emerging Champion of the Year award for exceptional problem-solving, technical leadership, and measurable impact on key projects at Uncia Technologies.",
    date: "2024-03-15",
    tags: ["Award", "Recognition", "Career Milestone"],
    link: "",
  },
  {
    id: 2,
    type: "work",
    title: "Delivered Centrum Unity — Loan Origination Platform",
    description:
      "Completed engagement as Technical Consultant on Centrum Unity's LOS — enhanced workflow routing, optimized SQL performance, and updated rule-engine configurations for compliance.",
    date: "2025-06-20",
    tags: ["Centrum Unity", "LOS", "Java", "Spring MVC", "MSSQL"],
    link: "",
  },
  {
    id: 3,
    type: "coding",
    title: "Implemented AES-256 Encryption & JWT/RBAC Security",
    description:
      "Built comprehensive security layer for ICICI HFC APIs: AES-256 payload encryption, JWT-based auth with Spring Security, and granular RBAC access control across all endpoints.",
    date: "2025-09-10",
    tags: ["Spring Security", "JWT", "AES-256", "RBAC", "Java"],
    link: "",
  },
  {
    id: 4,
    type: "work",
    title: "Delivered Chola SCF — KYC OCR Automation Module",
    description:
      "Integrated Karza OCR APIs to automate PAN, Aadhaar, and DL extraction — eliminating manual KYC processing and significantly reducing loan onboarding turnaround time for Chola SCF.",
    date: "2025-11-15",
    tags: ["Chola SCF", "Karza OCR", "KYC", "REST APIs", "Java"],
    link: "",
  },
  {
    id: 5,
    type: "learning",
    title: "Exploring Microservices with Spring Boot & Docker",
    description:
      "Upskilling in microservices architecture patterns: service decomposition, API gateways, Docker containerization, and distributed system resilience with Spring Cloud.",
    date: "2026-03-20",
    tags: ["Spring Boot", "Microservices", "Docker", "Spring Cloud"],
    link: "",
  },
];

// ─── SEO Meta Data ───────────────────────────────────────────────────────────
export const seoData = {
  title:
    "Jeeventhiran V — Senior Java Full Stack Developer | BFSI Expert | Chennai",
  description:
    "Senior Java Full Stack Developer with " +
    calculateExperience() +
    " of BFSI domain experience. Specialist in Spring Boot, Spring Security (JWT/RBAC), MS SQL Server optimization, and FinTech API integrations. Based in Chennai.",
  keywords:
    "Senior Java Developer, Java Full Stack Developer, Spring Boot, Spring Security, JWT, RBAC, AES-256, BFSI, FinTech, Loan Management System, KYC Integration, MS SQL Server, REST API, Chennai, ICICI Home Finance, Jeeventhiran V, Enterprise Java Developer",
  author: "Jeeventhiran V",
  ogImage: "./projects/portfolio-preview.png",
};
