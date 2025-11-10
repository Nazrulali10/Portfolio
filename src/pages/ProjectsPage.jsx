
import { useState } from "react";
import { projects } from "../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="flex flex-col w-full h-auto pt-10 md:pt-22 bg-gray-950 px-4 md:px-15">
      <div className="w-full flex">
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
    <div className="flex flex-col w-full h-full  px-4 md:px-20 py-10 md:py-20 mb-10 mt-10 md:mt-3 rounded-2xl  bg-gray-900">
      <p className="flex text-white font-semibold text-xl md:text-3xl">
        {project.name}
      </p>

      
      <div className=" flex w-full md:gap-2 justify-center items-center mt-3 md:mt-8 px-0 md:px-10">
  
  <button
    onClick={handlePrev}
    className="absolute left-6 md:hidden z-10 md:left-0 bg-black/25 text-white rounded-full p-2 active:bg-sky-600 transition"
  >
   <ChevronLeft />
  </button>
   <button
    onClick={handlePrev}
    className="hidden md:block bg-white text-black rounded-full p-2 hover:bg-sky-600 transition"
  >
   <ChevronLeft />
  </button>


  <div className="overflow-hidden w-full  h-50 md:h-100 flex justify-center items-center rounded-md ">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${currentImage * 100}%)`,
    }}
  >
    {project.images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={project.name}
        className="w-full object-contain rounded-md"
      />
    ))}
  </div>
</div>


 
  <button
    onClick={handleNext}
    className="absolute md:hidden z-10 right-6 md:right-0 bg-black/25 text-white rounded-full p-2 active:bg-sky-600 transition"
  >
    <ChevronRight />
  </button>
  <button
    onClick={handleNext}
    className="hidden md:block  bg-white text-black rounded-full p-2 hover:bg-sky-600 transition"
  >
    <ChevronRight />
  </button>
</div>



      <p className="mt-2 md:mt-10 text-gray-400 text-xs md:text-sm">
        {project.description}
      </p>

      <div className="mt-5 flex flex-col">
        {project.name !=="BlogX ✍️" && <p className="text-gray-400 text-xs md:text-sm">
          Note: I’m using Render free tier for Backend, so it may take ~15s to
          start the server.
        </p>}
       
          <div className="flex w-full justify-center items-center">
            
             <button className="mt-10">
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-sky-600 text-black px-4 py-3 rounded-lg text-sm font-semibold"
  >
    Visit Website
  </a>
</button>
          </div>
         

       
      </div>
    </div>
  );
};

export default Projects;