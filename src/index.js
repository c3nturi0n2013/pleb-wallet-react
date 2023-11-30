import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Globe from './Globe'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <Globe />
  </React.StrictMode>
)
