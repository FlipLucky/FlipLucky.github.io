import SectionHeading from '../components/SectionHeading/SectionHeading'
import SystemCard from '../components/SystemCard/SystemCard'
import {
  AlarmFloodIcon,
  NuisanceAlarmIcon,
  StandingAlarmIcon,
  ShelvingIcon,
} from '../components/SystemCard/cardIcons'
import styles from './cards.module.scss'

const CARDS = [
  {
    color: 'red',
    unit: '12',
    tag: 'Flood',
    title: 'Alarm Flood',
    description: 'more than a person can keep up with',
    icon: <AlarmFloodIcon />,
  },
  {
    color: 'orange',
    unit: '08',
    tag: 'Nuisance',
    title: 'Nuisance Alarm',
    description: 'fires when nothing is wrong',
    icon: <NuisanceAlarmIcon />,
  },
  {
    color: 'blue',
    unit: '47',
    tag: 'Standing',
    title: 'Standing Alarm',
    description: 'on so long it has become wallpaper',
    icon: <StandingAlarmIcon />,
  },
  {
    color: 'teal',
    unit: '03',
    tag: 'Shelved',
    title: 'Shelving',
    description: 'set aside, on record, for a set time',
    icon: <ShelvingIcon />,
  },
]

export default function Cards() {
  return (
    <section>
      <SectionHeading number="03">System Cards</SectionHeading>

      <div class={styles.grid}>
        {CARDS.map((card) => (
          <SystemCard
            color={card.color}
            unit={card.unit}
            tag={card.tag}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </section>
  )
}
