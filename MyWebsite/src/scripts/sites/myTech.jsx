import { useState } from "react"

import { SectionLabel } from "../atoms/atoms"
import { Dots } from "../atoms/atoms"

import { 
  myTech,
  Categories,
} from '../data'

const Techs=()=> {
  const [filter, setFilter] = useState('Languages')
  const visible = myTech.filter(x => x.cat === filter)

  return (
    <section id="technologies" className="section">
      <SectionLabel number="02">All Technologies</SectionLabel>
      <h2 className="sectionHeading">Technologies I've used:</h2>

      <div className="filterBar">
        {Categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filterButton${filter === cat ? ' active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="techGrid">
        {visible.map(tech => (
          <div key={tech.name} className="techCard">
            <div className="techCardHeader">
              <span className="techName">{tech.name}</span>
              <span className="mono techCategory">{tech.cat}</span>
            </div>
            <Dots filled={tech.level} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Techs