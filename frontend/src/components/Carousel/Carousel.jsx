import { createSignal, onMount, onCleanup } from 'solid-js'
import { ChevronDownIcon } from '../Icons/Icons'
import styles from './Carousel.module.scss'

export default function Carousel(props) {
  let trackRef
  const [canPrev, setCanPrev] = createSignal(false)
  const [canNext, setCanNext] = createSignal(false)

  const updateScrollState = () => {
    if (!trackRef) return
    const { scrollLeft, scrollWidth, clientWidth } = trackRef
    setCanPrev(scrollLeft > 4)
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4)
  }

  onMount(() => {
    updateScrollState()
    trackRef.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    onCleanup(() => {
      trackRef.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    })
  })

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
        <button
          type="button"
          class={styles.control}
          disabled={!canPrev()}
          onClick={() => scroll(-1)}
          aria-label="Previous project"
        >
          <ChevronDownIcon class={styles.iconPrev} />
        </button>
        <button
          type="button"
          class={styles.control}
          disabled={!canNext()}
          onClick={() => scroll(1)}
          aria-label="Next project"
        >
          <ChevronDownIcon class={styles.iconNext} />
        </button>
      </div>
    </div>
  )
}
