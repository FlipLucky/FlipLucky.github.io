import { ChevronDownIcon } from '../Icons/Icons'
import styles from './Carousel.module.scss'

export default function Carousel(props) {
  let trackRef

  const scroll = (direction) => {
    if (!trackRef) return
    trackRef.scrollBy({ left: direction * trackRef.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div class={styles.carousel}>
      <div class={styles.track} ref={trackRef}>
        {props.children}
      </div>
      <div class={styles.controls}>
        <button type="button" class={styles.control} onClick={() => scroll(-1)} aria-label="Previous project">
          <ChevronDownIcon class={styles.iconPrev} />
        </button>
        <button type="button" class={styles.control} onClick={() => scroll(1)} aria-label="Next project">
          <ChevronDownIcon class={styles.iconNext} />
        </button>
      </div>
    </div>
  )
}
