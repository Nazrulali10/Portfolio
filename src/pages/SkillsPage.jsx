import { skilldata } from "../assets/assets";

const Skills = () => {
  return (
    <div className="flex flex-col pt-22 h-auto w-full bg-gray-950 px-15 md:px-25">

        <p className="mt-10 font-semibold text-2xl flex flex-col w-12 text-white">
            Skills
            <div className="w-full h-0.5 bg-gradient-to-tl from-sky-400 via-sky-600 to-indigo-400 rounded-full mt-2"></div>
        </p>

        <div className="flex flex-wrap h-full w-full bg-gray-950 justify-center items-center mt-6 gap-10 mb-10">
            {skilldata.map((skill,i)=>(
      <article key={i} className="flex flex-col w-80 h-100  rounded-3xl p-5 shadow-sm transition hover:border-white border-2 border-blue-500 items-center justify-center">
        <img
          alt={skill.name}
          src={skill.pictureUrl}
          className="h-28 max-w-40 p-5 object-cover"
        />

        <div className="flex flex-col w-full h-full p-4 sm:p-6">
          

          
            <h3 className="mt-0.5 text-lg text-white">
              {skill.name}
            </h3>
        

          <p className="mt-2  text-sm/relaxed text-gray-500">
            {skill.description}
          </p>
        </div>
      </article>))}
      </div>

    </div>
  );
};

export default Skills;
