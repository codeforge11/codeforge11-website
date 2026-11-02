//Code import:
import { 
  MyCertificates,
} from '../data'

import { SectionLabel } from '../atoms/atoms'

const MyCertificatesSection = () => {
  return (
    <section id="certificates" className="section">
      <SectionLabel number="03">Certificates</SectionLabel>
      <h2 className="sectionHeading">My certificates</h2>

      <div className="certificatesGrid">
        {MyCertificates.map(cert => (
          <div key={cert.id} className="certificateCard">
            <div className="certificateCardTop" />
            <div className="certificateCardBody">
              <div className="certificateCardHeader">
                <div className="certificateCardBadge">
                  <span className="mono certificateCardBadgeText">{cert.badge}</span>
                </div>
                <div>
                  <h3 className="certificateCardTitle">{cert.name}</h3>
                  <p className="certificateCardIssuer">{cert.issuer}</p>
                </div>
              </div>
              <div className="certificateCardFooter">
                <span className="mono certificateCardId">{cert.id}</span>
                <span className="mono certificateCardDate">{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyCertificatesSection