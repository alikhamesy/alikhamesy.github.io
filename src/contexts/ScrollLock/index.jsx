import { createContext, useReducer } from 'react'

const initial = { locks: 0, locked: false }

export const ScrollContext = createContext(initial)

const reducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'LOCK':
      return {
        locks: state.locks + 1,
        locked: true
      }
    case 'UNLOCK':
      if (state.locks > 0) {
        state.locks -= 1
        return {
          locks: state.locks,
          locked: state.locks > 0
        }
      }
      return state
    case 'RESET':
      return { ...initial }
    default:
      return state
  }
}

const ScrollProvider = ({ children }) => {
  const [scroll, dispatch] = useReducer(reducer, initial)

  return (
    <ScrollContext.Provider value={{ scroll, dispatch }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollProvider
