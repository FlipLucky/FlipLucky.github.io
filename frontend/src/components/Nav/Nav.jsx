import { A } from '@solidjs/router'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { ChevronDownIcon } from '../Icons/Icons'
import styles from './Nav.module.scss'

const NAV_LINKS = [
  { href: '/typography', label: 'Typography' },
  { href: '/components', label: 'Components' },
  { href: '/cards', label: 'Cards' },
  { href: '/forms', label: 'Forms' },
]

const MODULE_LINKS = ['alarms', 'telemetry', 'settings']

export default function Nav() {
  return (
    <nav class={styles.nav}>
      <A href="/" class={styles.brand} end>
        <span class={styles.brandNumber}>00</span>
        <span class={`tk-section ${styles.brandLabel}`}>System Lib</span>
      </A>

      <div class={styles.links}>
        {NAV_LINKS.map((link) => (
          <A href={link.href} class={`tk-section ${styles.link}`} activeClass={styles.linkActive}>
            {link.label}
          </A>
        ))}

        <div class={styles.dropdown}>
          <button type="button" class={`tk-section ${styles.dropdownTrigger}`}>
            Modules
            <ChevronDownIcon class={styles.chevron} />
          </button>
          <div class={styles.menu}>
            <div class={styles.menuList}>
              {MODULE_LINKS.map((name) => (
                <a href="#" class={`tk-body-mono ${styles.menuLink}`}>
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  )
}
