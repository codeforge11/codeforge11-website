import { AboutMe } from '../data'

function AboutMeS() {
  const [first, second] = AboutMe.name.split(' ')

  return (
    <section id="AboutMe" className="section aboutSection">
      <div className="aboutBackground" />
      <div className="aboutContent">

        <h1 className="aboutName">
          {first}
        <br />

        <span className="aboutNameAccent">
          {second}
        </span>
        </h1>

        <div className="gridAboutMe">
          <div>
            <span className="mono aboutIntro">
              &gt; {'New programmer entering the world of programming'}
            </span>

            <div className="aboutText">
              <p>I am an aspiring programmer beginning my journey in coding and eager to pick up new technologies.</p>
              <p>
              🌍 I am based in  
              <span className="aboutLocationPol"> Pol</span>
              <span className="aboutLocationAnd">and</span>
              </p>
              <p>🌱 I am currently learning new technologies</p>
              <p>📖 I specialize in solving complex problems</p>
              <p>☕ I live in love with coffee</p>
            </div>
          </div>

          <div className="contactCard">
            {AboutMe.links.map(l => (
              <div key={l.label} className="contactRow">
                <span className="mono contactLabel">{l.label}</span>
                <span className="mono contactValue">{l.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeS