import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="w-full flex justify-center px-3 py-15 bg-gradient-to-br from-rose-400 to-rose-500">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2 bg-rose-200 text-center py-12  w-full md:w-3xl rounded-2xl"
    >
      <h1 className=" text-black md:text-3xl text-2xl">Who Am I?</h1>
      <p className="text-base px-3 py-2 text-gray-900 text-center tracking-wider">
        A <span className="font-bold">Full Stack Developer</span>{" "} with hands-on experience building web applications using Java, Spring Boot, React, Next.js,
and Node.js. I have developed projects involving REST APIs, JWT-based authentication and authorization, real-time
communication, database integration, and AI-powered features.
      </p>
      <div className="flex justify-center ">
        <div className="h-0.5 rounded-full w-20 bg-black mt-5"></div>
      </div>
    </motion.div>
    </div>
  );
};

export default About;
