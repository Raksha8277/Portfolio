import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-blue-200/60 backdrop-blur-md shadow-md z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

      
        <h1 className="text-xl font-bold">Portfolio</h1>

      
        <div className="hidden md:flex gap-8 font-medium">

          <Link to="/" className="hover:text-blue-700">Home</Link>

          <Link to="/about" className="hover:text-blue-700">About</Link>

          <Link to="/skills" className="hover:text-blue-700">Skills</Link>

          <Link to="/projects" className="hover:text-blue-700">Projects</Link>

          <Link to="/education" className="hover:text-blue-700">Education</Link>

          <Link to="/certificates" className="hover:text-blue-700">Certificates</Link>

          <Link to="/contact" className="hover:text-blue-700">Contact</Link>

        </div>

        
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 font-medium bg-blue-200/90 backdrop-blur-md">

          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>

          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>

          <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>

          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>

          <Link to="/education" onClick={() => setIsOpen(false)}>Education</Link>

          <Link to="/certificates" onClick={() => setIsOpen(false)}>Certificates</Link>

          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

        </div>
      )}

    </nav>
  )
}

export default Navbar
