export const skilldata = [
  {
    category: "Launguages 🌐",
    skills: ["JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    category: "Frontend 💻",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3"
    ],
  },
  {
    category: "Backend ⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Mongoose",
      "RESTful APIs",
      "JWT",
      "Socket.io",
      "Spring data JPA",
    ],
  },
  {
    category: "Database 🗄️",
    skills: ["MongoDB", "MySQL", "Schema Design", "Data Modeling"],
  },
  {
    category: "Totals & Deployment🛠️",
    skills: ["Docker","Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA","Render", "Vercel"],
  },
  {
    category: "Concepts 📖",
    skills: [ "OOP", "SDLC","Cybersecurity","Networking"],
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
      "Built a full-stack real-time messaging application using the MERN stack and styled the application with Tailwind CSS.",
      "Features include real-time text and image sharing between users, individual online status and total online users updated using Socket.IO and Cloudinary is used for image uploading and storage.",
      "Implemented JWT-based authentication using HTTP-only cookies to securely manage user sessions and protect authenticated requests.",
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
   {
    name: "DevAssist 🤖",
    images: [
      "/images/dev1.png",
      "/images/dev2.png",
      "/images/dev3.png",
      "/images/dev4.png",
      "/images/dev5.png",
      "/images/dev6.png",
    ],
    description: [
      "Built a developer-focused platform with a resume analyzer for reviewing resumes, a developer assistant chatbot for answering programming questions, and a technology news page for keeping users updated with the latest tech news..",
      "Used Next.js App Router for navigation and implemented different rendering methods based on the page: SSG for the home page, ISR for the news page with automatic data revalidation every 5 minutes, and CSR for the resume analyzer and developer chatbot.",
      "Integrated external APIs including Gemini API for AI-powered features and News API for fetching technology news,and deployed the application on Vercel.",
    ],
    link: "https://dev-assist-theta.vercel.app/",
    github: "https://github.com/Nazrulali10/DevAssist",
  },
  {
    name: "QuickFix 🛠️",
    images: ["https://res.cloudinary.com/drkeyrpxu/image/upload/c_auto,h_1400/f_auto/q_auto/qf1.png", "https://res.cloudinary.com/drkeyrpxu/image/upload/c_auto,h_1400/f_auto/q_auto/qf2.png", "https://res.cloudinary.com/drkeyrpxu/image/upload/c_auto,h_1400/f_auto/q_auto/qf4.png","https://res.cloudinary.com/drkeyrpxu/image/upload/c_auto,h_1400/f_auto/q_auto/qf3.png","https://res.cloudinary.com/drkeyrpxu/image/upload/c_auto,h_1400/f_auto/q_auto/qf5.png"],
    description: [
      "Built a full-stack service management application where customers can create and cancel service requests,technicians can manage request statuses, and admins can manage technicians and monitor service requests",
      "Implemented JWT-based authentication and role-based authorization using Spring Security, BCrypt password hashing, and HTTP-only cookies to secure customer, technician, and admin APIs.",
      "Developed REST APIs using Spring Boot, Spring Data JPA, and MySQL to handle service requests, technician management, and request status updates.",
    ],
    link: "https://quick-fix-frontend-green.vercel.app",
    github: "https://github.com/Nazrulali10/QuickFix",
  },
   {
    name: "MoovyGo 🎬",
    images: [
      "/images/mt1.png",
      "/images/mt2.png",
      "/images/mt3.png",
      "/images/mt4.png",
      "/images/mt5.png"
    ],
    description: [
      "Built and deployed a full-stack movie booking application with user, movie, and booking models, allowing users to browse movies, select seats, book tickets, download movie tickets and separate dashboards for admin and user.",
      "Implemented JWT-based authentication using HTTP-only cookies and Express middleware to verify users and protect booking and other authenticated requests.",
      "Added real-time seat selection and seat-holding using Socket.IO, allowing selected seats to be temporarily held and their availability updated for other users in real time.",
    ],
    link: "https://moovygo-client.vercel.app",
    github: "https://github.com/Nazrulali10/MoovyGo",
  }
];

//rose
//blue
//orange
//green