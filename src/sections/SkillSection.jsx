import { skilldata } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight } from 'lucide-react'
import "swiper/css";
const SkillSection = () => {
  return (
    <div className="flex flex-col bg-indigo-500 w-full py-15 px-3 md:px-12">
      <div className=" text-2xl px-3 md:text-3xl flex flex-col w-20 text-white">
        Skills
        <div className="w-[75%] h-0.5 bg-white rounded-full mt-1"></div>
      </div>
      
      <Swiper
        slidesPerView={1.1}
        spaceBetween={5}
        slideToClickedSlide={true}
        speed={700}
        className="w-80 mt-10 h-90"
      >
        {skilldata.map((item) => (
          <SwiperSlide
            key={item.category}
          >
            <div className="bg-indigo-100 rounded-4xl px-10 py-6 shadow-lg">
              <div className="flex gap-2 justify-center items-center"><h1 className="text-lg text-black">{item.category}</h1><span className="text-indigo-500">{item.icon}</span></div> 
            <div className="flex flex-col justify-center items-center p-3 gap-1 mt-2">
              {item.skills.map((val) => (
                <div className=" font-medium text-gray-500 rounded-2xl flex justify-center px-2 py-1 hover:scale-105 duration-300 text-sm">
                  <p>{val}</p>
                </div>
              ))}
            </div>
            </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex w-full mt-5 justify-center items-center text-white animate-bounce duration-500">
        Swipe <ChevronRight size={15} />
      </div>
    </div>
  );
};

export default SkillSection;
