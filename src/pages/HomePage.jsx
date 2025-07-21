import { useNavigate } from "react-router-dom"

const Home = () =>{
    const Navigate = useNavigate()
    return(
        <div className="pt-28 md:pt-22 md:px-40 px-10 md:h-185 h-auto  w-full bg-gray-950 overflow-y-auto flex bg-gray-950">

        <div className=" flex md:flex-row  w-full flex-col-reverse mb-34 md:mb-0">

            <div className="md:w-1/2 w-full flex flex-col justify-center gap-2 md:gap-5">
            <h1 className="flex text-white text-xl md:text-4xl font-bold">Hi, i'm Nazrul Ali</h1>
            <p className="flex text-sky-500 text-md md:text-lg">Mern Stack Developer</p>
            <p className="flex text-white text-xs md:text-sm">
                Aspiring Fullstack Developer with strong interest in building scalable and user friendly web applications using Mern Stack. Eager to contribute in real-world projects.
            </p>
            <button onClick={()=>{Navigate('/skills')}} className="bg-sky-600 text-sm cursor-pointer rounded-lg md:mt-0 mt-3 w-25  md:w-30 h-10 text-black font-semibold hover:bg-blue-800 transition duration-300">My Skills</button>
            </div>

            <div className="md:w-1/2 w-full h-70 md:h-160 flex justify-center items-center">
            <img className="flex h-60 md:h-100" src='images/mypic.jpg' alt="mypic"/>
            </div>

        </div>

        </div>
    )
}

export default Home