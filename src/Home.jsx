import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Work />
        <Education />
        <Projects />
        <Bio />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default Home