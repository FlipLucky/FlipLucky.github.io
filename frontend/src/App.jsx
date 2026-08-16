import { Router, Route } from '@solidjs/router'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Typography from './pages/Typography'
import ComponentsPage from './pages/Components'
import Cards from './pages/Cards'
import Forms from './pages/Forms'

export default function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/typography" component={Typography} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/cards" component={Cards} />
      <Route path="/forms" component={Forms} />
    </Router>
  )
}
