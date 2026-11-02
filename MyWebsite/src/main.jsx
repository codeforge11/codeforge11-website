import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ParticlesProvider } from '@tsparticles/react'

//Code import:
import { NavSection } from './scripts/data'

import Navbar from './scripts/sites/header'

import AboutMeS from './scripts/sites/aboutMe'
import MyCertificatesSection from './scripts/sites/myCertificates'
import MyProjects from './scripts/sites/myProjects'
import Footer from './scripts/sites/footer'

import Techs from './scripts/sites/myTech'
import FavoriteTechnology from './scripts/sites/favTech'

import BackgroundEffect from './scripts/atoms/BackgroundEffect'

import ParticlesInit from './scripts/atoms/particlesEngine'

//Styles:
import './styles/index.css'
import './styles/atoms.css'
import './styles/header.css'
import './styles/aboutMe.css'
import './styles/footer.css'
import './styles/favTech.css'
import './styles/myTech.css'
import './styles/myProjects.css'
import './styles/myCertificates.css'

function App() {
  const [activeSection, setActiveSection] = useState('AboutMe')

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) setActiveSection(target.id)
      }),
      { threshold: 0.3 }
    )
    NavSection
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
      .forEach(element => obs.observe(element))

    return () => obs.disconnect()
  }, [])

  return (
    <div>
      <BackgroundEffect />

      <Navbar active={activeSection} />

      <div className="appContent">
        <AboutMeS />
        <FavoriteTechnology />
        <Techs />

        <MyCertificatesSection />
        <MyProjects />

        <Footer />
      </div>
    </div>
  )
}

export default App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParticlesProvider init={ParticlesInit}>
      <App />
    </ParticlesProvider>
  </StrictMode>,
)
