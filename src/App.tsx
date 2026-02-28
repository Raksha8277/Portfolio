import { BrowserRouter, Routes, Route } from "react-router-dom"

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
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home page */}
        <Route path="/" element={<Hero />} />

        {/* Other pages */}
        <Route path="/about" element={<About />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/education" element={<Education />} />

        <Route path="/certificates" element={<Certificate />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
