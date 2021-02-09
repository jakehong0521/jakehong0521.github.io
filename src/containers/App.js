import { memo } from 'react'
// component
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
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
