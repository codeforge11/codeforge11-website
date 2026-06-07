import BackgroundEffect from './assets/scripts/atoms/BackgroundEffect';
import LTechnologies from './assets/scripts/sections/LTechnologies';
import AboutMe from './assets/scripts/sections/AboutMe';
import MyProjects from './assets/scripts/sections/MyProjects';
import Techno,{MainIconFolder} from './assets/scripts/sections/Techno'
import Bottom from './assets/scripts/sections/Bottom'

import './assets/styles/index.css';
import './assets/styles/favTechCard.css';
import './assets/styles/projects.css'
import './assets/styles/techno.css'

function App() {
  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
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

            <Bottom/>
          
      </div>
    </div>
  )
}

export default App