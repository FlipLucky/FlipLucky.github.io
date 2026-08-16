import { useTheme } from '../../context/ThemeContext'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button type="button" class={styles.toggle} onClick={toggleTheme}>
      <span>{theme() === 'light' ? '☀️' : '◐'}</span>
      <span>{theme() === 'light' ? 'DARK MODE' : 'LIGHT MODE'}</span>
    </button>
  )
}
