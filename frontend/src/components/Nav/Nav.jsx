import { A } from '@solidjs/router'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Nav.module.scss'

export default function Nav() {
  return (
    <nav class={styles.nav}>
      <A href="/" class={styles.brand} end>
        <span class={styles.brandNumber}>00</span>
        <span class={`tk-section ${styles.brandLabel}`}>Your Name</span>
      </A>

      <div class={styles.links}>
        <A href="/portfolio" class={`tk-section ${styles.link}`} activeClass={styles.linkActive}>
          Portfolio
        </A>

        <ThemeToggle />
      </div>
    </nav>
  )
}
