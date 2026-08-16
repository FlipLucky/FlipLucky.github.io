import { useParams } from '@solidjs/router'
import { Show } from 'solid-js'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import WasmDemo from '../../components/WasmDemo/WasmDemo'
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

          <div class={styles.image}>
            <ImagePlaceholder ratio="16 / 9" />
          </div>

          <p class={`tk-body-mono ${styles.body}`}>{currentProject().body}</p>

          <WasmDemo wasm={currentProject().wasm} />
        </section>
      )}
    </Show>
  )
}
