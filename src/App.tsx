import Navbar from "./components/Navbar"

import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Certificate from "./components/Certificate"
import Contact from "./components/Contact"

function App() {
  return (
    <div>

      <Navbar />

      <div className="pt-24 scroll-smooth">

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="certificates">
          <Certificate />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </div>

    </div>
  )
}

export default App
