import { skilldata } from "../assets/assets";

const Skills = () => {
  return (
    <div className="flex flex-col pt-22 h-auto w-full bg-gray-950  px-3 md:px-25 pb-20">
      <p className="mt-10 font-semibold text-2xl md:text-3xl flex flex-col w-16 text-white">
        Skills
        <div className="w-full h-0.5 bg-gradient-to-tl from-sky-400 via-sky-600 to-indigo-400 rounded-full mt-2"></div>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full bg-gray-950 justify-center items-center mt-6 gap-12 px-6 md:px-28">
        {skilldata.map((skill, i) => (
          <article
            key={i}
            className="flex flex-col gap-2 w-80 h-100  rounded-3xl p-5 shadow-sm transition hover:border-white border-2 border-blue-500 items-center justify-center"
          >
            <div className="relative h-20 max-w-40">
              <img
                alt={skill.name}
                src={skill.pictureUrl}
                className="object-contain h-full w-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className=" text-lg text-white"><strong>{skill.name}</strong></h3>
              <p className="  text-sm/relaxed text-gray-500">
                {skill.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Skills;
