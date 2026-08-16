import { A } from '@solidjs/router'
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
  const style = () => ({ '--btn-color': colorVar() })

  if (props.href) {
    return (
      <A href={props.href} class={styles[variant()]} style={style()}>
        {props.children}
      </A>
    )
  }

  return (
    <button type={props.type ?? 'button'} class={styles[variant()]} style={style()} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
