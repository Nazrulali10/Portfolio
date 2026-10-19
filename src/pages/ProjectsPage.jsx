import { projects } from "../assets/assets";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col w-full h-auto  md:pt-22  px-2 md:px-15 pb-20">
      <div className="w-full flex ">
        <p className="mt-10 md:text-3xl text-2xl flex flex-col md:w-26 w-23 text-gray-900">
          Projects
          <div className="w-full h-0.5 bg-rose-500  rounded-full mt-2"></div>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-20 gap-6 md:mt-10 mt-0">
         {projects
        .slice()
        .reverse()
        .map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
     
    </div>
  );
};

export default Projects;
