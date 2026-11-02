import { Projects } from "../data"
 
import { SectionLabel, Tag } from '../atoms/atoms'
 
function MyProjects() {
  return (
    <section id="Projects" className="section">
      <SectionLabel number="04">Projects</SectionLabel>
      <h2 className="sectionHeading">Things I've built.</h2>
 
      <div className="projectsGrid">
        {Projects.map(p => (
          <div key={p.name} className="projectCard">
            <h3 className="projectTitle">{p.name}</h3>
 
            <p className="projectDescription">{p.desc}</p>
 
            <div className="projectTags">
              {p.tags.map(tag => <Tag key={tag} label={tag} />)}
            </div>
 
            {p.url !== '#' && (
              <div className="projectLinkRow">
                <a className="projectLink" href={p.url} target="_blank" rel="noopener noreferrer">
                  <span className="mono projectLinkText">View →</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
 
export default MyProjects
 
