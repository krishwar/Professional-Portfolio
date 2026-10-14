/**
 * Central portfolio data — generated from Krishwar's resume 
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: "Krishwar V",
  displayName: "Krishwar V",
  firstName: "KRISHWAR",
  seriesTag: "SOFTWARE ENGINEER",
  originalLabel: "A KRISHWAR ORIGINAL",
  role: "Software Developer",

  tagline: [
    "Java & Spring Boot",
    "Web Development",
    "React",
    "Python",

    "Generative AI",
  ],

  intro:
    "I'm a software developer focused on building full-stack applications, scalable SaaS platforms, and intelligent AI-powered solutions. I work with Java, Spring Boot, Python, React, and explore Agentic AI, MCP, and Claude to create practical solutions to real-world problems.",

  location: "Chennai, Tamil Nadu",
  email: "vkrishwar@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/krishwar-v-605042319",
    github: "https://github.com/krishwar",
  },
  resumePdf: "/assets/Resume.pdf",

  portrait: {
    src: "/assets/krishwar-portrait.png",
    srcSet: undefined,
    alt: "Portrait of Krishwar V",
  },

  interests: [
    "Java Development",
    "Full-Stack Development",
    "AI Integration",
    "System Design",
  ],
};

export const education = [
  {
    school: "Panimalar Institute of College",
    place: "Chennai",
    degree: "Bachelor of Engineering —Computer Science Engineering.",
    period: "November 2021 – May 2025",
    score: "CGPA 8.53",
  },
  {
    school: "Seventh - Day adventist matriculation higher secondary school.",
    place: "Chennai",
    degree: "PCMCs",
    period: "May 2019 – April 2021",
    score: "Score 491/600",
  },
];

export const experience = [
  {
    company: "Self-Employed",
    role: "Freelance Developer",
    place: "Remote",
    period: "January 2025 – September 2025",
    points: [
      "Completed three freelance projects: a corporate business website, a wedding invitation portal, and a café membership platform.",
      "Built responsive web applications using React, TypeScript, Firebase, Bootstrap, and Tailwind CSS.",
      "Developed features including shopping carts, billing, inventory updates, customer check-ins, and loyalty rewards.",
      "Delivered functional applications with a focus on usability, quality, and client requirements.",
    ],
  },
  {
    company: "Zrae Global",
    role: "Research & Development Intern",
    place: "Chennai, India",
    period: "July 2024 – January 2025",
    points: [
      "Developed a dynamic and responsive corporate website from planning through deployment.",
      "Managed project execution and client communication.",
      "Researched reverse engineering techniques.",
      "Analyzed malware behavior to support system security improvements.",
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: "shield" | "flow" | "tenants";
};

export const projects: Project[] = [
  {
    id: "inventory-saas",
    title: "Multi-Tenant SaaS Inventory Management System",
    year: "Featured",
    genre: "SaaS • Full-Stack • Enterprise",

    logline:
      "A multi-tenant SaaS platform bringing inventory, procurement, billing, finance, and business analytics together in one application.",

    stack: [
      "React",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "JPA/Hibernate",
      "REST APIs",
    ],

    build: [
      "Developed a multi-tenant inventory management platform using React, Java Spring Boot, and PostgreSQL.",
      "Implemented product management, inventory tracking, procurement, billing, finance, and analytics dashboards.",
      "Integrated JWT authentication and backend REST APIs to support secure application workflows.",
    ],

    features: [
      "Multi-tenant inventory management",
      "Product and stock tracking",
      "Procurement and stock updates",
      "Billing and sales workflows",
      "Finance and business analytics",
      "JWT authentication and REST APIs",
    ],

    metrics: [
      { value: "6", label: "Core Business Workflows" },
      { value: "Multi-Tenant", label: "SaaS Architecture" },
      { value: "JWT", label: "Secure Authentication" },
    ],
    palette: {
      from: "#04121f",
      via: "#0f4c6e",
      to: "#05080d",
      accent: "#4cc9ff",
    },
    motif: "tenants",
  },

  {
    id: "business-website",
    title: "Business Website Development",
    year: "2024",
    genre: "Web Development • Corporate",

    logline:
      "A responsive corporate website built for Zrae Global to showcase its services, company profile, and engineering expertise.",

    stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "Formspree"],
    build: [
      "Developed a dynamic and responsive corporate website for a research and engineering firm.",
      "Created website sections to communicate company services, mission, expertise, and contact information.",
      "Focused on responsive layouts and compatibility across devices.",
    ],
    features: [
      "Corporate service presentation",
      "Responsive web design",
      "Company information pages",
      "Contact form integration",
    ],
    metrics: [
      { value: "Responsive", label: "Multi-Device Experience" },
      { value: "5+", label: "Core Web Technologies" },
      { value: "End-to-End", label: "Website Development" },
    ],
    palette: {
      from: "#03150f",
      via: "#0d5a40",
      to: "#050a08",
      accent: "#46e3a8",
    },
    motif: "flow",
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    year: "2024",
    genre: "Java • Desktop Application",

    logline:
      "A Java Swing desktop application designed to streamline restaurant operations through object-oriented programming and interactive user interfaces.",

    stack: ["Java", "Java Swing", "OOP"],
    build: [
      "Developed a desktop application using Java Swing to provide a graphical user interface for restaurant operations.",
      "Implemented menu management, order handling, and billing functionality.",
    ],
    features: [
      "Restaurant menu management",
      "Order management",
      "Billing functionality",
      "Java Swing graphical interface",
    ],
    metrics: [
      { value: "3", label: "Core Operations" },
      { value: "Java Swing", label: "Desktop Interface" },
      { value: "OOP", label: "Application Design" },
    ],
    palette: {
      from: "#1c1003",
      via: "#6b3c06",
      to: "#0a0806",
      accent: "#ffb547",
    },
    motif: "flow",
  },

  {
    id: "flappy-bird",
    title: "Flappy Bird Game",
    year: "2023",
    genre: "Java • Game Development",

    logline:
      "A Java-based Flappy Bird game built with Swing and AWT, featuring interactive controls, game-loop logic, and collision detection.",

    stack: ["Java", "Java Swing", "AWT", "OOP"],
    build: [
      "Built a desktop game inspired by Flappy Bird using Java and Swing.",
      "Implemented game animations, obstacle mechanics, and score tracking.",
    ],
    features: [
      "Animated gameplay",
      "Obstacle mechanics",
      "Score tracking",
      "Object-oriented design",
    ],
    metrics: [
      { value: "Real-Time", label: "Gameplay Loop" },
      { value: "Dynamic", label: "Obstacle Mechanics" },
      { value: "Java", label: "Game Development" },
    ],
    palette: {
      from: "#1a0d02",
      via: "#8a4a07",
      to: "#0a0806",
      accent: "#ffb547",
    },
    motif: "flow",
  },
  {
    id: "weather-forecast",
    title: "Real-Time Weather Forecasting Website",
    year: "2023",
    genre: "Frontend • APIs • Web Development",

    logline:
      "A responsive weather application delivering real-time weather information through API integration and a clean, intuitive interface.",

    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    build: [
      "Built a responsive weather forecasting website using HTML, CSS, and JavaScript.",
      "Integrated an external weather API to retrieve and display current weather information.",
    ],
    features: [
      "Real-time weather information",
      "External API integration",
      "Responsive user interface",
    ],
    metrics: [
      { value: "Live", label: "Weather Information" },
      { value: "API", label: "External Data Integration" },
      { value: "Responsive", label: "User Interface" },
    ],
    palette: {
      from: "#04121f",
      via: "#0f4c6e",
      to: "#05080d",
      accent: "#4cc9ff",
    },
    motif: "flow",
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: "research-publication",
    title: "Research Paper Published",
    org: "International Journal of Innovative Research in Technology (IJIRT)",
    detail:
      "Published a research paper titled 'Decentralized Blockchain Based Digital Identity Solution' in Volume 11, Issue 12, May 2025. Registration ID: 179406.",
    laurel: "Research Publication",
    link: "https://drive.google.com/file/d/1xFuraJQe0b2ljsYCefo5XfhcvrbOKcnk/view?usp=drive_link",
  },
  {
    id: "freelance-journey",
    title: "Freelance Developer Journey",
    org: "Self-Employed",
    detail:
      "Completed three freelance projects: a corporate website for Zrae Global, a wedding invitation ordering portal for Dhanalakshmi Cards, and a smart café membership platform for Krown Pass.",
    laurel: "3 Projects Completed",
  },
  {
    id: "academic-distinction",
    title: "First Class with Distinction",
    org: "Panimalar Institute of Technology",
    detail:
      "Completed a Bachelor of Engineering in Computer Science Engineering with First Class with Distinction.",
    laurel: "Academic Achievement",
  },
  {
    id: "developer-community",
    title: "Google Developer Group",
    org: "Panimalar Institute of Technology",
    detail: "Active member of the Google Developer Group club.",
    laurel: "Developer Community",
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: "Infosys Springboard",
    name: "Programming Using Java",
    link: "https://drive.google.com/file/d/1I6NI_0M1oouxefIfWFjBNRziNWEF4Sg4/view?usp=drive_link",
  },
  {
    issuer: "IBM SkillsBuild",
    name: "Journey to Cloud: Envisioning Your Solution",
    link: "https://drive.google.com/file/d/1HstbiImXjJCN3oiaQjeCFTzziL1ThtZu/view?usp=drive_link",
  },
  {
    issuer: "MongoDB University / SmartBridge",
    name: "MongoDB Node.js Developer Path",
    link: "https://drive.google.com/file/d/1ECW4Md3N2LG1rmMkxYM-_hfoCiwvQbMa/view?usp=drive_link",
  },
  {
    issuer: "Infosys Springboard",
    name: "Javascipt",
    link: "https://drive.google.com/file/d/1CgtkNT-aUgkNhM0jj8RK928W3C8Xbgb7/view?usp=drive_link",
  },
  {
    issuer: "IBM SkillsBuild",
    name: "TNSDC – Machine Learning to Generative AI",
    link: "https://drive.google.com/file/d/1xOPQqoOG6zK6fB_DWiYtmR3lGbFAq8td/view?usp=drive_link",
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    subtitle: "The fundamentals",
    skills: [
      { name: "Java", mono: "Jv" },
      { name: "Python", mono: "Py" },
      { name: "JavaScript", mono: "JS" },
      { name: "TypeScript", mono: "TS" },
      { name: "C", mono: "C" },
      { name: "C++", mono: "C+" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "The visual experience",
    skills: [
      { name: "React", mono: "Re" },
      { name: "Angular", mono: "Ng" },
      { name: "HTML5", mono: "H5" },
      { name: "CSS3", mono: "C3" },
      { name: "Tailwind CSS", mono: "Tw" },
      { name: "Bootstrap", mono: "Bs" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "The engine room",
    skills: [
      { name: "Spring Boot", mono: "SB" },
      { name: "Spring Security", mono: "SS" },
      { name: "Hibernate/JPA", mono: "JPA" },
      { name: "Node.js", mono: "Nd" },
      { name: "Express.js", mono: "Ex" },
      { name: "REST APIs", mono: "API" },
      { name: "JWT", mono: "JW" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    subtitle: "Where data lives",
    skills: [
      { name: "PostgreSQL", mono: "PG" },
      { name: "MySQL", mono: "My" },
      { name: "MongoDB", mono: "Mg" },
      { name: "SQL", mono: "SQ" },
      { name: "Firebase", mono: "Fb" },
    ],
  },
  {
    id: "ai",
    title: "AI & GenAI",
    subtitle: "The next frontier",
    skills: [
      { name: "Generative AI", mono: "AI" },
      { name: "LLM", mono: "LLM" },
      { name: "RAG", mono: "RAG" },
      { name: "Agentic AI", mono: "Ag" },
      { name: "MCP", mono: "MCP" },
      { name: "Claude", mono: "Cl" },
      { name: "Ollama", mono: "Ol" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Cloud",
    subtitle: "The production toolkit",
    skills: [
      { name: "Git", mono: "Gt" },
      { name: "GitHub", mono: "Gh" },
      { name: "Docker", mono: "Dk" },
      { name: "Postman", mono: "Pm" },
      { name: "Vercel", mono: "Vc" },
      { name: "Render", mono: "Rd" },
      { name: "ChatGPT", mono: "GPT" },
    ],
  },
  {
    id: "fundamentals",
    title: "CS Fundamentals",
    subtitle: "The foundation",
    skills: [
      { name: "DSA", mono: "DS" },
      { name: "OOP", mono: "OO" },
      { name: "DBMS", mono: "DB" },
      { name: "Operating Systems", mono: "OS" },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */

export const skillEvidence: Record<string, string[]> = {
  Java: [
    "Restaurant Management System",
    "Employee Information Management System",
  ],
  Python: ["AI and Machine Learning projects"],
  JavaScript: ["Weather Forecasting Website", "Google Search Engine Clone"],
  TypeScript: ["Wedding Invitation Portal", "Café Membership Platform"],
  C: ["Programming fundamentals and memory management"],
  "C++": ["Object-oriented programming and STL"],
  React: [
    "Multi-Tenant SaaS Inventory System",
    "Freelance Projects",
    "Component-based UI development",
  ],
  Angular: ["Frontend Development Experience"],
  HTML5: ["Business Website", "Weather Forecasting Website"],
  CSS3: ["Responsive Website Development"],
  Bootstrap: ["Zrae Global Business Website"],
  "Tailwind CSS": ["Wedding Invitation Portal", "Café Membership Platform"],
  "Spring Boot": ["Multi-Tenant SaaS Inventory System"],
  "Spring Security": ["Multi-Tenant SaaS Inventory System"],
  "Hibernate/JPA": [
    "Object-relational mapping",
    "Multi-Tenant SaaS Inventory System",
  ],
  "Node.js": ["MongoDB Node.js Developer Path"],
  "Express.js": ["Backend Development"],
  "REST APIs": ["Multi-Tenant SaaS Inventory System", "API Integration"],
  JWT: ["Token-based authentication and authorization"],
  PostgreSQL: ["Multi-Tenant SaaS Inventory System"],
  MySQL: ["Employee Information Management System"],
  MongoDB: ["MongoDB Node.js Developer Path"],
  SQL: ["Database Development"],
  Firebase: [
    "Wedding Invitation Portal",
    "Café Membership Platform",
    "Cloud data and application services",
  ],
  "Generative AI": ["TNSDC – Machine Learning to Generative AI"],
  "Agentic AI": ["AI agents and multi-step task automation"],
  MCP: ["Connecting AI models with tools and external data"],
  Claude: ["AI-assisted coding, reasoning, and development workflows"],
  ChatGPT: ["AI-assisted coding, learning, and problem-solving"],
  Ollama: ["AI Application Development"],
  LLM: ["Large language models and text generation"],
  RAG: ["Retrieval-augmented generation using external knowledge sources"],
  OpenCV: ["Computer Vision"],
  PyTorch: ["Machine Learning"],
  NumPy: ["Data Processing"],
  Pandas: ["Data Analysis"],
  Git: ["Version Control"],
  GitHub: ["Project Source Code Management"],
  Docker: ["Development and Deployment"],
  Postman: ["REST API Testing"],
  Swagger: ["API Documentation"],
  Vercel: ["Frontend deployment and hosting"],
  Render: ["Cloud deployment for web applications and APIs"],
  DSA: ["Computer Science Fundamentals"],
  OOP: ["Java Development"],
  DBMS: ["Database Management"],
  "Operating Systems": ["Processes, threads, memory, and resource management"],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = {
  from: "#24060b",
  via: "#6e0d1d",
  to: "#09070a",
  accent: "#ff3d5a",
};
const amber: Palette = {
  from: "#1c1003",
  via: "#6b3c06",
  to: "#0a0806",
  accent: "#ffb547",
};
const ocean: Palette = {
  from: "#04121f",
  via: "#0f4c6e",
  to: "#05080d",
  accent: "#4cc9ff",
};
const violet: Palette = {
  from: "#120822",
  via: "#3d1a6e",
  to: "#07060c",
  accent: "#b98bff",
};
const jade: Palette = {
  from: "#03150f",
  via: "#0d5a40",
  to: "#050a08",
  accent: "#46e3a8",
};

export const seasons: Season[] = [
  {
    number: 1,
    title: "The Foundation",
    period: "2021 – 2025",
    synopsis:
      "The journey from learning computer science fundamentals to building practical software applications at Panimalar Institute of Technology.",
    episodes: [
      {
        code: "S01 E01",
        title: "The Engineer",
        description:
          "Completed a Bachelor of Engineering in Computer Science Engineering at Panimalar Institute of Technology, Chennai.",
        tags: ["B.E. Computer Science", "2021 – 2025"],
        runtime: "2021 – 2025",
        palette: amber,
      },
      {
        code: "S01 E02",
        title: "The Problem Solver",
        description:
          "Built a foundation in programming, object-oriented development, data structures, databases, and web technologies.",
        tags: ["Java", "DSA", "DBMS"],
        runtime: "Academic Journey",
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: "Building Real Applications",
    period: "2023 – 2025",
    synopsis:
      "From writing code to solving real-world problems — a season of hands-on development, research, and discovering how software comes together.",
    episodes: [
      {
        code: "S02 E01",
        title: "The Research Intern",
        description:
          "Worked at Zrae Global on a responsive corporate website, project execution, client communication, and research into reverse engineering and malware behavior.",
        tags: ["Zrae Global", "Web Development", "Research"],
        runtime: "July 2024 – January 2025",
        palette: jade,
      },
      {
        code: "S02 E02",
        title: "The Full-Stack Developer",
        description:
          "Worked with frontend interfaces, backend development, database integration, and API-driven applications.",
        tags: ["React", "Java", "Spring Boot"],
        runtime: "Project Development",
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: "The Freelance Chapter",
    period: "2025",
    synopsis:
      "Applied development skills to three freelance projects across corporate websites, online ordering, and café membership services.",
    episodes: [
      {
        code: "S03 E01",
        title: "The Business Builder",
        description:
          "Developed a corporate website for Zrae Global to showcase its services, expertise, and company information.",
        tags: ["HTML", "CSS", "Bootstrap"],
        runtime: "Freelance Project",
        palette: ocean,
      },
      {
        code: "S03 E02",
        title: "The Product Developer",
        description:
          "Created a wedding invitation ordering portal for Dhanalakshmi Cards with categorized designs, a shopping cart, stock updates, and billing.",
        tags: ["React", "TypeScript", "Firebase"],
        runtime: "Freelance Project",
        palette: amber,
      },
      {
        code: "S03 E03",
        title: "The Platform Builder",
        description:
          "Developed a digital café membership platform for Krown Pass with customer check-ins and loyalty features.",
        tags: ["React", "Firebase", "Tailwind CSS"],
        runtime: "Freelance Project",
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: "Engineering a SaaS Product",
    period: "Project Development",
    synopsis:
      "Building a multi-tenant inventory management platform that brings business operations together in one application.",
    episodes: [
      {
        code: "S04 E01",
        title: "The SaaS Builder",
        description:
          "Developed a multi-tenant inventory management system using React, Java Spring Boot, and PostgreSQL.",
        tags: ["React", "Spring Boot", "PostgreSQL"],
        runtime: "Featured Project",
        palette: ocean,
      },
      {
        code: "S04 E02",
        title: "The Backend Developer",
        description:
          "Worked on authentication, REST APIs, product management, procurement, billing, finance, and inventory workflows.",
        tags: ["JWT", "REST APIs", "JPA/Hibernate"],
        runtime: "Featured Project",
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "Research & What's Next",
    period: "2025 – Present",
    synopsis:
      "The story continues with full-stack engineering, published research, and exploration of AI-powered applications, Agentic AI, MCP, and modern developer tools.",
    episodes: [
      {
        code: "S05 E01",
        title: "The Research Author",
        description:
          "Published a research paper titled Decentralized Blockchain Based Digital Identity Solution in IJIRT, Volume 11, Issue 12, May 2025.",
        tags: ["Research Publication", "Blockchain", "Digital Identity"],
        runtime: "May 2025",
        palette: violet,
      },

      {
        code: "S05 E02",
        title: "Bristol Myers Squibb",
        description:
          "A glimpse into software engineering, exploring Python, React, and Generative AI in the healthcare technology space.",
        runtime: "Career Spotlight",
        tags: ["Python", "React", "Generative AI", "AI Engineering"],
        palette: jade,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: "Featured Project",
    title: "Inventory SaaS",
    detail: "React • Spring Boot • PostgreSQL",
    palette: ocean,
  },
  {
    label: "Primary Backend",
    title: "Java & Spring Boot",
    detail: "Backend development and REST APIs",
    palette: amber,
  },
  {
    label: "Research Publication",
    title: "Blockchain Identity",
    detail: "Published in IJIRT • May 2025",
    palette: violet,
  },
  {
    label: "Freelance Portfolio",
    title: "3 Client Projects",
    detail: "Corporate website, ordering portal, café membership",
    palette: jade,
  },
  {
    label: "Frontend Development",
    title: "React & TypeScript",
    detail: "Responsive web applications",
    palette: crimson,
  },
  {
    label: "Database Skills",
    title: "SQL & Databases",
    detail: "PostgreSQL, MySQL, MongoDB",
    palette: ocean,
  },
  {
    label: "Desktop Development",
    title: "Java Swing",
    detail: "Restaurant and employee management applications",
    palette: amber,
  },
  {
    label: "AI & Machine Learning",
    title: "AI Integration",
    detail: "Python and machine learning technologies",
    palette: violet,
  },
  {
    label: "Corporate Development",
    title: "Zrae Global",
    detail: "Research & Development Internship",
    palette: jade,
  },
  {
    label: "Academic Background",
    title: "Computer Science",
    detail: "B.E. • Panimalar Institute of Technology",
    palette: crimson,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: "Education",
    title: "Computer Science Engineer",
    lines: [
      "Panimalar Institute of Technology, Chennai",
      "Bachelor of Engineering · 2021 – 2025",
    ],
    chips: ["B.E. Computer Science"],
  },
  {
    kicker: "Skills",
    title: "Java. React. AI.",
    lines: [
      "Java, Python, JavaScript, TypeScript",
      "React, Spring Boot, SQL, REST APIs",
    ],
    chips: ["Java", "Spring Boot", "React", "Python"],
  },
  {
    kicker: "Experience",
    title: "The Developer Journey",
    lines: [
      "Research & Development Intern at Zrae Global",
      "Freelance development across three client projects",
    ],
    chips: ["Web Development", "Freelancing"],
  },
  {
    kicker: "Featured Project",
    title: "Inventory SaaS",
    lines: [
      "Multi-tenant inventory management platform",
      "Product, procurement, billing, finance, and analytics",
    ],
    chips: ["React", "Spring Boot", "PostgreSQL"],
  },
  {
    kicker: "Research",
    title: "Published Research Paper",
    lines: [
      "Decentralized Blockchain Based Digital Identity Solution",
      "International Journal of Innovative Research in Technology",
    ],
    chips: ["Blockchain", "Digital Identity", "May 2025"],
  },
  {
    kicker: "Freelance Projects",
    title: "Ideas Into Applications",
    lines: [
      "Zrae Global · Dhanalakshmi Cards",
      "Krown Pass · Three completed projects",
    ],
    chips: ["React", "TypeScript", "Firebase"],
  },
  {
    kicker: "Current Focus",
    title: "Building What's Next",
    lines: [
      "Full-stack application development",
      "Backend engineering and AI integration",
    ],
    chips: ["Java", "Full-Stack", "AI"],
  },
];

export type ProfileId = "krishwar" | "recruiter" | "developer" | "creative";
export type SectionId =
  | "about"
  | "journey"
  | "originals"
  | "picks"
  | "skills"
  | "moments"
  | "story";

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: "krishwar",
    name: "Krishwar",
    blurb: "The complete developer journey",
    color: "#e5132b",
    order: [
      "about",
      "journey",
      "originals",
      "picks",
      "skills",
      "moments",
      "story",
    ],
  },
  {
    id: "recruiter",
    name: "Recruiter",
    blurb: "Experience, projects & skills first",
    color: "#4cc9ff",
    order: [
      "story",
      "moments",
      "skills",
      "originals",
      "about",
      "journey",
      "picks",
    ],
  },
  {
    id: "developer",
    name: "Developer",
    blurb: "Projects, backend & technology stack first",
    color: "#46e3a8",
    order: [
      "originals",
      "skills",
      "journey",
      "moments",
      "about",
      "picks",
      "story",
    ],
  },
  {
    id: "creative",
    name: "Creative",
    blurb: "Research, freelance projects & highlights first",
    color: "#ffb547",
    order: [
      "journey",
      "picks",
      "originals",
      "moments",
      "about",
      "skills",
      "story",
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: "About",
    card: "About Me",
    meta: "Introduction • Approach & background",
    palette: violet,
  },
  journey: {
    nav: "Journey",
    card: "My Journey",
    meta: `${seasons.length} Chapters • Education & experience`,
    palette: amber,
  },
  originals: {
    nav: "Projects",
    card: "Featured Projects",
    meta: `${projects.length} Projects • Full-Stack Development`,
    palette: crimson,
  },
  picks: {
    nav: "Highlights",
    card: "Career Highlights",
    meta: "Projects • Research • Freelancing",
    palette: jade,
  },
  skills: {
    nav: "Skills",
    card: "Skills & Expertise",
    meta: `${skillCategories.length} Skill Categories`,
    palette: ocean,
  },
  moments: {
    nav: "Achievements",
    card: "Achievements & Certifications",
    meta: `${achievements.length} Achievements • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: "Resume",
    card: "My Resume",
    meta: "Professional Profile • View & Download",
    palette: violet,
  },
};
