import { ChevronDownIcon } from '../Icons/Icons'
import styles from './SelectField.module.scss'

export default function SelectField(props) {
  return (
    <div class={styles.field}>
      <label class={`tk-micro ${styles.label}`}>{props.label}</label>
      <div class={styles.wrapper}>
        <select
          class={`tk-list-item ${styles.select}`}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        >
          {props.options.map((opt) => (
            <option value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <div class={styles.chevron}>
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  )
}
