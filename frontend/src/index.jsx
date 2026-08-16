/* @refresh reload */
import { render } from 'solid-js/web'
import './styles/global.scss'
import App from './App.jsx'

const root = document.getElementById('root')

render(() => <App />, root)
