// src/components/Hobbies.jsx
import "../pages/Hobbies.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const hobbies = [
  { emoji: '📚', titulo: 'Leer', descripcion: 'Disfruto leer libros de ciencia ficción y desarrollo personal.' },
  { emoji: '⚽', titulo: 'Jugar fútbol', descripcion: 'Me encanta jugar partidos para mantenerme activa y divertirme.' },
  { emoji: '💻', titulo: 'Programar', descripcion: 'Dedico tiempo a crear proyectos personales que me desafíen.' },
  { emoji: '🥤', titulo: 'Café frío', descripcion: 'Ir por café frío; para mí, es una forma perfecta de socializar y relajarse.' },
  { emoji: '🌿', titulo: 'Naturaleza', descripcion: 'Aprecio las caminatas al aire libre y los paisajes tranquilos.' },
  { emoji: '🎧', titulo: 'Música', descripcion: 'Escucho música para inspirarme y concentrarme mientras hago cualquier cosa.' }
]

export default function Hobbies() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="hobbies" id="hobbies">
      <div className="hobbies-card">
        <div className="card-style">
          <h2 data-aos="zoom-in">Un poco más sobre mí</h2>
          <div className="hobbies-grid">
  <div className="hobbies-row" data-aos="fade-up" data-aos-delay="100">
    {hobbies.slice(0, 3).map((hobbie, i) => (
      <div key={i} className="hobbie-card">
        <div className="emoji">{hobbie.emoji}</div>
        <h3>{hobbie.titulo}</h3>
        <p>{hobbie.descripcion}</p>
      </div>
    ))}
  </div>
  <div className="hobbies-row" data-aos="fade-up" data-aos-delay="400">
    {hobbies.slice(3).map((hobbie, i) => (
      <div key={i + 3} className="hobbie-card">
        <div className="emoji">{hobbie.emoji}</div>
        <h3>{hobbie.titulo}</h3>
        <p>{hobbie.descripcion}</p>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  )
}
