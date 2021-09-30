import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

let theme = 'light'
document.documentElement.setAttribute('data-theme', theme)
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    theme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
  }
})
