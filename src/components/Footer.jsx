import '../pages/Footer.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://formspree.io/f/mpwrwvpj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          alert('Mensaje enviado correctamente ')
          setFormData({ name: '', email: '', message: '' })
        } else {
          alert('Ocurrió un error al enviar el mensaje')
        }
      })
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer-card" data-aos="zoom-in">
        <h2>Contáctame</h2>
        <form className="footer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
        <p className="footer-note">© {new Date().getFullYear()} Dilary. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
