/**
 * Portfolio Data Configuration
 * 
 * This file contains all the data for the portfolio website.
 * Edit this file to update content without touching component code.
 */

// Personal Information
export const personalInfo = {
  name: "JEEVENTHIRAN V",
  title: "Java Full Stack Web Developer",
  location: "Chennai, Tamil Nadu, India",
  email: "vjeeventhiran01@gmail.com",
  tagline: "Building scalable and efficient Java-based web solutions.",
  about: "Passionate Java Full Stack Developer with 3.5+ years of experience in building enterprise-level web applications. Specialized in Spring MVC, MSSQL, and modern frontend technologies. Committed to delivering high-performance solutions with clean architecture and optimal user experience.",
  
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
export const experience = {
  company: "Uncia Technologies Pvt. Ltd.",
  role: "Java Developer",
  duration: "August 2021 - Present",
  yearsOfExperience: "4+ years",
  location: "Chennai, Tamil Nadu",
  
  responsibilities: [
    {
      title: "Full-Stack Development",
      description: "Developed and maintained enterprise Java web applications using Spring MVC, JSP, and MSSQL, serving thousands of users daily."
    },
    {
      title: "Database Optimization",
      description: "Designed complex MSSQL queries and stored procedures, achieving 30% faster response times through strategic indexing and query optimization."
    },
    {
      title: "API Development & Integration",
      description: "Built robust RESTful APIs and successfully integrated 10+ third-party services including payment gateways, KYC verification, and credit scoring systems."
    },
    {
      title: "Frontend Enhancement",
      description: "Enhanced user interfaces with JavaScript and jQuery, improving user experience and reducing page load times by 25%."
    },
    {
      title: "Performance Tuning",
      description: "Conducted thorough code reviews, performance testing with JMeter, and implemented caching strategies resulting in improved application scalability."
    },
    {
      title: "Agile Collaboration",
      description: "Collaborated with cross-functional teams using Azure DevOps for project management, ensuring timely delivery of features through sprint-based development."
    }
  ],

  achievements: [
    "Reduced database query response time by 30%",
    "Successfully integrated 10+ third-party services",
    "Improved application performance by 25%",
    "Led migration of legacy codebase to modern architecture"
  ]
};

// Projects
export const projects = [
  {
    id: 1,
    title: "Home Loan Finance Web Application",
    category: "Enterprise Web Application",
    description: "Comprehensive loan management system enabling customers to apply for home loans, track application status, and manage their loan lifecycle from application to disbursement.",
    
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
      integrations: ["TransUnion CIBIL", "Paytm", "Leegality"]
    },
    
    impact: [
      "Processed 10,000+ loan applications",
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
  }
];

// Awards & Recognition
export const awards = [
  {
    id: 1,
    title: "Emerging Champion of the Year",
    organization: "Uncia Technologies Pvt. Ltd.",
    year: "2023-2024",
    description: "Recognized for exceptional problem-solving abilities, technical excellence, and outstanding contributions to critical projects.",
    icon: "trophy"
  },
  {
    id: 2,
    title: "Outstanding Rookie Award",
    organization: "Uncia Technologies Pvt. Ltd.",
    year: "2021-2022", 
    description: "Awarded for exceeding performance expectations during the first year, demonstrating quick learning and significant impact.",
    icon: "star"
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
    title: "4+ Years Milestone",
    description: "Completed 4+ years of professional experience at Uncia Technologies",
    date: "2024"
  }
];

// Feed Activities - Daily Updates & Timeline
// Activity types: "learning", "coding", "achievement", "work", "idea"
export const feedActivities = [
  {
    id: 1,
    type: "learning",
    title: "Exploring Microservices Architecture",
    description: "Deep diving into Spring Boot microservices, Docker containerization, and Kubernetes orchestration. Building a sample project to understand service-to-service communication.",
    date: "2025-10-28",
    tags: ["Spring Boot", "Docker", "Kubernetes", "Microservices"],
    link: "" // Optional: Add external link
  },
  {
    id: 2,
    type: "coding",
    title: "Building RESTful API with Spring Security",
    description: "Implemented JWT-based authentication and role-based access control. Enhanced API security with custom filters and exception handling.",
    date: "2025-10-25",
    tags: ["Spring Security", "JWT", "REST API", "Java"],
    link: ""
  },
  {
    id: 3,
    type: "achievement",
    title: "Completed AWS Cloud Practitioner Course",
    description: "Gained foundational knowledge of AWS services including EC2, S3, RDS, and Lambda. Understanding cloud architecture patterns and best practices.",
    date: "2025-10-22",
    tags: ["AWS", "Cloud Computing", "Certification"],
    link: ""
  },
  {
    id: 4,
    type: "work",
    title: "Optimized Database Query Performance",
    description: "Refactored complex MSSQL stored procedures and added proper indexing. Reduced query execution time by 40% for critical operations.",
    date: "2025-10-20",
    tags: ["MSSQL", "Performance", "Database Optimization"],
    link: ""
  },
  {
    id: 5,
    type: "idea",
    title: "Planning Personal Finance Tracker App",
    description: "Conceptualizing a full-stack application for expense tracking and budget management. Tech stack: Spring Boot, React, PostgreSQL.",
    date: "2025-10-18",
    tags: ["Project Idea", "Full Stack", "Spring Boot", "React"],
    link: ""
  },
  {
    id: 6,
    type: "learning",
    title: "Learning React Hooks & Context API",
    description: "Strengthening frontend skills by building modern React applications. Understanding useState, useEffect, useContext, and custom hooks.",
    date: "2025-10-15",
    tags: ["React", "JavaScript", "Frontend Development"],
    link: ""
  },
  {
    id: 7,
    type: "coding",
    title: "Integrated Razorpay Payment Gateway",
    description: "Successfully integrated Razorpay for secure payment processing in the home loan application. Implemented webhook for payment verification.",
    date: "2025-10-12",
    tags: ["Razorpay", "Payment Gateway", "Integration", "Java"],
    link: ""
  },
  {
    id: 8,
    type: "achievement",
    title: "Received Emerging Champion Award 2023-24",
    description: "Honored with Emerging Champion of the Year award for exceptional contributions and problem-solving abilities at Uncia Technologies.",
    date: "2024-03-15",
    tags: ["Award", "Recognition", "Career Milestone"],
    link: ""
  }
];

// SEO Meta Data
export const seoData = {
  title: "Jeeventhiran V - Java Full Stack Web Developer | Chennai",
  description: "Experienced Java Full Stack Web Developer specializing in Spring MVC, MSSQL, and enterprise web applications. 4+ years building scalable solutions in Chennai.",
  keywords: "Java Developer, Full Stack Developer, Spring MVC, MSSQL, Chennai, Web Development, RESTful APIs, Jeeventhiran V",
  author: "Jeeventhiran V",
  ogImage: "/og-image.jpg"
};
