// Small inline SVG icons shared across components. Kept as plain functional
// components (not a sprite) since they're few and each takes its own props.

export function ChevronDownIcon(props) {
  return (
    <svg class={props.class} width="1em" height="1em" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg class={props.class} width="1em" height="1em" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export function BellIcon(props) {
  return (
    <svg class={props.class} width="1em" height="1em" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    </svg>
  )
}
