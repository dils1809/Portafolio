import '../pages/Hero.css'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-card">
        <Navbar />

        <div className="hero-content">
          <h1>Hola, soy <span>Dilary</span>.</h1>
          <p>
            Desarrollo experiencias digitales <br />
            limpias, funcionales y atractivas.
          </p>
          <a href="#projects" className="hero-button">Ver proyectos</a>
        </div>

        <div className="hero-image">
          <img src="/hero-ilustracion.png" alt="Ilustración" />
        </div>
      </div>
    </section>
  )
}
