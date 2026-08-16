import SectionHeading from '../components/SectionHeading/SectionHeading'
import Carousel from '../components/Carousel/Carousel'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import Button from '../components/Button/Button'
import { PROJECTS } from '../data/projects'
import styles from './index.module.scss'

export default function Home() {
  return (
    <section>
      <div class={styles.hero}>
        <span class={`tk-section ${styles.eyebrow}`}>Backend Developer</span>
        <h1 class={`tk-hero ${styles.title}`}>Your Name</h1>
        <p class={`tk-body-mono ${styles.bio}`}>
          placeholder bio — two or three sentences on what you build and what you're into.
          replace this with your actual pitch before this ships.
        </p>
      </div>

      <div class={styles.workHeader}>
        <SectionHeading number="01">Selected Work</SectionHeading>
        <Button href="/portfolio" variant="outline" color="teal">
          Show All
        </Button>
      </div>

      <Carousel>
        {PROJECTS.map((project) => (
          <ProjectCard project={project} variant="carousel" />
        ))}
      </Carousel>
    </section>
  )
}
