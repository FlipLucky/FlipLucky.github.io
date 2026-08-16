// Small inline SVG icons shared across components. Kept as plain functional
// components (not a sprite) since they're few and each takes its own props.

export function ChevronDownIcon(props) {
  return (
    <svg class={props.class} width="1em" height="1em" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  )
}
