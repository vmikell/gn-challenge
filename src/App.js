import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
// IMPORT SECTIONS
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import Navigation from './components/pages/Navigation'

const App = () => {
  return (
    <>
      <Router>        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/navigation' component={Navigation} />
        </Switch>
      </Router>
    </>
  )
}

export default App
