import { motion } from "framer-motion";

const SkillCard = ({ item }) => {
  return (
    <motion.div
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group flex flex-col justify-center text-white bg-indigo-900 hover:bg-indigo-900 rounded-3xl px-10 md:px-12 py-6 gap-2 md:gap-4 hover:scale-105 hover:text-white marker:text-rose-500 hover:marker:text-white duration-300 transition-all"
    >
      <div>
        <h1 className="text-xl ">{item.category}</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3  gap-4 mt-2 text-xs md:text-sm">
        {item.skills.map((skill, i) => (
          <div className="min-w-0 bg-indigo-500 font-medium rounded-2xl flex justify-center px-2 py-1 hover:scale-105 duration-300" key={i}><p>{skill}</p></div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
