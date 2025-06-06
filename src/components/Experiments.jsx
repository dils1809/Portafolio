import '../pages/Experiments.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FaLaptopCode, FaCertificate, FaCalculator, FaCode } from 'react-icons/fa'

const experimentos = [
  {
    titulo: 'Becada por 3 fundaciones',
    icono: <FaCertificate />
  },
  {
    titulo: 'Tutora de matemáticas',
    icono: <FaCalculator />
  },
  {
    titulo: 'Estudiante de Ing en computación',
    icono: <FaLaptopCode />
  },

]

export default function Experimentos() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="experimentos" id="experimentos">
      <div className="experimentos-card" data-aos="fade-up">
        <h2 className="experimentos-titulo" data-aos="zoom-in">LOGROS</h2>
        <div className="experimentos-grid">
          {experimentos.map((exp, i) => (
            <div key={i} className="experimento-item" data-aos="flip-left" data-aos-delay={i * 100}>
              <div className="experimento-icono">{exp.icono}</div>
              <h3>{exp.titulo}</h3>
              <p>{exp.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
