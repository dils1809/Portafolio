import { useState, useEffect } from 'react'
import '../pages/Navbar.css'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <header className="navbar">
      <div className="logo">Dils.dev</div>
      <nav className="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#projects">Proyectos</a>
        <a href="#skills">Habilidades</a>
        <a href="/cv.pdf" download>CV</a>
        <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}