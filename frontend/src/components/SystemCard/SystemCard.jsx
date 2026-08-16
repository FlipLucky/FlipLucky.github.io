import styles from './SystemCard.module.scss'

const COLOR_VARS = {
  red: 'var(--color-red)',
  orange: 'var(--color-orange)',
  blue: 'var(--color-blue)',
  teal: 'var(--color-teal)',
}

export default function SystemCard(props) {
  return (
    <div class={styles.card} style={{ '--card-color': COLOR_VARS[props.color] }}>
      <div class={styles.icon}>{props.icon}</div>
      <h3 class={`tk-card-title ${styles.title}`}>{props.title}</h3>
      <p class={`tk-body-mono ${styles.description}`}>{props.description}</p>
    </div>
  )
}
