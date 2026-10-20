import { motion } from "framer-motion";

const SkillCard = ({ item }) => {
  return (
    <motion.div
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group flex flex-col justify-center bg-indigo-800 hover:bg-rose-400 rounded-3xl px-12 py-6 gap-2 md:gap-4 hover:scale-105 hover:text-white marker:text-rose-500 hover:marker:text-white duration-300 transition-all"
    >
      <div>
        <h1 className="text-xl text-white">{item.category}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  text-white  text-sm">
        {item.skills.map((skill, i) => (
          <div key={i}>{skill}</div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
