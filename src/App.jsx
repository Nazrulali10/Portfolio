import Navbar from "./components/NavigationBar";
import Home from "./pages/HomePage";

import Projects from "./pages/ProjectsPage";
import { Toaster } from "react-hot-toast";
import Email from "./components/Email";
import Footer from "./components/Footer";
import About from "./components/About";
import SkillsPageNew from "./pages/SkillsPageNew";

const App = () => {
  return (
    <div className="min-h-screen bg-white tiktok-sans">
      <Navbar />
      <div>
        <Toaster />
        <section id="home">
          <Home />
          <About/>
        </section>
        <section id="skills">
          <SkillsPageNew />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section>
          <Email id="contact" />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
