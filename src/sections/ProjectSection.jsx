import { projects } from "../assets/assets";
import ProjectCard from "../components/ProjectCard";

const ProjectSection = () => {
  return (
    <div className="flex flex-col w-full h-auto  md:pt-15  px-2 md:px-15 pb-15 bg-emerald-500">
      <div className="w-full flex px-3">
        <p className="mt-10 md:text-3xl font-medium text-2xl flex flex-col md:w-26 w-23 text-white">
          Projects
          <div className="w-[75%] h-0.5 bg-white  rounded-full mt-1"></div>
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

export default ProjectSection;
