/**
 * Portfolio Data Configuration
 * 
 * This file contains all the data for the portfolio website.
 * Edit this file to update content without touching component code.
 */
// ---- Experience Calculation Function ----
import { calculateExperience,calculateDuration } from "../lib/utils";

// Personal Information 
export const personalInfo = {
  name: "JEEVENTHIRAN V",
  title: "Java Full Stack Web Developer",
  location: "Chennai, Tamil Nadu, India",
  email: "vjeeventhiran01@gmail.com",
  tagline: "Building scalable and efficient Java-based web solutions.",
  about: "Passionate Java Full Stack Web Developer with "+calculateExperience()+" of experience in building enterprise-level web applications. Specialized in Spring MVC, MSSQL, and modern frontend technologies. Committed to delivering high-performance solutions with clean architecture and optimal user experience.",

  // Profile Photo Path (replace with your own photo in src/assets/)
  profilePhoto: "/src/assets/profile-photo.jpg",
  
  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/jeeventhiranv",
    github: "https://github.com/jeeventhiranv",
    email: "mailto:vjeeventhiran01@gmail.com"
  },

  // Rotating titles for hero section
  rotatingTitles: [
    "Java Full Stack Web Developer",
    "Backend Architect", 
    "Problem Solver",
    "API Integration Specialist"
  ]
};

// Technical Skills - Categorized for easy editing
export const technicalSkills = {
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring MVC", level: 90 },
      { name: "Maven", level: 85 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "jQuery", level: 80 },
      { name: "JSP", level: 85 }
    ]
  },
  database: {
    title: "Database Management",
    skills: [
      { name: "MSSQL", level: 90 },
      { name: "Query Optimization", level: 85 },
      { name: "Database Design", level: 80 }
    ]
  },
  tools: {
    title: "Tools & Technologies",
    skills: [
      { name: "Azure DevOps", level: 80 },
      { name: "Postman", level: 90 },
      { name: "Eclipse IDE", level: 85 },
      { name: "Apache Tomcat", level: 85 },
      { name: "JMeter", level: 75 },
      { name: "Git", level: 80 }
    ]
  },
  integrations: {
    title: "Third-Party Integrations",
    skills: [
      "Perfios", "TransUnion CIBIL", "Karza", "Hunter", 
      "Leegality", "Paytm", "Paynimo", "Highmark", 
      "Finfort", "Astute"
    ]
  }
};

// Work Experience
export const experiences = [
  {
    id: 1,
    company: "Uncia Technologies Pvt. Ltd.",
    role: "Senior Technical Developer",
    location: "Chennai, Tamil Nadu",
    companyWebsite: "https://www.uncia.ai/",
    startDate: "2021-08-12",
    endDate: null, // null = currently working
    duration: calculateDuration("2021-08-12"),
    responsibilities: [
      {
        title: "Full-Stack Web Development",
        description:
          "Developed and maintained enterprise Java web applications using Spring MVC, JSP, and MSSQL, serving thousands of users daily.",
      },
      {
        title: "Database Optimization",
        description:
          "Designed complex MSSQL queries and stored procedures, achieving 30% faster response times through strategic indexing and query optimization.",
      },
      {
        title: "API Development & Integration",
        description:
          "Built robust RESTful APIs and integrated 10+ third-party services including payment gateways, KYC verification, and credit scoring systems.",
      },
      {
        title: "Frontend Enhancement",
        description:
          "Enhanced UI using JavaScript and jQuery, improving user experience and reducing load times by 25%.",
      },
      {
        title: "Performance Tuning",
        description:
          "Conducted performance testing with JMeter, optimized caching strategies, and improved scalability.",
      },
    ],
    achievements: [
      "Reduced database query response time by 30%",
      "Integrated 10+ third-party APIs securely",
      "Improved app performance by 25%",
      "Led migration of legacy codebase to modern architecture",
    ],
  } 
];

// Projects
export const projects = [
   {
    id: 1,
    title: "Home Loan Finance Web Application",
    category: "Enterprise Web Application",
    description:
      "Comprehensive loan management system enabling customers to apply for home loans, track application status, and manage their loan lifecycle from application to disbursement.",
    
    preview: "./projects/home-loan-preview.png", // 📸   preview image
    live: "", // 🌍   live project link
    source: "", // 💻   GitHub link

    keyFeatures: [
      "End-to-end loan application workflow with multi-step forms",
      "Real-time application status tracking with notifications",
      "Admin panel for loan approval and management",
      "Integrated EMI calculator with dynamic interest rates",
      "Document verification and e-signature integration",
      "Credit score check integration with CIBIL",
      "Payment gateway integration for processing"
    ],

    techStack: {
      backend: ["Java", "Spring MVC", "MSSQL"],
      frontend: ["JavaScript", "jQuery", "JSP", "HTML5", "CSS3"],
      server: ["Apache Tomcat"],
      integrations: ["TransUnion CIBIL", "Paytm", "Leegality","Karza","Hunter","Perfious","Penydrop","Esign","Highmark","BRE"]
    },

    impact: [
      "Processed 10,000+ loan applications monthly",
      "Reduced application processing time by 40%",
      "Achieved 99.5% uptime",
      "Improved customer satisfaction score by 35%"
    ],

    responsibilities: [
      "Led full-stack development of core features",
      "Designed and optimized database schema",
      "Implemented RESTful APIs for frontend integration",
      "Integrated third-party services for KYC and payments",
      "Conducted performance testing and optimization"
    ]
  },
  {
  id: 2,
  title: "LedgerMate - Offline Finance Tracker (PWA)",
  category: "Personal Finance Web Application",
  description:
    "LedgerMate is an offline-first personal finance tracker that helps users manage daily income and expenses securely. Designed with a modern UI and smooth animations, it works seamlessly even without internet access.",

  preview: "./projects/ledgermate-preview.png",  
  live: "https://jeeventhiranv.github.io/LedgerMate", 
  source: "https://github.com/JeeventhiranV/LedgerMate",  

  keyFeatures: [
    "Voice recognition for hands-free expense Addition",
    "Offline data storage using IndexedDB (no cloud dependency)",
    "Interactive charts powered by Chart.js for income/expense trends",
    "Smooth animations and responsive design using Tailwind CSS",
    "Category-based transaction management with filters",
    "Export and import data functionality for backups",
    "Progressive Web App (PWA) with install-on-device option",
    "Dark and light theme support for better user experience"
  ],

  techStack: {
    frontend: ["HTML5", "Tailwind CSS", "JavaScript", "Chart.js"],
    backend: ["IndexedDB (Client-side Database)"],
    architecture: ["PWA", "Service Workers"],
    tools: ["Vite", "VS Code", "GitHub Pages"]
  },

  impact: [
    "Empowered 10+ personal users to track finances offline",
    "Zero data loss with persistent offline IndexedDB storage",
    "Enhanced visualization for better financial insights",
    "Achieved 100% offline functionality and PWA install support"
  ],

  responsibilities: [
    "Developed the complete frontend and offline storage logic",
    "Implemented IndexedDB for client-side persistence",
    "Built interactive charts with Chart.js and dynamic data updates",
    "Designed responsive layouts using Tailwind CSS",
    "Integrated PWA service workers for offline and installable features",
    "Optimized UI/UX with animations and accessibility enhancements"
  ]
},
{
  id: 3,
  title: "Personal Portfolio Website - Jeeventhiran V",
  category: "Personal Branding / Developer Portfolio",
  description:
    "A modern, interactive portfolio website built to showcase my professional journey, technical expertise, and projects. Designed with a clean architecture, seamless animations, and dynamic content management, it reflects my skills in React, TypeScript, and UI/UX design.",

  preview: "./projects/portfolio-preview.png",  // 📸 replace with actual path in /public or /src/assets
  live: "https://jeeventhiranv.github.io/Jeeventhiran",  // 🌍 your deployed site
  source: "https://github.com/JeeventhiranV/Jeeventhiran",  // 💻 GitHub repo

  keyFeatures: [
    "Clean, scalable React + TypeScript architecture with modular components",
    "Dynamic sections for About, Skills, Experience, Projects, and Contact",
    "Editable data structure for easy content updates via JSON files",
    "Dark/Light theme toggle with persistent user preference using Context API",
    "Toast notifications for user interactions using React Hot Toast",
      "Smooth scroll and section highlight navigation for polished UX",
    "Animated transitions and scroll reveals using Framer Motion",
    "Responsive and accessible design optimized for all devices"
  ],

  techStack: {
    frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    utilities: ["React Hot Toast", "React Hook Form", "Lucide Icons"],
    deployment: ["GitHub Pages"],
    tools: ["Vite", "VS Code", "Git", "GitHub"]
  },

  impact: [
    "Created a personal digital identity showcasing projects and skills effectively",
    "Improved recruiter engagement and visibility with an interactive portfolio design",
    "Enhanced maintainability with modular, clean-architecture React structure",
    "Built reusable UI components to accelerate future project development"
  ],

  responsibilities: [
    "Architected the React-based application with reusable UI components",
    "Implemented responsive, modern layouts using Tailwind CSS and Flex/Grid systems",
    "Added interactive animations and transitions with Framer Motion",
    "Developed dark/light theme persistence using React Context and localStorage",
    "Integrated mail sending API for direct communication via contact form",
    "Optimized build for GitHub Pages deployment with automated CI/CD setup",
    "Ensured accessibility, performance optimization, and SEO enhancements"
  ]
}

  
];

// Awards & Recognition
export const awards = [
 
  {
    id: 2,
    title: "Outstanding Rookie Award",
    organization: "Uncia Technologies Pvt. Ltd.",
    year: "2021-2022", 
    description: "Awarded for exceeding performance expectations during the first year, demonstrating quick learning and significant impact.",
    icon: "star"
  },
   {
    id: 1,
    title: "Emerging Champion of the Year",
    organization: "Uncia Technologies Pvt. Ltd.",
    year: "2023-2024",
    description: "Recognized for exceptional problem-solving abilities, technical excellence, and outstanding contributions to critical projects.",
    icon: "trophy"
  }
 
];

// Education
export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Bharathiyar University",
    location: "Erode, Tamil Nadu",
    duration: "2018 - 2021",
    cgpa: "7.2/10.0",
    highlights: [
      "Focused on Data Structures, Algorithms, and Database Systems",
      "Completed projects in Java, Web Development, and DBMS",
      "Active participant in technical workshops and coding competitions"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Higher Secondary School",
    location: "Gobichettipalayam, Erode",
    duration: "2016 - 2018",
    cgpa: "7.4/10.0",
    highlights: [
      "Computer Science stream",
      "Strong foundation in Mathematics and Computer Science"
    ]
  }
];

// Current Activities / Timeline
export const currentActivities = [
  {
    id: 1,
    status: "active",
    title: "Open to New Opportunities",
    description: "Actively seeking challenging roles in Java Full Stack Development",
    date: "Current"
  },
  {
    id: 2,
    status: "learning",
    title: "Continuous Learning",
    description: "Exploring microservices architecture with Spring Boot and Docker",
    date: "Ongoing"
  },
  {
    id: 3,
    status: "completed",
    title: "Emerging Champion Award",
    description: "Received Emerging Champion of the Year 2023-2024",
    date: "2024"
  },
  {
    id: 4,
    status: "completed",
    title: calculateExperience()+" Milestone",
    description: "Completed "+calculateExperience()+" of professional experience at Uncia Technologies",
    date: "2024"
  }
];

// Feed Activities - Daily Updates & Timeline
// Activity types: "learning", "coding", "achievement", "work", "idea"
export const feedActivities = [
   {
    id: 1,
    type: "achievement",
    title: "Received Emerging Champion Award 2023-24",
    description: "Honored with Emerging Champion of the Year award for exceptional contributions and problem-solving abilities at Uncia Technologies.",
    date: "2024-03-15",
    tags: ["Award", "Recognition", "Career Milestone"],
    link: ""
  }, 
  {
    id: 2,
    type: "work",
    title: "Optimized Database Query Performance",
    description: "Refactored complex MSSQL stored procedures and added proper indexing. Reduced query execution time by 40% for critical operations.",
    date: "2025-10-20",
    tags: ["MSSQL", "Performance", "Database Optimization"],
    link: ""
  },
  {
    id: 3,
    type: "idea",
    title: "Planning Personal Finance Tracker App",
    description: "Conceptualizing a full-stack application for expense tracking and budget management. Tech stack: Spring Boot, React, PostgreSQL.",
    date: "2025-10-18",
    tags: ["Project Idea", "Full Stack", "Spring Boot", "React"],
    link: ""
  }, {
    id: 4,
    type: "coding",
    title: "Building RESTful API with Spring Security",
    description: "Implemented JWT-based authentication and role-based access control. Enhanced API security with custom filters and exception handling.",
    date: "2025-10-25",
    tags: ["Spring Security", "JWT", "REST API", "Java"],
    link: ""
  }  
 
];

// SEO Meta Data
export const seoData = {
  title: "Jeeventhiran V - Java Full Stack Web Developer | Chennai",
  description: "Experienced Java Full Stack Web Developer specializing in Spring MVC, MSSQL, and enterprise web applications. "+calculateExperience()+" building scalable solutions in Chennai.",
  keywords: "Java Developer, Full Stack Developer, Spring MVC, MSSQL, Chennai, Web Development, RESTful APIs, Jeeventhiran V",
  author: "Jeeventhiran V",
  ogImage: "/og-image.jpg"
};