
import { motion } from 'framer-motion'
export default function FlipCard({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="md:w-60 w-40 mx-auto">
      <div className="[perspective:1000px]">

        <div className="relative h-[260px] w-full transition-transform duration-700
                [transform-style:preserve-3d]
                hover:[transform:rotateY(180deg)]
                cursor-pointer will-change-transform">

          {/* Front */}
          <div className="absolute inset-0 bg-slate-50  rounded-2xl shadow-lg 
                          flex flex-col justify-center items-center gap-4 
                          p-4 [backface-visibility:hidden]">
            <img src={skill.pictureUrl} className="w-16 h-16 object-contain" />
            <p className="text-gray-900 font-semibold text-lg">{skill.name}</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-slate-50 rounded-2xl shadow-xl 
                          flex flex-col justify-center items-center p-5 text-center
                          [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-gray-900 text-sm leading-relaxed hover:text-rose-500 duration-300">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


