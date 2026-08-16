import SectionHeading from '../components/SectionHeading/SectionHeading'
import TypeSample from '../components/TypeSample/TypeSample'
import styles from './typography.module.scss'

export default function Typography() {
  return (
    <section>
      <SectionHeading number="01">The Typography</SectionHeading>

      <div class={styles.grid}>
        <div class={styles.column}>
          <TypeSample label=".tk-hero">
            <div class="tk-hero" style={{ color: 'var(--color-red)' }}>
              20 t
            </div>
          </TypeSample>

          <TypeSample label=".tk-narrative">
            <div class="tk-narrative">
              quietly, one of the most
              <span class={styles.narrativeBreak}>influential documents in design</span>
            </div>
          </TypeSample>
        </div>

        <div class={styles.column}>
          <TypeSample label=".tk-list-item">
            <div class="tk-list-item">Your weekly screen-time report</div>
          </TypeSample>

          <TypeSample label=".tk-micro">
            <div class="tk-micro" style={{ color: 'var(--color-teal)' }}>
              NEEDS NOTHING ➔
            </div>
          </TypeSample>

          <TypeSample label=".tk-body-mono">
            <p class={`tk-body-mono ${styles.bodyText}`}>
              set aside, on record, for a set time. more than a person can keep up with. fires
              when nothing is wrong.
            </p>
          </TypeSample>
        </div>
      </div>
    </section>
  )
}
