import { createSignal } from 'solid-js'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import TextField from '../components/TextField/TextField'
import SelectField from '../components/SelectField/SelectField'
import Button from '../components/Button/Button'
import styles from './forms.module.scss'

const PRIORITY_OPTIONS = [
  { value: 'routine', label: 'Routine Monitoring (Needs Nothing)' },
  { value: 'warning', label: 'Warning State (Needs Review)' },
  { value: 'alarm', label: 'Critical Alarm (Needs Action)' },
]

export default function Forms() {
  const [typing, setTyping] = createSignal(false)

  return (
    <section>
      <SectionHeading number="04">Data Entry</SectionHeading>

      <div class={styles.card}>
        <form class={styles.form} onSubmit={(e) => e.preventDefault()}>
          <TextField
            label="System Identifier"
            placeholder="e.g. unit_47_alpha"
            onFocus={() => setTyping(true)}
            onBlur={() => setTyping(false)}
          />

          <SelectField
            label="Priority Level"
            options={PRIORITY_OPTIONS}
            onFocus={() => setTyping(true)}
            onBlur={() => setTyping(false)}
          />

          <div class={styles.footer}>
            <span class={`tk-micro ${styles.status} ${typing() ? styles.statusTyping : ''}`}>
              {typing() ? 'Typing detected...' : 'Awaiting input...'}
            </span>
            <Button type="submit" variant="solid" color="teal">
              Initialize
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
