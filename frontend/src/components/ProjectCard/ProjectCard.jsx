import { A } from '@solidjs/router'
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder'
import styles from './ProjectCard.module.scss'

const COLOR_VARS = {
  red: 'var(--color-red)',
  orange: 'var(--color-orange)',
  blue: 'var(--color-blue)',
  teal: 'var(--color-teal)',
}

export default function ProjectCard(props) {
  const variant = () => props.variant ?? 'grid'

  return (
    <A
      href={`/portfolio/${props.project.slug}`}
      class={`${styles.card} ${styles[variant()]}`}
      style={{ '--card-color': COLOR_VARS[props.project.color] }}
    >
      <div class={styles.nameplate}>
        <span>Proj {props.project.unit}</span>
        <span>{props.project.tag}</span>
      </div>
      <ImagePlaceholder ratio={variant() === 'carousel' ? '4 / 3' : '16 / 10'} />
      <div class={styles.body}>
        <h3 class={`tk-card-title ${styles.title}`}>{props.project.title}</h3>
        <p class={`tk-body-mono ${styles.summary}`}>{props.project.summary}</p>
      </div>
    </A>
  )
}
