import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../pages/Mapa.css'
import { FaLightbulb, FaRocket, FaMapMarkerAlt, FaPuzzlePiece, FaUsers, FaBook } from 'react-icons/fa'

const pilares = [
  { icon: <FaLightbulb size={24} />, label: 'Creatividad' },
  { icon: <FaRocket size={24} />, label: 'Innovación' },
  { icon: <FaMapMarkerAlt size={24} />, label: 'Proyección' },
  { icon: <FaPuzzlePiece size={24} />, label: 'Resolución' },
  { icon: <FaUsers size={24} />, label: 'Trabajo en equipo' },
  { icon: <FaBook size={24} />, label: 'Aprendizaje' },
]

export default function Mapa() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="mapa animated-bg" id="mapa">
      <div className="mapa-card" data-aos="fade-up">
        <h2 className="mapa-titulo" data-aos="zoom-in">MIS PILARES</h2>
        <div className="hex-grid">
          {pilares.map((pilar, i) => (
            <div className="hex" key={i} data-aos="zoom-in-up" data-aos-delay={i * 100}>
              <div className="hex-icon">{pilar.icon}</div>
              <p>{pilar.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
