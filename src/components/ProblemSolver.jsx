"use client";
import { motion } from "framer-motion";
import { CodeXml, UserPen } from "lucide-react";
export default function ProblemSolver() {
  return (
    <div
      
      className=" w-full bg-white md:bg-white flex  justify-center items-center pb-10 mt-15 px-3 md:px-6"
    >
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
       className="w-full md:w-140 flex flex-col gap-2 p-6 md:p-6 rounded-2xl bg-yellow-50">
        <div className="flex  md:text-3xl text-2xl justify-center items-center w-full gap-2">
          Problem Solving <CodeXml className="text-rose-500" size={18} />
        </div>
        <div className="w-full flex justify-center">
            <img className="w-full h-full  object-contain rounded-2xl" src="https://res.cloudinary.com/drkeyrpxu/image/upload/f_auto/q_auto/Dark_Mode_Progress_Dashboard.png" alt="psimage"/>
        </div>
        <div className="flex flex-col w-full text-gray-500 justify-center text-base  gap-3">
          <div className="text-base">
            I have solved{" "}
            <span className="font-bold text-rose-500">
              {import.meta.env.VITE_PROBLEMS_SOLVED}+
            </span>{" "}
            coding problems on LeetCode ( Arrays, Strings, Hash Maps, Stacks,
            Queues, Two Pointers, Sliding Window, Binary Search, and Recursion)
            helping me develop strong analytical thinking and efficient
            problem-solving skills.
          </div>
          <button
            onClick={() =>
              window.open("https://leetcode.com/u/4iQkCaeYAe/", "_blank")
            }
            className="flex items-center gap-1 bg-rose-500 text-white hover:border-rose-400   text-sm w-40 px-2 py-2 justify-center rounded-xl transition-all active:scale-95 hover:scale-95 cursor-pointer"
          >
            Check My Profile{" "}
            <span >
              <UserPen size={20} />
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
