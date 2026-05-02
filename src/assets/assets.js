export const skilldata = [
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
    skills: [
      "MongoDB",
      "MySQL (Basics)",
      "Schema Design",
      "Data Modeling",
    ],
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
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "CI/CD",
    ],
  },
  {
    category: "Deployment",
    skills: [
      "Render",
      "Vercel",
      "Netlify",
    ],
  },
];

export const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ]

// export const projects =[
   
//      {
//         name:"Chatly 💬!",
//         images:["/images/cy1.png","/images/cy2.png","/images/cy3.png"],
//         description:"A real-time messaging application where users can send and receive messages, update their profile pictures, and see who is currently online. It uses JWT for token-based authentication, with tokens generated at login or sign-up. MongoDB is used as a cloud database to store user and message data, connected via dotenv. The backend is built with Express and Node.js for API routing , asynchronous operations and server handling. Real-time features like messaging and online user tracking are powered by Socket.io. The frontend is developed in React, using Lucide for icons and React Hot Toast for notifications. All user and message images are stored in Cloudinary and linked to the server securely using dotenv.",
//         link:"https://chatly-client-zeta.vercel.app",
//         git:"github.com/Nazrulali10/Chatly"
    
//     },
//      {
//         name:"UniKart 🛍️!",
//         images:["/images/uk1.png","/images/uk2.png","/images/uk3.png","/images/uk4.png"],
//         description:"Unikart is a MERN stack eCommerce web app made for college students to buy books, study materials, and hostel essentials. Products are organized into four main categories for easy browsing. The frontend is built with React and Tailwind CSS, using AppContext for state management and prebuilt UI components. The backend uses Node.js and Express with a clean folder structure and MongoDB for storing users, products, orders, and addresses. User authentication is handled with JWT and passwords are secured using Bcrypt. Fetch API is used for client-server communication with credentials.",
//         link:"https://unikart-client.vercel.app",
//         git:"github.com/Nazrulali10/UniKart"
//      },
//      {
//     name: "MoovyGo 🎬",
//     images: ["/images/mt1.png","/images/mt2.png","/images/mt3.png","/images/mt4.png"],
//     description: "A full-stack movie ticket booking app built using the MERN stack. Users can browse movies, view detailed info like cast and storyline, select seats with color indicators for availability, and download tickets securely. The frontend is built in React with Tailwind CSS for responsive design and React Router DOM for smooth navigation. The backend, powered by Node.js and Express.js, handles API routing, authentication, and seat booking logic. JWT (stored in cookies) ensures secure access, while MongoDB and Mongoose manage users, movies, and bookings. Cloudinary is used for movie and cast images, and Axios handles API requests. The project is deployed on Vercel (frontend) and Render (backend).",
//     link: "https://moovygo-client.vercel.app",
//     git:"github.com/Nazrulali10/MoovyGo"
// },
// {
//     name: "BlogX ✍️",
//     images: ["/images/bx2.png","/images/bx1.png","/images/bx3.png","/images/bx4.png"],
//     description: "A full-stack blogging platform built with Next.js, featuring secure authentication via NextAuth and MongoDB as the database. Users can create, publish, and edit blogs, like and follow others, and filter posts by category. The app implements key Next.js concepts like CSR, SSR, and SSG using the App Router for optimized performance. Built-in Next.js components such as Image, Font, and Navigation enhance speed and accessibility. Tailwind CSS provides responsive styling with light and dark mode support, while React Loading Skeleton improves user experience during loading states. Deployed on Vercel with MongoDB Atlas for the database.",
//     link: "https://blog-x-chi-swart.vercel.app",
//     git:"github.com/Nazrulali10/BlogX"
// }

// ]

// export const ScrollTo =(id)=>{
//     document.getElementById(id).scrollIntoView({behavior:"smooth"})
// }
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
    images: ["/images/uk1.png", "/images/uk2.png", "/images/uk3.png", "/images/uk4.png"],
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
    images: ["/images/mt1.png", "/images/mt2.png", "/images/mt3.png", "/images/mt4.png"],
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
    name: "BlogX ✍️",
    images: ["/images/bx2.png", "/images/bx1.png", "/images/bx3.png", "/images/bx4.png"],
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