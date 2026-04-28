import { skilldata } from "../assets/assets";
import FlipCard from "../components/FlipCard";

const Skills = () => {
  return (
    <div className="flex flex-col pt-0 md:pt-12 h-auto w-full  px-3 md:px-25 md:pb-10">
      <p className="md:mt-10 mt-0 font-semibold text-2xl md:text-3xl flex flex-col w-16 text-gray-900">
        Skills
        <div className="w-full h-0.5 bg-rose-500 rounded-full mt-2"></div>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 h-full w-full bg-white justify-center items-center mt-10 md:gap-12 gap-8 px-auto md:px-28">
        {skilldata.map((skill, i) => (
          <FlipCard skill={skill} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Skills;