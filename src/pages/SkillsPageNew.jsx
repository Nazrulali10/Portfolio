import { skilldata } from "../assets/assets";
import SkillCard from "../components/SkillCard";

const SkillsPageNew = () => {
  return (
    <div className="flex flex-col bg-indigo-500 w-full py-15 px-3 md:px-12">
      <div className=" text-2xl px-3 md:text-3xl flex flex-col w-22 text-white">
        Skills
        <div className="w-[75%] h-0.5 bg-white rounded-full mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full justify-center items-center mt-5 md:gap-12 gap-4 px-auto md:px-18">
        {skilldata.map((item, i) => (
          <SkillCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPageNew;
