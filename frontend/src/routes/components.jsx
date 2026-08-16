import SectionHeading from '../components/SectionHeading/SectionHeading'
import StatusItem from '../components/StatusItem/StatusItem'
import Tag from '../components/Tag/Tag'
import Badge from '../components/Badge/Badge'
import Button from '../components/Button/Button'
import styles from './components.module.scss'

export default function ComponentsPage() {
  return (
    <section>
      <SectionHeading number="02">UI Elements</SectionHeading>

      <div class={styles.grid}>
        <div class={styles.column}>
          <span class={`tk-micro ${styles.groupLabel}`}>Status List (Pill Style)</span>
          <div class={styles.list}>
            <StatusItem color="blue">Your weekly screen-time report</StatusItem>
            <StatusItem color="orange">Someone you follow just posted</StatusItem>
          </div>
        </div>

        <div class={styles.column}>
          <span class={`tk-micro ${styles.groupLabel}`}>Technical Tags &amp; Data</span>
          <div class={styles.row}>
            <Tag color="teal">ISA-18.2</Tag>
            <Badge color="blue" value="47" label="Standing" />
            <Button variant="outline" color="red">
              Trigger Alarm
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
