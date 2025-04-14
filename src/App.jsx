import Header from './Header.jsx'
import Hero from './hero.jsx'
import Skills from './skills.jsx'
import Projects from './Projects.jsx'
import Certs from './cert.jsx'
import Contact from './contact.jsx'

function App() {
  return (
    <>    
    <div id="home">
    <Header />
    </div>
    <Hero />
    <div id="skill">
    <Skills />
    </div>    
    <div id="projects">
    <Projects />
    </div>
    <div id="certs">
    <Certs />
    </div>    
    <div id="contact">
    <Contact />
    </div>    
    </>
  )
}

export default App
