import { skilldata } from "../assets/assets";
import FlipCard from "../components/FlipCard";

const Skills = () => {
  return (
    <div className="flex flex-col pt-0 md:pt-22 h-auto w-full bg-gray-950  px-3 md:px-25 md:pb-20">
      <p className="md:mt-10 mt-0 font-semibold text-2xl md:text-3xl flex flex-col w-16 text-white">
        Skills
        <div className="w-full h-0.5 bg-gradient-to-tl from-sky-400 via-sky-600 to-indigo-400 rounded-full mt-2"></div>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 h-full w-full bg-gray-950 justify-center items-center mt-10 gap-12 px-6 md:px-28">
        {skilldata.map((skill, i) => (
          <FlipCard skill={skill} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default Skills;
