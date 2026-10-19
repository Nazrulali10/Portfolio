import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ScrollTo } from "../assets/assets";

const Home = () => {
  return (
    <div className="flex pt-10 md:pt-12 md:px-40 px-2 md:h-auto h-auto w-full  mb-10 ">
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
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex text-gray-900 text-md md:text-lg font-medium animate-pulse duration-300 "
          >
            Software Engineer
          </motion.p>

          <div className="  md:mt-0 mt-4   flex  gap-2  ">
            <motion.button
              onClick={() => ScrollTo("skills")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className=" text-sm cursor-pointer rounded-2xl gap-1 shadow-md
          w-28 px-2 py-2 flex justify-center hover:scale-105 active:scale-105 duration-300
        
        bg-rose-500 text-white
      "
            >
              My Skills
            </motion.button>
            <a
              href={import.meta.env.VITE_RESUME}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className=" text-sm cursor-pointer shadow-md rounded-2xl w-28 px-2 py-2 flex gap-1 justify-center hover:scale-105 active:scale-105 duration-300 items-center
        
        
        bg-rose-500 text-white
      "
              >
                Resume
                <ArrowDown size={16} />
              </motion.button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 w-full h-48 md:h-auto flex justify-center items-center rounded-md mb-4">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex h-52 w-52 object-cover md:h-100 md:w-100 border-2 border-rose-500 rounded-full hover:scale-110 transition-transform duration-300  "
            src="https://res.cloudinary.com/drkeyrpxu/image/upload/f_auto/q_auto/mypic.png"
            alt="mypic"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
