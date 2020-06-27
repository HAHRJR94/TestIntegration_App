import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Provider from './context/testContext'

//================================= COMPONENTS =================================//
import Header from './components/Header'
import Dashboard from './components/Dashboard/Dashboard'
import AuthDeposit from './components/tests/AuthDeposit'
import AuthQuery from './components/tests/AuthQuery'
import AuthWireTransfer from './components/tests/AuthWireTransfer'
import AuthWithDrawal from './components/tests/AuthWithDrawal'

function App() {
  return (
    <Provider> 
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/deposit' component={AuthDeposit} />
          <Route exact path='/query' component={AuthQuery} />
          <Route exact path='/transfer' component={AuthWireTransfer} />
          <Route exact path='/with-drawal' component={AuthWithDrawal} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
