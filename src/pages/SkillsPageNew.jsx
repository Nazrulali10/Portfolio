import { skilldata } from "../assets/assets";
import SkillCard from "../components/SkillCard";


const SkillsPageNew = () => {
  return (
    <div className="flex flex-col pt-0 md:pt-12 h-auto w-full  px-6 md:px-25 md:pb-10">
      <div className="md:mt-10 mt-0 font-semibold text-2xl md:text-3xl flex flex-col w-16 text-gray-900">
        Skills
        <div className="w-full h-0.5 bg-rose-500 rounded-full mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full bg-white justify-center items-center mt-5 md:gap-12 gap-4 px-auto md:px-18">
        {skilldata.map((item, i) => (
          <SkillCard item={item} key={i} />
        ))} 
      </div>
    </div>
  );
};

export default SkillsPageNew;