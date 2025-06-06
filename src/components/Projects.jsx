import "../pages/Projects.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const proyectos = [
  {
    titulo: 'E-Commerce H&M',
    descripcion: 'Simulación de tienda en línea con carrito, favoritos y filtros.',
    tecnologias: ['React', 'Vite', 'useContext'],
    github: 'https://github.com/dils1809/ecommerce-hm'
  },
  {
    titulo: 'Replica Visual',
    descripcion: 'Replica del logo de Super Mario desde 0',
    tecnologias: ['CSS'],
    github: 'https://github.com/dils1809/Lab4Css.git'
  },
  {
    titulo: 'Plataforma de Incidentes',
    descripcion: 'API para que los empleados generen incidentes con sus equipos de trabajo.',
    tecnologias: ['Express', 'Node', 'SQLite'],
    github: 'https://github.com/dils1809/MiApi.git'
  }
]

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="projects" id="projects">
      <div className="projects-card" data-aos="fade-up">
        <h2 className="projects-title" data-aos="zoom-in">MIS PROYECTOS</h2>
        <div className="projects-grid">
          {proyectos.map((proyecto, i) => (
            <div key={i} className="project-card" data-aos="fade-up" data-aos-delay={i * 100}>
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <div className="tech-list">
                {proyecto.tecnologias.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={proyecto.github} target="_blank">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
