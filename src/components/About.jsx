import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="w-full flex justify-center px-3 py-15 bg-gradient-to-br from-rose-400 to-rose-500">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2 bg-rose-200 text-center py-12  w-full md:w-3xl rounded-2xl"
    >
      <div className="bg-gray-900 rounded-full p-2"><h1 className=" text-white md:text-3xl text-2xl px-4">Who Am I?</h1></div>
      <p className="text-base px-3 py-2 text-gray-900 text-center tracking-wider">
        Enthusiastic <span className="font-bold">Full Stack Developer</span>{" "}
        with hands-on experience in building projects using Next.js and the MERN
        stack. Skilled in developing efficient, high-quality web solutions using
        both AI-powered tools and traditional development practices. Looking for
        an opportunity to grow as a developer and contribute to modern,
        fast-paced engineering teams.
      </p>
      <div className="flex justify-center ">
        <div className="h-0.5 rounded-full w-20 bg-black mt-5"></div>
      </div>
    </motion.div>
    </div>
  );
};

export default About;
