import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { PROJECTS } from '../../data/projects'
import styles from './index.module.scss'

export default function Portfolio() {
  return (
    <section>
      <SectionHeading number="02">Portfolio</SectionHeading>

      <div class={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectCard project={project} variant="grid" />
        ))}
      </div>
    </section>
  )
}
