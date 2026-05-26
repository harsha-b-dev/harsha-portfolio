import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Certifications from "./sections/Certifications"
import Achievements from "./sections/Achievements"
import Education from "./sections/Education"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import "./App.css"

function App() {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
