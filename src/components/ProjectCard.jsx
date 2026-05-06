import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col w-full h-full  px-4 md:px-20 py-10 md:py-20 mt-10 md:mt-3 rounded-2xl bg-rose-50 border border-slate-100 shadow-sm"
    >
      <p className="flex text-gray-900 font-semibold text-xl md:text-3xl">
        {project.name}
      </p>

      <div className=" flex w-full md:gap-2 justify-center items-center mt-3 md:mt-8 px-0 md:px-10">
        <button
          onClick={handlePrev}
          className="absolute left-6 md:hidden z-10 md:left-0 bg-black/25 text-white rounded-full p-2 active:bg-rose-500 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handlePrev}
          className="hidden md:block bg-white text-black rounded-full p-2 hover:bg-rose-500 hover:text-white border border-slate-200 transition"
        >
          <ChevronLeft />
        </button>

        <div className="overflow-hidden w-full  h-60 md:h-134 flex justify-center items-center rounded-xl ">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentImage * 100}%)`,
            }}
          >
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={project.name}
                className="w-full  object-fill rounded-md"
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute md:hidden z-10 right-6 md:right-0 bg-black/25 text-white rounded-full p-2 active:bg-rose-500 transition"
        >
          <ChevronRight />
        </button>
        <button
          onClick={handleNext}
          className="hidden md:block  bg-white text-black rounded-full p-2 hover:bg-rose-500 hover:text-white border border-slate-200 transition"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex flex-col justify-center mt-2 px-4 md:px-10  w-full md:mt-5 text-gray-600 text-xs md:text-sm">
        {project.description.map((sen,i)=>(
          <li className=" marker:text-rose-500" key={i}>{sen}</li>
        ))}
      </div>

      <div className="mt-3 md:mt-5 flex flex-col">
        {project.name !== "BlogX ✍️" && (
          <p className="text-gray-500 text-xs md:text-sm">
            Note: I’m using Render free tier for Backend, so it may take ~15s to
            start the server.
          </p>
        )}

        <div className="flex w-full justify-center items-center gap-2 mt-4 md:mt-10">
          <button className="flex justify-center items-center  w-36 py-2 bg-rose-500 hover:bg-rose-600 transition-colors duration-300 text-white  rounded-xl text-sm font-semibold shadow-md">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-1"
            >
              Visit Website <span><ArrowUpRight size={16}/></span>
            </a>
          </button>
          <button className=" w-32 py-2 bg-rose-500 hover:bg-rose-600 transition-colors duration-300 text-white  rounded-xl text-sm font-semibold shadow-md">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-1"
            >
              Github <span><ArrowUpRight size={16}/></span>
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;