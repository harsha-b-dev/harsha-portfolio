import { useState } from "react"
import { FiDownload, FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi"
import { navItems, profile } from "../data/portfolio"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark">HB</span>
          <span className="brand-text">
            <strong>{profile.name}</strong>
            <span>AI systems + full stack</span>
          </span>
        </a>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="nav-link"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            className="icon-button"
            href={profile.github}
            aria-label="Open GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            className="icon-button"
            href={profile.linkedin}
            aria-label="Open LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
          <a className="nav-resume" href={profile.resume} download>
            <FiDownload />
            Resume
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
