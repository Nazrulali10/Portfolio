
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
     className='flex flex-col items-center gap-2  md:px-18 py-12 bg-gradient-to-br from-rose-400 to-rose-500 mb-10 '>
        <h1 className="text-3xl md:text-4xl text-white px-4">Who Am I?</h1>
        <p className="text-base px-3 py-2 text-gray-900 text-center">Enthusiastic <span className='font-bold'>Full Stack Developer</span> with hands-on experience in building projects using
Next.js and the MERN stack. Skilled in developing efficient, high-quality web solutions using
both AI-powered tools and traditional development practices. Looking for an opportunity to
grow as a developer and contribute to modern, fast-paced engineering teams.</p>
<div className='flex justify-center '>
  <div className='h-0.5 rounded-full w-20 bg-white mt-5'></div>
</div>
    </motion.div>
  )
}

export default About