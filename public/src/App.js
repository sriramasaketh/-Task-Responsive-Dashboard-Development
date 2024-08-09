import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import './App.css' // Import global styles

const App = () => {
  return (
    <Router>
      <Header />
      <div className='app-container'>
        <Sidebar />
        <div className='main-content'>
          <Switch>
            <Route path='/overview' component={Dashboard} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
