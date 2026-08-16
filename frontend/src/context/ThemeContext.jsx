import { createContext, useContext, createSignal, createEffect, onMount } from 'solid-js'

const STORAGE_KEY = 'tech-noir-theme'

const ThemeContext = createContext()

export function ThemeProvider(props) {
  const [theme, setTheme] = createSignal('dark')

  onMount(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light') setTheme('light')
  })

  createEffect(() => {
    const current = theme()
    if (current === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem(STORAGE_KEY, current)
  })

  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
