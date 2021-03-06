import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'
import Work from './pages/Work'
import Gallery from './pages/Gallery'
import ScrollLockProvider from './contexts/ScrollLock'
import ScrollContainer from './components/ScrollContainer'

const App = () => {
  return (
    <ScrollLockProvider>
      <ScrollContainer>
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
            <Route path='/gallery'>
              <Gallery />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ScrollContainer>
    </ScrollLockProvider>
  )
}

export default App
