import SectionHeading from '../components/SectionHeading/SectionHeading'
import SystemCard from '../components/SystemCard/SystemCard'
import {
  AlarmFloodIcon,
  NuisanceAlarmIcon,
  StandingAlarmIcon,
  ShelvingIcon,
} from '../components/SystemCard/cardIcons'
import styles from './Cards.module.scss'

const CARDS = [
  {
    color: 'red',
    title: 'Alarm Flood',
    description: 'more than a person can keep up with',
    icon: <AlarmFloodIcon />,
  },
  {
    color: 'orange',
    title: 'Nuisance Alarm',
    description: 'fires when nothing is wrong',
    icon: <NuisanceAlarmIcon />,
  },
  {
    color: 'blue',
    title: 'Standing Alarm',
    description: 'on so long it has become wallpaper',
    icon: <StandingAlarmIcon />,
  },
  {
    color: 'teal',
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
          <SystemCard color={card.color} title={card.title} description={card.description} icon={card.icon} />
        ))}
      </div>
    </section>
  )
}
