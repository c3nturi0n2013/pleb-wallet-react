import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Clock from './Clock'


import Header from './Header'
import logo from './logo.png'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className="content">
      <Header logoUrl={logo} altText={'Bitcoin Sprinkles Logo'} />
      <Clock />
      <App />
      
    </div>
    <footer className="footer">
      Want to donate sats? Donate at ⚡️ bitcoinsprinkles@getalby.com
    </footer>

    
  </React.StrictMode>
)
