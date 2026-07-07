import careerForgeCover from "../assets/CareerForge.png"
import foodDonationCover from "../assets/FoodDonation.png"
import sqlAssistantCover from "../assets/Sql_Assistance.png"

export const profile = {
  name: "Harsha B",
  role: "AI & Full Stack Developer",
  tagline:
    "Building AI-powered full stack applications and intelligent software systems.",
  about:
    "I am an AI & Full Stack Developer passionate about building intelligent, scalable, and user-centric applications. I love combining AI, Machine Learning, and Full Stack technologies to solve real-world problems and create impactful solutions.",
  github: "https://github.com/harsha-b-dev",
  linkedin: "https://www.linkedin.com/in/harsha-b-0b1034259/",
  phone: "9900469878",
  whatsapp: "https://wa.me/919900469878",
  email: "harshab845384@gmail.com",
  resume: "/Harsha_Resume.pdf",
}

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export const metrics = [
  { value: "3+", label: "Production projects" },
  { value: "1+ yr", label: "Software engineering" },
  { value: "Top 250", label: "Amazon ML Challenge" },
]

export const focusAreas = [
  "AI-integrated full stack applications",
  "REST API design and backend systems",
  "Machine learning powered user workflows",
  "Dashboards, databases, and deployment",
]

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "Python",
  "FastAPI",
  "Flask",
  "MongoDB",
  "MySQL",
  "SQL",
  "Git",
  "GitHub",
  "Machine Learning",
  "AI Integration",
  "REST APIs",
  "Power BI",
  "Tableau",
  "Excel",
]

export const skillGroups = [
  {
    title: "Frontend",
    description: "Clean, responsive user interfaces with strong interaction polish.",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    description: "API-first systems, authentication flows, dashboards, and deployment-ready services.",
    items: ["Node.js", "Express.js", "Python", "FastAPI", "Flask", "REST APIs"],
  },
  {
    title: "Data & AI",
    description: "ML workflows, AI integration, analytics, and insight-focused product features.",
    items: ["Machine Learning", "AI Integration", "SQL", "Power BI", "Tableau", "Excel"],
  },
  {
    title: "Databases & Tools",
    description: "Practical database design and collaborative development workflows.",
    items: ["MongoDB", "MySQL", "Git", "GitHub"],
  },
]

export const experiences = [
  {
    company: "Zucus Technologies Pvt. Ltd. (Remote)",
    role: "Software Engineer",
    date: "May 2025 - Present",
    summary:
      "Working on full stack and AI/ML development, building production-ready AI applications from backend pipelines to frontend deployment.",
    highlights: [
      "Independently designed, built, and deployed an AI-powered SQL Assistant enabling non-technical users to query databases in natural language using RAG, vector database retrieval, NLP pipelines, and Groq API.",
      "Built automatic pie/bar chart generation from query results and deployed the application to a live production server on Render.",
      "Owned the project end-to-end from data pipeline and backend APIs to frontend UI, deployment, and production readiness.",
      "Contributed to additional full-stack and generative AI project work for client engagements.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "React.js",
      "MySQL",
      "RAG",
      "Vector Database",
      "Groq API",
      "NLP",
      "Chart.js",
      "Render",
    ],
  },
  {
    company: "E2E Rosh IT Solutions India Pvt Ltd",
    role: "Junior Software Engineer",
    date: "Jan 2026 - May 2026",
    summary:
      "Worked on AI-integrated full stack applications, REST APIs, cloud deployment, dashboards, and database systems in a defence-sector enterprise environment.",
    highlights: [
      "Built AI-integrated full-stack application modules using Python, FastAPI, MySQL, MongoDB, JavaScript, and Groq API.",
      "Developed REST APIs, interactive dashboards, and deployment-ready backend features.",
      "Used Chart.js, Swagger, Render, and GitHub for documentation, visualization, deployment, and version control.",
      "Worked on-site at BEL (Bharat Electronics Limited) for AI-oriented enterprise project activities.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "MySQL",
      "MongoDB",
      "Groq API",
      "Chart.js",
      "Render",
      "Swagger",
    ],
  },
  {
    company: "HSBC Digital Skills for Youth Program | Yuva Unstoppable",
    role: "MERN Full Stack with AI Trainee",
    date: "3 months",
    summary:
      "Completed an intensive MERN full stack internship focused on practical development, REST APIs, Git workflows, and AI integration.",
    highlights: [
      "Developed full stack modules with React.js, Node.js, Express.js, and MongoDB.",
      "Practiced production-style API development, source control, and AI-enhanced application patterns.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST APIs",
      "Git/GitHub",
      "AI Integration",
    ],
  },
]

export const projects = [
  {
    name: "CareerForge",
    type: "AI Career Platform",
    impact: "ML prediction, admin workflows, export, and PWA support",
    cover: careerForgeCover,
    description:
      "AI-based career prediction platform using machine learning with user accounts, prediction history, admin controls, CSV export, PWA support, and Android wrapper support.",
    features: [
      "Career prediction using ML model",
      "User login/signup and prediction history",
      "Admin dashboard, CSV export, PWA support",
    ],
    tech: [
      "Python",
      "Flask",
      "SQLite",
      "scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
    ],
    live: "https://careerforge-akvt.onrender.com",
    github: "https://github.com/harsha-b-dev/CareerForge",
  },
  {
    name: "Food Donor",
    type: "Full Stack Social Impact App",
    impact: "Donation lifecycle, admin management, and tracking",
    cover: foodDonationCover,
    description:
      "Full stack food donation platform for donating, browsing, accepting, and tracking food donations through an admin dashboard.",
    features: [
      "Donate and browse available food",
      "Accept food donations",
      "Admin dashboard and donation tracking",
    ],
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS", "Jinja2"],
    live: "https://food-donor-o9d5.onrender.com",
    github: "https://github.com/harsha-b-dev/Food-Donor",
  },
  {
    name: "Enterprise AI SQL Assistant",
    type: "Enterprise AI Tool",
    impact: "Natural language SQL, summaries, charts, and MySQL browsing",
    cover: sqlAssistantCover,
    description:
      "AI-powered natural language SQL assistant that converts questions into SQL, summarizes answers, browses databases, and creates chart insights.",
    features: [
      "Natural language to SQL",
      "AI summaries and database browsing",
      "Charts, insights, and MySQL integration",
    ],
    tech: ["Python", "FastAPI", "MySQL", "Groq API", "JavaScript", "Chart.js"],
    live: "https://ai-sql-chatbot.onrender.com",
    github: "https://github.com/harsha-b-dev/ai-sql-chatbot",
  },
]

export const certifications = [
  "MERN Full Stack with AI - HSBC",
  "Test Engineer - Infosys Finishing for Employability Program",
  "Full Stack Development - Novitech Pvt. Ltd.",
  "Python Basics for Data Science - EDX",
]

export const achievements = [
  {
    title: "Amazon ML Challenge 2025",
    detail:
      "Team Leader - Secured Top 250 Rank Across India and built an ML-based discount and pricing optimization project.",
  },
  {
    title: "Build for Bengaluru Hackathon",
    detail: "Participated in a civic innovation hackathon focused on building practical technology solutions.",
  },
  {
    title: "ANVESHANA 2026 Project Exhibition",
    detail: "Presented project work in an academic innovation and project exhibition environment.",
  },
  {
    title: "BEL Defence Sector AI Exposure",
    detail:
      "Gained enterprise AI project exposure while working from the Bharat Electronics Limited office during internship activities.",
  },
]

export const education = [
  {
    institution: "Sri Krishna Institute of Technology, Bangalore",
    degree: "B.E in Information Science and Engineering",
    result: "CGPA: 8.0",
  },
  {
    institution: "JS Pre University College, Bangalore",
    degree: "Pre-University",
    result: "80%",
  },
]
