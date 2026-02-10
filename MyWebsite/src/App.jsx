import BackgroundEffect from './assets/scripts/BackgroundEffect';
import Technologies from './assets/scripts/Technologies';
import LTechnologies from './assets/scripts/LTechnologies';
import AboutMe from './assets/scripts/AboutMe';
import './index.css';
import './techCard.css';

function App() {
  return (
    <>
      <BackgroundEffect />
        
      <header>
          <div class="mx-auto flex h-full max-w-content w-full" >
              <a href="/"><img src="src/assets/img/logomark.svg" alt="logomark" height="90" /></a>
          </div>

      </header>
    
      <div class="container">
          <AboutMe/>

          <h2>My projects:</h2>
          <div id="projects">
              <p>&#9679; <a href="https://github.com/codeforge11/SQLMason">SQLMason</a> - Simple and easy-to-use database management tool.</p>
              <p>&#9679; <a href="https://github.com/codeforge11/CactuDash">CactuDash</a> - Minimalistic and highly optimized dashboard for efficient server management, including Docker and Docker Compose. </p>
              <p>&#9679; <a href="https://github.com/codeforge11/TFT-DesktopClock">TFT-DesktopClock</a> - Simple digital desk clock built with Arduino and a TFT display using appropriate libraries.</p>
          </div>

          <h2>Technologies I love:</h2>
          <LTechnologies/>

          <h3>Technologies I've used:</h3>
            <Technologies/>

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
