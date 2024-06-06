import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'



import Header from './Header'
import logo from './logo.png'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className="content">
      <Header logoUrl={logo} altText={'Bitcoin Sprinkles Logo'} />
      <App />
      
      
    </div>
    <footer className="footer">
      Donate sats at ⚡️ bitcoinsprinkles@getalby.com | Timeline secured on the Permaweb.
    </footer>

    
  </React.StrictMode>
)
