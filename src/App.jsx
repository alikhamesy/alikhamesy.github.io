import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Gallery from './pages/Gallery'
import Store from './pages/Store'
import ScrollLockProvider from './contexts/ScrollLock'
import ScrollContainer from './components/ScrollContainer'
import NavProvider from './contexts/Nav'

const App = () => {
  return (
    <ScrollLockProvider>
      <ScrollContainer>
        <NavProvider>
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
            <Route path='/wuv'>
              <Store />
            </Route>
          </Switch>
        </NavProvider>
      </ScrollContainer>
    </ScrollLockProvider>
  )
}

export default App
