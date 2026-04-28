import { ScrollTo } from "../assets/assets";
import { motion } from "framer-motion";
import { ArrowDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-10 md:pt-12 md:px-40 px-2 md:h-auto h-auto w-full  flex ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex  md:flex-row w-full flex-col-reverse  bg-white border  mt-10 px-4 md:px-15 py-5 md:py-10 rounded-2xl overflow-hidden border-gray-200"
      >
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center  md:gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex text-rose-500  text-2xl md:text-4xl   "
          >
            Hi, I'm Nazrul Ali
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex text-gray-900 text-md md:text-lg font-medium "
          >
            Software Engineer
          </motion.p>

          {/* <p className=" text-gray-600 text-sm md:text-sm leading-6 md:leading-7">
            Full-stack developer focused on continuous learning and building
            impactful products with

            Next.js

            ,

            React

            , and the

            MERN

            stack.
          </p> */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
           
            className="  md:mt-0 mt-4   flex  gap-2 "
          >
            <motion.button
             onClick={() => ScrollTo("skills")}
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className=" text-sm cursor-pointer rounded-2xl gap-1
          py-2 px-3 flex
        
        bg-rose-500 text-white
      "
            >
              My Skills
             
            </motion.button>
             <a href="/RESUME.pdf" download> 
            <motion.button
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className=" text-sm cursor-pointer rounded-2xl py-2 px-3 flex gap-1 justify-center items-center
        
        
        bg-rose-500 text-white
      "
            >
              Resume
              <ArrowDown size={16}  />
            </motion.button>
            </a>
          </motion.div>
        </div>

        <div className="md:w-1/2 w-full h-48 md:h-auto flex justify-center items-center rounded-md mb-4">
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex h-48 w-48 object-contain md:h-100 md:w-100 border-2 border-rose-500 rounded-full hover:scale-110 transition-transform duration-300  "
            src="images/mypic.jpg"
            alt="mypic"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
