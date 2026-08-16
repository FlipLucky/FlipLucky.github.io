import { BellIcon, CheckIcon } from '../Icons/Icons'
import styles from './cardIcons.module.scss'

export function AlarmFloodIcon() {
  return (
    <div class={styles.grid}>
      {Array.from({ length: 9 }, (_, i) => (
        <div class={i % 2 === 1 ? styles.cellFilled : styles.cell} />
      ))}
    </div>
  )
}

export function NuisanceAlarmIcon() {
  return (
    <div class={styles.relative}>
      <BellIcon class={styles.bell} />
      <div class={styles.checkBadge}>
        <CheckIcon class={styles.checkIcon} />
      </div>
    </div>
  )
}

export function StandingAlarmIcon(props) {
  return (
    <div class={styles.standingWrap}>
      <div class={styles.lines}>
        <div />
        <div />
        <div />
        <div />
      </div>
      <div class={styles.standingCircle}>{props.value ?? '47'}</div>
    </div>
  )
}

export function ShelvingIcon() {
  return (
    <div class={styles.relative}>
      <BellIcon class={styles.bellFaded} />
      <div class={styles.ring}>
        <div class={styles.ringDot} />
      </div>
      <div class={styles.baseline} />
    </div>
  )
}
