import '../pages/Timeline.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FaGraduationCap, FaBrain, FaProjectDiagram, FaBriefcase } from 'react-icons/fa'

const etapas = [
  {
    titulo: 'Inicio Académico',
    descripcion: 'Comienzo de la carrera universitaria con enfoque en tecnología e innovación.',
    icono: <FaGraduationCap />
  },
  {
    titulo: 'Desarrollo de Habilidades',
    descripcion: 'Exploración de matemáticas aplicadas, lógica computacional y fundamentos de ingeniería.',
    icono: <FaBrain />
  },
  {
    titulo: 'Proyectos Personales',
    descripcion: 'Construcción de apps interactivas, sitios web responsivos y prototipos digitales.',
    icono: <FaProjectDiagram />
  },
  {
    titulo: 'Aplicaciones Profesionales',
    descripcion: 'Participación en concursos, prácticas profesionales y colaboraciones tecnológicas.',
    icono: <FaBriefcase />
  }
]

export default function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="timeline" id="timeline">
      <div className="timeline-card" data-aos="fade-up">
        <h2 className="timeline-titulo" data-aos="zoom-in">Línea de Tiempo</h2>
        <div className="timeline-container">
          {etapas.map((etapa, i) => (
            <div key={i} className="timeline-item" data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="timeline-icon">{etapa.icono}</div>
              <div className="timeline-content">
                <h3>{etapa.titulo}</h3>
                <p>{etapa.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}