

const SkillCard = ({item}) => {
  return (
    <div className='group flex flex-col justify-center  bg-gray-50 hover:bg-rose-400 rounded-3xl px-12 py-6 gap-2 md:gap-4 hover:scale-105 hover:text-white marker:text-rose-500 hover:marker:text-white duration-300 transition-all'>
        <div>
             <h1 className='text-xl '>{item.category}</h1>
        </div>
       
        <div className='grid grid-cols-1 md:grid-cols-3  text-gray-500 group-hover:text-white  text-sm'>
              {item.skills.map((skill,i)=>(
            <li key={i}>{skill}</li>
        ))}
        </div>
      
    </div>
  )
}

export default SkillCard