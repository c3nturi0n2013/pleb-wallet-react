import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Clock from './Clock'
import QuotesCarousel from './QuotesCarousel'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Header from './Header'
import logo from './logo.png'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className="content">
      <Header logoUrl={logo} altText={'Bitcoin Sprinkles Logo'} />
      <App />
      <Clock />
      <QuotesCarousel className="quotes" interval={10000} />
    </div>
    <footer className="footer">
      Want to donate sats? Donate at ⚡️ bitcoinsprinkles@getalby.com
    </footer>

    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
)
