import { Show, createSignal, onMount } from 'solid-js'
import styles from './WasmDemo.module.scss'

// Renders nothing when a project has no `wasm` field, and only starts
// fetching the module once this component actually mounts — i.e. only when
// the project detail page itself is opened, never from the carousel or grid
// where a ProjectCard just links here.
//
// TODO: this is a loading-state stub, not a working runtime. A Go/Gio UI
// build needs its own wasm_exec.js loaded first (it defines the `Go` class
// that supplies the real import object) — swap the empty `{}` below for
// `new Go().importObject` once there's a real build to wire up.
export default function WasmDemo(props) {
  const [status, setStatus] = createSignal('idle')

  onMount(() => {
    if (!props.wasm) return
    setStatus('loading')

    WebAssembly.instantiateStreaming(fetch(props.wasm), {})
      .then(() => setStatus('ready'))
      .catch(() => setStatus('error'))
  })

  return (
    <Show when={props.wasm}>
      <div class={styles.frame}>
        <Show when={status() === 'loading'}>
          <p class={`tk-body-mono ${styles.status}`}>loading demo...</p>
        </Show>
        <Show when={status() === 'error'}>
          <p class={`tk-body-mono ${styles.status}`}>demo failed to load.</p>
        </Show>
        <canvas class={styles.canvas} classList={{ [styles.hidden]: status() !== 'ready' }} />
      </div>
    </Show>
  )
}
