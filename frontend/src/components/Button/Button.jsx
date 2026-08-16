import styles from './Button.module.scss'

const COLOR_VARS = {
  red: 'var(--color-red)',
  orange: 'var(--color-orange)',
  teal: 'var(--color-teal)',
  blue: 'var(--color-blue)',
}

export default function Button(props) {
  const variant = () => props.variant ?? 'outline'
  const colorVar = () => COLOR_VARS[props.color ?? 'teal']

  return (
    <button
      type={props.type ?? 'button'}
      class={styles[variant()]}
      style={{ '--btn-color': colorVar() }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
