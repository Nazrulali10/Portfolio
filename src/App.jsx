import Navbar from "./components/NavBar";
import Home from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import About from "./components/About";
import SkillsPageNew from "./pages/SkillsPageNew";
import React from "react";
import NavBar from "./components/NavBar";
import ProblemSolver from "./components/ProblemSolver";
const Projects = React.lazy(() => import("./pages/ProjectsPage"));
const App = () => {
  return (
    <div className="min-h-screen bg-white tiktok-sans">
      <Navbar />
      <div>
        <Toaster />
        <section id="home">
          <Home />
          <About />
        </section>
        <section id="skills">
          <SkillsPageNew />
        </section>
        <section>
          <ProblemSolver />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
