import { memo } from 'react'
// component
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import ForeignExchangeRateDashboard from 'components/ForeignExchangeRateDashboard'
import Home from './Home'
import Me from './Me'
import Navbar from 'react-bootstrap/Navbar'
import Projects from './Projects'

// style
import './App.css'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/foreign-exchange-rate'>
          <ForeignExchangeRateDashboard />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/me'>
          <Me />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
