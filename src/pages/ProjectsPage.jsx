
import { useState } from "react";
import { projects } from "../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="flex flex-col w-full h-auto pt-22 bg-gray-950 px-4 md:px-15">
      <div className="w-full flex justify-center">
         <p className="mt-10 font-semibold md:text-3xl text-2xl flex flex-col md:w-26 w-20 text-white">
        Projects
        <div className="w-full h-0.5 bg-gradient-to-tl from-sky-400 via-sky-600 to-indigo-400 rounded-full mt-2"></div>
      </p>
      </div>
     

      {projects
        .slice()
        .reverse()
        .map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
    </div>
  );
};

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
    <div className="flex flex-col w-full h-full rounded-md px-0 md:px-50 py-5 mb-10 mt-3">
      <p className="flex text-white font-semibold text-xl md:text-3xl">
        {project.name}
      </p>

      
      <div className=" flex w-full md:gap-2 justify-center items-center mt-3 md:mt-8 px-0 md:px-30">
  
  <button
    onClick={handlePrev}
    className="absolute left-6 md:hidden md:left-0 bg-black/25 text-white rounded-full p-2 hover:bg-sky-600 transition"
  >
   <ChevronLeft />
  </button>
   <button
    onClick={handlePrev}
    className="hidden md:block bg-white text-black rounded-full p-2 hover:bg-sky-600 transition"
  >
   <ChevronLeft />
  </button>


  <div className="w-full max-w-2xl h-60 md:h-60 flex justify-center items-center ">
    <img
      src={project.images[currentImage]}
      alt={project.name}
      className="h-full w-full rounded-md object-contain md:object-contain transition-all duration-500"
    />
  </div>

 
  <button
    onClick={handleNext}
    className="absolute md:hidden right-6 md:right-0 bg-black/25 text-white rounded-full p-2 hover:bg-sky-600 transition"
  >
    <ChevronRight />
  </button>
  <button
    onClick={handleNext}
    className="hidden md:block   bg-white text-black rounded-full p-2 hover:bg-sky-600 transition"
  >
    <ChevronRight />
  </button>
</div>



      <p className="mt-2 md:mt-10 text-gray-400 text-xs md:text-sm">
        {project.description}
      </p>

      <div className="mt-5 flex flex-col">
        <p className="text-gray-400 text-xs md:text-sm">
          Note: I’m using Render free tier for Backend, so it may take ~15s to
          start the server.
        </p>
        <p className="text-white text-xs md:text-md mt-2">
          Live Demo:{" "}
          <a
            className="text-sky-400 text-xs md:text-sm"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
