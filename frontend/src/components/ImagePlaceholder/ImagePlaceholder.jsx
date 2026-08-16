import styles from './ImagePlaceholder.module.scss'

export default function ImagePlaceholder(props) {
  return (
    <div class={styles.placeholder} style={{ '--placeholder-ratio': props.ratio ?? '16 / 10' }}>
      <span class={styles.label}>Image Pending</span>
    </div>
  )
}
