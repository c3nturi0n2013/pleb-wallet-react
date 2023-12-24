import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Clock from './Clock'
import QuotesCarousel from './QuotesCarousel'
import { Analytics } from '@vercel/analytics/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <Clock />
    <QuotesCarousel interval={10000} />
    <Analytics />
  </React.StrictMode>
)
