import SectionHeader from "../components/SectionHeader"
import { achievements } from "../data/portfolio"

function Achievements() {
  return (
    <section className="section" id="achievements">
      <SectionHeader
        eyebrow="Achievements"
        title="Competitive, project, and enterprise AI exposure."
        copy="Highlights that show leadership, applied machine learning, public project participation, and defence-sector exposure."
      />

      <div className="compact-grid">
        {achievements.map((achievement) => (
          <article className="compact-card glass-card reveal" key={achievement.title}>
            <h3>{achievement.title}</h3>
            <p>{achievement.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Achievements
