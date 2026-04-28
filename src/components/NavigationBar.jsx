
import React from "react";
import { navLinks, ScrollTo } from "../assets/assets";
import { Menu, X } from "lucide-react";

const Navbar = () => {
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
    <div className="  justify-center flex p-4"> 
      <nav
      className={`${isScrolled ? 'bg-white/10 backdrop-blur-md shadow-sm text-rose-500' : 'bg-white'} flex  fixed  border-gray-100 w-[90%] items-center justify-between   transition-all duration-500 z-50 py-4 md:py-6 rounded-2xl shadow-lg md:px-6 px-4`}
    >
      <h1
        className={`cursor-pointer text-2xl `}
        onClick={() => {
          ScrollTo("home");
        }}
      >
        {isScrolled ? 'Nazrul Ali' : 'Portfolio'}
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <button
            onClick={() => ScrollTo(link.id)}
            key={i}
            className={`group flex flex-col gap-0.5 hover:text-rose-500 font-semibold ${isScrolled ? "text-gray-900 " : "text-gray-600"
              }`}
          >
            {link.name}
            <div
              className={`bg-black h-1 w-0 group-hover:w-full rounded-full transition-all duration-300`}
            />
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="flex items-center gap-3 md:hidden ">
        <button
          
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-1 "
        >
          <Menu className="h-6 w-6 text-rose-500" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-2xl text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button
          className="absolute top-4 right-4 p-1"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="h-6 w-6 text-gray-900" />
        </button>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href="#"
            className="text-gray-800 text-lg hover:text-rose-500 transition duration-200"
            onClick={(e) => {
              e.preventDefault();          
              ScrollTo(link.id);           
              setIsMenuOpen(false);        
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
    </div>
    
  );
};

export default Navbar;

