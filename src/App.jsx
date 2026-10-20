import Navbar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import About from "./components/About";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";
import HomeSection from "./sections/HomeSection";
import ProblemSolvingSection from "./sections/ProblemSolvingSection";
const App = () => {
  return (
    <div className="min-h-screen bg-stone-50 tiktok-sans">
      <Navbar />
      <div className="md:px-20 px-0">
        <Toaster />
        <section id="home">
          <HomeSection />
          <About />
        </section>
        <section id="skills">
          <SkillSection />
        </section>
        <section>
          <ProblemSolvingSection />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
