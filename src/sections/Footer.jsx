import { profile } from "../data/portfolio"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© 2026 {profile.name}. AI & Full Stack Developer.</p>
        <p>Built with React, responsive UI, and production-ready structure.</p>
      </div>
    </footer>
  )
}

export default Footer
