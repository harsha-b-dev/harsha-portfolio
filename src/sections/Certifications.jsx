import { FiAward } from "react-icons/fi"
import SectionHeader from "../components/SectionHeader"
import { certifications } from "../data/portfolio"

function Certifications() {
  return (
    <section className="section" id="certifications">
      <SectionHeader
        eyebrow="Certifications"
        title="Credentials that support full stack, testing, and data skills."
        copy="A compact set of certifications aligned with the portfolio's AI and full stack direction."
      />

      <div className="compact-grid">
        {certifications.map((certification) => (
          <article className="compact-card glass-card reveal" key={certification}>
            <FiAward color="#0f9f98" size={24} />
            <h3>{certification}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications
