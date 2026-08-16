import styles from './TypeSample.module.scss'

export default function TypeSample(props) {
  return (
    <div class={styles.sample}>
      <span class={`tk-micro ${styles.label}`}>{props.label}</span>
      {props.children}
    </div>
  )
}
