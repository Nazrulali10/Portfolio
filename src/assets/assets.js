export const skilldata = [
  {
    category: "Launguages 🌐",
    skills: ["JavaScript", "TypeScript", "Java (Basics)", "SQL"],
  },
  {
    category: "Frontend 💻",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Framer Motion",
      "Context API",
    ],
  },
  {
    category: "Backend ⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "Mongoose",
      "RESTful APIs",
      "JWT Authentication",
      "Socket.io",
      "Error Handling",
    ],
  },
  {
    category: "Database 🗄️",
    skills: ["MongoDB", "MySQL (Basics)", "Schema Design", "Data Modeling"],
  },
  {
    category: "Security 🔐",
    skills: [
      "JWT",
      "Cookie-based Authentication",
      "Access Control",
      "NextAuth.js",
    ],
  },
  {
    category: "Tools 🛠️",
    skills: ["Git", "GitHub", "Postman", "VS Code", "CI/CD"],
  },
  {
    category: "Deployment",
    skills: ["Render", "Vercel", "Netlify"],
  },
];

export const navLinks = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
];

export const ScrollTo = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

export const projects = [
  {
    name: "Chatly 💬",
    images: ["/images/cy1.png", "/images/cy2.png", "/images/cy3.png"],
    description: [
      "Real-time messaging using Socket.IO",
      "JWT-based authentication system",
      "Online user presence tracking",
      "Cloudinary for media storage",
      "Built with MERN stack",
    ],
    link: "https://chatly-client-zeta.vercel.app",
    github: "https://github.com/Nazrulali10/Chatly",
  },
  {
    name: "UniKart 🛍️",
    images: [
      "/images/uk1.png",
      "/images/uk2.png",
      "/images/uk3.png",
      "/images/uk4.png",
    ],
    description: [
      "E-commerce platform for students",
      "JWT authentication with bcrypt security",
      "Product, order, and user management",
      "Context API for state management",
      "Built with MERN stack",
    ],
    link: "https://unikart-client.vercel.app",
    github: "https://github.com/Nazrulali10/UniKart",
  },
  {
    name: "MoovyGo 🎬",
    images: [
      "/images/mt1.png",
      "/images/mt2.png",
      "/images/mt3.png",
      "/images/mt4.png",
    ],
    description: [
      "Movie ticket booking system",
      "Seat selection with availability logic",
      "JWT authentication with cookies",
      "Cloudinary for image handling",
      "MERN stack with scalable backend APIs",
    ],
    link: "https://moovygo-client.vercel.app",
    github: "https://github.com/Nazrulali10/MoovyGo",
  },
  {
    name: "DevAssist 🤖",
    images: [
      "/images/dev1.png",
      "/images/dev2.png",
      "/images/dev3.png",
      "/images/dev4.png",
    ],
    description: [
      "AI-powered developer Assistant",
      "Static Home Page at build time (SSG)",
      "Gemini AI Assistant & Resume Analyzer (CSR)",
      "Tech News powered by NewsAPI (ISR)",
      "Technology : NextJS, TypeScript, Tailwind CSS & Vercel deployment",
    ],
    link: "https://dev-assist-theta.vercel.app/",
    github: "https://github.com/Nazrulali10/DevAssist",
  },
  {
    name: "BlogX ✍️",
    images: [
      "/images/bx2.png",
      "/images/bx1.png",
      "/images/bx3.png",
      "/images/bx4.png",
    ],
    description: [
      "Full-stack blogging platform with Next.js",
      "NextAuth-based authentication",
      "SSR, CSR, SSG for performance",
      "Category filtering and user interaction",
      "MongoDB Atlas + Vercel deployment",
    ],
    link: "https://blog-x-chi-swart.vercel.app",
    github: "https://github.com/Nazrulali10/BlogX",
  },
];
