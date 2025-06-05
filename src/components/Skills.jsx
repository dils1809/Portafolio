import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../pages/Skills.css'

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaPhp,
  FaCode
} from 'react-icons/fa'
import {
  SiPostgresql,
  SiVite
} from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
  { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#f7df1e" /> },
  { name: 'React', icon: <FaReact color="#61dbfb" /> },
  { name: 'Vite', icon: <SiVite color="#9461fd" /> },
  { name: 'Git', icon: <FaGitAlt color="#f1502f" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#68a063" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
  { name: 'C#', icon: <FaCode color="#9b4f96" /> },
  { name: 'PHP', icon: <FaPhp color="#8993be" /> },
]

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="skills" id="skills">
      <div className="skills-card" data-aos="fade-up">
        <h2 className="skills-title" data-aos="zoom-in">HABILIDADES</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card" data-aos="zoom-in-up" data-aos-delay={i * 100}>
              <div className="icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
