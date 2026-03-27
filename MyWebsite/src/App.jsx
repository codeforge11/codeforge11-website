import BackgroundEffect from './assets/scripts/atoms/BackgroundEffect';
import LTechnologies from './assets/scripts/sections/LTechnologies';
import AboutMe from './assets/scripts/sections/AboutMe';
import MyProjects from './assets/scripts/sections/MyProjects';
import Certificates from './assets/scripts/sections/Certificates';
import Techno from './assets/scripts/sections/Techno'

import './assets/styles/index.css';
import './assets/styles/techCard.css';
import './assets/styles/projects.css'
import './assets/styles/techno.css'

function App() {
  return (
    <>
      <BackgroundEffect />
        
      <header>
          <div className="mx-auto flex h-full max-w-content w-full" >
              <a href="/"><img src="src/assets/img/logomark.svg" alt="logomark" height="90" /></a>
          </div>

      </header>
    
      <div className="container">
          <AboutMe/>

          <h2>My projects:</h2>
            <MyProjects/>

          <h2>Technologies I love:</h2>
          <LTechnologies/>

          <h2>Technologies I've used:</h2>
            <Techno/>

          <h2>My certificates:</h2>
            <Certificates/>

            <div id="bottom">
                <div>
                    <a href="https://discord.com/users/626479749262475294" target="_blank"><img src="https://raw.githubusercontent.com/LelouchFR/skill-icons/refs/heads/main/assets/discord.svg" width="64" height="64" /></a>
                    <a href="https://stackoverflow.com/users/27400639" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stackoverflow/stackoverflow-original.svg" width="64" height="64" /></a>
                    <a href="https://github.com/codeforge11" target="_blank"><img src="https://raw.githubusercontent.com/LelouchFR/skill-icons/refs/heads/main/assets/github-auto.svg" width="64" height="64" /></a>
                </div>
                <p>Made with ☕ by ©codeforge11 2026</p>
            </div>
          
      </div>
    </>
  )
}

export default App
