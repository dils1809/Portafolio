import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experiments from './components/Experiments'
import Timeline from './components/Timeline'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'
import Mapa from './components/Mapa'


function App() {
  return (
    <div>
      <Hero /> {/* Navbar ya viene incluido */}
      <Mapa />
      <Skills />
      <Projects />
      <Experiments />
      <Timeline />
      <Hobbies />
      <Footer />
    </div>
  )
}

export default App