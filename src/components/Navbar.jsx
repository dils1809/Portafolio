// src/components/Navbar.jsx
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <header className="navbar">
      <div className="logo">Dils.dev</div>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#projects">Proyectos</a>
        <a href="#skills">Habilidades</a>
        <a href="#footer">Contacto</a>
        <button className="modo-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}
