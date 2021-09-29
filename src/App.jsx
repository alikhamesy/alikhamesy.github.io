import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
