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
    <Header logoUrl={logo} altText={'Bitcoin Sprinkles Logo'} />
    <App />
    <Clock />
    <QuotesCarousel interval={10000} />

    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
)
