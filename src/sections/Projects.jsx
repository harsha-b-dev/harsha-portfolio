import { FiCheckCircle, FiExternalLink, FiGithub } from "react-icons/fi"
import SectionHeader from "../components/SectionHeader"
import { projects } from "../data/portfolio"

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="Production-minded projects with AI and full stack depth."
        copy="Selected work showing ML, Flask, FastAPI, dashboards, databases, authentication, deployment, and admin workflows."
      />

      <div className="projects-showcase">
        {projects.map((project, index) => (
          <article
            className={`project-card glass-card reveal ${index === 0 ? "featured-project" : ""}`}
            key={project.name}
          >
            <img className="project-cover" src={project.cover} alt={`${project.name} cover`} />

            <span className="card-kicker">{project.type}</span>
            <h3>{project.name}</h3>
            <strong className="project-impact">{project.impact}</strong>
            <p>{project.description}</p>

            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>
                  <FiCheckCircle />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="tag-row">
              {project.tech.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <a className="mini-link" href={project.live} target="_blank" rel="noreferrer">
                <FiExternalLink />
                Live Demo
              </a>
              <a className="mini-link" href={project.github} target="_blank" rel="noreferrer">
                <FiGithub />
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
