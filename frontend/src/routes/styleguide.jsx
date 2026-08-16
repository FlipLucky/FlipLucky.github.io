import TypographySection from '../components/StyleGuideSections/TypographySection'
import ComponentsSection from '../components/StyleGuideSections/ComponentsSection'
import CardsSection from '../components/StyleGuideSections/CardsSection'
import FormsSection from '../components/StyleGuideSections/FormsSection'
import styles from './styleguide.module.scss'

export default function StyleGuide() {
  return (
    <div class={styles.page}>
      <p class={`tk-body-mono ${styles.intro}`}>
        internal reference for the typekit and component set this site is built from — not
        linked from the main nav, kept here for whenever the design system needs revisiting.
      </p>

      <TypographySection />
      <ComponentsSection />
      <CardsSection />
      <FormsSection />
    </div>
  )
}
