
// export const skilldata = [
//     {
//         name:"Next JS",
//         description:"I build modern web applications with Next.js, using the App Router for flexible routing and layouts. I’m experienced with CSR, SSR, and SSG to optimize performance and SEO, and I use built-in components like Image, Font, and Navigation for better speed, accessibility, and user experience.",
//         pictureUrl:"/nextjs.jpeg"
//     },
//     {
//     name: "NextAuth.js",
//     description: "I use NextAuth.js to implement secure authentication in my Next.js apps. I can integrate providers like Google and GitHub, manage sessions using JWT or database sessions, and easily access user data through session and status in the frontend. This allows me to provide smooth and secure login experiences for users.",
//     pictureUrl: "/na.png"
// },

//     {
//         name:"Vite + React",
//         description:"I prefer Vite build tool for speed and efficiency.I can manage Components,functions,State variables,Hooks and Context in React with good folder structure. Experienced in using react router dom for client side routing.",
//         pictureUrl:"/react.png"
//     },
//      {
//         name:"Node JS",
//         description:"Experienced in using Node.js for building scalable and efficient backend services. I use it primarily for creating RESTful APIs and handling asynchronous operations.",
//         pictureUrl:"/node.png"
//     },
//      {
//         name:"Express",
//         description:"Proficient in using Express.js to create robust backend services. I use it for defining API routes, middleware management, error handling, and connecting to database.",
//         pictureUrl:"/express.png"
//     }
//     ,
//      {
//         name:"MongoDB",
//         description:"MongoDb is one of the scalable noSQL database.I can perform CRUD operations in collections of database.Flexible Models and Schemas are created using mongoose in the server. ",
//         pictureUrl:"/mongo.png"
//     },
//      {
//         name:"JSON Web Token",
//         description:"Creating Tokens using JWT and storing them in cookie is the good way to protect the user which means authenticating them via jwt cookie.Token is verified by secret key stored in dotenv file.",
//         pictureUrl:"/jwt.png",
//     },
//      {
//         name:"Socket.io",
//         description:"Using socket.io in both Frontend and Backend for providing real-time communication using socket server and I can manage events in sockets.",
//         pictureUrl:"/socket.png"
//     },{
//         name:"Tailwind CSS",
//         description:"Useful for building Modern UI quickly with efficient amount of time. Useful for handling new Pre-bult UI which comes alomg with tailwind css.Naming for classes and seperate file handling for css can be avoided.",
//         pictureUrl:"/tailwind.png"
//     }
// ]
export const skilldata = [
  {
    name: "Next JS",
    description:
      "I build modern apps with Next.js using App Router, CSR/SSR/SSG, and built-in tools like Image and Navigation for speed and SEO.",
    pictureUrl: "/nextjs.jpeg",
  },

  {
    name: "NextAuth.js",
    description:
      "I implement secure authentication using NextAuth.js with providers like Google/GitHub and manage sessions using JWT or database sessions.",
    pictureUrl: "/na.png",
  },

  {
    name: "Vite + React",
    description:
      "I use Vite for fast builds and React for components, state, hooks, context, and client-side routing with react-router-dom.",
    pictureUrl: "/react.png",
  },

  {
    name: "Node JS",
    description:
      "I use Node.js to build scalable backend services, mainly focused on REST APIs and handling async operations.",
    pictureUrl: "/node.png",
  },

  {
    name: "Express",
    description:
      "I use Express.js for API routes, middleware, error handling, and connecting backend services with databases.",
    pictureUrl: "/express.png",
  },

  {
    name: "MongoDB",
    description:
      "I work with MongoDB for scalable NoSQL storage, performing CRUD operations and creating schemas with Mongoose.",
    pictureUrl: "/mongo.png",
  },

  {
    name: "JSON Web Token",
    description:
      "I generate and verify JWT tokens stored in cookies for secure user authentication using secret keys.",
    pictureUrl: "/jwt.png",
  },

  {
    name: "Socket.io",
    description:
      "I use Socket.io on both frontend and backend to enable real-time communication and manage socket events.",
    pictureUrl: "/socket.png",
  },

  {
    name: "Tailwind CSS",
    description:
      "I use Tailwind CSS to build fast, modern UIs without custom CSS files, leveraging utility classes and ready-made components.",
    pictureUrl: "/tailwind.png",
  },
];

export const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ]

export const projects =[
   
     {
        name:"Chatly 💬!",
        images:["/images/p11.png","/images/p22.png","/images/p23.png","/images/p20.png"],
        description:"A real-time messaging application where users can send and receive messages, update their profile pictures, and see who is currently online. It uses JWT for token-based authentication, with tokens generated at login or sign-up. MongoDB is used as a cloud database to store user and message data, connected via dotenv. The backend is built with Express and Node.js for API routing , asynchronous operations and server handling. Real-time features like messaging and online user tracking are powered by Socket.io. The frontend is developed in React, using Lucide for icons and React Hot Toast for notifications. All user and message images are stored in Cloudinary and linked to the server securely using dotenv.",
        link:"https://chatly-client-zeta.vercel.app"
    
    },
     {
        name:"UniKart 🛍️!",
        images:["/images/uk1.png","/images/uk2.png","/images/uk3.png","/images/uk4.png"],
        description:"Unikart is a MERN stack eCommerce web app made for college students to buy books, study materials, and hostel essentials. Products are organized into four main categories for easy browsing. The frontend is built with React and Tailwind CSS, using AppContext for state management and prebuilt UI components. The backend uses Node.js and Express with a clean folder structure and MongoDB for storing users, products, orders, and addresses. User authentication is handled with JWT and passwords are secured using Bcrypt. Fetch API is used for client-server communication with credentials.",
        link:"https://unikart-client.vercel.app"
     },
     {
    name: "MoovyGo 🎬",
    images: ["/images/mt1.png","/images/mt2.png","/images/mt3.png","/images/mt4.png"],
    description: "A full-stack movie ticket booking app built using the MERN stack. Users can browse movies, view detailed info like cast and storyline, select seats with color indicators for availability, and download tickets securely. The frontend is built in React with Tailwind CSS for responsive design and React Router DOM for smooth navigation. The backend, powered by Node.js and Express.js, handles API routing, authentication, and seat booking logic. JWT (stored in cookies) ensures secure access, while MongoDB and Mongoose manage users, movies, and bookings. Cloudinary is used for movie and cast images, and Axios handles API requests. The project is deployed on Vercel (frontend) and Render (backend).",
    link: "https://moovygo-client.vercel.app"
},
{
    name: "BlogX ✍️",
    images: ["/images/bx2.png","/images/bx1.png","/images/bx3.png","/images/bx4.png"],
    description: "A full-stack blogging platform built with Next.js, featuring secure authentication via NextAuth and MongoDB as the database. Users can create, publish, and edit blogs, like and follow others, and filter posts by category. The app implements key Next.js concepts like CSR, SSR, and SSG using the App Router for optimized performance. Built-in Next.js components such as Image, Font, and Navigation enhance speed and accessibility. Tailwind CSS provides responsive styling with light and dark mode support, while React Loading Skeleton improves user experience during loading states. Deployed on Vercel with MongoDB Atlas for the database.",
    link: "https://blog-x-chi-swart.vercel.app"
}

]

export const ScrollTo =(id)=>{
    document.getElementById(id).scrollIntoView({behavior:"smooth"})
}