import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi"
import { profile } from "../data/portfolio"

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="contact-wrap reveal">
        <div className="contact-heading">
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s build something intelligent.</h2>
          <p>
            Reach out for AI integration, full stack development, dashboards,
            APIs, or machine learning project work.
          </p>
        </div>

        <div className="contact-grid">
          <a
            className="contact-tile"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
            <span>GitHub</span>
            <strong>github.com/harsha-b-dev</strong>
          </a>
          <a
            className="contact-tile"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
            <span>LinkedIn</span>
            <strong>linkedin.com/in/harsha-b-0b1034259</strong>
          </a>
          <a className="contact-tile" href={profile.whatsapp} target="_blank" rel="noreferrer">
            <FiMessageCircle />
            <span>WhatsApp</span>
            <strong>+91 {profile.phone}</strong>
          </a>
          <a className="contact-tile" href={`tel:+91${profile.phone}`}>
            <FiPhone />
            <span>Phone</span>
            <strong>+91 {profile.phone}</strong>
          </a>
          <a className="contact-tile" href={`mailto:${profile.email}`}>
            <FiMail />
            <span>Email</span>
            <strong>{profile.email}</strong>
          </a>
        </div>

        <div className="contact-actions">
          <a className="button button-primary" href={profile.resume} download>
            <FiDownload />
            Download Resume
          </a>
          <a className="button button-secondary" href={profile.whatsapp} target="_blank" rel="noreferrer">
            <FiMessageCircle />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
