import styles from './TextField.module.scss'

export default function TextField(props) {
  return (
    <div class={styles.field}>
      <label class={`tk-micro ${styles.label}`}>{props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        class={styles.input}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  )
}
