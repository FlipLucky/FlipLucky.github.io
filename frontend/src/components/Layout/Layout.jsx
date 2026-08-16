import { ThemeProvider } from '../../context/ThemeContext'
import Nav from '../Nav/Nav'
import styles from './Layout.module.scss'

export default function Layout(props) {
  return (
    <ThemeProvider>
      <Nav />
      <main class={styles.main}>{props.children}</main>
    </ThemeProvider>
  )
}
