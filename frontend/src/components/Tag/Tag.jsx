import styles from './Tag.module.scss'

const COLOR_VARS = {
  red: 'var(--color-red)',
  orange: 'var(--color-orange)',
  teal: 'var(--color-teal)',
  blue: 'var(--color-blue)',
}

export default function Tag(props) {
  return (
    <div class={styles.tag} style={{ '--tag-color': COLOR_VARS[props.color ?? 'teal'] }}>
      {props.children}
    </div>
  )
}
