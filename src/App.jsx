import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ProjectsContainer } from "./components/ProjectsContainer.jsx";
import { Aboutme } from "./components/Aboutme";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import './styles/main.css'

export function App() {
  return (
    <>
      <Navbar />
      <div className="containerPrin">
        <Home />
        <Aboutme />
        <ProjectsContainer />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
