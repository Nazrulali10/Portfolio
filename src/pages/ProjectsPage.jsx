import { projects } from "../assets/assets";

const Projects = () => {
  return (
    <div className="flex flex-col w-full h-auto pt-22 bg-gray-950 px-10 md:px-15">

      <p className="mt-10 font-semibold text-2xl flex flex-col w-18 text-white">
        Projects
        <div className="w-full h-0.5 bg-gradient-to-tl from-sky-400 via-sky-600 to-indigo-400 rounded-full mt-2"></div>
      </p>
      
      {projects.map((project,i)=>(  
      <div key={i} className="flex flex-col w-full h-full rounded-md px-0 md:px-50 py-5 mb-10 mt-3">
        <p className="flex text-white font-semibold text-xl md:text-3xl">{project.name}</p>

        <div className="flex flex-col w-full md:h-auto h-55 md:gap-6 justify-center items-center mt-3 px-0 md:px-30">
          <img src={project.images[0]} className=" h-55 rounded-md object-contain" alt="r" />
          {/* <div className="flex w-full justify-between">
             <img src={project.images[1]} className="w-60 h-30 rounded-md object-contain " alt="w" />
              <img src={project.images[2]} className="w-60 h-30 rounded-md object-contain" alt="w" />
            <img src={project.images[3]} className="w-60 h-30 rounded-md object-contain" alt="w" />
          </div> */}
        </div>

        <p className=" mt-2 md:mt-10 text-gray-400 text-xs md:text-sm">
         {project.description}
        </p>

        <div className="mt-5 flex flex-col">
            <p className="text-gray-400 text-xs md:text-sm">Note: im using Render free tier for Backend so it will take 15sec to start the server </p>
            <p className="text-white text-xs md:text-md mt-2">Live Demo : <a className="text-sky-400 text-xs md:text-sm" href={project.link}>{project.link}</a></p>
        </div>

      </div>))}
    </div>
  );
};

export default Projects;
