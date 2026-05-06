
import { projects } from "../assets/assets";
import ProjectCard from "../components/ProjectCard";


const Projects = () => {
  return (
    <div className="flex flex-col w-full h-auto pt-10 md:pt-22  px-4 md:px-15">
      <div className="w-full flex ">
        <p className="mt-10 font-semibold md:text-3xl text-2xl flex flex-col md:w-26 w-23 text-gray-900">
          Projects
          <div className="w-full h-0.5 bg-rose-500  rounded-full mt-2"></div>
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



export default Projects;
