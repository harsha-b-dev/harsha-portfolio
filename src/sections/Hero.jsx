import {
  FiArrowDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi"
import profileImage from "../assets/profile.png"
import { metrics, profile } from "../data/portfolio"

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="hero-card">
        <div className="hero-avatar-wrap">
          <img src={profileImage} alt="Harsha B" className="hero-avatar" />
        </div>

        <span className="status-pill">AI & Full Stack Developer</span>

        <h1 className="hero-title">
          Hi, I&apos;m <span>{profile.name}</span>
        </h1>

        <p className="hero-role">
          I build AI-powered full stack applications, intelligent APIs, ML
          workflows, and clean user-focused software systems.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects
            <FiArrowDown />
          </a>
          <a className="button button-secondary" href={profile.resume} download>
            <FiDownload />
            Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="hero-metrics">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
