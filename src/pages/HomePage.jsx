
import { useNavigate } from "react-router-dom"

const Home = () => {
  const Navigate = useNavigate()

  return (
    <div className="pt-28 md:pt-22 md:px-40 px-10 md:h-185 h-auto w-full overflow-y-auto flex bg-gray-950">

      <div className="flex md:flex-row w-full flex-col-reverse mb-37 md:mb-0">

      
        <div className="md:w-1/2 w-full flex flex-col justify-center gap-2 md:gap-5">

          <h1 className="flex text-white text-xl md:text-4xl font-bold opacity-0 animate-[fade-in_1s_ease-out_forwards]">
            Hi, I'm Nazrul Ali
          </h1>

          <p className="flex text-sky-500 text-md md:text-lg opacity-0 animate-[fade-in_1s_0.3s_ease-out_forwards]">
            Full Stack Developer
          </p>

          <p className="flex text-white text-xs md:text-sm opacity-0 animate-[fade-in_1s_0.6s_ease-out_forwards]">
            Full-stack developer focused on continuous learning and building impactful products with Next.js, React, and the MERN stack.
          </p>

          <button
            onClick={() => Navigate('/skills')}
            className="bg-sky-600 text-sm cursor-pointer rounded-lg md:mt-0 mt-3 w-25 md:w-30 h-10 text-black font-semibold hover:bg-blue-800 transition duration-300 opacity-0 animate-[fade-up_1s_0.9s_ease-out_forwards]"
          >
            My Skills
          </button>
        </div>

       
        <div className="md:w-1/2 w-full h-70 md:h-160 flex justify-center items-center rounded-md">
          <img
            className="flex h-60 md:h-100 rounded-full hover:scale-110 transition-transform duration-300 opacity-0 animate-[fade-in_1s_1.2s_ease-out_forwards]"
            src="images/mypic.jpg"
            alt="mypic"
          />
        </div>
      </div>

     
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fade-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  )
}

export default Home
