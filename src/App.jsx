import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'
import Work from './pages/Work'

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/work'>
          <Work />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
