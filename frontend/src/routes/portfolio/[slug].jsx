import { useParams } from '@solidjs/router'
import { Show } from 'solid-js'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import WasmDemo from '../../components/WasmDemo/WasmDemo'
import TypographySection from '../../components/StyleGuideSections/TypographySection'
import ComponentsSection from '../../components/StyleGuideSections/ComponentsSection'
import CardsSection from '../../components/StyleGuideSections/CardsSection'
import FormsSection from '../../components/StyleGuideSections/FormsSection'
import { getProject } from '../../data/projects'
import styles from './detail.module.scss'

const COLOR_VARS = {
  red: 'var(--color-red)',
  orange: 'var(--color-orange)',
  blue: 'var(--color-blue)',
  teal: 'var(--color-teal)',
}

export default function ProjectDetail() {
  const params = useParams()
  const project = () => getProject(params.slug)

  return (
    <Show
      when={project()}
      fallback={<p class={`tk-body-mono ${styles.notFound}`}>No project at this address.</p>}
    >
      {(currentProject) => (
        <section>
          <SectionHeading number={currentProject().unit}>{currentProject().tag}</SectionHeading>

          <h1 class={styles.title} style={{ color: COLOR_VARS[currentProject().color] }}>
            {currentProject().title}
          </h1>

          <Show when={!currentProject().showcase}>
            <div class={styles.image}>
              <ImagePlaceholder ratio="16 / 9" />
            </div>
          </Show>

          <p class={`tk-body-mono ${styles.body}`}>{currentProject().body}</p>

          <WasmDemo wasm={currentProject().wasm} />

          <Show when={currentProject().showcase === 'styleguide'}>
            <div class={styles.showcase}>
              <TypographySection />
              <ComponentsSection />
              <CardsSection />
              <FormsSection />
            </div>
          </Show>
        </section>
      )}
    </Show>
  )
}
