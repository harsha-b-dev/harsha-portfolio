import { FiCheckCircle } from "react-icons/fi"
import SectionHeader from "../components/SectionHeader"
import { experiences } from "../data/portfolio"

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Professional experience across AI, full stack systems, APIs, and deployment."
        copy="Hands-on work building AI-integrated applications, backend services, dashboards, and production-ready database-driven systems."
      />

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="experience-card glass-card reveal" key={experience.company}>
            <div className="card-topline">
              <div>
                <span className="card-kicker">{experience.company}</span>
                <h3>{experience.role}</h3>
              </div>
              <span className="date-chip">{experience.date}</span>
            </div>

            <p>{experience.summary}</p>
            <ul className="timeline-list">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>
                  <FiCheckCircle />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="tag-row">
              {experience.tech.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
