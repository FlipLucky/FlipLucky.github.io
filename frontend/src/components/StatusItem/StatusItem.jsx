import styles from './StatusItem.module.scss'

const COLOR_VARS = {
  red: 'var(--color-red)',
  orange: 'var(--color-orange)',
  teal: 'var(--color-teal)',
  blue: 'var(--color-blue)',
}

export default function StatusItem(props) {
  return (
    <div class={styles.item} style={{ '--status-color': COLOR_VARS[props.color ?? 'blue'] }}>
      <div class={styles.left}>
        <div class={styles.dot} />
        <span class={`tk-list-item ${styles.label}`}>{props.children}</span>
      </div>
    </div>
  )
}
