import { useState } from "react"
import { favTech } from "../data"
import { SectionLabel } from "../atoms/atoms"

const techClass = {
  'Go/Golang': 'go',
  Docker: 'docker',
  Gin: 'gin',
  Qt: 'qt',
  React: 'react',
}

function FavoriteTechnology() {
  const [active, setActive] = useState(0)
  const tech = favTech[active]

  return (
    <section id="Favourites" className="section">
    <SectionLabel number="01">Favorite Technologies</SectionLabel>
    <h2 className="sectionHeading">Tools I reach for first.</h2>

    <div className="favGrid">
      {/* Tab list */}
      <div className="favTabs">
        {favTech.map((x, y) => (
          <button
            key={x.name}
            onClick={() => setActive(y)}
            className={`favTab ${techClass[x.name]}${y === active ? ' active' : ''}`}
          >
            <span className={`favIcon ${techClass[x.name]}`}>
              <span className="mono favIconText">{x.icon}</span>
            </span>
            <span className="favIconLabel">
              {x.name}
          </span>
          </button>
        ))}
      </div>

      {/* Superrr Detail */}
      <div className="favDetail">
        <div className={`favDetailIcon ${techClass[tech.name]}`}>
          <span className="mono favDetailIconText">{tech.icon}</span>
        </div>
        <h3 className="favDetailTitle">{tech.name}</h3>
        <p className="favDetailReason">{tech.reason}</p>
      </div>
    </div>
    </section>
  )
}

export default FavoriteTechnology