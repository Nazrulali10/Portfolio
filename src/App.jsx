import Navbar from "./components/NavigationBar";
import Home from "./pages/HomePage";
import Skills from "./pages/SkillsPage";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 tiktok-sans">
      <Navbar />
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
