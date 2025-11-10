export default function FlipCard({skill}) {
  return (
    <div className="flex justify-center items-center w-36 h-48 md:w-64 md:h-80">
      
      {/* Outer wrapper gives perspective */}
      <div className="w-full h-full [perspective:1000px]">

        {/* Inner card: handles the flipping */}
        <div className=" relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">

          {/* FRONT SIDE */}
          <div className="absolute inset-0 bg-gray-950 text-white border-2 border-sky-500 flex flex-col items-center justify-center rounded-xl shadow-lg [backface-visibility:hidden]">
            <img
               alt={skill.name}
                 src={skill.pictureUrl}
                 className="object-contain h-20 w-20"
               />
               <h1>{skill.name}</h1>
          </div>

          {/* BACK SIDE */}
          <div className="absolute inset-0 bg-sky-800 text-white flex flex-col items-center justify-center rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h1>{skill.name}</h1>
                <p className="text-sm px-4 text-center">
             {skill.description}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
