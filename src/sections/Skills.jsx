import SectionHeader from "../components/SectionHeader"
import { skillGroups } from "../data/portfolio"

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="A practical stack for AI-enabled products."
        copy="Tools and technologies I use across frontend, backend, databases, analytics, and AI integration."
      />

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group glass-card reveal" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="tag-row">
              {group.items.map((skill) => (
                <span className="tag strong-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
