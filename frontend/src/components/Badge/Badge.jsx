import styles from './Badge.module.scss'

const COLOR_VARS = {
  red: 'var(--color-red)',
  orange: 'var(--color-orange)',
  teal: 'var(--color-teal)',
  blue: 'var(--color-blue)',
}

export default function Badge(props) {
  return (
    <div class={styles.wrapper}>
      <div class={styles.circle} style={{ '--badge-color': COLOR_VARS[props.color ?? 'blue'] }}>
        {props.value}
      </div>
      <span class={`tk-micro ${styles.label}`}>{props.label}</span>
    </div>
  )
}
