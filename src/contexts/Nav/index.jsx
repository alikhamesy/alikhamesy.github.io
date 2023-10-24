import { createContext, useReducer } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const initial = { shouldShowNav: true }

export const NavContext = createContext(initial)

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return state.shouldShowNav ? state : { shouldShowNav: true }
    case 'HIDE':
      return state.shouldShowNav ? { shouldShowNav: false } : state
    case 'RESET':
      return { ...initial }
    case 'TOGGLE':
      return {
        shouldShowNav: !state.shouldShowNav
      }
    default:
      return state
  }
}

const NavProvider = ({ children }) => {
  const [nav, dispatch] = useReducer(reducer, initial)
  console.log(nav)
  return (
    <NavContext.Provider value={{ nav, dispatch }}>
      <Router>
        {nav.shouldShowNav && <Nav />}
        {children}
        {nav.shouldShowNav && <Footer />}
      </Router>
    </NavContext.Provider>
  )
}

export default NavProvider
