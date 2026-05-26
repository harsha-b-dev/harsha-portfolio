import { FiCheckCircle } from "react-icons/fi"
import SectionHeader from "../components/SectionHeader"
import { focusAreas, profile } from "../data/portfolio"

function About() {
  return (
    <section className="section section-tight" id="about">
      <SectionHeader
        eyebrow="About"
        title="Developer focused on intelligent, useful software."
        copy={profile.about}
      />

      <div className="about-grid">
        <div className="panel glass-card reveal">
          <h3>What I Build</h3>
          <p>
            My work blends frontend interfaces, backend APIs, databases, and AI
            services into complete products. I care about clean user flows,
            reliable architecture, and interfaces that feel easy for people to
            trust and use.
          </p>
        </div>

        <div className="panel glass-card reveal">
          <h3>Core Strengths</h3>
          <ul className="focus-list">
            {focusAreas.map((area) => (
              <li key={area}>
                <FiCheckCircle />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
