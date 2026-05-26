import SectionHeader from "../components/SectionHeader"
import { education } from "../data/portfolio"

function Education() {
  return (
    <section className="section" id="education">
      <SectionHeader
        eyebrow="Education"
        title="Academic foundation in Information Science and Engineering."
        copy="Formal education that supports software engineering, data systems, and applied AI development."
      />

      <div className="compact-grid">
        {education.map((item) => (
          <article className="compact-card glass-card reveal" key={item.institution}>
            <span className="card-kicker">{item.result}</span>
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
