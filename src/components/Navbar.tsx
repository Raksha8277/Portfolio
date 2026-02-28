import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="fixed w-full bg-blue-200/60 backdrop-blur-md px-8 py-4 flex justify-end gap-10 z-50 shadow-sm">

      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/skills">Skills</Link>

      <Link to="/projects">Projects</Link>

      <Link to="/education">Education</Link>

      <Link to="/certificates">Certificates</Link>

      <Link to="/contact">Contact</Link>

    </nav>
  )
}

export default Navbar