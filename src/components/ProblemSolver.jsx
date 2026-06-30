"use client";
import { motion } from 'framer-motion'
import { CodeXml, UserPen} from 'lucide-react'
export default function ProblemSolver() {
  



  return (


    <motion.div id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" w-full bg-white md:bg-rose-white flex px-4 md:px-110  justify-center items-center pb-10 mt-15">
      <div className='flex flex-col gap-2 p-6 md:p-6 rounded-2xl bg-rose-500'>
        <div className='flex text-white md:text-3xl text-2xl justify-center items-center w-full gap-2'>
            Problem Solving <CodeXml size={18}/>
        </div>
      
  
        <div className="flex flex-col w-full justify-center text-white gap-3">
          <div className='text-base'>
            I have solved <span className='font-bold'>60+</span> coding problems on LeetCode ( Arrays, Strings, Hash Maps, Stacks, Queues, Two Pointers, Sliding Window, Binary Search, and Recursion) helping me develop strong analytical thinking and efficient problem-solving skills.
          </div>
          <button
             onClick={() => window.open("https://leetcode.com/u/4iQkCaeYAe/", "_blank")}
            className="flex items-center gap-1 bg-white hover:text-black hover:border-rose-400  text-rose-400 text-sm w-40 px-2 py-2 justify-center rounded-xl transition-all active:scale-95"
          >
            Check My Profile <span><UserPen size={20} /></span>
          </button>
        </div>

      </div>

    </motion.div>


  );
}
