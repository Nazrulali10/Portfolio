import React from 'react'
import { useNavigate } from 'react-router-dom';
import { navLinks } from '../assets/assets';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const Navigate = useNavigate()
    


    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    React.useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


    return (
        
            
            <nav className={`flex h-22 fixed top-0 left-0 border border-b-gray-800 bg-gray-950 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 py-4 md:py-6`}>

              
                <h1 className={`font-bold cursor-pointer text-2xl bg-clip-text text-transparent  ${isScrolled?'bg-gradient-to-tl from-indigo-600 via-sky-600 to-sky-600':'bg-gradient-to-tl from-sky-400 via-sky-600 to-indigo-400'}`} onClick={()=>{Navigate('/')}} >Portfolio</h1>

                
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-500" : "text-white"}`}>
                            {link.name}
                            <div className={ `bg-gradient-to-tl from-sky-400 via-sky-600 to-indigo-400 h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    
                </div>

                

                
                <div className="flex items-center gap-3 md:hidden">
                    
                    <Menu  onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 text-white cursor-pointer ${isScrolled ? "invert" : ""}`} />
                </div>

               
                <div className={`fixed top-0 left-0 w-full h-screen bg-gray-950 text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                       
                        <X className="h-6 w-6 text-white"/>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} className='text-white text-sm hover:text-sky-400 transition duaration-200' href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        
    );
}
export default Navbar