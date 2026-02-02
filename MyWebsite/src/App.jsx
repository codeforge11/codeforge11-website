// import reactLogo from './assets/react.svg'
import './index.css'

function App() {
  const mainIconFolder = "src/assets/icons/";
 
  return (
    <>
      <header>
          <div class="mx-auto flex h-full max-w-content w-full" >
              <a href="/"><img src="src/assets/img/logomark.svg" alt="logomark" height="90" /></a>
          </div>

      </header>
    
      <div class="container">
        <h1> Hello! I'm codeforge11</h1>
          <div class="text">
            <p>I specialize in Go/Golang.</p>
            <p>I create efficient software solutions with clean code. Check out my projects and skills in software engineering.</p>
          </div>

          <h2>My projects:</h2>
          <div id="projects">
              <p>&#9679; <a href="https://github.com/codeforge11/SQLMason">SQLMason</a> - Simple and easy-to-use database management tool.</p>
              <p>&#9679; <a href="https://github.com/codeforge11/CactuDash">CactuDash</a> - Minimalistic and highly optimized dashboard for efficient server management, including Docker and Docker Compose. </p>
              <p>&#9679; <a href="https://github.com/codeforge11/TFT-DesktopClock">TFT-DesktopClock</a> - Simple digital desk clock built with Arduino and a TFT display using appropriate libraries.</p>
          </div>

          <h2>Technologies I've used:</h2>
              <div class="technologies">
                      <div class="technologyBoard">

                        <table class="Table">

                            <tr>
                                <td><a href="https://golang.org" target="_blank"><img src={mainIconFolder + "golang.svg"}  /></a></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td><a href="https://www.jetbrains.com/go/" target="_blank"><img src={mainIconFolder+"goland.svg"}  /></a></td>
                            </tr> 

                            <tr>
                                <td><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"><img src={mainIconFolder+"html.svg"}  /></a></td>
                                <td><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src={mainIconFolder+"css.svg"}  /></a></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td><a href="https://www.arduino.cc" target="_blank"><img src={mainIconFolder+"arduino.svg"} /></a></td>
                                <td><a href="https://www.jetbrains.com/ruby/" target="_blank"><img src={mainIconFolder+"rubymine.svg"} /></a></td>
                                <td><a href="https://www.jetbrains.com/pycharm/" target="_blank"><img src={mainIconFolder+"pycharm.svg"}  /></a></td>
                                <td><a href="https://www.jetbrains.com/clion/" target="_blank"><img src={mainIconFolder+"clion.svg"}  /></a></td>
                                <td><a href="https://www.jetbrains.com/datagrip/" target="_blank"><img src={mainIconFolder+"datagrip.svg"}  /></a></td>
                                <td><a href="https://www.jetbrains.com/dataspell/" target="_blank"><img src={mainIconFolder+"dataspell.svg"}  /></a></td>
                            </tr>

                            <tr>
                                <td><a href="https://www.php.net" target="_blank"><img src={mainIconFolder+"php.svg"} /></a></td>
                                <td><a href="https://www.ruby-lang.org" target="_blank"><img src={mainIconFolder+"ruby.svg"} /></a></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td><a href="https://www.torproject.org/" target="_blank"><img src={mainIconFolder+"tor.svg"} /></a></td>
                                <td><a href="https://www.gimp.org/" target="_blank"><img src={mainIconFolder+"gimp.svg"} /></a></td>
                                <td><a href="https://www.figma.com" target="_blank"><img src={mainIconFolder+"figma.svg"} /></a></td>
                                <td><a href="https://developer.android.com/studio" target="_blank"><img src={mainIconFolder+"androidstudio.svg"} /></a></td>
                                <td><a href="https://code.visualstudio.com" target="_blank"><img src={mainIconFolder+"vscode.svg"} /></a></td>
                                <td><a href="https://visualstudio.microsoft.com" target="_blank"><img src={mainIconFolder+"vs.svg"} /></a></td>
                            </tr>

                            <tr>
                                <td><a href="https://www.python.org" target="_blank"><img src={mainIconFolder+"python.svg"} /></a></td>
                                <td><a href="https://isocpp.org" target="_blank"><img src={mainIconFolder+"cpp.svg"}  /></a></td>
                                <td><a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank"><img src={mainIconFolder+"cs.svg"}  /></a></td>
                                <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src={mainIconFolder+"javascript.svg"} /></a></td>
                                <td><a href="https://www.archlinux.org" target="_blank"><img src={mainIconFolder+"arch-auto.svg"} /></a></td>
                                <td><a href="https://www.debian.org" target="_blank"><img src={mainIconFolder+"debian.svg"} /></a></td>
                                <td><a href="https://getfedora.org" target="_blank"><img src={mainIconFolder+"fedora-auto.svg"}  /></a></td>
                                <td><a href="https://ubuntu.com" target="_blank"><img src={mainIconFolder+"ubuntu.svg"}  /></a></td>
                                <td><a href="https://pop.system76.com" target="_blank"><img src={mainIconFolder+"popos.svg"} /></a></td>
                                <td><a href="https://nodejs.org" target="_blank"><img src={mainIconFolder+"nodejs-auto.svg"}/></a></td>
                                <td><a href="https://www.virtualbox.org/" target="_blank"><img src={mainIconFolder+"virtualbox-auto.svg"} /></a></td>
                                <td><a href="https://www.proxmox.com" target="_blank"><img src={mainIconFolder+"proxmox-auto.svg"}/></a></td>
                                <td><a href="https://stackoverflow.com" target="_blank"><img src={mainIconFolder+"stackoverflow-auto.svg"}/></a></td>
                                <td><a href="https://www.cloudflare.com/" target="_blank"><img src={mainIconFolder+"cloudflare-auto.svg"} /></a></td>
                                <td><a href="https://ollama.com/" target="_blank"><img src={mainIconFolder+"ollama-auto.svg"} /></a></td>
                            </tr>

                            <tr>
                                <td><a href="https://react.dev" target="_blank"><img src={mainIconFolder+"react-auto.svg"} /></a></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td><a href="https://endeavouros.com/" target="_blank"><img src={mainIconFolder+"endeavour.svg"} /></a></td>
                                <td><a href="https://www.qt.io" target="_blank"><img src={mainIconFolder+"qt-auto.svg"} /></a></td>
                                <td><a href="https://pesde.dev/" target="_blank"><img src={mainIconFolder+"pesde.svg"}/></a></td>
                                <td><a href="https://www.freebsd.org/" target="_blank"><img src={mainIconFolder+"bsd-auto.svg"} /></a></td>
                                <td><a href="https://www.microsoft.com/windows" target="_blank"><img src={mainIconFolder+"windows-auto.svg"} /></a></td>
                                <td><a href="https://unity.com" target="_blank"><img src={mainIconFolder+"unity-auto.svg"} /></a></td>
                                <td><a href="https://www.putty.org" target="_blank"><img src={mainIconFolder+"putty-auto.svg"} /></a></td>
                                <td><a href="https://www.raspberrypi.org" target="_blank"><img src={mainIconFolder+"raspberrypi-auto.svg"} /></a></td>
                                <td><a href="https://git-scm.com" target="_blank"><img src={mainIconFolder+"git-auto.svg"} /></a></td>
                                <td><a href="https://github.com" target="_blank"><img src={mainIconFolder+"github-auto.svg"} /></a></td>
                                <td><a href="https://grafana.com" target="_blank"><img src={mainIconFolder+"grafana-auto.svg"} /></a></td>
                            </tr>

                            <tr>
                                <td ><a href="https://www.apachefriends.org/index.html" target="_blank"><img src={mainIconFolder+"xampp.svg"} /></a></td>
                                <td ><a href="https://cockpit-project.org/" target="_blank"><img src={mainIconFolder+"cockpit.svg"} /></a></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td><a href="https://gin-gonic.com/" target="_blank"><img src={mainIconFolder+"gin-auto.svg"} /></a></td>
                                <td class="empty"></td>
                                <td><a href="https://www.npmjs.com" target="_blank"><img src={mainIconFolder+"npm-auto.svg"} /></a></td>
                                <td class="empty"></td>
                                <td class="empty"></td>               
                                <td><a href="https://podman.io/" target="_blank"><img src={mainIconFolder+"podman-auto.svg"} /></a></td>
                                <td><a href="https://www.docker.com" target="_blank"><img src={mainIconFolder+"docker.svg"} /></a></td>
                                <td class="empty"></td>
                                <td><a href="https://www.sqlite.org/" target="_blank"><img src={mainIconFolder+"sqlite.svg"} /></a></td>
                                <td><a href="https://www.deepseek.com/" target="_blank"><img src={mainIconFolder+"deepseek.ico"} /></a></td>
                                <td><a href="https://claude.ai/" target="_blank"><img src={mainIconFolder+"claude.ico"} /></a></td>
                            </tr>

                            <tr>
                                <td ><a href="https://github.com/gtsteffaniak/filebrowser" target="_blank"><img src={mainIconFolder+"filebrowser.svg"} /></a></td>
                                <td ><a href="https://www.openmediavault.org/" target="_blank"><img src={mainIconFolder+"openmediavault.svg"} /></a></td>
                                <td><a href="https://filerise.net/" target="_blank"><img src={mainIconFolder+"filerise.svg"} /></a></td>
                                <td><a href="https://homarr.dev/" target="_blank"><img src={mainIconFolder+"homarr.svg"} /></a></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td class="empty"></td>               
                                <td class="empty"></td>
                                <td class="empty"></td>
                                <td><a href="https://mariadb.org" target="_blank"><img src={mainIconFolder+"mariadb-auto.svg"} /></a></td>
                                <td><a href="https://www.mysql.com" target="_blank"><img src={mainIconFolder+"mysql-auto.svg"} /></a></td>
                                <td ><a href="https://gemini.google.com/" target="_blank"><img src={mainIconFolder+"gemini.svg"} /></a></td>

                            </tr>

                        </table>
                      </div>
              </div>

        <div id="bottom">
            <div>
                <a href="https://discord.com/users/626479749262475294" target="_blank"><img src="https://raw.githubusercontent.com/LelouchFR/skill-icons/refs/heads/main/assets/discord.svg" width="64" height="64" /></a>
                <a href="https://stackoverflow.com/users/27400639" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stackoverflow/stackoverflow-original.svg" width="64" height="64" /></a>
                <a href="https://github.com/codeforge11" target="_blank"><img src="https://raw.githubusercontent.com/LelouchFR/skill-icons/refs/heads/main/assets/github-auto.svg" width="64" height="64" /></a>
            </div>
            <p>Made with ❤️ by ©codeforge11 2026</p>
        </div>
          
      </div>
    </>
  )
}

export default App
