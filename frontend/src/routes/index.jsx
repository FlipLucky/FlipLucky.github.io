import { A } from '@solidjs/router'
import styles from './index.module.scss'

const SECTIONS = [
  {
    href: '/typography',
    title: 'Typography',
    description: 'the type scale and .tk- classes that drive every label, headline and body copy',
  },
  {
    href: '/components',
    title: 'UI Elements',
    description: 'status pills, technical tags, badges and buttons',
  },
  {
    href: '/cards',
    title: 'System Cards',
    description: 'the four alarm-state cards, driven entirely by data',
  },
  {
    href: '/forms',
    title: 'Data Entry',
    description: 'form fields wired to solid signals instead of inline event handlers',
  },
]

export default function Home() {
  return (
    <section>
      <div class={styles.intro}>
        <span class={`tk-section ${styles.eyebrow}`}>Component Library</span>
        <h1 class={`tk-hero ${styles.title}`}>System Lib</h1>
        <p class={`tk-body-mono ${styles.lede}`}>
          a solidjs port of the industrial tech noir typekit. every section below is a routed
          page, built from the same design tokens.
        </p>
      </div>

      <div class={styles.linkGrid}>
        {SECTIONS.map((s) => (
          <A href={s.href} class={styles.linkCard}>
            <span class={`tk-card-title ${styles.linkTitle}`}>{s.title}</span>
            <span class={`tk-body-mono ${styles.linkDescription}`}>{s.description}</span>
          </A>
        ))}
      </div>
    </section>
  )
}
