import styles from './SectionHeading.module.scss'

export default function SectionHeading(props) {
  return (
    <div class={styles.heading}>
      <span class={styles.number}>{props.number}</span>
      <span class={`tk-section ${styles.anchor}`}>{props.children}</span>
    </div>
  )
}
