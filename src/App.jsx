import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
