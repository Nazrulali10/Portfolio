
import { ScrollTo } from "../assets/assets";
import { motion } from "framer-motion";

const Home = () => {
 

  return (
    <div className="pt-28 md:pt-22 md:px-40 px-4 md:h-auto h-auto w-full  flex bg-gray-950">
      <motion.div
      initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
             className="flex md:flex-row w-full flex-col-reverse mb-20 md:mb-0 bg-gray-900 mt-10 px-4 md:px-15 py-10 rounded-2xl overflow-hidden">
        <div 
        
            
        className="md:w-1/2 w-full flex flex-col justify-center gap-2 md:gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }} 
            className="flex text-white text-xl md:text-4xl font-bold  "
          >
            Hi, I'm Nazrul Ali
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex text-sky-500 text-md md:text-lg  "
          >
            Full Stack Developer
          </motion.p>

          <p className="flex text-white text-sm md:text-sm  ">
            Full-stack developer focused on continuous learning and building
            impactful products with Next.js, React, and the MERN stack.
          </p>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={() => ScrollTo("skills")}
            className="bg-sky-600 text-sm cursor-pointer rounded-lg md:mt-0 mt-3 w-25 md:w-30 h-10 text-black font-semibold hover:bg-blue-800 transition duration-300  "
          >
            My Skills
          </motion.button>
        </div>

        <div className="md:w-1/2 w-full h-70 md:h-auto flex justify-center items-center rounded-md">
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex h-60 md:h-100 rounded-full hover:scale-110 transition-transform duration-300  "
            src="images/mypic.jpg"
            alt="mypic"
          />
        </div>
      </motion.div>

    </div>
  );
};

export default Home;
